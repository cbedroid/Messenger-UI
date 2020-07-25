var test = new Array();
$(document).ready(() => {
  // bind action text "startchat" with scroll
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
    console.log("USERNAME", text);
    first_char = text.match(/[a-z]{1}/i);
    if (first_char != undefined) {
      // remov icon image and add text first character
      profile_icon.classList.remove("fa-user");
      profile_icon.innerText = text[0].toUpperCase();
    }
    test.push(this);
  });
});
