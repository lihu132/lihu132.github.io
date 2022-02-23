window.onload = function () {
    var container = document.getElementById('sliders')
    var banner = document.getElementById('banner')
    var lis = document.querySelectorAll('#banner li')
    var img = document.querySelectorAll('#banner li')[0]

    var prev = document.getElementById('prev')
    var next = document.getElementById('next')

    var index = 1
    var timer = 0
    var flag = 1
    var windowWidth = img.offsetWidth * 3 + 20
    var bannerWidth = img.offsetWidth * lis.length + 10 * lis.length

    // container.style.width = windowWidth + 'px'
    container.style.height = img.offsetHeight + 'px'
    container.style.overflow = 'hidden'

    banner.style.width = bannerWidth + 'px'
    banner.style.height = img.offsetHeight + 'px'
    banner.style.left = 0

    play()

    function animate(offset) {
        banner.style.transition = '.5s'
        banner.style.left = -parseInt(offset) * index + 'px'
    }

    next.onclick = function () {
        if (index == 6) {
            index = 0
        }
        index++
        console.log('索引' + index);
        animate(img.offsetWidth + 10)
    }

    prev.onclick = function () {
        if (index == 1) {
            index = 6
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