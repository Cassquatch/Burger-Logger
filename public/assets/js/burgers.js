$(".add-burger").on("click", (event) => {
    //event.preventDefault();

    let newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: false
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {


        console.log("Did it work?");
        location.reload();
    });
});

$(".devour").on("click", (event) => {
    let id = $(event.target).data("id");
    console.log(id);
    
    

    let isDevoured = {
        devoured: true
    }
    $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: isDevoured
    }).then(() => {
        console.log("updated burger to devoured");
        // location.reload();
    });
})



