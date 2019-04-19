<template>
    <div class="skrTokenBox">


        <div class="skrBox">
            <div class="title">
                <Head htitle="SKR TOKEN"></Head>
            </div>

            <div class="contents">
                <p style="">SKR is a utility token created by STAKING platform. The utility of SKR composes of two different aspects.<br/> One the one hand, it rewards the people who stake on STAKING platform and encourage them to enhance the<br/> security of the network by stake more and longer. On the other hand, STAKING plans to use 20% of its profits<br/> each quarter to buy back and burn SKR until 50% of the total SKR supply (25 billion SKR) is burned.
                </p>

            </div>

        </div>

    </div>

</template>

<script type="text/javascript">
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
    .skrTokenBox{
        background: #2c2f35;
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
                margin-top: -16px;

            }
            .content{
                margin-top: 36px;
                margin-left: 108px;
                width: 828px;
                line-height: 34px;
                font-size: 20px;

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

    @media screen and (max-width: 720px) {
        .skrTokenBox{
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
                margin-top: 45px;
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
                    margin-top: 0px;

                }
                .content{
                    margin-top: 36px;
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
