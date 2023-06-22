const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        searchInput();
    }
});


functionsearch(){
    const input=searchInput.value;

    window.location.href="https://www.google.com/search?ie=utf-8&oe=utf-8&cso=1&q=+"+ input +