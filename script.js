const navLinks = document.querySelectorAll('.nav__link');

//    nav handler

navLinks.forEach(link => {
    link.addEventListener('click', evt => {
        evt.preventDefault();
        const id = link.href.split('html#');
        document.getElementById(id[1]).scrollIntoView({ behavior: 'smooth' });
        navLinks.forEach(link => link.classList = "nav__link");
        link.classList = "nav__link nav__link-active";
    });
});


const arrowPrev = document.querySelector('.arrow-prev'),
    arrowNext = document.querySelector('.arrow-next'),
    slide1 = document.querySelector('.slide-1'),
    slide2 = document.querySelector('.slide-2'),
    slide1Vbtn = document.querySelector('.slide-1-v-btn'),
    slide1Vscreen = document.querySelector('.slide-1-v-screen '),
    slide1Hbtn = document.querySelector('.slide-1-h-btn'),
    slide1Hscreen = document.querySelector('.slide-1-h-screen '),
    slide2Vbtn = document.querySelector('.slide-2-v-btn'),
    slide2Vscreen = document.querySelector('.slide-2-v-screen ');

//  slider

const toSlide2 = () => {
    slide1.style.width = '0%';
    slide2.style.width = '100%';
};

const toSlide1 = () => {
    slide1.style.width = '';
    slide2.style.width = '';
};

arrowNext.addEventListener('click', () => {
    slide1.style.width == '0%' ? toSlide1() : toSlide2();
});
arrowPrev.addEventListener('click', () => {
    slide1.style.width != '0%' ? toSlide2() : toSlide1();
});

slide1Vbtn.addEventListener('click', () => {
    if (slide1Vscreen.style.opacity == 1) {
        slide1Vscreen.style.opacity = "0";
    } else {
        slide1Vscreen.style.opacity = "1";
    }
});

slide2Vbtn.addEventListener('click', () => {
    if (slide2Vscreen.style.opacity == 1) {
        slide2Vscreen.style.opacity = "0";
    } else {
        slide2Vscreen.style.opacity = "1";
    }
});

slide1Hbtn.addEventListener('click', () => {
    if (slide1Hscreen.style.opacity == 1) {
        slide1Hscreen.style.opacity = "0";
    } else {
        slide1Hscreen.style.opacity = "1";
    }
});

//    portfolio

const addBorder = () => {
    const images = document.querySelectorAll('.portfolio__images img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            images.forEach(img => img.classList = '');
            img.classList.add('bordered');
        });
    });
}
addBorder();

const randomImages = () => {
    let imagesCont = document.querySelector('.portfolio__images');
    let imagesArr = imagesCont.innerHTML.split('>');
    imagesArr.splice(12);
    imagesArr.sort((a, b) => Math.random() - 0.5);
    let imagesHtml = '';
    imagesArr.forEach(elem => imagesHtml += elem + '>');
    imagesCont.innerHTML = imagesHtml;
    addBorder();
}

const portfolioNav = document.querySelectorAll('.portfolio__nav button');

portfolioNav.forEach(btn => {
    btn.addEventListener('click', () => {
        portfolioNav.forEach(btn => btn.classList = 'portfolio__btn');
        btn.classList = 'portfolio__btn portfolio__btn-active';
        randomImages();
    });
});

//    form

const inputName = document.querySelector('.input__name'),
    inputMail = document.querySelector('.input__mail'),
    submitBtn = document.querySelector('.input__submit'),
    inputSubject = document.querySelector('.input__subject'),
    inputText = document.querySelector('.input__text'),
    form = document.querySelector('.form');

const message = document.createElement('div');
message.classList = 'formMessage';
form.appendChild(message);

submitBtn.addEventListener('click', evt => {
    evt.preventDefault();
    if (!inputName.value || inputMail.value.indexOf('@') === -1 || inputMail.value.indexOf('@') == inputMail.value.length - 1) return;
    message.innerHTML = `
    <p>Письмо отправлено</p>
    <p>Тема: <span>
        ${inputSubject.value ? inputSubject.value : 'Без темы'}
      </span></p>
    <p>Описание: <span>
    ${inputText.value ? inputText.value : 'Без описания'}
      </span></p>
    <button>ок</button>
  `;
    message.style.display = 'flex';

    setTimeout(() => {
        message.style.opacity = '1';
        message.style.transform = 'translate(0%, -50%)';
    }, 300);

    message.querySelector('button').addEventListener('click', () => {
        message.style.opacity = '';
        message.style.transform = '';

        setTimeout(() => {
            message.style.display = '';
        }, 300);
    });

    form.reset();
});