const faqItself = document.querySelectorAll('.faq-itself');
const questionBtn = document.querySelectorAll('.question');

// FAQ 

for (let i = 0; i < questionBtn.length; i++) {
    questionBtn[i].addEventListener('click', () => {
        faqItself[i].classList.toggle('faq-itself-js');
    });
};