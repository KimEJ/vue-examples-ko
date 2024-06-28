<script setup>
import TicTacToe from './tic-tac-toe.vue'
</script>

# 틱택토

또는 **Noughts and Crosses**, **Xs and Os**로도 알려져 있습니다.(영미권에서는 그런가보네요)

플레이어들은 번갈아가며 그리드의 한 칸에 자신의 심볼을 놓습니다. 플레이어는 가로, 세로, 대각선 상에 3개의 심볼을 일렬로 놓으면 승리합니다. 모든 칸이 일렬로 놓이지 않고 채워지면 무승부로 게임이 종료됩니다.

## 예시

<live-example>
  <tic-tac-toe />
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqFVW1v2zYQ/isXb4DkNVKdxE1aLU425MMwYJiHfTJgG6giUTZbmhQoyonr+r/v+GopTroPNsl7fe7h8bQf/F7X6bYlg2xw2xSS1goaotr6bsHpphZSwR4KsalbRcpzkCQvFN0SvavgAJUUG4jQPVrwBS8EbxQ8ilyWMAm28Xw59Lqa5TsijbKKo1mECq96opxTvnogjDVo4HPG8RAmd7BfcECZM9QG82h0cRmdQ3Q1/qCX65uPehldXevlYnyjl8sPVjg2y+X4OlrqQPpXCQmxjViYnKIyoYc2l89GeUmeiUGkrdKmZlTFUTRMN3kd/91uHonEKo4OjHKC1s7PWJm9rsJQMzfH5TD9IijXkay3/acVxDbCZALRbDaL4Pt3F1NLptNpFBAC0qhayX0yKz3oxfzpn7PgLWMLfjjl+x9/I28TfqSge0fpNmct8Wk0bmcX4LnUnaJJMx8tzQ38P75VviHT7ZvQnN/Z2SkmzZhJGhhOGeErtTYUfvJpqpZjfwpuLvaB0eJrrHcOvi7IItfCpY7pEdksL8rsFdV1nLimP/LVPaM6mk2jVBKUFiTu6rBjdXO4qAGuJI3KpUIuDABbqS8QRq9mwOeJYTpBlPhTX0gsxdM58svaDXfxHLGogF/gCt45LSQwPg0ym74d4RS5JTpvGtsqztxet8fafSJwfw8R2dRqh/h77TK31H/WEZOf98Y5VeIv8UTkQ96QeHj4fG5t9rprs1da9z6lvGBtSQIcgxfbE9fb93YY4hjEg0IQLFcETwC3Jd1CocuYLAYG7mIAmRfswU69DM5CBx8WA+PpfLcJzh401RRTDlfo7r1RFGyttd9DcNM1O7+j0gfQyq484Dpy37963fHDrsdvhX4KwUM/ix96BLRI9d5d36nDEg6GXVPWe6zLExL2nZ0liVYIwnMYWPkDBSBQcuYC+LvxHr251iETwfVH3uFg5r3H0b/jl2AIa6zGBHKfMYyghDm88HlslcJ+D1S6JxvQ/OvOxssao6aHAY+N2jECTSFqUqIktR9W82bWhK7WKoOr0ah+/lVLnmip1l1BSfFTle8yqBixEr1JSiqJeY2Ze7SoMq861e1ogr/umcFFz/QdmCU17Wj8NrlcUZ4oUWeQXBoY1vxokjO64gnFOhvMT7gi0iQoWtkImUFJqrxl6gcFWBj6881V0tBv+NDGH13JX9pG0WqX4ERRGLuX4VHIkmAGxAWNYLSEn0ajUR8ilnRSDSMVBjopJ3n2w4tp3JKUfbXoqTHVp6C388GmSsx0c7aOgxo/Whb1W/bZWj8AN/7z4utKipaXmIYQEtywt1+xKKqiQwcy5fDdaCoAviVmFIa7xjGom/BucPgPtulfdQ==)

## 사용된 기능

구현에 위 예시와 동일한 Vue 기능을 사용할 필요는 없지만, 이를 시도하기 위해 필요한 지식을 알려드리겠습니다:

* 위 예시는 단일 컴포넌트를 사용하여 작성되었습니다.
* `<script setup>`을 사용한 단일 파일 컴포넌트입니다.
* 반응성은 `reactive()`, `ref()`, `computed()`을 사용합니다.
* 템플릿은 다음을 사용합니다:
  * 텍스트 보간법, `{{ ['{', '{ ... }', '}'].join('') }}`.
  * `v-if`/`v-else` 조건부 렌더링.
  * `v-for`를 사용한 반복.
  * 이벤트 처리를 위한 `v-on`/`@`.
  * `:class`를 사용한 클래스 바인딩.

