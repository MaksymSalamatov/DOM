function createCalendar(elem, year, month) {
    let currentDate = new Date(year, month - 1, 1);
    let finDate = new Date(year, month, 0);

    while(currentDate.getDate() != 1) {
        currentDate.setDate(currentDate.getDate() - 1);
    }

    let table = document.createElement('table');
    table.innerHTML = "<tr><th>mon</th><th>thu</th><th>wed</th>" +
        "<th>tue</th><th>fri</th><th>sat</th><th>sun</th></tr>";

    while(currentDate <= finDate) {
        let tr = document.createElement('tr');
        for(let i = 0; i < 7; i++) {
            let td = document.createElement('td');
            td.textContent = currentDate.getDate();
            tr.append(td);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        table.append(tr);
    }
    elem.append(table);
}
let elem = document.querySelector('#calendar');

createCalendar(elem, 2022, 1);