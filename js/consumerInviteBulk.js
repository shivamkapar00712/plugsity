var jsonArr;

document.getElementById("fileUploader").addEventListener("change", (event) => {
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
      jsonArr = parsedJson;

      const verifiedData = parsedJson.filter((item) => isBetween(item.firstName.length , 3,20) && (item.firstName !== undefined) &&  item.email  || item.phoneNumber)

      jsonArr = verifiedData;


      document.getElementById("btn-sec").style.display = "block";

     

      // display_array
      var e = "<tbody>";
      e += "<thead>";
      e += " <tr>";
      e += "  <th>First name</th>";
      e += "  <th>Last name</th>";
      e += "    <th>Email address</th>";
      e += "   <th>Phone number</th>";
      e += "  </tr>";
      e += "</thead>";
      for (var y = 0; y < jsonArr.length; y++) {
        e += "<tr>";
        e +=
          "<td class='success' style='width: 238px'>" +
            jsonArr[y].firstName +
          "</td>";
        e +=
          "<td class='success' style='width: 238px'>" +
            jsonArr[y].lastName +
          "</td>";
        e +=
          "<td class='success' style='width: 238px'>" +
            `${jsonArr[y].email !== undefined ? jsonArr[y].email : '-'}` +
          "</td>";
        e +=
          "<td class='success' style='width: 238px'>" +
            `${jsonArr[y].phoneNumber !== undefined ? jsonArr[y].countryCode + jsonArr[y].phoneNumber : '-'}` +
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
const countryCode = document.querySelector("#phone2");
const phoneValid = document.querySelector("#phoneValid");


const firstNameMobile = document.querySelector("#firstNameMobile");
const lastNameMobile = document.querySelector("#lastNameMobile");
const emailMobileEl = document.querySelector("#emailMobile");
const phoneMobileEl = document.querySelector("#phoneMobile");
// const zipCodeMobile = document.querySelector("#zipCodeMobile");

const form = document.querySelector("#consumerInvite");
const contactForm = document.querySelector("#consumerMobileInvite");
var array = Array();

const checkUsernameMobile = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = firstNameMobile.value.trim();
  if (!isRequired(username)) {
    showError(firstNameMobile, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      firstNameMobile,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(firstNameMobile);
    valid = true;
  }
  return valid;
};

const checkLastnameMobile = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = lastNameMobile.value.trim();
  if (!isRequired(username)) {
    showError(lastNameMobile, "Lastname cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      lastNameMobile,
      `Lastname must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(lastNameMobile);
    valid = true;
  }
  return valid;
};

const checkPhoneMobile = () => {
  let valid = false;
  const phone = phoneValid.value;
  if(phone === 'true'){
    console.log("phone::inside::::92392939",phone)
    valid = true;
  }
  return valid;
};

const checkEmailMobile = (val) => {
  let valid = false;
  const email = emailMobileEl.value.trim();
  if (!isRequired(email)) {
    showError(emailMobileEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailMobileEl, "Email is not valid.");
  } else {
    showSuccess(emailMobileEl);
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
  const re = /^(\([0-9]{3}\)|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
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

const handleSubmit = () => {
  console.log("jsonArr", jsonArr);

  if(jsonArr.length == 0){
    $("#modal-data").html("Please verify data in excel should be correct") ;
    $("#modal-2").modal("show");
  }else{
    // submit to the server if the form is valid
    $("#preloder").fadeIn();


    const newArr = jsonArr.map((v) => ({
      firstName: v.firstName,
      lastName: v.lastName,
      email: v.email ? v.email : '',
      phoneNumber: v.phoneNumber ? v.phoneNumber : '',
      countryCode: v.countryCode,
      isRegistered: false,
      userRefKey: localStorage.getItem("*&#0__2t@m")
          ? localStorage.getItem("*&#0__2t@m")
          : null,
    }));

    async function processObjects() {
      for (const object of newArr) {
        await postData(
            "https://api.cs.plugsity.com/plugisty/avi/v1/inviteCustomer",
            object)
            .then((data) => {
              // Display Modal
              console.log("response", data); // JSON data parsed by `data.json()` call
              // location.href = "consumer-invite.html";

              if(data.Response.status == 200){
                $("#preloder").fadeOut();
                $("#modal-data").html(data.Response.message) ;
                $("#modal-2").modal("show");
                if(localStorage.getItem('isBusiness') == 'true'){
                  location.href = "business-invite.html";
                }else{
                  location.href = "consumer-invite.html";
                }
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
  }
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

  let isFormValid =
    isUsernameValid && isLastnameValid && (isEmailValid || isPhoneValid);

  // submit to the server if the form is valid
  if (isFormValid) {
    $("#preloder").fadeIn();

    let data = {
      firstName: firstNameMobile.value.trim(),
      lastName: lastNameMobile.value.trim(),
      email: emailMobileEl.value.trim(),
      phoneNumber: phoneMobileEl.value.trim(),
      countryCode: countryCode.value,
      isRegistered: false,
      userRefKey: localStorage.getItem("*&#0__2t@m")
        ? localStorage.getItem("*&#0__2t@m")
        : null,
    };

    const validateData = data;
    postData(
      "https://api.cs.plugsity.com/plugisty/avi/v1/inviteCustomer",
      data
    )
      .then((data) => {
        // Display Modal
        console.log("response", data); // JSON data parsed by `data.json()` call

        if(data.Response.status == 200){
          firstNameMobile.value = "";
          lastNameMobile.value = "";
          emailMobileEl.value = "";
          phoneMobileEl.value = "";

          $("#preloder").fadeOut();
          $("#modal-data").html(data.Response.message) ;
          $("#modal-2").modal("show");

          if(localStorage.getItem('isBusiness') == 'true'){
            location.href = "business-invite.html";
          }else{
            location.href = "consumer-invite.html";
          }

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

// form.addEventListener(
//   "input",
//   debounce(function (e) {
//     switch (e.target.id) {
//       case "firstNameMobile":
//         checkUsername();
//         break;
//       case "lastNameMobile":
//         checkLastname();
//         break;
//       case "emailMobile":
//         checkEmail();
//         break;
//       case "phoneMobile":
//         checkPhone();
//         break;
//     }
//   })
// );
//
contactForm.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "firstNameMobile":
        checkUsernameMobile();
        break;
      case "lastNameMobile":
        checkLastnameMobile();
        break;
      case "emailMobile":
        checkEmailMobile();
        break;
      case "phoneMobile":
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
