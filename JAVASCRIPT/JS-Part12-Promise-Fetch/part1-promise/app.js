class AJAX {
  static post(url, data) {
    this.xhr = new XMLHttpRequest();
    if (!url && !data) return;
    this.xhr.open("POST", url, true);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    return new Promise((resolve, reject) => {
      this.xhr.onload = () => {
        if (this.xhr.status === 201) {
          resolve(this.xhr.responseText);
        } else {
          reject(new Error("Push Request Failed !"));
        }
      };
      this.xhr.send(JSON.stringify(data));
    });
  }
  static get(url) {
    return new Promise((resolve, reject) => {
      this.xhr = new XMLHttpRequest();
      this.xhr.open("GET", url, true);
      this.xhr.setRequestHeader("Content-Type", "application/json");

      this.xhr.onload = () => {
        if (this.xhr.status === 200) {
          resolve(this.xhr.responseText);
        } else {
          reject(new Error("Couldn't connect to server"));
        }
      };

      this.xhr.send();
    });
  }
}

// AJAX.post("https://jsonplaceholder.typicode.com/posts", {
//   name: "Mali",
//   url: "malibyk",
// })
//   .then(response => console.log("İşlem Başarılı : " + response))
//   .catch(error => console.error(error));

AJAX.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     if (typeof data === "string") {
//       resolve(data);
//     } else {
//       reject("Lütfen Bir String Girin !");
//     }
//   });
// }

// const data = 5;
// getData(data)
//   .then(response => console.log("İşlem Başarılı Sonuç : " + response))
//   .catch(err => console.error(new Error("Error : " + err)));

// function addThree(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (typeof number === "number") resolve(number + 3);
//       else reject(new Error("Please enter a number!"));
//     }, 3000);
//   });
// }

// addThree(15)
//   .then(response => {
//     return addThree(response + 3);
//   })
//   .then(response2 => console.log(response2))
//   .catch(err => console.error(err));
// //! USE MAX 1 CATCH FUNCTION
// //* YOU CAN USE MULTIPLE THEN FUNCTION
