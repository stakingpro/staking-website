<template>
    <div class="supportMemberBox">
        <Head htitle="R&D SUPPORT TEAM"></Head>

        <div>
            <div style="height: 90px" class="mobileHide"></div>
            <ul class="clearfix">
                <li>
                    <img src="../../images/support/support_001.png"/>
                    <div class="memberItem">
                        <h2 class="title">Tao Feng / Lead Researcher</h2>

                        <div class="desc">
                            <p>Founder of NewMargin Ventures, one of the most popular venture capitals in China</p>
                            <p>Was selected as one of the Top 25 Entrepreneurs in China by Fortune Magazine</p>
                            <p>With 16+years experience in venture investment, especially professional at high-tech product investment</p>
                        </div>
                    </div>

                </li>

                <li>
                    <img src="../../images/support/support_002.png" />
                    <div class="memberItem">
                        <h2 class="title">Steven Li / Researcher</h2>

                        <div class="desc">
                            <p>Graduated from University of Toronto</p>
                            <p>Serial entrepreneur and angel investor</p>
                            <p>Has founded and managed multiple hedge funds</p>
                            <p>Used to be the investment director at a large Internet company</p>
                        </div>
                    </div>

                </li>

                <li>
                    <img src="../../images/support/support_003.png" />
                    <div class="memberItem">
                        <h2 class="title">Hash Hao / Researcher</h2>
                        <div class="desc">
                            <p>Graduated from Columbia University</p>
                            <p>Serial entrepreneur and Fintech expert</p>
                            <p>Has been successfully created and existed a series of ventures</p>
                            <p>Used to work at investment banks and hedge funds in New York and Beijing</p>
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
    .supportMemberBox{
        ul{
            width: 964px;
            margin: 0 auto;
            padding-bottom: 120px;
            li{
                width: 300px;
                margin-right: 32px;
                height: 450px;
                background: #23262a;
                border-radius: 6px;
                float: left;
                margin-top: 48px;
                background: url("../../images/advisor/advisor_bg.png") no-repeat;
                background-size: 300px 450px;

                img{
                    display: block;
                    width: 164px;
                    height: auto;
                    margin: 0 auto;
                    margin-top: -90px;

                }
                .title{
                    font-size: 20px;
                    color: #fff;
                    text-align: center;
                    font-weight: normal;
                    margin-top: 28px;
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
                        line-height: 20px;
                        margin-top: 18px;
                        padding-left: 26px;
                        padding-right: 10px;
                        text-align: left;
                    }
                }
            }
            li:nth-child(3){
                margin-right: 0px;
            }

        }

    }

    @media screen and (max-width: 720px) {
        .supportMemberBox{
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
                    margin-top: 64px;
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
