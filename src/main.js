const button = document.querySelector("#popup-button");
const cross = document.querySelector("#popup-cross");
const modal = document.querySelector("#modal");
const body = document.querySelector("body")

// Добавляем обработчик события для нажатия на кнопку
button.addEventListener("click", function () {
  // Открываем модальное окно
  modal.style.visibility = "visible";
  body.style.overflow = "hidden";
  
});

button.addEventListener("click", function (event) {
  // Предотвращаем обновление страницы
  event.preventDefault();
});

// Добавляем обработчик события для закрытия модального окна
cross.addEventListener("click", function () {
    // Закрываем модальное окно
    modal.style.visibility = "hidden";
    body.style.overflow = "visible"
});

// document.addEventListener("click", (e) => {
//   const click = e.composedPath().includes("#modal");
//   if (!click){
//     modal.style.visibility = "hidden"
//   }
// })

