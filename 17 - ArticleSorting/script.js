const unsbands = ["A Kingdom of Sorrow","An American Standards","The Dillinger Escape Plan","The Dream Is Dead","The Devil Wears Prada","An Old Dog","A Skylit Drive","The Great American Beast","A Gunmetal Grey"]
const unsorted = document.querySelector(".unsorted");
const sorted = document.querySelector(".sorted");

unsorted.innerHTML = "<h1>Unsorted</h1>" + unsbands.map((item) => {
    return `
    <li>${item}</li>
    `;
}).join("");

function modif(bandName){
    return bandName.replace(/^(an |the |a)/i,'').trim();
}

const sorbands = unsbands.sort((a,b) => modif(a) > modif(b) ? 1 : -1); 

sorted.innerHTML = "<h1>Sorted</h1>" + sorbands.map((item) => {
    return `
    <li>${item}</li>
    `;
}).join("");