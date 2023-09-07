function formValidation() {
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var name = document.form.Name.value;
    var email = document.form.Email.value;
    var subject = document.form.Subject.value;
    var message = document.form.Message.value;



    if (email == "" || !regEmail.test(email)) {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (message.length < 10 || message.length > 500) {
        window.alert("Message should be atleast 10 charcters and maximum of 500 character long");
        address.focus();
        return false;
    }
    if (subject.length < 10 || subject.length > 500) {
        window.alert("subject  should be atleast 10 charcters and maximum of 50 character long");
        address.focus();
        return false;
    }
}








// const swiper = new swiper('.swiper', {
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         draggable: true,
//     },
// });

// const menuBtn=document.querySelector('#menu-btn');
// const closeBtn=document.querySelector('#close-btn');
const nav=document.querySelector('nav .container');
const menu=document.querySelector('nav .container ul');

// menuBtn.addEventListener('click',() => {
//     menu.style.display='block';
//     menuBtn.style.display='none';
//     closeBtn.style.display='inline-block';
// })

// closeBtn.addEventListener('click',() => {
//     menu.style.display='none';
//     menuBtn.style.display='inline-block';
//     closeBtn.style.display='none';
// })

console.log(menu)
const navInput = nav.querySelector('input#nav-input');
const navItems = menu.querySelectorAll('li');
navItems.forEach(item => {
    item.addEventListener('click', e => {
        console.log(navInput)
        navInput.checked = false
    })
})

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        menu.querySelectorAll('nav .container ul .active').forEach(li => {
            li.classList.remove('active')

        })

        link.classList.add('active');
    })
})


const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
})







const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items'.classList.toggle('show-items'))
    })
})