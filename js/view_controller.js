
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



//Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}