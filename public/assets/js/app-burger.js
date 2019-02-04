// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("burgerid");
    //console.log("HAHAHAH");
    //console.log(id);

    var devoured = 1;
    var newBurgerState = {
      devourState: devoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(function() {
      console.log("changed devoured to", devoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgerName")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
