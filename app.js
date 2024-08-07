function getTest() {
  console.log("test");
}

getTest();

const desc = document.querySelector(".description");

desc.addEventListener("click", () => {
  alert("OK");
});
