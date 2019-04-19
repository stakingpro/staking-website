<template>
    <div class="teamBox">
        <Head htitle="ADVISORS"></Head>

        <div class="advisorMemberBox">
            <div style="height: 90px" class="mobileHide"></div>
            <ul class="clearfix">
                <li>
                    <img src="../../images/advisor/advisor01.png" />
                    <div class="memberItem">
                        <h2 class="title mobileHide">James Lee</h2>
                        <!--<h3 class="degree mobileHide">Founder of Qtum</h3>-->
                        <h2 class="title mobileShow">James Lee</h2>
                        <div class="desc">
                            <p>Manageing Director of Sinolion Capital Group and China Bridge Capital, Investment Consultant of Government of Singapore Investment Corporation. He served as China Chief Representative of Singapore Economic Development Board, VP and GM (China) of Vertex Investment Venture, the VC armed of Temasek Group.</p>
                        </div>
                    </div>

                </li>
                <li>
                    <img src="../../images/advisor/advisor02.png"/>
                    <div class="memberItem">
                        <h2 class="title mobileHide">Eo Hao</h2>
                        <!--<h3 class="degree mobileHide">Founder of Bodhi</h3>-->
                        <h2 class="title mobileShow">Eo Hao</h2>
                        <div class="desc">
                            <!--<p>Founded Bodhi prediction market after gaining extensive working experience in IBM, Microsoft，Twitter and Tecent.</p>-->
                            <!--<p>Developer of Twitter for Android.</p>-->
                            <!--<p>Six years of cryptocurrency industry experience, with a Masters degree in machine learning and computer science.</p>-->
                            <p>Graduated from Columbia University and NanYang Technological University . Previously, he worked in several hedge fund and investment bank in New York and Beijing. He is a serial entrepreneur who has started multiple Fintech and Bitcoin startups in China & Indonesia. He has invested 30+ blockchain projects around the world since 2015 including Etherum .</p>
                        </div>
                    </div>

                </li>

                <li>
                    <img src="../../images/advisor/advisor03.png" />
                    <div class="memberItem">
                        <h2 class="title mobileHide">Steven Li</h2>
                        <!--<h3 class="degree mobileHide">CEO of TokenFunder</h3>-->
                        <h2 class="title mobileShow">Steven Li</h2>
                        <div class="desc">
                            <!--<p>CEO & Chief Token Officer of TokenFunder, a company with the mission to help Canada be a leader in blockchain technology.</p>-->
                            <p>Graduated from University of Toronto. Former Head of Investment at Ventech Capital, Qihu 360. He is experienced with equity financing, investor relations and  has invested in many unicorns. He is also the founder of  021 labs , a Blockchain incubator served over 40 projects around the world.</p>
                        </div>
                    </div>

                </li>

                <li>
                    <img src="../../images/advisor/advisor04.png" />
                    <div class="memberItem">
                        <h2 class="title mobileHide">Hartmut Michel</h2>
                        <!--<h3 class="degree mobileHide">Founder of Qtum</h3>-->
                        <h2 class="title mobileShow">Hartmut Michel</h2>
                        <div class="desc">
                            <p>He is a foreign academician of the Chinese academy of sciences and member of the Royal Academy of China. Foreign member of the Royal Netherlands Academy of Arts and Sciences in 1995. Foreign Member of the Royal Society (ForMemRS) in 2005.</p>
                        </div>
                    </div>

                </li>


            </ul>
        </div>

    </div>

</template>

<script type="text/javascript">

    import Head from './head';

    export default {
        data() {
            return {

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
    .advisorMemberBox{

        ul{
            width: 1150px;
            margin: 0 auto;
            padding-bottom: 120px;
            li{
                width: 270px;
                margin-right: 12px;
                height: 510px;
                background: #23262a;
                border-radius: 6px;
                float: left;
                margin-top: 48px;
                background: url("../../images/advisor/advisor_bg02.png") no-repeat;
                /*background-size: 480px auto;*/
                /*background-size: 270px 400;*/

                img{
                    display: block;
                    width: 126px;
                    height: auto;
                    margin: 0 auto;
                    margin-top: -65px;

                }
                .title{
                    font-size: 20px;
                    color: #fff;
                    text-align: center;
                    font-weight: normal;
                    margin-top: 20px;
                    line-height: 22px;
                }
                .degree{
                    font-size: 15px;
                    font-weight: normal;
                    text-align: center;
                    line-height: 18px;
                    color: #999;
                    margin-top: 6px;
                }
                .desc{

                    p{
                        font-size: 16px;
                        color: #999999;
                        line-height: 28px;
                        margin-top: 18px;
                        padding-left: 26px;
                        padding-right: 6px;
                        text-align: left;
                    }
                }
            }
            li:nth-child(4){
                margin-right: 0px;
            }

        }

    }

    @media screen and (max-width: 720px) {
        .advisorMemberBox{
            ul{
                width: auto;
                margin: 0 auto;
                padding-bottom: 120px;
                padding: 0 12px;
                li{
                    border-style: solid;
                    border-width: 1px;
                    border-color: rgb(69, 71, 76);
                    border-radius: 10px;
                    box-sizing: border-box;
                    width: 100%;
                    height: auto;
                    background: #23262a;

                    padding-bottom: 14px;
                    margin-top: 68px;
                    position: relative;

                    img{
                        display: block;
                        width: 94px;
                        height: 94px;
                        margin-left: 8px;
                        margin-top: 0px;
                        padding-top: 0px;
                        position: absolute;
                        right: 36px;
                        top:-48px;

                    }
                    .memberItem{
                        padding-left: 12px;
                        .title{
                            font-size: 12px;
                            color: #fff;
                            text-align: left;
                            font-weight: normal;
                            margin-top: 20px;
                            line-height: 14px;
                        }
                        .degree{
                            font-size: 12px;
                            font-weight: normal;
                            text-align: left;
                            line-height: 18px;
                            color: #999;
                            margin-top: 6px;
                        }
                        .desc{
                            margin-top: 16px;

                            p{
                                font-size: 11px;
                                color: #999999;
                                line-height: 13px;
                                margin-top: 8px;
                                padding-left: 0px;
                                padding-right: 6px;
                                text-align: left;
                            }
                        }
                    }

                }
                li:nth-child(4){
                    margin-right: 0px;
                }
                li:nth-child(5){height: auto}
                li:nth-child(6){height: auto}
                li:nth-child(7){height: auto}
                li:nth-child(8){
                    margin-right: 0px;
                    height: auto;
                }
            }

        }
    }
</style>
