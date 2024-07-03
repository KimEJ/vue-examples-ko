<script setup>
import { ref } from 'vue'
import BasicRadio from './radio-group/radio.vue'
import BasicRadioGroup from './radio-group/radio-group.vue'

const radioValue = ref('First')
const options = ['First', 'Second', 'Third']
</script>
# 라디오 그룹

:::info
이 페이지는 아직 Vue 3.4에서 추가된 `defineModel` 매크로를 사용하지 않도록 업데이트되지 않았습니다. 여기에 설명된 기술은 여전히 작동하지만 일부 경우에는 `defineModel`을 대신 사용하는 것이 더 좋을 수 있습니다.
:::

## 라디오 그룹 예제

라디오 그룹 컴포넌트는 여러 라디오 컴포넌트를 감싸는 래퍼 역할을 하며, 래퍼에는 단일 `v-model`이 있습니다:

```vue
<template>
  <basic-radio-group v-model="radioValue">
    <basic-radio value="First" />
    <basic-radio value="Second" />
    <basic-radio value="Third" />
  </basic-radio-group>
  <pre>바인딩된 값: {{ radioValue }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import BasicRadio from './radio.vue'
import BasicRadioGroup from './radio-group.vue'

const radioValue = ref('First')
</script>
```

다음과 같이 보일 것입니다:

<live-example>
  <basic-radio-group v-model="radioValue">
    <basic-radio v-for="option in options" :value="option" />
  </basic-radio-group>
  <pre>바인딩된 값: {{ radioValue }}</pre>
</live-example>

`radio-group.vue`는 `provide`를 사용하여 `radio.vue`와 통신합니다:

<<< @/components/radio-group/radio-group.vue

여기서 `radio.vue`는 `modelValue` 대신 `inject`을 사용하여 특별히 작성되었습니다:

<<< @/components/radio-group/radio.vue

이 예제에서는 `radio` 컴포넌트와 `v-model`의 직접적인 사용을 지원하지 않았습니다. 이 기술은 [라디오 예제](./radio)에서 보여줍니다. 두 가지 기술을 결합하기 위해 `inject`과 함께 기본값을 사용한 다음 해당 값이 설정되었는지 확인할 수 있습니다.

## Vue 패턴

[provide/inject를 사용한 결합된 컴포넌트](../patterns/coupled-components-with-provide-inject)를 참조하세요.

이 `radio-group.vue` 구현에서는 이름 선택 외에도, 자식이 라디오 버튼인 것을 가정하는 내용이 없습니다. 체크박스, 토글 스위치 또는 옵션 목록에서 선택하는 기타 유사한 컴포넌트와 함께 작동하도록 만들 수 있습니다.

이렇게 `computed`를 `inject`하는 것은 업데이트에 대한 일방향 데이터 흐름을 위반한다는 주장이나 적어도 `radio.vue`의 관점에서는 그런 인상을 줄 수 있다는 주장이 있을 수 있습니다. 원한다면 별도의 `ref`와 업데이트 함수를 `inject`할 수도 있습니다.

<!--
## Missing Functionality

## Related Components
-->

## 대안

라디오 그룹을 구현하는 또 다른 방법은 슬롯 대신 옵션을 전달하는 프롭을 사용하는 것입니다. 예를 들면:

```vue
<template>
  <basic-radio-group
    v-model="radioValue"
    :options="['First', 'Second', 'Third']"
  />
</template>
```

라디오 그룹이 이제 자식 컴포넌트를 생성하는 책임을 지기 때문에, 자식과의 통신에 `provide`/`inject` 대신 프롭과 이벤트를 사용할 수 있습니다. 이는 자식의 구현을 단순화하지만, 라디오 그룹이 라디오를 배치하는 책임을 지게 됩니다. 슬롯을 사용하면 라디오와 함께 다른 컨테이너, 구분선 및 텍스트를 포함할 수 있지만, 프롭 기반 접근 방식은 모든 것을 프롭을 통해 전달해야 합니다. 슬롯 기반 접근 방식은 관심사의 분리를 더 잘 나타낼 수 있다고 볼 수 있지만, 추가적인 유연성이 필요하지 않다면 불필요한 복잡성일 수도 있습니다.

두 가지 접근 방식을 동일한 컴포넌트에서 구현할 수 있습니다.

## 라이브러리

라디오 컴포넌트를 포함한 여러 라이브러리가 있습니다:

- Vuetify - [Radio Group](https://next.vuetifyjs.com/en/components/radio-buttons/)
- Element Plus - [Radio Group](https://element-plus.org/en-US/component/radio.html)
- Quasar - [Option Group](https://quasar.dev/vue-components/option-group) (옵션에 대한 프롭 기반 접근 방식 사용)
- Ant Design Vue - [Radio Group](https://www.antdv.com/components/radio)
- Headless UI - [Radio Group](https://headlessui.dev/vue/radio-group)
- Naive UI - [Radio Group](https://www.naiveui.com/en-US/os-theme/components/radio)
<!-- - PrimeVue - [RadioButton](https://primefaces.org/primevue/showcase/#/radiobutton) -->

