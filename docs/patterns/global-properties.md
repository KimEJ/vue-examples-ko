# 전역 속성

한줄요약: 당신은 아마도 [ES 모듈](#ES-모듈)을 사용하고 싶을 것입니다.

Vue 2에서는 다음과 같이 '전역 속성'을 생성할 수 있었습니다:

```js
Vue.prototype.$http = axios.create({ /* ... */ })
```

이렇게 하면 모든 컴포넌트에서 `this.$http`를 통해 접근할 수 있었습니다.

Vue 3에서는 `Vue.prototype`이 없지만 동일한 문제를 해결하기 위한 여러 가지 대안이 있습니다. 이러한 대안들을 '전역'이나 '속성'으로 설명하는 것이 적절한지는 경우에 따라 의문이 될 수 있지만, 원하는 결과는 동일합니다.

## `app.config.globalProperties`

Vue 3에서 가장 직접적인 대체 방법은 `globalProperties`입니다:

```js
const app = createApp({ /* ... */ })

app.config.globalProperties.$http = axios.create({ /* ... */ })
```

이렇게 하면 Vue 2와 마찬가지로 `this.$http`를 사용할 수 있습니다.

이 접근 방식은 일부 공식 Vue 라이브러리에서 사용됩니다. 예를 들어, Vue Router는 `$router`와 `$route`를 노출시킵니다. Vuex에서 제공하는 `mapState`과 같은 매핑 도우미들은 올바른 스토어에 접근하기 위해 `this.$store`를 사용합니다. 이러한 도우미들은 이 페이지에서 설명된 대부분의 다른 기술을 사용하여 구현할 수 없습니다.

그러나 이러한 공식 라이브러리에서 `globalProperties`를 사용하는 것은 모든 곳에서 사용해야 한다는 의미로 해석되어서는 안 됩니다. 이러한 라이브러리는 일반적으로 응용 프로그램 코드에 적용되지 않는 특정 요구 사항이 있습니다.

`globalProperties`를 사용하는 것에는 몇 가지 문제가 있습니다:

1. `setup` 내에서 `this`가 없습니다.
2. 명시적인 정의 없이 컴포넌트에 속성이 존재합니다.

`$` 접두사는 '외부에서 마법 같이 주입된다'는 의미로 잘 이해되지만, 이름이 어디에서 정확히 왔는지 명확히 알려주지 않는다면, 특히 새로운 개발자에게는 혼동을 일으킬 수 있습니다. 그러나 이 기술을 적게 사용하고 자주 사용되는 속성에만 사용한다면, 심각한 이해 장애를 일으키지는 않을 것입니다.

한 사람에게는 '더 명시적'이라고 묘사되는 것이, 다른 사람에게는 '장황한' 또는 '불필요한 보일러플레이트'라고 불릴 수 있습니다. 이러한 용어는 기술의 주관적인 관점을 표현하는 데 사용될 수 있지만, 다른 접근 방식보다 우월함을 객관적으로 입증하는 것은 아닙니다.

특히 이러한 전역 속성은 템플릿에 도우미 함수를 노출하는 데 유용할 수 있습니다. 예를 들어, `globalProperties`를 사용하여 형식 지정 함수를 공유할 수 있습니다:

```js
app.config.globalProperties.$format = {
  currencyUSD (value) {
    return '$' + value.toFixed(2)
  }
}
```

```vue-html
<span>{{ $format.currencyUSD(item.unitPrice) }}</span>
```

이는 Vue 3에서 더 이상 존재하지 않는 *필터*를 대체하는 한 가지 방법입니다.

템플릿에서 `globalProperties`를 사용하는 다른 사용 사례로는 뷰포트 브레이크포인트나 권한 확인이 있을 수 있습니다:

```vue-html
<template v-if="$viewport.isNarrow">
  <admin-menu v-if="$permissions.has('admin')" />
  <user-menu v-else />
</template>
```

이 경우에는 컴포넌트를 사용하는 대체 방법도 있으며, 이에 대해 [나중에](#using-components-instead-of-properties) 논의하겠습니다.

`globalProperties`는 템플릿에서 필요한 것에 아주 적합하며, 옵션 API를 사용하는 경우에도 유용합니다.

그러나 `setup`에서 사용할 수 없다는 점은 주요한 문제이므로 `globalProperties`에 대한 다른 대안을 고려해 보겠습니다.

## 애플리케이션 수준의 `provide` / `inject`

Composition API와 함께 사용하기 위한 표준 솔루션은 애플리케이션에서 `provide`를 사용하고 `setup`에서 `inject`을 사용하는 것입니다. 후자는 일반적으로 전용 도우미 함수로 래핑됩니다. 이 접근 방식은 Vue Router에서 `useRouter` 및 `useRoute`와 같은 함수가 이 방식으로 구현된 것을 볼 수 있습니다.

이전에 언급한 `axios` 예제로 돌아가보겠습니다:

```js
const app = createApp({ /* ... */ })
const http = axios.create({ /* ... */ })

app.provide('http', http)
```

각 컴포넌트에서 `inject('http')`를 직접 사용할 수는 있지만, 구현 세부 사항을 숨기는 래퍼를 만드는 것이 좋습니다:

```js
const useHttp = () => {
  return inject('http')
}
```

실제로는 문자열 키 대신 `Symbol`을 사용하여 이름 충돌이 발생하지 않도록 하는 것이 일반적입니다. 그런 다음 이를 플러그인으로 래핑합니다. 더 현실적인 예제는 다음과 같을 수 있습니다:

```js
// main.js
import { createApp } from 'vue'
import { plugin } from './axiosPlugin.js'

const app = createApp({ /* ... */})
app.use(plugin)
```

```js
// axiosPlugin.js
import { inject } from 'vue'
import axios from 'axios'

const injectionKey = Symbol('http')

export const useHttp = () => inject(injectionKey)

export const plugin = {
  install (app) {
    const http = axios.create({ /* ... */ })
    app.provide(injectionKey, http)

    // 동일한 플러그인에서 `app.config.globalProperties`와 `provide`를 모두 사용하는 것은 일반적입니다.
    app.config.globalProperties.$http = http
  }
}
```

```vue
<script setup>
import { useHttp } from './axiosPlugin.js'

const http = useHttp()
</script>
```

## ES 모듈

위의 기술은 매우 유용할 수 있지만, 많은 경우에는 Vue에 특화된 솔루션을 사용할 필요가 없습니다. ES 모듈은 '전역' 값 공유에 충분히 적합합니다.

`axios` 예제를 살펴보면, 모듈에서 인스턴스를 내보낼 수 있습니다:

```js
// http.js
export default axios.create({ /* ... */ })
```

그런 다음 필요한 곳에서 가져올 수 있습니다:

```js
import http from './http.js'
```

이렇게 하면 의존성이 반대로 바뀝니다. 외부에서 주입되는 값 대신, 의존성은 특정 위치에서 명시적으로 가져온 것입니다. 명시성의 이득은 구성 요소의 재사용성이 약간 감소하는 대신 얻을 수 있습니다.

ES 모듈은 Vue 컴포넌트 외부에서도 잘 작동합니다. `axios` 예제에서는 동일한 `axios` 인스턴스를 Pinia 액션에서도 필요로 할 수 있습니다. 이를 달성할 수 있는 다른 방법도 있지만, ES 모듈을 사용하는 것이 실제 애플리케이션에서 가장 널리 사용되는 방법입니다.

## Pinia를 사용하여 상태 공유

전역으로 상태를 공유하는 것도 유용할 수 있습니다. ES 모듈과 Vue의 반응성 API를 사용하여 직접 공유 상태를 구현할 수 있습니다:

```js
export default reactive({})
```

그런 다음 이 상태 객체가 필요한 모든 곳에서 가져올 수 있습니다.

그러나 공식 Vue 상태 관리 라이브러리인 [Pinia](https://pinia.vuejs.org/)를 사용하면 여러 가지 이점이 있습니다:

- 문서화된 API.
- 개발자들 사이에서 익숙함.
- 일반적인 문제를 피하기 위해 고안된 표준 사용 패턴.
- Vue Devtools와의 통합.
- 타사 플러그인.
- 코드를 직접 유지할 필요가 없습니다.

따라서 반응성 중앙 저장소가 필요한 경우 Pinia를 사용하는 것이 좋습니다.

## 전역 mixin

이는 일반적으로 올바른 접근 방식은 아니지만, `globalProperties` 대신 전역 mixin을 사용할 수도 있습니다. 예를 들어:

```js
const app = createApp({ /* ... */ })

app.mixin({
  computed: {
    $value () {
      // `this`에 접근할 수 있습니다.
      // `computed`를 사용하면 이것이 반응적으로 동작합니다.
    }
  }
})
```

전역 mixin은 응용 프로그램의 모든 컴포넌트 생성에 추가 오버헤드를 발생시키므로 개발 중에만 사용되는 디버깅 요령 이외의 용도로는 일반적으로 적합하지 않습니다.

## 속성 대신 컴포넌트 사용

이전에 템플릿에 뷰포트 브레이크포인트나 권한과 같은 것을 노출하는 데 `globalProperties`를 사용할 수 있다는 것을 보았습니다.

대안으로 이러한 기능을 컴포넌트를 사용하여 구현할 수 있습니다. 이들은 *렌더링 없는 컴포넌트*로, 해당 기준을 충족하는 경우에만 슬롯의 내용을 렌더링합니다. 예를 들어:

```vue-html
<permission-check name="admin">
  <admin-menu />
</permission-check>
```

`v-if`/`v-else`의 동등한 기능이 필요한 경우 두 개의 슬롯을 사용할 수 있습니다:

```vue-html
<permission-check name="admin">
  <template #allowed>
    <admin-menu />
  </template>
  <template #denied>
    <user-menu />
  </template>
</permission-check>
```

`permission-check` 컴포넌트는 여전히 '전역' 데이터에 액세스할 방법이 필요하며, 이를 위해 이 페이지에서 설명된 다른 기술 중 하나를 사용할 것입니다. 이 접근 방식의 핵심은 이 한 컴포넌트만이 전역 데이터가 어떻게 전달되는지 걱정해야 한다는 것이며, 나머지는 그냥 컴포넌트를 사용하기만 하면 됩니다. 데이터가 어떻게 전달되는 방식을 재구성해야 하는 경우에도 이것은 이 한 컴포넌트에만 영향을 미칠 것입니다.

`permission-check`를 Pinia와 함께 구현하는 구체적인 예를 살펴보겠습니다:

```js
import { useAuthStore } from '@/store/auth.js'

// 함수형 컴포넌트를 사용하므로 이것은 사실상 렌더 함수입니다.
// 자체적으로 VNode를 렌더링하지 않고 슬롯에서 생성된 VNode만 렌더링합니다.
const PermissionCheck = ({ name }, { slots }) => {
  const hasPermission = useAuthStore().permissions[name]

  if (hasPermission) {
    return slots.allowed?.() || slots.default?.()
  }

  return slots.denied?.()
}
```

함수형 컴포넌트를 사용하는 것은 필수적이지는 않지만, 이러한 렌더링 없는 컴포넌트를 만드는 데 적합합니다.

## 타사 라이브러리 수정

일부 타사 라이브러리, 특히 Vue 2에서 이식된 라이브러리는 플러그인을 통해 `globalProperties`에 값을 추가하지만 `setup`과의 호환성을 위해 값을 `provide`하지 않습니다.

이를 수정하는 것은 일반적으로 비교적 쉽습니다.

다음과 같은 타사 플러그인이 있다고 가정해 보겠습니다:

```js
// axiosPlugin.js
import axios from 'axios'

export default {
  install (app) {
    app.config.globalProperties.$http = axios.create({ /* ... */ })
  }
}
```

우리는 플러그인이 속성을 생성한 후 `main.js`에서 `provide` 호출을 직접 추가할 수 있습니다:

```js
// main.js
import { createApp } from 'vue'
import axiosPlugin from './axiosPlugin.js'

const app = createApp({ /* ... */ })
app.use(axiosPlugin)
app.provide('http', app.config.globalProperties.$http)
```
