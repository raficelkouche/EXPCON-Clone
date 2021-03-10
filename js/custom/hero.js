// images setup
const images = [
  "img/image-1.png",
  "img/image-2.png",
  "img/image-3.png",
];

// content setup
const texts = [
  ["INTERACTIVE CONCERT EXPERIENCE", "Experience your favourite artists like never before and from the comfort of your own home"],
  ["INTERACTIVE CONCERT EXPERIENCE", "Experience your favourite artists like never before and from the comfort of your own home"],
  ["INTERACTIVE CONCERT EXPERIENCE", "Experience your favourite artists like never before and from the comfort of your own home"]
]

// init plugin 
rgbKineticSlider = new rgbKineticSlider({
  // images and content sources
  slideImages: images, // array of images >demo size : 1920 x 1080
  itemsTitles: texts, // array of titles / subtitles

  // displacement images sources
  backgroundDisplacementSprite: 'img/map-1.jpg', // slide displacement image 
  cursorDisplacementSprite: 'img/displace-circle.png', // cursor displacement image

  // cursor displacement effect 
  cursorImgEffect: false, // enable cursor effect
  cursorTextEffect: false, // enable cursor text effect
  cursorScaleIntensity: 0, // cursor effect intensity
  cursorMomentum: 0, // lower is slower

  // swipe 
  swipe: false, // enable swipe
  swipeDistance: window.innerWidth * 0.4, // swipe distance - ex : 580
  swipeScaleIntensity: 1, // scale intensity during swipping

  // slide transition
  slideTransitionDuration: 1, // transition duration
  transitionScaleIntensity: 10, // scale intensity during transition
  transitionScaleAmplitude: 100, // scale amplitude during transition

  // regular navigation
  nav: true, // enable navigation
  navElement: '.main-nav', // set nav class


  // image rgb effect
  imagesRgbEffect: true, // enable img rgb effect
  imagesRgbIntensity: 0.9, // set img rgb intensity
  navImagesRgbIntensity: 90, // set img rgb intensity for regular nav 

  // texts settings
  textsDisplay: true, // show title
  textsSubTitleDisplay: true, // show subtitles
  textsTiltEffect: false, // enable text tilt
  googleFonts: ['Playfair Display:700', 'Roboto:400'], // select google font to use
  buttonMode: false, // enable button mode for title
  textsRgbEffect: false, // enable text rgb effect
  textsRgbIntensity: 0.03, // set text rgb intensity
  navTextsRgbIntensity: 15, // set text rgb intensity for regular nav

  textTitleColor: 'white', // title color
  textTitleSize: 65, // title size
  mobileTextTitleSize: 65, // title size
  textTitleLetterspacing: 6.5, // title letterspacing

  textSubTitleColor: 'white', // subtitle color ex : 0x000000
  textSubTitleSize: 32, // subtitle size
  mobileTextSubTitleSize: 32, // mobile subtitle size
  textSubTitleLetterspacing: 3.2, // subtitle letter spacing
  textSubTitleOffsetTop: 90, // subtitle offset top
  mobileTextSubTitleOffsetTop: 90, // mobile subtitle offset top
});
