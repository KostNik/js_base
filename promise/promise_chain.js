let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({status: "Correct"});
        reject(new Error("Done error"));
    }, 500);
});

promise.then(
    result => {
        console.log("success : ", result.status);
        return result;
    },
    error => console.log("failure : ", error.message)
).then(data => console.log("in chain: ", data),
    error => console.log("FFailure ", error.message));