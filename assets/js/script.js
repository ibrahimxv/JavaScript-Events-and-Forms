// Task 1 — Live Character Counter

// const textArea = document.getElementById("text-area");
// const count = document.getElementById("count");
// const remaining = document.getElementById("remaining");
// const warning = document.getElementById("warning");

// textArea.addEventListener("input", () => {
//     let currentLength = textArea.value.length;
//     let remainingCount = 200 - currentLength;

//     count.textContent = currentLength;
//     remaining.textContent = remainingCount + "characters remaining";

//     if (currentLength >= 180){
//         warning.textContent = "Warning: You are approaching the character limit!";
//     } else{
//         warning.textContent = "";
//     }
// });

// Task 2 — Password Strength Checker

// const password = document.getElementById("password");
// const result = document.getElementById("result");

// password.addEventListener("input", () => {
//     let value = password.value;

//     let hasLength = value.length >= 8;
//     let hasUpperCase = /[A-Z]/.test(value);
//     let hasLowerCase = /[a-z]/.test(value);
//     let hasNumber = /[0-9]/.test(value);
//     let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

//     let score = 0;
//     if (hasLength) score++;
//     if (hasUpperCase) score++;
//     if (hasLowerCase) score++;
//     if (hasNumber) score++;
//     if (hasSpecialChar) score++;

//     if (value.length === 0) {
//         result.textContent = "";
//     } else if (score <= 2) {
//         result.textContent = "Weak";
//     } else if(score <= 4) {
//         result.textContent = "Medium";
//     } else {
//         result.textContent = "Strong";
//     }
// });

// password.addEventListener("blur", () => {
//     if (password.value === "") {
//         result.style.display = "none";
//     }
// });

// password.addEventListener("focus", () => {
//     result.style.display = "block";
// });

// Task 3 — Select Event Handler
// const country = document.getElementById("country");
// const city = document.getElementById("city");
// const result = document.getElementById("result");

// const cities = {
//     "Azerbaijan": ["Baku", "Ganja", "Sumqayit"],
//     "Turkey": ["Istanbul", "Ankara", "Izmir"],
//     "Germany": ["Berlin", "Hamburg", "Munich"]
// };

// country.addEventListener("change", () => {
//     city.innerHTML = "<option value=''>Select a city</option>";
//     let selectedCountry = country.value;

//     if (selectedCountry === ""){
//         city.disabled = true;
//     } else {
//         city.disabled = false;

//         cities[selectedCountry].forEach(cityName => {
//             let option = document.createElement("option");
//             option.value = cityName;
//             option.textContent = cityName;
//             city.appendChild(option);
//         });
//     }
//     result.textContent = "Country: " + country.value;
// });
// city.addEventListener("change", () => {
//     result.textContent = "Country: " + country.value + ", City: " + city.value;
// });

// Task 4 — Email Validation
// const email = document.getElementById("email");
// const result = document.getElementById("result");
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// email.addEventListener("input", () => {
//     let value = email.value;

//     if (value.length === 0) {
//         result.textContent = "";
//         result.style.color = "";
//     } else if (emailRegex.test(value)) {
//         result.textContent = "Valid email address";
//         result.style.color = "green";
//     } else {
//         result.textContent = "Invalid email address";
//         result.style.color = "red";
//     }
// });
// email.addEventListener("blur", () => {
//     if (email.value === "") {
//         result.textContent = "";
//     }
// });

// Task 5 — Registration Form
// const fullName = document.getElementById("full-name");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirm-password");
// const result = document.getElementById("result");
// const form = document.getElementById("registration-form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let nameValue = fullName.value.trim();
//     let emailValue = email.value.trim();
//     let passwordValue = password.value;
//     let confirmPasswordValue = confirmPassword.value;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (nameValue === "" || emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
//         result.textContent = "All fields are required.";
//         result.style.color = "red";
//     } else if (!emailRegex.test(emailValue)) {
//         result.textContent = "Please enter a valid email address.";
//         result.style.color = "red";
//     } else if (nameValue.length < 3) {
//         result.textContent = "Full name must be at least 3 characters long.";
//         result.style.color = "red";
//     } else if (passwordValue.length < 8) {
//         result.textContent = "Password must be at least 8 characters long.";
//         result.style.color = "red";
//     } else if (passwordValue !== confirmPasswordValue) {
//         result.textContent = "Passwords do not match.";
//         result.style.color = "red";
//     } else {
//         result.style.color = "green";

//         result.innerHTML = `
//             <h3>Registration Successful!</h3>
//             <p>Full Name: ${nameValue}</p>
//             <p>Email: ${emailValue}</p>
//         `;
//     }
// });

// Task 6 — Keyboard Event Tracker
// const textArea = document.getElementById("text-area");
// const lastKey = document.getElementById("last-key");
// const keyCount = document.getElementById("key-count");
// const result = document.getElementById("result");

// let count = 0;

// textArea.addEventListener("keydown", (event) => {
//     count++;

//     lastKey.textContent = event.key;
//     keyCount.textContent = count;

//     if (event.key === "Enter" && event.ctrlKey) {
//         result.textContent = "Message sent successfully!";
//     } 
//     else if (event.key === "Enter") {
//         result.textContent = "You pressed Enter!";
//     }

//     if (event.key === "Escape") {
//         textArea.value = "";
//         result.textContent = "Textarea cleared!";
//     }
// });

// textArea.addEventListener("keyup", (event) => {
//     if (event.key === "Escape") {
//         result.textContent = "Textarea cleared!";
//     }
// });

// Task 7 — Dynamic Price Calculator
// const price = document.getElementById("product-price");
// const quantity = document.getElementById("quantity");
// const discount = document.getElementById("discount");
// const totalPrice = document.getElementById("total-price");
// const finalPrice = document.getElementById("final-price");
// const result = document.getElementById("result");

// function CalculatePrice() {
//     let productPrice = parseFloat(price.value);
//     let productQuantity = Number(quantity.value);
//     let discountPercent = parseFloat(discount.value);

//     if (price.value === "" || quantity.value === "" || discount.value === "") {
//         result.textContent = "Please fill in all fields.";
//         return;
//     }

//     if (productPrice < 0 || productQuantity < 0) {
//         result.textContent = "Please enter valid positive numbers.";
//         return;
//     }

//     if (!Number.isInteger(productQuantity)) {
//         result.textContent = "Quantity must be a whole number.";
//         return;
//     }

//     if (discountPercent < 0 || discountPercent > 100) {
//         result.textContent = "Discount must be between 0 and 100.";
//         return;
//     }

//     let total = productPrice * productQuantity;
//     let final = total * (1 - discountPercent / 100);

//     totalPrice.textContent = total.toFixed(2);
//     finalPrice.textContent = final.toFixed(2);

//     result.textContent = "";
// };

// price.addEventListener("input", CalculatePrice);
// quantity.addEventListener("input", CalculatePrice);
// discount.addEventListener("input", CalculatePrice);

// price.addEventListener("change", CalculatePrice);
// quantity.addEventListener("change", CalculatePrice);
// discount.addEventListener("change", CalculatePrice);

// CalculatePrice();

// Task 8 — Multi-Field Form Validator

// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const phoneNumber = document.getElementById("phonenumber");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirmPassword");
// const result = document.getElementById("result");
// const form = document.getElementById("registerForm");
// const submitBtn = document.getElementById("submit-btn");
// const usernameError = document.getElementById("usernameError");
// const emailError = document.getElementById("emailError");
// const phoneError = document.getElementById("phoneError");
// const passwordError = document.getElementById("passwordError");
// const confirmPasswordError = document.getElementById("confirmPasswordError");

// function validateUsername(){
//     let value = username.value;

//     if (value.length < 5 || value.length > 15) {
//         usernameError.textContent = "Username must be between 5 and 15 characters.";
//         return false;
//     } 
//     else if (!/^[a-zA-Z0-9]+$/.test(value)) {
//         usernameError.textContent = "Username can only contain letters and numbers.";
//         return false;
//     }

//     usernameError.textContent = "";
//     return true;
// }

// function validateEmail() {
//     let value = email.value;
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(value)) {
//         emailError.textContent = "Please enter a valid email address.";
//         return false;
//     }

//     emailError.textContent = "";
//     return true;
// };

// function validatePhoneNumber() {
//     let value = phoneNumber.value;
//     let phoneRegex = /^\d{10}$/;

//     if (!phoneRegex.test(value)) {
//         phoneError.textContent = "Phone number must be exactly 10 digits.";
//         return false;
//     }

//     phoneError.textContent = "";
//     return true;
// };

// function validatePassword() {
//     let value = password.value;

//     if (value.length < 8) {
//         passwordError.textContent = "Password must be at least 8 characters long.";
//         return false;
//     }
//     else if (!/[A-Z]/.test(value)) {
//         passwordError.textContent = "Password must contain at least one uppercase letter.";
//         return false;
//     }
//     else if (!/[0-9]/.test(value)) {
//         passwordError.textContent = "Password must contain at least one number.";
//         return false;
//     }
//     else if (!/[^A-Za-z0-9]/.test(value)) {
//         passwordError.textContent = "Password must contain at least one special character.";
//         return false;
//     }

//     passwordError.textContent = "";
//     return true;
// };

// function validateConfirmPassword() {
//     let passwordValue = password.value;
//     let confirmPasswordValue = confirmPassword.value;

//     if (confirmPasswordValue !== passwordValue || confirmPasswordValue === "") {
//         confirmPasswordError.textContent = "Passwords do not match.";
//         return false;
//     }

//     confirmPasswordError.textContent = "";
//     return true;
// };

// function checkForm(){
//     let isUsernameValid = validateUsername();
//     let isEmailValid = validateEmail();
//     let isPhoneValid = validatePhoneNumber();
//     let isPasswordValid = validatePassword();
//     let isConfirmPasswordValid = validateConfirmPassword();

//     if(isUsernameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid){
//         submitBtn.disabled = false;
//     } else {
//         submitBtn.disabled = true;
//     }
// }

// username.addEventListener("input", checkForm);
// email.addEventListener("input", checkForm);
// phoneNumber.addEventListener("input", checkForm);
// password.addEventListener("input", checkForm);
// confirmPassword.addEventListener("input", checkForm);

// username.addEventListener("blur", checkForm);
// email.addEventListener("blur", checkForm);
// phoneNumber.addEventListener("blur", checkForm);
// password.addEventListener("blur", checkForm);
// confirmPassword.addEventListener("blur", checkForm);

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     checkForm();

//     if(submitBtn.disabled === false){
//         alert("Form submitted successfully!");
//         form.reset();
//         submitBtn.disabled = true;
//     }
// });

// Task 9 — Dynamic Form Generator
// const formType = document.getElementById("formType");
// const form = document.getElementById("dynamicForm");
// const result = document.getElementById("result");

// formType.addEventListener("change", () => {
//     form.innerHTML = "";
//     result.textContent = "";

//     let selectedForm = formType.value;

//     let inputs = [];

//     if (selectedForm === "login") {
//         inputs = ["Email", "Password"];
//     }
//     else if (selectedForm === "register") {
//         inputs = ["Full Name", "Email", "Password", "Confirm Password"];
//     }
//     else if (selectedForm === "contact") {
//         inputs = ["Name", "Email", "Feedback"];
//     }

//     inputs.forEach(function (inputName) {
//         let input;

//         if (inputName === "Message") {
//             input = document.createElement("textarea");
//         } else {
//             input = document.createElement("input");
//         }

//         input.placeholder = inputName;
//         input.name = inputName;

//         if (inputName === "Password" || inputName === "Confirm Password") {
//             input.type = "password";
//         }
//         else if (inputName === "Email") {
//             input.type = "email";
//         }
//         else {
//             input.type = "text";
//         }

//         input.required = true;

//         form.appendChild(input);

//         let error = document.createElement("p");
//         error.className = "error";
//         error.style.color = "red";

//         form.appendChild(error);
//     });
//     if (selectedForm !== "") {
//         let submitBtn = document.createElement("button");
//         submitBtn.type = "submit";
//         submitBtn.textContent = "Submit";
//         form.appendChild(submitBtn);
//     }
// });

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let isValid = true;
//     let inputs = form.querySelectorAll("input, textarea");
//     let errors = form.querySelectorAll(".error");

//     inputs.forEach((input, index) => {
//         let value = input.value.trim();

//         if (value === "") {
//             errors[index].textContent = input.placeholder + " is required.";
//             isValid = false;
//         }
//         else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//             errors[index].textContent = "Please enter a valid email address.";
//             isValid = false;
//         }
//         else if ((input.placeholder === "Password" || input.placeholder === "Confirm Password") && value.length < 8) {
//             errors[index].textContent = "Password must be at least 8 characters long.";
//             isValid = false;
//         }

//         values[input.name] = value;
//     });
//     if (!isValid) {
//         return;
//     }

//     if (formType.value === "registration") {

//         if (values["Password"] !== values["Confirm Password"]) {
//             errors[3].textContent = "Passwords do not match!";
//             return;
//         }

//     }

//     result.innerHTML = "<h3>Form Submitted Successfully!</h3>";

//     for (let key in values) {

//         let paragraph = document.createElement("p");

//         paragraph.textContent = key + ": " + values[key];

//         result.appendChild(paragraph);

//     }

// });