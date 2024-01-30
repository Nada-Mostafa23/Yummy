
import { getDetailsMeal } from "./home.module.js";
import { searchByName, showSearchInputs, searchByLetter } from './search.module.js'
import { validationName,validationEmail,validationPass,btnClick} from './validation.module.js'
import { showCategory } from './category.module.js'
import { getDataOfArea } from './area.module.js'
import { getIng } from './ingerd.module.js'

validationName()
validationEmail()
validationPass()
showCategory()
getDataOfArea()
btnClick()
getIng()
getDetailsMeal()
showCategory()



//  run search
showSearchInputs()
var searchNameInput = document.getElementById("searchInput")
var searchLetterInput = document.getElementById("searchFLE")

searchNameInput.addEventListener("keypress", function () {
    searchByName(searchNameInput.value)
})

searchLetterInput.addEventListener("keypress", function () {
    searchByLetter(searchLetterInput.value)
})







$('#clickSearch').on('click', function () {
    $('#data').addClass('d-none')
    $('#categbage').addClass('d-none')
    $('#formclick').addClass('d-none')
    $('#areaClick').addClass('d-none')
    $('#ingclick').addClass('d-none')
    $('#searchremove').removeClass('d-none')
})
$('#clickCateg').on('click', function () {
    $('#formclick').addClass('d-none')
    $('#areaClick').addClass('d-none')
    $('#searchremove').addClass('d-none')
    $('#data').addClass('d-none')
    $('#ingclick').addClass('d-none')
    $('#categbage').removeClass('d-none')
})
$('#clickArea').on('click', function () {
    $('#formclick').addClass('d-none')
    $('#areaClick').removeClass('d-none')
    $('#searchremove').addClass('d-none')
    $('#data').addClass('d-none')
    $('#ingclick').addClass('d-none')
    $('#categbage').addClass('d-none')
})
$('#clickCont').on('click', function () {
    $('#formclick').removeClass('d-none')
    $('#areaClick').addClass('d-none')
    $('#searchremove').addClass('d-none')
    $('#data').addClass('d-none')
    $('#ingclick').addClass('d-none')
    $('#categbage').addClass('d-none')
})
$('#clickIng').on('click', function () {
    $('#formclick').addClass('d-none')
    $('#areaClick').addClass('d-none')
    $('#searchremove').addClass('d-none')
    $('#data').addClass('d-none')
    $('#ingclick').removeClass('d-none')
    $('#categbage').addClass('d-none')
})




//  side-nav
function openNav() {
    $('.side-menu').animate({
        left: '0px'
    }, 500)
    $(".open").removeClass("fa-align-justify");
    $(".open").addClass("fa-x");
}
let width = $('.sideBar').outerWidth()
$('.side-menu').css('left', `-${width}`)
function closeNav() {
    $('.side-menu').animate({
        left: `-${width}px`
    }, 500)
    $(".open").addClass("fa-align-justify");
    $(".open").removeClass("fa-x");
}
$(".side-menu i.open").click(() => {
    if ($(".side-menu").css("left") == "0px") {
        closeNav()

    } else {
        openNav()
    }
})