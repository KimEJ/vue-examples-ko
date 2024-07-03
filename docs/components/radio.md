---
outline: 'deep'
---
<script setup>
import { ref } from 'vue'
import BasicRadio from './radio/radio.vue'
import BasicRadio2 from './radio/radio-without-input.vue'

const radioValue = ref('First')
const options = ['First', 'Second', 'Third']
</script>
# 라디오

:::info
이 페이지는 아직 Vue 3.4에서 추가된 `defineModel` 매크로를 사용하지 않도록 업데이트되지 않았습니다. 여기에 설명된 기술은 여전히 작동하지만, 일부 경우에는 `defineModel`을 대신 사용하는 것이 더 좋을 수 있습니다.
:::

## 라디오 예제

라디오 컴포넌트의 두 가지 예제를 살펴보겠습니다. 첫 번째 예제는 원시 `<input>` 요소를 래핑하여 라디오 버튼을 생성합니다. 두 번째 예제는 `<input>`을 사용하지 않고 라디오 버튼의 느낌을 주기 위해 CSS를 사용합니다.

두 경우 모두 예제 사용법은 거의 동일합니다:

```vue
<template>
  <basic-radio v-model="radioValue" value="First" />
  <basic-radio v-model="radioValue" value="Second" />
  <basic-radio v-model="radioValue" value="Third" />
  <pre>바인딩된 값: {{ radioValue }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import BasicRadio from './radio.vue'

const radioValue = ref('First')
</script>
```

### `<input>`을 사용한 라디오

<live-example>
  <template v-for="option in options">
    <basic-radio v-model="radioValue" :value="option" />
  </template>
  <pre>바인딩된 값: {{ radioValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqdUk1PwzAM/StWLi3Stt6rbhJDcENCgLhQDqXxWMSahDQpQlX/O05KP4ZgElyS2LGf37PdsnOtV41DlrKsLo3QFmq0Tm9yKSqtjIUWDO6gg51RFUQUGo1f26IW5W3Bhfr6XSWTy6NSaC5LJWsLxvseioNDWHvEOLoSprbRWS6zpK9MNcmwWOlDYZEsgOzZ4y1DMjTLSnE8rHM2geUMGn+TM+CRnfw58w6JI/9X6v1emFmmNrjZKid5H5BCS+2blHddlvgQr3nUyRbsuGunZlGqSjuL/NtAhi5ro3RNDea4ExJvvBW3nlkQEUgQJ+8AGsKbEwZ5CtaQJvJ1C38OzH+NymVHUxtKYiXsWPGSjDp+jJzmJC2dqkZPs5TQkWv/R4mDop7nC1qIz6bi1hnZq1pNYBNX6g/EEt8v9li+Ih8TPan4BxYLmAXPxJxaQS6a8KCnkEQV7If2ow8q/Cocb0jQRe50WJFw56wHS3q0+fi7T5caOVQ=)

<<< @/components/radio/radio.vue

### `<input>`을 사용하지 않은 라디오

<live-example>
  <template v-for="option in options">
    <basic-radio2 v-model="radioValue" :value="option" />
  </template>
  <pre>바인딩된 값: {{ radioValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqdUs2O0zAQfpUhe0gq9Q8kEDVNBSvBGQHiQjik9rS1msTGdkqXKu/OOE6a7GpZib20mfHM9zMzl+iD1vNTjRGL1pYbqR1YdLXeZJUstTIOLmBwBw3sjCohptL4+nSbW8m/5EKq7nW+GFIelUqziqvKOjA+9z0vaoTUIybxJ2msiydZtV4EZuKkwGGpi9whRQDrrcebtc1wmpVKYJFm0QCWRXDy/5Rs8She/HfnVySN4lmt3w7SjDq1wc2tqisRChhcaHyD86ZZL3yJ93z1GU2j+1N7ahdclbp2KB4spJ+yNkpbGrDAnazws4+Si1fWmmhFkCafAFrCr1oaFAycIU+Ua6b+t1f+z6qsamhrPSWW0l0ZP1Jgkx9xrQVZYwNr/HPUwg/Ij+QhvdpJkgmkmyB/3gqANE27eEAZYVgskHvi0NmqlTtIXnTgAWXS2/Aqk0dkTcecBB/sPX2TQp7aj/AJvMitpVPYqjMdAutD2lVns6H0e15IfqR00D1czCKgje6hZbTurkCwXGkUlJkTeLCyVUagYfBSn8GqQgq4Wa1W74an9m5ry+CtPnfp88zKP7Las76EUu3TAeX+4AjsTVf7Wwp3uMY0B6LubDC2xZ0y2MnI+XFv/KUzuFku+WMCXnegtDCHFdHEcRsLacnpHakpFD/eF7Lsesrc7GXF4NUDYeE9LMiPaBM1fwGqtaOz)

<<< @/components/radio/radio-without-input.vue

<!--
## Vue Patterns

## Missing Functionality

## Related Components
-->

## 라이브러리

라디오 컴포넌트를 포함한 다양한 라이브러리가 있습니다:

- Vuetify - [Radio](https://next.vuetifyjs.com/en/components/radio-buttons/)
- Element Plus - [Radio](https://element-plus.org/en-US/component/radio.html)
- Quasar - [Radio](https://quasar.dev/vue-components/radio)
- Ant Design Vue - [Radio](https://www.antdv.com/components/radio)
- PrimeVue - [RadioButton](https://primefaces.org/primevue/radiobutton)
- Naive UI - [Radio](https://www.naiveui.com/en-US/os-theme/components/radio)
- Oruga - [Radio](https://oruga.io/components/Radio.html)

