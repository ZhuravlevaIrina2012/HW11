const company = new Company();
const id = document.getElementById('id');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const salary = document.getElementById('salary');
const btnAdd = document.getElementById('btnAdd');
const btnShow = document.getElementById('btnShow');
const btnGet = document.getElementById('btnGet');
btnAdd.addEventListener('click', handleAddEmployee);
btnShow.addEventListener('click', handleShowCompany);
btnGet.addEventListener('click', handleGetStats);
const employees = document.getElementById('employees');
const stats = document.getElementById('compStats');

function handleAddEmployee() {
    company.addEmployee(new Employee(id.value, firstName.value.trim(), lastName.value.trim(), age.value, salary.value));
    id.value = '';
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    salary.value = '';
}

function handleShowCompany(event) {
    while (employees.firstChild) {
        employees.removeChild(employees.firstChild);
    }
    company.employee.forEach(newList);
}

function newList(emp) {
    const li = document.createElement('li');
    li.append(emp.fullInfo());
    employees.append(li);
}

function handleGetStats() {
    while (stats.firstChild) {
        stats.removeChild(stats.firstChild);
    }
    const totalSalary = document.createElement('li');
    const salary = company.totalSalary();
    const avgSalary = document.createElement('li');
    const quantity = document.createElement('li');
    const quan = company.quantity;
    const minAge = document.createElement('li');
    const maxAge = document.createElement('li');
    const avgAge = document.createElement('li');
    const sort = company.sortByAge();
    totalSalary.append(`Total salary: ${salary}`);
    avgSalary.append(`Average salary: ${salary/quan}`);
    quantity.append(`Quantity of employees: ${quan}`);
    minAge.append(`Min age: ${sort[0].age}`);
    maxAge.append(`Max age: ${sort[quan - 1].age}`);
    avgAge.append(`Average age: ${company.avgAge()}`);
    stats.append(totalSalary, avgSalary, quantity, minAge, maxAge, avgAge);
}
