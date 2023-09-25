const firstName = document.querySelector("#businessName");
const lastName = document.querySelector("#website");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#phone");
const address = document.querySelector("#address");
const social = document.querySelector("#social");

const businessNameMobileEl = document.querySelector("#businessNameMobile");
const businessWebsiteMobile = document.querySelector("#businessWebsiteMobile");
const businessEmailMobileEl = document.querySelector("#businessEmailMobile");
const businessPhoneMobileEl = document.querySelector("#businessMobile");
const businessAddressMobileEl = document.querySelector("#businessAddMobile");
const businessSocialMobileEl = document.querySelector("#businessSocialMobile");

const form = document.querySelector("#businessInvite");
const contactForm = document.querySelector("#businessMobileInvite");
var array = Array();

const checkUsernameMobile = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = businessNameMobileEl.value.trim();
  if (!isRequired(username)) {
    showError(businessNameMobileEl, "Business name cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      businessNameMobileEl,
      `Business name must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(businessNameMobileEl);
    valid = true;
  }
  return valid;
};

const checkLastnameMobile = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = businessWebsiteMobile.value.trim();

  if (!isRequired(username)) {
    showError(businessWebsiteMobile, "Website cannot be blank.");
  } else if (!isValidURL(username)) {
    showError(businessWebsiteMobile, `Invalid url format.`);
  } else {
    showSuccess(businessWebsiteMobile);
    valid = true;
  }

  return valid;
};

const checkPhoneMobile = () => {
  let valid = false;

  const phone = businessPhoneMobileEl.value.trim();
  if (!isRequired(phone)) {
    showError(businessPhoneMobileEl, "phone number cannot be blank.");
  } else if (!isValidPhone(phone)) {
    showError(businessPhoneMobileEl, `Phone number is not valid.`);
  } else {
    showSuccess(businessPhoneMobileEl);
    valid = true;
  }
  return valid;
};

const checkEmailMobile = (val) => {
  let valid = false;
  const email = businessEmailMobileEl.value.trim();
  if (!isRequired(email)) {
    showError(businessEmailMobileEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(businessEmailMobileEl, "Email is not valid.");
  } else {
    showSuccess(businessEmailMobileEl);
    valid = true;
  }
  return valid;
};

const checkAddressMobile = () => {
  let valid = false;
  const min = 3,
    max = 50;
  const username = businessAddressMobileEl.value.trim();
  if (!isRequired(username)) {
    showError(businessAddressMobileEl, "Address cannot be blank.");
  }
  // else if (!isBetween(username.length, min, max)) {
  //   showError(address, `Address must be between ${min} and ${max} characters.`);
  // } else
  else {
    showSuccess(businessAddressMobileEl);
    valid = true;
  }
  return valid;
};

const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = firstName.value.trim();
  if (!isRequired(username)) {
    showError(firstName, "Business cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      firstName,
      `Business must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(firstName);
    valid = true;
  }
  return valid;
};

const isValidURL = (urlString) => {
  var urlPattern = new RegExp(
    "^((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};
const checkLastname = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = lastName.value.trim();
  if (!isRequired(username)) {
    showError(lastName, "Website cannot be blank.");
  } else if (!isValidURL(username)) {
    showError(lastName, `Invalid url format.`);
  } else {
    showSuccess(lastName);
    valid = true;
  }
  return valid;
};

const checkAddress = () => {
  let valid = false;
  const min = 3,
    max = 50;
  const username = address.value.trim();
  if (!isRequired(username)) {
    showError(address, "Address cannot be blank.");
  }
  // else if (!isBetween(username.length, min, max)) {
  //   showError(address, `Address must be between ${min} and ${max} characters.`);
  // } else
  else {
    showSuccess(address);
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
      array[y].businessName +
      "</td>";
    e +=
      "<td class='success' style='width: 238px'>" +
      array[y].website +
      "</td>";
    e +=
      "<td class='success' style='width: 238px'>" +
      array[y].email +
      "</td>";
    e +=
      "<td class='success' style='width: 238px'>" +
      array[y].phoneNumber +
      "</td>";
    e +=
      "<td class='success' style='width: 238px'>" +
      array[y].address +
      "</td>";
    e +=
      "<td class='success' style='width: 238px'>" +
      array[y].socialMedia +
      "</td>";
    e += "<tr>";
  }
  e += "<tbody/>";

  document.getElementById("tableData").innerHTML = e;
}

// const handleRedirect = () => {
//   location.href = "consumer-invite.html";
// };

const handleRedirect = () => {
  if(localStorage.getItem('isBusiness')){
    location.href = "business-invite.html";
  }else{
    location.href = "consumer-invite.html";
  }
};

function handleSubmit() {
  // validate fields
  let isUsernameValid = checkUsername();
  let isLastnameValid = checkLastname();
  let isEmailValid = checkEmail();
  let isPhoneValid = checkPhone();
  let isAddressValid = checkAddress();

  // var code = $("#phone").intlTelInput("getSelectedCountryData").dialCode;
  var phoneNumber = $("#phone").val();

  // console.log("code::", code);
  console.log("phoneNumber::", phoneNumber);

  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isLastnameValid &&
    isPhoneValid &&
    isAddressValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    $("#preloder").fadeIn();

    let data = {
      businessName: firstName.value.trim(),
      website: lastName.value.trim(),
      email: emailEl.value.trim(),
      phoneNumber: phoneEl.value.trim(),
      socialMedia: social.value.trim(),
      address: address.value.trim(),
      // zipCode: zipCode.value.trim(),
      isRegistered: false,
      userRefKey: localStorage.getItem("*&#0__2t@m")
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
      "https://dev.plugsity.com/plugisty/avi/v1/inviteBusinessUser",
      data
    )
      .then((data) => {
        // Display Modal
        console.log("response", data); // JSON data parsed by `data.json()` call

        // if (data.status != 200) {
        //   // if(data.errors.BusinessEmail)
        //   alert("Something went wrong please try again");
        // } else {
        //   firstName.value = "";
        //   lastName.value = "";
        //   emailEl.value = "";
        //   phoneEl.value = "";
        //   address.value = "";
        //   social.value = "";
        //   // zipCode.value = "";
        //   array.push(validateData);
        //   display_array();
        //   $("#preloder").fadeOut();
        // }


        if(data.Response.status == 200){
          console.log("inside :::::123213")

          firstName.value = "";
          lastName.value = "";
          emailEl.value = "";
          phoneEl.value = "";
          address.value = "";
          social.value = "";


          array.push(validateData);
          display_array();
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }else if(data.Response.status == 302){
          console.log("inside :::::")
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }else{
          console.log("inside:::::1")
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }

        // if (data.errors) {
        //   firstName.value = "";
        //   lastName.value = "";
        //   emailEl.value = "";
        //   phoneEl.value = "";
        //   address.value = "";
        //   social.value = "";
        //   // zipCode.value = "";
        //   array.push(validateData);
        //   display_array();
        //   $("#preloder").fadeOut();
        // }

        // $("modal-3").modal("show");
        // $("#preloder").fadeOut();
        // localStorage.setItem("isBusiness", false);
        // localStorage.setItem("*&#0__2t@m", data.id);
        // location.href = "http://www.example.com/ThankYou.html"
        // window.location = "thankyou.html";
      })
      .catch((err) => {
        array = [];
        console.log(err);

        $("#preloder").fadeOut();
        $("#modal-data").html("Something went wrong please try again") ;
        $("#modal-2").modal("show");
      });
  }
}

function handleCancel() {
  document.getElementById("contactForm").reset();
}

function handleMobileSubmit() {
  console.log("inside");
  // validate fields
  let isUsernameValid = checkUsernameMobile();
  let isLastnameValid = checkLastnameMobile();
  let isEmailValid = checkEmailMobile();
  let isPhoneValid = checkPhoneMobile();
  let isAddressValid = checkAddressMobile();

  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isLastnameValid &&
    isPhoneValid &&
    isAddressValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    $("#preloder").fadeIn();

    let data = {
      businessName: businessNameMobileEl.value.trim(),
      website: businessWebsiteMobile.value.trim(),
      email: businessEmailMobileEl.value.trim(),
      phoneNumber: businessPhoneMobileEl.value.trim(),
      socialMedia: businessSocialMobileEl.value.trim(),
      address: businessAddressMobileEl.value.trim(),
      isRegistered: false,
      userRefKey: localStorage.getItem("*&#0__2t@m")
        ? localStorage.getItem("*&#0__2t@m")
        : null,
    };

    const validateData = data;
    postData(
      "https://dev.plugsity.com/plugisty/avi/v1/inviteBusinessUser",
      data
    )
      .then((data) => {
        // Display Modal
        console.log("response", data); // JSON data parsed by `data.json()` call



        if(data.Response.status == 200){
          console.log("inside :::::123213")

          businessNameMobileEl.value = "";
          businessWebsiteMobile.value = "";
          businessEmailMobileEl.value = "";
          businessPhoneMobileEl.value = "";
          businessAddressMobileEl.value = "";
          businessSocialMobileEl.value = "";


          // array.push(validateData);
          // display_array();
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }else if(data.Response.status == 302){
          console.log("inside :::::")
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }else{
          console.log("inside:::::1")
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }


      })
      .catch((err) => {
        $("#preloder").fadeOut();
        $("#modal-data").html("Something went wrong please try again") ;
        $("#modal-2").modal("show");
        // alert("Something went wrong please try again");
      });
  }
}

// function handleContactForm() {
//   //  validate fields
//   let isUsernameValid = checkContactFirstname();
//   let isLastnameValid = checkContactLastname();
//   let isEmailValid = checkContactEmail();
//   let isFormValid = isUsernameValid && isEmailValid && isLastnameValid;
//   // submit to the server if the form is valid
//   if (isFormValid) {
//     $("#preloder").fadeIn();
//     let data = {
//       firstName: firstNameContact.value.trim(),
//       lastName: lastNameContact.value.trim(),
//       email: emailContact.value.trim(),
//       subject: subject.value.trim(),
//       message: messageContact.value.trim(),
//     };
//     console.log("isFormValid", data);
//     postData(
//       "https://plugsity.herokuapp.com/api/ContactUs",
//       data
//     )
//       .then((data) => {
//         $("#preloder").fadeOut();
//         handleCancel();
//         $("#modal-1").modal("hide");
//         console.log("response", data); // JSON data parsed by `data.json()` call
//       })
//       .catch((err) => {
//         $("#preloder").fadeOut();
//         handleCancel();
//         $("#modal-1").modal("hide");

//         console.log(err);
//       });
//   }
// }

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
      case "businessName":
        checkUsername();
        break;
      case "website":
        checkLastname();
        break;
      case "email":
        checkEmail();
        break;
      case "phone":
        checkPhone();
        break;
      case "address":
        checkAddress();
        break;
    }
  })
);

contactForm.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "businessNameMobile":
        checkUsernameMobile();
        break;
      case "businessWebsiteMobile":
        checkLastnameMobile();
        break;
      case "businessEmailMobile":
        checkEmailMobile();
        break;
      case "businessMobile":
        checkPhoneMobile();
        break;
      case "businessAddMobile":
        checkAddressMobile();
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
      //   "Access-Control-Allow-Origin": "*",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
