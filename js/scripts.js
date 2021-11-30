/*!AUTHOR: Dianey Marcela Macias Vargas;Programación III 2021*/
console.log("script loaded! =Prueba")
var contactForm = document.getElementById("contactForm");

var webServer = document.getElementById("webServer");
var webServerImge = document.getElementById("webServerImge");

var DHCPServer = document.getElementById("DHCPServer");
var DHCPServerImge = document.getElementById("DHCPServerImge");

var DNSServer = document.getElementById("DNSServer");
var DNSServerImage = document.getElementById("DNSServerImage");

var proxyServer = document.getElementById("proxyServer");
var proxyServerImage = document.getElementById("proxyServerImage");

var dataBaseServer = document.getElementById("dataBaseServer");
var dataBaseServerImage = document.getElementById("dataBaseServerImage");

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

webServer.addEventListener('click', hideShowWebServImage);
DHCPServer.addEventListener('click', hideShowDHCPServImage);
DNSServer.addEventListener('click', hideShowDNSServImage);
proxyServer.addEventListener('click', hideShowProxyServImage);
dataBaseServer.addEventListener('click', hideShowDataBaseServImage);




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

function hideImage(event){
    if (webServerImge.style.visibility == "visible") {        
        webServerImge.style.visibility = "hidden";
        console.log("HideImage");
    } else
        webServerImge.style.visibility = "visible";
        console.log("showImage");
}

function hideShowWebServImage(event){
    if (webServerImge.style.visibility == "visible") {        
        webServerImge.style.visibility = "hidden";
        console.log("HideImage");
    } else
        webServerImge.style.visibility = "visible";
        console.log("showImage");
}

function hideShowDHCPServImage(event){
    if (DHCPServerImge.style.visibility == "visible") {        
        DHCPServerImge.style.visibility = "hidden";
        console.log("HideImage");
    } else
        DHCPServerImge.style.visibility = "visible";
        console.log("showImage");
}

function hideShowDNSServImage(event){
    if (DNSServerImage.style.visibility == "visible") {        
        DNSServerImage.style.visibility = "hidden";
        console.log("HideImage");
    } else
        DNSServerImage.style.visibility = "visible";
        console.log("showImage");
}

function hideShowProxyServImage(event){
    if (proxyServerImage.style.visibility == "visible") {        
        proxyServerImage.style.visibility = "hidden";
        console.log("HideImage");
    } else
        proxyServerImage.style.visibility = "visible";
        console.log("showImage");
}

function hideShowDataBaseServImage(event){
    if (dataBaseServerImage.style.visibility == "visible") {        
        dataBaseServerImage.style.visibility = "hidden";
        console.log("HideImage");
    } else
        dataBaseServerImage.style.visibility = "visible";
        console.log("showImage");
}


