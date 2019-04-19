<template>
    <div class="roadMapPhoneBox">
        <Head htitle="ROADMAP OF USDX"></Head>
        <div class="roadContent">
            <div class="clearfix">
            <swiper :options="swiperOption">
                    <swiper-slide>
                        <div class="top">
                            <div class="headBar roadTitle">
                                <div class="mt">
                                    <h3>2018</h3>
                                    <p>The Dark Knight Rises</p>
                                    <i class="line"></i>
                                </div>
                            </div>
                            <div class="content">
                                <p>Setting up foundation in</p>
                                <p>Singapore</p>
                                <p>Setting up community</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number">Q1</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number">Q2</div>
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
                                <p>Landing on the Korean</p>
                                <p>market</p>
                            </div>
                            <div class="number pl43">Q3</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number pl47">Q4</div>
                            <div class="content pl8">
                                <p>Introducing protocol of</p>
                                <p>main function on </p>
                                <p>the independent public</p>
                                <p>blockchain</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="top">
                            <div class="headBar roadTitle">
                                <div class="mt">
                                    <h3>2019</h3>
                                    <p>Game of Stablecoin World</p>
                                    <i class="line"></i>
                                </div>
                            </div>
                            <div class="content pl14">
                                <p>Alpha version of </p>
                                <p>Mainnet released</p>
                                <p>Beta version of</p>
                                <p>Mainnet released</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number pl38" style="padding-top: 39px;">Q1</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number pl43">Q2</div>
                            <div class="content ml20 pl02">
                                <p>Perfecting Price Stability</p>
                                <p>Mechanism</p>
                                <p>Building D-APPs</p>
                                <p>developer platform</p>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="top">
                            <div class="headBar"></div>
                            <div class="content">
                                <p>Expanding to Derivatives</p>
                                <p>Markets</p>
                                <p>Building Ecosystem</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number pl34">Q3</div>
                        </div>
                    </swiper-slide>

                <swiper-slide>
                    <div class="bottom">
                        <div class="headBar"></div>
                        <div class="number plptQ4" style="padding-left: 39px;">Q4</div>
                        <div class="content" style="padding-left:0px;">
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
                        <div class="content" style="padding-left: 0px;">
                            <p>Improving the protocol</p>
                            <p>performance</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                        <div class="number pl116" style="padding-left: 30px;">Q1</div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="bottom">
                        <div class="headBar"></div>
                        <div class="number plptQ4" style="padding-left: 35px;">Q2</div>
                        <div class="content" style="padding-left: 0px;">
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
                        <div class="content" style="padding-left: 00px;">
                            <p>Improving the scale and security</p>
                            <p>and preparing for a broader</p>
                            <p>ecosystem</p>
                            <p>&nbsp;</p>
                        </div>
                        <div class="number pl116" style="padding-left: 25px;">Q3</div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="bottom">
                        <div class="headBar"></div>
                        <div class="number plptQ4" style="padding-left: 31px;">Q4</div>
                        <div class="content" style="padding-left: 0px;margin-left: -22px;">
                            <p>Establishing the decentralized</p>
                            <p>exchanges</p>
                            <p>Enriching Stablecoins pegging</p>
                            <p>to other indexes</p>
                        </div>

                    </div>
                </swiper-slide>

                    <swiper-slide>
                        <div class="bottom"></div>
                    </swiper-slide>
                <div class="swiper-button-prev_road_phone" slot="button-prev"></div>
                <div class="swiper-button-next_road_phone" slot="button-next"></div>
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
                        nextEl: '.swiper-button-next_road_phone',
                        prevEl: '.swiper-button-prev_road_phone'
                    },
                    slidesPerView: 3,
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
    @media screen and (max-width: 720px) {
        .roadMapPhoneBox{
            width: 370px;
            margin: 0 auto;
            overflow: hidden;
            .roadTitle{
                .mt{
                    float: left;
                    margin-left: 12px;
                    h3{
                        font-weight: normal;
                        color: #05e1e3;
                        font-size: 11px;
                        line-height: 13px;
                    }
                    p{
                        font-weight: normal;
                        color: #05e1e3;
                        white-space:nowrap;
                        font-size: 11px;
                        line-height: 13px;
                    }
                    i{
                        display: inline-block;
                        width: 40px;
                        height: 1px;
                        background: #05e1e3;
                        margin-top: 14px;
                    }
                }
                .mt15{
                    margin-left: 45px;
                }
            }
            .roadContent{
                width: 408px;
                height: 290px;
                .swiper-slide{
                    background: url("../../images/road_map_bg.png");
                    background-repeat: repeat-x;
                    background-size: 268px auto;
                }
                .swiper-slide:nth-child(1){
                    background-position: -44px 108px;
                }
                .swiper-slide:nth-child(2){
                    background-position: 88px 108px;

                }
                .swiper-slide:nth-child(3){
                    background-position: 221px 108px;
                }
                .swiper-slide:nth-child(4){
                    background-position: 352px 108px;

                }
                .swiper-slide:nth-child(5){
                    background-position: 484px 108px;
                }
                .swiper-slide:nth-child(6){
                    background-position: 616px 108px;

                }
                .swiper-slide:nth-child(7){
                    background-position: 748px 108px;

                }
                .swiper-slide:nth-child(8){
                    background-position: 880px 108px;

                }

                .swiper-slide:nth-child(9){
                    background-position: 1012px 108px;

                }

                .swiper-slide:nth-child(10){
                    background-position: 1144px 108px;

                }

                .swiper-slide:nth-child(11){
                    background-position: 1276px 108px;

                }

                .swiper-slide:nth-child(12){
                    background-position: 1408px 108px;

                }
                .swiper-slide:nth-child(13){
                    background-position: 1540px 108px;

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
                    height: 372px;

                    .content{
                        padding-top: 57px;
                        padding-left: 12px;
                        p{
                            line-height: 13px;
                            font-size: 9px;
                        }
                    }
                    .number{
                        padding-left: 46px;
                        padding-top: 53px;
                        font-size: 10px;
                    }
                    .pl34{padding-left: 34px;}
                    .pl38{
                        padding-left: 38px;
                    }
                    .pl43{
                        padding-left: 43px;
                    }
                    .pl14{
                        padding-left: 14px;
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
                    .headBar{
                        height: 52px;
                        padding-top: 40px;
                        width: 100%;
                    }

                }
                .bottom{
                    padding-left: 14px;
                    height: 290px;
                    .content{
                        padding-top: 62px;
                        padding-left: 15px;
                        p{
                            line-height: 13px;
                            font-size: 9px;
                        }
                    }
                    .number{
                        padding-left: 51px;
                        padding-top: 26px;
                        font-size: 10px;
                    }
                    .pl47{
                        padding-left: 47px;
                    }
                    .pl43{
                        padding-left: 43px;
                    }
                    .pl30{
                        padding-left: 30px;
                    }
                    .pl8{
                        padding-left: 8px;
                    }
                    .pl02{
                        padding-left: 2px;
                    }
                    .headBar{
                        height: 92px;
                        width: 100%;
                    }
                    .plptQ4{
                        padding-left: 34px;
                        padding-top: 26px;
                    }
                }
                .swiper-button-prev_road_phone{
                    background: url("../../images/left_icon.png") no-repeat;
                    cursor: pointer;
                    top:106px;
                    position: absolute;
                    z-index: 9999;
                    width: 36px;
                    height: 36px;
                    background-size: 36px 36px;
                    left: 10px;
                }
                .swiper-button-next_road_phone{
                    background: url("../../images/right_icon.png") no-repeat;
                    cursor: pointer;
                    top:106px;
                    position: absolute;
                    z-index: 9999;
                    right: 45px;
                    width: 36px;
                    height: 36px;
                    background-size: 36px 36px;
                }
            }

        }
    }
</style>
