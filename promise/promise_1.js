// let promise = new Promise(function (resolve, reject) {
//   after execution we call one of that methods
// });

//call promise
//promise.then(onFulfilled, onRejected)
//onFulfilled - function, that relates to resolve
//onRejected - function, that relates to reject


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({status: "Correct"});
        // reject(new Error("timeout"));
    }, 500);
});

promise.then(
    result => console.log("success : ", result.status),
    error => console.log("failure : ", error.message)
);