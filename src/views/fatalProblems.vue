<template>
    <div class="fatalBox">


        <Head htitle="PoS: Trillion Dollar Network"  lineHeight="2"></Head>
        <p class="desc"></p>

        <div class="ctnBox">
            <p class="mobileHide">At least 25% of the total cryptocurrency market will use proof-of-stake (PoS) as</p>
            <p class="mobileHide">a security model by the end of 2019. Currently almost $5bn worth of crytocurrency is staked</p>
            <p class="mobileHide">and we believe that we are only observing the start of the long-awaited Proof-of-Stake era.</p>

            <!--<p class="mobileShow">At least 25% of the total cryptocurrency market will use proof-of-stake (PoS) as a security model by the end of 2019. Currently almost $5bn worth of crytocurrency is staked and we believe that we are only observing the start of the long-awaited Proof-of-Stake era.</p>-->
            <p class="mobileShow">At least 25% of the total Blockchain market will use proof-of-stake (PoS) as a consensus mechanism by the end of 2019. However, all of these PoS ecosystems, they all need the most fundamental building block which is a node-runner, they all need a service like STAKING.PRO
            </p>
        </div>

        <!--scandals-->

        <div class="scanBox">
            <div class="title">
                <Head htitle="ARCHITECTURE"></Head>
                <!--<h2></h2>-->
                <!--<i class="line"></i>-->
            </div>
            <div class="architectureBox">
                <img src="../../images/product/architech4.png"/>
                <p class="arch">STAKING ARCHITECTURE</p>
                <div class="content">
                    <p><span style="visibility: hidden;">空白</span>With the cutting edge technology like artificial intelligence, edge computing, and Blockchain technology, STAKING is able to ensure Blockchain with PoS mechanism operates with the highest level of security and efficiency.That's why STAKING is going to be the next generation of node-runner and asset manager in the Blockchain era.
                    </p>
                </div>
            </div>


        </div>

    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Head from './head';
    import fatalMobileSwiper from './fatalMobileSwiper';

    export default {
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
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
            swiperSlide,
            fatalMobileSwiper
        }
    }
</script>

<style lang="scss">
    .fatalBox{
        background: #22252e;
        padding-top: 80px;
        .height50{
            height: 50px;
        }
        .desc{
            font-size: 50px;
            color: #fff;
            text-align: center;
            line-height: 22px;
            margin-top: 15px;
        }
        .ctnBox{
            margin-top: 50px;
            p{font-size: 24px;line-height: 34px;text-align: center;}
        }
        .itemBox{
            width: 960px;
            margin: 0 auto;
            div{
                h2{
                    font-size: 28px;
                    color: #fff;
                    font-weight: normal;
                    line-height: 30px;


                }
                p{
                    font-size: 16px;
                    color: #fff;
                    line-height: 26px;
                    margin-top: 12px;

                }
                img{

                }
            }
            .left{
                width: 494px;
                float: left;
                padding-left: 62px;
                img{
                    width: 338px;
                    height: auto;
                    margin-left: 18px;
                }
                h2{
                     margin-top: 60px;
                }
            }
            .right{
                width: 404px;
                float: left;
                img{
                    width: 344px;
                    height: auto;
                    margin-top: 106px;
                    margin-left: 14px;
                }
                h2{
                    margin-top: 104px;
                }

            }
        }
        .architectureBox{
            width: 1066px;
            margin: 0 auto;
            margin-top: 45px;
            img{
                width: 960px;
                margin: 0 auto;
                margin-left: 60px;

            }
            .arch{
                text-align: center;
                font-size: 16px;
                margin-top: -49px;

            }
            .content{
                margin-top: 36px;
                margin-left: 108px;
                width: 828px;
                line-height: 34px;
                font-size: 20px;
                p{
                    text-align: center;
                }

            }
        }
        .skrBox{
            .contents{
                text-align: center;
                color:#FFF;
                line-height: 34px;
                font-size: 20px;
                margin-top: 40px;
                padding-bottom: 80px;
            }
        }

    }
    .scanBox{
        padding-bottom: 150px;
        margin-top: 140px;
        .title{
            text-align: center;
        }
        h2{
            font-size: 28px;
            font-weight: normal;
            text-align: center;
        }
        .line{
            display: inline-block;
            width: 44px;
            height: 1px;
            background: #05e1e3;
            text-align: center;
            margin-top: 18px;
        }
        .scrollBox{

            width: 960px;
            height: 234px;
            margin: 0 auto;
            position: relative;
            margin-top: 40px;
            ;
            .swiper-container{
                height: 234px;

                .swiper-slide{
                    width: 960px;
                    .linkBox{
                        width: 477px;
                        height: 234px;
                        border: 1px solid #444444;
                        box-sizing: border-box;
                        float: left;
                        padding-left: 14px;
                        cursor: pointer;
                        color: #fff;
                    }
                    .linkBox:hover{
                        border-color: #05e1e3;
                    }
                    .mr6{
                        margin-right: 6px;
                    }
                    .content{

                        h3{
                            font-weight: normal;
                            font-size: 22px;
                            line-height: 22px;
                            margin-top: 12px;
                        }
                        .fromBox{
                            margin-top: 6px;
                            .date{
                                font-size: 12px;
                                color:#fff;
                                display: inline-block;
                                margin-right: 16px;
                                padding-left: 20px;
                                background: url("../../images/time_icon.png") no-repeat;

                            }
                            .from{
                                font-size: 14px;
                                color:#fff;
                            }
                        }
                        .ctn{
                            margin-top: 8px;
                            font-size: 16px;
                            line-height: 22px;
                        }
                        .logo{
                            height: 28px;
                            width: auto;
                            margin-top: 18px;

                        }
                    }
                    .content:first-child{
                        margin-right: 6px;
                    }

                }
            }
            .swiper-button-prev{
                left: -87px;
                background: url("../../images/left_icon.png") no-repeat;
                width: 69px;
                height: 69px;
                cursor: pointer;
            }
            .swiper-button-next{
                right: -87px;
                background: url("../../images/right_icon.png") no-repeat;
                width: 69px;
                height: 69px;
                cursor: pointer;
            }
        }

    }
    @media screen and (max-width: 720px) {
        .fatalBox{
            padding-top: 0px;
            .ctnBox{
                margin-top: 30px;
                p{font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                    padding-left: 12px;
                    padding-right: 12px;
                    /*margin-top: 10px;*/
                }
            }
            .desc{
                width: 294px;
                text-align: center;
                font-size: 10px;
                margin: 0 auto;
                margin-top: 10px;
                line-height: 14px;
                br{
                    display: none;
                }
            }
            .itemBox{
                width: 352px;
                margin: 0 auto;
                div{
                    h2{
                        font-size: 13px;
                        line-height: 22px;


                    }
                    p{
                        font-size: 10px;
                        line-height: 13px;
                        margin-top: 3px;
                        br{
                            display: none;
                        }

                    }
                    .mobileShow{
                        br{
                            display: block;
                        }
                    }
                    img{

                    }
                }
                .left{
                    width: 180px;
                    padding-left: 0px;
                    img{
                        width: 172px;
                        margin-left: 10px;
                    }
                    h2{
                        margin-top: 42px;
                        margin-left: 10px;

                    }
                    p{
                        margin-left: 10px;
                    }
                }
                .right{
                    width: 172px;
                    img{
                        width: 160px;
                        margin-left: -5px;
                        margin-top: 50px;
                    }
                    h2{
                        margin-top: 76px;
                        margin-left: 20px;

                    }
                    p{
                        margin-left: 20px;
                    }

                }
            }
            .architectureBox{
                width: 100%;
                margin: 0 auto;
                margin-top: 20px;
                box-sizing: border-box;
                padding-left: 12px;
                img{
                    display: block;
                    /*width: 960px;*/
                    width: 100%;
                    margin: 0 auto;
                    margin-left: 0px;

                }
                .arch{
                    text-align: center;
                    font-size: 10px;
                    margin-top: -12px;

                }
                .content{
                    margin-top: 18px;
                    padding-bottom: 40px;
                    margin-left: 0px;
                    width: 100%;
                    line-height: 24px;
                    font-size: 16px;
                    padding-left: 12px;
                    padding-right: 12px;
                    box-sizing: border-box;

                }
            }
            .skrBox{
                .contents{
                    text-align: center;
                    color:#FFF;
                    line-height: 24px;
                    font-size: 16px;
                    margin-top: 20px;
                    padding-bottom: 40px;
                    padding-left: 12px;
                    padding-right: 12px;
                    br{
                        display: none;
                    }
                }
            }

        }


        .scanBox{
            margin-top: 40px;
            padding-bottom: 0px;
            .title{
            }
            h2{
                font-size: 16px;
            }
            .line{
                width: 26px;
                height: 1px;
                margin-top: 10px;
            }
            .scrollBox{
                width: 280px;
                margin-top: 24px;

                .swiper-container{

                    .swiper-slide{
                        .linkBox{
                            width: 280px;
                            height: 140px;
                            box-sizing: border-box;
                            float: left;
                            padding-left: 16px;
                            cursor: pointer;
                            color: #fff;
                            overflow: hidden;
                        }
                        .linkBox:hover{
                            border-color: #444444;
                        }
                        .content{
                            h3{
                                font-size: 13px;
                                line-height: 16px;
                                margin-top: 6px;
                                br{
                                    display: none;

                                }
                            }
                            .fromBox{
                                margin-top: 0px;
                                .date{
                                    font-size: 8px;
                                    background-size: 9px auto;
                                    margin-right: 8px;
                                    padding-left: 14px;
                                }
                                .from{
                                    font-size: 9px;

                                }
                            }
                            .ctn{
                                font-size: 10px;
                                line-height: 13px;
                                margin-top: 4px;
                                height: 40px;
                                overflow: hidden;
                                br{
                                    display: none;
                                }
                            }

                            .logo{
                                height: 14px;
                                width: auto;
                                margin-top: 14px;

                            }

                            h2{

                            }
                        }
                        .content:first-child{
                        }
                    }
                }
                .swiper-button-prev_fm{
                    background: url("../../images/left_icon.png") no-repeat;
                    width: 36px;
                    height: 36px;
                    background-size: 36px auto;
                    left: -42px;
                    top:50px;
                    position: absolute;
                }
                .swiper-button-next_fm{
                    background: url("../../images/right_icon.png") no-repeat;
                    width: 36px;
                    height: 36px;
                    background-size: 36px auto;
                    right: -42px;
                    top:50px;
                    position: absolute;
                }
            }

        }
    }
</style>
