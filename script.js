const theme1 = document.querySelector("#theme1");
const theme2 = document.querySelector("#theme2");
const battikh = document.querySelector(".logopic");

function changeTheme() {
    if(theme1.rel == "stylesheet") {
        theme1.rel = ("alternate stylesheet");
        theme2.rel = ("stylesheet");
    } else if(theme2.rel == "stylesheet") {
        theme2.rel = ("alternate stylesheet");
        theme1.rel = ("stylesheet");
    }
}

battikh.addEventListener("click", () => changeTheme());