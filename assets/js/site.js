(function () {
  var toggle = document.querySelector(".navtoggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }
  document.querySelectorAll(".cform").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var message = form.querySelector(".formmsg");
      if (message) message.textContent = "Thank you — we'll call you within one business day.";
    });
  });
})();
