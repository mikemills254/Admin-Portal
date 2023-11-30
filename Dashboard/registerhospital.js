const spinner = document.getElementById('spinner')
const submit = document.getElementById('register')
const form = document.getElementById('form');
const inputFields = form.querySelectorAll('input, select');

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
    };
    const success = (pos) => {
        const longitude = pos.coords.longitude
        const latitude = pos.coords.latitude
        console.log(pos)
    }

    const error = (err) => {
        console.error('Unable to fetch your location', err)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
})

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('form'));

    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    console.log(jsonData)

}


document.getElementById('register').addEventListener('click', async (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('form'));

    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    console.log(jsonData)
    try {
        const response = await fetch('https://firebasedata.herokuapp.com/api/v1/registerHospital', {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                "Content-Type": "application/json",
            }
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.message}`);
        }else {
            console.log('successfully registered', jsonData)
            window.location.replace('index.html')
        }

    } catch (error) {
        console.error('Error:', error.message || error);
    }
});


document.getElementById('dashboard-btn').addEventListener('click', () => {
    window.location = './dashboard.html'
})

