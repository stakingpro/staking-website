<template>
    <div class="allocateBox">


        <Head htitle="TOKEN MODEL"  lineHeight="1"></Head>
        <div class="ctnBox mobileHide">

            <span class="one item">Early shareholders</span>
            <span class="two item">Community</span>
            <span class="four item">Team</span>
            <span class="five item">Partnerships</span>
            <span class="six item">Market</span>
            <span class="item oner">2%</span>
            <span class="item twor">51%</span>
            <span class="item fourr">20%</span>
            <span class="item fiver">10%</span>
            <span class="item sixr">17%</span>
            <div class="middleBox">
                <h3>Total Issuance</h3>
                <h2>50 Billion</h2>
            </div>

        </div>
        <div class="mobileShow">
            <div class="ctnBoxB">
                <img src="images/product/token_issue.png"/>
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
            Head
        }
    }
</script>

<style lang="scss">
    .allocateBox{
        background: #2c2f35;
        .ctnBox{

            padding-bottom: 60px;
            background: url("../../images/product/Issuance002.png");
            background-repeat: no-repeat;
            background-position: top center;
            width: 1200px;
            height: 700px;
            margin: 0 auto;
            margin-top: 90px;
            background-size: 150%;
            position: relative;
            .item{position: absolute;font-size: 26px; line-height: 28px;}
            .one{
                left: 804px;
                top:48px;
            }
            .oner{
                left: 804px;
                top:10px;
                font-size: 28px;
            }
            .two{
                left: 855px;
                top:300px;
            }
            .twor{
                left: 855px;
                top: 268px;
                font-size: 28px;
            }
            .three{
                left: 645px;
                top:425px;
            }
            .threer{
                left:642px;
                top:390px;
                font-size: 28px;
            }
            .four{
                left: 248px;
                top:383px;
            }
            .fourr{
                font-size: 28px;
                left: 330px;
                top:383px;
            }
            .five{
                left: 130px;
                top:220px;
            }
            .fiver{
                left:290px;
                top:220px;
                font-size: 28px;
            }
            .six{
                top:80px;
                left: 240px;

            }
            .sixr{
                top:80px;
                left: 344px;
                font-size: 28px;
            }
            .middleBox{
                /*margin-top: 40px;*/
                position: absolute;
                left: 498px;
                text-align: center;
                top:210px;
                h3{color:#FFF;font-size: 28px;font-weight: normal;}
                h2{color:#FFF;font-size: 50px;
                    font-weight: 500;margin-top: 12px;}
            }
        }

    }

    @media screen and (max-width: 720px) {
        .ctnBoxB{
            margin-top: 60px;
            padding-bottom: 60px;
            img {
                display: block;
                width: 100%;
                height: auto;
                margin: 0 auto;
            }

        }

    }
</style>
