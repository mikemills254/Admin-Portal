const spinner = document.getElementById('spinner')
const submit = document.getElementById('register')
const form = document.getElementById('form');
const inputFields = form.querySelectorAll('input, select');




const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('form'));

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
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.message}`);
        }else {

            const json=await response.json();
            console.log(json);
            //window.location.replace('index.html')
        }

    } catch (error) {
        console.error('Error:', error.message || error);
    }
}


document.getElementById('submit').addEventListener('click', handleSubmit);


// document.getElementById('dashboard-btn').addEventListener('click', () => {
//     window.location = '../Dashboard/dashboard.html'
// })

