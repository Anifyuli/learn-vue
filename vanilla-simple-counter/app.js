const countValue = document.getElementById("value");
const decrease = document.getElementById("decrement");
const increase = document.getElementById("increment");

let count = 0;

countValue.textContent = count;

increase.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});

decrease.addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});
