interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const studentsList: Student[] = [
    {firstName: 'kelly', lastName: 'koe', age: 24, location: 'argentina'},
    {firstName: 'dally', lastName: 'doe', age: 24, location: 'denmark'},
]


document.addEventListener('DOMContentLoaded', ()=>{
    const table = document.createElement('table');
    table.innerHTML = '<tr><th> First Name </th> <th> Location </th></tr>';
    studentsList.forEach(o=>{
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const locationCell = document.createElement('td');
        nameCell.innerText = o.firstName;
        locationCell.innerText = o.location;
        row.appendChild(nameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    })
    document.body.appendChild(table);
})
