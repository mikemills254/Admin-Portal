document.getElementById('eye').addEventListener('click', () => {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("bi-eye-slash");
        eyeIcon.classList.add("bi-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("bi-eye");
        eyeIcon.classList.add("bi-eye-slash");
    }
})

document.getElementById('login-btn').addEventListener('click', async (e) => {
    e.preventDefault();

    const email=document.getElementById("email").value;
    const password= document.getElementById("passwordInput").value;

    console.log(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        window.location.replace('../Dashboard/dashboard.html');
    });
});
