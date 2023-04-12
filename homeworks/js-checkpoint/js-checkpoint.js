const form = document.querySelector('form');
form.addEventListener('submit', formValidation);

function formValidation(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    if (name.length === 0 || surname.length === 0 || email.length === 0 || number <= 13) {
        alert('Please fill the empty line!');
    } else {
        addAttendee(name, surname, email, number)
            .then(result => {
                if (result === 'Attendee added!') {
                    form.submit();
                } else {
                    alert(result.message || 'Attendee is not added!')
                }
            }).catch
    }
}

function addAttendee(name, surname, email, number) {
    return new Promise(function ({ resolve, reject }) {
        if (name.length === 0 || surname.length === 0 || email.length === 0 || number <= 13) {
            reject('Please fill the empty line!');
        } else {
            const attendees = document.getElementById("attendees");
            attendees.innerHTML +=
                `<li class='list-group-item'>
                        <div class='ms-2 me-auto'> <div class='fw-bold'>${name} ${surname} ${number}</div> ${email}</div>
                        <span class='badge bg-primary rounded-pill'>M</span></div>
                    </li>`;
            resolve('Attendee added!')
        }
    })
}

        // function formValidation(event) {
        //     event.preventDefault();

        //     const name = document.getElementById('name').value;
        //     const surname = document.getElementById('surname').value;
        //     const email = document.getElementById('email').value;
        //     const number = document.getElementById('number').value;

        //     if (name.length === 0 || surname.length === 0 || email.length === 0 || number <= 13) {
        //         alert('Please fill out all required fields.');
        //     } else {
        //         addAttendee(name, surname, email, number)
        //             .then(result => {
        //                 if (result === '---------') {
        //                     form.submit();
        //                 } else {
        //                     alert(result.message || '--------')
        //                 }
        //             }).catch
        //     }
        // }