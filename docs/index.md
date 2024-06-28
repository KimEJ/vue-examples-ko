<script setup>
import { onMounted } from 'vue'

if (typeof window !== 'undefined') {
  const hash =  window.location.hash

  if (['#component-libraries', '#component-libraries-notes'].includes(hash)) {
    onMounted(() => {
      window.location = './component-libraries' + hash
    })
  }
}
</script>
# 들어가기 앞서

본 문서는 [skirtles-code의 Vue Examples](https://skirtles-code.github.io/vue-examples/)를 번역한 문서입니다.

오역 등이 있을 수 있으니 가능하면 원 문서를 읽기 바랍니다.

# 소개

<div class="info custom-block">

감사합니다. 이 아이디어에 영감을 준 [Vue Land Discord](https://chat.vuejs.org/)와 다른 곳의 분들께 감사드립니다.

최근에는 이곳에 추가하는 대신 [Vue Land FAQ](https://vue-land.github.io/faq/)에 페이지를 추가하고 있으므로, 이와 같은 내용을 더 원하신다면 해당 FAQ를 확인해보시기를 권장합니다.

</div>

이 컴포넌트와 패턴 모음은 Vue에 입문한 사람들을 위한 학습 도구로 제작되었습니다.

주요 목적은 핵심 Vue 3 기능을 결합하여 표준 UI 컴포넌트를 생성하는 방법을 설명하는 것입니다. 사용된 기술은 이러한 시나리오에 대한 관용적인 Vue 사용법을 보여주기 위해 고안되었습니다. 이 예제들은 기능이 매우 제한적이며 실제로 사용할 수 있는 컴포넌트를 만들기 위한 것이 아닙니다.

모든 코드와 마찬가지로, 어떤 경우에는 대안적인 접근 방식이 더 나을 수 있습니다. 각 예제와 함께 제공되는 설명은 일부 단점에 대해 논의하려고 노력합니다.

대부분의 경우, 이러한 컴포넌트의 스타일링과 접근성은 실제 컴포넌트 라이브러리에서 기대할 수 있는 수준에 도달하지 못합니다. 대부분의 개발자들은 스스로 이러한 문제를 해결하지 않기 위해 타사 컴포넌트 라이브러리를 사용하는 것을 선택합니다. Vue 3와 호환되는 일부 라이브러리는 이 페이지 하단에 나열되어 있습니다.

## 예제 컴포넌트

* [체크박스](./components/checkbox)
* [라디오 버튼](./components/radio)
* [토글 스위치](./components/toggle-switch)
* [라디오 그룹](./components/radio-group)
* [아코디언](./components/accordion)
* [탭](./components/tabs)

## 패턴

* [v-model과 함께 사용하는 계산된 속성](./patterns/computed-v-model)
* [전역 속성](./patterns/global-properties)
* [`provide`/`inject`를 사용한 결합된 컴포넌트](./patterns/coupled-components-with-provide-inject)

## 가이드

* [이미지 에셋 사용하기](./guides/working-with-image-assets)
* [Vue 소스 코드 이해하기](./advanced/understanding-the-vue-source-code)

## 연습문제

* Vue 초보자를 위한 [실습 프로젝트](./exercises/)입니다.

## 컴포넌트 라이브러리

* [컴포넌트 라이브러리](./component-libraries) - Vue 3를 위한 가장 인기 있는 컴포넌트 라이브러리 목록입니다.
