function promise(resolve, reject) {
    setTimeout(() => {
        resolve({status: "Correct"});
        console.log("Correct");
        // reject(new Error("Done error"));
    }, 500);
}

Promise.all([
    new Promise(promise),
    new Promise(promise),
    new Promise(promise),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("errorr");
            reject("rejected error");
        }, 400);
    })
]).then(results => {
    console.log(results);
});