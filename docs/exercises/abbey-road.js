const tracks = [
  'Blue Blood',
  'I AM',
  'Kitsch',
  'Lips',
  'Heroine',
  'Mine',
  '섬찟',
  'NOT YOUR GIRL',
  '궁금해',
  'Cherish',
  'Shine With Me',
]

const mappings = {
  'hypnosis': '섬찟',
  'next page': '궁금해',
}

function canonical(str) {
  const replaced = str.toLowerCase().replace(/[^a-z ]/g, '').replace(/ +/, ' ').trim()

  return mappings[replaced] || replaced
}

const canon = tracks.map(canonical)

export default {
  question: `아이브 정규 1집 "I've IVE"의 ${tracks.length}곡의 이름을 말해주세요.`,
  size: tracks.length,

  createChecker() {
    return (answer) => {
      const index = canon.indexOf(canonical(answer))

      if (index === -1) {
        return false
      }

      return {
        index,
        canonical: tracks[index]
      }
    }
  }
}
