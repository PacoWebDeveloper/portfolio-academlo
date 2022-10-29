window.addEventListener('load', () => {
    const menu = document.querySelector('.menu');
    const showMenuButton = document.querySelector('#menu');
    const closeMenuButton = document.querySelector('#close');
    const menutItem = document.querySelectorAll('.menu-item');

    showMenuButton.addEventListener('click', () => {
        openCloseMenu();
    });
    closeMenuButton.addEventListener('click', () => {
        openCloseMenu();
    });
    menutItem.forEach((item) => {
        item.addEventListener('click', () => {
            openCloseMenu();
        });
    });

    function openCloseMenu() {
        showMenuButton.classList.toggle('show');
        closeMenuButton.classList.toggle('show');
        menu.classList.toggle('show-menu');
    }


    // ========== Services=============
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        initialSlide: 1
    });

    // ========= Menu active ===========
    if (getWindowWidth() >= 900) {
        let lastSelectedItem = null;
        if (lastSelectedItem === null) {
            menutItem[0].classList.add('active');
            lastSelectedItem = menutItem[0].children[0].text;
        }
        menutItem.forEach(item => {
            item.addEventListener('click', () => {
                menutItem.forEach(element => {
                    if (element.children[0].text === lastSelectedItem)
                        element.classList.toggle('active');
                })
                item.classList.toggle('active');
                lastSelectedItem = item.children[0].text;
            })
        })
    }
    function getWindowWidth() {
        return window.innerWidth;
    }
})