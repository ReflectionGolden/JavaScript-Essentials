// important elements
const bodyElement = document.querySelector("body");
const currentView = document.querySelector("#currentView");
const toggleButton = document.querySelector("#modeToggle");
const navBar = document.querySelector("nav");
const homeButton = document.querySelector("a");
const containers = document.querySelectorAll("div");

//light mode classes
const lightBody = "bg-lightsite text-darksite";
const lightContainer = "m-auto my-5 py-[0.5rem] px-[3rem] bg-containbackdark shadow-[5px_5px_15px_rgba(0,0,0,0.5)] w-3/4 lg:w-1/2 rounded-[1rem]";
const lightNav = "flex justify-center bg-blue-700/10";
const lightButton = "m-1 p-1 rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700";
const inLight = "You are currently viewing this page in Light Mode";

//dark mode classes
const darkBody = "bg-darksite text-lightsite";
const darkContainer = "m-auto my-5 py-[0.5rem] px-[3rem] bg-containback shadow-[5px_5px_15px_rgba(0,0,0,0.5)] w-3/4 lg:w-1/2 rounded-[1rem]";
const darkNav = "flex justify-center bg-blue-500/10";
const darkButton = "m-1 p-1 rounded-md bg-blue-600 hover:bg-blue-500 active:bg-blue-700";
const inDark = "You are currently viewing this page in Dark Mode";

//Toggle the modes
toggleButton.addEventListener("click", modeToggle);

function modeToggle() {
    if (bodyElement.className.includes("bg-darksite")) {
        bodyElement.className = lightBody;
        navBar.className = lightNav;
        homeButton.className = lightButton;
        toggleButton.className = lightButton;
        containers.forEach((container) => {
            container.className = lightContainer;
        });
        currentView.textContent = inLight;
        console.log("Switched to Light Mode.");
    } else {
        bodyElement.className = darkBody;
        navBar.className = darkNav;
        homeButton.className = darkButton;
        toggleButton.className = darkButton;
        containers.forEach((container) => {
            container.className = darkContainer;
        });
        currentView.textContent = inDark;
        console.log("Switched to Dark Mode.");
    }
}