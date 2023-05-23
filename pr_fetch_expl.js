
//FETCH IS A HTTP METHOD WHICH USED TO GET SOME JSON API AND IT RETURNS PROMISE

let value = fetch("https://api.postalpincode.in/pincode/110043")
//FETCH HAS TWO step process
//1.) get JSON API
//2.) get value from JSON API

value.then((jsonValue) => {
    return jsonValue.json();
}).then((receivedValue) => {
    console.log(receivedValue);
}).catch();