
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

output(checkAge(2))

function checkAge(age) {

    // switch (true) {
    //     case (age >= 0) && (age <= 5) :
    //         console.log(firstName + " trinkt Milch");
    //         break;
    //     case (age >= 6) && (age <= 12):
    //         console.log(firstName + " trinkt Saft");
    //         break;
    //     case (age >= 13) && (age <= 17):
    //         console.log(firstName + " trinkt Cola");
    //         break;
    //     case (age >= 18) && (age <= 130):
    //         console.log(firstName + " trinkt Wein");    
    //         break;     
    //     default:    
    //         console.log("Bitte Tee trinken!");      
    //         break;    
    // }







    return "cola";
}








//Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}