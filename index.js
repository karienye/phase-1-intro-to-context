// Your code here
const  createEmployeeRecord = function (names, digits){ 
    const newEmployee = [ firstName = names,
     familyName= names,
     titleField = names,
     payPerhour= digits,
      field = names,
  timeInEvents = [],
 timeOutEvents = [] ]
 
 }
const createEmployeeRecords = function (array){
 let newArray ; 
 for (i= 0; i<newEmployee.length; i++){
return newArray;
}
}

const createTimeInEvent = function (timeIn){
    let [date, hour] = timeIn.split(' ')

    return timeInEvents.push ({
        type: 'arrival',
        hour: parseInt(hour),
        date:'',
    })
  return this;
}
const createTimeOutEvent = function (timeOut){
    let [date, hour] = timeOut.split(' ')

    return timeOutEvents.push ({
        type: 'arrival',
        hour: parseInt(hour),
        date:'',
    })
  return this;

}

const hoursWorkedOnDate = function (dateIn){
    let workingHours = this.timeInEvents.find(function(e){
        return e.date === dateIn;
    })
    let notWorkingHours = this.timeoutEvents.find(function(e){
        return e.date === dateIn;
    })
    return (notWorkingHours.hour - workingHours.hour) / 100

}

const wagesEarnedOnDate = function (pay){ 
    let wages = hoursWorkedOnDate.call(this, pay)
     this.payPerhour 
     return parseFloat(wages.toString())

}

const findEmployeeByFirstName = function (srcArray, firstName){
    return srcArray.find(function(rec){
        return rec.firstName === firstName
    })
}

const calculatePayroll = function (createEmployeeRecords){
    return createEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    })
}
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 

    return payable 
}
