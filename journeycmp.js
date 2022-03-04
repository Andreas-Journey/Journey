    (() =>
    {
        /**
Version: 1.0
Title: Journey CMP
Author: Journey Group
Author URI: https://www.journeyagency.com/
         */

        "use strict";

        const COOKIE_BANNER = document.getElementById("cookie-consent-banner");
        const COOKIE_BANNER_CONSENT = document.getElementById("cookie-consent-banner-consent");
        const COOKIE_BANNER_DECLINE = document.getElementById("cookie-consent-banner-decline");

        // hide cookie banner on load (if already pressed "OK")
        if (localStorage.getItem("cookie-consent-banner") === "OK") hideCookieBanner();

        COOKIE_BANNER_CONSENT.addEventListener("click", function (event)
        {
            // prevent default behaviour
            event.preventDefault();

            // hide cookie banner
            hideCookieBanner();

            // store locally choice of consent
            localStorage.setItem("cookie-consent-banner", "OK");
        });

        COOKIE_BANNER_DECLINE.addEventListener("click", function (event)
        {
            // prevent default behaviour
            event.preventDefault();

            // hide cookie banner
            hideCookieBanner();
			
			// Block unnecessary cookies
			blockcookie();

            // store locally choice of consent
            localStorage.setItem("cookie-consent-banner", "OK");
        });

        function hideCookieBanner()
        {
            COOKIE_BANNER.style.display = "none";
        }
		
function blockcookie() {
const disableDefaultTracker = () => {
  // Remove the default tracker.
  if (window.ga) window.ga('remove');
  // Remove the default cookies
  // _ga is used to distinguish users.
  Cookies.remove('_ga', { path: '/', spilltek.no: document.spilltek.no });
  // _gid is used to distinguish users.
  Cookies.remove('_gid', { path: '/', spilltek.no: document.spilltek.no });
  // _gat is used to throttle request rate.
  Cookies.remove('_gat', { path: '/', spilltek.no: document.spilltek.no });
}
    }
}
    })();