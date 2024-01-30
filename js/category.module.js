export async function showCategory() {
    let category = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let response = await category.json()
    console.log(response)
    getDataOfCategory(response.categories)
    let carrds = document.querySelectorAll("#carrds")
    for (let i = 0; i < carrds.length; i++) {
        carrds[i].addEventListener("click", function (e) {
            let categ = e.target.getAttribute("category-name")
            filterCategory(categ)

        })
    }
}
function getDataOfCategory(category = '') {
    let temp = ''
    for (let i = 0; i < category.length; i++) {
        temp += `<div class="col-md-3 cursor text-center" category-name="${category[i].strCategory}">
                    <div category-name="${category[i].strCategory}" class="category position-relative overflow-hidden rounded-2">
                        <img src="${category[i].strCategoryThumb}" class="w-100" alt="photo of category" category-name="${category[i].strCategory}">
                        <div  id="carrds" class="layer p-2 text-black position-absolute top-100" category-name="${category[i].strCategory}">
                            <h3 category-name="${category[i].strCategory}">${category[i].strCategory}</h3>
                            <p category-name="${category[i].strCategory}" style="font-size: 14px;">${category[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                        </div>
                    </div>
                </div>
    `
    }
    document.getElementById('categoryData').style.display = "block"
    document.getElementById('categoryData').innerHTML = temp
}

// import {getDataOfMeal} from './home.module.js'
function showDetailsOfCategory(element) {
    let temp = ''
    for (let i = 0; i < element.length; i++) {
        temp += `
                    <div class="col-md-3 cursor" card-categorrry-name="${element[i].idMeal}">
                        <div id="${element[i].idMeal}" class="categorrry position-relative overflow-hidden rounded-2" card-categorrry-name="${element[i].idMeal}">
                            <img src="${element[i].strMealThumb}" class="w-100" alt="photo of meal" card-categorrry-name="${element[i].idMeal}">
                            <div class="layer d-flex align-items-center p-2 text-black position-absolute top-100" card-categorrry-name="${element[i].idMeal}">
                                <h3 card-categorrry-name="${element[i].idMeal}">${element[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>
                
        `}
    
    document.getElementById('categoryData').innerHTML = temp

}
async function filterCategory(nameCategory) {
    let category = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameCategory}`)
    let response = await category.json()
    console.log(response.meals);
    // displaycategories(response.categories.slice(0, 20))
    showDetailsOfCategory(response.meals)
    let cardArea = document.querySelectorAll(".categorrry")
    for(let i = 0 ; i <cardArea.length ; i++){
        cardArea[i].addEventListener("click",function(e){
            let area = e.target.getAttribute("card-categorrry-name")
            console.log(area)
            document.querySelector('#categoryData').classList.add('d-none')
            // document.querySelector('#detailsArea').classList.remove('d-none')
            getDetailsOfMealArea(area)
        })
    }

}
async function getDetailsOfMealArea(mealID) {
    let detailsMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    let resposne = await detailsMeal.json()
    console.log(resposne.meals);
    showDetailsMeal(resposne.meals)
}
function showDetailsMeal(element) {
    let temp = `<div  class="col-md-4">
                            <img src="${element[0].strMealThumb}" class="w-100 rounded-3"  alt="photo of Details Meal">
                    </div>
                    <div class="col-md-7 text-white">
                            <h1>Instructions</h1>
                            <p>${element[0].strInstructions}
                            </p>
                            <h2>Area: <span>${element[0].strArea}</span></h2>
                            <h2>Category : <span>${element[0].strCategory}</span></h2>
                            <h3>Recipes :</h3>
                            <ul class="list-unstyled d-flex flex-wrap g-3">
                                <li class="m-2 p-1">${element[0].ingredients}</li>
                            </ul>
                            <h3 class="mb-4">Tags :</h3>
                            <span class="bg-danger-subtle text-black px-2 py-1 rounded-2">${element[0].strTags}</span>
                            <div class="my-4">
                                <button class="btn btn-success text-white"><a class="text-decoration-none text-white" href=${element[0].strSource}>Source</a></button>
                                <button class="btn btn-danger"><a class="text-decoration-none text-white" href=${element[0].strYoutube}>Youtube</a></button>
                            </div>
                    </div>`
    
    document.getElementById('dataDetails').innerHTML = temp 
}


