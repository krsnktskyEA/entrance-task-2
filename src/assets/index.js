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
  } else if (document.body.clientWidth <= 670 && menuIsOpened === true) {
    headerMenu.style.visibility = "visible"
    headerMenu.style.opacity = "1"
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
var filtersStatus = {
  0: [true, false, false, false],
  1: [true, false, false, false],
  2: [true, false, false, false],
  3: [true, false, false, false],
  4: [true, false, false, false],
  5: [true, false, false, false],
  6: [true, false, false, false],
  7: [true, false, false, false],
}
var slidersStatus = {
  0: 10,
  1: 10,
  2: 10,
  3: 10,
  4: 10,
  5: 10,
  6: 10,
  7: 10,
}

var previousFiltersStatus = {
  0: [true, false, false, false],
  1: [true, false, false, false],
  2: [true, false, false, false],
  3: [true, false, false, false],
  4: [true, false, false, false],
  5: [true, false, false, false],
  6: [true, false, false, false],
  7: [true, false, false, false],
}
var previousSlidersStatus = {
  0: 10,
  1: 10,
  2: 10,
  3: 10,
  4: 10,
  5: 10,
  6: 10,
  7: 10,
}

var body = document.body
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

var btn0 = document.getElementById("modal-container-panel-controls-btn-1")
var btn1 = document.getElementById("modal-container-panel-controls-btn-2")
var btn2 = document.getElementById("modal-container-panel-controls-btn-3")
var btn3 = document.getElementById("modal-container-panel-controls-btn-4")

var popupIcon = document.getElementById("icon-sun")
var popupSlider = document.getElementById("modal-container-panel-slider")
var iconSunMax = document.getElementById("icon-sun-max")
var iconSunMin = document.getElementById("icon-sun-min")
var textTempMax = document.getElementById("text-temp-max")
var textTempMin = document.getElementById("text-temp-min")
var sliderValue = document.getElementById("modal-container-panel-slider-value")

// showPopup function
var showPopup = function(textPrimary, textSecondary, buttonsText, icon, sliderId, iconSunMaxVis, iconSunMinVis, textTempMaxVis, textTempMinVis, sliderValueDisp, filtersStatus, popupNum, slidersStatus) {
// console.log("popupNum=", popupNum)

if (window.matchMedia("(max-width: 670px)").matches) {
  modalContainerPanel.style.height = "492px"
  modal.style.height = "642px"
} else if (window.matchMedia("(min-width: 670px) and (max-width: 1368px)").matches) {
  popupNum === 7 ? modalContainerPanel.style.height = "343px" : modalContainerPanel.style.height = "238px"
  popupNum === 7 ? modal.style.height = "424px" : modal.style.height = "318px"
} else if (window.matchMedia("(min-width: 1368px)").matches) {
  popupNum === 7 ? modalContainerPanel.style.height = "25.07vw" : modalContainerPanel.style.height = "17.39vw"
  popupNum === 7 ? modal.style.height = "30.99vw" : modal.style.height = "23.24vw"
}

  body.style.overflow = "hidden"
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
  popupSlider.value = slidersStatus[popupNum];
  iconSunMax.style.visibility = iconSunMaxVis;
  iconSunMin.style.visibility = iconSunMinVis;
  textTempMax.style.visibility = textTempMaxVis;
  textTempMin.style.visibility = textTempMinVis;
  sliderValue.style.display = sliderValueDisp;
  sliderValue.innerHTML = popupSlider.value;

  if (filtersStatus[popupNum][0] === true) {
    btn0.style.backgroundColor = "#ffd93e"
    popupSlider.style.filter = "grayscale(0%)"
    popupSlider.disabled = false
  } else {
    btn0.style.backgroundColor = "#f7f7f7"
    popupSlider.style.filter = "grayscale(100%)"
    popupSlider.disabled = true
  }

  if (filtersStatus[popupNum][1] === true) {
    btn1.style.backgroundColor = "#ffd93e"
  } else {
    btn1.style.backgroundColor = "#f7f7f7"
  }

  if (filtersStatus[popupNum][2] === true) {
    btn2.style.backgroundColor = "#ffd93e"
  } else {
    btn2.style.backgroundColor = "#f7f7f7"
  }

  if (filtersStatus[popupNum][3] === true) {
    btn3.style.backgroundColor = "#ffd93e"
  } else {
    btn3.style.backgroundColor = "#f7f7f7"
  }
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
var popupNumber

xiaomiBulbBtn.addEventListener("click", function(){ showPopup('Xiaomi Yeelight LED Smart Bulb', 'Включено', lightParams, "icon_sun_2.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none", filtersStatus, 0, slidersStatus); popupNumber = 0 });
dlinkCamBtn.addEventListener("click", function(){ showPopup('D-Link Omna 180 Cam', 'Включится в 17:00', lightParams, "icon_sun.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none", filtersStatus, 1, slidersStatus); popupNumber = 1 });
elgatoBtn.addEventListener("click", function(){ showPopup('Elgato Eve Degree Connected', 'Выключено до 17:00', elgatoParams, "icon_temperature.svg", "modal-container-panel-slider-termo", "hidden", "hidden", "visible", "visible", "block", filtersStatus, 2, slidersStatus); popupNumber = 2 });
lifxMiniBtn.addEventListener("click", function(){ showPopup('LIFX Mini Day & Dusk A60 E27', 'Включится в 17:00', lightParams, "icon_sun.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none", filtersStatus, 3, slidersStatus); popupNumber = 3 });
xiaomiAirBtn.addEventListener("click", function(){ showPopup('Xiaomi Mi Air Purifier 2S', 'Включено', lightParams, "icon_sun_2.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none", filtersStatus, 4, slidersStatus); popupNumber = 4 });
zhiruiBtn.addEventListener("click", function(){ showPopup('Philips Zhirui', 'Выключено', lightParams, "icon_sun.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none", filtersStatus, 5, slidersStatus); popupNumber = 5 });
xiaomiBulbNextBtn.addEventListener("click", function(){ showPopup('Xiaomi Yeelight LED Smart Bulb', 'Включено', lightParams, "icon_sun_2.svg", "modal-container-panel-slider", "visible", "visible", "hidden", "hidden", "none", filtersStatus, 6, slidersStatus); popupNumber = 6 });
xiaomiWarmFloorBtn.addEventListener("click", function(){ showPopup('Xiaomi Warm Floor', 'Включено', warmFloorParams, "icon_temperature_2.svg", "modal-container-panel-slider-termo", "hidden", "hidden", "hidden", "hidden", "block", filtersStatus, 7, slidersStatus); popupNumber = 7 });


// Popup slider
var popupSliderHandler = function(thisVal, pNumber) {

  slidersStatus[pNumber] = Number(thisVal)

  if (thisVal > 0) {
    sliderValue.innerHTML = "+" + thisVal;
  } else if (thisVal == 0) {
    sliderValue.innerHTML = " " + thisVal;
  } else if (thisVal < 0) {
    sliderValue.innerHTML = thisVal;
  }
}

popupSlider.addEventListener("input", function(){ popupSliderHandler(this.value, popupNumber); });


// Popup filters btns
var popupFilterHandler = function(filterNum, popupNum) {

//  console.log("popupNumber=", popupNum)
  if (filterNum === 'filter1') {
    filtersStatus[popupNum] = [true, false, false, false]
    slidersStatus[popupNum] = 10
    sliderValue.innerHTML = '+10'
    popupSlider.style.filter = "grayscale(0%)"
    popupSlider.disabled = false
  } else if (filterNum === 'filter2') {
    filtersStatus[popupNum] = [false, true, false, false]
    slidersStatus[popupNum] = -10
    sliderValue.innerHTML = '-10'
    popupSlider.style.filter = "grayscale(100%)"
    popupSlider.disabled = true
  } else if (filterNum === 'filter3') {
    filtersStatus[popupNum] = [false, false, true, false]
    slidersStatus[popupNum] = 10
    sliderValue.innerHTML = '+10'
    popupSlider.style.filter = "grayscale(100%)"
    popupSlider.disabled = true
  } else if (filterNum === 'filter4') {
    filtersStatus[popupNum] = [false, false, false, true]
    slidersStatus[popupNum] = 30
    sliderValue.innerHTML = '+30'
    popupSlider.style.filter = "grayscale(100%)"
    popupSlider.disabled = true
  }
  popupSlider.value = slidersStatus[popupNum];

  filtersStatus[popupNum][0] === true ? btn0.style.backgroundColor = "#ffd93e" : btn0.style.backgroundColor = "#f7f7f7"
  filtersStatus[popupNum][1] === true ? btn1.style.backgroundColor = "#ffd93e" : btn1.style.backgroundColor = "#f7f7f7"
  filtersStatus[popupNum][2] === true ? btn2.style.backgroundColor = "#ffd93e" : btn2.style.backgroundColor = "#f7f7f7"
  filtersStatus[popupNum][3] === true ? btn3.style.backgroundColor = "#ffd93e" : btn3.style.backgroundColor = "#f7f7f7"
//  console.log("filtersStatus=", filtersStatus)
}

btn0.addEventListener("click", function(){ popupFilterHandler('filter1', popupNumber); });
btn1.addEventListener("click", function(){ popupFilterHandler('filter2', popupNumber); });
btn2.addEventListener("click", function(){ popupFilterHandler('filter3', popupNumber); });
btn3.addEventListener("click", function(){ popupFilterHandler('filter4', popupNumber); });

// popup panel height handler on window resize
var resizeHandlerPopupHeight = function(popupNum) {
  if (window.matchMedia("(max-width: 670px)").matches) {
    modalContainerPanel.style.height = "492px"
    modal.style.height = "642px"
  } else if (window.matchMedia("(min-width: 670px) and (max-width: 1368px)").matches) {
    popupNum === 7 ? modalContainerPanel.style.height = "343px" : modalContainerPanel.style.height = "238px"
    popupNum === 7 ? modal.style.height = "424px" : modal.style.height = "318px"
  } else if (window.matchMedia("(min-width: 1368px)").matches) {
    popupNum === 7 ? modalContainerPanel.style.height = "25.07vw" : modalContainerPanel.style.height = "17.39vw"
    popupNum === 7 ? modal.style.height = "30.99vw" : modal.style.height = "23.24vw"
  }
}

window.addEventListener("resize", function(){ resizeHandlerPopupHeight(popupNumber); });

// Popup close
var popupClose = function() {
  modalBkg.style.visibility = "hidden";
  modalBkg.style.opacity = "0";
  main.style.filter = "none";
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  body.style.overflow = "visible"
}

window.onclick = function(event) {
  if (event.target == modalContainerBtn) {
    filtersStatus[popupNumber] = previousFiltersStatus[popupNumber]
    slidersStatus[popupNumber] = previousSlidersStatus[popupNumber]
    popupClose()
  } else if (event.target == modalContainerBtnApply) {
    previousFiltersStatus[popupNumber] = filtersStatus[popupNumber]
    previousSlidersStatus[popupNumber] = slidersStatus[popupNumber]
    popupClose()
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

// on mobile...
var mobMenuIsOpened = false
var downBtn = document.getElementsByClassName('down-button');
var downBtnTap = document.getElementById('down-button-tap');
var filtersBack = document.getElementById('favourite-devices-filters-menu-back');

var resizeHandlerFilters = function() {
  if (document.body.clientWidth > 1368) {
  //  hallBtn.style.display = "block"
    allBtn.style.opacity = "1"
    allBtn.style.visibility = "visible"
    kitchenBtn.style.opacity = "1"
    kitchenBtn.style.visibility = "visible"
    hallBtn.style.opacity = "1"
    hallBtn.style.visibility = "visible"
    lampsBtn.style.opacity = "1"
    lampsBtn.style.visibility = "visible"
    camsBtn.style.opacity = "1"
    camsBtn.style.visibility = "visible"
    filtersBack.style.opacity = "0"
    filtersBack.style.visibility = "hidden"

  } else if (document.body.clientWidth <= 1368 && mobMenuIsOpened === false) {
  //  hallBtn.style.display = "none"
    allBtn.style.opacity = "0"
    allBtn.style.visibility = "hidden"
    kitchenBtn.style.opacity = "0"
    kitchenBtn.style.visibility = "hidden"
    hallBtn.style.opacity = "0"
    hallBtn.style.visibility = "hidden"
    lampsBtn.style.opacity = "0"
    lampsBtn.style.visibility = "hidden"
    camsBtn.style.opacity = "0"
    camsBtn.style.visibility = "hidden"
    filtersBack.style.opacity = "0"
    filtersBack.style.visibility = "hidden"
  } else if (document.body.clientWidth <= 1368 && mobMenuIsOpened === true) {
    filtersBack.style.opacity = "0.3"
    filtersBack.style.visibility = "visible"
  }
}


var showFilters = function() {
  mobMenuIsOpened = !mobMenuIsOpened
//  console.log('mobMenuIsOpened=', mobMenuIsOpened)

  if (mobMenuIsOpened) {
//    hallBtn.style.display = "block"
    downBtn[0].style.transform = "translateY(3px) rotate(0deg)"
    allBtn.style.opacity = "1"
    allBtn.style.visibility = "visible"
    allBtn.style.top = "40px"
    allBtn.style.right = "153px"
    kitchenBtn.style.opacity = "1"
    kitchenBtn.style.visibility = "visible"
    kitchenBtn.style.top = "40px"
    kitchenBtn.style.right = "10px"
    hallBtn.style.opacity = "1"
    hallBtn.style.visibility = "visible"
    hallBtn.style.top = "40px"
    hallBtn.style.right = "88px"
    lampsBtn.style.opacity = "1"
    lampsBtn.style.visibility = "visible"
    lampsBtn.style.top = "79px"
    lampsBtn.style.right = "10px"
    camsBtn.style.opacity = "1"
    camsBtn.style.visibility = "visible"
    camsBtn.style.top = "79px"
    camsBtn.style.right = "125px"
    filtersBack.style.opacity = "0.3"
    filtersBack.style.visibility = "visible"
  } else {
//    hallBtn.style.display = "none"
    downBtn[0].style.transform = "translateY(1px) rotate(180deg)"
    allBtn.style.opacity = "0"
    allBtn.style.visibility = "hidden"
    kitchenBtn.style.opacity = "0"
    kitchenBtn.style.visibility = "hidden"
    hallBtn.style.opacity = "0"
    hallBtn.style.visibility = "hidden"
    lampsBtn.style.opacity = "0"
    lampsBtn.style.visibility = "hidden"
    camsBtn.style.opacity = "0"
    camsBtn.style.visibility = "hidden"
    filtersBack.style.opacity = "0"
    filtersBack.style.visibility = "hidden"
  }

}

downBtnTap.addEventListener("click", function(){ showFilters(); });
window.addEventListener("resize", function(){ resizeHandlerFilters() });
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


/*-----------------touch event handler start--------------------------*/
var favDevsWrapper = document.getElementsByClassName("favourite-devices-panels-container-outer")
var favScenWrapper = document.getElementsByClassName("favourite-scenarios-panels-container-outer")

var favScenarioLeft = document.getElementById("favourite-scenario-1");
var favScenarioRight = document.getElementById("favourite-scenario-5");

var prevBtnDev = document.getElementById("prev-button-dev");
var nextBtnDev = document.getElementById("next-button-dev");
var prevBtnSce = document.getElementById("prev-button-sce");
var nextBtnSce = document.getElementById("next-button-sce");

nextBtnDev.style.opacity = "1"
var nextBtnSceHandler = function() {
  if (document.body.clientWidth <= 1368) {
    nextBtnSce.style.opacity = "1"
  } else {
    nextBtnSce.style.opacity = "0.2"
    prevBtnSce.style.opacity = "0.2"
  }
}


window.addEventListener("resize", function(){ nextBtnSceHandler() });

var touchMoveHandler = function(elem) {
  elem.style.boxShadow = "0 2px 6px rgba(197, 186, 186, 0.5)"
  elem.style.backgroundColor = "#fff"

  var coordsLeftFD = xiaomiBulbBtn.getBoundingClientRect()
  var coordsRightFD = xiaomiWarmFloorBtn.getBoundingClientRect()
  var wrapperCoordsFD = favDevsWrapper[0].getBoundingClientRect()

  var coordsLeftSce = favScenarioLeft.getBoundingClientRect()
  var coordsRightSce = favScenarioRight.getBoundingClientRect()
  var wrapperCoordsSce = favScenWrapper[0].getBoundingClientRect()

  Math.trunc(coordsLeftFD.left) < Math.trunc(wrapperCoordsFD.left) ? prevBtnDev.style.opacity = "1" : prevBtnDev.style.opacity = "0.2"
  Math.trunc(coordsRightFD.right) > Math.trunc(wrapperCoordsFD.right) ? nextBtnDev.style.opacity = "1" : nextBtnDev.style.opacity = "0.2"
  Math.trunc(coordsLeftSce.left) < Math.trunc(wrapperCoordsSce.left) ? prevBtnSce.style.opacity = "1" : prevBtnSce.style.opacity = "0.2"
  Math.trunc(coordsRightSce.right) > Math.trunc(wrapperCoordsSce.right) ? nextBtnSce.style.opacity = "1" : nextBtnSce.style.opacity = "0.2"
}

var touchEndHandler = function(elem) {
  elem.style.boxShadow = "none"
  elem.style.backgroundColor = "#f7f7f7"
}

var mouseenterHandler = function(elem) {
  elem.style.boxShadow = "0 2px 6px rgba(197, 186, 186, 0.5)"
  elem.style.backgroundColor = "#fff"
}

var mouseleaveHandler = function(elem) {
  elem.style.boxShadow = "none"
  elem.style.backgroundColor = "#f7f7f7"
}

var favDevices = document.getElementsByClassName("favourite-device-panel")
var favScenarios = document.getElementsByClassName("favourite-scenario-panel")
var nextScenarios = document.getElementsByClassName("next-scenario-panel")

for (var i = 0; i < favDevices.length; i++) {
  favDevices[i].addEventListener("touchmove", function(){ touchMoveHandler(this) })
  favDevices[i].addEventListener("touchend", function(){ touchEndHandler(this) })
  favDevices[i].addEventListener("mouseenter", function(){ mouseenterHandler(this) })
  favDevices[i].addEventListener("mouseleave", function(){ mouseleaveHandler(this) })
}

for (var j = 0; j < favScenarios.length; j++) {
  favScenarios[j].addEventListener("touchmove", function(){ touchMoveHandler(this) })
  favScenarios[j].addEventListener("touchend", function(){ touchEndHandler(this) })
  favScenarios[j].addEventListener("mouseenter", function(){ mouseenterHandler(this) })
  favScenarios[j].addEventListener("mouseleave", function(){ mouseleaveHandler(this) })
}

for (var k = 0; k < nextScenarios.length; k++) {
  nextScenarios[k].addEventListener("touchmove", function(){ touchMoveHandler(this) })
  nextScenarios[k].addEventListener("touchend", function(){ touchEndHandler(this) })
  nextScenarios[k].addEventListener("mouseenter", function(){ mouseenterHandler(this) })
  nextScenarios[k].addEventListener("mouseleave", function(){ mouseleaveHandler(this) })
}
/*-----------------touch event handler end----------------------------*/
