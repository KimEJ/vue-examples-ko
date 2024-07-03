import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  outDir: '../dist',
  cleanUrls: true,
  base: '/vue-examples-ko',
  title: 'Vue 예제',
  lang: 'ko-KR',
  description: 'Vue 패턴과 기본 컴포넌트 예제',
  appearance: false,

  transformHead({ page, siteData: { base } }) {
    if (page !== '404.md') {
      const canonicalUrl = `https://kimej.github.io/${base}${page}`
        .replace(/index\.md$/, '')
        .replace(/\.md$/, '')

      return [['link', { rel: 'canonical', href: canonicalUrl }]]
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KimEJ/vue-examples-ko' }
    ],

    sidebar: [
      {
        text: '소개',
        link: '/'
      }, {
        text: '컴포넌트 라이브러리',
        link: '/component-libraries'
      }, {
        text: '예제 컴포넌트',
        items: [
          {
            text: '체크박스',
            link: '/components/checkbox',
          }, {
            text: '라디오 버튼',
            link: '/components/radio',
          }, {
            text: '토글 스위치',
            link: '/components/toggle-switch',
          }, {
            text: '라디오 그룹',
            link: '/components/radio-group'
          }, {
            text: '아코디언',
            link: '/components/accordion',
          }, {
            text: '탭',
            link: '/components/tabs',
          }
        ]
      }, {
        text: '패턴',
        items: [
          {
            text: 'v-model과 computed 사용하기',
            link: '/patterns/computed-v-model'
          }, {
            text: '글로벌 속성 사용하기',
            link: '/patterns/global-properties'
          }, {
            text: 'provide/inject를 사용한 결합된 컴포넌트',
            link: '/patterns/coupled-components-with-provide-inject'
          }
        ]
      }, {
        text: '가이드',
        items: [
          {
            text: '이미지 에셋 사용하기',
            link: '/guides/working-with-image-assets'
          }, {
            text: 'Vue 소스 코드 이해하기',
            link: '/advanced/understanding-the-vue-source-code'
          }
        ]
      }, {
        text: '연습문제',
        link: '/exercises/',
        items: [
          {
            text: '틱택토 게임',
            link: '/exercises/tic-tac-toe'
          }, {
            text: '퀴즈 게임',
            link: '/exercises/quiz'
          }, {
            text: '지뢰찾기 게임',
            link: '/exercises/minesweeper'
          }, {
            text: '숫자 맞추기 게임',
            link: '/exercises/numbers-game'
          }
        ]
      }
    ]
  }
})
