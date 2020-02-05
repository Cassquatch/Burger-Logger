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



