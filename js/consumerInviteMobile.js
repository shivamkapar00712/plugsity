const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#phone");
const zipCode = document.querySelector("#zipCode");

const form = document.querySelector("#consumerMobileInvite");
var array = Array();
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = firstName.value.trim();
  if (!isRequired(username)) {
    showError(firstName, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      firstName,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(firstName);
    valid = true;
  }
  return valid;
};

const checkLastname = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = lastName.value.trim();
  if (!isRequired(username)) {
    showError(lastName, "Lastname cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      lastName,
      `Lastname must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(lastName);
    valid = true;
  }
  return valid;
};

const checkPhone = () => {
  let valid = false;

  const phone = phoneEl.value.trim();
  if (!isRequired(phone)) {
    showError(phoneEl, "phone number cannot be blank.");
  } else if (!isValidPhone(phone)) {
    showError(phoneEl, `Phone number is not valid.`);
  } else {
    showSuccess(phoneEl);
    valid = true;
  }
  return valid;
};

const checkEmail = (val) => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

// Check Validation for contact form

// const checkContactFirstname = () => {
//   let valid = false;
//   const min = 3,
//     max = 25;
//   const username = firstNameContact.value.trim();
//   if (!isRequired(username)) {
//     showError(firstNameContact, "First name cannot be blank.");
//   } else if (!isBetween(username.length, min, max)) {
//     showError(
//       firstNameContact,
//       `First name must be between ${min} and ${max} characters.`
//     );
//   } else {
//     showSuccess(firstNameContact);
//     valid = true;
//   }
//   return valid;
// };

// const checkContactLastname = () => {
//   let valid = false;
//   const min = 3,
//     max = 25;
//   const username = lastNameContact.value.trim();
//   if (!isRequired(username)) {
//     showError(lastNameContact, "Lastname cannot be blank.");
//   } else if (!isBetween(username.length, min, max)) {
//     showError(
//       lastNameContact,
//       `Lastname must be between ${min} and ${max} characters.`
//     );
//   } else {
//     showSuccess(lastNameContact);
//     valid = true;
//   }
//   return valid;
// };

// const checkContactEmail = () => {
//   let valid = false;
//   const email = emailContact.value.trim();
//   if (!isRequired(email)) {
//     showError(emailContact, "Email cannot be blank.");
//   } else if (!isEmailValid(email)) {
//     showError(emailContact, "Email is not valid.");
//   } else {
//     showSuccess(emailContact);
//     valid = true;
//   }
//   return valid;
// };

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isValidPhone = (phone) => {
  const re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/;
  return re.test(phone);
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

function display_array() {
  var e = "<tbody>";
  for (var y = 0; y < array.length; y++) {
    e += "<tr>";
    e +=
      "<td class='success' style='width: 238px'>" +
      array[y].firstName +
      "</td>";
    e +=
      "<td class='success' style='width: 238px'>" + array[y].lastName + "</td>";
    e += "<td class='success' style='width: 238px'>" + array[y].email + "</td>";
    e +=
      "<td class='success' style='width: 238px'>" +
      array[y].phoneNumber +
      "</td>";
    e +=
      "<td class='success' style='width: 238px'>" + array[y].zipCode + "</td>";
    e += "<tr>";
  }
  e += "<tbody/>";

  document.getElementById("tableData").innerHTML = e;
}

function handleSubmit() {
  // validate fields
  let isUsernameValid = checkUsername();
  let isLastnameValid = checkLastname();
  let isEmailValid = checkEmail();
  let isPhoneValid = checkPhone();

  let isFormValid =
    isUsernameValid && isEmailValid && isLastnameValid && isPhoneValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    $("#preloder").fadeIn();

    let data = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: emailEl.value.trim(),
      phoneNumber: phoneEl.value.trim(),
      zipCode: zipCode.value.trim(),
      isRegistered: false,
      waitListUserId: localStorage.getItem("*&#0__2t@m")
        ? localStorage.getItem("*&#0__2t@m")
        : null,
    };

    const validateData = data;

    // firstName.value = "";
    // lastName.value = "";
    // emailEl.value = "";
    // phoneEl.value = "";
    // zipCode.value = "";
    console.log("isFormValid", data);
    postData(
      "https://cors-anywhere.herokuapp.com/https://plugsity.herokuapp.com/api/CustomerInvitations",
      data
    )
      .then((data) => {
        // Display Modal
        console.log("response", data); // JSON data parsed by `data.json()` call
        if (data) {
          firstName.value = "";
          lastName.value = "";
          emailEl.value = "";
          phoneEl.value = "";
          zipCode.value = "";
          array.push(validateData);
          display_array();
          $("#preloder").fadeOut();
        }

        // $("modal-3").modal("show");
        // $("#preloder").fadeOut();
        // localStorage.setItem("isBusiness", false);
        // localStorage.setItem("*&#0__2t@m", data.id);
        // location.href = "http://www.example.com/ThankYou.html"
        // window.location = "thankyou.html";
      })
      .catch((err) => {
        $("#modal-2").modal("show");
        $("#preloder").fadeOut();
        array = [];
        console.log(err);
        alert("Something went wrong please try again");
      });
  }
}

function handleCancel() {
  document.getElementById("contactForm").reset();
}

function handleMobileSubmit() {
  console.log("inside");
  // validate fields
  let isUsernameValid = checkUsername();
  let isLastnameValid = checkLastname();
  let isEmailValid = checkEmail();
  let isPhoneValid = checkPhone();

  let isFormValid =
    isUsernameValid && isEmailValid && isLastnameValid && isPhoneValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    $("#preloder").fadeIn();

    let data = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: emailEl.value.trim(),
      phoneNumber: phoneEl.value.trim(),
      zipCode: zipCode.value.trim(),
      isRegistered: false,
      waitListUserId: localStorage.getItem("*&#0__2t@m")
        ? localStorage.getItem("*&#0__2t@m")
        : null,
    };

    const validateData = data;

    // firstName.value = "";
    // lastName.value = "";
    // emailEl.value = "";
    // phoneEl.value = "";
    // zipCode.value = "";
    console.log("isFormValid", data);
    postData(
      "https://cors-anywhere.herokuapp.com/https://plugsity.herokuapp.com/api/CustomerInvitations",
      data
    )
      .then((data) => {
        // Display Modal
        console.log("response", data); // JSON data parsed by `data.json()` call
        if (data) {
          firstName.value = "";
          lastName.value = "";
          emailEl.value = "";
          phoneEl.value = "";
          zipCode.value = "";
          array.push(validateData);
          display_array();
          $("#preloder").fadeOut();
        }

        // $("modal-3").modal("show");
        // $("#preloder").fadeOut();
        // localStorage.setItem("isBusiness", false);
        // localStorage.setItem("*&#0__2t@m", data.id);
        // location.href = "http://www.example.com/ThankYou.html"
        // window.location = "thankyou.html";
      })
      .catch((err) => {
        $("#modal-2").modal("show");
        $("#preloder").fadeOut();
        array = [];
        console.log(err);
        alert("Something went wrong please try again");
      });
  }
}

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

// contactForm.addEventListener(
//   "input",
//   debounce(function (e) {
//     switch (e.target.id) {
//       case "firstNameContact":
//         checkContactFirstname();
//         break;
//       case "lastNameContact":
//         checkContactLastname();
//         break;
//       case "emailContact":
//         checkContactEmail();
//         break;
//     }
//   })
// );

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "firstName":
        checkUsername();
        break;
      case "lastName":
        checkLastname();
        break;
      case "email":
        checkEmail();
        break;
      case "phone":
        checkPhone();
        break;
    }
  })
);

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
