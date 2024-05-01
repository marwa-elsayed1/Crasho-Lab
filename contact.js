
const form = document.getElementById('contact-form');


function emailSend() {
    fetch("http://34.202.165.48:3000/sendEmail", {
    // fetch("http://localhost:3000/sendEmail", {
    // fetch("https://ksa-crashlab-mailer-new-production.up.railway.app/sendEmail", {


        method: "POST",
        body: JSON.stringify({
            "name": document.getElementById('username').value,
            "email": document.getElementById('useremail').value,
            "subject": document.getElementById('usersub').value,
            "message": document.getElementById('usermsg').value,
        }),

        headers: {
            "Content-type": "application/json",
        }
    })
        .then(response => {
            console.log(response);

        })
        .catch((err) => {
            console.log(err);
        });
    console.log("hello")
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
