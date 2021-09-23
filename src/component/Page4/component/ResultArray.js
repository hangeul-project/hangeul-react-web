import ResultJson from "./ResultPage.json";

const ResultArray = () => {
  const arr = [];
  ResultJson.map((item) => {
    for (let index = 0; index < 5; index += 1) {
      arr[index] = [[item[0], item[1]]];
    }
    return arr;
  });
  //  arr contains resultpage.json file
  return arr;
};

export default ResultArray;
