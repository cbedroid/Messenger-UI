var test = new Array();

$(document).ready(() => {
  //GLOBALS
  const main_section = $("#main_section");
  const convos = $(".convo-wrapper");
  const mobile_bg = "#" + $(main_section).data("mobile");
  const desktop_bg = "#" + $(main_section).data("desktop");
  const floater = $("#floater");
  const action_floater = floater.find(".action_text");
  const float_action_text = $("#action_text");
  const colors = ["rgb(252, 201, 52)", "#EE675C", "#FF63B8", "#4dc7e0"];
  let scroll_position;

  // Set total numbers of conversation in dataset
  // for css profile image color
  $(main_section).data("cc", convos.length);

  // chck if user is using a mobile device
  const is_mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );

  // Set convo panel background color according to device
  // Set profile image background color
  $(convos).each(function () {
    const random = Math.floor(Math.random() * colors.length);
    $(this).find(".img-tray").css("background", colors[random]);

    this.style.background = is_mobile ? mobile_bg : desktop_bg;
  });

  // Set navigation background color
  //$(".nav-container").css({ width: "24%" });
  $(".nav-container").css({
    background: is_mobile ? mobile_bg : desktop_bg,
  });

  // For mobile version
  // Set floater to fixed position

  if (is_mobile) {
    // Hide side panel for mobile devices
    $(floater).toggleClass("mobile-action");
    $("#main_panel_right").css("display", "none");

    $(window).scroll(function () {
      if (window.pageYOffset < scroll_position) {
        $(float_action_text).css({ display: "block" });
      } else {
        $(float_action_text).css({ display: "none" });
      }
      scroll_position = window.pageYOffset;
    });
  } else {
    $(float_action_text).css({ display: "block" });
  }

  // Map first letter of user's name to profile image
  $(convos).map(function (combo) {
    const username = $(this).find(".username");
    let text = username.text();
    let profile_icon = $(this).find(".profile-img")[0];
    first_char = text.match(/[a-z]{1}/i);

    if (first_char != undefined) {
      // remove icon image and add text first character
      profile_icon.classList.remove("fa-user");
      profile_icon.innerText = text[0].toUpperCase();
    }
    test.push(this);
  });

  /** ATTACH MOBILE TOUCH/HOVER EVENTS  **/
  $(convos).on("touchstart click", function (e) {
    // reset all convo background color to default
    $(convos).each(function () {
      this.style.background = is_mobile ? mobile_bg : desktop_bg;
    });
    // change color of element being touched/ hover
    this.style.background = "rgba(248,249,250,.09)";
  });
});
