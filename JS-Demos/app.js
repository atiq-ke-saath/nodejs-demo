function calculateSum(a, b, callBackFunc) {
  let sum = a + b;
  callBackFunc(sum);
}

const callBackFunc = (data) => {
  console.log("Data: " + data);
};
console.log("Starting First Task...");
// calculateSum(10,20,callBackFunc)
setTimeout(() => {
    calculateSum(10,20,callBackFunc)
}, 3000);
console.log("Starting Second Task...");
console.log("Starting Third Task...");
