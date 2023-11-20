console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";



document.addEventListener("DOMContentLoaded", function() {
    fetch(imgUrl)
     .then(function (response) {
       return response.json();
      })
     .then(function (data) {
        let newArr = [...data.message]
        newArr.forEach((element) => {
            renderImg(element)
     })
    });  
})

function renderImg(dog) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `<img src="${dog}">`
    document.getElementById('dog-image-container').appendChild(card)
}

document.addEventListener("DOMContentLoaded", function() {
    fetch(breedUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        let breedList = document.getElementById('dog-breeds')
        for(const key in data.message){
            let dogUl = document.createElement('ul')
            let name = `${key}`
            let letter = name.charAt(0)
            dogUl.className = letter
            dogUl.innerText = `${key}: ${data.message[key]}`
            breedList.appendChild(dogUl)
        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    let choices = document.querySelector('#breed-dropdown')
    choices.addEventListener('change', (sort))
    
})

function sort() {
    const myEl = document.getElementById('dog-breeds')
    for (const child of myEl.children) {
        child.style.display = 'none'
    }
    let option = document.querySelector('#breed-dropdown').value
    
    if(option === 'a') {
        for (const child of myEl.children) {
            if(child.className === 'a') {
                child.style.display = 'list-item'
            }
        }
    } else if( option === 'b') {
        for (const child of myEl.children) {
            if(child.className === 'b') {
                child.style.display = 'list-item'
            }
        }
    } else if( option === 'c') {
        for (const child of myEl.children) {
            if(child.className === 'c') {
                child.style.display = 'list-item'
            }
        }
    } else if( option === 'd') {
        for (const child of myEl.children) {
            if(child.className === 'd') {
                child.style.display = 'list-item'
            }
        }
    } 
       
    
}