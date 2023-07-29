// Asynchronous function that returns a Promise
function asyncOperation(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value % 2 === 0) {
          resolve(`Success: ${value} is even.`);
        } else {
          reject(`Error: ${value} is not even.`);
        }
      }, 1000);
    });
  }
  
  // Promise chaining example
  asyncOperation(4)
    .then((result) => {
      console.log(result); // Output: Success: 4 is even.
      return asyncOperation(7);
    })
    .then((result) => {
      console.log(result); // This won't be executed because the previous promise was rejected.
    })
    .catch((error) => {
      console.error(error); // Output: Error: 7 is not even.
    });
  