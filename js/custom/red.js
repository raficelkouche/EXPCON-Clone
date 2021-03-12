$(() => {
  
  

  $(this).on('scroll', () => {
    if (isInViewPort(document.querySelector('.section-RED'))) {
      $('.header-CTA').addClass('active red')
    } else {
      $('.header-CTA').removeClass('active red')
    }
  })


  const AudioContext = window.AudioContext || window.webkitAudioContext; //support legacy browsers
  
  const audioContext = new AudioContext();

  const audioElement = document.querySelector('audio')

  const track = audioContext.createMediaElementSource(audioElement)

  track.connect(audioContext.destination)

  const playButton = $('.section-RED button')

  playButton.on('click', function (){
    if(this.dataset.playing === 'false') {
      audioElement.play();
      this.dataset.playing = 'true';
    } else {
      audioElement.pause();
      this.dataset.playing = 'false';
    }
  })

  audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
  }, false)

})


