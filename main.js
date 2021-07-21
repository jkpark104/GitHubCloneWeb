(function (window, document) {
  'use strict'; // 엄격한 자바스크립트 문법을 통해 선언할 것을 명시함

  const $toggles = document.querySelectorAll('.toggle') // NodeList -> Array Like, 유사배열
  // 요소들을 담고있는 toggles선언 $ <- 붙여도 되고 안 붙여도 됨 
  const $toggleBtn = document.getElementById('toggle-btn')

  $toggleBtn.addEventListener('click', function () {
    toggleElements()
  })
  // 함수 안에 리스너 선언해도 이벤트 발생함

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      offElements()
    }
  })

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on')
      // classList.add('on') -> toggle on/off -> 개꿀
      // classList.toggle('on') -> toogle on
    })
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on')
    })
  }
})(window, document)