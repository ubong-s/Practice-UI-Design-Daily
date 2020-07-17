const linkBox = document.querySelectorAll('.link-box');

// svgOval.forEach((item) =>
//   item.addEventListener('mouseenter', () => {
//     item.classList.add('svg-oval');
//   })
// );

// svgOval.forEach((item) =>
//   item.addEventListener('mouseleave', () => {
//     item.classList.remove('svg-oval');
//   })
// );

linkBox.forEach(function (item) {
  const svgOval = item.querySelector('.fill-oval');
  console.log(svgOval);
  item.addEventListener('mouseenter', function () {
    linkBox.forEach(function (circle) {
      if (circle !== item) {
        item.classList.remove('svg-icon');
      } else {
        svgOval.classList.add('svg-icon');
      }
    });

    item.classList.add('link-js');
  });
});

linkBox.forEach(function (item) {
  const svgOval = item.querySelector('.fill-oval');
  item.addEventListener('mouseleave', function () {
    linkBox.forEach(function (circle) {
      svgOval.classList.remove('svg-icon');
    });

    item.classList.remove('link-js');
  });
});
