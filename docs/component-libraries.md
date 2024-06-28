---
description: 인기있는 Vue 3 컴포넌트 라이브러리
---
# 컴포넌트 라이브러리

아래는 **Vue 3**용으로 가장 널리 사용되는 컴포넌트 라이브러리 목록입니다.

## 스타일이 적용된 Vue 컴포넌트

이러한 라이브러리들은 스타일이 적용된 사용 준비가 완료된 Vue 컴포넌트의 큰 컬렉션을 제공합니다.

월간 다운로드 수는 라이브러리의 품질을 판단하는 방법으로 신뢰해서는 안됩니다. 특히:
* 이러한 라이브러리 중 일부는 다른 라이브러리보다 훨씬 오래되었으며, 역사적 관성의 이점을 얻을 수 있습니다.
* 일부 라이브러리는 Vue 2 버전의 라이브러리와 동일한 npm 패키지 이름을 사용했지만, 다른 라이브러리는 그렇지 않았습니다. 테이블의 마지막 열은 월간 다운로드에 Vue 2도 포함되는지 여부를 나타내려고 시도합니다.

<style>
img[src^="https://img.shields.io"] {
  display: inline-block;
  vertical-align: middle;
}

td > img {
  display: inline-block;
}
</style>
<script setup>
const cross = './images/cross.svg'
const tick = './images/tick.svg'
</script>

<table>
  <thead>
    <tr><th>이름</th><th>문서</th><th>npm</th><th>Vue 2?</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Vuetify<sup><a href="#component-libraries-notes">1</a></sup></td>
      <td><a href="https://vuetifyjs.com/en/introduction/why-vuetify/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/vuetify" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/vuetify?color=%235588cc&label="></td>
      <td><img :src="tick" alt="확인 표시">&nbsp;예</td>
    </tr>
    <tr>
      <td>Element Plus</td>
      <td><a href="https://element-plus.org/en-US/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/element-plus" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/element-plus?color=%235588cc&label="></td>
      <td><a href="https://www.npmjs.com/package/element-ui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/element-ui?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>PrimeVue</td>
      <td><a href="https://primevue.org/installation" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/primevue?color=%235588cc&label="></td>
      <td><img :src="tick" alt="확인 표시">&nbsp;예</td>
    </tr>
    <tr>
      <td>Quasar</td>
      <td><a href="https://quasar.dev/components" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/quasar" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/quasar?color=%235588cc&label="></td>
      <td><img :src="tick" alt="확인 표시">&nbsp;예</td>
    </tr>
    <tr>
      <td>Ant Design Vue</td>
      <td><a href="https://www.antdv.com/components/overview/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/ant-design-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/ant-design-vue?color=%235588cc&label="></td>
      <td><img :src="tick" alt="확인 표시">&nbsp;예</td>
    </tr>
    <tr>
      <td>Vant<sup><a href="#component-libraries-notes">2</a></sup></td>
      <td><a href="https://vant-ui.github.io/vant" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/vant" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/vant?color=%235588cc&label="></td>
      <td><img :src="tick" alt="확인 표시">&nbsp;예</td>
    </tr>
    <tr>
      <td>Naive UI</td>
      <td><a href="https://www.naiveui.com/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/naive-ui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/naive-ui?color=%235588cc&label="></td>
      <td><img :src="cross" alt="가위표">&nbsp;아니요</td>
    </tr>
    <tr>
      <td>bootstrap-vue-next<sup><a href="#component-libraries-notes">3</a></sup></td>
      <td><a href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/bootstrap-vue-next" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/bootstrap-vue-next?color=%235588cc&label="></td>
      <td><img :src="cross" alt="가위표">&nbsp;아니요</td>
    </tr>
    <tr>
      <td>Vuestic UI</td>
      <td><a href="https://ui.vuestic.dev/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/vuestic-ui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/vuestic-ui?color=%235588cc&label="></td>
      <td><img :src="cross" alt="가위표">&nbsp;아니요</td>
    </tr>
    <tr>
      <td>Flowbite Vue<sup><a href="#component-libraries-notes">4</a></sup></td>
      <td><a href="https://flowbite-vue.com/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/flowbite-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/flowbite-vue?color=%235588cc&label="></td>
      <td><img :src="cross" alt="가위표">&nbsp;아니요</td>
    </tr>
    <tr>
      <td>Oruga UI<sup><a href="#component-libraries-notes">5</a></sup></td>
      <td><a href="https://oruga.io/documentation/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/@oruga-ui/oruga-next" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/@oruga-ui/oruga-next?color=%235588cc&label="></td>
      <td><a href="https://www.npmjs.com/package/@oruga-ui/oruga" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/@oruga-ui/oruga?color=%235588cc&label="></td>
    </tr>
  </tbody>
</table>

<div id="component-libraries-notes"></div>

**참고 사항:**

1. Vuetify 3은 Vue 3와 호환됩니다. Vuetify 3.0.0은 2022년 10월 말에 출시되었으며, 이전 버전과 비교하여 아직 몇 가지 중요한 기능이 누락되어 있습니다.
2. Vant는 모바일 브라우저를 대상으로 하며, 일반적으로 데스크톱 애플리케이션에는 적합하지 않습니다.
3. bootstrap-vue-next는 bootstrap-vue-3로 시작되었으며, <a href="https://www.npmjs.com/package/bootstrap-vue-3" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/bootstrap-vue-3?color=%235588cc&label=">입니다. 이것은 매우 인기 있는 Vue 2 컴포넌트 라이브러리인 BootstrapVue의 독립적인 재작성이었습니다. 2022년 말에 BootstrapVue는 Vue 3 호환성 작업을 발표했습니다. <https://bootstrap-vue.org/vue3>에서 bootstrap-vue-3은 bootstrap-vue-next로 이름이 변경되었습니다.
4. Flowbite Vue는 Flowbite를 사용하여 구축된 Vue 컴포넌트를 제공합니다. Flowbite 자체는 Bootstrap이나 Buefy와 개념적으로 유사하며, 프레임워크에 독립적입니다.
5. Vue 2 라이브러리인 Buefy: <a href="https://buefy.org/" target="_blank" rel="noopener noreferrer">문서</a>, <a href="https://www.npmjs.com/package/buefy" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/buefy?color=%235588cc&label=">는 Vue와 Bulma를 결합합니다. 해당 프로젝트의 주요 유지 관리자는 Oruga UI도 유지 관리하며, Vue 3에서 Buefy의 후속으로 Oruga를 사용하는 것을 권장합니다.

## 스타일이 적용되지 않은 Vue 컴포넌트

이러한 라이브러리들은 스타일이 적용되지 않은 Vue 컴포넌트를 제공합니다. 이를 사용하여 직접 컴포넌트 라이브러리를 구축할 수 있습니다.

<table>
  <thead>
    <tr><th>이름</th><th>문서</th><th>npm</th><th>Vue 2?</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Headless UI</td>
      <td><a href="https://headlessui.dev/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/@headlessui/vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/@headlessui/vue?color=%235588cc&label="></td>
      <td><img :src="cross" alt="가위표">&nbsp;아니요</td>
    </tr>
    <tr>
      <td>Radix Vue</td>
      <td><a href="https://www.radix-vue.com/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/radix-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/radix-vue?color=%235588cc&label="></td>
      <td><img :src="cross" alt="가위표">&nbsp;아니요</td>
    </tr>
  </tbody>
</table>

또한 이 두 라이브러리를 사용하는 예제 Vue 컴포넌트 컬렉션도 있습니다:

* [Tailwind UI](https://tailwindui.com/) - Headless UI 및 Tailwind CSS.
* [shadcn-vue](https://www.shadcn-vue.com/) - Radix Vue.

## CSS 프레임워크

여기에 나열된 CSS 프레임워크는 특정 Vue에 종속되어 있지 않습니다.

daisyUI는 Tailwind CSS를 확장하여 컴포넌트 작성에 유틸리티 클래스를 추가합니다.

Flowbite는 개념적으로 Bootstrap이나 Bulma와 유사하지만, Tailwind CSS를 사용하여 구축되었습니다.

<table>
  <thead>
    <tr><th>이름</th><th>문서</th><th>npm</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Tailwind CSS</td>
      <td><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/tailwindcss" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/tailwindcss?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>Bootstrap</td>
      <td><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/bootstrap" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/bootstrap?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>Bulma</td>
      <td><a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/bulma" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/bulma?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>daisyUI</td>
      <td><a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/daisyui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/daisyui?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>Flowbite</td>
      <td><a href="https://flowbite.com/" target="_blank" rel="noopener noreferrer">문서</a></td>
      <td><a href="https://www.npmjs.com/package/flowbite" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm 월간 다운로드 수" src="https://img.shields.io/npm/dm/flowbite?color=%235588cc&label="></td>
    </tr>
  </tbody>
</table>

이러한 라이브러리들은 Vue와 함께 사용할 수 있지만, 일부는 상호 작용성을 추가하기 위해 자체 JavaScript 코드를 포함하고 있어 Vue와 충돌할 수 있습니다. 대신 직접 상호 작용성을 구현하거나 [스타일이 적용된 Vue 컴포넌트](#styled-vue-components)에서 나열된 Vue 통합 중 하나를 사용해야 할 것입니다.
