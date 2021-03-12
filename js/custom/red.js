$(() => {
  //helper function to check if an element is within the viewport
  $(this).on('scroll', () => {
    if (isInViewPort(document.querySelector('.section-RED'))) {
      $('.header-CTA').addClass('active red')
    } else {
      $('.header-CTA').removeClass('active red')
    }
  })

  const playButton = $('.section-RED button')
  let AudioContext;
  let audioElement;
  playButton.on('click', function (){
    
    if (!AudioContext) {
      AudioContext = window.AudioContext || window.webkitAudioContext; //support legacy browsers
      const audioContext = new AudioContext();
      audioElement = document.querySelector('audio')
      const track = audioContext.createMediaElementSource(audioElement)
      track.connect(audioContext.destination)

    }
    
    if(this.dataset.playing === 'false') {
      audioElement.play();
      this.dataset.playing = 'true';
    } else {
      audioElement.pause();
      this.dataset.playing = 'false';
    }

    audioElement.addEventListener('ended', () => {
      playButton.dataset.playing = 'false';
    }, false)
  })

  

})


