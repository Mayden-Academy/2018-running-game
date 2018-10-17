// This opens the gamescreen on click of the start button.
$('#startButton').click(function() {
    buildGame()
})

//function shows the game screen and hides elements that aren't required for the game screen.
function buildGame() {
    $('#startButton').css({display: "none"})
    $('.topSection').css({display: "none"})
    $('#playScreen').css({display: "block"})
}