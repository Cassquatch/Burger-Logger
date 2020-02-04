$( ()=> {
    $(".add-burger").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( () => {
            
           
            console.log("Did it work?");
            location.reload();
        });
    });


    
});