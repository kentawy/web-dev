import { BREAKPOINTS } from "./breakpoints.js";
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const mqlMobile = window.matchMedia(BREAKPOINTS.mobile);
const mqlTablet = window.matchMedia(BREAKPOINTS.tablet);
const mqlDesktop = window.matchMedia(BREAKPOINTS.desktop);
function applyResponsiveLayout() {
    if (!sidebar || !menuButton)
        return;
    if (mqlDesktop.matches) {
        sidebar.classList.remove("hidden");
        menuButton.classList.add("hidden");
        sidebar.style.backgroundColor = "";
    }
    else if (mqlTablet.matches) {
        sidebar.classList.remove("hidden");
        menuButton.classList.add("hidden");
        sidebar.style.backgroundColor = "#ffeb3b";
    }
    else if (mqlMobile.matches) {
        sidebar.classList.add("hidden");
        menuButton.classList.remove("hidden");
        sidebar.style.backgroundColor = "";
    }
}
export function initResponsive() {
    applyResponsiveLayout();
    mqlDesktop.addEventListener("change", applyResponsiveLayout);
    mqlTablet.addEventListener("change", applyResponsiveLayout);
    mqlMobile.addEventListener("change", applyResponsiveLayout);
}
