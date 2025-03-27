const naujaUzduotis = {
  userID: 1,
  id: 101,
  title: "Mano nauja uzduotis",
  body: "Reikia uzsakyti picos",
};

axios
  .post("https://jsonplaceholder.typicode.com/posts", naujaUzduotis)
  .then((response) => {
    console.log("response", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
