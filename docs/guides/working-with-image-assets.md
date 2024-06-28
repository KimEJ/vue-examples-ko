---
outline: 'deep'
---
# 이미지 에셋 사용하기

Vue 컴포넌트 템플릿에서 다음과 같은 내용을 가지고 있다고 상상해보겠습니다:

```vue-html
<img src="../assets/image.png">
```

이렇게 작성하면 잘 작동합니다. 그런 다음 동적으로 변경하려고 시도해봅니다:

```vue-html
<img :src="imgSrc">
```

`imgSrc`는 원래 코드에서 가져온 경로를 포함한 문자열입니다. 그런데 왜 작동하지 않을까요? 분명히 둘은 동일한 것이 아닌가요?

동일한 문제를 마주칠 수 있는 다른 방법은 이미지 경로를 `<img>` 대신 컴포넌트에 전달하려고 시도하는 것입니다. 예를 들어:

```vue-html
<!-- 작동합니다 -->
<img src="../assets/image.png">

<!-- 작동하지 않습니다 -->
<my-image-component src="../assets/image.png" />
```

## 에셋과 빌드 도구

Vite와 이전 버전의 Vue CLI(webpack) 모두 이미지와 같은 에셋을 `/src/assets` 폴더에 넣는 규칙을 가지고 있지만, 이러한 도구에서는 해당 폴더에 대한 특별한 처리가 없습니다. 에셋은 다른 종속성과 마찬가지로 JS/TS 코드에 가져와야 합니다. 가져오지 않으면 트리 쉐이킹 과정에서 에셋이 제외되어 최종 빌드 출력물에 포함되지 않습니다.

빌드 과정에서 이미지는 복사되고 이름이 변경됩니다. 따라서 코드에서 `../assets/image.png`를 사용하더라도 실제로 이미지가 프로덕션 빌드에서 위치하는 곳은 `/assets/image.12345678.png`와 같은 해시를 포함한 경로입니다. 이미지를 가져오면 실행 시 사용할 올바른 경로가 제공됩니다.

예를 들어:

```vue
<script setup>
// 프로덕션에서 imgSrc는 문자열 경로('/assets/image.12345678.png') 또는 이미지가 충분히 작은 경우 base64로 인코딩된 데이터 URL일 수 있습니다.
import imgSrc from '../assets/image.png'
</script>

<template>
  <img :src="imgSrc" />
</template>
```

Vite에서 [`base`](https://vitejs.dev/guide/build.html#public-base-path) 경로 또는 Vue CLI에서 [`publicPath`](https://cli.vuejs.org/config/#publicpath)를 구성한 경우 가져온 경로 문자열에 자동으로 추가됩니다.

## 정적 `src`가 작동하는 이유

에셋을 가져와야 하는데, 왜 `<img src="../assets/image.png">`는 제대로 작동할까요?

이것은 특별한 경우입니다. 빌드 도구는 `<img src>`를 찾아서 해당 경로를 자동으로 가져옵니다. 이와 마찬가지로 다른 몇 가지 기본 HTML 요소에 대해서도 동일한 작업을 수행하며, 사용자 정의 컴포넌트와 함께 작동하도록 구성할 수 있습니다. 구체적인 동작은 사용하는 도구에 따라 다릅니다:

- Vite: [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#asset-url-handling)
- Vue CLI / webpack: [Vue Loader](https://vue-loader.vuejs.org/guide/asset-url.html)

하지만 이는 정적 경로만 처리할 수 있습니다. 템플릿에 직접 하드코딩된 정적 경로만 처리할 수 있습니다.

## 동적 경로

### `import`

`import` 문을 사용하면 동적 경로를 사용할 수 없지만, 이미지가 적은 경우에는 문제가 되지 않을 수 있습니다. 이미지를 개별적으로 정적으로 가져올 수 있으며, 다른 코드를 사용하여 적절한 이미지를 선택할 수 있습니다:

```vue
<script setup>
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'

defineProps(['done'])
</script>

<template>
  <img :src="done ? img1 : img2" />
</template>
```

### `import()`

이론적으로 `import()` 함수를 사용하여 이미지를 가져올 수 있지만, 이렇게 하면 필요한 값을 프로미스로 감싸게 됩니다. 작동시킬 수는 있지만 조금 까다로울 수 있습니다:

```vue
<script setup>
import { ref } from 'vue'

const imgSrc = ref()

import('../assets/image.png').then(imageImports => {
  imgSrc.value = imageImports.default
})
</script>

<template>
  <img v-if="imgSrc" :src="imgSrc" />
</template>
```

`import()`의 장점은 경로가 동적일 수 있다는 것입니다. 예를 들어 ``import(`../assets/${name}.png`)``과 같이 사용할 수 있습니다. 다행히도 프로미스를 사용하지 않고 이를 구현할 수 있는 다른 방법이 있습니다. Vite에서는 [`new URL()`](#new-url) 또는 [`import.meta.glob()`](#import-meta-glob)를 사용할 수 있고, Vue CLI / webpack에서는 [`require()`](#require)를 사용할 수 있습니다.

어떤 접근 방식을 사용하든 대략적으로 작동 방식을 이해하는 것이 중요합니다. 이 모든 방법은 빌드 시간에 정적 분석에 의존합니다. 즉, 빌드 도구가 이러한 구조 중 하나를 찾기 위해 코드를 검색하고 경로를 파싱하려고 시도합니다. 이는 순수한 런타임 프로세스가 아닙니다. 모두 어느 정도 동적 경로를 처리할 수 있지만, 도구가 쉽게 처리할 수 있도록 해야 합니다. `import(srcUrl)`과 같이 작성하면 빌드 도구가 `srcUrl`과 일치할 수 있는 파일을 찾을 수 없습니다. `../assets/${name}.png`과 같이 경로의 일부를 정적으로 포함하는 것은 도구가 `../assets` 디렉토리의 모든 `.png` 파일을 가져올 수 있도록 도움이 됩니다.

### `new URL()`

Vite를 사용하는 경우 `new URL()`을 사용하여 동적으로 이미지를 포함할 수 있습니다:

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps(['icon'])

const imgSrc = computed(() => {
  return new URL(`../assets/${props.icon}.svg`, import.meta.url).href
})
</script>

<template>
  <img :src="imgSrc" />
</template>
```

이 접근 방식을 사용할 때 주의해야 할 세 가지 중요한 사항이 있습니다:

1. 별칭(`@`와 같은)으로 경로를 시작할 수 없습니다.
2. 동적 경로는 템플릿 리터럴(역따옴표로 묶인 문자열)을 사용해야 합니다. 다른 형태의 동적 값은 지원되지 않습니다.
3. SSR은 지원되지 않습니다.

자세한 내용은 [Vite 문서](https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url)를 참조하세요.

### `import.meta.glob()`

Vite는 glob을 사용하여 여러 파일을 한 번에 가져올 수 있습니다. 기본적으로 비동기적으로 작동하지만 `eager` 옵션을 사용하여 경로 해결을 동기적으로 만들 수 있습니다:

```vue
<script setup>
const imgUrls = import.meta.glob('../assets/*.png', {
  import: 'default',
  eager: true
})

defineProps(['icon'])
</script>

<template>
  <img :src="imgUrls[`../assets/${icon}.png`]">
</template>
```

`import.meta.glob()`은 소스 파일 이름을 키로 하는 객체를 반환합니다. 별칭은 지원되지만, `./` 또는 `../`로 시작하는 동등한 상대 경로로 확장됩니다.

상대 경로를 속성 키로 사용하는 것은 항상 편리하지는 않지만, 다른 값으로 매핑할 수 있습니다:

```vue
<script setup>
// 다음과 같은 형식의 객체를 사용합니다:
// {
//   "../assets/home.png": "/assets/home.12345678.png",
//   "../assets/logout.png": "/assets/logout.12345678.png"
// }
// 이를 다음과 같은 형식으로 매핑합니다:
// {
//   "home": "/assets/home.12345678.png",
//   "logout": "/assets/logout.12345678.png"
// }
const simplifyKeys = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      // 디렉토리와 확장자를 제거합니다.
      key.replace(/^.*\/|\.png$/g, ''),
      value
    ])
  )
}

const imgUrls = simplifyKeys(
  import.meta.glob('../assets/*.png', {
    import: 'default',
    eager: true
  })
)

defineProps(['icon'])
</script>

<template>
  <img :src="imgUrls[icon]">
</template>
```

더 많은 정보는 [Vite 문서](https://vitejs.dev/guide/features.html#glob-import)를 참조하세요.

Vite 2를 사용하는 경우 `globEager`를 사용해야 합니다. 자세한 내용은 [Vite 2 문서](https://v2.vitejs.dev/guide/features.html#glob-import)를 참조하세요.

### `require()`

Vue CLI와 같은 webpack 기반 빌드 도구를 사용하는 경우 이미지를 가져오기 위해 `require()`를 사용할 수 있습니다. `require()`는 `import()`의 동기 버전과 비슷한 동작을 합니다. 예를 들어:

```js
const imgUrl = require('../assets/' + name + '.png')
// ... 또는 ...
const imgUrl = require(`../assets/${name}.png`)
```

Vue 템플릿 내에서 직접 사용할 수도 있습니다:

```vue
<template>
  <img :src="require(`../assets/${name}.png`)" />
</template>
```

위에서 설명한 다른 접근 방식과 마찬가지로 `require()`는 일부 정적 경로가 필요하므로 webpack이 가능한 일치하는 파일을 찾을 수 있습니다. 다음은 작동하지 않습니다:

```vue
<template>
  <!-- 이렇게 작성하면 작동하지 않습니다. 일부 정적 경로가 있어야 합니다. -->
  <img :src="require(imgUrl)" />
</template>
```

자세한 내용은 [webpack 문서](https://webpack.js.org/guides/dependency-management/)를 참조하세요.

## `/public`

Vite와 Vue CLI 모두 `/public` 폴더를 지원합니다. 이 폴더는 항상 빌드에 포함되어야 하는 파일을 위한 특별한 폴더입니다. 이러한 파일은 어디에서도 가져오지 않지만 항상 빌드에 포함되어야 합니다. 이 파일들은 캐시 무효화를 위해 해시가 추가되지 않으며, 이름은 변경되지 않아 코드에서 사용할 수 있어야 합니다.

`/public`을 사용하는 것은 변경되지 않는 많은 이미지가 있는 경우에 유용할 수 있습니다. 그러나 이에는 고유의 문제가 있습니다.

다음 예제에서는 이미지를 `/public/images`에 넣었다고 가정합니다.

### Vite에서 `/public` 사용하기

Vite를 사용하는 경우 `<img src>`와 같은 태그에 대한 특별한 처리가 `/public`의 파일에도 적용됩니다. 정적 경로를 사용할 수 있지만, 경로를 `/`로 시작해야 합니다:

```vue-html
<!-- Vite에서는 이렇게 작성하면 잘 작동합니다 -->
<img src="/images/image.png">
```

경로에 `/public`을 포함하지 않습니다.

Vite 플러그인은 `/`로 시작하는 파일에 대해 특별한 처리를 수행합니다. 먼저 파일이 `/public` 폴더에 있는지 확인한 다음 파일을 찾지 못한 경우 가져오기로 전환합니다. [`base`](https://vitejs.dev/guide/build.html#public-base-path) 경로를 구성한 경우 Vite는 속성 경로를 해당 경로로 다시 작성합니다.

동적 경로에서 작업하거나 플러그인이 이해하지 못하는 태그의 정적 경로를 사용하는 경우 `base` 경로를 직접 적용해야 합니다.

예를 들어, Vite 구성에서 `base: '/my-app/'`를 설정한 경우 `import.meta.env.BASE_URL`을 사용하여 해당 경로에 액세스할 수 있습니다:

```vue
<script setup>
// `base` 구성 옵션에 액세스할 수 있습니다.
const base = import.meta.env.BASE_URL

defineProps(['name'])
</script>

<template>
  <img :src="`${base}images/${name}.png`" />
</template>
```

자세한 내용은 [Vite 문서](https://vitejs.dev/guide/assets.html#the-public-directory)를 참조하세요.

### Vue CLI에서 `/public` 사용하기

Vue CLI에서 `/public` 폴더를 사용하려면 정적 경로에 대해 [publicPath](https://cli.vuejs.org/config/#publicpath)를 직접 적용해야 합니다.

예를 들어, 다음 코드는 `publicPath`가 `/`로 설정된 경우에만 작동합니다:

```vue-html
<img src="/images/image.png">
```

Vue CLI는 이 경로를 전혀 변경하지 않고 그대로 둡니다.

`publicPath`에는 `process.env.BASE_URL`을 사용하여 `publicPath`에 액세스할 수 있습니다:

```vue
<script setup>
// `publicPath` 구성 옵션에 액세스할 수 있습니다.
const base = process.env.BASE_URL
</script>

<template>
  <img :src="`${base}images/image.png`" />
</template>
```

자세한 내용은 [Vue CLI 문서](https://cli.vuejs.org/guide/html-and-static-assets.html#the-public-folder)를 참조하세요.

