/* NEXUS hotspot theme — progressive UI enhancements.
   Plain ES5-compatible script: no build step, no external dependency. */
(function () {
    "use strict";

    /* Password visibility toggle ------------------------------------------- */
    var toggles = document.querySelectorAll("[data-toggle-password]");

    for (var i = 0; i < toggles.length; i++) {
        (function (button) {
            var field = button.parentNode.querySelector("input");
            var icon = button.querySelector("[data-eye]");
            if (!field || !icon) {
                return;
            }

            button.addEventListener("click", function () {
                var hidden = field.getAttribute("type") === "password";
                field.setAttribute("type", hidden ? "text" : "password");
                button.setAttribute("aria-pressed", hidden ? "true" : "false");
                button.setAttribute("aria-label", hidden ? "Hide password" : "Show password");
                /* swap eye / eye-off paths */
                icon.innerHTML = hidden
                    ? '<path d="m3 3 18 18"/><path d="M10.6 6.2A9.9 9.9 0 0 1 12 6c6.4 0 10 6 10 6a17 17 0 0 1-2.4 3.1"/>' +
                      '<path d="M6.6 6.7A17 17 0 0 0 2 12s3.6 6 10 6a9.9 9.9 0 0 0 4-.8"/>' +
                      '<path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>'
                    : '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12S18 18.5 12 18.5 2.5 12 2.5 12Z"/>' +
                      '<circle cx="12" cy="12" r="3"/>';
                field.focus();
            });
        })(toggles[i]);
    }

    /* Autofocus: username when empty, password when prefilled ---------------- */
    var userField = document.querySelector('input[name="username"]');
    var passField = document.querySelector('input[name="password"]');

    if (userField && passField) {
        window.setTimeout(function () {
            if (userField.value) {
                passField.focus();
            } else {
                userField.focus();
            }
        }, 120);
    }

    /* Submit feedback: lock the button so double taps cannot double-post ----- */
    var forms = document.querySelectorAll("form");

    for (var j = 0; j < forms.length; j++) {
        forms[j].addEventListener("submit", function () {
            var button = this.querySelector('button[type="submit"], input[type="submit"]');
            if (!button) {
                return;
            }
            button.disabled = true;
            button.setAttribute("aria-busy", "true");
            if (button.classList.contains("btn")) {
                button.classList.add("btn--busy");
            }
        });
    }
})();
