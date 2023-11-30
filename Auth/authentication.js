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

document.getElementById('register-btn').addEventListener('click', async (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('register-form'));

    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    try {
        const response = await fetch('https://firebasedata.herokuapp.com/api/v1/primeAdmin', {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                "Content-Type": "application/json",
            }
        });

        console.log(response)
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response}`);
        } else {
            window.location.replace('../Dashboard/dashboard.html');
            console.log(response)
        }

    } catch (error) {
        console.error('Error:', error.message || error);
    }
});
