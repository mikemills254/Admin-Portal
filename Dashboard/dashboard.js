document.getElementById('onboard-btn').addEventListener('click', async () => {
    window.location = "./onboardhospital.html";
});

document.getElementById('dashboard-btn').addEventListener('click', () => {
    window.location = './dashboard.html';
});

document.addEventListener('DOMContentLoaded', async () => {
    console.log('loaded');
    try {
        const response = await fetch('https://firebasedata.herokuapp.com/api/v1/registerHospital', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            let responseData = await response.json();

            // Check if 'data' key exists and is an array
            const jsonData = responseData.data || [];

            jsonData.forEach(element => {
                var body = document.createElement('tr');

                body.innerHTML = `
                    <td>${element.name}</td>
                    <td>${element['reg-number']}</td>
                    <td>${element.location}</td>
                    <td>${element.phone}</td>
                    <td>${element.email}</td>
                    <td>${element.country}</td>
                `;

                // Append to table
                document.getElementById('hospitalTableBody').appendChild(body);
            });
        }
    } catch (error) {
        console.error(error);
    }
});
