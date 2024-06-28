---
outline: 'deep'
---
<script setup>
import { ref } from 'vue'
import BasicCheckbox from './checkbox/checkbox.vue'
import BasicCheckbox2 from './checkbox/checkbox-without-input.vue'

const checkboxValue = ref(true)
</script>
# 체크박스

:::info
이 페이지는 아직 Vue 3.4에 추가된 `defineModel` 매크로를 사용하지 않고 업데이트되지 않았습니다. 여기에 설명된 기술은 여전히 작동하지만, 일부 경우에는 `defineModel`을 대신 사용하는 것이 더 좋을 수 있습니다.
:::

## 체크박스 예제

체크박스 컴포넌트의 두 가지 예제를 살펴보겠습니다. 첫 번째 예제는 원시 `<input>` 요소를 감싸서 체크박스를 생성합니다. 두 번째 예제는 `<input>`을 사용하지 않고 체크박스의 모습을 CSS로 표현합니다.

두 경우 모두 예제 사용법은 거의 동일합니다:

```vue
<template>
  <basic-checkbox v-model="checkboxValue" />
  <pre>바인딩된 값: {{ checkboxValue }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import BasicCheckbox from './checkbox.vue'

const checkboxValue = ref(true)
</script>
```

중요한 부분은 `v-model`을 사용하여 양방향 바인딩을 생성하는 것입니다.

### `<input>`을 사용한 체크박스

<live-example>
  <basic-checkbox v-model="checkboxValue" />
  <pre>바인딩된 값: {{ checkboxValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNp9ksFugzAMhl/FygUqteWOaKV12n2nXcYOlLhbNEiykLBNiHefk7SUdlVv2LH9f/7NwB60XvcOWc6KrjZCW+jQOr0tpWi1MhYGMHiAEQ5GtZBQaTI97apO1I8fWH/u1c+xYJ1dZP1saihlrWRnoT6mX6rGIWz86NQah4tSFlnUJ2UKLLa6qSxSBFDs/cjVqRn6Vas4NpuSXcwrGWSxXhvc7pSTHHr/kMMwXEmPY5H5Kq87abEl+wd/z5hatdpZ5FfunJbVRumOluR4EBKffZQOni/QBw4i8wkgI76cMMhz8HYsY9L+aqrYKdVgRVMBxlKOZNVJAFthp/lPFHTpa+I0p13ys0byNmsJLhDxZoKPSO9oIV2caawzMi6wPk8KCIGNrIBU4ndwCvnU6InSGwhLmBXPNrl3dC768EGfQhJqsGN2czr31Y+AvGSxN4vN89uOfw4jBwg=)

<<< @/components/checkbox/checkbox.vue

### `<input>`을 사용하지 않은 체크박스

<live-example>
  <basic-checkbox2 v-model="checkboxValue" />
  <pre>바인딩된 값: {{ checkboxValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqFUUuP2jAQ/ivT9JAgAaGPrUoKqKXqvademh6CPQSLxHZth0Kj/PeO8yDQXe0qiuQZf/4eM3XwRev5qcIgCVaWGaEdWHSV3qRSlFoZBzUY3EMDe6NKCAkaXq+2mRXs6wHZcafOPWAe33U9Nz1IJVPSOmB9+0dWVAhrTx05U+Eklau40ydlKhyWusgcUgWw2nnK2fAYTrNScSzWaXDHlwYQd3htcLNVleRw8hcJ1PV/0k2zij3K6161gmnwyPwTg+miaKO0pQgc90Lid19FtVdvvbUqpOsbQDF/V8IgT8CHnXZNd9GE2CpVYEaRAZpUNjSIQQBL4a7836iw0c+w0pycJqNG+OvmiVN5Xvi5RhNYbzp1TxM98W4Kr9oI87FHTOThuUVwcWoP3RFYkVlLa6BZ0fCToeyH7fOO5BQvgM+sEOxIkM7puLG4Y75ZRqtu3YXyWKY0curM/fbbVDtlOJoE3ugzWFUIDq+Xy+Wn8WpmMi4q2yL69nlmxV8h82SAUKu9OqDID46gH3rsH8Hd4VrTTEh6iJTscK8M3tvoLSwW7NZCT7Og7y35pP8lJ7RGh5KshGFbc2FpGhfCFYod78w+9GxlZnIhE3jX185k0pLDMgGjHE0ymr1/4JhPbpN9HILRsv2IN0HzD5tuZjs=)

<<< @/components/checkbox/checkbox-without-input.vue

## Vue 패턴

컴포넌트에서 `v-model`을 구현하려면 `modelValue`라는 prop과 `update:modelValue`라는 이벤트를 정의해야 합니다. 이 쌍은 부모 컴포넌트가 `v-model` 지시문을 사용할 때 자동으로 사용됩니다. 현재 값은 prop을 통해 전달됩니다. 체크박스 컴포넌트가 해당 값을 변경해야 할 때는 새 값과 함께 이벤트를 발생시킵니다.

첫 번째 예제는 원시 `<input>` 요소를 사용하므로 템플릿에서 `v-model`을 사용할 수 있습니다. 그러나 prop에 직접 바인딩할 수는 없습니다. prop을 다시 할당하면 부모 컴포넌트가 업데이트되지 않기 때문입니다. 대신 `computed`와 `get`/`set` 쌍을 사용하여 prop의 값을 `v-model`로 전달합니다. `get`은 prop을 그대로 전달하고, `set`은 관련 이벤트를 발생시킵니다.

`<input>`을 사용하지 않고도 `<input>`에 `v-model`을 사용하지 않고도 구현할 수 있습니다. 다음과 같이 사용할 수 있습니다:

```vue-html
<input
  type="checkbox"
  :checked="modelValue"
  @change="$emit('update:modelValue', !modelValue)"
>
```

이는 두 번째 예제에서 구현된 방식과 개념적으로 매우 유사합니다. 두 번째 예제는 `<input>`을 사용하지 않으므로 체크박스의 모양을 변경하기 위해 CSS 클래스를 사용합니다. `click` 이벤트는 위의 코드에서 `change` 이벤트와 유사한 역할을 합니다.

`<input>`을 사용하는 경우에는 클릭할 때 표시된 값이 자동으로 변경됩니다. 이는 좋은 일처럼 들릴 수 있지만, Vue의 제어 밖에서 변경이 발생하기 때문에 그렇지 않습니다. 일반적으로 렌더링 업데이트는 Vue에 의해 제어되어야 하며 컴포넌트는 prop의 값을 정확하게 렌더링해야 합니다. 체크박스를 클릭할 때 부모 컴포넌트가 해당 이벤트를 무시하고 체크박스를 변경하지 않을 수 있어야 합니다. 이는 일반적으로 필요하지 않지만, 부모 컴포넌트에서 값의 '진실의 원천'을 올바르게 업데이트하지 않는 경우 문제를 신속하게 찾는 데 매우 유용할 수 있습니다. 모든 클릭에 대해 자동으로 업데이트되는 체크박스는 디버깅 중에 실제로 매우 도움이 되지 않습니다.

이 문제는 초보자가 종종 하는 일반적인 실수와 유사합니다. 컴포넌트가 prop을 내부 상태로 복사하고 watcher를 사용하여 두 가지를 동기화하는 경우입니다. 아이디어는 상태를 사용하여 내부 `v-model`에 바인딩할 수 있도록하는 것으로, prop을 변경할 수 없는 제한을 우회합니다. 이 접근 방식이 정당화될 수 있는 드문 예외 상황이 있을 수 있지만, 마지막 수단으로 간주되어야 합니다. 다시 말해, 문제의 핵심은 부모 컴포넌트가 이벤트를 무시할 수 있으므로 watcher가 트리거되지 않고 내부 상태가 prop과 동기화되지 않을 수 있다는 것입니다.

## 누락된 기능

이 체크박스 컴포넌트는 `v-model`을 통해 `true`/`false` 값을 바인딩하는 것만 지원합니다. 실제 체크박스 컴포넌트는 일반적으로 훨씬 더 유연합니다. Vue의 기본 지원을 사용하면 `true-value`와 `false-value`를 구성할 수 있으며, 동일한 컬렉션에 여러 체크박스를 바인딩하는 데 사용할 수 있는 `Array` 및 `Set` 값을 지원합니다.

첫 번째 예제는 원시 `<input>`을 사용하므로 몇 가지 접근성 기능을 무료로 제공합니다. 기본 키보드 지원이 있으며, 보조 기술 및 HTML에서 의미 정보를 구문 분석하는 기타 도구에서 이해할 수 있습니다. 두 번째 예제에는 이러한 기능이 없습니다.

실제 체크박스 컴포넌트에는 일반적으로 `<label>`을 지원해야 합니다. 다른 요소도 필요할 수 있습니다. 이 예제에서는 주변 `<div>` 요소가 다소 중복되어 있지만, 복잡성이 증가함에 따라 어떤 종류의 래퍼가 필요합니다.

래퍼 `<div>`는 부모에서 지정된 추가 속성을 `$attrs`를 통해 상속받습니다. 이는 `class`와 같은 경우에는 원하는 경우일 수 있지만, `disabled` 및 `indeterminate`와 같은 속성은 `<input>`에 적용할 수 없습니다. `$attrs`의 대상 요소는 `inheritAttrs`를 사용하여 변경할 수 있지만, 어느 방식이든 일부 속성은 prop으로 추출되어 다른 요소에 적용되어야 합니다.

## 관련 컴포넌트

개별 체크박스는 두 가지 값 사이의 선택을 나타냅니다. 이는 [토글 스위치](./toggle-switch) (왼쪽/오른쪽) 또는 토글 버튼 (눌림/눌리지 않음)과 동일합니다.

여러 체크박스를 사용하여 여러 선택을 모델링할 수 있으며, 일반적으로 선택된 값이 포함된 `Array` 또는 `Set`을 사용하여 바인딩할 수 있습니다. 이는 `<select multiple>`과 같은 목록을 사용하여 나타낼 수도 있습니다. 일부 드롭다운은 목록이 축소될 때 선택된 값을 표시하기 위해 태그/칩/필 구성 요소와 함께 여러 선택을 지원합니다.

## 라이브러리

다양한 라이브러리에는 체크박스 컴포넌트가 포함되어 있습니다. 예를 들어:

- Vuetify - [체크박스](https://next.vuetifyjs.com/en/components/checkboxes/)
- Element Plus - [체크박스](https://element-plus.org/en-US/component/checkbox.html)
- Quasar - [체크박스](https://quasar.dev/vue-components/checkbox)
- Ant Design Vue - [체크박스](https://www.antdv.com/components/checkbox)
- PrimeVue - [체크박스](https://primefaces.org/primevue/checkbox)
- Naive UI - [체크박스](https://www.naiveui.com/en-US/os-theme/components/checkbox)
- Oruga - [체크박스](https://oruga.io/components/Checkbox.html)

`v-model`을 `computed`를 사용하여 프록시하는 것은 매우 일반적이어서 구성 요소 라이브러리에 포함되어 있습니다:

- [VueUse - useVModel](https://vueuse.org/core/useVModel/)
- [vue-composable - useVModel](https://pikax.me/vue-composable/composable/misc/vmodel.html)

