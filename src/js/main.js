document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const mainForm = document.querySelector(".main-form");
  const firstName = document.querySelector("#firstNameInfo");
  const lastName = document.querySelector("#lastNameInfo");
  const username = document.querySelector("#usernameInfo");
  const email = document.querySelector("#emailInfo");
  const showPassBtn = document.querySelector(".form-field__btn");
  const modalBtn = document.querySelector(".modal__btn");

  const user = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  };

  function updateUser() {
    user.firstName = mainForm.elements.firstName.value.trim();
    user.lastName = mainForm.elements.lastName.value.trim();
    user.email = mainForm.elements.email.value.trim();
    user.username = mainForm.elements.username.value.trim();
  }

  function showUser() {
    firstName.textContent = user.firstName;
    lastName.textContent = user.lastName;
    username.textContent = user.username;
    email.textContent = user.email;
  }

  function changeInputType() {
    const input = mainForm.elements.password;
    const passwordIcon = document.querySelector("#passwordIcon");

    passwordIcon.getAttribute("href") === "#eye-off"
      ? passwordIcon.setAttribute("href", "#eye-on")
      : passwordIcon.setAttribute("href", "#eye-off");

    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");
  }

  showPassBtn.addEventListener("click", () => {
    changeInputType();
  });

  mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateUser();
    overlay.classList.add("overlay--active");
    showUser();
  });

  modalBtn.addEventListener("click", () => {
    mainForm.reset();
    overlay.classList.remove("overlay--active");
  });
});
