import restrant from "../assets/restrant.png"
import fighting from "../assets/browsergame.png"
import pokedex from "../assets/pokedex.png"

const ProjectCardData = [
    {
        imgsrc: fighting,
        title: "JavaScript Game",
        text: "A turn-based fighting game made entirely with HTML, CSS, and JavaScript. After the user clicks one of the moves, the computer then randomly chooses their move. The stronger the move you choose, the more damage it will do, but your odds of success are lower, with counter being the riskiest move to use.",
        view: "https://pdvanevery.github.io/Midterm-Project-1/",
        source: "https://github.com/pdvanevery/Midterm-Project-1"
    },
    {
        imgsrc: restrant,
        title: "Rest-Rant Review App",
        text: "A restaurant review website where users may add their own restaurants to the MongoDB database as well as leave reviews.  Users can add a restaurant image, location, as well as the type of cuisine served there. Users may also leave detailed reviews/rants as well as a star rating out of 5. ",
        view: "https://pumpkin-tart-95991.herokuapp.com/",
        source: "https://github.com/pdvanevery/project-rest-rant"
    },
    {
        imgsrc: pokedex,
        title: "Pokedex API",
        view: "https://floating-oasis-25077.herokuapp.com/",
        source: "https://github.com/pdvanevery/pokedexAPI"
    } 
]


export default ProjectCardData