const navigation = document.getElementsByClassName("navigation")[0];
const navigationLinks = navigation.getElementsByClassName("navigation__link");
const navigationCheckbox = document.getElementById("navigation");

const mainNavigationCheckbox = document.getElementById("main-navigation");

for (let navigationLink of navigationLinks) {
    navigationLink.addEventListener("click", () => {
        navigationCheckbox.checked = false;
        mainNavigationCheckbox.checked = false;
    });
}