<script setup>
import AccordionExample from './accordion/example.vue'
</script>
# 아코디언

## 아코디언 예제

여기에 제시된 아코디언은 두 개의 컴포넌트로 구성됩니다. `accordion` 컴포넌트는 컨테이너로 작동하며, 확장 또는 축소될 수 있는 `accordion-panel` 컴포넌트가 자식으로 있습니다.

사용법은 다음과 같을 수 있습니다:

<<< @/components/accordion/example.vue

이 예제에서 제공된 3개의 자식은 정적이지만, 적절한 배열을 사용하여 동적으로 생성될 수도 있습니다.

이 예제를 실행하면 다음과 같은 결과를 얻을 수 있습니다:

<live-example>
  <accordion-example />
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqlVE1v2zAM/StcekiK5aufA7ykW3cYdizQ9ZZDHUmOtcqSJ8lpgyD/fZRkO/bidOt2SSyKfHykHrnt3eb5eF2wXtSbGaJ5bsEwW+Q3C8mzXGkLX2LDyS0hSlOuJCRaZdAfT9pmB9E/EnIXSyaOxPm7Mng2CQQwNR4sy3IRW4YngNnSRY3iKswbD82j3Key3Ao2X/S+cm3solc6A/gzBB+ipGXSljiTTqC/y3LPEIs20tTUYT1KlEYXDlzC+bThAxDC2mxguwUOu93ea7bUiMITD/JuPm+jzCatLv1nId9Trpt1+PNb23Vwh9YGzd6wdyic49rbYuIsLyyjQ8i1WnPKhqBZArtST0E5CzmZwDclqAGbMuAUVOK/SKE10hYbYC/IkbKynoXEglALtXXuUAeyEOK0hHswDB7LnI9glWOSFZIT97DP3KYhQcpFiWkWsnQf9Ped0WzFjWW6P4TBKcxvYOu6FLIjzzncb7KlEgOfFpCFLbQMTlDTi+o2DAJIdTFex6JgMEdhcHo6DBiAbFcrwVzCEmgPVUV0Q8AncD2I8DME7mrMQlaltHB5AoNuNnufjuwuS3Vdyt3/4c8OW/HaKqB8DUTExqBk6z6jbGdGKAuTm9kEPdqq8yjGbrAnhqicUbSM69hAdIkHpiM4y1/AKIG9OCGEfHRXlBvE2USQCPbiLe5jRLlmxCKAex5RZNJfpYyvUhvBxXSaB+dnTm0awfllMGCJWJ4jczgN9Tp8bSS4/IF5h6Dkg8xUgYNJD+YhCAz1mBvsNmUJl+zOnQa+WD/yUfVCmv0ssBaUmdUFwxf3Gtrk6HFvNZerxstU0LUY8K09n07RNwK2tQiGpT6HTU3t/AiGQxiGRnmDveO/iCOsp0UPoupqTwbrqjZeKzhlMcoBYz4TwckTWgJp9MYl7fuHi7rSWh1e7uoKHeMrwKWimw6Vuo35Rr2Wa9s/3hukiQ/YgfIeuoGzWK+4HFmV+5Go40NfypGJydNK4xPREWZRODwn7Dq5ThJP5JWBqrzPyQW7mgZToY2z5Yrji2tvEyjaUTVPZ+NLbwzEIhgFVoDLl1LUaARXDZqu20dJJh8S8meSrpERxIVVrbxTn3mfXq2ZToR6rl0DgVpfnsTvWNjZqi5XfnMl7H4BQxxFKw==)

`accordion.vue`의 코드는 다음과 같습니다:

<<< @/components/accordion/accordion.vue

해당하는 `accordion-panel.vue`은 다음과 같습니다:

<<< @/components/accordion/accordion-panel.vue

## Vue 패턴

[provide/inject를 사용한 결합된 컴포넌트](../patterns/coupled-components-with-provide-inject)를 참조하세요.

<!--
## 누락된 기능

## 관련 컴포넌트
-->

## 라이브러리

다양한 라이브러리에는 아코디언 컴포넌트 또는 유사한 효과를 얻을 수 있는 컴포넌트가 포함되어 있습니다. 이러한 라이브러리는 다음과 같습니다:

- Vuetify - [Expansion Panel](https://next.vuetifyjs.com/en/components/expansion-panels/)
- Element Plus - [Collapse](https://element-plus.org/en-US/component/collapse.html)
- Quasar - [Expansion Item](https://quasar.dev/vue-components/expansion-item)
- Ant Design Vue - [Collapse](https://www.antdv.com/components/collapse)
- Headless UI - [Disclosure](https://headlessui.dev/vue/disclosure)
- PrimeVue - [Accordion](https://primefaces.org/primevue/accordion)
- Naive UI - [Collapse](https://www.naiveui.com/en-US/os-theme/components/collapse)
- Oruga - [Collapse](https://oruga.io/components/Collapse.html)

