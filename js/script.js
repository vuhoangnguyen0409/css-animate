(function (){
	$('.js-button').each((i, el) => {
    // デコレーション要素挿入
    const $decoration = $('<span class="button_decoration"></span>').prependTo(el)

    // イベント
    $(el).on({
      'mouseenter': function (event) {
        $decoration.css({
          height: $decoration.width()
        })

        let parentOffset = $(this).offset()
        let x = event.pageX - parentOffset.left
        let y = event.pageY - parentOffset.top

        $decoration.css({
          top: y,
          left: x
        })
      },
      'mouseleave': function (event) {
        let parentOffset = $(this).offset()
        let x = event.pageX - parentOffset.left
        let y = event.pageY - parentOffset.top

        $decoration.css({
          top: y,
          left: x
        })
      }
    })
  })
})()
