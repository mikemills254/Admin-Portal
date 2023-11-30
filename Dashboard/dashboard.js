document.getElementById('onboard-btn').addEventListener('click', async () => {
    window.location = "./add-admin.html";
});

document.getElementById('dashboard-btn').addEventListener('click', () => {
    window.location = './dashboard.html';
});

document.addEventListener('DOMContentLoaded', async () => {
    async function fetchData() {
        try {
            const response = await fetch('https://firebasedata.herokuapp.com/api/v1/registerHospital', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.status === 200) {
                let responseData = await response.json();
                const jsonData = responseData.data || [];
                return jsonData;
            }
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async function appendDataToTable() {
        const jsonData = await fetchData();
    
        jsonData.forEach(element => {
            var body = document.createElement('tr');
            body.style.marginBottom = '2px';
    
            body.innerHTML = `
                <td class="td items-center justify-center py-1 border-b-[1px] border-[#0ebce9] text-center">${element.name}</td>
                <td class="td items-center justify-center py-1 border-b-[1px] border-[#0ebce9] text-center">${element['reg-number']}</td>
                <td class="td items-center justify-center py-1 border-b-[1px] border-[#0ebce9] text-center">${element.location}</td>
                <td class="td items-center justify-center py-1 border-b-[1px] border-[#0ebce9] text-center">${element.phone}</td>
                <td class="td items-center justify-center py-1 border-b-[1px] border-[#0ebce9] text-center">${element.email}</td>
                <td class="td items-center justify-center py-1 border-b-[1px] border-[#0ebce9] text-center">${element.country}</td>
            `;
    
            document.getElementById('hospitalTableBody').appendChild(body);
        });
    }
    appendDataToTable()
});



function handleSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.getElementById('hospitalTableBody').getElementsByTagName('tr');

    for (let row of rows) {
        let name = row.querySelector('.td:nth-child(1)').textContent.toLowerCase();
        let regNumber = row.querySelector('.td:nth-child(2)').textContent.toLowerCase();
        let location = row.querySelector('.td:nth-child(3)').textContent.toLowerCase();
        let email = row.querySelector('.td:nth-child(5)').textContent.toLowerCase();

        if (name.includes(searchInput) || regNumber.includes(searchInput) || location.includes(searchInput) || email.includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}


