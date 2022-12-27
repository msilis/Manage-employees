let currentEmployees = []

class Employee{
    constructor(name, age, employeeNumber, employeeType, salesTarget){
        this.name = name,
        this.age = age,
        this.employeeNumber = employeeNumber,
        this.employeeType = employeeType
        this.salesTarget = salesTarget
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getEmployeeNumber(){
        return this.employeeNumber
    }

    getEmployeeType(){
        return this.employeeType
    }
}

//Salaried Employee

class Salaried extends Employee{
    constructor(name, age, employeeNumber, employeeType, salesTarget, salary){
        super(name, age, employeeNumber, employeeType, salesTarget),
        this.salary = salary;
    }

    getSalary(){
        return this.salary
    }

    
    //Bonus compensation
    targetMet(){
        console.log(`${this.getName()} (${this.getEmployeeType()}) has met the sales target this month and gets a bonus of £${this.salary * .10} and has a new salary of £${this.salary = (this.salary * .10) + this.salary} per month.`)
    }
}


//Hourly Employee
class Hourly extends Employee{
    hoursWorked = ''
    constructor(name, age, employeeNumber, employeeType, salesTarget, hourlyRate){
        super(name, age, employeeNumber, employeeType, salesTarget),
        this.hourlyRate = hourlyRate
    }

    setHoursWorked(hours){
        this.hoursWorked = Number(hours);
    }
    getHoursWorked(){
        return this.hoursWorked
    }

    getHourlyRate(){
        return this.hourlyRate
    }

    getPay(){
        return this.hoursWorked * this.hourlyRate
    }
    //Bonus compensation
    targetMet(){
        console.log(`${this.getName()} (${this.getEmployeeType()}) has met the sales target this month and gets a bonus of£${this.hourlyRate * .5} per hour and has a new hourly rate of £${this.hourlyRate = (this.hourlyRate * .5) + this.hourlyRate}`)
    }
    
}

//Hybrid Employee

class Hybrid extends Employee{
    hoursWorked = '';
    constructor(name, age, employeeNumber, employeeType, salesTarget, salary, hourlyRate){
        super(name, age, employeeNumber, employeeType, salesTarget),
        this.salary = salary,
        this.hourlyRate = hourlyRate
    }
    
    setHoursWorked(hours){
        this.hoursWorked = Number(hours);
    }

    getHourlyRate(){
        console.log(this.hourlyRate)
    }

    getHoursWorked(){
        console.log(hoursWorked)
    }

    getPay(){
        console.log(this.salary + (this.hourlyRate * hoursWorked))
    }
    //Bonus compensation
    targetMet(){
       console.log(`${this.getName()} (${this.getEmployeeType()}) has met the sales target this month and gets a bonus of £${this.hourlyRate * .2} per hour and has a new hourly rate of £${this.hourlyRate = (this.hourlyRate * .2) + this.hourlyRate}`)
    }

}

//Function for bonus
//==============================================================================

function applyBonus(employee, monthlySales){
    if (monthlySales >= employee.salesTarget){
        //console.log(employee.getName())
        employee.targetMet()
    }else console.log(`${employee.getName()} did not meet the target this month`)
}

//Test employees
//==============================================================================

//Salaried

murray = new Salaried('Fintan Murray', 32, 101, 'salaried', 50000, 3000);
krueger = new Salaried('Ameer Krueger', 47, 102, 'salaried', 50000, 4200);

//Hourly

farrell = new Hourly('Isabelle Farrell', 34, 103, 'hourly', 40000, 27.50);
parks = new Hourly('Miles Parks', 24, 104, 'hourly', 40000, 23.30)

//Hybrid

holder = new Hybrid('Travis Holder', 58, 105, 'hybrid', 45000, 3300, 47.50);
beck = new Hybrid('Natasha Beck', 41, 106, 'hybrid', 45000, 2980, 39.20);

//Push employees into employee array for easier display
currentEmployees.push(murray, krueger, farrell, parks, holder, beck)

//Set employee hours and run bonus calculation
console.table(currentEmployees)
applyBonus(murray, 80000)
applyBonus(krueger, 34000)
applyBonus(farrell, 50000)
applyBonus(parks, 74000)
applyBonus(holder, 45000)
applyBonus(beck, 30000)