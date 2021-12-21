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
/*contactForm.addEventListener("submit", printTextAndEvent);*/
/*contactForm.addEventListener("submit", extractElementFromForm);*/
/*contactForm.addEventListener("submit", extractFormAsMatrix);*/
contactForm.addEventListener("submit", extractFormAsJSONObject);
/*contactForm.addEventListener("submit", showFormContent);*/
/*contactForm.addEventListener("submit", saveOnDifLocalStorage);*/
/*contactForm.addEventListener("submit", getToDifLocalStorage);*/
contactForm.addEventListener("submit", updateDataIndex);
contactForm.addEventListener("submit", updateArraySaveFormData);
contactForm.addEventListener("submit", saveOnLocalStorage2);
contactForm.addEventListener("submit", getOnLocalStorage2);
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
    console.log(event + " =event");   
}

function extractElementFromForm(event){
    var element = contactForm.elements["name"].value; /*El valor entre [] puede ser el nombre o el id del input (en clase se uso el nombre y no el id)*/
    console.log(element);
}

function extractFormAsMatrix(event){
    const formData = new FormData(event.target).entries();
    console.log(formData);
    console.log("Matriz")
}

function extractFormAsJSONObject(event){
    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(formData);
    console.log("json")
}

function showFormContent(event){
    var formContentTittle = document.getElementById("formContentTittle");
    var formContentParagh = document.getElementById("formContentParagh");
    formContentTittle.innerHTML = "Los datos que ingresaste fueron:";
    const formData = Object.fromEntries(new FormData(event.target).entries());
    formContentParagh.innerHTML = "Name; " + formData.nameN + "<br/>";
    formContentParagh.innerHTML += "Last Name; " + formData.lastNameN + "<br/>";
    formContentParagh.innerHTML += "Birthday; " + formData.birthdayN + "<br/>";
}

function updateForm(event){
    contactForm.reset();
}

function hideShowImage(event){
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

var index = 0;

function saveOnDifLocalStorage(event){
    var formData = Object.fromEntries(new FormData(event.target).entries()); 
    localStorage.setItem('userData' + index, JSON.stringify(formData));
}

function getToDifLocalStorage(event){
    var userData = JSON.parse(localStorage.getItem('userData' + index));
    console.log("userdata" + userData);
    formContentParagh.innerHTML += "Name; " + userData.nameN + "<br/>";
    formContentParagh.innerHTML += "Last Name; " + userData.lastNameN + "<br/>";
    formContentParagh.innerHTML += "Birthday; " + userData.birthdayN + "<br/>";
    formContentParagh.innerHTML += "<br/>";
    index ++;
}

var indexAux = 0;
var arraySaveFormData = [];

function saveOnLocalStorage(event){ 
    var formData = Object.fromEntries(new FormData(event.target).entries()); 
    localStorage.setItem('userData', JSON.stringify(formData));
}

function getOnLocalStorage(event){ 
    var userData = JSON.parse(localStorage.getItem('userData'));
    arraySaveFormData[indexAux] = userData;
    console.log("userdata" + userData);
    formContentParagh.innerHTML += "Name; " + arraySaveFormData[indexAux].nameN + "<br/>";
    formContentParagh.innerHTML += "Last Name; " + arraySaveFormData[indexAux].lastNameN + "<br/>";
    formContentParagh.innerHTML += "Birthday; " + arraySaveFormData[indexAux].birthdayN + "<br/>";
    formContentParagh.innerHTML += "<br/>"; 
    indexAux ++;
}

var indexAux2 = 0;
var arraySaveFormData2 = [];
var dataIndex = JSON.parse(localStorage.getItem('indexData'));


function saveOnLocalStorage2(event){
    dataIndex = JSON.parse(localStorage.getItem('indexData'));
    console.log("dataIndex saveOnLocalStorage2: " + dataIndex);
    var formData = Object.fromEntries(new FormData(event.target).entries()); 
    arraySaveFormData2[dataIndex] = formData;
    localStorage.setItem('userData', JSON.stringify(arraySaveFormData2));
}

function getOnLocalStorage2(event){
    console.log("dataIndex getOnLocalStorage2: " + dataIndex);
    var userData = JSON.parse(localStorage.getItem('userData'));
    formContentParagh.innerHTML += "Name; " + userData[dataIndex].nameN + "<br/>";
    formContentParagh.innerHTML += "Last Name; " + userData[dataIndex].lastNameN + "<br/>";
    formContentParagh.innerHTML += "Birthday; " + userData[dataIndex].birthdayN  + "<br/>";
    formContentParagh.innerHTML += "<br/>";
}

function updateDataIndex(event){ 
    if (dataIndex != null) {
        console.log("AntUserdata!= null: " + dataIndex);
        localStorage.setItem('indexData', JSON.stringify(dataIndex+1));
        console.log("DespUserdata!= null: " + JSON.parse(localStorage.getItem('indexData')));
    } else{
        console.log("AntUserdataNull: " + dataIndex);
        localStorage.setItem('indexData', JSON.stringify(0));
        console.log("DespUserdataNull: " + JSON.parse(localStorage.getItem('indexData')));
    };
}

function updateArraySaveFormData(event){ 
     console.log("dataIndex getOnLocalStorage2: " + dataIndex);
    if (dataIndex != null && arraySaveFormData2.length == 0) {
        for (var i = 0; i <= dataIndex; i++) {
            arraySaveFormData2[i] = JSON.parse(localStorage.getItem('userData'))[i];
        };
    }
}
