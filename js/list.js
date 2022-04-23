let showMore = false;
const more = document.querySelector(".father-list");
const moreDis = more.querySelector(".child-list");
more.addEventListener("onclick", function () {
    showMore = !showMore;
    if(showMore) {
        moreDis.style.display = "block";
    } else {
        moreDis.style.display = "none";
    }
});