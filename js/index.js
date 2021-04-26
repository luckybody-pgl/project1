$(function () {
    let $nav_list = $('#head .headMain .nav li')
    let $nav_up = $('#head .headMain .nav li .up')
    let $arrow = $('#head .headMain .arrow')
    let nowIndex = 0    //当前平索引
    let $head = $('#head')
    let $content = $('#content')
    let $content_li = $('#content .constant_list > li')
    let $content_list = $('#content .constant_list')
    //右侧圆点
    let $dotLi = $('#content .dot>li')
    //第一屏值圆点
    let $home2LiNOdes = $('#content .constant_list .home .home2 > li')
    let $home2 = $('#content .constant_list .home .home2')
    //第一屏内容
    let $home1LiNOdes = $('#content .constant_list .home .home1 > li')
    let $homeDiv = $('#content .constant_list .home div')
    //第四屏
    let $aboutULls = $('#content .constant_list .about > div .about3 .item ul')
    //第五屏
    let $team3Li = $('#content .constant_list .team > div .team3 >ul li')
    let $team3 = $('#content .constant_list .team > div .team3')
    //音频
    let $audio = $('#head .headMain .music audio')
    let $music = $('#head .headMain .music ')
    let body = document.body
    //出入场
    let $line = $('#mask .line')
    let $maskDiv = $('#mask div')
    let $mask = $('#mask')


    //出入场
    let anArr = [
        {
            inAn: function () {
                let $home1 = $('#content .constant_list .home .home1')
                let $home2 = $('#content .constant_list .home .home2')
                $home1.css({
                    transform: 'translateY(0)',
                    opacity: 1
                })
                $home2.css({
                    transform: 'translateY(0)',
                    opacity: 1
                })
            },
            outAn: function () {
                let $home1 = $('#content .constant_list .home .home1')
                let $home2 = $('#content .constant_list .home .home2')
                $home1.css({
                    transform: 'translateY(-400px)',
                    opacity: 0
                })
                $home2.css({
                    transform: 'translateY(100px)',
                    opacity: 0
                })
            }
        }, {
            inAn: function () {
                let $plane1 = $('#content .constant_list .course > div .plane1')
                let $plane2 = $('#content .constant_list .course > div .plane2')
                let $plane3 = $('#content .constant_list .course > div .plane3')
                $plane1.css({
                    transform: 'translate(0,0)',
                    // opacity: 0
                })
                $plane2.css({
                    transform: 'translate(0,0)',
                    // opacity: 0
                })
                $plane3.css({
                    transform: 'translate(0,0)',
                    // opacity: 0
                })
            },
            outAn: function () {
                let $plane1 = $('#content .constant_list .course > div .plane1')
                let $plane2 = $('#content .constant_list .course > div .plane2')
                let $plane3 = $('#content .constant_list .course > div .plane3')
                $plane1.css({
                    transform: 'translate(-200px,-200px)',
                    // opacity: 0
                })
                $plane2.css({
                    transform: 'translate(-200px,200px)',
                    // opacity: 0
                })
                $plane3.css({
                    transform: 'translate(200px,-200px)',
                    // opacity: 0
                })
            }
        }, {
            inAn: function () {
                let $pencil1 = $('#content .constant_list .works .pencil1')
                let $pencil2 = $('#content .constant_list .works .pencil2')
                let $pencil3 = $('#content .constant_list .works .pencil3')
                $pencil1.css({
                    transform: 'translateY(0)',
                    // opacity: 0
                })
                $pencil2.css({
                    transform: 'translateY(0)',
                    // opacity: 0
                })
                $pencil3.css({
                    transform: 'translateY(0)',
                    // opacity: 0
                })
            },
            outAn: function () {
                let $pencil1 = $('#content .constant_list .works .pencil1')
                let $pencil2 = $('#content .constant_list .works .pencil2')
                let $pencil3 = $('#content .constant_list .works .pencil3')
                $pencil1.css({
                    transform: 'translateY(-100px)',
                    // opacity: 0
                })
                $pencil2.css({
                    transform: 'translateY(100px)',
                    // opacity: 0
                })
                $pencil3.css({
                    transform: 'translateY(100px)',
                    // opacity: 0
                })
            }
        }, {
            inAn: function () {
                let $item = $('#content .constant_list .about > div .about3 .item')
                $item.eq(0).css({
                    transform: 'rotate(0)'
                })
                $item.eq(1).css({
                    transform: 'rotate(0)'
                })
            },
            outAn: function () {
                let $item = $('#content .constant_list .about > div .about3 .item')
                $item.eq(0).css({
                    transform: 'rotate(45deg)'
                })
                $item.eq(1).css({
                    transform: 'rotate(-45deg)'
                })
            }
        }, {
            inAn: function () {
                let $team1 = $('#content .constant_list .team > div .team1')
                let $team2 = $('#content .constant_list .team > div .team2')
                $team1.css({
                    transform: 'translateX(0)',
                })
                $team2.css({
                    transform: 'translateX(0)',
                })
            },
            outAn: function () {
                let $team1 = $('#content .constant_list .team > div .team1')
                let $team2 = $('#content .constant_list .team > div .team2')
                $team1.css({
                    transform: 'translateX(-400px)',
                })
                $team2.css({
                    transform: 'translateX(400px)',
                })
            }
        }]

    //函数调用
    head()
    content()
    imgRoll()
    //第四屏
    aboutFour()
    // 第五屏
    teamBubbling()
    //音频
    music()

    //开机动画
    loadingAN()

    function loadingAN() {
        let arr = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'about1.jpg', 'about2.jpg', 'about3.jpg', 'about4.jpg', 'worksimg1.jpg', 'worksimg2.jpg', 'worksimg3.jpg', 'worksimg4.jpg', 'team.png', 'greenLine.png']
        let flag = 0  //加载的图片数
        for (let i = 0, j = arr.length; i < j; i++) {
            let img = new Image()
            img.src = './img/' + arr[i]
            img.onload = function () {
                flag++
                $line[0].style.width = flag / arr.length * 100 + '%'
            }
        }
        $line.on('transitionend', function () {
            if (flag === arr.length) {
                $maskDiv.css({
                    height: 0,
                })
                this.style.display = 'none'
            }
        })
        $maskDiv.on('transitionend', function () {
            $mask.remove()
            //用户点击页面是加载歌曲
            $(body).on('click', function () {
                if ($audio[0].paused) {
                    $audio[0].play()
                    $music.css({
                        background: 'url("./img/musicon.gif") no-repeat'
                    })
                }
                //移除点击页面播放
                $(body).off('click')
            })
            //第一屏效果
            home3D()
        })
    }

    //重置，视口尺寸变化时
    window.onresize = function () {
        content()
        $content_list.css({
            top: -nowIndex * (document.documentElement.clientHeight - $head[0].offsetHeight)
        })

        $arrow.css({
            left: $nav_list[nowIndex].offsetLeft + $nav_list[nowIndex].offsetWidth / 2 - $arrow[0].offsetWidth / 2
        })
        // console.log($nav_list[0].offsetLeft, $nav_list[0].offsetParent)
    }


    //图片滚轮
    function imgRoll() {
        //图片滚轮计时器
        let timer = 0
        if ($content[0].addEventListener) {
            $content[0].addEventListener("DOMMouseScroll", function (e) {
                e = e || Event
                clearTimeout(timer)
                timer = setTimeout(function () {
                    fn(e)
                }, 200)
            })
        }
        $content[0].onmousewheel = function (e) {
            e = e || Event
            clearTimeout(timer)
            timer = setTimeout(function () {
                fn(e)
            }, 200)
        }

        function fn(e) {
            let index = nowIndex
            let dir = ''
            if (e.wheelDelta) {
                dir = e.wheelDelta > 0 ? 'up' : 'down'
            }
            if (e.detail) {
                dir = e.detail < 0 ? 'up' : 'down'
            }

            if (dir === 'up') {
                if (nowIndex !== 0) {
                    index--
                    move($nav_list[index], index)
                    nowIndex = index
                }
            } else if (dir === 'down') {
                if (nowIndex !== $content_li.length - 1) {
                    index++
                    move($nav_list[index], index)
                    nowIndex = index
                }
            }
        }

    }

    //内容区交互
    function content() {
        $content.css({
            height: document.documentElement.clientHeight - $head[0].offsetHeight
        })
        $content_li.each(function () {
            this.style.height = document.documentElement.clientHeight - $head[0].offsetHeight + 'px'
        })


    }


    //头部
    function head() {
        let left = $nav_list[0].offsetLeft + $nav_list[0].offsetWidth / 2 - $arrow[0].offsetWidth / 2
        $arrow.css({
            left: left
        })
        $nav_up[nowIndex].style.width = '100%'

        // let first_li = $nav_list[0]
        $nav_list.on("click", function () {
            let index = $(this).index()
            if (index !== nowIndex) {
                move(this, index)
            }
            nowIndex = index
        })
        $dotLi.on("click", function () {
            let index = $(this).index()
            if (index !== nowIndex) {
                move(this, index)
            }
            nowIndex = index
        })
    }

    function move(a, index) {
        let left = a.offsetLeft + a.offsetWidth / 2 - $arrow[0].offsetWidth / 2
        $nav_up[index].style.width = '100%'
        $nav_up[nowIndex].style.width = ''
        $dotLi.eq(nowIndex).removeClass('active')
        $dotLi.eq(index).addClass('active')
        $arrow.css({
            left: left
        })
        $content_list.css({
            top: -index * (document.documentElement.clientHeight - $head[0].offsetHeight)
        })

        //出入场
        if (anArr[index] && typeof anArr[index]['inAn'] === 'function') {
            anArr[index]['inAn']()
        }
        if (anArr[nowIndex] && typeof anArr[nowIndex]['outAn'] === 'function') {
            anArr[nowIndex]['outAn']()
        }

    }

    //第一屏

    function home3D() {
        //第一屏圆点位置
        let home2_li_index = 0

        let time_home2 = 0
        let move_index = 0

        $home2LiNOdes.on('click', function () {
            clearInterval(time_home2)
            let index = $(this).index()
            if (index === home2_li_index)
                return
            $($home2LiNOdes[home2_li_index]).removeClass('active')
            $(this).addClass('active')
            $($home2).addClass('home2Show')
            //右往左
            if (home2_li_index > index) {
                $($home1LiNOdes[index]).removeClass('leftHide rightShow rightHide')
                $($home1LiNOdes[home2_li_index]).removeClass('leftShow leftHide rightShow')
                $($home1LiNOdes[index]).addClass('leftShow')
                $($home1LiNOdes[home2_li_index]).addClass('rightHide')

            }
            //左往右
            else if (home2_li_index < index) {
                $($home1LiNOdes[index]).removeClass('leftShow leftHide rightHide')
                $($home1LiNOdes[home2_li_index]).removeClass('leftShow rightShow rightHide')
                $($home1LiNOdes[index]).addClass('rightShow')
                $($home1LiNOdes[home2_li_index]).addClass('leftHide')
            }

            setTimeout(function () {
                $($home2).removeClass('home2Show')
            }, 1000)
            home2_li_index = index
            //同步轮播图片
            move_index = index
        })

        home2Move()

        function home2Move() {
            clearInterval(time_home2)
            time_home2 = setInterval(function () {
                move_index++
                if (move_index === $home1LiNOdes.length) {
                    move_index = 0
                }
                //圆点同步
                $($home2LiNOdes[home2_li_index]).removeClass('active')
                $($home2LiNOdes[move_index]).addClass('active')
                //翻页特效
                $($home1LiNOdes[move_index]).removeClass('leftShow leftHide rightHide')
                $($home1LiNOdes[home2_li_index]).removeClass('leftShow rightShow rightHide')
                $($home1LiNOdes[move_index]).addClass('rightShow')
                $($home1LiNOdes[home2_li_index]).addClass('leftHide')
                home2_li_index = move_index
            }, 2000)
        }

        $homeDiv.on('mouseover', function () {
            clearInterval(time_home2)
        })

        // //移出再次开启定时器
        // $homeDiv.on('mouseleave', function () {
        //    home2Move()
        // })

    }

    //第四屏
    function aboutFour() {
        for (let i = 0, j = $aboutULls.length; i < j; i++) {
            change($aboutULls[i])
        }

        function change(ul) {
            let w = ul.offsetWidth / 2
            let h = ul.offsetHeight / 2
            let src = ul.dataset.src
            for (let i = 0; i < 4; i++) {
                $(ul).append('<li><img src=' + src + '></li>')
            }
            let oldL = [0, -w, 0, -w]
            let oldT = [0, 0, -h, -h]
            $(ul).children('li').each(function (i) {
                /*
							1. left:0    top:0
							2. left:-w   top:0
							3. left:0    top:-h
							4. left:-w   top:-h
				*/
                //移入效果
                /*
							1. left:0    top:h
							2. left:-2w   top:0
							3. left:w    top:-h
							4. left:-w   top:-2h
				*/
                $(this).css({
                    width: w,
                    height: h,
                }).children('img').css({
                    left: oldL[i],
                    top: oldT[i]
                })
            })

            let $img = $(ul).children('li').children('img')
            $(ul).on('mouseenter mouseleave', function (event) {
                event = event || Event
                if (event.type === 'mouseenter') {
                    $img[0].style.top = h + 'px'
                    $img[1].style.left = -2 * w + 'px'
                    $img[2].style.left = w + 'px'
                    $img[3].style.top = -2 * h + 'px'

                } else if (event.type === 'mouseleave') {
                    $img[0].style.top = 0 + 'px'
                    $img[1].style.left = -w + 'px'
                    $img[2].style.left = 0 + 'px'
                    $img[3].style.top = -h + 'px'
                }
            })

        }

    }

    //第五屏
    function teamBubbling() {
        let time1
        let time2
        let oc = null
        // 创建canvas,并加上长宽
        $team3Li.on('mouseenter', function () {
            $team3Li.css({
                opacity: 0.2
            })
            this.style.opacity = '1'
            addCanvas()
            oc.style.left = this.offsetLeft + "px";
            // console.log(this.offsetParent)
        })

        $team3.on('mouseleave', function () {
            $team3Li.css({
                opacity: 1
            })
            removeCanvas()
        })

        function addCanvas() {
            if (!oc) {
                oc = document.createElement('canvas')
                oc.width = $team3Li[0].offsetWidth
                oc.height = $team3Li[0].offsetHeight * 2 / 3
                $team3.append(oc)
                Bubbling()
            }

        }

        function removeCanvas() {
            oc.remove()
            oc = null
            clearInterval(time1)
            clearInterval(time2)
        }

        function Bubbling() {
            let ctx = oc.getContext('2d')
            //存储圆的信息
            let arr = []
            //画圆
            time1 = setInterval(function () {
                ctx.clearRect(0, 0, oc.width, oc.height)
                for (let i = 0; i < arr.length; i++) {
                    arr[i].deg += 5
                    arr[i].r += 0.01
                    arr[i].x = arr[i].startX + Math.sin(arr[i].deg * Math.PI / 180) * arr[i].step * 2
                    arr[i].y = arr[i].startY - (arr[i].deg * Math.PI / 180) * arr[i].step
                    //到达顶部删除
                    if (arr[i].y <= 50) {
                        arr.splice(i, 1)
                    }
                }

                // 取数据
                for (let i = 0; i < arr.length; i++) {
                    ctx.save()
                    ctx.beginPath()
                    //画圆
                    ctx.arc(arr[i].x, arr[i].y, arr[i].r, 2 * Math.PI, 0)
                    //颜色
                    ctx.fillStyle = 'rgba(' + arr[i].red + ',' + arr[i].green + ',' + arr[i].blue + ',' + arr[i].apl + ')'
                    ctx.fill()
                    ctx.restore()
                }
            }, 1000 / 60)

            //生成数据
            time2 = setInterval(function () {
                let r = Math.random() * 5 + 2
                let x = Math.random() * oc.width
                let y = oc.height - r
                let red = Math.round(Math.random() * 255)
                let green = Math.round(Math.random() * 255)
                let blue = Math.round(Math.random() * 255)
                let apl = 1

                let deg = 0
                let startX = x
                let startY = y
                let step = Math.random() * 20 + 10
                arr.push({
                    x: x,
                    y: y,
                    r: r,
                    green: green,
                    blue: blue,
                    red: red,
                    apl: apl,
                    deg: deg,
                    startX: startX,
                    startY: startY,
                    step: step
                })

            }, 50)
        }
    }


    //出入场动画
    for (let i = 0, j = anArr.length; i < j; i++) {
        anArr[i]['outAn']()
    }

    setTimeout(function () {
        anArr[0].inAn()
    }, 2000)

    // 音频
    function music() {
        //用户点击按钮播放
        $music.on('click', function () {
            if ($audio[0].paused) {
                $audio[0].play()
                $music.css({
                    background: 'url("./img/musicon.gif") no-repeat'
                })
            } else {
                $audio[0].pause()
                $music.css({
                    background: 'url("./img/musicoff.gif") no-repeat'
                })
            }
        })
    }


})