<template>
    <div class="roadMapBox">
        <Head htitle="ROADMAP OF USDX"></Head>
        <div class="roadContent">
            <div class="clearfix">
            <swiper :options="swiperOption">
                    <swiper-slide>
                        <div class="top">
                            <div class="headBar roadTitle">
                                <div class="mt">
                                    <h3>2018</h3>
                                    <p>Stablecoin Begins</p>
                                    <i class="line"></i>
                                </div>
                            </div>
                            <div class="content">
                                <p>Setting up foundation in Singapore</p>
                                <p>Setting up community</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number">Q1</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number pt23">Q2</div>
                            <div class="content" style="padding-left: 0px;">
                                <p>Setting up USDX fund</p>
                                <p>Expanding community scale</p>
                                <p>Starting to develop an</p>
                                <p>independent public blockchain</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="top">
                            <div class="headBar"></div>
                            <div class="content">
                                <p>Setting up foundation</p>
                                <p>branch in Korea</p>
                                <p>Landing on the Korean market</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number pl78 pt84">Q3</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number pl101">Q4</div>
                            <div class="content pl8">
                                <p>Introducing protocol of main</p>
                                <p>function on the independent</p>
                                <p>public blockchain</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="top">
                            <div class="headBar roadTitle">
                                <div class="mt mt45">
                                    <h3>2019</h3>
                                    <p>The Dark Knight</p>
                                    <i class="line"></i>
                                </div>
                            </div>
                            <div class="content pl45">
                                <p>The test network being released</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>

                            </div>
                            <div class="number pl96 pt101" style="">Q1</div>
                        </div>
                    </swiper-slide>


                    <swiper-slide>

                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number pl118">Q2</div>
                            <div class="content ml20" style="padding-left: 48px;">
                                <p>Launching public chain</p>
                                <p>USDY generation</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="top">
                            <div class="headBar"></div>
                            <div class="content" style="padding-left: 40px;">
                                <p>Building D-apps developer</p>
                                <p>dplatform</p>
                                <p>Launching D-wallet</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number pl116">Q3</div>
                        </div>
                    </swiper-slide>

                <swiper-slide>
                    <div class="bottom">
                        <div class="headBar"></div>
                        <div class="number plptQ4">Q4</div>
                        <div class="content" style="padding-left: 40px;">
                            <p>Establishing an institution</p>
                            <p>about making traditional assets</p>
                            <p>up to the blockchain</p>
                            <p>&nbsp;</p>
                        </div>

                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="top">
                        <!--<div class="headBar"></div>-->
                        <div class="headBar roadTitle">
                            <div class="mt mt34">
                                <h3>2020</h3>
                                <p>The Dark Knight Rises</p>
                                <i class="line"></i>
                            </div>
                        </div>
                        <div class="content" style="padding-left: 40px;">
                            <p>Improving the protocol</p>
                            <p>performance</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                        <div class="number pl116">Q1</div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="bottom">
                        <div class="headBar"></div>
                        <div class="number plptQ4">Q2</div>
                        <div class="content" style="padding-left: 40px;">
                            <p>Enriching the  D-apps</p>
                            <p>Improving the speed of network</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>

                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="top">
                        <div class="headBar"></div>
                        <div class="content" style="padding-left: 40px;">
                            <p>Improving the scale and security</p>
                            <p>and preparing for a broader</p>
                            <p>ecosystem</p>
                            <p>&nbsp;</p>
                        </div>
                        <div class="number pl116">Q3</div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="bottom">
                        <div class="headBar"></div>
                        <div class="number plptQ4">Q4</div>
                        <div class="content" style="padding-left: 40px;">
                            <p>Establishing the decentralized</p>
                            <p>exchanges</p>
                            <p>Enriching Stablecoins pegging</p>
                            <p>to other indexes</p>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="top">

                    </div>
                </swiper-slide>

                <div class="swiper-button-prev_road" slot="button-prev"></div>
                <div class="swiper-button-next_road" slot="button-next"></div>
            </swiper>

            </div>
        </div>










    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Head from './head';

    export default {
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next_road',
                        prevEl: '.swiper-button-prev_road'
                    },
                    slidesPerView: 6,
                    spaceBetween: 0,
                    freeMode: true,
                }
            }
        },

        mounted() {
        },
        methods: {

        },
        components:{
            Head,
            swiper,
            swiperSlide
        }
    }
</script>


<style lang="scss">
    .roadMapBox{
        width: 1280px;
        margin: 0 auto;
        overflow: hidden;
        padding-bottom: 80px;
        .roadTitle{
            .mt{
                float: left;
                margin-left: 12px;
                h3{
                    font-weight: normal;
                    font-size: 18px;
                    color: #05e1e3;
                    line-height: 22px;



                }
                p{
                    font-weight: normal;
                    font-size: 18px;
                    color: #05e1e3;
                    line-height: 22px;
                    white-space:nowrap;
                }
                i{
                    margin-top: 20px;
                    display: inline-block;
                    width: 40px;
                    height: 1px;
                    background: #05e1e3;

                }
            }
            .mt45{
                margin-left: 45px;
            }
            .mt34{
                margin-left: 34px;
            }
        }
        .roadContent{

            width: 1290px;
            height: 372px;
            margin-top: 100px;
            .swiper-slide{
                background: url("../../images/road_map_bg.png");
                background-repeat: repeat-x;
                //
            }
            .swiper-slide:nth-child(1){
                background-position: -80px 108px;
            }
            .swiper-slide:nth-child(2){
                background-position: 140px 100px;

            }
            .swiper-slide:nth-child(3){
                background-position: 358px 108px;
            }
            .swiper-slide:nth-child(4){
                background-position: 579px 100px;

            }
            .swiper-slide:nth-child(5){
                background-position: 799px 108px;
            }
            .swiper-slide:nth-child(6){
                background-position: 1022px 100px;

            }
            .swiper-slide:nth-child(7){
                background-position: 1246px 108px;

            }

            .swiper-slide:nth-child(8){
                background-position: 1458px 108px;

            }

            .swiper-slide:nth-child(9){
                background-position: 1670px 108px;

            }

            .swiper-slide:nth-child(10){
                background-position: 1882px 108px;

            }

            .swiper-slide:nth-child(11){
                background-position: 2094px 108px;

            }

            .swiper-slide:nth-child(12){
                background-position: 2306px 108px;

            }
            .swiper-slide:nth-child(13){
                background-position: 2518px 108px;

            }
            ul{
                li{
                    float: left;
                    width: 198px;
                    text-align: left;
                    padding-left: 16px;

                }
            }
            .top{
                padding-left: 10px;
                /*height: 280px;*/
                height: 372px;

                .content{
                    padding-top: 57px;
                    padding-left: 12px;
                    p{
                        line-height: 22px;
                        font-size: 16px;
                        white-space:nowrap;
                    }
                }
                .number{
                    padding-left: 67px;
                    padding-top: 102px;
                    font-size: 16px;
                }
                .pl116{padding-left: 116px;}
                .pl96{
                    padding-left: 96px;
                }
                .pl78{
                    padding-left: 78px;
                }
                .pl45{
                    padding-left: 45px;
                }
                .ml20{
                    margin-left: 20px;
                }
                .pl20{
                    padding-left: 20px;
                }
                .pl18{
                    padding-left: 18px;
                }
                .pt101{
                    padding-top: 101px;
                }

                .headBar{
                    height: 92px;
                    width: 100%;
                }

            }
            .bottom{
                padding-left: 14px;
                /*height: 263px;*/
                height: 355px;
                .content{
                    padding-top: 100px;
                    padding-left: 26px;
                    p{
                        line-height: 22px;
                        font-size: 16px;
                        white-space:nowrap;
                    }
                }
                .number{
                    padding-left: 87px;
                    padding-top: 24px;
                }
                .pl101{
                    padding-left: 101px;
                }
                .pl118{
                    padding-left: 118px;
                }
                .pl30{
                    padding-left: 30px;
                }
                .pl8{
                    padding-left: 8px;
                }
                .headBar{
                    height: 92px;
                    width: 100%;
                }
                .plptQ4{
                    padding-left: 128px;
                    padding-top: 31px;
                }
            }
            .swiper-button-prev_road{
                background: url("../../images/left_icon.png") no-repeat;
                width: 69px;
                height: 69px;
                cursor: pointer;
                top:106px;
                position: absolute;
                z-index: 9999;
            }
            .swiper-button-next_road{
                background: url("../../images/right_icon.png") no-repeat;
                width: 69px;
                height: 69px;
                cursor: pointer;
                top:106px;
                position: absolute;
                z-index: 9999;
                right: 24px;
            }
        }

    }
    @media screen and (min-width: 720px) and (max-width: 1280px) {
        .roadMapBox .roadContent{
            width: 1200px;
            margin: 0 auto;
            margin-top: 100px;
        }
        .roadMapBox{
            width: 1200px;
        }
        .roadMapBox .roadContent {
            .swiper-slide:nth-child(1) {
                background-position: -80px 95px;
            }
            .swiper-slide:nth-child(3) {
                background-position: 358px 91px;
            }
            .swiper-slide:nth-child(4) {
                background-position: 579px 96px;
            }
            .swiper-slide:nth-child(5) {
                background-position: 799px 92px;
            }
            .swiper-slide:nth-child(6) {
                background-position: 1022px 95px;
            }
            .swiper-slide:nth-child(7) {
                background-position: 1246px 94px;
            }
            .swiper-slide:nth-child(8){
                background-position: 1470px 94px;
            }
            .swiper-slide:nth-child(9){
                background-position: 1694px 94px;
            }

            .swiper-slide:nth-child(10){
                background-position: 1918px 94px;
            }

            .swiper-slide:nth-child(11){
                background-position: 2142px 94px;
            }

            .swiper-slide:nth-child(12){
                background-position: 2366px 94px;
            }
            .swiper-slide:nth-child(13){
                background-position: 2590px 94px;
            }
        }

        .roadMapBox .roadContent .top .number{
            padding-top: 89px;
        }
        .roadMapBox .roadContent .top .pl78 {
            padding-left: 80px;
        }
        .roadMapBox .roadContent .top {
            .pt84{
                padding-top: 84px;
            }

        }
        .roadMapBox .roadContent .top .content{
            padding-left: 25px;
        }
        .roadMapBox .roadContent .bottom .number{
            padding-top: 19px;
        }
        .roadMapBox .roadContent .bottom .pt23{
            padding-top: 23px;
        }
        .roadMapBox .roadContent .bottom .plptQ4{
                padding-left: 141px;
        }
        .roadMapBox .roadContent .top .pl116{
            padding-left: 140px;
        }
    }
</style>
