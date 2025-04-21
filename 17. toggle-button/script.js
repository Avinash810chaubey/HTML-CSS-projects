let toggler = document.getElementById("switch");

toggler.addEventListener("change", () => {
    if (toggler.checked === true) {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
    }

    // Alternatively:
    // document.body.style.backgroundColor = toggler.checked ? "black" : "white";
});
