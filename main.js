//1

let secondH1 = document.getElementsByTagName('h1')[1];

console.log(secondH1.textContent);

//2 

let lastLi = document.getElementsByTagName('li')[3];

console.log(lastLi.textContent);

//3

let firstPara = document.getElementsByTagName('p')[0];

let majuscule = firstPara.textContent.toUpperCase()

console.log(majuscule);

//4 

let li = document.getElementsByTagName('li')

let tab = Array.from(li)

tab.forEach(element => {
    console.log(element.textContent.toUpperCase());
});