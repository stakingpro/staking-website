<template>
    <div ref="nav-home" id="indexSection" class="indexSection clearfix">
        <div class="layer right-image banner-image">
            <img alt="" src="https://img.alicdn.com/tfs/TB1XxS3P4TpK1RjSZFMXXbG_VXa-3840-1280.jpg">

            <img class="breathingLampImage"  src="https://img.alicdn.com/tfs/TB1WjG9P3HqK1RjSZJnXXbNLpXa-3840-1280.png" data-spm-anchor-id="5176.8142029.d49.i0.3dbd6d3eT6S1U8">
            <div class="indexBox">
                <div class="indexBox-line">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
        <div class="indexContent">
            <h2><span>STAKING</span></h2>
            <p>WORLD LEADING STAKING COMPUTING PLATFORM</p>
            <button class="layer-btn" @click="whitePaper()">
                Whitepaper
                <i class="icon iconfont icon-arrow"></i>
            </button>
        </div>
        <div class="houseBox">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>

        </div>

</template>

<script type="text/javascript">

    export default {
        data() {
            return {
                winHeight:600,
            }
        },

        mounted() {
            let winHeight = document.documentElement.clientHeight;
            if(winHeight <650){
                winHeight = 650;
            }

        },
        methods: {
            /*setWindowHeight(winHeight){
                this.$nextTick(function () {
                    document.getElementById("indexSection").style.height = winHeight+"px";
                });
            },*/
            whitePaper(){
                window.location.href="whitepaper/STAKING_OnepagerEN.pdf";
            }

        },
        components:{
        }
    }
</script>


<style lang="scss">
    .indexSection{
        background: #22252e;
        height: 600px;
        .indexBox{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 0;
        }
        .layer{
            height: 640px;
            text-align: center;
            position: absolute;
            top:0;
            width: 100%;
            overflow: hidden;
            img{
                position: absolute;
                top:0;
                right: -60px;
                border: 0;
                width: 1920px;
                left: -306.5px;
            }
            .breathingLampImage{
                width: 1920px;
                top:0;
                left: -305.5px;
            }

            .indexBox-line{
                div{
                    left: 80%;
                    width: 60px;
                    &:nth-child(1){
                        top: 32%;
                    }
                    &:nth-child(2){
                        top: 25%;
                    }
                    &:nth-child(3){
                        top: 51%;
                    }
                }

            }

        }
        .indexContent{
            position: absolute;
            z-index: 2;
            width: 1200px;
            left: 50%;
            margin-left: -600px;
            padding-top: 210px;
            h2{
                margin-top: -5px;
                font-size: 64px;
            }
            p{
                font-size: 28px;
                line-height: 36px;
                color: #fff;
                margin-top: 22px;
            }
            .layer-btn{
                outline: none;
                cursor: pointer;
                margin-top: 30px;
                float: left;
                width: 120px;
                height: 36px;
                line-height: 20px;
                width: auto;
                font-size: 24px!important;
                color: #fff;
                border: none;
                border-bottom: 3px solid #00c1de;
                background: #373d41;
                background: transparent;
                margin-top: 40px;
                transition: color .3s ease-in-out,background .3s ease-in-out;
                .icon-arrow{
                    font-size: 20px;
                }

            }
            button:hover {
                color: #00c1de;
            }
        }



        .breathingLampImage {
            animation: breath 3s infinite ease-in-out alternate
        }

        @keyframes breath {
            0% {
                opacity: .2
            }

            70% {
                opacity: 1
            }

            to {
                opacity: .2
            }
        }





    }
    @media screen and (max-width: 1280px) {
        .indexSection{
        }
    }

    @media screen and (max-width: 720px) {
        .indexSection{
            height: 520px;
            background: #22252e;
            .indexBox{
                width: 100%;
                height: 420px;
                position: relative;
                z-index: 0;
            }
            .layer{
                overflow: hidden;
                height: 520px;
                text-align: center;
                position: absolute;
                top:0;
                width: 100%;
                img{
                    position: absolute;
                    top:40px;
                    border: 0;
                    width: 640px * 1.4;
                    /*left: 0;*/
                    left: -420px;
                }
                .breathingLampImage{
                    width: 640px * 1.4;
                    top:40px;
                    left: -420px;
                }
                .indexBox-line{
                    div{
                        left: 80%;
                        width: 30px;
                        &:nth-child(1){
                            top: 32%;
                        }
                        &:nth-child(2){
                            top: 25%;
                        }
                        &:nth-child(3){
                            top: 51%;
                        }
                    }

                }



            }
            .indexContent{
                position: absolute;
                z-index: 2;
                width: 100%;
                text-align: center;
                left: 0;
                margin-left: 0px;
                padding-top: 268px;
                h2{
                    margin-top: -5px;
                    font-size: 32px;
                    text-align: center;
                }
                p{
                    font-size: 18px;
                    line-height: 24px;
                    color: #fff;
                    margin-top: 12px;
                    text-align: center;

                }
                .layer-btn{
                    outline: none;
                    cursor: pointer;
                    float: none;
                    width: 120px;
                    height: 36px;
                    line-height: 20px;
                    width: auto;
                    font-size: 18px!important;
                    color: #fff;
                    border: none;
                    border-bottom: 3px solid #00c1de;
                    background: #373d41;
                    background: transparent;
                    margin-top: 25px;
                    text-align: center;
                    transition: color .3s ease-in-out,background .3s ease-in-out;
                    .icon-arrow{
                        font-size: 16px;
                    }

                }
                button:hover {
                    color: #00c1de;
                }
            }

            .breathingLampImage {
                animation: breath 3s infinite ease-in-out alternate
            }

        }
    }
</style>
