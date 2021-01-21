const data = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const searchInput = document.querySelector(".searchInput");
const suggestions = document.querySelector(".suggestions");
const cities = [];

(function started(){
    suggestions.innerHTML = `
    <li>Filter for a city</li>
    <li>or a state</li>`;
    fetch(data)
        .then((item) => item.json())
        .then((item) => cities.push(...item))
    cities.sort((a,b) => a.population > b.population ? -1 : 1)
})();

function findMatches(word){
    return cities.filter((item) => {
        let regex = new RegExp(word,"gi");
        return item.city.match(regex) || item.state.match(regex);
    })
}

function commas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

function displayMatches(){
    if(this.value.length == 0){
        suggestions.innerHTML = `
            <li>Filter for a city</li>
            <li>or a state</li>`;
            return;
    }
    const matchArray = findMatches(this.value);
    result = matchArray.map((item) => {
        let regex = new RegExp(this.value,"gi");
        let cityName = item.city.replace(regex, `<mark>${this.value}</mark>`);
        let stateName = item.state.replace(regex, `<mark>${this.value}</mark>`);
        return `
        <li>
            <span>${cityName}, ${stateName}</span>
            <span>${commas(item.population)}</span>
        </li>`
    }).join("");
    suggestions.innerHTML = result;
}

searchInput.addEventListener("keyup",  displayMatches);
searchInput.addEventListener("change", displayMatches);

