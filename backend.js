class Team {
    constructor(name, location, colour) {
        this.name = name;
        this.location = location;
        this.colour = colour;
    }

    addTeam() {
        teamList.push(this)
    }
}
const teamList = []
const leftBar = document.querySelector(".leftBar");
const overlay = document.querySelector(".parent");
const newBtn = document.getElementById("newBtn");
const exitBtn = document.getElementById("exitForm");
const form = document.querySelector("form");

function createInputField(text) {
    const input = document.createElement("input");
    input.textContent = text;
    return input;
}

activateOverlay = function activateOverlay() {
    form.reset();
    overlay.style.display = "flex";
}

stopOverlay = function stopOverlay() {
    overlay.style.display = "none";
}

newBtn.addEventListener("click", activateOverlay);
exitBtn.addEventListener("click", stopOverlay);