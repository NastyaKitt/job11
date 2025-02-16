document.querySelectorAll('.callPP').forEach(button => {
    button.addEventListener('click', function() {
        const pricePopup = document.getElementById('pricePopup');
        pricePopup.classList.add('visible');
    });
});

let clsBtn = document.getElementById('clsBtn')

clsBtn.addEventListener('click', function(){
    pricePopup.classList.remove('visible');
})

// 
document.querySelectorAll('.callPP1').forEach(buttons => {
    buttons.addEventListener('click', function() {
        const pricePopup1 = document.getElementById('pricePopup1');
        pricePopup1.classList.add('visible');
    });
});

let clsBtn1 = document.getElementById('clsBtn1')

clsBtn1.addEventListener('click', function(){
    pricePopup1.classList.remove('visible');
})

// 


const reviews = document.querySelectorAll('.reviewItem');
let currentIndex = 0;

function showNextReviews() {

    reviews.forEach(review => review.classList.remove('active'));

    reviews[currentIndex].classList.add('active'); 
    reviews[(currentIndex + 1) % reviews.length].classList.add('active');

    currentIndex = (currentIndex + 1) % reviews.length;
}

setInterval(showNextReviews, 4000);

showNextReviews();

// 



const primers = document.querySelectorAll('.primerItem');
let currenttIndex = 0;

function showNextReviewss() {

    primers.forEach(review => review.classList.remove('active'));

    primers[currenttIndex].classList.add('active');
    primers[(currenttIndex + 1) % primers.length].classList.add('active'); 

    currenttIndex = (currenttIndex + 1) % primers.length;
}

setInterval(showNextReviewss, 4000);

showNextReviewss();

// 

let clsPolit = document.getElementById('clsPolit')
let politicWin = document.getElementById('politicWin')
let callPolit = document.getElementById('callPolit')

callPolit.addEventListener('click', function(){
    politicWin.classList.add('activeP')
})


clsPolit.addEventListener('click', function(){
    politicWin.classList.remove('activeP')
})

// 

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var inputs = [document.querySelector("#tel"), document.querySelector("#tel1")]; // Массив инпутов
    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false); // Добавляем обработчик события на input
        input.focus(); // Устанавливаем фокус
        setCursorPosition(3, input); // Устанавливаем курсор в начало
    });
});
// 

document.getElementById('perfo').addEventListener('click', function() {
    const telInput = document.getElementById('tel1');
    
    telInput.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});


document.getElementById('mans').addEventListener('click', function() {
    const telInput = document.getElementById('tel');
    
    telInput.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});
