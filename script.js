document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("logicTable").addEventListener("click", function(event) {
        if (event.target.classList.contains("logButton")) {
            console.log("Clicked square:", event.target.id);
        }
    });
});



