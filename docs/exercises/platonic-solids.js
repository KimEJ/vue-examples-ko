const solids = ['정사면체', '정육면체', '정팔면체', '정십이면체', '정이십면체']

export default {
  question: `플라토닉 고체 ${solids.length}개의 이름을 맞춰보세요.`,
  size: solids.length,

  createChecker() {
    let index = -1

    return (answer) => {
      const canonical = answer.slice(0, 1).toUpperCase() + answer.slice(1).toLowerCase()

      if (!solids.includes(canonical)) {
        return false
      }

      ++index

      return {
        index,
        canonical
      }
    }
  }
}
