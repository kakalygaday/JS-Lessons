// use addEventListener to handle form submit event
const form = document.querySelector('form')
form.addEventListener('submit', function () {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    // formValidation(name, surname, email, number);

    formValidation(name, surname, email, number).then(function (result) {
        if (result) {
            addAttendee(name, surname, email, number);
            alert("Form is valid!") 
        } else {
            alert("Form is invalid, try again!");
        }
    }).catch(function (error) {
        console.log(error);  
    }); 
})

function formValidation(name, surname, email, number) {
    if (name.length > 0 && surname.length > 0 && email.length > 0 && number > 13) {
        return true;
    } else {
        return false;
    }
}

function addAttendee(name, surname, email, number) {
    var attendees = document.getElementById('attendee')
    attendees.innerHTML = 
     `<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">${name}, ${surnamename}, ${number}
            </div>
            ${email}
        </div>
   <span class="badge bg-primary rounded-pill">M</span>
     </li>`; 
}

function addAttendee(name, surname, email, number) {
    return new Promise(function (resolve, reject) {
        if (formValidation(name, surname, email, number)) {
            resolve('Attendee added!'); 
        } else { 
            reject('error found!'); 
        } 
    }); 
}