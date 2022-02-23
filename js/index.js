window.onload = function () {
    var container = document.getElementById('sliders')
    var banner = document.getElementById('banner')
    var lis = document.querySelectorAll('#banner li')
    var img = document.querySelectorAll('#banner li')[0]

    var prev = document.getElementById('prev')
    var next = document.getElementById('next')

    var index = 3
    var timer = 0
    var flag = 1
    // var windowWidth = img.offsetWidth * 3 + 20
    var bannerWidth = img.offsetWidth * lis.length + 10 * lis.length
    var initialPosition = -img.offsetWidth * 3 - 30

    // container.style.width = windowWidth + 'px'
    container.style.height = img.offsetHeight + 'px'
    container.style.overflow = 'hidden'

    banner.style.width = bannerWidth + 'px'
    banner.style.height = img.offsetHeight + 'px'
    banner.style.left = initialPosition + 'px'

    play()

    function animate(offset) {
        banner.style.left = -parseInt(offset) * index + 'px'
    }

    next.onclick = function () {
        if (index == 13) {
            banner.style.transition = 'none'
            animate(img.offsetWidth + 10)
            index = 3
        }
        else {
            banner.style.transition = '.5s'
        }
        console.log('索引' + index);
        animate(img.offsetWidth + 10)
        index++
    }

    prev.onclick = function () {
        if (index == 0) {
            banner.style.transition = 'none'
            animate(img.offsetWidth + 10)
            index = 10
        }
        else {
            banner.style.transition = '.5s'
        }
        index--
        console.log('索引' + index);
        animate(img.offsetWidth + 10)

    }

    function play() {
        timer = setInterval(function () {
            next.onclick()
        }, 1500)
    }

    container.onmouseover = function () {
        clearInterval(timer)
    }


    container.onmouseout = function () {
        play()
    }





}