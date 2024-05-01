getLanguage();
function getLanguage() {
  var currentLanguage = localStorage.getItem('lang');
  if (currentLanguage == 'Ar')
    change_arabic();
  else
    change_english();
}





document.addEventListener('click', function (event) {
  const clickedElement = event.target;
  const languageToggle = document.querySelector('.language-toggle');

  // Check if the clicked element is not part of the dropdown menu
  if (!clickedElement.classList.contains('language-toggle') && !clickedElement.closest('.language-switcher')) {
    languageToggle.classList.remove('active');
  }
});

// Event listener for closing the menu on outside clicks
const ulList = document.querySelector(".ul-list");

const backgroundElements = document.querySelectorAll('.background, .test-center-background, .about-legacy-background, .blog-background, .blog-article-background, .contact-background');

backgroundElements.forEach(backgroundElement => {
  backgroundElement.addEventListener('click', () => {
    if (ulList.classList.contains("display")) {
      ulList.classList.remove("display");
    }
  });
});

document.addEventListener('click', function (event) {
  const clickedElement = event.target;
  const languageToggle = document.querySelector('.main-navigation-bar');

  // Check if the clicked element is not part of the dropdown menu
  if (!clickedElement.classList.contains('main-navigation-bar') && !clickedElement.closest('.ul-list')) {
    languageToggle.classList.remove('active-ul-list');
  }
});



/********************************** */


// // Add event listener to document to close ul-list on outside click
// document.addEventListener('click', function(event) {
//   const clickedElement = event.target;
//   const ulList = document.querySelector('.ul-list');

//   // Check if the clicked element is not part of the ul-list
//   if (!clickedElement.classList.contains('ul-list') && !clickedElement.closest('.ul-list')) {
//     ulList.classList.remove('display'); // Replace 'display' with your class for showing/hiding the menu
//   }
// });


function showBackground() {
  
  setTimeout(function() {
     document.body.classList.add(".loader-background");
  }, 1000); 
 
}





function change_arabic() {

// Accessing Before Pseudo Element

  let ArabicCarElement = document.querySelector('.comp-car-description');

  let ArabicCarstyleSheet = document.createElement('style');
  document.head.appendChild(ArabicCarstyleSheet);
  
  let newArabicCarRule = document.createTextNode('.comp-car-description::before { position:absolute; left:0; bottom:15px }');
  ArabicCarstyleSheet.appendChild(newArabicCarRule);


  document.getElementById("loader").style.display = "block";

  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 1000); 


  document.getElementById("loader-background").style.display = "block";

  setTimeout(function() {
    document.getElementById("loader-background").style.display = "none";
  }, 1000); 
  

  var langImg = document.getElementById("english-flag");

  langImg.addEventListener('click', ()=>{
    window.location.reload(true);
  })

  var contactFormContainer = document.querySelector('.ul-list');
  if (contactFormContainer) {
    contactFormContainer.classList.add("arabic-ul-list");
    contactFormContainer.classList.remove("english-ul-list");
  }

  var ArabicCompCar = document.querySelector(".comp-car-description::before");
  if (ArabicCompCar) {
    ArabicCompCar.classList.add("arabic-comp-car-description");
    ArabicCompCar.classList.remove("english-comp-car-description");
  }


  var innerDetails = document.querySelector('.inner-ul-details');
  if (innerDetails) {
    innerDetails.classList.add("arabic-inner-ul-details");
    innerDetails.classList.remove("english-inner-ul-details");
  }

  var innerDetails = document.querySelector('.prev');
  if (innerDetails) {
    innerDetails.classList.add("arabic-prev");
    innerDetails.classList.remove("english-prev");
  }


  var innerDetails = document.querySelector('.next');
  if (innerDetails) {
    innerDetails.classList.add("arabic-next");
    innerDetails.classList.remove("english-next");
  }
  

  var innerDetails = document.querySelector('.inner-ul-details-new');
  if (innerDetails) {
    innerDetails.classList.add("arabic-inner-ul-details");
    innerDetails.classList.remove("english-inner-ul-details");
  }


  var arabicContactLabel = document.querySelector('.contact-background form label');
  if (arabicContactLabel) {
    arabicContactLabel.classList.add("arabic-contact-background-label");
    arabicContactLabel.classList.remove("english-contact-background-label");
  }

  var arabicBlogRightArrow = document.querySelector('.blog-right-arrow');
  if (arabicBlogRightArrow) {
    arabicBlogRightArrow.classList.add("arabic-blog-arrow");
    arabicBlogRightArrow.classList.remove("english-blog-arrow");
  }

  var arabicBlogLeftArrow = document.querySelector('.blog-left-arrow');
  if (arabicBlogLeftArrow) {
    arabicBlogLeftArrow.classList.add("arabic-blog-arrow");
    arabicBlogLeftArrow.classList.remove("english-blog-arrow");
  }

  // Customers storied div
  var contactFormContainer = document.querySelector('.ul-list');
  if (contactFormContainer) {
    contactFormContainer.classList.add("arabic-ul-list");
    contactFormContainer.classList.remove("english-ul-list");
  }

  const bodyElement = document.getElementById('body');
  const languageToggle = document.querySelector('.language-toggle');

  if (bodyElement) {
    localStorage.setItem('lang', 'Ar');
    bodyElement.style.direction = "rtl";
    languageToggle.classList.remove("active");

    document.getElementById("main-flag").src = "./images/arabic.svg";
    document.querySelector("#language-toggle-span").textContent = "";
  }



  const customerStoriesRightElements = document.querySelector('.customer-stories-right');
  if (customerStoriesRightElements) {
    customerStoriesRightElements.classList.add("arabic-customers");
    customerStoriesRightElements.classList.remove('english-customers');
  }



  var ArabicAboutContainer = document.querySelector(".about-container");
  if (ArabicAboutContainer) {
    ArabicAboutContainer.classList.toggle("arabic-about-container");

    // If the element has the "english-about-container" class, remove it
    if (ArabicAboutContainer.classList.contains("english-about-container")) {
      ArabicAboutContainer.classList.remove("english-about-container");
    }
  }


  


  var ArabicAboutDescOne = document.querySelector(".desc-onee");
  if (ArabicAboutDescOne) {
    ArabicAboutDescOne.classList.add("arabic-desc-onee");
    ArabicAboutDescOne.classList.remove("english-desc-onee");
  }


  var ArabicAboutDescTwo = document.querySelector(".desc-two");
  if (ArabicAboutDescTwo) {
    ArabicAboutDescTwo.classList.add("arabic-desc-two");
    ArabicAboutDescTwo.classList.remove("english-desc-two");
  }



  var ArabicAboutDescTwo = document.querySelector(".contact-center .right-column ul");
  if (ArabicAboutDescTwo) {
    ArabicAboutDescTwo.classList.add("arabic-contact-ul");
    ArabicAboutDescTwo.classList.remove("english-contact-ul");
  }




  const innovativeCardsLeftColumn = document.querySelector(".innovative-cards .left-column");
  if (innovativeCardsLeftColumn) {
    innovativeCardsLeftColumn.classList.add("arabic-innovative-cards-left-column");
    innovativeCardsLeftColumn.classList.remove('english-innovative-cards-left-column');
  }


  const addedRealText = document.querySelector(".added-real-text");
  if (addedRealText) {
    addedRealText.classList.add("arabic-added-real-text");
    addedRealText.classList.remove('added-real-text');
  }

 
  

  const lastAddedCard = document.querySelector(".last-added-card");
  if (lastAddedCard) {
    lastAddedCard.classList.add("arabic-last-added-card");
    lastAddedCard.classList.remove('last-added-card');
  }

  const orangeCard = document.querySelector(".orange-card");
  if (orangeCard) {
    orangeCard.classList.add("arabic-orange-card");
    orangeCard.classList.remove('.orange-card');
    orangeCard.classList.remove('english-orange-card');
  }


  const addedValueCardsParagraphs = document.querySelectorAll(".added-value-cards p");
  addedValueCardsParagraphs.forEach((para) => {
    para.classList.add("arabic-added-value-cards");
    para.classList.remove('added-value-cards');
  });



  var ArabicSingleCardService = document.querySelector(".single-card-service");
  if (ArabicSingleCardService) {
    ArabicSingleCardService.classList.add("arabic-single-card-service");
    ArabicSingleCardService.classList.remove("english-single-card-service");
  }

  var arabicContactFormContainer = document.querySelector('.contact-form-container');
  if (arabicContactFormContainer) {
    arabicContactFormContainer.classList.add("arabic-contact-black");
    arabicContactFormContainer.classList.remove("english-contact-black");
  }

  var arabicStandardFrame = document.querySelector('.standards-frame .section-container');
  if (arabicStandardFrame) {
    arabicStandardFrame.classList.add("arabic-standard-frame");
    arabicStandardFrame.classList.remove("english-standard-frame");
  }

  var arabicArrowIcon = document.querySelectorAll(".arrow-icon");
  if (arabicArrowIcon) {
    arabicArrowIcon.forEach((arrow) => {
      arrow.classList.add("arabic-arrow-icon");
    })
  }

}



function change_english() {
  document.getElementById("loader").style.display = "block";

  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 1000); 

  
  let EnglishCarElement = document.querySelector('.comp-car-description');

  let EnglishCarstyleSheet = document.createElement('style');
  document.head.appendChild(EnglishCarstyleSheet);
  
  let newEnglishCarRule = document.createTextNode('.comp-car-description::before { position:unset; }');
  EnglishCarstyleSheet.appendChild(newEnglishCarRule);

  document.getElementById("loader-background").style.display = "block";

  setTimeout(function() {
    document.getElementById("loader-background").style.display = "none";
  }, 1000); 

 
  var langImg = document.getElementById("arabic-flag");

  langImg.addEventListener('click', ()=>{
    window.location.reload(true);
  })

  var englishStandardFrame = document.querySelector('.standards-frame .section-container');
  if (englishStandardFrame) {
    englishStandardFrame.classList.add("arabic-standard-frame");
    englishStandardFrame.classList.remove("english-standard-frame");
  }


  
  const compCarImg = document.querySelector(".comp-car");
  if (compCarImg) {
    compCarImg.classList.add("english-comp-car");
    compCarImg.classList.remove('arabic-comp-car');
  }


  var innerDetails = document.querySelector('.prev');
  if (innerDetails) {
    innerDetails.classList.add("english-prev");
    innerDetails.classList.remove("arabic-prev");
  }


  var innerDetails = document.querySelector('.next');
  if (innerDetails) {
    innerDetails.classList.add("english-next");
    innerDetails.classList.remove("arabic-next");
  }

  var englishContactFormContainer = document.querySelector('.ul-list');
  if (englishContactFormContainer) {
    englishContactFormContainer.classList.add("english-ul-list");
    englishContactFormContainer.classList.remove("arabic-ul-list");
  }


  var englishBlogRightArrow = document.querySelector('.blog-right-arrow');
  if (englishBlogRightArrow) {
    englishBlogRightArrow.classList.add("english-blog-arrow");
    englishBlogRightArrow.classList.remove("arabic-blog-arrow");
  }



  var englishBlogLeftArrow = document.querySelector('.blog-left-arrow');
  if (englishBlogLeftArrow) {
    englishBlogLeftArrow.classList.add("english-blog-arrow");
    englishBlogLeftArrow.classList.remove("arabic-blog-arrow");
  }

  const bodyElement = document.getElementById('body');
  const languageToggle = document.querySelector('.language-toggle');

  if (bodyElement) {
    localStorage.setItem('lang', 'En');
    bodyElement.style.direction = "ltr";
    languageToggle.classList.remove("active");

    document.getElementById("main-flag").src = "./images/english.svg";
    document.querySelector("#language-toggle-span").textContent = "";
  }



  var englishArrowIcon = document.querySelector(".arrow-icon");
  if (englishArrowIcon) {
    document.querySelectorAll(".arrow-icon").forEach((arrow) => {
      arrow.classList.remove("arabic-arrow-icon");
    })
  }




  const orangeCard = document.querySelector(".test-center-background .orange-card");
  if (orangeCard) {
    orangeCard.classList.add("english-orange-card");
    orangeCard.classList.remove('arabic-orange-card');
  }


  const EnglishInnovativeCardsLeftColumn = document.querySelector(".innovative-cards .left-column");
  if (EnglishInnovativeCardsLeftColumn) {
    EnglishInnovativeCardsLeftColumn.classList.add("english-innovative-cards-left-column");
    EnglishInnovativeCardsLeftColumn.classList.remove("arabic-innovative-cards-left-column");
  }



  const customerStoriesRightElements = document.querySelector('.customer-stories-right');
  if (customerStoriesRightElements) {
    customerStoriesRightElements.classList.add("english-customers");
    customerStoriesRightElements.classList.remove('arabic-customers');
  }


  const innovativeCardsLeftColumn = document.querySelector(".arabic-innovative-cards-left-column");
  if (innovativeCardsLeftColumn) {
    innovativeCardsLeftColumn.classList.add("english-innovative-cards-left-column");
    innovativeCardsLeftColumn.classList.remove('arabic-innovative-cards-left-column');
  }



  var englishContactFormContainer = document.querySelector('.contact-form-container');
  if (englishContactFormContainer) {
    englishContactFormContainer.classList.add("english-contact-black");
    englishContactFormContainer.classList.remove("arabic-contact-black");
  }




  var ArabicAboutContainer = document.querySelector(".about-container");
  if (ArabicAboutContainer) {
    ArabicAboutContainer.classList.toggle("english-about-container");

    // If the element has the "english-about-container" class, remove it
    if (ArabicAboutContainer.classList.contains("arabic-about-container")) {
      ArabicAboutContainer.classList.remove("arabic-about-container");
    }
  }



  var EnglishAboutDescOne = document.querySelector(".desc-onee");
  if (EnglishAboutDescOne) {
    EnglishAboutDescOne.classList.add("english-desc-onee");
    EnglishAboutDescOne.classList.remove("arabic-desc-onee");
  }


  var EnglishAboutDescTwo = document.querySelector(".desc-two")
  if (EnglishAboutDescTwo) {
    EnglishAboutDescTwo.classList.add("english-desc-two");
    EnglishAboutDescTwo.classList.remove("arabic-desc-two");
  }


  var EnglishSingleCardService = document.querySelector(".single-card-service");
  if (EnglishSingleCardService) {
    EnglishSingleCardService.classList.add("english-single-card-service");
    EnglishSingleCardService.classList.remove("arabic-single-card-service");
  }
}


function appear() {
  document.querySelector(".ul-list").classList.toggle("display");
}



function showDiv(Div) {
  var x = document.getElementById(Div);
  let inputName = document.forms["contact-form"]["user_name"].value;
  let inputEmail = document.forms["contact-form"]["user_email"].value;
  let inputSubject = document.forms["contact-form"]["user_subject"].value;
  let inputMsg = document.forms["contact-form"]["message"].value;

  if (x.style.display == "none") {
    if (inputName != "" && inputEmail != "" && inputSubject != "" && inputMsg != "") {
      x.style.display = "block";
    }
  } else {
    x.style.display = "none";
  }
}


function formDiv(Div) {
  var formDiv = document.getElementById(Div);
  if (formDiv.style.display == "none") {
    formDiv.style.display = "block";
  } else {
    formDiv.style.display = "none";
  }
}



function hideDiv(Div) {
  var hide = document.getElementById(Div);
  var contactForm = document.getElementById('contact-form');

  if (hide.style.display == "none") {
  } else {
    hide.style.display = "none";
    document.getElementById('contact-form').reset();
  }
}


function mini_nav_language() {

  document.querySelector(".mini-nav-language").classList.toggle("display");
}



const languageToggle = document.querySelector(".language-toggle");
const languageOptions = document.querySelector(".language-options");

languageToggle.addEventListener("click", function () {
  languageToggle.classList.toggle("active");
});



document.addEventListener('click', function (event) {
  const isClickOutOfDropdown = !event.target.closest('.language-switcher');
  const languageOptions = document.querySelector('.language-options');

  if (isClickOutOfDropdown && languageOptions.classList.contains('active')) {
    languageOptions.classList.remove('active');
    // Update arrow rotation if needed (optional)
    document.querySelector('.language-toggle .arrow').style.transform = 'rotate(0deg)';
  }
});



/* i18Next */


function generateJSON() {
  const elements = document.body.querySelectorAll("*");
  const translation = {};
 
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n-key");
    if (key) {
      translation[key] = element.textContent.trim();
    }
  });
 
  // Output the generated JSON to console
  console.log(JSON.stringify(translation, null, 2));
}
 
// Call the function to generate JSON
document.addEventListener("DOMContentLoaded", generateJSON);


// function loadPage() {
//   window.location.reload();
// }

