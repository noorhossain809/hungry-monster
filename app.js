document.getElementById("search-button").addEventListener("click", function(){
    const getFood = document.getElementById("input").value;
    // const area = document.getElementById('get-food')
    // area.innerText = getFood

    getReport(getFood)
})
function getReport(s){

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+s)
.then(res => res.json())
.then(data => displayFoods(data.meals));
}
/*
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then(res => res.json())
.then(data => displayFoods(data.meals));
**/

const displayFoods = foods => {
    const foodsDiv = document.getElementById('foods');
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        const foodInfo = `
             <img src="${food.strMealThumb}"/>
             <h3 class="">${food.strMeal}</h3>
             <button onclick="displayFoodDetails('${food.strMeal}')">Details</button>
        `
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
        
    
        
    });
    /* 
    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        // const name = document.createElement('h3');
        // name.innerText = food.strMeal;
        // foodDiv.appendChild(name);
        // 

        const foodInfo = `
             <img src="${food.strMealThumb}"
             <h3 class="food-name">${food.strMeal}</h3>

        
        `
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
        
    }
    **/
}
const displayFoodDetails = food => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodInfo(data.meals[0]));
}

const renderFoodInfo = food => {
    console.log(food);
    const foodDiv = document.getElementById('foodDetail');
    foodDiv.innerHTML = `
       <img src="${food.strMealThumb}">
       <h1>${food.strMeal}</h1>
       <h4>ID: ${food.idMeal}</h4>
       <p>Area: ${food.strArea}</p>
       <p>Category: ${food.strCategory}</p>
       <p>Ingredient: ${food.strIngredient1}</p>
       <p>Ingredient: ${food.strIngredient2}</p>
       <p>Ingredient: ${food.strIngredient5}</p>
       <p>Ingredient: ${food.strIngredient6}</p>
       <p>Ingredient: ${food.strIngredient7}</p>
       <p>Tags: ${food.strTags}</p>
    
    `
}

