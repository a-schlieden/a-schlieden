
// функция открытия информации по клику старт

let tags = document.querySelectorAll('.grid-wrap button');
let MyArticle = document.querySelectorAll('.article');

for (item of tags) {
    this.item.onclick = function () {
        let elemId = this.id;
        if (this.id = elemId) {
            document.querySelector('.article-' + elemId).classList.add('active');
            document.querySelector('.grid-wrap').style.display = "none";
        }
    }
}
// функция открытия информации по клику конец

// функция закрытия информации по клику старт

let closeBtn = document.querySelectorAll('.close');


for (item of closeBtn) {
    this.item.onclick = function () {
        this.parentNode.classList.remove("active");
        document.querySelector('.grid-wrap').style.display = "grid";
    }
}
// функция закрытия информации по клику конец

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// функция генерирующая рандом для бекграунда + цвет "кнопок" начало

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function buttonColor() {

    for (let i = 0; i < tags.length; i++) {
        let bg = bgCollektion[randomInteger(0, bgCollektion.length - 1)];
        tags[i].style.background = bg;
    }

    for (let i = 0; i < MyArticle.length; i++) {
        let bg = bgCollektion[randomInteger(0, bgCollektion.length - 1)];
        MyArticle[i].style.background = bg;
    }
}

buttonColor();


// функция генерирующая рандом для бекграунда + цвет "кнопок" конец

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// многоязычность старт

let languageImg = document.querySelectorAll('.languages li img');
const allLanguage = ['en', 'ru', 'de'];

for (item of languageImg) {
    this.item.onclick = function () {
        let thisLanguage = this.id;
        location.href = window.location.pathname + '#' + thisLanguage;
        location.reload();
    }
    // this.item.onmousedown = function () {
    //     this.classList.add('flag-img-click');
    // }
}

let hash = window.location.hash;
hash = hash.substr(1);
if (hash === 'de') {
    document.querySelector('.biography').style.display = "block";
}
function changeLanguage() {
    //удаляем решотку из hash
    if (!allLanguage.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    document.querySelector('title').innerHTML = languageArr['title'][hash];
    for (let key in languageArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = languageArr[key][hash];
        }
    }
}

changeLanguage();

// многоязычность конец

//////////////////////////////////////////////////////////////////////////////////////////////////

// Hover effekt WORK start

let hoverImages = document.querySelectorAll('.works-liste-item');

for (let i = 0; i < hoverImages.length; i++) {
    hoverImages[i].onmouseenter = () => {

        hoverImages[i].children[1].style.display = "block"

    }
    hoverImages[i].onmouseleave = () => {
        hoverImages[i].children[1].style.display = "none"
    }
}


// Hover effekt WORK end

//////////////////////////////////////////////////////////////////////////////////////////////////

// Hover effekt HOBBY start

let hoverHobbyImages = document.querySelectorAll('.hobby-img');
let hoverHobbyImagesBig = document.querySelector('.hobby-img-big');
let hoverHobbyImagesBigs = document.querySelector('.hobby-img-bigs');

for (let i = 0; i < hoverHobbyImages.length; i++) {
    hoverHobbyImages[i].onclick = () => {
        //console.log(hoverHobbyImages[i]);
        let testSrc = hoverHobbyImages[i].src;
        hoverHobbyImagesBig.src = testSrc;
        //console.log(hoverHobbyImagesBig.src);
        hoverHobbyImagesBigs.style.display = "block";
    }
}

document.querySelector('.hobby-close').onclick = () => {
    hoverHobbyImagesBigs.style.display = "none";
};

// Hover effekt HOBBY end

/////////////////////////////////////////////////////////////////////////////////////////////////

//приветствие начало

// let today = new Date();
// let thisDay = today.getDate();
// let thisHours = today.getHours();
// let hello = document.querySelector(".hello");

// for (let key in languageArr.hello) {

//     if (0 <= thisHours && thisHours <= 9) {
//         hello.classList.add('lng-' + 'morning');
//     }
//     else if (10 <= thisHours && thisHours <= 17) {
//         hello.classList.add('lng-' + 'day');
//     }
//     else if (18 <= thisHours && thisHours <= 22) {
//         hello.classList.add('lng-' + 'evning');
//     }
//     else {
//         hello.classList.add('lng-' + 'night');
//     }

//     let helloElem = document.querySelector('.lng-' + key);

//     if (helloElem) {
//         helloElem.innerHTML = languageArr.hello[key][hash];
//     }


// };

//приветствие конец

//////////////////////////////////////////////////////////////////////////////////////////////////////

//секрет ключ начало

//let myPsw = thisDay + hash + navItemWidth;
let myPsw = "1234";


// document.querySelector('.footer-text').onclick = test2;

// function test2() {
//     let tempPsw = '';
//     window.onkeypress = function (event) {
//         tempPsw += event.key;
//         if (tempPsw == myPsw) {
//             //alert("made by Aleks Schlieden");
//             document.querySelector('.mymodal').classList.add('active');
//             setTimeout(function () {
//                 document.querySelector('.mymodal').classList.remove("active");
//             }, 6000);
//         }

//     }

// }


//секрет ключ конец
