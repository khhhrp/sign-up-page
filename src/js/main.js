document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const mainForm = document.querySelector(".main-form");
  const firstNameInfo = document.querySelector("#firstNameInfo");
  const lastNameInfo = document.querySelector("#lastNameInfo");
  const usernameInfo = document.querySelector("#usernameInfo");
  const emailInfo = document.querySelector("#emailInfo");
  const showPassBtn = document.querySelector(".form-field__btn");
  const modalBtn = document.querySelector(".modal__btn");

  const user = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  };

  mainForm.addEventListener("beforeinput", (e) => {
    if (e.target.tagName !== "INPUT") return;

    if (e.data && /\s/.test(e.data)) {
      e.preventDefault();
    }
  });

  mainForm.querySelectorAll("input").forEach((input) => {
    input.addEventListener("invalid", (e) => {
      e.target.style.outlineColor = "red";
    });

    input.addEventListener("input", (e) => {
      if (e.target.value === "") {
        e.target.style.outlineColor = "";
      } else if (e.target.checkValidity()) {
        e.target.style.outlineColor = "green";
      } else {
        e.target.style.outlineColor = "red";
      }
    });
  });

  function updateUser() {
    user.firstName = mainForm.elements.firstName.value.trim();
    user.lastName = mainForm.elements.lastName.value.trim();
    user.email = mainForm.elements.email.value.trim();
    user.username = mainForm.elements.username.value.trim();
  }

  function showUser() {
    firstNameInfo.textContent = user.firstName;
    lastNameInfo.textContent = user.lastName;
    usernameInfo.textContent = user.username;
    emailInfo.textContent = user.email;
  }

  function changeInputType() {
    const input = mainForm.elements.password;
    const passwordIcon = document.querySelector("#passwordIcon");

    passwordIcon.getAttribute("href") === "#eye-off"
      ? passwordIcon.setAttribute("href", "#eye-on")
      : passwordIcon.setAttribute("href", "#eye-off");

    input.type = input.type === "password" ? "text" : "password";
  }

  showPassBtn.addEventListener("click", changeInputType);

  mainForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!mainForm.checkValidity()) {
      mainForm.reportValidity();
      return;
    }

    updateUser();
    overlay.classList.add("overlay--active");
    showUser();
  });

  modalBtn.addEventListener("click", () => {
    mainForm.reset();
    overlay.classList.remove("overlay--active");

    mainForm.querySelectorAll("input").forEach((input) => {
      input.style.outlineColor = "";
    });
  });
});
