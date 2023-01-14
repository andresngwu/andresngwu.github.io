const skills = [
    {
        title: "JavaScript",
        image: "js.png"  
    },
    {
        title: "HTML",
        image: "html.png"   
    },
    {
        title: "CSS",
        image: "css3.png"   
    },
    {
        title: "React",
        image: "react.png"
    },
    {
        title: "jQuery",
        image: "jquery.png"
    },
    {
        title: "Bootstrap",
        image: "bootstrap.png"
    },
    {
        title: "Java",
        image: "java.png"   
    },
    {
        
        title: "Python",
        image: "python.png"   
    },
    {
        title: "Git",
        image: "git.png"   
    },
    {
        title: "NodeJs",
        image: "nodejs.png"  
    },
    {
        title: "SQL",
        image: "sql.png"  
    },

];

const projects = [
        {
            title: "PortFolio",
            languages: "HTML - CSS - JS - jQuery -Bootstrap",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "https://andresngwu.github.io/",
            source: ""
        },
        {
            title: "Tenzie",
            languages: "React - JS - HTML - CSS",
            description: "A dice game where the player has 10 dice and the goal is to roll until all dice are the same.",
            url: "https://andresngwu.github.io/tenzies/",
            source: ""
        },
        {
            title: "Home Alarm System",
            languages: "Python",
            description: "This is simulation of a home alarm system. The projects uses multiples sensors and control by a Raspberry Pi 4.",
            url: "https://drive.google.com/file/d/15PHV2HFkxb43SElTPs21a81teMyrbN-x/view?usp=share_link",
            source: null
        },
    ];

function createSkillCars(){
    var container = $(".skill-cards");
    skills.forEach((s) => {
        container.append(`<div class="skill-card col-lg-2 col-md-3 col-4"><img class="skill-icon" alt="html" src="./Images/${s.image}" ><h4 class="skill-title">${s.title}</h4></div>`);
    });
}

createSkillCars();
