<script setup>
import { ref } from 'vue'
import BasicToggleSwitch from './toggle-switch/toggle-switch.vue'

const switchValue = ref(true)
</script>
# 토글 스위치

:::info
이 페이지는 아직 Vue 3.4에서 추가된 `defineModel` 매크로를 사용하지 않았습니다. 여기에 설명된 기술은 여전히 작동하지만 일부 경우에는 `defineModel`을 대신 사용하는 것이 더 좋을 수 있습니다.
:::

## 토글 스위치 예제

토글 스위치를 사용하는 방법은 체크박스를 사용하는 것과 매우 유사해야 합니다:

```vue
<template>
  <basic-toggle-switch v-model="switchValue" />
  <pre>바인딩된 값: {{ switchValue }}</pre>
</template>
<script setup>
import { ref } from 'vue'
import BasicToggleSwitch from './toggle-switch.vue'

const switchValue = ref(true)
</script>
```

`v-model`은 부모에서 보유한 데이터 값에 양방향 데이터 바인딩을 달성하기 위해 사용됩니다.

<live-example>
  <basic-toggle-switch v-model="switchValue" />
  <pre>바인딩된 값: {{ switchValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNq9VE2P2jAQ/SvT9LAgkQC72rZKWdSu1HulVr2UHoztEAvHdm0HukL8945tCJ/bSq20EgI8M543771JNtlHY4pVy7MymzhqhfHguG/NdKZEY7T1sAHLK9hCZXUDN1h606UeiRP0q14sJP+yFp7Wu6JieJEJGHhxpqhWDjFi8BuRLYeHANDztuX9mZoM0xSIjwfPGyOJ53gCmMxD09zHrnnqAKu80YzLh1l21HKWwTBdMZZPH3WrGKxCooTN5gR7u50MQ00A7sCyQXZ1/isaJTbGauOQB+OVUPxzOPU2AT/OFpEQOQQAuf5sheWshMB4kIL+yWDFo9aSE+QNsJ2pLaqxB+CN8F3/T3hwve83rWE4bXnAuPlxdCXJhJd6fXiYJvTQpnfl3gBeRQrFIYadcIY/ucHEKg1PJXEODTgxZpalZLnPboDWnC4D8QMK8tzVfaBS0GXXJYWDiUe+xCGcf0JajmrDGUaK03WINOeELhc2uF7Ca8bY+xjUlnGbW8JE60oYFW/vebPL/MpdTZheh/DozS0mrvyxiznpjQaw+xSjd30QChchNqGtddqWYLRQntsYqyT/VYLSisdjzcWi9iWMiz2y0U54oVWJW4EMxSoVekvUPnHgklMttYXx/ahxsWwtmK9LuIvN0KxzMcpyzitt+RVRqqpK1A/dRUMWuINBHyLzRfjlyveosBT1Jh4Z3wXJ9r+Dc0H64ftCpPs+jHnTv25BFPY/PUjqaxRdoba4N1mMMOFwaZ5QQKnp8kz/DlbyCgOjYtxFDpaQudOy9TtLtDmtO/YodLn05QhmLaTMaU1UUDhUd4btnolzi5LXaBQh9K66PS9/ztmXMDFJNu68u7Z4tV5xuxvuL8ZGRS8Qx7eHZ+tZgJdWAWtPlvmfNhaZJU74ag1vsmm2/Q3F9nG4)

이 구현에는 많은 CSS가 포함되어 있지만, 체크박스와 매우 유사합니다:

<<< @/components/toggle-switch/toggle-switch.vue

<!--
## Vue Patterns

## Missing Functionality
-->

## 관련 컴포넌트

개별 토글 스위치는 두 가지 값 사이의 선택을 나타냅니다. 이는 [체크박스](./checkbox) (선택/해제) 또는 토글 버튼 (눌림/눌리지 않음)과 동일합니다.

여러 개의 토글 스위치를 사용하여 여러 선택을 모델링할 수 있으며, 일반적으로 선택된 값이 포함된 `Array` 또는 `Set`으로 나타낼 수 있습니다. 이는 `<select multiple>`과 같은 목록을 사용하여 나타낼 수도 있습니다. 일부 드롭다운은 목록이 축소될 때 선택된 값을 표시하기 위해 태그/칩/필 컴포넌트와 함께 여러 선택을 지원하기도 합니다.

## 라이브러리

다양한 라이브러리에는 토글 스위치 컴포넌트가 포함되어 있습니다:

- Vuetify - [Switch](https://next.vuetifyjs.com/en/components/switches/)
- Element Plus - [Switch](https://element-plus.org/en-US/component/switch.html)
- Quasar - [Toggle](https://quasar.dev/vue-components/toggle)
- Ant Design Vue - [Switch](https://www.antdv.com/components/switch)
- Headless UI - [Switch](https://headlessui.dev/vue/switch)
- PrimeVue - [InputSwitch](https://primefaces.org/primevue/inputswitch)
- Naive UI - [Switch](https://www.naiveui.com/en-US/os-theme/components/switch)
- Oruga - [Switch](https://oruga.io/components/Switch.html)
