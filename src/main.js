
function run(){
    //get rid of those cringe previews
    let malicons = document.getElementsByClassName("malicon");
    let numMalicons = 0;
    for(let mailcon of malicons){
        numMalicons++;
        mailcon.style.visibility="hidden";
    }
    console.log("Removed" + numMalicons + " Malicons");

    //Give that a nice color
    let addToListBtns = document.getElementsByClassName("addtolist");
    let numBtns = 0;
    for(let addToListBtn of addToListBtns){
        numBtns++;
        addToListBtn.style.backgroundColor="white";
        addToListBtn.style.color = "gray";
    }
    console.log("Edited " + numBtns + " Button Styles");

    //Put those buttons up top where they belong
    
    let seasonalAnimeBoxs = document.getElementsByClassName("seasonal-anime");
    for(let seasonalAnimeBox of seasonalAnimeBoxs){
        statusBox = seasonalAnimeBox.children[3].children[1];
        seasonalAnimeBox.children[0].children[1].children[1].appendChild(statusBox);
    }

    let bubbles = document.getElementsByClassName("bubble");
    for(let bubble of bubbles){
        bubble.style.visibility="hidden";
    }

    let broadcastIcons = document.getElementsByClassName("broadcast-item");
    for(let icon of broadcastIcons){
        icon.style.visibility="hidden";
    }
}

console.log("NoMalicons Injected!");
run();