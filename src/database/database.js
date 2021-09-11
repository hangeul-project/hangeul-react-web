import firebase from "./firebase";

const database = firebase.database();

const QUIZ_ANSWER_RATE = "quiz_answer_rate";

/**
 * Updates the selection count of a question.
 * @param {Number} numQuestion Number of the question to update
 * @param {Number} selectedAnswerNum Number of the answer to update
 */
export function updateChosenAnswer(numQuestion, selectedAnswerNum) {
  // 0, 1, 2
  const question = `q${numQuestion}`;
  const updates = {};
  updates[`${QUIZ_ANSWER_RATE}/${question}/${selectedAnswerNum}`] =
    firebase.database.ServerValue.increment(1);
  database.ref().update(updates);
}

function calculateAnswerRate(answerArr) {
  // calculate answer rate
  const answerRateArr = [];
  let total = 0;
  // get total answer counts
  answerArr.forEach((element) => {
    total += element;
  });
  // calculate select count divided by total selection count
  answerArr.forEach((element) => {
    answerRateArr.push(Math.floor((element / total) * 100) / 100);
    // Round down to two decimal places. Ex.  [ 0.71, 0, 0.28 ]
  });
  return answerRateArr;
}

/**
 * Reads answer count from real-time database and returns answer rate
 * in an array format based on selected answer count.
 * ex. [70, 20, 10] means answer number 1 had 70 percent of selection rate.
 * @param {Number} numQuestion Number of the question to calculate answer rate
 * @param {function} onSuccess Callback function to execute when this operation was successful.
 *                             receives array of numbers (answer rate array) as parameter.
 * @param {function} onFailed Callback function to execute when this operation fails.
 *                            receives `error` as parameter.
 */
export function getAnswerRate(numQuestion, onSuccess, onFailed) {
  const q = `q${numQuestion}`;
  database
    .ref()
    .child(QUIZ_ANSWER_RATE)
    .child(q)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
        const answerRateArr = calculateAnswerRate(data);
        onSuccess(answerRateArr);
      }
    })
    .catch((error) => {
      onFailed(error);
    });
}
