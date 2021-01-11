$('document').ready( function() {

    // api GET all the category
    $.ajax({
        url: 'https://api.chucknorris.io/jokes/categories',
        method: 'GET',
        success: function(data) {
            data.forEach( (current_category) => {
                // console.log(current_category);
                $('#jokes-category').append('<option value=' + current_category + '>' + current_category + '</option>')
            });

            // $('#jokes-category').append('<option value="2">2</option>')
        }
    });

    // get the change of the select
    $('#jokes-category').change(function() {

        // console.log($(this).val());

        // api GET the category jokes
        $.ajax({
            url: 'https://api.chucknorris.io/jokes/random',
            data: {
                category: $(this).val(),
            },
            method: 'GET',
            success: function(data) {
                // console.log(data.value);
                $('.jokes-container').empty();
                $('.jokes-container').append(`
                    <p>${data.value}</p>
                `);
            }
        });
    });

    $('#search-jokes').on('keypress', function(event) {
        if (event.which == 13) {
            var userSearch = $('#search-jokes').val(); // get the user search string

            $('#search-jokes').val(''); // empty input

            $.ajax({
                url: 'https://api.chucknorris.io/jokes/search',
                data: {
                    query: userSearch,
                },
                method: 'GET',
                success: function(data) {
                    var total = data.total; // total jokes
                    var jokes = data.result; // jokes

                    var index = Math.floor(Math.random() * total);

                    // select a random jokes
                    // console.log(jokes[index]);
                    $('.jokes-container').empty();
                    $('.jokes-container').append(`
                        <p>${jokes[index].value}</p>
                    `);
                }
            });
        }
    });
});
