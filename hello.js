function validation(){
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {

        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Valid Email address!";
        text.style.color = "blue";
    }
    else {

        
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "enter a valid email address";
        text.style.color = "red";
    }
    if (email == "") {
      form.classList.add("invalid");
      form.classList.remove(" valid");
      text.innerHTML = "";
      text.style.color = "red";
    }
}

