import ResultJson from "./ResultPage.json";

const Result = () => {
  let arr = [];
  ResultJson.map((item, idx) => {
    for (let index = 0; index < 5; index += 1) {
      arr = [[item.id[0], item.id[1]]];
    }
    return arr;
  });
  //  arr contains resultpage.json file
};
