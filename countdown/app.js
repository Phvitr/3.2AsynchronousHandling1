let count = document.getElementById('countdown');
function startTimer() {
    let data = count.value;
    let countdown = setInterval(function() {
        data--;
        document.getElementById('dmquyet').innerHTML = data;
        if (data === 0) {
            clearInterval(countdown)
        }
    }, 1000);
}
