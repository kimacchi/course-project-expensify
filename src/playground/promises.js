const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("this is my resolved data");
    reject("went wrong");
  }, 1500);
});

console.log("before");

promise.then(
  (data) => {
    console.log("1", data);
  },
  (err) => {
    console.log(err);
  }
);

console.log("after");
