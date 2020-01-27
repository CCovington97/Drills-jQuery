$(document).ready(function () {
    let btnSubmit = $('#btnSubmit');
    let btnText = $('#btnText');
    let textInput = $('#textInput')

    btnSubmit.click(function () {
        alert('The Almighty Button has been clicked')
    });

    btnText.click(function () {
        alert(textInput.val());
        textInput.keyup();
    });

    textInput.keyup(() => {
        if (textInput.val() === "") {
            btnText.attr('disabled', true);
        } else {
            btnText.attr('disabled', false);
        }
    });
}
);

