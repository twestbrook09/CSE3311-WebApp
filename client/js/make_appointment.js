import Student from "./Student.js";
import Appointment from "./Appointment.js";
//const { response } = require("express");


//initiate all data on form

var button = document.getElementById("submit");

button.addEventListener("click", bookAppointment);

function bookAppointment() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var key = document.getElementById("key");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    console.log(fname.value);
    if(!fname.value) {
        return alert("Please enter your first name!");
    }
    else if(!lname.value) {
        return alert("Please enter your last name!");
    }
    else if(!email.value) {
        return alert("Please enter your email address!");
    }
    else if(!key.value) {
        return alert("Please enter the key given by the instructor this semester!");
    }
    else if(!date.value) {
        return alert("Please enter a date!");
    }
    else if(!time.value) {
        return alert("Please specify a time to book an appointment!");
    }

    var apt = new Appointment(date.value, new Student(`${fname.value} ${lname.value}`, utaid.value, 2021), 15);

    // *** Send data to server for inserting to database
    
    fetch('http://localhost:5000/insertAppointment',{
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({fname : fname.value, lname: lname.value, email: email.value, key: key.value, date: date.value, time: time.value})
    })
    .then(response => response.json())

    // ***
    


    alert(`Appointment booked for ${apt.getStudent.getName} on ${apt.getDate} for ${apt.timeLength} minutes.`);
}



// Disable some dates ****************
document.getElementById('date').onchange = function(e){
    var tempDate = new Date(e.target.value);

    const currDate = new Date();
    var nextDay = new Date();
    var nextTwoWeek = new Date();

    nextDay.setDate(currDate.getDate() + 1);

    if(tempDate.getDay() == 5 || tempDate.getDay() == 6)
    {
        alert('No appointments available for weekends.');
        e.target.value = '';
    }
    else if((tempDate.getDate() < nextDay.getDate()) && (tempDate.getMonth() <= currDate.getMonth()) )
    {
        alert('Appointment booking available only from next day.');
        e.target.value = '';
    }
};
// ****************
