export async function getIng(){
    let ingData = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let response = await ingData.json()
    // console.log(response);
    showDataIng(response.meals.slice(0, 20))
    let cardsIng = document.querySelectorAll("#cardsIng")
    for(let i = 0 ; i <cardsIng.length ; i++){
        cardsIng[i].addEventListener("click",function(e){
            let ingre = e.target.getAttribute("ing-name")
            // console.log(ingre)
            document.querySelector('#ingred').classList.add('d-none')
            getIngrMeals(ingre)
        })
    }
}
function showDataIng(element){
    let temp = ''
    for(let i = 0 ; i < element.length ; i++){
        temp += `
                    <div id="cardsIng"  class="col-md-3 text-center cursor text-white" ing-name = ${element[i].strIngredient}>
                            <i class="fa-solid fa-drumstick-bite fs-1" ing-name = ${element[i].strIngredient}></i>
                            <h3 ing-name = ${element[i].strIngredient}>${element[i].strIngredient}</h3>
                            <p ing-name = ${element[i].strIngredient}>${element[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
        `
    }
    document.getElementById('ingred').innerHTML = temp
}
// 
async function getIngrMeals(inger='') {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inger}`)
    response = await response.json()
    console.log(response.meals);
    showDetailsOfIng(response.meals)
    let cardInge = document.querySelectorAll("#ingerdtant")
    for(let i = 0 ; i <cardInge.length ; i++){
        cardInge[i].addEventListener("click",function(e){
            let ingredt = e.target.getAttribute("card-ingrede-name")
            console.log(ingredt)
            document.querySelector('#ingredDetails').classList.add('d-none')
            // document.querySelector('#ingredDetails').classList.add('d-none')
            getDetailsOfMealInge(ingredt)
        })
    }
}
function showDetailsOfIng(element){
    let temp = ''
    for(let i = 0 ; i < element.length ; i++){
        temp += `
               
                    <div id="ingerdtant" class="col-md-3 cursor" card-ingrede-name= ${element[i].idMeal}>
                        <div class="ingred position-relative overflow-hidden rounded-2" card-ingrede-name= ${element[i].idMeal}>
                            <img src="${element[i].strMealThumb}" class="w-100" alt="photo of meal" card-ingrede-name= ${element[i].idMeal}>
                            <div class="layer d-flex align-items-center p-2 text-black position-absolute top-100" card-ingrede-name= ${element[i].idMeal}>
                                <h3 card-ingrede-name= ${element[i].idMeal}>${element[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>
                
        `
    }
    document.getElementById('ingredDetails').innerHTML = temp
}

async function getDetailsOfMealInge(mealID) {
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
    
    document.getElementById('dataDetails').innerHTML = temp 
}
