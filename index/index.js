
// star image

function togglestar(imgElement) {
    if (imgElement.classList.contains("checked")) {
      imgElement.classList.remove("checked");
      imgElement.src = "/img/star.png"; 
    } else {
      imgElement.classList.add("checked");
      imgElement.src = "/car-img/star.png"; 
  }
}

// abc class


function addClassToCard() {
  document.querySelector('.card-wrapper').classList.add('abc');
}

function removeabcclass(){
  document.querySelector('.card-wrapper').classList.remove('abc');

}
// checkbox

function toggleCheckbox(imgElement) {
    if (imgElement.classList.contains("checked")) {
      imgElement.classList.remove("checked");
      imgElement.src = "/img/Rectangle 2254.png"; 
    } else {
      imgElement.classList.add("checked");
      imgElement.src = "/social-img/Exclusion\ 1.png"; 
    }
  }

// range payment

$(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 0,
    to: 1000,
    prefix: "$",
  });


// grid list button



// fliter button

function toggleFilter() {
    var modal = document.getElementById("filter-modal");
    var body = document.body;

    if (modal.classList.contains("active")) {
      modal.classList.remove("active");
      body.classList.remove("blur-background-transition");
    } else {
      modal.classList.add("active");
      body.classList.add("blur-background-transition");
    }
  }

// hamburger

const menuIcon = document.getElementById("menu-icon");
      const mobileNavbar = document.getElementById("mobile-navbar");

      menuIcon.addEventListener("click", function () {
        // Toggle the navbar visibility
        mobileNavbar.classList.toggle("chalu");

        // Toggle between menu and cross icons
        if (menuIcon.classList.contains("ri-menu-line")) {
          menuIcon.classList.remove("ri-menu-line");
          menuIcon.classList.add("ri-close-line");
        } else {
          menuIcon.classList.remove("ri-close-line");
          menuIcon.classList.add("ri-menu-line");
        }
      });


// date picker  

       $(function () {
         $("#datepicker").datepicker();
       });
    
// view button

document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.querySelector(".range");
    const currentBid = document.getElementById("current-bid");

    // Check if elements are correctly selected
    if (rangeInput && currentBid) {
      rangeInput.addEventListener("input", function () {
        currentBid.textContent = `$${parseInt(
          this.value
        ).toLocaleString()}`;
      });
    } else {
      console.error(
        "Could not find the range input or current bid element."
      );
    }
  });
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  // datepicker

  $( function() {
    $( "#datepicker" ).datepicker();
  } );
7