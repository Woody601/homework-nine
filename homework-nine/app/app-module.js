// import * as MODEL from "./model-module.js";
import { updateView, fn, mmbToggle} from "./model-module.js";

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  
  function initListeners() {
      //The "e" stands for event in the function().
      $("nav a").click(function(e) { 
          //  this stores the id from the anchor tag
          //aId stands for anchorID
          let aID = e.currentTarget.id;
          let contentID = aID + "Content";
  
          /*MODEL.*/updateView(contentID);
          console.log(/*MODEL.  */fn);
  
          mmbToggle(); // Toggle the responsive and change classes
          //  console.log("a id " + aID);
  
          /*
          if(aID == "cbc") {
              $("nav").css("background-color", "red");
          }
          */
      });

      $(".mmb").click(function() { 
        mmbToggle();
    });
  }
  
  $(document).ready(function () {
      initListeners();
      updateView("homeContent");
  });
  