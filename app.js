const main = document.querySelector("main"),
  input = document.querySelector(".input"),
  op = document.querySelectorAll(".op"),
  result = document.querySelector("p"),
  btn = document.querySelector(".btn");

const food = {
  burger: "бургер стоит: 6$",
  dick: "стоимость члена: 69$",
  lavash: "лаваш стоит: 10$",
  roll: "стоимость ролла: 30$",
  bosit: "стоимость раба: 0.001$",
};

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (e.target.value in food) {
      result.innerText = food[e.target.value];
      op.forEach((op) => {
        op.style.cssText = "opacity: 0;";
      });
    } else {
      input.style.cssText = "opacity: 0;";
      result.innerText = `обьекта с названием "${e.target.value}" не существует
      создайте новую переменную:`;
      op.forEach((op) => {
        op.style.cssText = "opacity: 1;";
      });
    }
  }
});

btn.addEventListener("click", (e) => {
  let input_key = document.querySelector(".input_key").value,
  input_value = document.querySelector(".input_value").value;
  food[input_key] = input_value;
  op.forEach((op) => {
    op.style.cssText = "opacity: 0;";
  });
  input.style.cssText = "opacity: 1;";
  result.innerText = "";
});
