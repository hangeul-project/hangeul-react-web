// 사용자가 선택한 정답을 로컬 스토리지에 저장한다.
// 예를들어, 1번 문제에 대해서 사용자가 어떤 정답을 선택했는지 알고싶다면
// window.localStorage.getItem(`question1`) 을 호출하면 된다.
export function saveUserSelectedAnswer(questionId, answerId) {
  window.localStorage.setItem(`question${questionId}`, answerId);
}

export function getUserSelectedAnswer(questionId) {
  let answer = window.localStorage.getItem(`question${questionId}`);
  if (answer === null) {
    answer = -1;
  }
  return parseInt(answer, 10);
}
