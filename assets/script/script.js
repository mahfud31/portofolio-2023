// scroll efect
$(".page-scroll").on("click", function (e) {
  let tujuan = $(this).attr("href");
  e.preventDefault();
  let elemenTujuan = $(tujuan);
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 60,
    },
    500,
    "easeInOutExpo"
  );
});

AOS.init();

// typed
$(function () {
  $(".typed").typed({
    strings: ["Hi, I'm eL_Chotibi !", "let's code and make something"],
    // stringsElement: null,
    typeSpeed: 100,
    startDelay: 1200,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    // loopCount: false,
    // showCursor: false,
    // cursorChar: "|",
    // attr: null,
    // contentType: "html",
    callback: function () {},
    preStringTyped: function () {},
    onStringTyped: function () {},
    resetCallback: function () {},
  });
});

// js tilt
$(".js-tilt").tilt({
  scale: 1.2,
});

$(".card-skill").tilt({
  glare: true,
  maxGlare: 0.5,
});
