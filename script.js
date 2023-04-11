function validate() {
    let alert = document.getElementById('alert')

    //Name validation
    let name = document.getElementById('name').value
    if (name == "") {
        alert.style.display = 'block';
        alert.innerHTML = `Please enter name`;
        return 0;
    }
    else {
        alert.style.display = 'none';
    }

    //Age validation
    let email = document.getElementById('email').value;
    let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email == ''){
        alert.style.display = 'block';
        alert.innerHTML = 'Please enter email';
        return 0;
    }

    if (email.match(emailVal)) {
        alert.style.display = "none";
    } else {
        alert.style.display = "block";
        alert.innerHTML = `Please enter valid email`;
        return 0;
    }

    //Phone number validation
    let phone = document.getElementById('phone').value;
    let phoneVal = /^[6-9]{1}[0-9]{9}$/;

    if(phone == ''){
        alert.style.display = 'block';
        alert.innerHTML = 'Please enter phone number';
        return 0;
    }

    if (phone.match(phoneVal)) {
        alert.style.display = 'none';
    }
    else {
        alert.style.display = 'block';
        alert.innerHTML = "Please enter valid phone number";
        return 0;
    }

    //Age validation
    let age = document.getElementById('age').value;

    if(age == ''){
        alert.style.display = 'block';
        alert.innerHTML = 'Please enter age';
    }

    if (age <= 0 || age > 110) {
        alert.style.display = 'Block';
        alert.innerHTML = 'Please enter valid age'
        return 0;
    }
    else {
        alert.style.display = 'none'
    }

    //Document validation
    let file = document.getElementById('file').value;

    if(file == ''){
        alert.style.display = 'block';
        alert.innerHTML = 'Please select file';
    }

    if (file == '') {
        alert.style.display = 'blick';
        alert.innerHTML = "Please select file";
        return 0;
    }

    file = file.split(".");

    if (file[1] == 'png') {
        alert.style.display = 'none';
        let form = document.getElementById('form');
        form.submit();
        alert.style.display = 'block';
        alert.innerHTML = 'Form submitted successfully.';
    }
    else {
        alert.style.display = 'block';
        alert.innerHTML = 'Please select png file';
    }
}