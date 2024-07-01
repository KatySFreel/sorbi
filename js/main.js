$(document).ready(function () {
  const offerSwiper = new Swiper(".offer__slider", {
    slidesPerView: 1,
    rtl: true,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".offer-prev",
      prevEl: ".offer-next",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".offer-next",
          prevEl: ".offer-prev",
        },
      },
      768: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".offer-prev",
          prevEl: ".offer-next",
        },
      },
    },
  });

  /////////////////////////////////////////////////////////////////

  const catalogSlider = new Swiper(".catalog-slider", {
    slidesPerView: 1,
    rtl: true,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".offer-prev",
      prevEl: ".offer-next",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".catalog-slider-next",
          prevEl: ".catalog-slider-prev",
        },
      },
      768: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".catalog-slider-prev",
          prevEl: ".catalog-slider-next",
        },
      },
    },
  });

  /////////////////////////////////////////////////////////////////

  const shopSlider = new Swiper(".shop-slider", {
    slidesPerView: 1,
    rtl: true,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".shop-prev",
      prevEl: ".shop-next",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".shop-slider-next",
          prevEl: ".shop-slider-prev",
        },
      },
      768: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".shop-slider-prev",
          prevEl: ".shop-slider-next",
        },
      },
    },
  });

  /////////////////////////////////////////////////////////////////

  const procedurePageSlider = new Swiper(".procedure-page-slider", {
    slidesPerView: 1,
    rtl: true,
    direction: "horizontal",
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".procedure-page-slider-next-arrow",
      prevEl: ".procedure-page-slider-prev-arrow",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".procedure-page-slider-next-arrow",
          prevEl: ".procedure-page-slider-prev-arrow",
        },
      },
      768: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".procedure-page-slider-next-arrow",
          prevEl: ".procedure-page-slider-prev-arrow",
        },
      },
    },
  });

  /////////////////////////////////////////////////////////////////

  const productPageSlider = new Swiper(".product-page-slider", {
    slidesPerView: 1,
    rtl: true,
    direction: "horizontal",
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-page-slider-next-arrow",
      prevEl: ".product-page-slider-prev-arrow",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".product-page-slider-next-arrow",
          prevEl: ".product-page-slider-prev-arrow",
        },
      },
      768: {
        slidesPerView: 1,
        rtl: true,
        navigation: {
          nextEl: ".product-page-slider-next-arrow",
          prevEl: ".product-page-slider-prev-arrow",
        },
      },
    },
  });

  //////////////////////////////////////////////////////////////

  const productSwiper = new Swiper(".product-swiper", {
    rtl: true,
    slidesPerView: 4,
    spaceBetween: 24,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".product-next",
      prevEl: ".product-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".product-prev",
          prevEl: ".product-next",
        },
        rtl: true,
      },
      480: {
        slidesPerView: 2,
        scrollbar: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        rtl: true,
      },
      580: {
        slidesPerView: 2,
        navigation: {
          nextEl: ".product-prev",
          prevEl: ".product-next",
        },
      },
      768: {
        slidesPerView: 2,
      },
      840: {
        slidesPerView: 3,
      },
      1090: {
        slidesPerView: 4,
      },
    },
  });

////////////////////////////////////////////////////////////////

  const productShopSwiper = new Swiper(".product-shop-swiper", {
    rtl: true,
    slidesPerView: 4,
    spaceBetween: 24,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".product-next",
      prevEl: ".product-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        scrollbar: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".product-prev",
          prevEl: ".product-next",
        },
        rtl: true,
      },
      480: {
        slidesPerView: 2,
        scrollbar: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        rtl: true,
      },
      580: {
        slidesPerView: 2,
        navigation: {
          nextEl: ".product-prev",
          prevEl: ".product-next",
        },
      },
      768: {
        slidesPerView: 2,
      },
      840: {
        slidesPerView: 3,
        on: {
          init() {
            this.el.addEventListener("mouseenter", () => {
              this.autoplay.stop();
            });
    
            this.el.addEventListener("mouseleave", () => {
              this.autoplay.start();
            });
          },
        },
      },
      1090: {
        slidesPerView: 4,
        navigation: false,
        pagination: false,
        scrollbar: false,
        autoplay: false,
        loop: false,
        allowTouchMove: false,
      },
    },
  });

////////////////////////////////////////////////////////////////

  const ArticleSwiper = new Swiper(".art-slider", {
    rtl: true,
    slidesPerView: 3,
    spaceBetween: 24,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".art-swiper-prev",
      prevEl: ".art-swiper-next",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        scrollbar: false,
        pagination: {
          el: ".art-swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".art-swiper-prev",
          prevEl: ".art-swiper-next",
        },
        rtl: true,
      },
      480: {
        slidesPerView: 2,
        scrollbar: false,
        pagination: {
          el: ".art-swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        pagination: {
          el: ".art-swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        rtl: true,
      },
      580: {
        slidesPerView: 2,
        pagination: {
          el: ".art-swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".art-swiper-prev",
          prevEl: ".art-swiper-next",
        },
      },
      768: {
        slidesPerView: 2,
        pagination: {
          el: ".art-swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".art-swiper-prev",
          prevEl: ".art-swiper-next",
        },
        on: {
          init() {
            this.el.addEventListener("mouseenter", () => {
              this.autoplay.stop();
            });
    
            this.el.addEventListener("mouseleave", () => {
              this.autoplay.start();
            });
          },
        },
      },
      840: {
        slidesPerView: 3,
      },
      1090: {
        slidesPerView: 3,
        navigation: false,
        pagination: false,
        scrollbar: false,
        autoplay: false,
        loop: false,
        allowTouchMove: false,
      },
    },
  });

  //////////////////////////////////////////////////////////////

  const categoriesSwiper = new Swiper(".search-modal__categories", {
    rtl: true,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    navigation: {
      nextEl: ".categories-prev",
      prevEl: ".categories-next",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 0,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      480: {
        effect: "coverflow",
        grabCursor: true,
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      840: {
        effect: "coverflow",
        grabCursor: true,
        spaceBetween: 24,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: false,
      },
    },
  });

  //////////////////////////////////////////////////////////////

  const newsSwiper = new Swiper(".news-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    pagination: {
      el: ".swiper-pagination-section",
      type: "fraction",
      renderFraction: function (currentClass) {
        return '<span class="' + currentClass + '"></span>';
      },
    },
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".news-next",
          prevEl: ".news-prev",
        },
      },
      480: {
        slidesPerView: 1,
        scrollbar: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".news-next",
          prevEl: ".news-prev",
        },
      },
      767: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          rtl: true,
          el: ".swiper-pagination-section",
          type: "fraction",
          renderFraction: function (currentClass) {
            return '<span class="' + currentClass + '"></span>';
          },
        },
      },
      1200: {
        slidesPerView: 1,
      },
    },
  });

  //////////////////////////////////////////////////////////////

  const videoSwiper = new Swiper(".video-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".video-next",
      prevEl: ".video-prev",
    },
    pagination: {
      rtl: true,
      el: ".swiper-pagination-section",
      type: "fraction",
      renderFraction: function (currentClass) {
        return '<span class="' + currentClass + '"></span>';
      },
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".video-next",
          prevEl: ".video-prev",
        },
      },
      480: {
        slidesPerView: 1,
        scrollbar: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".video-next",
          prevEl: ".video-prev",
        },
      },
      767: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          rtl: true,
          el: ".swiper-pagination-section",
          type: "fraction",
          renderFraction: function (currentClass) {
            return '<span class="' + currentClass + '"></span>';
          },
        },
      },
      1200: {
        slidesPerView: 1,
      },
    },
  });

  ///////////////////////////////////////////////////////////

  const reviewsSwiper = new Swiper(".reviews-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      rtl: true,
      el: ".swiper-pagination-section",
      type: "fraction",
      renderFraction: function (currentClass) {
        return '<span class="' + currentClass + '"></span>';
      },
    },
    navigation: {
      nextEl: ".reviews-next",
      prevEl: ".reviews-prev",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          rtl: true,
        },
        navigation: {
          nextEl: ".reviews-next",
          prevEl: ".reviews-prev",
        },
      },
      576: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          rtl: true,
          el: ".swiper-pagination-section",
          type: "fraction",
          renderFraction: function (currentClass) {
            return '<span class="' + currentClass + '"></span>';
          },
        },
        navigation: {
          nextEl: ".reviews-next",
          prevEl: ".reviews-prev",
        },
      },
    },
  });

  ///////////////////////////////////////////////////////////

  const secretsSwiper = new Swiper(".secrets-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".secrets-next",
      prevEl: ".secrets-prev",
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
      },
      480: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
      },
      580: {
        slidesPerView: 1,
      },
    },
  });

  /////////////////////////////////////////////////////////////////

  //pauseSlide
  $("#toggle").click(function () {
    if ($(this).hasClass("pause")) {
      offerSwiper.autoplay.stop();
      $(this).removeClass("pause");
      $(this).addClass("play");
    } else {
      offerSwiper.autoplay.start();
      $(this).removeClass("play");
      $(this).addClass("pause");
    }
  });

  //pauseSlide
  $("#toggle-catalog-slider").click(function () {
    if ($(this).hasClass("pause")) {
      catalogSlider.autoplay.stop();
      $(this).removeClass("pause");
      $(this).addClass("play");
    } else {
      catalogSlider.autoplay.start();
      $(this).removeClass("play");
      $(this).addClass("pause");
    }
  });
  //pauseSlide
  $("#toggle-catalog-slider").click(function () {
    if ($(this).hasClass("pause")) {
      productShopSwiper.autoplay.stop();
      $(this).removeClass("pause");
      $(this).addClass("play");
    } else {
      productShopSwiper.autoplay.start();
      $(this).removeClass("play");
      $(this).addClass("pause");
    }
  });

  /////////////////////////////////////////////////////////////////

  //benefits
  $(".benefits__item").click(function () {
    var $this = $(this);

    if (!$this.hasClass("open")) {
      $(".benefits__item.open").removeClass("open");

      $this.addClass("open");
      $this.find(".benefits__inner").slideDown();
    } else {
      $this.removeClass("open");
    }
  });

  //////////////////////////////////////////////////////////////////

  //tags
  $("div.tag .tag-open").click(function () {
    if ($(this).parent().hasClass("open")) {
      $(this).parent().removeClass("open");
      $("div.tag ul").slideUp();
    } else {
      $("div.tag ul").slideUp();
      $(this).parent().children("ul").slideDown();
      $("div.tag").removeClass("open");
      $(this).parent().addClass("open");
    }
  });

  $(document).on("click", function (event) {
    // Проверяем, является ли элемент, по которому произведен клик, modal-cart__wrapper или его дочерним элементом
    if (!$(event.target).closest(".tag").length) {
      // Здесь можно выполнить необходимые действия для закрытия modal-card
      $(".tag-menu").hide();
      $("div.tag").removeClass("open");
    }
  });

  /////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////

  // scroll btn
  let prevScrollpos = window.pageYOffset;
  let scrollBtn = document.querySelector("#menu-btns-fix");
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
    prevScrollpos = currentScrollPos;
  };

  $("#scroll-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 500,
        easing: "linear",
      }
    );
    return false;
  });

  /////////////////////////////////////////////////////////////////

  // header btn
  $("#btn-header").click(function () {
    $(".select-header").toggleClass("active");
    $(".header-bottom__list").toggle("active");
  });

  $(document).on("click", function (event) {
    // Проверяем, является ли элемент, по которому произведен клик, modal-cart__wrapper или его дочерним элементом
    if (!$(event.target).closest(".select-header").length) {
      // Здесь можно выполнить необходимые действия для закрытия modal-card
      $(".select-header").removeClass("active");
      $(".header-bottom__list").hide();
    }
  });

  // header-mob btn
  $("#btn-header-mob").click(function () {
    $(".select-header").toggleClass("active");
    $(".header-bottom__list").toggle("active");
  });

  // header-menu cross
  $(".burger").click(function () {
    $(".header-menu-burger").toggleClass("active");

    if ($(".reviews-modal").hasClass("active")) {
      $(".reviews-modal").removeClass("active");
      $("html").removeClass("overflow");
    }

    if ($(".modal").hasClass("active")) {
      $(".modal").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
      $(".favorites__img").css("display", "block");
      $(".favorites-active-img").css("display", "none");

      $(".basket__img").css("display", "block");
      $(".basket-active-img").css("display", "none");
    } else {
      if ($(".basket-modal__wrap").css("display") == "flex") {
        $(".basket-modal__wrap").css("display", "none");
        $(".basket__img").css("display", "block");
        $(".basket-active-img").css("display", "none");
      }
    }

    if ($("html").hasClass("overflow")) {
      $("html").removeClass("overflow");
    } else {
      $("html").addClass("overflow");
    }

    $(".burger__img").toggleClass("active");
    $(".burger-cross").toggleClass("active");

    if ($(".search-modal").hasClass("active")) {
      $(".search-modal").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    if ($(".modal-cart").hasClass("active")) {
      $(".modal-cart").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    if ($(".modal").hasClass("active")) {
      $(".modal").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    $(".basket__img").css("display", "block");
    $(".basket-active-img").css("display", "none");
    $(".favorites__img").css("display", "block");
    $(".favorites-active-img").css("display", "none");
  });

  var onResizeBurger = function (event) {
    if (this.innerWidth < 1024) {
      $(".burger").click(function () {
        $(".basket").toggleClass("none");
        $(".leng").toggleClass("none");
      });
      $(window).unbind("resize", onResizeBurger);
    }
  };
  onResizeBurger();

  var onResizeSwiper = function (event) {
    if (this.innerWidth < 992) {
      const profileSlider = new Swiper(".profile-swiper", {
        slidesPerView: 3,
        slidesPerGroup: 2,
        rtl: true,
        direction: "horizontal",
        pagination: {
          el: ".profile-swiper__pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
        on: {
          init() {
            this.el.addEventListener("mouseenter", () => {
              this.autoplay.stop();
            });

            this.el.addEventListener("mouseleave", () => {
              this.autoplay.start();
            });
          },
        },
      });
    }
  };
  onResizeSwiper();

  //////////////////////////////////////////////////////////////////////

  // login-modal

  $(".login-icon").click(function () {
    if ($(".reviews-modal").hasClass("active")) {
      $(".reviews-modal").removeClass("active");
      $("html").removeClass("overflow");
    }

    if ($(".modal-cart").hasClass("active")) {
      $(".modal-cart").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
      $(".favorites__img").css("display", "block");
      $(".favorites-active-img").css("display", "none");

      $(".basket__img").css("display", "block");
      $(".basket-active-img").css("display", "none");
    } else {
    }

    if ($(".search-modal").hasClass("active")) {
      $(".search-modal").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    if ($(".modal").hasClass("active")) {
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }

      if ($(".registration__item").css("display") == "flex") {
        $(".modal").addClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      } else {
        $(".modal").removeClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      }

      if ($(".password__item").css("display") == "flex") {
        $(".modal").removeClass("active");
        $("html").removeClass("overflow");
      } else {
        $(".modal").removeClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      }
    } else {
      $(".modal").addClass("active");

      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    if ($(".header-menu-burger").hasClass("active")) {
      $("html").addClass("overflow");
      $(".search-modal").removeClass("active");
      // $(".burger__img").addClass("active");
      // $(".burger-cross").removeClass("active");
      $(".burger-cross").click(function () {
        $("html").removeClass("overflow");
      });
    }

    // $(".modal").removeClass(".active");
    $(".password__item").css("display", "none");
    $(".registration__item").css("display", "none");
    $(".login__item-active").css("display", "flex");
  });

  $(".open-pass").click(function () {
    if ($(".modal").hasClass("active")) {
      //если у модального окна есть active
      $(".modal").removeClass("active"); // удаляем active у модалки

      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }

      if ($(".login__item-active").css("display") == "flex") {
        // если  active у модалки
        $(".modal").addClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      } else {
        if ($(".registration__item").css("display") == "flex") {
          // если  active у модалки
          $(".modal").addClass("active");
          if ($("html").hasClass("overflow")) {
            $("html").removeClass("overflow");
          } else {
            $("html").addClass("overflow");
          }
        } else {
          $(".modal").removeClass("active");
          if ($("html").hasClass("overflow")) {
            $("html").removeClass("overflow");
          } else {
            $("html").addClass("overflow");
          }
        }

        $(".modal").removeClass("active");

        if ($(".registration__item").css("display") == "flex") {
          // если  active у модалки
          $(".modal").addClass("active");

          if ($("html").hasClass("overflow")) {
            $("html").removeClass("overflow");
          } else {
            $("html").addClass("overflow");
          }
        } else {
          $(".modal").removeClass("active");

          if ($("html").hasClass("overflow")) {
            $("html").removeClass("overflow");
          } else {
            $("html").addClass("overflow");
          }
        }
      }
    } else {
      $(".modal").addClass("active");

      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    // $(".modal").removeClass(".active");
    $(".login__item-active").css("display", "none");
    $(".registration__item").css("display", "none");
    $(".password__item").css("display", "flex");
    // $("html").toggleClass("overflow");
  });

  $(".open-reg").click(function () {
    if ($(".login__item-active").css("display") == "flex") {
      $(".login__item-active").css("display", "none");
    }
    if ($(".registration__item").css("display") == "flex") {
      $(".registration__item").css("display", "none");
    }
    if ($(".password__item").css("display") == "flex") {
      $(".password__item").css("display", "none");
    }
    $(".registration__item").css("display", "flex");

    // if ($(".modal").hasClass("active")) {
    //   //если у модального окна есть active
    //   $(".modal").removeClass("active"); // удаляем active у модалки
    //   if ($("html").hasClass("overflow")) {
    //     $("html").removeClass("overflow");
    //   } else {
    //     $("html").addClass("overflow");
    //   }

    //     if ($(".login__item-active").css("display") == "flex") {
    //       // если  active у модалки
    //       $(".modal").addClass("active");
    //       if ($("html").hasClass("overflow")) {
    //         $("html").removeClass("overflow");
    //       } else {
    //         $("html").addClass("overflow");
    //       }
    //     } else {

    //     if ($(".password__item").css("display") == "flex") {
    //       if ($("html").hasClass("overflow")) {
    //         $("html").removeClass("overflow");
    //       } else {
    //         $("html").addClass("overflow");
    //       }
    //       // если  active у модалки
    //       $(".modal").addClass("active");
    //       if ($("html").hasClass("overflow")) {
    //         $("html").removeClass("overflow");
    //       } else {
    //         $("html").addClass("overflow");
    //       }
    //     } else {
    //       $(".modal").removeClass("active");
    //       if ($("html").hasClass("overflow")) {
    //         $("html").removeClass("overflow");
    //       } else {
    //         $("html").addClass("overflow");
    //       }
    //     }

    //     if ($(".password__item").css("display") == "flex") {
    //       // если  active у модалки
    //       $(".modal").addClass("active");
    //       if ($("html").hasClass("overflow")) {
    //         $("html").removeClass("overflow");
    //       } else {
    //         $("html").addClass("overflow");
    //       }
    //     } else {
    //       $(".modal").removeClass("active");
    //       if ($("html").hasClass("overflow")) {
    //         $("html").removeClass("overflow");
    //       } else {
    //         $("html").addClass("overflow");
    //       }
    //     }

    //     // if ($(".password__item").css("display") == "flex") {
    //     //   if ($("html").hasClass("overflow")) {
    //     //     $("html").removeClass("overflow");
    //     //   } else {
    //     //     $("html").addClass("overflow");
    //     //   }
    //     //   // если  active у модалки
    //     //   $(".modal").addClass("active");
    //     //   if ($("html").hasClass("overflow")) {
    //     //     $("html").removeClass("overflow");
    //     //   } else {
    //     //     $("html").addClass("overflow");
    //     //   }
    //     // } else {
    //     //   $(".modal").removeClass("active");
    //     //   if ($("html").hasClass("overflow")) {
    //     //     $("html").removeClass("overflow");
    //     //   } else {
    //     //     $("html").addClass("overflow");
    //     //   }
    //     // }

    //     $(".modal").removeClass("active");

    //     if ($("html").hasClass("overflow")) {
    //       $("html").removeClass("overflow");
    //     } else {
    //       $("html").addClass("overflow");
    //     }

    //   }
    // } else {
    //   if ($("html").hasClass("overflow")) {
    //     $("html").removeClass("overflow");
    //   } else {
    //     $("html").addClass("overflow");
    //   }
    //   $(".modal").addClass("active");
    // }

    // // $(".modal").removeClass(".active");
    // $(".login__item-active").css("display", "none");
    // $(".password__item").css("display", "none");
    // $(".registration__item").css("display", "flex");
    // // $("html").toggleClass("overflow");
  });

  $(".cross-logo").click(function () {
    if ($(".modal").hasClass("active")) {
      if ($(".registration__item").css("display") == "flex") {
        // $(".registration__item").css("display", "none");
        $(".modal").removeClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      } else {
        $(".modal").removeClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      }

      if ($(".login__item-active").css("display") == "flex") {
        // (".login__item-active").css("display", "none");
        $(".modal").removeClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      } else {
        $(".modal").removeClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      }

      if ($(".password__item").css("display") == "flex") {
        // (".password__item").css("display", "none");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      } else {
        $(".modal").removeClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      }

      //если у модального окна есть active
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }

      $(".modal").removeClass("active"); // удаляем active у модалки
    } else {
    }
    if ($("html").hasClass("overflow")) {
      $("html").removeClass("overflow");
    } else {
      $("html").addClass("overflow");
    }
  });

  $(".open-login").click(function () {
    if ($(".login__item-active").css("display") == "flex") {
      $(".login__item-active").css("display", "none");
    }
    if ($(".registration__item").css("display") == "flex") {
      $(".registration__item").css("display", "none");
    }
    if ($(".password__item").css("display") == "flex") {
      $(".password__item").css("display", "none");
    }
    $(".login__item-active").css("display", "flex");
  });

  //////////////////////////////////////////////////////////////////////////

  // menu accordion
  var onResizeacc = function (event) {
    if (this.innerWidth < 1170) {
      // menu accordion
      $("div.menu-acc__accordion h4").click(function () {
        if ($(this).parent().hasClass("open")) {
          $("div.menu-acc__accordion").removeClass("open");
          $("div.menu-acc__accordion ul").slideUp();
        } else {
          $("div.menu-acc__accordion ul").slideUp();
          $(this).parent().children("ul").slideDown();
          $("div.menu-acc__accordion").removeClass("open");
          $(this).parent().addClass("open");
        }
      });
      $(window).unbind("resize", onResizeacc);
    }
  };
  onResizeacc();

  ///////////////////////////////////////////////////////////////////////

  // nano scroll

  // scroll secrets
  $(".nano-secrets").nanoScroller({ alwaysVisible: true });

  var onResizeBasket = function (event) {
    if (this.innerWidth > 992) {
      $(".nano-basket").nanoScroller({ alwaysVisible: true });
      $(".nano-favorite").nanoScroller({ alwaysVisible: true });
      $(window).unbind("resize", onResizeBasket);
    }
  };
  onResizeBasket();

  ////////////////////////////////////////////////////////////////////////////

  $(".form-select").niceSelect();

  $(".js-example-basic-multiple").select2({
    width: "resolve",
  });

  ////////////////////////////////////////////////////////////////////////////

  $(".search-open").click(function () {
    $(".search-modal").toggleClass("active");
    $("html").addClass("overflow");

    if ($(".reviews-modal").hasClass("active")) {
      $(".reviews-modal").removeClass("active");
    }

    if ($(".header-menu-burger").hasClass("active")) {
      $(".header-menu-burger").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    $(".basket__img").css("display", "block");
    $(".basket-active-img").css("display", "none");
    $(".favorites__img").css("display", "block");
    $(".favorites-active-img").css("display", "none");

    if ($(".modal").hasClass("active")) {
      $(".modal").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    if ($(".modal-cart").hasClass("active")) {
      $(".modal-cart").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }
  });

  $(".cross-search").click(function () {
    $(".search-modal").toggleClass("active");
    $("html").removeClass("overflow");
  });

  /////////////////////////////////////////////////////////////////////////////////

  // basket-favorite

  $(".modal-cart").on("click", function (event) {
    // Проверяем, является ли элемент, по которому произведен клик, modal-cart__wrapper или его дочерним элементом
    if (!$(event.target).closest(".modal-cart__wrapper").length) {
      // Здесь можно выполнить необходимые действия для закрытия modal-card
      $(".modal-cart").removeClass("active");

      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }

      if ($(".header-menu-burger").hasClass("active")) {
        $("html").addClass("overflow");
      } else {
        $("html").removeClass("overflow");
      }

      if ($(".favorite-modal__wrap").css("display") == "flex") {
        $(".favorite-modal__wrap").css("display", "none");
        $(".favorites__img").css("display", "block");
        $(".favorites-active-img").css("display", "none");
      }

      if ($(".basket-modal__wrap").css("display") == "flex") {
        $(".basket-modal__wrap").css("display", "none");
        $(".basket__img").css("display", "block");
        $(".basket-active-img").css("display", "none");
      }
    }
  });

  $(".close-basket").click(function () {
    $(".modal-cart").toggleClass("active");
    $(".reviews-modal").toggleClass("active");
    $(".basket__img").css("display", "block");
    $(".basket-active-img").css("display", "none");
    $(".favorites__img").css("display", "block");
    $(".favorites-active-img").css("display", "none");

    if ($(".reviews-modal").hasClass("active")) {
      $(".reviews-modal").removeClass("active");
      $("html").removeClass("overflow");
    }

    if ($("html").hasClass("overflow")) {
      $("html").removeClass("overflow");
    } else {
      $("html").addClass("overflow");
    }
    $(".header-menu-burger").removeClass("active");

    if (this.innerWidth < 1024) {
      $(".burger").click(function () {
        $(".basket").removeClass("none");
        $(".leng").removeClass("none");
      });
      $(window).unbind("resize", onResizeBurger);
    }

    if ($(".modal-cart").hasClass("active")) {
      $(".modal-cart").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    $(".burger__img").addClass("active");
    $(".burger-cross").removeClass("active");
    $("html").removeClass("overflow");

    if ($(".modal").hasClass("active")) {
      $(".modal").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }
  });

  $(".close-basket-mob").click(function () {
    $(".modal-cart").removeClass("active");
    $(".favorites__img").css("display", "block");
    $(".favorites-active-img").css("display", "none");
    $(".basket__img").css("display", "block");
    $(".basket-active-img").css("display", "none");

    $(".reviews-modal").removeClass("active");
    $("html").removeClass("overflow");

    if ($("html").hasClass("overflow")) {
      $("html").removeClass("overflow");
    } else {
      $("html").addClass("overflow");
    }

    $(".basket").removeClass("none");
    $(".leng").removeClass("none");

    $(".header-menu-burger").removeClass("active");

    $(".burger__img").addClass("active");
    $(".burger-cross").removeClass("active");
    $("html").removeClass("overflow");

    if ($(".modal-cart").hasClass("active")) {
      $(".modal-cart").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }

      if ($(".modal").hasClass("active")) {
        $(".modal").removeClass("active");
        if ($("html").hasClass("overflow")) {
          $("html").removeClass("overflow");
        } else {
          $("html").addClass("overflow");
        }
      }
    }
  });

  $(".favorites").click(function () {
    // if($(".header-menu-burger").hasClass("active")) {
    //   $(".header-menu-burger").removeClass("active");
    //   if ($("html").hasClass("overflow")) {
    //     $("html").removeClass("overflow");
    //   } else {
    //     $("html").addClass("overflow");

    //   }
    // }

    $(".burger-cross").click(function () {
      $("html").removeClass("overflow");
    });

    if ($(".reviews-modal").hasClass("active")) {
      $(".reviews-modal").removeClass("active");
      $("html").removeClass("overflow");
    }

    if ($(".header-menu-burger").hasClass("active")) {
      $("html").addClass("overflow");
      $(".header-menu-burger").removeClass("active");
      $(".burger__img").addClass("active");
      $(".burger-cross").click(function () {
        $("html").removeClass("overflow");
      });
      $(".burger-cross").removeClass("active");
      $("html").removeClass("overflow");
    }

    if ($(".modal").hasClass("active")) {
      $(".modal").removeClass("active");
      $("html").addClass("overflow");

      $(".favorites__img").css("display", "none");
      $(".favorites-active-img").css("display", "block");

      $(".basket__img").css("display", "block");
      $(".basket-active-img").css("display", "none");
    } else {
    }

    if ($(".search-modal").hasClass("active")) {
      $(".search-modal").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    if ($(".modal-cart").hasClass("active")) {
      $(".favorites__img").css("display", "block");
      $(".favorites-active-img").css("display", "none");

      $(".modal-cart").removeClass("active");
      $("html").removeClass("overflow");

      if ($(".basket-modal__wrap").css("display") == "flex") {
        $(".modal-cart").addClass("active");
        $("html").addClass("overflow");

        $(".favorites__img").css("display", "none");
        $(".favorites-active-img").css("display", "block");

        $(".basket__img").css("display", "block");
        $(".basket-active-img").css("display", "none");
      } else {
        $(".modal-cart").removeClass("active");
        $("html").removeClass("overflow");
      }
    } else {
      $(".modal-cart").addClass("active");
      $(".favorites__img").css("display", "none");
      $(".favorites-active-img").css("display", "block");

      $("html").addClass("overflow");
    }

    $(".modal-cart").removeClass(".active");
    $(".basket-modal__wrap").css("display", "none");
    $(".favorite-modal__wrap").css("display", "flex");
  });

  $(".basket").click(function () {
    if ($(".reviews-modal").hasClass("active")) {
      $(".reviews-modal").removeClass("active");
      $("html").removeClass("overflow");
    }

    $(".burger-cross").click(function () {
      $("html").removeClass("overflow");
    });

    if ($(".header-menu-burger").hasClass("active")) {
      $("html").addClass("overflow");
      $(".header-menu-burger").removeClass("active");
      $(".burger__img").addClass("active");
      $(".burger-cross").click(function () {
        $("html").removeClass("overflow");
      });
      $(".burger-cross").removeClass("active");
      $("html").removeClass("overflow");
    }

    if ($(".search-modal").hasClass("active")) {
      $(".search-modal").removeClass("active");
      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }

    if ($(".modal").hasClass("active")) {
      $(".modal").removeClass("active");
      $("html").addClass("overflow");

      $(".favorites__img").css("display", "none");
      $(".favorites-active-img").css("display", "block");

      $(".basket__img").css("display", "block");
      $(".basket-active-img").css("display", "none");
    } else {
    }

    if ($(".modal-cart").hasClass("active")) {
      $(".modal-cart").removeClass("active");
      $("html").removeClass("overflow");

      $(".basket__img").css("display", "block");
      $(".basket-active-img").css("display", "none");

      if ($(".favorite-modal__wrap").css("display") == "flex") {
        $(".modal-cart").addClass("active");
        $("html").addClass("overflow");

        $(".basket__img").css("display", "none");
        $(".basket-active-img").css("display", "block");

        $(".favorites__img").css("display", "block");
        $(".favorites-active-img").css("display", "none");
      } else {
        $(".modal-cart").removeClass("active");
        $("html").removeClass("overflow");
      }
    } else {
      $(".modal-cart").addClass("active");
      $("html").addClass("overflow");

      $(".basket__img").css("display", "none");
      $(".basket-active-img").css("display", "block");
    }

    $(".basket-modal__wrap").css("display", "flex");
    $(".favorite-modal__wrap").css("display", "none");
  });

  //////////////////////////////////////////////////////////////////////////////////

  $(document).on("click", function (event) {
    // Проверяем, является ли элемент, по которому произведен клик, modal-cart__wrapper или его дочерним элементом
    if (!$(event.target).closest(".dropdown").length) {
      // Здесь можно выполнить необходимые действия для закрытия modal-card
      $(".dropdown").removeClass('open');
      $(".volume__menu").hide();
    }
  });

  $(".volume-open").click(function () {
    var volume__menu = $(this).siblings(".volume__menu");

    $(".volume__menu").not(volume__menu).hide();

    $(this).parent().toggleClass('open');

    volume__menu.toggle("active");
  });

  $(".volume__menu li").click(function () {
    var selectedText = $(this).text();
    var selectedValue = $(this).closest(".volume__menu").prev(".volume-open");

    selectedValue.text(selectedText);

    $(this).closest(".volume__menu").hide();

    $(this).addClass("volume-active");

    $(this).siblings().removeClass("volume-active");
  });

  /////////////////////////////////////////////////////////////////////////////////

  //  add-cart
  $(".add-cart").on("click", function () {
    let valueElement = $(this).siblings(".value-cart");
    let value = parseInt(valueElement.text());
    valueElement.text(value + 1);
  });

  // remove-cart
  $(".remove-cart").on("click", function () {
    let valueElement = $(this).siblings(".value-cart");
    let value = parseInt(valueElement.text());
    if (value > 1) {
      valueElement.text(value - 1);
    }
  });

  //////////////////////////////////////////////////////////////////////////////////

  if ($(".search-modal").hasClass("active")) {
    $(".search-modal").removeClass("active");
    if ($("html").hasClass("overflow")) {
      $("html").removeClass("overflow");
    } else {
      $("html").addClass("overflow");
    }
  }

  $("#search").click(function () {
    $(".search-menu").toggleClass("active");
  });

  if (
    $(".header-menu-burger").hasClass("active") &&
    $(".basket-modal__wrap").css("display") == "flex"
  ) {
    $("html").addClass("overflow");
  } else if ($(".login__item-active").hasClass("active")) {
    $("html").removeClass("overflow");
    $(".burger-cross").click(function () {
      $("html").removeClass("overflow");
    });
  }

  if ($(".burger__img").hasClass("active")) {
    $("html").removeClass("overflow");
  }

  //////////////////////////////////////////////////////////////////////////////////////
  // filter
  $("div.categories-page__accordion h4").click(function () {
    var $accordion = $(this).parent();
    var $list = $accordion.children("ul");

    if (!$accordion.hasClass("open")) {
      $list.slideDown();
      $accordion.addClass("open");
    } else {
      $list.slideUp();
      $accordion.removeClass("open");
    }
  });

  $(".catedories-filter__mob").click(function () {
    $(".categories-filter__wrapper").toggleClass("active");
  });

  $(".filter-close").click(function () {
    $(".categories-filter__wrapper").toggleClass("active");
  });

  /////////////////////////////////////////////////////////////////////

 // FAQ
 $("div.faq-content__item h4").click(function () {
  var $accordion = $(this).parent();
  var $list = $accordion.children("div");
  console.log( $accordion)

  if ($accordion.hasClass("open")) {
    $list.slideDown();
    $accordion.addClass("open");
  } else {
    $list.slideUp();
    $accordion.removeClass("open");
  }
});


  /////////////////////////////////////////////////////////////////

  $(".offer-product__value-item").click(function () {
    $(".offer-product__value-item").toggleClass("active");
  });

  /////////////////////////////////////////////////////////////////

  $(".offer-product__btn-stars").click(function () {
    $(".reviews-modal").addClass("active");
    $("html").addClass("overflow");
    $(".reviews-modal__wrap-preview").css("display", "flex");
    $(".reviews-modal__wrap-add").removeClass("active");
  });

  $(".offer-product__link").click(function () {
    $(".reviews-modal").addClass("active");
    $(".reviews-modal__wrap-preview").css("display", "flex");
    $(".reviews-modal__wrap-add").removeClass("active");
    $("html").addClass("overflow");

    $(".modal-cart").removeClass("active");
    $(".favorites__img").css("display", "block");
    $(".favorites-active-img").css("display", "none");
    $(".basket__img").css("display", "block");
    $(".basket-active-img").css("display", "none");
  });

  $(".reviwes-modal-add-open").click(function () {
    $(".reviews-modal__wrap-preview").css("display", "none");
    $(".reviews-modal__wrap-add").addClass("active");
  });

  $(".reviews-modal").on("click", function (event) {
    // Проверяем, является ли элемент, по которому произведен клик, modal-cart__wrapper или его дочерним элементом
    if (!$(event.target).closest(".reviews-cart__wrapper").length) {
      // Здесь можно выполнить необходимые действия для закрытия modal-card
      $(".reviews-modal").removeClass("active");

      if ($("html").hasClass("overflow")) {
        $("html").removeClass("overflow");
      } else {
        $("html").addClass("overflow");
      }
    }
  });

  $(document).on("click", function (event) {
    // Проверяем, является ли элемент, по которому произведен клик, modal-cart__wrapper или его дочерним элементом
    if (!$(event.target).closest(".history-filter__input").length) {
      // Здесь можно выполнить необходимые действия для закрытия modal-card
      $(".order-filter__list").hide();
    }
  });

  $(".history-filter__input").click(function () {
    var orderfilter = $(this).siblings(".order-filter__list");

    $(".order-filter__list").not(orderfilter).hide();

    orderfilter.toggle("active");
  });
  
  $(".order-filter__list li").click(function () {
    $(".history-filter__input").val($(this).text().trim());
    $(this).closest(".order-filter__list").hide();

    $(this).addClass("active");

    $(this).siblings().removeClass("active");
  });

  // order cart 
  $("div.order div button").click(function () {
    var $accordion = $(this).parent().parent();
    var $list = $accordion.children(".order__wrapper");

    if (!$accordion.hasClass("open")) {
      $list.slideDown();
      $accordion.addClass("open");
    } else {
      $list.slideUp();
      $accordion.removeClass("open");
    }
  });

  $(".check-all__order").click(function () {
    $(".add-order").slideDown();
    $(".check-all__order").slideUp();
  });

  var onResizeInputChange = function (event) {
    if (this.innerWidth < 992) {
    $('.change-info-mob').click(function() {
      if ( $('.profile-block__input').is(':disabled')) {
        $('.profile-block__input').removeAttr('disabled');
      } else {
        $('.profile-block__input').attr('disabled', 'disabled');
      }
    
  });
    }
  };
  onResizeInputChange();

  $('.change-info__info').click(function() {
    if ( $('.profile-block__info').is(':disabled')) {
       $('.profile-block__info').removeAttr('disabled');
    } else {
      $('.profile-block__info').attr('disabled', 'disabled');
    }
    
  });

  $('.change-info-add').click(function() {
    if ( $('.profile-block__input-add').is(':disabled')) {
       $('.profile-block__input-add').removeAttr('disabled');
    } else {
      $('.profile-block__input-add').attr('disabled', 'disabled');
    }
    
  });


});
