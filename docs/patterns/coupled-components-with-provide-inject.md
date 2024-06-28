# `provide`/`inject`을 사용한 커플된 컴포넌트

Vue에서 컴포넌트 간의 통신에는 여러 가지 방법이 있습니다. `provide`/`inject` 메커니즘은 그 중 하나이며, 일반적으로 잘 이해되지 않습니다.

`provide`와 `inject`를 '장거리 프롭스' 또는 '의존성 주입'으로 설명하는 것이 일반적입니다. 이러한 설명은 유용한 생각 방식이지만, 주요 사용 사례 중 하나는 서로 커플된 컴포넌트 간의 통신입니다.

'커플(couple)'이라는 용어는 설계의 비판으로 자주 사용되지만, 특정 컴포넌트가 다른 특정 컴포넌트의 자식(또는 하위 자손)이어야 하는 경우에는 커플된 컴포넌트가 의미가 있는 많은 경우가 있습니다. 몇 가지 예시:

1. [아코디언](../components/accordion)은 종종 부모 컨테이너와 확장 가능한 자식 패널을 사용하여 구현됩니다.
2. [탭](../components/tabs) 컴포넌트는 탭 버튼과 콘텐츠 컨테이너를 위한 여러 개의 작은 컴포넌트로 분할될 수 있습니다. 이들은 모두 올바른 내용이 표시되도록 통신해야 합니다.
3. 라디오 그룹 또는 체크박스 그룹은 라디오/체크박스 자식들과 통신하기 위해 사용됩니다.
4. 맵 컴포넌트는 마커 컴포넌트와 통신해야 합니다.
5. 테이블 컴포넌트는 헤더, 행 및 셀과 통신해야 할 수 있습니다.

이러한 컴포넌트들이 프롭스와 이벤트를 사용하여 통신하는 것은 종종 가능하지만, 이는 한 컴포넌트가 다른 컴포넌트를 직접 생성하는 경우에만 작동합니다. 두 컴포넌트가 공통 부모에 의해 모두 생성된 경우에는 작동하지 않습니다.

간단한 예제를 살펴보겠습니다:

```vue
<template>
  <my-map>
    <my-map-marker />
    <my-map-marker />
    <my-map-marker />
  </my-map>
</template>
```

이 시나리오에서 `my-map`과 `my-map-marker`는 프롭스와 이벤트를 사용하여 서로 통신할 수 없습니다. 이를 위해서는 소비하는 템플릿이 많은 작업을 수행하여 정보를 전달해야 합니다.

여기서 `provide`와 `inject`이 정말 빛을 발하는데, `my-map`은 `provide`를 사용하여 `my-map-marker`로 주입될 수 있는 값을 제공할 수 있습니다.

값은 컴포넌트 트리 아래로만 제공될 수 있지만, 함수를 전달하면 트리 위로 통신할 수 있습니다. 예를 들어, `my-map-marker`가 `my-map` 컴포넌트에 자신을 등록할 수 있도록 하려면 다음과 같이 구현할 수 있습니다:

```js
// my-map.vue
const register = () => {
  /* ... various logic ... */

  return { map, unregister }
}

provide('register-marker', register)
```

```js
// my-map-marker.vue
const register = inject('register-marker')

const { map, unregister } = register()

onUnmounted(unregister)
```

여기서 사용 패턴은 컴포저블을 사용하는 것과 매우 유사합니다. `register` 함수는 `useX` 함수와 비슷하게 동작하며, 호출자가 필요로 할 수 있는 모든 것을 포함하는 객체를 반환합니다.

이 패턴의 더 완전한 예제는 [아코디언](../components/accordion) 및 [탭](../components/tabs) 컴포넌트를 참조하십시오.

이 등록 패턴은 유용할 수 있지만, 커플된 컴포넌트 간의 통신에 `provide`와 `inject`를 사용하는 유일한 방법은 아닙니다. 데이터와 함수를 전달하여 프롭스와 이벤트를 흉내낼 수 있습니다. [라디오 그룹 예제](../components/radio-group)도 비슷한 방식으로 동작합니다.

## 대안

때로는 `render` 함수와 VNode의 직접 조작을 사용하여 이러한 종류의 강한 결합을 구현할 수도 있습니다. 그러나 이는 Vue의 내부에 깊이 파고들어야 하므로, 무언가를 잘못하면 불쾌한 결과가 발생할 수 있습니다. 저는 이러한 VNode 조작을 조금 더 쉽게 만들어주는 [`@skirtle/vue-vnode-utils`](https://skirtles-code.github.io/vue-vnode-utils/)라는 라이브러리를 만들었습니다. 해당 라이브러리의 문서에는 위에서 언급한 예제와 기능적으로 매우 유사한 [아코디언 예제](https://skirtles-code.github.io/vue-vnode-utils/examples#adding-component-v-model)가 있습니다.

다른 대안은 스코프드 슬롯을 사용하는 것입니다. 그러나 스코프드 슬롯은 소비하는 템플릿이 관여해야 합니다.

예를 들어:

```vue
<template>
  <my-map v-slot="props">
    <my-map-marker v-bind="props" />
    <my-map-marker v-bind="props" />
    <my-map-marker v-bind="props" />
  </my-map>
</template>
```

`props` 객체는 `my-map` 컴포넌트에서 생성되고 `<slot>`에 전달됩니다. 위에 표시된 소비하는 템플릿은 `v-bind`를 사용하여 각 `my-map-marker`에 전달합니다.

맵 예제의 경우, 이 방법은 적합하지 않을 수 있습니다. 컴포넌트가 너무 강하게 결합되어 있을 때는 소비하는 템플릿에서 추가적인 번거로움이 발생합니다. 그러나 스코프드 슬롯은 컴포넌트가 강하게 결합되지 않은 경우에 선호되는 경향이 있으며, 소비하는 컴포넌트가 어떤 컴포넌트를 연결해야 하는지 결정할 수 있습니다.

