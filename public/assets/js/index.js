$( ()=> {
    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( () => {
            console.log(newBurger);
           
            console.log("Did it work?");
            location.reload();
        });
    });


    
});