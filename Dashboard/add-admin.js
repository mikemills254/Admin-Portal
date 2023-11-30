const spinner = document.getElementById('spinner')
const submit = document.getElementById('register')
const form = document.getElementById('form');
const inputFields = form.querySelectorAll('input, select');

//get hospital details

firebase.auth().onAuthStateChanged(async(user)=>{
    if(user){
        const uid=user.uid;
        const response=await fetch(`https://firebasedata.herokuapp.com/api/v1/registerHospital/hospitalInfo/${uid}`);

        const json=await response.json();
        if(json.success){
            json.data.forEach((data)=>{

                localStorage.setItem("primeHospitalName", data.name);
                localStorage.setItem("primeHospitalId", data.uid);
                localStorage.setItem("primeHospitalRegNumber", data["reg-number"]);
            })
        }

    }
})



const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('form'));

    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });
    jsonData.hospital_name= localStorage.getItem("primeHospitalName");
    jsonData.hospital_id= localStorage.getItem("primeHospitalId")
    jsonData.hospital_reg_number= localStorage.getItem("primeHospitalRegNumber")

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

