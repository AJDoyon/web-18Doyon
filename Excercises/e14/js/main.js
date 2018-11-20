$(document).ready(function() {
    // run function on initial page load
    nameguess();

});

function nameguess() {

    var nameArray= ["Head","Shoulder","Knee","Toe","Cerebral Cortex"];
    var name = Math.floor(Math.random() * nameArray.length); 
    var stripped = nameArray[name].toLowerCase();
    console.log(nameArray[name]);
    console.log(stripped);
        $('body').css(nameArray[name]);
        $('#submit').click(function() {
            var guess = $('input').val();
            console.log(guess);
            if (guess == stripped || guess == nameArray[name]) {
                $('h1').text(guess + ' is correct. Yay.');
                $('input').val('');
                $('.button p').text('An Encore?');
                  $('#submit').click(function() {
                    location.reload(true);
                });

            }

        else{
            $('h1').text(guess + ' is wrong. How sad.');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }

    })
}


