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
const leftBar = document.querySelector(".leftBar")
const centerScreen = document.querySelector(".centerScreen")
const btn = document.getElementById("newBtn")

function createInputField(text) {
    const input = document.createElement("input");
    input.textContent = text;
    return input;
}

createQuery = function createQuery() {
    centerScreen.replaceChildren()

    centerScreen.appendChild(createInputField("HI"))
}

btn.addEventListener("click", createQuery)

