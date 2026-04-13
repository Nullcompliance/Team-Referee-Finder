class Team {
    constructor(name, location, colour) {
        this.name = name;
        this.location = location;
        this.colour = colour;
    }
}

const btn = document.getElementById("newBtn")

btn.addEventListener("click", () => {btn.classList.toggle("new")})