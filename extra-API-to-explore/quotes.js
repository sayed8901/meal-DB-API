const loadQuote = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quote => {
    const quoteContainer = document.getElementById('quotes');
    quoteContainer.innerHTML = `
        "${quote.quote} !"
    `
}


const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(resp => resp.json())
    .then(user => displayUser(user))
}
function displayUser(user){
    const userDivContainer = document.getElementById('random-user');
    const newUserDiv = document.createElement('div');
    newUserDiv.innerHTML = `
        <h3>User Name: ${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}</h3>
        <p>Gender: ${user.results[0].gender}</p>
    `
    userDivContainer.appendChild(newUserDiv);
}

const loadUser2 = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(resp => resp.json())
    .then(user => displayUser2(user))
}
function displayUser2(user){
    const userName = document.getElementById('user-name')
    userName.innerHTML = `
        ${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}
    `
    const userGender = document.getElementById('gender')
    userGender.innerText = user.results[0].gender;

    const userMail = document.getElementById('mail')
    userMail.innerText = user.results[0].email;

    const phoneNo = document.getElementById('phone')
    phoneNo.innerText = user.results[0].phone;

    const profilePicture = document.getElementById('image')
    profilePicture.setAttribute('src', user.results[0].picture.large)
}


const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then(data => displayCounties(data))
}

loadCountries()


function displayCounties(countries){
    const countriesContainer = document.getElementById('all-countries')
    // for(const country of countries){
    //     console.log(country);
    // }
    countries.forEach(country =>{
        // console.log(country.cca2);
        // cca2 তে country 2 digit code পাওয়া যায়
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3>Country name: ${country.name.common}</h3>

            <h5>Capital city: ${country.capital ? country.capital[0] : 'no capital'}</h5>

            <!-- কোন dinamic variable এর মধ্যে আবার dynamicaly আরও অন্য কোন data add এর ক্ষেত্রে যদি এর নাম বা type number এ হয় তবে কোন সমস্যা হয় না, 
            কিন্তু তা string এ হলে তখন পুরো dataকে "" এর মধ্যে রেখে উক্ত string-টাকে আবার ‘ ’ এর মধ্যে রাখতে হয়। -->
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = code =>{
    // est countries API থেকে country url পাওয়ার জন্য
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));
}

const showCountryDetails = country =>{
    const detailContainer = document.getElementById('country-detail');
    console.log(country);
    detailContainer.innerHTML = `
        <div class="grid-layout">
            <div>
                <h1 style="margin-top: 0;">${country.name.common}</h1>
                <h4>Capital: ${country.capital ? country.capital[0] : 'no capital'}</h4>
                <h4>Continent: ${country.continents}</h4>
                <h4>Population: ${country.population}</h4>
            </div>
            <img src="${country.flags.png}" alt="">
        </div>
    `
}
