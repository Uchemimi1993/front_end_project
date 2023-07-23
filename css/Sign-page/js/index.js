const Sign_Up_form = document.querySelector("#Sign_Up_form");
const popup_info = document.querySelector("#popup_info");

Sign_Up_form.addEventListener('submit', function(e) {
    e.preventDefault();
});

// let form = new FormData(e.target);

// let userData = Object.fromEntries(form);

// // destructure fields
// const {firstname, lastname,Username, email, password, Re_Enter_Password} = userData;

// // check if fields are empty
// if (!firstname|| !lastname|| !Username|| !email|| !password|| !Re_Enter_Password) {
//     // throw error message
//     return (popup_info.innerHTML = "fill all properly!");
// } else {
//     popup_info.innerHTML = "";
// }

