/*!AUTHOR: Dianey Marcela Macias Vargas;Programación III 2021*/
console.log("script loaded! =Prueba")
var contactForm = document.getElementById("contactForm");

/*contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(event);
    console.log("submit")
});*/

contactForm.addEventListener("submit", preventDefaultEvents);
contactForm.addEventListener("submit", printTextAndEvent);
contactForm.addEventListener("submit", extractElementFromForm);
contactForm.addEventListener("submit", extractFormAsMatrix);
contactForm.addEventListener("submit", extractFormAsJSONObject);
contactForm.addEventListener("submit", showFormContent);
contactForm.addEventListener("submit", updateForm);

function preventDefaultEvents(event){
    event.preventDefault();
}

function printTextAndEvent(event){
    console.log("submit" + " =Submit entre comillas");
    console.log(event); 
    console.log("Anterior =event");  
}

function extractElementFromForm(event){
    var element = contactForm.elements["name"].value; /*El valor entre [] puede ser el nombre o el id del input (en clase se uso el nombre y no el id)*/
    console.log(element);
}

function extractFormAsMatrix(event){
    const formData = new FormData(event.target).entries();
    console.log(formData);
}

function extractFormAsJSONObject(event){
    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(formData);
}

function showFormContent(event){
    var formContentTittle = document.getElementById("formContentTittle");
    var formContentParagh = document.getElementById("formContentParagh");
    formContentTittle.innerHTML = "Los datos que ingresaste fueron:";
    const formData = Object.fromEntries(new FormData(event.target).entries());
    formContentParagh.innerHTML = "Name; " + formData.nameN + "<br/>";
    formContentParagh.innerHTML += "Last Name; " + formData.lastNameN + "<br/>";
    formContentParagh.innerHTML += "Email Address; " + formData.emailN + "<br/>";
    formContentParagh.innerHTML += "Identification Number; " + formData.identificationNumberN + "<br/>";
    formContentParagh.innerHTML += "Phone Number; " + formData.phoneNumberN + "<br/>";
    formContentParagh.innerHTML += "Birthday; " + formData.birthdayN + "<br/>";
    formContentParagh.innerHTML += "Address and City; " + formData.addressAndCityN + "<br/>";
    formContentParagh.innerHTML += "Message; " + formData.messageN;
}

function updateForm(event){
    contactForm.reset();
}


