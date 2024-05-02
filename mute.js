const videoElement = document.querySelectorAll('.screen');
let soundClicked = false;
const closeButton = document.querySelector('#closeButton');

function sounds() {
    setTimeout(function(){}, 5);
    if (soundClicked) {
       soundClicked = false;
       return true;
    } else {
        return false;
    }
}

closeButton.addEventListener('click', function() {
    mainElement.style.display = 'none';
});

soundButton = document.getElementById('soundButton');
soundButton.addEventListener('click', function() {
    soundClicked = true;
    if (this.getAttribute('src') == 'assests\\mute.png'){
        this.setAttribute('src', 'assests\\sound.png');
        videoElement.forEach((video) => {
            video.muted = false;
        });
    }
    else if (this.getAttribute('src') == 'assests\\sound.png'){
        this.setAttribute('src', 'assests\\mute.png');
        videoElement.forEach((video) => {
            video.muted = true;
        });
    }
});


const mainElement = document.querySelector('#main');
let currentScreen = 0;

mainElement.addEventListener('click', () => {
    const videoElement = document.querySelectorAll('.screen');
    const progressBars = document.querySelectorAll('.progress');
    currentScreen++;

    if (sounds()){
        return;
    }



    if (currentScreen >= videoElement.length) {
        currentScreen = 0;
        videoElement.forEach((video) => {
                video.classList.remove('active');
                video.classList.add('hidden');
        });
        progressBars.forEach((progress) => {
            progress.classList.remove('done');
        }); 

        videoElement[0].classList.remove('hidden');
        videoElement[0].classList.add('active');
        progressBars[0].classList.add('done');
        videoElement[0].play();
        videoElement[0].muted = false;
        return;

    }
    

    let active = false
    videoElement.forEach((video) => {
        if (video.classList.contains('active')) {
            active = true
            video.classList.remove('active');
            video.classList.add('hidden');
            video.muted = true;
            return;
        }

        if (active) {
            video.classList.remove('hidden');
            video.classList.add('active');
            active = false
            video.play();
            let done = false;
            progressBars.forEach((progress) => {
                if (progress.classList.contains('done')) {
                    done = true;
                    return
                }
                if (done) {
                    progress.classList.add('done');
                    done = false;
                    return
                }
                
            })

        }

    });
    console.log(videoElement);

});



