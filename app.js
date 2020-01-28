$(document).ready(function () {
    let btnSubmit = $('#btnSubmit');
    let btnText = $('#btnText');
    let textInput = $('#textInput')
    $('body').append('<div>');
    $('div').append('<ul>');
    let colors = ['blue', 'green', 'red', 'yellow',
        'purple', 'orange', 'turquoise', 'chartreuse',
        'pink', 'gold', 'violet', 'coral']

    // $('body').append('<div>');
    // $('div').append('<h2 class="h2">');

    btnSubmit.click(function () {
        alert('The Almighty Button has been clicked')
    });

    btnText.click(function (event) {
        event.preventDefault();
        alert(textInput.val());
        let li = $('<li></li>');
        li.append(textInput.val());
        $('ul').append(li);
        // textInput.keyup();
        // $('h2').append(textInput.val());
        // $('.h2').on('mouseenter', function () {
        //     $('.h2').css({
        //         'background-color': 'blue',
        //         'border-radius': '5px'
        //     })
        // })
        $('li').on('click', function () {
            $(this).css("color", colors[Math.floor(Math.random() * colors.length)]);
        });
        $('li').on('dblclick', function () {
            $(this).remove();
        });
    });


    textInput.keyup(() => {
        if (textInput.val() === "") {
            btnText.attr('disabled', true);
        } else {
            btnText.attr('disabled', false);
        }
    });
});