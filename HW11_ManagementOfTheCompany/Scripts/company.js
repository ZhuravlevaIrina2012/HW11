class Company {
    constructor() {
        this._employees = [];
    }

    get employee() {
        return [...this._employees];
    }

    addEmployee(employee) {
        if (!this._employees.find((item => item.id === employee.id))) {
            this._employees.push(employee);
        }
    }

    removeEmployee(id){
        this._employees = this._employees.filter(item => item.id !== id);
    }

    get quantity(){
        return this._employees.length;
    }

    totalSalary(){
        return this._employees.reduce((res, item) => res + item.salary, 0);
    }

    avgAge(){
        return this._employees.reduce((res, item) => res + item.age, 0)/this.quantity;
    }

    sortByAge(){
        const res = [...this._employees];
        res.sort((e1, e2) => e1.age - e2.age);
        return res;
    }


}