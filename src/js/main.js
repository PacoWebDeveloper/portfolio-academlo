window.addEventListener("load", () => {
  const navbar = document.querySelector('.navbar');
  const menu = document.querySelector(".menu");
  const showMenuButton = document.querySelector("#menu");
  const closeMenuButton = document.querySelector("#close");
  const menutItem = document.querySelectorAll(".menu-item");

  showMenuButton.addEventListener("click", () => {
    openCloseMenu();
  });
  closeMenuButton.addEventListener("click", () => {
    openCloseMenu();
  });
  menutItem.forEach((item) => {

    item.addEventListener("click", () => {
      openCloseMenu();      
    });
  });
  window.addEventListener('scroll', () => {
    if (window.scrollY === 0)
      navbar.classList.remove('navbar-shadow');
    else navbar.classList.add('navbar-shadow');
  })

  function openCloseMenu() {
    showMenuButton.classList.toggle("show");
    closeMenuButton.classList.toggle("show");
    menu.classList.toggle("show-menu");
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
    initialSlide: 1,
  });

  // ========= Menu active ===========
  let lastSelectedItem = null;
  if (lastSelectedItem === null) {
    menutItem[0].classList.add("active");
    lastSelectedItem = menutItem[0].children[0].text;
  }
  menutItem.forEach((item) => {
    item.addEventListener("click", () => {
      menutItem.forEach((element) => {
        if (element.children[0].text === lastSelectedItem)
          element.classList.toggle("active");
      });
      item.classList.toggle("active");
      lastSelectedItem = item.children[0].text;
    });
  });

  // ================ ScrollReveal ============
  ScrollReveal().reveal(".main-container", { delay: 300 });
  ScrollReveal().reveal(".user-image", { delay: 1500, interval: 300});
  ScrollReveal().reveal(".main-projects", { delay: 300 });
  ScrollReveal().reveal(".menu-item", { delay: 500, interval: 350});
  ScrollReveal().reveal(".project", { delay: 700, interval: 200});
  ScrollReveal().reveal(".circle", { delay: 1000, interval: 200});
});