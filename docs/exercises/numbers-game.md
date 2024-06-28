<script setup>
import NumbersGame from './numbers-game.vue'
</script>

# Numbers Game

이 게임은 영국 게임 쇼 [카운트다운(Countdown)](https://en.wikipedia.org/wiki/Countdown_(game_show))에서 가져온 '숫자 게임'을 기반으로 합니다. 이 게임은 또한 프랑스 TV 쇼 [Des chiffres et des lettres](https://en.wikipedia.org/wiki/Des_chiffres_et_des_lettres)를 기반으로 합니다.

게임의 규칙은 대부분 직관적이지만, 자세히 설명하면 실제로보다 복잡해 보일 수 있습니다.

아래 링크에서 게임에 더 익숙해지기 위해 실행 중인 버전을 사용할 수 있습니다:

<https://skirtles-code.github.io/vue-numbers-game/>

규칙의 대략적인 개요:

* 플레이어는 6개의 시작 숫자와 목표 숫자를 제공받습니다. 6개의 시작 숫자는 기본 산술을 사용하여 목표 숫자에 도달하려고 시도해야 합니다.
* 목표 숫자는 100에서 999까지의 범위에 있습니다. 이는 무작위로 선택되며 반드시 달성 가능한 숫자는 아닙니다.
* +, -, × 및 ÷ 연산자만 사용할 수 있습니다. 연산은 양수 정수 결과를 얻을 경우에만 허용됩니다.
* 6개의 시작 숫자는 24개의 숫자 집합에서 선택됩니다. 이는 4개의 '큰 숫자' 25, 50, 75, 100과 '작은 숫자' 1에서 10까지의 두 개의 복사본으로 구성됩니다.
* 플레이어는 0에서 4까지의 큰 숫자를 선택할 수 있습니다.
* 각 시작 숫자는 계산에서 한 번만 사용할 수 있습니다. 마찬가지로 연산의 결과는 후속 단계에서 한 번만 사용할 수 있습니다.
* 6개의 시작 숫자 중 일부만 사용해도 됩니다.

예시 게임:

```
목표: 377
시작 숫자: 50 8 7 7 5 3

가능한 해결책:
단계 1: 50 - 3은 47입니다.
단계 2: 47 × 8은 376입니다.
단계 3: 7 ÷ 7은 1입니다.
단계 4: 376 + 1은 377입니다.

이 해결책에서 숫자 5는 사용되지 않았습니다.

대체 해결책:
단계 1: 50 × 7은 350입니다.
단계 2: 7 × 5는 35입니다.
단계 3: 350 + 35는 385입니다.
단계 4: 385 - 8은 377입니다.

이 해결책에서 숫자 3은 사용되지 않았습니다.
```

## 예시

게임의 기본 구현은 다음과 같이 보일 수 있습니다:

<live-example>
  <numbers-game />
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqVV9tu4zYQ/ZVZP6zl2JZsA2lRJ/FuCxTtSxug6ZsVFLJE22ookpAoJ4Hhf++QFCVS1u52ESSS5nLmPmTOo5+FCE81Ga1H91Va5kJCRWQtNjHLC8FLCWdIeSFqSbIZlCRJZX4i6m0PF9iXvIAxqo9jFrOUs0oCFxU8wDlmAOPpeA1BMoPdBB42kMAUdjPNmPcYc8u46TFuLCPqMSLYxezSmaVJeSBoGB0LlpOOXsmklH/WxY6Uyi/FZjWlKGH4yD4QOcRh5E0+SSIa3njcciqkGjCTjmD7rC0aW+T1t6QggedDTulfpEhylrMDKtqMBoGOhhn3WonAdTo8JbTGjGujE426rxna5QyI4iWSPApSJoqCERTLGdZgpkBXE1MH40VJqpqqSLFCWy6eG1ktp1ABJWRdMiu4gQV8/Ah/JPIYlrxmWWAY6PKDil0LfbIva9gntCJNTVoPh0NTHjYeV56PjLxi2Cq32zAMteyz8W3PSwhshwHfXyNYjJxl5G2JEA1YqAmP+4CL7UIVSolaXiVonpLA6MxAdU4PaTWMtPoa0qpDsmxRV8fgul4YJReqqgA6cQ4eDl8Q7GaQdDPi16mR7KecM9W1vzJJSmwvJ7mqg3Qwpq9NY4UlETRBx6M4rqLDDHSfW5UikekRdZRqqD+CKIjjbDoJttM4nt/EcfQ8MZSo8S7fQ6BFe3XZ/qObbfkky65D8eMZ8bW8K6wEkT5tFHosVRPFUurGqMNsJt00kDt4JmDsp6FeaYbNVljZbeIxETWSH7D158s2MixXozjQSFak30zXpuwAesZW18auRvmbC6DDNch2hB1IMKvFdOjW17dN3sTqdQ6aH+Pet0xsQu9FP/CP35wiT18eGQmSsvR6U0eMiHrb7CnnZWAWT8IyXmAf3wCqhJSwgzz6Y6DobvZV8nHQ+5b95WxsfyEgkw9jC4kLY65tMN1dzVpyDp/ukNmubmdwu5jBj/hcLpQv7QwWCaWOpLvdKJ5DORKXd/i4x+fiDqbTvC2Wq2uqlc8gd3eHB4PaCGN8MwH6cCoSA2OL4obh7aQh3B9wIX0Htuu8v+++seyuz0IzQ7j3FNuc3y3jK/3z02KBFxAsBwKj7fvI3HfwpoMfkhS4BiXBL4D7LD9BSpOqeohHHA/qMh5pRo8luZjvko6J7EokbPM7f8WNxt6bS0kz8J/QouJ2soSSVMJpXvCMUMTT4g4aynChm/c0xxKgRKB26ASnBW7jEax11EhmnhLA+QwMLu1EIk5kgDrjkbHeEXa1lGjpc4qT9IKY7rx48EiDgyK2UEbVZijCFNn3Y+nkzYlclpwdNn/r2q3RF/Ot/G7uY9Z5D20I40m5aVPsQ3md8y/PWTDG420yjG0bAFOd73X43Q5wC1xTtzw0b0vT35yqSBpkoDbqcLtc1CveZcyLPtXwFa/O5/9xr/OLS3OnsI6HA0XVm54LvJ66bv2SpC9fqGcv713m7RYr7fnaz7539nb571z3ChB5I4iEnOEd2Yq2VfFAmxW9gaW6qX7ocXOW0jojVWB6CiPu0OzI2ROg431+Ie8Cj8kqJOoKpTZAd6GyYu42GHbt2nibQtP2+r+HI8k+9JvRvnkZwc9KvlMCVYoX3wwpoV5MZuGKJMtUAWC1EG93zcnXCGxw9U3xVwsWaDpn8x3HAhdrXOUOEbdZD6DZb0MQqKt/lq28Kj46iJ6NLv8B64OaUg==).

게임의 더욱 화려한 버전은 다음과 같이 구현되어 있습니다:

<https://skirtles-code.github.io/vue-numbers-game/>

해당 버전은 Vue로 구현되었으며, 코드는 [GitHub 리포지토리](https://github.com/skirtles-code/vue-numbers-game)에서 확인할 수 있습니다.

## 사용된 기능

이 연습에서 얼마나 멀리 나아갈지는 당신의 선택입니다. 위의 기본 예제는 겉핥기 수준이며, 더 고급진 예제는 조금 지나쳤을 수도 있습니다. 추가 기능을 추가할 때 언제 만족할지는 당신이 결정하세요.

기본 구현에서 사용된 기능:

* 단일 컴포넌트로 작성되었습니다.
* `<script setup>`을 사용한 단일 파일 컴포넌트입니다.
* 반응성은 `reactive()`, `ref()` 및 `computed()`에서 제공됩니다.
* 템플릿은 다음을 사용합니다:
  * 텍스트 보간법, `{{ ['{', '{ ... }', '}'].join('') }}`.
  * `v-if` 조건부 렌더링.
  * `v-for` 루핑.
  * `<input>` 및 `<select>`에 대한 양방향 바인딩을 위한 `v-model`.
  * 이벤트 처리를 위한 `v-on`/`@`.

더 고급진 버전은 다른 Vue 기능을 많이 사용합니다:

* `v-bind`/`:`.
* 프롭스, 슬롯, 이벤트 및 `v-model`을 사용하여 통신하는 여러 컴포넌트.
* 감시자.
* `<TransitionGroup>`.
* CSS에서 `v-bind`.
* 라이프사이클 훅.
* 템플릿 레퍼런스.

