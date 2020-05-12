const string = `
/*整体样式*/
.container *{
    box-sizing: border-box;margin: 0;padding: 0;
}
.container *::before,.container *::after{box-sizing: border-box}
/*皮卡丘定位*/
.container {
    width: 500px;
    margin: 40px auto;
    padding: 3em;
    position: relative;
    top: 200px;
    left: 66px;
    z-index:11;
}
/*我来组成头部*/
.head {
    width: 198px;
    height: 205px;
    background-color: #f9ed7c;
    border-top: 2px solid black;
    border-radius: 40%;
    z-index: 10;
}
.cover-top {
    width: 160px;
    height: 100px;
    background-color: #f9ed7c;
    border-radius: 50%;
    /*border-top:1px solid #444;*/
    position: relative;
    top: -8px;
    left: 20px;
}
.cover-top::after {
    content: '';
    position: absolute;
    top: 10px;
    left: -6px;
    width: 170px;
    height: 100px;
    border-radius: 39%;
    background-color: #f9ed7c;
}
.cover {
    width: 205px;
    height: 150px;
    background-color: #f9ed7c;
    border-radius: 50%;
    position: relative;
    top: -45px;
    left: -3px;
    overflow: hidden;
    border-bottom: 2px solid #444;
}
.cover-line {
    width: 130px;
    height: 27px;
    border-radius: 40%;
    background-color: #f9ed7c;
    /*border: 1px solid red;*/
    position: absolute;
    top: 230px;
    left: 83px;
}
.eye {
    width: 30px;
    height: 33px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
    position: absolute;
    background-color: #444;
    top: 110px;
    left: 90px;
    overflow: hidden;
    z-index: 11;
}
.left-eye {
    animation: blinkEyes-l 2s infinite;
}
.right-eye {
    position: absolute;
    top: 110px;
    left: 185px;
    animation: blinkEyes-r 2s infinite;
}
.left-white {
    position: absolute;
    top: 12%;
    left: 35%;
    height: 50%;
    width: 45%;
    transform: rotate(12deg);
    background-color: #fff;
    border-radius: 50%;
    animation: hidden 2s infinite;
}
.right-white {
    position: absolute;
    top: 10%;
    left: 18%;
    height: 50%;
    width: 45%;
    background-color: #fff;
    border-radius: 50%;
    transform: rotate(0deg);
    animation: hidden 2s infinite;
}
.nose {
    width: 5px;
    height: 3px;
    border-radius: 50%;
    background-color: #444;
    position: absolute;
    top: 150px;
    left: 147px;
    z-index: 12;
}
.mouse {
    position: absolute;
    top: 115px;
    left: 114px;
}
.mouth-left {
    width: 43px;
    height: 50px;
    border-radius: 50%;
    background: #f9ed7c;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 2px solid #f9ed7c;
    border-bottom-color: #444;
}
.mouth-right {
    width: 43px;
    height: 50px;
    border-radius: 50%;
    background: #f9ed7c;
    position: absolute;
    top: 0px;
    left: 27px;
    border: 2px solid #f9ed7c;
    border-bottom-color: #444;
}
.tongue {
    width: 28px;
    height: 6px;
    background: #e66a41;
    position: absolute;
    top: 52px;
    left: 21px;
    border-bottom-left-radius: 40% 90%;
    border-bottom-right-radius: 40% 90%;
    border: 2px solid #000;
    border-top-color: #f9ed7c;
    -webkit-animation: tongue 2s ease-in-out infinite;
    animation: tongue 2s ease-in-out infinite;
}
.blush-left {
    width: 70px;
    height: 70px;
    background-color: #e65a41;
    border-radius: 50%;
    position: absolute;
    top: 60px;
    left: -8px;
    /*border: 1px dashed #999;*/
}
.blush-right {
    width: 70px;
    height: 70px;
    background-color: #e65a41;
    border-radius: 50%;
    position: absolute;
    top: 60px;
    right: -8px;
    /*border: 1px dashed #999;*/
}
.ear {
    width: 50px;
    height: 170px;
    background-color: #f9ed7c;
    transform: rotate(-110deg);
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 15%;
    border-bottom-left-radius: 15%;
    position: absolute;
    top: 25px;
    left: -12px;
    /*border: 1.5px solid #444;*/
    z-index: -1;
    overflow: hidden;
    animation: shakeEar-l 2s infinite;

}
.ear-shading-left {
    width: 80px;
    height: 70px;
    /*background-color: #444;*/
    background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.65));
    transform: rotate(60deg);
    position: relative;
    top: -9px;
    left: -30px;
}
.ear-right {
    position: absolute;
    top: -37px;
    left: 250px;
    transform: rotate(66deg);
    /*border: 0.5px solid #444;*/
    z-index: -1;
    animation: shakeEar-r 2s infinite;
}
.ear-shading-right {
    width: 80px;
    height: 70px;
    background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.65));
    transform: rotate(35deg);
    position: relative;
    top: 0px;
    left: 5px;
}
/*我来组成身体*/
.body {
    width: 215px;
    height: 233px;
    background-color: #f9ed7c;
    position: relative;
    top: -60px;
    left: -10px;
    border-bottom-left-radius: 45% 43%;
    border-bottom-right-radius: 45% 43%;
    border-top-left-radius: 30% 90%;
    border-top-right-radius: 30% 90%;
    border: 2px solid #444;
    z-index: -1;
}
/*手手*/
.arm {
    width: 50px;
    height: 80px;
    border: 2px solid #444;
    border-top: none;
    border-bottom-left-radius: 50% 70%;
    border-bottom-right-radius: 45% 30%;
    position: relative;
    top: 60px;
    left: 30px;
    transform: rotate(-20deg);
    animation: shakeHand-l 2s infinite;
}
.arm-right {
    position: relative;
    top: -22px;
    left: 130px;
    transform: rotate(20deg);
    border-bottom-right-radius: 50% 70%;
    border-bottom-left-radius: 45% 30%;
    animation: shakeHand-r 2s infinite;
}
/*我来组成尾巴*/
.tail {
    width: 40px;
    height: 40px;
    background-color: #c93835;
    border: 2px solid #444;
    position: absolute;
    top: 300px;
    left: 10px;
    transform: rotate(12deg);
    z-index: -10;
    animation: shakeTail 2s infinite;

}
.tail1 {
    width: 40px;
    height: 30px;
    background-color: #f9ed7c;
    border-left: 2px solid #444;
    border-right: 2px solid #444;
    position: absolute;
    top: -32px;
    z-index: -2;
}
.tail2 {
    width: 38px;
    height: 50px;
    background-color: #f9ed7c;
    border: 2px solid #444;
    border-top: none;
    position: absolute;
    top: -76px;
    left: -15px;
    z-index: -3;
    transform: rotate(-88deg);
}
.tail2::before {
    content: '';
    width: 40px;
    height: 40px;
    background-color: #f9ed7c;
    position: absolute;
    top: -35px;
    left: 13px;
}
.tail3 {
    width: 47px;
    height: 75px;
    background-color: #f9ed7c;
    border: 2px solid #444;
    border-top: none;
    position: absolute;
    top: -110px;
    left: -63px;
    z-index: -4;
    transform: rotate(10deg);
}
.tail3::before {
    content: '';
    width: 40px;
    height: 40px;
    background-color: #f9ed7c;
    position: absolute;
    top: -30px;
    left: -20px;
}
.tail4 {
    width: 75px;
    height: 150px;
    background-color: #f9ed7c;
    border: 2px solid #444;
    border-top: none;
    position: absolute;
    top: -220px;
    left: -118px;
    z-index: -5;
    transform: rotate(-85deg);
}
.tail5 {
    width: 21px;
    height: 77px;
    background-color: #c93835;
    border-left: 2px solid #444;
    border-top: 2px solid #444;
    position: absolute;
    top: -190px;
    left: -167px;
    transform: skew(11deg);
    z-index: -6;
}
/*jio*/
.foot {
    width: 40px;
    height: 50px;
    background-color: #f9ed7c;
    border: 2px solid #444;
    position: absolute;
    top: 400px;
    left: 65px;
    transform: rotate(35deg);
    border-radius: 80% 20% 80% 10%;
    z-index: -2;
}
.foot-right {
    position: absolute;
    top: 400px;
    left: 190px;
    transform: rotate(255deg);
}
.figures {
    width: 10px;
    height: 15px;
    border-right: 1px solid #444;
    border-left: 1px solid #444;
    position: relative;
    top: 34px;
    left: 7px;
}
.figures-right {
    transform: rotate(38deg);
    top: 32px;
    left: 2px;
}
/*地面阴影*/
.floor {
    z-index: -100;
    width: 230px;
    height: 100px;
    border-radius: 45%;
    transform: skew(-50deg);
    background: #adadad;
    position: relative;
    top: -130px;
    left: 30px;
}
.floor1 {
    width: 80px;
    height: 120px;
    border-radius: 50%;
    background: #adadad;
    transform: skew(-20deg);
    position: relative;
    top: -70px;
    left: 60px;
    animation: moves 2s infinite;
}
/*尾巴摇摆动画*/
@-webkit-keyframes shakeTail {
    0% {
        -webkit-transform-origin: 250px 300px;
        -webkit-transform: rotateZ(0deg);
    }
    60% {
        -webkit-transform-origin: 250px 300px;
        -webkit-transform: rotateZ(10deg);
    }
    100% {
        -webkit-transform-origin: 250px 300px;
        -webkit-transform: rotateZ(0deg);
    }
}
@keyframes shakeTail {
    0% {
        transform: rotateZ(0deg);
    }
    60% {
        transform: rotateZ(5deg);
    }
    100% {
        transform: rotateZ(0deg);
    }
}
/*吐舌头*/
@keyframes tongue {
    0%, 95%, 100% {
        height: 0px;
    }
    30% {
        width: 30px;
        height: 36px;
    }
    90% {
        width: 30px;
        height: 36px;
    }
}
/*眨眼*/
@keyframes blinkEyes-l {
    0%, 79%, 85%, 100% {
    }
    20% {
        position: absolute;
        top: 115px;
        left: 90px;
        width: 33px;
        height: 15px;
        border-top: 5px solid #444;
        background-color: #f9ed7c;
        border-radius: 50%;
    }
}
@keyframes blinkEyes-r {
    0%, 79%, 81%, 100% {
    }
    1% {
        position: absolute;
        top: 115px;
        left: 185px;
        width: 33px;
        height: 13px;
        border-top: 4px solid #444;
        background-color: #f9ed7c;
        border-radius: 50%;
    }
}
/*隐藏眼白*/
@keyframes hidden {
    0%, 65%, 100% {
    }
    19% {
        background-color: #f9ed7c;
    }
}
/*摇耳朵*/
@keyframes shakeEar-l {
    0%, 79%, 81%, 100% {
    }
    80% {
        transform: rotate(-88deg);
    }
}
@keyframes shakeEar-r {
    0%, 79%, 81%, 100% {
    }
    80% {
        transform: rotate(50deg);
    }
}
/*抱手*/
@keyframes shakeHand-l {
    0%, 79%, 81%, 100% {
    }
    80% {
        transform: rotate(-50deg);
    }
}
@keyframes shakeHand-r {
    0%, 79%, 81%, 100% {
    }
    80% {
        transform: rotate(50deg);
    }
}
/*地面阴影*/
@keyframes moves {
    0%, 79%, 81%, 100% {
    }
    80% {
        transform: rotate(-5deg);
    }
}
/*我是精灵球*/
.box {
    width: 82px;
    height: 82px;
    border: 3px solid #fff;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 5px hsla(0, 0%, 100%, .9);
    left: 50%;
    top: 320px;
    margin-top: -420px;
    margin-left: -44px;
    animation: box-rotate 4s ease-in-out infinite alternate
}
@-webkit-keyframes box-rotate {
    0%, 90%, to {
        -webkit-transform: rotate(0deg)
    }
    40%, 50% {
        -webkit-transform: rotate(1turn);
        box-shadow: 0 0 10px 5px hsla(0, 0%, 100%, .9)
    }
}
.box_main {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: red;
    border: 1px solid #333;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden
}
.box_main:before {
    display: block;
    height: 40px;
    background: #fff;
    bottom: 0
}
.box_main:after, .box_main:before {
    content: "";
    width: 80px;
    position: absolute;
    left: 0
}
.box_main:after {
    height: 12px;
    background: #3b3543;
    top: 50%;
    margin-top: -6px
}
.box_circle {
    width: 30px;
    height: 30px;
    border: 5px solid #3b3543;
    border-radius: 50%;
    background: #fff;
    margin-left: -15px;
    margin-top: -15px;
    z-index: 5
}
.box_circle, .box_circle:after {
    position: absolute;
    left: 50%;
    top: 50%
}
.box_circle:after {
    content: "";
    width: 16px;
    height: 16px;
    border: 1px solid #3b3543;
    border-radius: 50%;
    margin-left: -8px;
    margin-top: -8px;
    animation: bg_change 4s infinite
}
.box {
    width: 82px;
    height: 82px;
    border: 3px solid #fff;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 5px hsla(0, 0%, 100%, .9);
    left: 50%;
    top: 320px;
    margin-left: -44px;
    animation: box-rotate 4s ease-in-out infinite alternate
}
@-webkit-keyframes box-rotate {
    0%, 90%, to {
        -webkit-transform: rotate(0deg)
    }
    40%, 50% {
        -webkit-transform: rotate(1turn);
        box-shadow: 0 0 10px 5px hsla(0, 0%, 100%, .9)
    }
}
.box_main {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: red;
    border: 1px solid #333;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden
}
.box_main:before {
    display: block;
    height: 40px;
    background: #fff;
    bottom: 0
}
.box_main:after, .box_main:before {
    content: "";
    width: 80px;
    position: absolute;
    left: 0
}
.box_main:after {
    height: 12px;
    background: #3b3543;
    top: 50%;
    margin-top: -6px
}
.box_circle {
    width: 30px;
    height: 30px;
    border: 5px solid #3b3543;
    border-radius: 50%;
    background: #fff;
    margin-left: -15px;
    margin-top: -15px;
    z-index: 5
}
.box_circle, .box_circle:after {
    position: absolute;
    left: 50%;
    top: 50%
}
.box_circle:after {
    content: "";
    width: 16px;
    height: 16px;
    border: 1px solid #3b3543;
    border-radius: 50%;
    margin-left: -8px;
    margin-top: -8px;
    animation: bg_change 4s infinite
}
@-webkit-keyframes bg_change {
    0%, 40%, 60%, 90%, to {
        background: none
    }
    50% {
        background: red
    }
}
`;

const player = {
    id: undefined,
    n: 1,
    time: 88,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.ui.demo.innerText = string.substring(0, player.n);
        player.ui.demo2.innerHTML = string.substring(0, player.n);
        player.play();//id拿到play的结果
        player.bindEvents()
    },
    bindEvents: () => {
        for (let key in player.events) if (player.events.hasOwnProperty(key)) {
            const value = player.events[key];// pause / play / slow...
            document.querySelector(key).onclick = player[value]
        }
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id);
            return
        }
        player.ui.demo.innerText = string.substring(0, player.n);
        player.ui.demo2.innerHTML = string.substring(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight //滚动条幅度等于当前字符的幅度
    },
    play: () => {
        player.id = setInterval(player.run, player.time)//启动闹钟
    },
    pause: () => {
        window.clearInterval(player.id)//砸掉闹钟
    },
    slow: () => {
        player.pause();
        player.time = 200;
        player.play()
    },
    normal: () => {
        player.pause();
        player.time = 88;
        player.play()
    },
    fast: () => {
        player.pause();
        player.time = 0;
        player.play()
    }
};

player.init();

