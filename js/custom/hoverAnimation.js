$(() => {
  $("button.liquid").mousemove(function (event) {
    let x = event.pageX - event.target.offsetLeft;
    let y = event.pageY - event.target.offsetTop;

    event.target.style.setProperty('--x', x + 'px');
    event.target.style.setProperty('--y', y + 'px');
  })

  $(".header-CTA").mousemove(function (event) {
    let x = event.pageX - event.target.offsetLeft;
    let y = -(event.target.offsetTop);

    event.target.style.setProperty('--x', x + 'px');
    event.target.style.setProperty('--y', y + 'px');
  })
})