import QuizJson from "../component/Page3/hangeul-quiz.json";

/**
 * 퀴즈 정보가 담겨져 있는 JSON 파일에서 각 문항의 id 속성과,
 * 문항별 정답의 인덱스 값을 Map 에 담아서 반환합니다.
 *
 * @returns Map of Question Id and its answer index
 */
export default function getQuestionToAnswerMap() {
  const map = new Map();
  let answerIdx = -1;
  QuizJson.map((item, idx) => {
    for (let index = 0; index < item.options.length; index += 1) {
      if (item.options[index].isCorrect === true) {
        answerIdx = index;
      }
    }
    map.set(item.id, answerIdx);
    return null;
  });
  return map;
}
