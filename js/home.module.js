export async function getDetailsMeal(meal = '') {
    let mealList = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    let response = await mealList.json()
    getDataOfMeal(response.meals)
    let detailsData = document.querySelectorAll("#detailsData")
    for (let i = 0; i < detailsData.length; i++) {
        detailsData[i].addEventListener("click", function (e) {
            let mealID = e.target.getAttribute("home-detail")
            getDetailsOfMeal(mealID)
        })
    }
}
function getDataOfMeal(meal) {
    let temp = ''
    for (let i = 0; i < meal.length; i++) {
        temp += `<div id="detailsData" class="col-md-3 cursor" home-detail="${meal[i].idMeal}">
                    <div  class="meal position-relative overflow-hidden rounded-2" home-detail="${meal[i].idMeal}">
                        <img src="${meal[i].strMealThumb}" class="w-100" alt="photo of meal" home-detail="${meal[i].idMeal}">
                        <div class="layer d-flex align-items-center p-2 text-black position-absolute top-100" home-detail="${meal[i].idMeal}">
                            <h3 home-detail="${meal[i].idMeal}">${meal[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
    `
    }
    document.getElementById('data').innerHTML = temp
}

async function getDetailsOfMeal(mealID) {
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
                                <button class="btn btn-success text-white"><a target="_blank" class="text-decoration-none text-white" href=${element[0].strSource}>Source</a></button>
                                <button class="btn btn-danger"><a target="_blank" class="text-decoration-none text-white" href=${element[0].strYoutube}>Youtube</a></button>
                            </div>
                    </div>`
    
    document.getElementById('data').innerHTML = temp 
}

