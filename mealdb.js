const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container');
    // to clear inner content of parent mealContainer when it starts the search.
    mealsContainer.innerHTML = '';

    for(const meal of meals){
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML =`
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">Youtube Link: ${meal.strYoutube}</p>

                    <!-- modal button
                    also need to rename id name as per html we provided on earlier. -->

                    <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                        Details
                    </button>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
    }
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    // to search, call the previously created loadMeals function & git it the search text as its parameter.
    loadMeals (searchText);
}

// modal এর button এ click করলে এটি perform করবে।
const loadMealDetail = idMeal => {
    // modal এর button এর argument থেকে এই parameter আসার কারনে এখানে আর meal.idMeal লেখা লাগে নি, শুধু id বা idMeal যাই লেখা হোক না কেন, তা আগে ফাংশন কলের সময়কার argument অর্থাৎ, meal.idMeal কেই refer করছে।
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    // error handling by catch in fetch
    .catch(error => {
        console.log(error)
    })
}

// async await $ try-catch
const loadMealDetail2 = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch(error){
        console.log(error);
    }
}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetailsBody = document.getElementById('mealDetailsBody');
    mealDetailsBody.innerHTML = `
        <img class="img-fluid rounded-3" src="${meal.strMealThumb}">
    `
}

// initially search with 'rice' searchText.
loadMeals ('burger');

