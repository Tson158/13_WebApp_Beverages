
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite ::
	Check Daten ::
    Btn. Trigger ::
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: 
*/

//  von unten nach oben beginnen!**

// Bild austauschen************

// output(updateImg("cola")) //Test
// output(updateImg("wein")) //Test
// output(updateImg("milch")) //Test
// output(updateImg("saft")) //Test
// output(updateImg("tee")) //Test

function updateImg(imgName) {
    const img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;

    return imgName          // Monitoring
}

// Business-Logic (Alter ---> Getränk)************
//Modul: Business-Logik (Mapping)

// output(checkAge(2))
// output(checkAge(7))
// output(checkAge(13))
// output(checkAge(47))
// output(checkAge(15))
// output(checkAge(131))

function checkAge(age) {

    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper) :
            return data.milk.bev;        
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev  
        default:    
            return data.default.bev    
    }
}

//  Modul Ablaufsteuerung 
// Controller

// controller();
function controller() {
    output(updateImg(checkAge(getInput)));
}


// Trigger - Input****
const field = document.getElementsByName("eingabe")[0];
field.addEventListener("input", isInputValid);

//  Trigger - Button****
const btn = document.getElementById("trigBtn");
btn.addEventListener("click",actOnClick); 
// output(btn)

// Event-Dispatcher****
function actOnClick() {
    if (isInputValid()) {
        controller()
    } else {
        output("Input nicht Korrekt");
    }
}

function isInputValid() {
    let inputStr = field.value;
    output(inputStr)

    let cond = false
    
    if (!cond) {
        field.value = "";
        updateImg(data.default.bev);
    }
}

//  Modul: Eingabe****
function getInput() {
    return parseInt(field.value);
}


//Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}