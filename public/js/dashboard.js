  $("#article_form").submit(function(e) {
      e.preventDefault(); // avoid to execute the actual submit of the form.

      console.log("send post request article form");
      $.ajax({
             type: "POST",
             url: "/api/articles",
             // serializes the form's elements.
             data: $("#article_form").serialize(),

             success: function(data)
             {
                 alert(JSON.stringify(data));
                 // show response from the php script.
             },
             error: function(error) {
                 alert(error);
             }
           });

  });