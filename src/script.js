function play() {
    document.getElementById('play-box').animate([
        {
            opacity: 0,
            'pointer-events':'none'
        },
        {
            opacity: 1,
            'pointer-events':'all'
        }
    ], 1000);
    document.getElementById('play-box').style.opacity=1;
}

function closePlay() {
    document.getElementById('play-box').animate([
        {
            opacity: 1,
            'pointer-events':'all'
        },
        {
            opacity: 0,
            'pointer-events':'none'
        }
    ], 1000);
    document.getElementById('play-box').style.opacity=0;
}
