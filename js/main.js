$('document').ready( function() {

    // get all the category
    $.ajax({
        url: 'https://api.chucknorris.io/jokes/categories',
        method: 'GET',
        success: function(data) {
            data.forEach( (current_category) => {
                console.log(current_category);
                $('#jokes-category').append('<option value=' + current_category + '>' + current_category + '</option>')
            });

            // $('#jokes-category').append('<option value="2">2</option>')
        }
    });

    // get the change of the select
    $('#jokes-category').change(function() {
        console.log("preso");
    })
});
