document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("logicTable").addEventListener("click", function(event) {
        if (event.target.classList.contains("logButton")) {
            console.log("Clicked square:", event.target.id);
            var sqClicked = event.target;
        }
        if (sqClicked.style.backgroundColor ===""){
            sqClicked.style.backgroundColor = "red";
            }else if(sqClicked.style.backgroundColor === "red"){
                sqClicked.style.backgroundColor = "green";            
            }else if(sqClicked.style.backgroundColor === "green"){
                sqClicked.style.backgroundColor = "";
            }
    });
});



