<script setup>
import TabsExample from './tabs/example.vue'
</script>
# 탭

:::info
이 페이지는 아직 Vue 3.4에서 추가된 `defineModel` 매크로를 사용하지 않도록 업데이트되지 않았습니다. 여기에 설명된 기술은 여전히 작동하지만 일부 경우에는 `defineModel`을 대신 사용하는 것이 더 좋을 수 있습니다.
:::

## 탭 예제

탭 UI를 구성하는 다양한 방법이 있습니다. 이 예제에서는 `tabs`라는 외부 컨테이너와 각 자식에 대한 내부 컨테이너인 `tab` 두 개의 컴포넌트를 사용합니다:

<<< @/components/tabs/example.vue

<live-example>
  <tabs-example />
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqNVstu2zoQ/ZWpurACSLZ7cW8K6NpB20W3LfpY1V3IImWzlUiWpNwEhv+9w4doKnGaGJAtcs7MnHlw6GP2Vsr5YaBZla10o5g0oKkZ5M2Gs14KZeBdrVnzpd5qaJXoYTZfxB2rOHsAfIALsNXCO0DTuDC0l11tKK4AVlsLLQ3adOt0BwwzHV1vsvdMabPJAgDArcEiGsEN5SZoLqLq47Y+U9QhibHIBw5lKxRCGDAO/ywTDIBXS33C8QgMTqczZrVVaIO1zsSL9XpqY7WYBP5Mul/2TKVs3frp0JO1zWviOyuySRUfL/8RXfRyMJQUIJU4MEILULRuDDu4txZOoeK+zBuOnLAwHgFrC8n50HVXo8TScfsekn/7jqKJmq3D2sW3voGjDcVD54e6G4JowzHpGx445TNrtVR0x7ShalZMtK1sLge9z/HNOQNgLeQvUrNXHht8IYUABnCOAAmbQfEJilYxPXl+Zf1NiWL5rZHCGwAY+MgQEB4sga0ihs44obc+OD13iw9t5GA/TqBlxxqaO3kBr0I09mMjuuj+7GganP62tKn3gtDC7ge/Tij424kl7ABNV2uN7WlNxe6cSPa0JlSl/b8djBGRMsTjZsuFB86bOosTF2VQTaTVKD7GcriyY9yh/U4p/E2DqfuJ8GmFI+IGDzPuzN2xw0ON58e5jEcVQ7sU5VaQuzRG3QkDiwda49tkBuBSmzt0pxshKcGduTsfrmRboTB9FbySt6BFxwi8bJrmfysiDBuhvqug7eit27EvJWGKYnCC28bshp470Z6y3d5UOIqW0oN/M2L2FfwbNlyHz321guu6+blTYuCkREMCSbyk1+112zp1T6zcCkxP/0x+siaE8R2yQLR9ltHxubr3naPbduLzorN7dKzhuKlqwgZdwX+oZp9lEDeD0jYsKRiOUOX2+lrtGC9VyFbIVY9bIV+vx/zFYNDkhTCqvTj8JZPt67ZxUXm90KtPoiPBMdASc5HSiYLrhJXtzufYvtxRmO+nusuG2nbidwX1YIT3i6PDdnV60Tx1zzD+A40XIPhX3iNJd+WcbxojPj161+AlIO2VQmjLOP1oV7kf/PYkV+P8U/TXgBFgUxk1UBzKbqjeSUR8Ngrzl8y+0XSc1+tA8P5Nk2Dd7DnfaykDxz53PAuYuU2rmXoaZ1iR3hInZ9Av4uWVZCg/Y58xsMP/Eu9nk6XT9Ty/k+l1cWJlpz/lxGh7)

`title` 속성은 버튼에 표시할 텍스트를 전달하는 데 사용되며, 콘텐츠를 위한 슬롯이 있습니다.

`tabs.vue`의 코드는 길어 보이지만, 그 중 많은 부분은 CSS입니다:

<<< @/components/tabs/tabs.vue

`tab.vue`에는 많은 코드가 필요하지 않습니다:

<<< @/components/tabs/tab.vue

## Vue 패턴

[provide/inject를 사용한 결합된 컴포넌트](../patterns/coupled-components-with-provide-inject)를 참조하세요.

<!--
## 누락된 기능

## 관련 컴포넌트
-->

## 라이브러리

다음과 같은 다양한 라이브러리에는 탭 컴포넌트가 포함되어 있습니다:

- Vuetify - [Tabs](https://next.vuetifyjs.com/en/components/tabs/)
- Element Plus - [Tabs](https://element-plus.org/en-US/component/tabs.html)
- Quasar - [Tabs](https://quasar.dev/vue-components/tabs) 및 [Tab Panels](https://quasar.dev/vue-components/tab-panels)
- Ant Design Vue - [Tabs](https://www.antdv.com/components/tabs)
- Headless UI - [Tabs](https://headlessui.dev/vue/tabs)
- PrimeVue - [TabView](https://primefaces.org/primevue/tabview)
- Naive UI - [Tabs](https://www.naiveui.com/en-US/os-theme/components/tabs)
- Oruga - [Tabs](https://oruga.io/components/Tabs.html)

