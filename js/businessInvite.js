const businessName = document.querySelector("#businessName");
const website = document.querySelector("#website");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#phone");
const countryCode = document.querySelector("#phone2");
const phoneValid = document.querySelector("#phoneValid");

const businessNameMobileEl = document.querySelector("#businessNameMobile");
const businessWebsiteMobile = document.querySelector("#businessWebsiteMobile");
const businessEmailMobileEl = document.querySelector("#businessEmailMobile");
const businessPhoneMobileEl = document.querySelector("#businessMobile");
// const businessAddressMobileEl = document.querySelector("#businessAddMobile");
// const businessSocialMobileEl = document.querySelector("#businessSocialMobile");

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

const checkWebsiteMobile = () => {
  

  let valid = false;
  const min = 3,
    max = 25;
  const username = businessWebsiteMobile.value.trim();
 if (username !== '' && !isValidURL(username)) {
    showError(businessWebsiteMobile, `Invalid url format.`);
  } else {
    showSuccess(businessWebsiteMobile);
    valid = true;
  }
  return valid;
};

const checkPhoneMobile = () => {
  let valid = false;
  const phone = businessPhoneMobileEl.value;
  if(phone === 'true'){
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


const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = businessName.value.trim();
  if (!isRequired(username)) {
    showError(businessName, "Business cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      businessName,
      `Business must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(businessName);
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
const checkWebsite = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = website.value.trim();
 if (username !== '' && !isValidURL(username)) {
    showError(website, `Invalid url format.`);
  } else {
    showSuccess(website);
    valid = true;
  }
  return valid;
};

const checkPhone = () => {
  let valid = false;
  const phone = phoneValid.value;
  if(phone === 'true'){
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
      array[y].email +
      "</td>";
    e +=
      "<td class='success' style='width: 238px'>" +
      array[y].phoneNumber +
      "</td>";
    e +=
        "<td class='success' style='width: 238px'>" +
        array[y].website +
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
  let isWebsiteValid = checkWebsite();
  let isEmailValid = checkEmail();
  let isPhoneValid = checkPhone();
  // let isAddressValid = checkAddress();

  // var code = $("#phone").intlTelInput("getSelectedCountryData").dialCode;
  var phoneNumber = $("#phone").val();

  // console.log("code::", code);
  console.log("phoneNumber::", phoneNumber);

  let isFormValid =
    isUsernameValid &&
    isWebsiteValid ||
    (isEmailValid ||
    isPhoneValid)
  // submit to the server if the form is valid
  if (isFormValid) {
    $("#preloder").fadeIn();

    let data = {
      businessName: businessName.value.trim(),
      website: website.value.trim(),
      email: emailEl.value.trim(),
      phoneNumber: phoneEl.value.trim(),
      countryCode: countryCode.value,
      isRegistered: false,
      userRefKey: localStorage.getItem("*&#0__2t@m")
        ? localStorage.getItem("*&#0__2t@m")
        : null,
    };

    const validateData = data;


    console.log("isFormValid", data);
    postData(
      "https://dev.plugsity.com/plugisty/avi/v1/inviteBusinessUser",
      data
    )
      .then((data) => {
        // Display Modal
        console.log("response", data); // JSON data parsed by `data.json()` call
        if(data.Response.status == 200){
          console.log("inside :::::123213")
          businessName.value = "";
          website.value = "";
          emailEl.value = "";
          phoneEl.value = "";

          array.push(validateData);
          display_array();
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }else if(data.Response.status == 302){
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }else{
          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");
        }
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
  let isWebsiteValid = checkWebsiteMobile();
  let isEmailValid = checkEmailMobile();
  let isPhoneValid = checkPhoneMobile();
  // let isAddressValid = checkAddressMobile();

  let isFormValid =
    isUsernameValid &&
    isWebsiteValid ||
   ( isEmailValid ||
    isPhoneValid)

  // submit to the server if the form is valid
  if (isFormValid) {
    $("#preloder").fadeIn();

    let data = {
      businessName: businessNameMobileEl.value.trim(),
      website: businessWebsiteMobile.value.trim(),
      email: businessEmailMobileEl.value.trim(),
      phoneNumber: businessPhoneMobileEl.value.trim(),
      countryCode: countryCode.value,
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

          businessNameMobileEl.value = "";
          businessWebsiteMobile.value = "";
          businessEmailMobileEl.value = "";
          businessPhoneMobileEl.value = "";
          
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



form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "businessName":
        checkUsername();
        break;
      case "website":
        checkWebsite();
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

contactForm.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "businessNameMobile":
        checkUsernameMobile();
        break;
      case "businessWebsiteMobile":
        checkWebsiteMobile();
        break;
      case "businessEmailMobile":
        checkEmailMobile();
        break;
      case "businessMobile":
        checkPhoneMobile();
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
