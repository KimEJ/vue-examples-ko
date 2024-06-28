<script setup>
import ProxyExample from './computed-v-model/proxy-example.vue'
</script>
# v-model과 computed

:::info
이 페이지는 아직 Vue 3.4에 추가된 `defineModel` 매크로를 다루지 않았습니다. 여기에서 설명하는 기술은 여전히 작동하지만, 경우에 따라 `defineModel`을 사용하는 것이 더 좋을 수도 있습니다.
:::

'props down, events up'라는 원방향 데이터 흐름의 원칙은 데이터는 소유자에 의해서만 수정되어야 한다는 아이디어의 확장입니다. 이와 같은 아이디어는 Pinia와 같은 경우에도 적용될 수 있으며, 스토어가 데이터의 소유자로 간주되므로 스토어에 의해서만 변경되어야 합니다.

이는 `v-model`과 함께 작업할 때 문제가 됩니다. `v-model`은 값을 직접 수정하려고 시도하기 때문입니다. 이를 해결하기 위해 `computed()`와 `get` 및 `set`을 사용할 수 있습니다.

[Checkbox](../components/checkbox) 및 [Radio](../components/radio) 컴포넌트에 대한 더 완전한 예제가 있지만, `<input>`을 기본으로 축소해 보겠습니다:

```vue-html
<input v-model="inputValue">
```

다음과 같이 작성합니다:

```js
const inputValue = computed({
  get () {
    // 현재 값을 반환합니다.
  },
  set (newValue) {
    // 데이터의 소유자에게 값을 업데이트하라고 알립니다.
  }
})
```

따라서 부모 컴포넌트에서 전달된 prop의 경우 다음과 같이 작성할 수 있습니다:

```js
const inputValue = computed({
  get: () => props.title,
  set: newValue => emit('update:title', newValue)
})
```

`update:propName` 형식의 이벤트 이름을 사용하면 부모에서 `v-model`과 함께 사용할 수 있습니다. 이에 대한 기본 prop 이름은 `modelValue`입니다. 따라서 여기에서 설명하는 기술은 컴포넌트의 부모에서 자식 중 하나로 `v-model`을 '전달'하는 표준 방법입니다.

Pinia 액션을 통해 데이터를 업데이트하는 경우에도 비슷한 접근 방식을 사용할 수 있습니다:

```js
const store = useMyStore()

const inputValue = computed({
  get: () => store.title,
  set: newValue => store.updateTitle(newValue)
})
```

## 라이브러리

이 패턴은 매우 흔해서 컴포저블 라이브러리에서 찾아볼 수 있습니다:

- [VueUse - useVModel](https://vueuse.org/core/useVModel/)
- [vue-composable - useVModel](https://pikax.me/vue-composable/composable/misc/vmodel.html)

## 대안

`v-model`을 사용하지 않고 자식 컴포넌트에서 prop과 이벤트로 분리하는 방법도 있습니다. 예를 들면 다음과 같습니다:

```html
<input :value="value" @input="$emit('update:value', $event.target.value)">
```

이 방법은 유혹적일 수 있지만, 일반적으로 템플릿에 더 많은 로직을 추가하는 것은 좋지 않은 방법으로 간주됩니다. 또한, `<input>` 및 `<select>`와 같은 기본 요소에 `v-model`을 사용하는 경우, 직접 이벤트 리스너를 구현하는 것보다 추가 기능이 제공됩니다. 예를 들면:

- 텍스트 입력에 대해서는 `v-model`이 IME 구성을 위한 특별한 처리를 추가합니다.
- 라디오 버튼에 대해서는 `v-model`이 `value`에 대해 문자열이 아닌 값을 지원합니다. 또한 `checked` 옵션을 관리하는 것이 훨씬 간단해집니다.
- 체크박스에 대해서는 `v-model`이 `true-value`, `false-value` 및 배열 및 집합과 함께 `value`를 사용하는 지원을 추가합니다. 라디오와 마찬가지로 불리언이 아닌 경우 `checked` 옵션을 관리하는 것이 훨씬 간단해집니다.
- `<select>`에 대해서는 `v-model`이 라디오 및 체크박스와 유사한 이점을 제공합니다. `multiple` 속성이 포함되는지에 따라 다릅니다.

이러한 잠재적인 문제는 컴포넌트에 `v-model`을 사용할 때는 적용되지 않으므로, prop 및 이벤트 쌍으로 분리하는 것이 덜 위험하며 유지 관리하기 쉬울 수 있습니다.

## 고급 사용법 - 객체 프록시

드물게 발생하는 시나리오 중 하나는 폼 컴포넌트에 대해 여러 필드 값을 포함하는 큰 객체를 전달하는 것입니다:

<<< @/patterns/computed-v-model/proxy-example.vue

`user-edit-form`에서는 이러한 6개의 속성에 대한 입력을 제공하려고 합니다. 그러나 각 입력에 대해 개별적인 `computed` 값을 작성해야 한다면 매우 귀찮아질 것입니다.

보일러플레이트를 줄이기 위한 한 가지 트릭은 `computed` 대신 JS `Proxy`를 사용하여 속성의 읽기 및 쓰기를 처리하는 것입니다. 여전히 모든 것이 반응적으로 유지되도록 하기 위해 하나의 `computed`만 사용할 것입니다:

<<< @/patterns/computed-v-model/user-edit-form.vue

이 모든 것을 함께 사용하면 다음과 같습니다:

<live-example>
  <proxy-example />
</live-example>

`Proxy`와 함께 작업하는 것에 익숙하지 않다면 약간 복잡해 보일 수 있지만, 대부분의 코드는 재사용 가능하며 유틸리티 함수 뒤에 숨길 수 있습니다. 스토어에서 가져온 객체에 대해 동일한 트릭을 수행하는 유틸리티 함수를 만들 수도 있습니다.

이 접근 방식은 다른 최선의 방법을 위반합니다. 일반적으로 `computed`에서 반환된 객체의 속성을 변경하는 것은 권장되지 않습니다. 그러나 여기에서는 그 규칙을 의도적으로 어길 것입니다. 이러한 속성을 변경하는 것이 이 접근 방식의 전부입니다.

이론적으로는 이 아이디어를 중첩된 객체와 함께 사용할 수 있지만, 모든 관련 사본을 만드는 것은 빠르게 복잡해집니다. 그러한 시나리오에서는 접근 방식을 재고하는 것이 더 좋을 것입니다.

또 다른 가능한 확장은 `computed`과 `get` 및 `set`을 함께 사용하는 이전 전략과 이 접근 방식을 결합하는 것입니다. 이렇게 하면 개별 속성을 교체하거나 전체 객체를 교체할 수 있는 매우 강력한 기능이 제공됩니다:

```js
const model = computed({
  get () {
    return new Proxy(props.modelValue, {
      set (obj, key, value) {
        model.value = { ...obj, [key]: value }
        return true
      }
    })
  },
  set (newValue) {
    emit('update:modelValue', newValue)
  }
})
```

이 버전을 사용하면 `model.value = something` 또는 `model.value.firstName = something`과 같이 할당할 수 있으며, 어느 경우에도 이벤트로 자동 변환됩니다. 이를 통해 `v-model="model"` 및 `v-model="model.firstName"`을 모두 사용할 수 있습니다.
