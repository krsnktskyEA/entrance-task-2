/* -------------- header start----------------------*/
var headerMenuLink1 = document.getElementById("header-menu-link-1");
var headerMenuLink2 = document.getElementById("header-menu-link-2");
var headerMenuLink3 = document.getElementById("header-menu-link-3");

var mobileMenuIconButton = document.getElementById("mobile-menu-icon-button");
var mobileMenuIcon = document.getElementById("mobile-menu-icon");
var headerMenu = document.getElementById("header-menu");
var menuIsOpened = false

headerMenuLink1.style.opacity = "1"

var activateLink = function(linkNum) {
  if (linkNum === 'link1') {
    headerMenuLink1.style.opacity = "1"
    headerMenuLink2.style.opacity = "0.6"
    headerMenuLink3.style.opacity = "0.6"
  } else if (linkNum === 'link2') {
    headerMenuLink1.style.opacity = "0.6"
    headerMenuLink2.style.opacity = "1"
    headerMenuLink3.style.opacity = "0.6"
  } else if (linkNum === 'link3') {
    headerMenuLink1.style.opacity = "0.6"
    headerMenuLink2.style.opacity = "0.6"
    headerMenuLink3.style.opacity = "1"
  }
}

var showHeaderMenu = function() {
  menuIsOpened = !menuIsOpened
  if (menuIsOpened === true) {
    headerMenu.style.visibility = "visible"
    headerMenu.style.opacity = "1"
  } else {
    headerMenu.style.opacity = "0"
  }
}

var resizeHandler = function() {
  if (document.body.clientWidth > 670) {
    headerMenu.style.opacity = "1"
    headerMenu.style.visibility = "visible"
  } else if (document.body.clientWidth <= 670 && menuIsOpened === false) {
    headerMenu.style.visibility = "hidden"
    headerMenu.style.opacity = "0"
  }
}

headerMenuLink1.addEventListener("click", function(){ activateLink('link1') });
headerMenuLink2.addEventListener("click", function(){ activateLink('link2') });
headerMenuLink3.addEventListener("click", function(){ activateLink('link3') });
mobileMenuIconButton.addEventListener("click", function(){ showHeaderMenu() });
window.addEventListener("resize", function(){ resizeHandler() });

/* -------------- header end----------------------*/

/* -------------- modal popup start----------------------*/
var lightParams = ['Вручную', 'Дневной\xA0свет', 'Вечерний\xA0свет', 'Рассвет']
var elgatoParams = ['Вручную', 'Холодно', 'Тепло', 'Жарко']
var warmFloorParams = []

var main = document.getElementById('main-wrapper');
var modalBkg = document.getElementById('modal-background');
var modal = document.getElementById('modal-container');
var modalContainerPanel = document.getElementById('modal-container-panel');
var modalContainerBtnWrapper = document.getElementById('modal-container-btn-wrapper');
var modalContainerBtnApply = document.getElementById('modal-container-btn-apply');
var modalContainerBtn = document.getElementById('modal-container-btn');
var modalContainerTextPrimary = document.getElementById("modal-container-panel-text-primary")
var modalContainerTextSecondary = document.getElementById("modal-container-panel-text-secondary")
var btnText0 = document.getElementById("modal-container-panel-controls-buttons-text-1")
var btnText1 = document.getElementById("modal-container-panel-controls-buttons-text-2")
var btnText2 = document.getElementById("modal-container-panel-controls-buttons-text-3")
var btnText3 = document.getElementById("modal-container-panel-controls-buttons-text-4")
var popupIcon = document.getElementById("icon-sun")
var popupSlider = document.getElementById("modal-container-panel-slider")
var iconSunMax = document.getElementById("icon-sun-max")
var iconSunMin = document.getElementById("icon-sun-min")
var textTempMax = document.getElementById("text-temp-max")
var textTempMin = document.getElementById("text-temp-min")
var sliderValue = document.getElementById("modal-container-panel-slider-value")

// showPopup function
var showPopup = function(textPrimary, textSecondary, buttonsText, icon, sliderId, iconSunMaxVis, iconSunMinVis, textTempMaxVis, textTempMinVis, sliderValueDisp) {
  main.style.filter = "blur(3px)";
  modalBkg.style.visibility = "visible";
  modalBkg.style.opacity = "1";
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modalContainerPanel.style.display = "flex";
  modalContainerBtnWrapper.style.display = "flex";
  modalContainerBtnApply.style.display = "flex";
  modalContainerBtn.style.display = "flex";
  modalContainerTextPrimary.innerHTML = textPrimary;
  modalContainerTextSecondary.innerHTML = textSecondary;
  btnText0.innerHTML = buttonsText[0];
  btnText1.innerHTML = buttonsText[1];
  btnText2.innerHTML = buttonsText[2];
  btnText3.innerHTML = buttonsText[3];
  popupIcon.setAttribute("data", icon)
  popupSlider.setAttribute("id", sliderId);
  iconSunMax.style.visibility = iconSunMaxVis;
  iconSunMin.style.visibility = iconSunMinVis;
  textTempMax.style.visibility = textTempMaxVis;
  textTempMin.style.visibility = textTempMinVis;
  sliderValue.style.display = sliderValueDisp;
  sliderValue.innerHTML = popupSlider.value;
}

// Get the buttons that opens the modal
var xiaomiBulbBtn = document.getElementById("xiaomiBulb");
var dlinkCamBtn = document.getElementById("dlinkCam");
var elgatoBtn = document.getElementById("elgato");
var lifxMiniBtn = document.getElementById("lifxMini");
var xiaomiAirBtn = document.getElementById("xiaomiAir");
var zhiruiBtn = document.getElementById("zhirui");
var xiaomiBulbNextBtn = document.getElementById("xiaomiBulbNext");
var xiaomiWarmFloorBtn = document.getElementById("xiaomiWarmFloor");

// When the user clicks on the button, open the modal 
xiaomiBulbBtn.addEventListener("click", function(){ showPopup('Xiaomi Yeelight LED Smart Bulb', 'Включено', lightParams, "icon_sun_2.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none"); });
dlinkCamBtn.addEventListener("click", function(){ showPopup('D-Link Omna 180 Cam', 'Включится в 17:00', lightParams, "icon_sun.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none"); });
elgatoBtn.addEventListener("click", function(){ showPopup('Elgato Eve Degree Connected', 'Выключено до 17:00', elgatoParams, "icon_temperature.svg", "modal-container-panel-slider-termo", "hidden", "hidden", "visible", "visible", "block"); });
lifxMiniBtn.addEventListener("click", function(){ showPopup('LIFX Mini Day & Dusk A60 E27', 'Включится в 17:00', lightParams, "icon_sun.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none"); });
xiaomiAirBtn.addEventListener("click", function(){ showPopup('Xiaomi Mi Air Purifier 2S', 'Включено', lightParams, "icon_sun_2.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none"); });
zhiruiBtn.addEventListener("click", function(){ showPopup('Philips Zhirui', 'Выключено', lightParams, "icon_sun.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none"); });
xiaomiBulbNextBtn.addEventListener("click", function(){ showPopup('Xiaomi Yeelight LED Smart Bulb', 'Включено', lightParams, "icon_sun_2.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none"); });
xiaomiWarmFloorBtn.addEventListener("click", function(){ showPopup('Xiaomi Warm Floor', 'Включено', warmFloorParams, "icon_temperature_2.svg", "modal-container-panel-slider-termo", "hidden", "hidden", "hidden", "hidden", "none"); });

popupSlider.oninput = function() {
  if (this.value > 0) {
    sliderValue.innerHTML = "+" + this.value;
  } else if (this.value == 0) {
    sliderValue.innerHTML = " " + this.value;
  } else if (this.value < 0) {
    sliderValue.innerHTML = this.value;
  }
}

// Popup close
window.onclick = function(event) {
  if (event.target == modal.children[1].children[1]) {
      modalBkg.style.visibility = "hidden";
      modalBkg.style.opacity = "0";
      main.style.filter = "none";
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
  }
}
/* -------------- modal popup end------------------------*/


/* -------------- filters start----------------------*/
var allBtn = document.getElementById('all-filter-btn');
var allBtnStatus = true;
var kitchenBtn = document.getElementById('kitchen-filter-btn');
var kitchenBtnStatus = false;
var hallBtn = document.getElementById('hall-filter-btn');
var hallBtnStatus = false;
var lampsBtn = document.getElementById('lamps-filter-btn');
var lampsBtnStatus = false;
var camsBtn = document.getElementById('cams-filter-btn');
var camsBtnStatus = false;

var all = document.getElementsByClassName('all');
var kitchen = document.getElementsByClassName('kitchen');
var hall = document.getElementsByClassName('hall');
var lamps = document.getElementsByClassName('lamps');
var cams = document.getElementsByClassName('cams');

allBtn.onclick = function() {
  allBtnStatus = !allBtnStatus
  if (allBtnStatus === true) {
    allBtn.style.backgroundColor = "#FFD93E"
    all[0].style.display = "flex"
    all[1].style.display = "flex"
    all[2].style.display = "flex"
    all[3].style.display = "flex"
    all[4].style.display = "flex"
    all[5].style.display = "flex"
    all[6].style.display = "flex"
    all[7].style.display = "flex"
  } else {
    allBtn.style.backgroundColor = "#f7f7f7"
    lampsBtnStatus ? all[0].style.display = "flex" : all[0].style.display = "none"
    camsBtnStatus ? all[1].style.display = "flex" : all[1].style.display = "none"
    hallBtnStatus ? all[2].style.display = "flex" : all[2].style.display = "none"
    lampsBtnStatus ? all[3].style.display = "flex" : all[3].style.display = "none"
    kitchenBtnStatus ? all[4].style.display = "flex" : all[4].style.display = "none"
    lampsBtnStatus ? all[5].style.display = "flex" : all[5].style.display = "none"
    lampsBtnStatus ? all[6].style.display = "flex" : all[6].style.display = "none"
    kitchenBtnStatus ? all[7].style.display = "flex" : all[7].style.display = "none"
  }
}

kitchenBtn.onclick = function() {
  kitchenBtnStatus = !kitchenBtnStatus
  if (kitchenBtnStatus === true) {
    kitchenBtn.style.backgroundColor = "#FFD93E"
    kitchen[0].style.display = "flex"
    kitchen[1].style.display = "flex"
  } else {
    kitchenBtn.style.backgroundColor = "#f7f7f7"
    allBtnStatus ? kitchen[0].style.display = "flex" : kitchen[0].style.display = "none"
    allBtnStatus ? kitchen[1].style.display = "flex" : kitchen[1].style.display = "none"
  }
}

hallBtn.onclick = function() {
  hallBtnStatus = !hallBtnStatus
  if (hallBtnStatus === true) {
    hallBtn.style.backgroundColor = "#FFD93E"
    hall[0].style.display = "flex"
  } else {
    hallBtn.style.backgroundColor = "#f7f7f7"
    allBtnStatus ? hall[0].style.display = "flex" : hall[0].style.display = "none"
  }
}

lampsBtn.onclick = function() {
  lampsBtnStatus = !lampsBtnStatus
  if (lampsBtnStatus === true) {
    lampsBtn.style.backgroundColor = "#FFD93E"
    lamps[0].style.display = "flex"
    lamps[1].style.display = "flex"
    lamps[2].style.display = "flex"
    lamps[3].style.display = "flex"
  } else {
    lampsBtn.style.backgroundColor = "#f7f7f7"
    allBtnStatus ? lamps[0].style.display = "flex" : lamps[0].style.display = "none"
    allBtnStatus ? lamps[1].style.display = "flex" : lamps[1].style.display = "none"
    allBtnStatus ? lamps[2].style.display = "flex" : lamps[2].style.display = "none"
    allBtnStatus ? lamps[3].style.display = "flex" : lamps[3].style.display = "none"
  }
}

camsBtn.onclick = function() {
  camsBtnStatus = !camsBtnStatus
  if (camsBtnStatus === true) {
    camsBtn.style.backgroundColor = "#FFD93E"
    cams[0].style.display = "flex"
  } else {
    camsBtn.style.backgroundColor = "#f7f7f7"
    allBtnStatus ? cams[0].style.display = "flex" : cams[0].style.display = "none"
  }
}

/* -------------- filters end----------------------*/


/* -------------- main section scroll event start --------------------*/
var nextScenariosContainer = document.getElementById("next-scenarios-container");
var scrollIconLayout = document.getElementById("scroll-icon-layout");
var scrollIcon = document.getElementById("scroll-icon");

nextScenariosContainer.onscroll = function() {

  if (nextScenariosContainer.scrollTop > 1) {
    scrollIcon.style.opacity = 0;
    scrollIconLayout.style.opacity = 0;
  } else {
    scrollIcon.style.opacity = 1;
    scrollIconLayout.style.opacity = 1;
  }
}

/* -------------- main section scroll event end ----------------------*/
