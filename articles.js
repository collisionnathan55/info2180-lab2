class Article {
    constructor (title, date, author, content, imgSrc, imgAlt) {
        this.title = title;
        this.date = date;
        this.author = author;
        this.content = content;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
    }
}

const ARTICLES = [
    new Article(
        "Journey to the Quest",
        "March 3, 2024",
        "Nathan Nelson",
        "The server finally banded together to hunt down the dragon after months of stalling."
        + " The real difficulty was never preparing. It was making sure everyone's schedules lined up."
        + "<br/><br/>It wasn't difficult - everyone had enchanted diamond or netherite armor - but it needed to be done."
        + " In the end, Pokerdoke stole the final achievement everyone was fighting for (undeserved if you ask me)."
        + "<br/><br/>The race for the first elytras and dragon head started soon after."
        + " Unfortunately, most people went inactive after this and the server slowly died out.",
        "images/multiplayer-dragon.png",
        "I help slay the ender dragon in a multiplayer minecraft server."
    ),

    new Article(
        "Second is good enough!",
        "January 18, 2026",
        "Nathan Nelson",
        "The winter minecraft-pokemon tournament concluded a few weeks after starting."
        + " It was a double elimination style format and I managed to steal second place."
        + "<br/><br/>A huge shoutout to the stars of my team: Whimsicott, Meowscarada and Hisuian Zoroark!"
        + " And course, any team where I get to use Mega Gardevoir as my ace is bound to place high."
        + "<br/><br/>I think I made some really good plays during this one,"
        + " from Zoroark's Illusion ability to dynamaxing my Whimsicott to take down my opponent's legendary pokemon."
        + " It was definitely the most fun I've had in multiplayer minecraft.",
        "images/cobblemon-the_gang.png",
        "Group photoshoot in a cobblemon server with a shiny Yvetal and Mega Gardevoir."
    )
]

function makeArticles () {
    let container = document.getElementById("articles-container");
    ARTICLES.forEach((a) => {
        let articleNode = document.createElement("article");
        
        articleNode.innerHTML = 
        "<div><h2>" + a.title + "</h2><p>" + a.date + " by " + a.author + "</p></div>"
        + "<img src=\"" + a.imgSrc + "\" alt=\"" + a.imgAlt + "\"/>"
        + "<p>" + a.content + "</p>";

        container.append(articleNode);
    })
}

makeArticles();