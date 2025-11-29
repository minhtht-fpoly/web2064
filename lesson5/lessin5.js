const arr = [1, 2, 3, 4, 5];
const newArr = arr
  .map((element) => {
    return `<div>${element}</div>`;
  })
  .join("");
console.log(newArr);
