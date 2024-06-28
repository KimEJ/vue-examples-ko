const wonders = {
  '기자의 대피라미드': ['쿠푸 왕의 피라미드', '기자의 피라미드'],
  '로도스의 거상': ['로드스의 거상', '로드스의 콜로쏘스'],
  '알렉산드리아의 등대': ['알렉산드리아 등대'],
  '마우솔로스 영묘': ['할리카르나소스의 마우솔레움', '마우솔레움', '마우솔로스의 무덤'],
  '아르테미스 신전': ['아르테미스 신전'],
  '올림피아의 제우스 상': ['제우스 상'],
  '바빌론의 공중정원': ['공중정원']
}

function canonical(str) {
  const normal = str => str.toLowerCase().replace(/(^| )(of|at|in|the)( |$)/g, ' ').replace(/ +/, ' ').trim()

  const replaced = normal(str)

  for (const key in wonders) {
    if (normal(key) === replaced) {
      return key
    }

    for (const alt of wonders[key]) {
      if (normal(alt) === replaced) {
        return key
      }
    }
  }

  return false
}

export default {
  question: `고대 세계의 일곱 불가사의의 이름을 말해보세요.`,
  size: 7,

  createChecker() {
    const matched = new Set()
    let index = 0

    return (answer) => {
      const canon = canonical(answer)

      if (!canon || matched.has(canon)) {
        return false
      }

      return {
        canonical: canon,
        index: index++
      }
    }
  }
}
