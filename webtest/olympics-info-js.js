const sportsData = [
    {
        name: "Athletics",
        image: "athletics.jpg",
        participants: "2,000+",
        rules: "Various track and field events with different rules for each discipline.",
        athletes: ["Usain Bolt (Jamaica)", "Allyson Felix (USA)", "Eliud Kipchoge (Kenya)"],
        additionalInfo: "Athletics includes a wide range of events such as sprints, long-distance running, jumping, and throwing.",
        videoLink: "https://www.youtube.com/watch?v=example1"
    },
    {
        name: "Swimming",
        image: "swimming.jpg",
        participants: "1,500+",
        rules: "Races in various strokes and distances, fastest time wins.",
        athletes: ["Michael Phelps (USA)", "Katie Ledecky (USA)", "Adam Peaty (UK)"],
        additionalInfo: "Swimming events include freestyle, breaststroke, backstroke, and butterfly in various distances.",
        videoLink: "https://www.youtube.com/watch?v=example2"
    },
    // Add more sports data here
];

const sportsContainer = document.getElementById("sports-container");
const sportInfo = document.getElementById("sport-info");
const sportName = document.getElementById("sport-name");
const participants = document.getElementById("participants");
const rules = document.getElementById("rules");
const athletes = document.getElementById("athletes");
const additionalInfo = document.getElementById("additional-info");
const detailedInfo = document.getElementById("detailed-info");
const videoLink = document.getElementById("video-link");
const closeInfo = document.getElementById("close-info");

function createSportButtons() {
    sportsData.forEach(sport => {
        const button = document.createElement("button");
        button.classList.add("sport-button");
        button.style.backgroundImage = `url(${sport.image})`;
        button.setAttribute("data-sport", sport.name);
        sportsContainer.appendChild(button);
    });
}

function showSportInfo(sport) {
    sportName.textContent = sport.name;
    participants.textContent = `Participants: ${sport.participants}`;
    rules.textContent = `Rules: ${sport.rules}`;
    athletes.innerHTML = sport.athletes.map(athlete => `<li>${athlete}</li>`).join("");
    detailedInfo.textContent = sport.additionalInfo;
    videoLink.href = sport.videoLink;
    sportInfo.classList.remove("hidden");
    additionalInfo.classList.remove("hidden");
}

sportsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("sport-button")) {
        const sportName = e.target.getAttribute("data-sport");
        const sport = sportsData.find(s => s.name === sportName);
        showSportInfo(sport);
    }
});

closeInfo.addEventListener("click", () => {
    sportInfo.classList.add("hidden");
});

createSportButtons();
