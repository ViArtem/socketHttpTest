window.addEventListener("load", () => {
  async function sendData() {
    let input = document.querySelector(".valueFormClass");
    let inputValue = input.value;
    console.log(inputValue);
    let userValue = {
      dataUser: inputValue,
    };

    let response = await fetch("http://localhost:3000/value", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userValue),
    });

    input.value = "";
    let result = await response.status;
    console.log(result);
  }
  const form = document.getElementById("httpDataForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await sendData();
  });
});
