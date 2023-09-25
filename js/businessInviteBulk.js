var jsonArr;

document.getElementById("fileUploader").addEventListener("change", (event) => {
  console.log("isdsad");
  var selectedFile = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (event) {
    var data = event.target.result;
    var workbook = XLSX.read(data, {
      type: "binary",
    });
    workbook.SheetNames.forEach(function (sheetName) {
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[sheetName]
      );
      var json_object = JSON.stringify(XL_row_object);

      var parsedJson = JSON.parse(json_object);

      const verifiedData = parsedJson.filter((item) => isBetween(item.businessName.length , 3,20) && (item.businessName !== undefined) &&  isEmailValid(item.email) && isValidURL(item.website) && isValidPhone(item.phoneNumber))

      jsonArr = verifiedData;


      document.getElementById("btn-sec").style.display = "block";

      // for (let item in json_object) {
      //   console.log("jsonObject", json_object[item]);
      // }

      // display_array
      var e = "<tbody>";
      e += "<thead>";
      e += " <tr>";
      e += "  <th>Business name</th>";
      e += "  <th>Website</th>";
      e += "   <th>Email address</th>";
      e += "   <th>Phone number</th>";
      e += "   <th>Address</th>";
      e += "   <th>Social Media</th>";
      e += "  </tr>";
      e += "</thead>";
      for (var y = 0; y < jsonArr.length; y++) {
        e += "<tr>";
        e +=
          "<td class='success' style='width: 238px'>" +
            jsonArr[y].businessName +
          "</td>";
        e +=
          "<td class='success' style='width: 238px'>" +
            jsonArr[y].website +
          "</td>";
        e +=
          "<td class='success' style='width: 238px'>" +
            jsonArr[y].email +
          "</td>";
        e +=
          "<td class='success' style='width: 238px'>" +
            jsonArr[y].phoneNumber +
          "</td>";
        e +=
          "<td class='success' style='width: 238px'>" +
            jsonArr[y].address +
          "</td>";
        e +=
          "<td class='success' style='width: 238px'>" +
            jsonArr[y].socialMedia +
          "</td>";
        e += "<tr>";
      }
      e += "<tbody/>";

      document.getElementById("tableData").innerHTML = e;
      // document.getElementById("jsonObject").innerHTML = json_object;
    });
  };
  reader.onerror = function (event) {
    console.error("File could not be read! Code " + event.target.error.code);
  };
  reader.readAsBinaryString(selectedFile);
});

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#phone");
const zipCode = document.querySelector("#zipCode");

const businessNameMobileEl = document.querySelector("#businessNameMobile");
const businessWebsiteMobile = document.querySelector("#businessWebsiteMobile");
const businessEmailMobileEl = document.querySelector("#businessEmailMobile");
const businessPhoneMobileEl = document.querySelector("#businessMobile");
const businessAddressMobileEl = document.querySelector("#businessAddMobile");
const businessSocialMobileEl = document.querySelector("#businessSocialMobile");

const form = document.querySelector("#consumerInvite");
const contactForm = document.querySelector("#businessMobileInvite");
var array = Array();

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
    // showError(emailEl, "Email cannot be blank.");
    return false
  } else if (!isEmailValid(email)) {
    // showError(emailEl, "Email is not valid.");
    return false
  } else {
    return true
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



const handleRedirect = () => {
  location.href = "consumer-invite.html";
};

const  handleSubmit =  () => {
  console.log("jsonArr", jsonArr);

  // submit to the server if the form is valid
  $("#preloder").fadeIn();

  // json.map((item, index) => {
  //   console.log("item::", item);
  // });

  const newArr = jsonArr.map((v) => ({
    ...v,
    isRegistered: false,
    userRefKey: localStorage.getItem("*&#0__2t@m")
      ? localStorage.getItem("*&#0__2t@m")
      : null,
  }));

  console.log("newArr::", newArr);


  // newArr.forEach((object) => {
  //   callApiForObject(object);
  // });

  async function processObjects() {
    for (const object of newArr) {
      await postData(
            "https://dev.plugsity.com/plugisty/avi/v1/inviteBusinessUser",
            object)
            .then((data) => {
              // Display Modal
              console.log("response", data); // JSON data parsed by `data.json()` call

              if(data.Response.status == 200){
                $("#preloder").fadeOut();
                $("#modal-data").html(data.Response.message) ;
                $("#modal-2").modal("show");
                location.href = "business-invite.html";
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
              $("#preloder").fadeOut();
              $("#modal-data").html("Something went wrong please try again") ;
              $("#modal-2").modal("show");
            });

    }
  }

  // Start processing objects and handle any exceptions
  processObjects()
      .then(() => {
        console.log('All API requests completed.');
      })
      .catch((error) => {
        $("#preloder").fadeOut();
        $("#modal-data").html(error) ;
        $("#modal-2").modal("show");
        console.error('Error during processing:', error);
      });



};

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
          businessNameMobileEl.value = "";
          businessWebsiteMobile.value = "";
          businessEmailMobileEl.value = "";
          businessPhoneMobileEl.value = "";
          businessAddressMobileEl.value = "";
          businessSocialMobileEl.value = "";

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
          $("#preloder").fadeOut();
          $("#modal-data").html("Something went wrong please try again") ;
          $("#modal-2").modal("show");
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
