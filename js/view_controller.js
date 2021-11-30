
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
    img.src = "./bilder/" + imgName + ".jpg"

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
        case (age >= 0) && (age <= 5) :
            return "milch"         
        case (age >= 6) && (age <= 12):
            return "saft"
        case (age >= 13) && (age <= 17):
            return "cola"
        case (age >= 18) && (age <= 130):
            return "wein"   
        default:    
            return "tee"    
    }
    return "cola";
}

//  Modul Ablaufsteuerung 
// Controller

controller();

function controller() {
    output(updateImg(checkAge(2)));
}






//Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}