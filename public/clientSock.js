let socket = io.connect();
let $addForm = document.querySelector(".addForm");
let $inputFullNameAdd = document.querySelector(".socketInput");

//Sends data from the form via a websocket connection
$addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log($inputFullNameAdd.value);
  socket.emit("send user value", {
    fullName: $inputFullNameAdd.value,
  });
  $inputFullNameAdd.value = "";
});
