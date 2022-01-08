
function run(){
    let malicons = document.getElementsByClassName("malicon");
    let numMalicons = 0;
    for(mailcon of malicons){
        numMalicons++;
        mailcon.style.visibility="hidden";
    }
    console.log("Removed" + numMalicons + " Malicons");
    let addToListBtns = document.getElementsByClassName("addtolist");
    let numBtns = 0;
    for(addToListBtn of addToListBtns){
        numBtns++;
        addToListBtn.backgroundColor="white";
        addToListBtn.style.color = "gray";
    }
    console.log("Edited " + numBtns + " Button Styles");
}

console.log("NoMalicons Injected!");
run();