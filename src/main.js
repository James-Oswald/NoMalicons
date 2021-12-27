
function run(){
    let malicons = document.getElementsByClassName("malicon");
    for(mailcon of malicons)
        mailcon.style.visibility="hidden";
    console.log("Removed Malicons");
}

console.log("NoMalicons Injected!");
run();