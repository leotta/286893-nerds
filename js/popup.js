  var link = document.querySelector(".contact");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");
  var form = popup.querySelector("form");
  var surname = popup.querySelector("[name=surname]");
  var mail = popup.querySelector("[name=mail]");
  var storage = localStorage.getItem("surname");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
      surname.value = storage;
      mail.focus();
    } else {
      surname.focus();
    }
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
  });
  form.addEventListener("submit", function(event) {
    if (!surname.value || !mail.value) {
      event.preventDefault();
      console.log("Нужно ввести имя и e-mail");
    } else {
      localStorage.setItem("surname", surname.value);
    }
  });
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
      }
    }
  });
