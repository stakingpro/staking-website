<template>
    <div class="teamBox">
        <Head htitle="TEAM"></Head>

            <div class="teamBg mobileHide">
                <i class="icon iconfont icon-team1"></i>
            </div>
            <div class="teamMember">
                <!--team one-->
                <div class="itemOne clearfix">
                    <div class="intro">
                        <h2>
                            <i class="icon iconfont icon-one big_number_font"></i>
                            &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Richard Tiutiun</span></h2>
                        <p class="mt2">Fanatical genius of blockchain <br/>technology and hacker born in Ukraine</p>
                        <p>Designed and developed XOR project<br/>and stablecoin lab after drop out from <br/> UC Berkley</p>
                        <p>Focus on the research of next generation <br/>of currency </p>
                    </div>
                    <div class="teamPic">
                        <img src="images/team_one.png"/>
                    </div>
                    <span class="bigCapitial"></span>
                </div>
                <div class="height56 height_moblie_10"></div>
                <!--team two-->
                <div class="itemTwo clearfix">
                    <div class="intro ">
                        <h2>
                            <i class="icon iconfont icon-two big_number_font"></i>
                            &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Lucas Porco</span></h2>
                        <p>Experienced lawyer focus on the<br/>compliance of blockchain and<br/>cryptocurrency's compliance to regulations </p>
                        <p>Ph.D candidate of Law at University of <br/>Toronto </p>
                        <p>Top-level participation in the design of <br/>legal frameworks for several <br/>cryptocurrencies </p>
                    </div>
                    <div class="teamPic">
                        <img src="images/team_two.png"/>
                    </div>
                    <span class="bigCapitial"></span>
                </div>
                <!--team three-->
                <div class="itemThree clearfix">
                    <div class="intro">
                        <h2>
                            <i class="icon iconfont icon-three big_number_font"></i>
                            &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Michael Gord</span></h2>
                        <p>Professional blockchain consultant<br/>expert and product strategy expert</p>
                        <p>In charge of strategic planning, business<br/>expansion and cooperation with <br/>regulators, banks and other institutions</p>
                    </div>
                    <div class="teamPic">
                        <img src="images/team_three.png"/>
                    </div>
                    <span class="bigCapitial"></span>
                </div>
                <!--team four-->
                <div class="itemFour clearfix">
                    <div class="intro">
                        <h2>
                            <i class="icon iconfont icon-four big_number_font"></i>
                            &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Dennis S. Lee</span></h2>
                        <p>Serial entrepreneur and crypto <br/>evangelist </p>
                        <p>INK Business Developer</p>
                        <p>Talented in marketing and branding</p>
                    </div>
                    <div class="teamPic">
                        <img src="images/team_four.png"/>
                    </div>
                    <span class="bigCapitial"></span>
                </div>
            </div>
        </div>

</template>

<script type="text/javascript">

    import Head from './head';

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
        }
    }
</script>


<style lang="scss">
    .teamBox{
        //background-color: #1d1f22;
        position: relative;
        .teamBg{
            .icon-team1{
                font-weight: bold;
                font-size: 130px;
                position: absolute;
                right: 10px;
                top:116px;
                opacity: 0.01;
            }


        }
        .teamMember{
            width: 960px;
            margin: 0 auto;
            margin-top: 90px;
            padding-bottom: 210px;
            .intro{
                position: relative;
                z-index: 2;
                .title{
                    font-size: 24px;
                    font-weight: normal;
                }
            }
            p{
                font-size: 16px;
                color: #999999;
                line-height: 22px;
                margin-top: 10px;
            }
            .mt2{margin-top: 2px;}
            .itemOne{
                position: relative;
                height: auto;
                padding-left: 97px;
                .intro{
                    font-size: 15px;
                    width: 298px;
                    text-align: left;
                    float: left;
                    padding-top: 40px
                }
                .bigCapitial{
                    position: absolute;
                    width: 169px;
                    height: 219px;
                    display: block;
                    background: url("../../images/r_big_icon.png") no-repeat;
                    background-size: 163px 211px;
                    left: 325px;
                    top:152px;
                }
                img{
                    display: block;
                    padding-left:26px;
                    width: 215px;
                    height: 204px;
                }
            }
            .itemTwo{
                height:438px;
                position: relative;
                float: right;
                margin-right: 100px;
                margin-top: 40px;
                .intro{
                    font-size: 15px;
                    width: 296px;
                    text-align: left;
                }
                .teamPic{
                    padding-top: 16px;
                    padding-left: 38px;
                }
                img{
                    width: 202px;
                    height: 202px;
                }
                .bigCapitial{
                    position: absolute;
                    width: 147px;
                    height: 225px;
                    display: block;
                    background: url("../../images/l_big_icon.png") no-repeat;
                    background-size: 147px 225px;
                    right: 180px;
                    top: 292px;
                }
            }
            .itemThree{
                height: 444px;
                position: relative;
                padding-top: 120px;
                .intro{
                    font-size: 15px;
                    width: 298px;
                    text-align: left;
                    margin-top: 300px;
                    margin-left: 110px;
                }
                .teamPic{

                    img{
                        display: block;
                        position: absolute;
                        top: 200px;
                        left: 168px;
                        width: 207px;
                        height: 203px;
                    }
                }
                .bigCapitial{
                    width: 175px;
                    height: 168px;
                    display: block;
                    background: url("../../images/m_big_icon.png") no-repeat;
                    background-size: 175px 168px;
                    position: absolute;
                    top:130px;
                    left:0px;
                }
            }
            .itemFour{
                position: relative;
                margin-top: 100px;
                .intro{
                    font-size: 15px;
                    width: 296px;
                    text-align: left;
                    float: left;
                    margin-top: 72px;
                    margin-left: 178px;
                }
                .teamPic{
                    float: left;
                    margin-left: 21px;
                    margin-top: 156px;
                    img{
                        position: absolute;
                        display: block;
                        right: 130px;
                        top:36px;
                        width: 229px;
                        height: 231px;
                    }
                }
                .bigCapitial{
                    position: absolute;
                    width: 152px;
                    height: 197px;
                    display: block;
                    background: url("../../images/d_big_icon.png") no-repeat;
                    background-size: 152px 197px;
                    left: 446px;
                    top:-26px;
                }
            }
        }
    }

    @media screen and (max-width: 720px) {
        .teamBox{
            .teamMember{
                padding-bottom: 48px;
                margin-top: 40px;
            }

        }
    }
</style>
