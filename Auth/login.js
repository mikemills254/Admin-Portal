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
    const formData = new FormData(document.getElementById('login-form'));

    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    try {
        const response = await fetch('https://firebasedata.herokuapp.com/api/v1/loginSuperAdmin', {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                "Content-Type": "application/json",
            }
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.message}`);
        } else {
            window.location.replace('../Dashboard/dashboard.html');
        }

    } catch (error) {
        console.error('Error:', error.message || error);
    }
});
