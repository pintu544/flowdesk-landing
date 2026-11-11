// Flowdesk landing page interactions — vanilla JavaScript, no dependencies.
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after choosing a section (mobile).
  links.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Pricing: monthly / annual toggle ---------- */
  var billingToggle = document.getElementById("billingToggle");
  var labelMonthly = document.getElementById("labelMonthly");
  var labelAnnual = document.getElementById("labelAnnual");
  var amounts = document.querySelectorAll(".price-amount");
  var notes = document.querySelectorAll(".price-note");

  billingToggle.addEventListener("click", function () {
    var annual = billingToggle.getAttribute("aria-checked") !== "true";
    billingToggle.setAttribute("aria-checked", String(annual));
    labelMonthly.classList.toggle("active", !annual);
    labelAnnual.classList.toggle("active", annual);
    amounts.forEach(function (el) {
      el.textContent = annual ? el.dataset.annual : el.dataset.monthly;
    });
    notes.forEach(function (el) {
      el.textContent = annual ? el.dataset.annual : el.dataset.monthly;
    });
  });

  /* ---------- Demo request form: validation + success ---------- */
  var form = document.getElementById("demoForm");
  var success = document.getElementById("formSuccess");

  var fields = {
    name: {
      input: document.getElementById("fName"),
      error: document.getElementById("eName"),
      validate: function (v) { return v.trim().length >= 2 || "Please enter your name."; }
    },
    email: {
      input: document.getElementById("fEmail"),
      error: document.getElementById("eEmail"),
      validate: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email address.";
      }
    },
    company: {
      input: document.getElementById("fCompany"),
      error: document.getElementById("eCompany"),
      validate: function (v) { return v.trim().length >= 2 || "Please enter your company name."; }
    },
    size: {
      input: document.getElementById("fSize"),
      error: document.getElementById("eSize"),
      validate: function (v) { return v !== "" || "Please select your team size."; }
    }
  };

  function checkField(field) {
    var result = field.validate(field.input.value);
    var ok = result === true;
    field.error.textContent = ok ? "" : result;
    field.input.classList.toggle("invalid", !ok);
    field.input.setAttribute("aria-invalid", String(!ok));
    return ok;
  }

  // Validate on blur so errors appear as the user moves through the form.
  Object.keys(fields).forEach(function (key) {
    fields[key].input.addEventListener("blur", function () { checkField(fields[key]); });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var allOk = Object.keys(fields).map(function (key) { return checkField(fields[key]); })
      .every(Boolean);
    if (!allOk) {
      var firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      success.hidden = true;
      return;
    }
    // No backend in this demo: confirm in-page and reset for the next request.
    success.hidden = false;
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    success.focus({ preventScroll: true });
    form.reset();
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-q button").forEach(function (button) {
    button.addEventListener("click", function () {
      var panel = document.getElementById(button.getAttribute("aria-controls"));
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  });

  /* ---------- Scroll reveal (progressive: content is visible without JS,
     and stays put for reduced-motion users via the CSS media query) ------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();
