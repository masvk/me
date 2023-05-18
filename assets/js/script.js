console.log("started");

function setHash(hash) {
    event.preventDefault();
    history.pushState(null, null, "#" + hash);
}


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

/* 
Header
*/
var container_wrap = document.querySelector('.container-wrap');
const cardItems = document.querySelectorAll(".card-inner");
var animation_in = container_wrap.dataset.animation_in;
var animation_out = container_wrap.dataset.animation_out;
const topMenu = document.getElementById('top-menu').getElementsByTagName('a');
var menuItems = document.querySelectorAll('.top-menu li');
var windowWidth = window.innerWidth;


if (windowWidth > 1024) {
    for (i = 0; i < topMenu.length; i++) {
        topMenu[i].addEventListener('click', function (event) {

            var id = this.getAttribute('href');
            var cardItem = document.getElementById(id.substring(1));
            var h = parseFloat(cardItem.offsetTop);


            var menuItem = this.closest('li');

            if (!menuItem.classList.contains('active')) {

                //Close card items
                menuItems.forEach((element) => {
                    element.classList.remove('active')
                })
                cardItems.forEach((element) => {
                    element.classList.remove('animated', animation_in);
                });
                if (container_wrap.classList.contains('opened')) {
                    cardItems.forEach((element) => {
                        element.classList.add('animated', animation_out)
                    })
                }

                //open card
                menuItem.classList.add('active');
                container_wrap.classList.add('opened');
                container_wrap.querySelector(id).classList.remove('animated', animation_out);
                container_wrap.querySelector(id).classList.add('animated', animation_in)
                cardItems.forEach((element) => {
                    element.classList.add('hidden')
                });
                cardItem.classList.remove('hidden');
                cardItem.classList.add('active');
            }


            /* Tablet*/

            /* Mobile */


        });
    }

}

window.addEventListener('scroll', function () {
    if (window.innerWidth < 993) {
        var scrollPos = this.scrollY;
        var menu = document.querySelectorAll(".top-menu ul li a");
        menu.forEach((element) => {
            var currentLink = element;
            var attr = currentLink.getAttribute('href');
            var id = document.getElementById(attr.substring(1));
            if (window.innerWidth <= 786) {
                if ((id.offsetTop - 118) <= scrollPos) {
                    document.querySelectorAll(".top-menu ul li").forEach((menuElement) => {
                        menuElement.classList.remove('active');
                        currentLink.closest('li').classList.add('active')
                    })
                }

            } else {
                if ((id.offsetTop) <= scrollPos) {
                    document.querySelectorAll(".top-menu ul li").forEach((menuElement) => {
                        menuElement.classList.remove('active');
                        currentLink.closest('li').classList.add('active')
                    })
                }

            }


        })
    }
});

/* 
   Initialize portfolio
*/
var container = document.querySelector('.grid-items');

imagesLoaded(container, function () {
    var iso = new Isotope(container, {
        percentPosition: true,
        itemSelector: '.grid-item'
    })

})

//Validate form
const form = document.forms['myform'];

function validateForm() {

    const name = form['name'].value;
    const email = form['email'].value;
    const message = form['message'].value;
    var isValid = true;
    if (name == '') {
        document.getElementById("name-error").innerHTML = 'Name required';
        document.querySelector('input[name="name"]').classList.add('error');
        isValid = false;;
    }
    if (email == '') {
        document.getElementById("email-error").innerHTML = 'Email required';
        document.querySelector('input[name="email"]').classList.add('error');
        isValid = false;
    }
    if (message == '') {
        document.getElementById("message-error").innerHTML = 'Message required';
        document.querySelector('textarea[name="message"]').classList.add('error');
        isValid = false;
    }
    return isValid;
}

//form change
function changeFeiled(event) {
    const targetName = event.target.getAttribute('name');
    const sibling = event.target.nextElementSibling;
    var value = event.target.value;
    if (value != "") {
        event.target.classList.remove('error')
        sibling.innerHTML = '';
    }else{
        event.target.classList.add('error')
        sibling.innerHTML = targetName + ' Required';
    }
}



