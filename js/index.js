window.addEventListener('load', function() {
    var banner = document.querySelector('.banner')
    var ul = banner.children[0]
    var ol = banner.children[1]
        // 获得banner的宽度
    var w = banner.offsetWidth
    var index = 0
    var timer = setInterval(function() {
        index++
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translate(' + (-index * w) + 'px)'
    }, 3000)
    ul.addEventListener('transitionend', function() {
        if (index == 3) {
            index = 0
            ul.style.transition = ''
            ul.style.transform = 'translate(' + (-index * w) + 'px)'
        } else if (index < 0) {
            index = 2
            ul.style.transition = ''
            ul.style.transform = 'translate(' + (-index * w) + 'px)'
        }
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    })
    var startX = 0
    var moveX = 0
    var flag = false
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX
        clearInterval(timer)
    })
    ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX
        var translateX = (-index * w) + moveX
        ul.style.transition = ''
        ul.style.transform = 'translate(' + translateX + 'px)'
        flag = true
        e.preventDefault() //阻止滚动屏幕
    })
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--
                } else {
                    index++
                }
                var translatex = -index * w
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translate(' + translatex + 'px)'
            } else {
                var translatex = -index * w
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translate(' + translatex + 'px)'
            }
        }
        clearInterval(timer)
        timer = setInterval(function() {
            index++
            ul.style.transition = 'all .3s'
            ul.style.transform = 'translate(' + (-index * w) + 'px)'
        }, 3000)
    })
})