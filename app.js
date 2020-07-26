var test = new Array();
$(document).ready(() => {
  //GLOBALS
  const main_section = $("#main_section");
  const mobile_bg = "#" + $(main_section).data("mobile");
  const desktop_bg = "#" + $(main_section).data("desktop");
  // chck if user is using a mobile device
  const is_mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );

  // Set convo panel background color according to device
  $(".convo-wrapper").each(function () {
    this.style.background = is_mobile ? mobile_bg : desktop_bg;
  });

  // Set navigation background color
  $(".nav-top").css({
    background: is_mobile ? "rgba(32,34,36,.8)" : desktop_bg,
  });

  // Hide side panel for mobile devices
  if (is_mobile) $("#main_panel_right").css("display", "none");

  // bind floating message icon to scroll event
  const widget_text = $("#action_text");
  let scroll_position;

  $(window).scroll(function () {
    if (window.pageYOffset < scroll_position) {
      $(widget_text).css({ display: "block" });
    } else {
      $(widget_text).css({ display: "none" });
    }
    scroll_position = window.pageYOffset;
  });

  // Map first letter of user's name to profile image
  $(".convo-wrapper").map(function (combo) {
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
  $(".convo-wrapper").on("touchstart click", function (e) {
    // reset all convo background color to default
    $(".convo-wrapper").each(function () {
      this.style.background = is_mobile ? mobile_bg : desktop_bg;
    });
    // change color of element being touched/ hover
    this.style.background = "rgba(248,249,250,.09)";
  });
});
