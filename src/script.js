function play() {
    document.getElementById('play-box').animate([
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ], 2000);
    document.getElementById('play-box').style.opacity=1;
}

function closePlay() {
    document.getElementById('play-box').animate([
        {
            opacity: 1
        },
        {
            opacity: 0
        }
    ]);
}
