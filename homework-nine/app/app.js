/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function mmbToggle(x) {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("change");
  x.classList.toggle("responsive");
}

function initListeners() {
    //The "e" stands for event in the function().
    $("nav a").click(function(e) { 
        //  this stores the id from the anchor tag
        //aId stands for anchorID
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

        MODEL.updateView(contentID)

        mmbToggle($("#myTopnav")); // Toggle the responsive and change classes
        //  console.log("a id " + aID);

        /*
        if(aID == "cbc") {
            $("nav").css("background-color", "red");
        }
        */
    });
}

$(document).ready(function () {
    initListeners();
    MODEL.updateView("homeContent");
});
