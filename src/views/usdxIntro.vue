<template>
    <div class="introBox">
        <Head htitle="USDX：The New Era of Stablecoin"></Head>
        <div class="navBtnBox clearfix">
            <ul>
                <li :class="curIndex == 0? 'active':''" @click="selectTab(0)">Ground-up Innovation</li>
                <li :class="curIndex == 1? 'active':''" @click="selectTab(1)">Impeccable Stability</li>
                <li :class="curIndex == 2? 'active':''" @click="selectTab(2)">Sovereign Money</li>
            </ul>
        </div>



    <div class="phaseBox">
        <swiper :options="swiperOption" ref="mySwiper">

            <swiper-slide>
                <div class="introCtn clearfix">
                    <div class="leftImg">
                        <div class="intro-line">
                            <img src="../../images/line_icon_bg.png" class=""/>

                            <div class="torightBig">
                                <img src="../../images/line_icons.png" class="phase-line-baseimg shadeImage"/>
                            </div>
                        </div>

                    </div>
                    <div class="rightCtn">
                        <div class="sectionCtn">
                            <h3>Phase 1: Revolution Accessible to Everyone</h3>
                            <p>During Phase 1, tokens will be produced based on Ethereum ERC 20, called USDX. <br/>Every individual can join USDX’s ecosystem to contribute in this stablecoin <br/>revolution.
                            </p>
                        </div>
                        <div class="sectionCtn">
                            <h3>Phase 2: Independent Public Chain Ensures The <br/>Revolution</h3>
                            <p>During Phase 2, an independent public chain will be created, called USDY. Previous <br/>Holders with USDX will be awarded  USDY equal to their USDX and enjoy the <br/>ultimate stabilization reached by its self-balancing mechanism.
                            </p>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="introCtn clearfix">
                    <div class="leftImg">
                        <img src="../../images/phase003.gif" class="phase03"/>
                    </div>
                    <div class="rightCtn">
                        <div class="sectionCtn">
                            <h3>Intelligent Algorithmic Monetary Control</h3>
                            <p>Based on historical dataset to implement algorithmic control.</p>
                            <p>1. Adjust Total Quantity Of Money In The Economy (M)</p>
                            <p>2. Adjust The Velocity Of Money (V)</p>
                            <p>With E represents the exchange rate of USDY to USD, if E is greater than 1, we need <br/>to increase M or increase V, so that E goes down to 1; if E is less than 1, we need to <br/>decrease M or decrease V, so that E goes up to 1.</p>
                        </div>
                        <div class="sectionCtn">
                            <h3>Diversified Mechanisms Adjusting M & V</h3>
                            <p>Public chain maintains diversified mechanisms.</p>
                            <p>1.Variable Block Reward</p>
                            <p>2.Mining Lock</p>
                            <p>3.Variable Transaction Fee</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="introCtn clearfix">
                    <div class="leftImg">
                        <img src="../../images/phase01.png" class="phase01"/>
                        <img src="../../images/usdt-icon.png" class="usdt scaleUSDT"/>
                        <img src="../../images/usdx-icon.png" class="usdx scaleUSDX">
                    </div>
                    <div class="rightCtn">
                        <div class="sectionCtn">
                            <h3>Kill the Centralized Mechanism</h3>
                            <p>1. Tether can release USDT without any collateral and perform as a centralized <br/>entity.
                            </p>
                            <p>2. With USDX’s absolute decentralized system, we build a healthy and organic <br/>decommerce ecosystem.

                            </p>
                        </div>
                        <div class="sectionCtn">
                            <h3>No Collateral No Fraud and No Risk</h3>
                            <p>1. Fiat currency as collateral have to be placed in one bank account and the bank <br/>account can be frozen at any time  for fraud.
                            </p>
                            <p>2. Cryptocurrency as collateral is extremely volatile, and can easily destroy the <br/>market before the stablecoin is widely used.
                            </p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>




    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    // require styles
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Head from './head';

    export default {
        data() {
            return {
                curIndex:0,
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next_intro',
                        prevEl: '.swiper-button-prev_intro'
                    }
                }
            }
        },

        mounted() {
        },
        methods: {
            selectTab(index){
                this.curIndex = index;
                // swiper.slideNext();
                this.swiper.slideTo(index, 1000, false)
            }

        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        components:{
            Head,
            swiper,
            swiperSlide
        }
    }
</script>


<style lang="scss">
    .introBox{
        .navBtnBox{
            ul{
                width: 816px;
                margin: 0 auto;
                margin-top: 40px;
                li{
                    width: 260px;
                    box-sizing: border-box;
                    height: 46px;
                    line-height: 46px;
                    font-size: 20px;
                    color: #fff;
                    border-radius: 4px;
                    border:1px solid #3c4048;
                    text-align: center;
                    float: left;
                    margin-right: 18px;
                    cursor: pointer;
                }
                li:nth-last-child(1){
                    margin-right: 0px;
                }
                .active{
                    border-radius: 4px;
                    background-color: rgb(60, 64, 72);
                    box-shadow: 0px 10px 24px 0px rgba(1, 1, 1, 0.6);
                    border:none;

                }
            }

        }
        .phaseBox{
            width: 1280px;
            margin: 0 auto;

            .introCtn{
                width:1280px;
                margin:  0 auto;
                padding-bottom: 80px;
                .leftImg{
                    width: 665px;
                    float:left;
                    min-height: 100px;
                    position: relative;

                    .phase01{
                        height: auto;
                        display: block;
                        margin-left: 140px;
                        padding-top: 75px;
                        width: 463px;
                    }
                    .usdx{
                        width: 84px;
                        height: 84px;
                        display: block;
                        position: absolute;
                        right: 77px;
                        top: 143px;

                    }
                    .usdt{
                        width: 76px;
                        height: 73px;
                        display: block;
                        position: absolute;
                        top: 172px;
                        left: 254px;
                    }

                    .phase03{
                        height: auto;
                        display: block;
                        width: 484px;
                        margin-top: 67px;
                        margin-left: 148px;

                    }
                }
                .intro-line{
                    position: relative;
                    width: 467px;
                    margin-left: 140px;
                    margin-top: 75px;
                    img{
                        display: block;
                        width: 100%;
                    }
                    .shadeImage{
                        position: absolute;
                        left: 0;
                        top: 20px;
                        width: 467px;
                    }
                    .torightBig{
                        overflow: hidden;
                        background: transparent;
                    }

                }
                .rightCtn{
                    margin-top: 70px;
                    float:left;
                    .sectionCtn{
                        h3{
                            font-weight: normal;
                            font-size: 27px;
                            margin-bottom: 20px;
                        }
                        p{
                            font-size: 16px;
                            line-height: 22px;
                            margin-top: 10px;
                        }
                    }
                    .sectionCtn:nth-child(2){
                        margin-top: 20px;
                    }
                }
            }
        }
    }
    .scaleUSDT {
        animation: scaleUSDT 8s infinite;
    }
    .scaleUSDX {
        animation: scaleUSDX 8s infinite;
    }

    @keyframes scaleUSDT{
        0%{
            transform:scale(1,1)
        }

        75%{
            transform:scale(0,0)
        }
        100%{
            transform:scale(0,0)
        }
    }

    @keyframes scaleUSDX{
        0%{
            transform:scale(0.25,0.25)
        }
        25%{
            transform:scale(0.5,0.5)
        }
        50%{transform:scale(0.75,0.75)}
        75%{
            transform:scale(1,1);
        }
        100%{
            transform:scale(1,1);
        }
    }

    @media screen and (max-width: 1280px) {
        .introBox .phaseBox{
            width: 1200px;
            overflow: hidden;
        }
    }

    @media screen and (max-width: 720px) {
        .introBox{

        }
    }
</style>
