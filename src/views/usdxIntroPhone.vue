<template>
    <div class="introPhoneoBox">
        <Head htitle="USDX" fontSize="29"></Head>
        <h3>The New Era of Stablecoin</h3>

        <div class="sect01">
            <!--<img src="../../images/phase02.png"/>-->
            <div class="sectBox02">
                <div class="intro-line">
                    <img src="../../images/line_icon_bg.png" class=""/>
                    <div class="torightBig">
                        <img src="../../images/line_icons.png" class="phase-line-baseimg shadeImage"/>
                    </div>
                </div>
            </div>
            <h2>Bottom-Up Revolution</h2>
            <div class="conts">
                <h3>Phase 1: Revolution Accessible to Everyone</h3>
                <p>During Phase 1, tokens will be produced based on Ethereum ERC 20, called USDX. Every individual can join USDX’s ecosystem to contribute in this stablecoin revolution.</p>
            </div>

            <div class="conts mt20">
                <h3>Phase 2: Independent Public Chain Ensures The Revolution</h3>
                <p>During Phase 2, an independent public chain will be created, called USDY. Previous Holders with USDX will be awarded  USDY equal to their USDX and enjoy the ultimate stabilization reached by its self-balancing mechanism.</p>
            </div>
        </div>

        <div class="sect01">
            <img src="../../images/phase003.gif" class="phase003"/>
            <h2>Extreme Stabilization</h2>
            <div class="conts">
                <h3>Intelligent Algorithmic Monetary Control</h3>
                <p>Based on historical dataset to implement algorithmic control.</p>
                <p>1. Adjust Total Quantity Of Money In The Economy (M)</p>
                <p>2. Adjust The Velocity Of Money (V)</p>
                <p>With E represents the exchange rate of USDY to USD, if E is greater than 1, we need to increase M or increase V, so that E goes down to 1; if E is less than 1, we need to decrease M or decrease V, so that E goes up to 1.</p>

            </div>

            <div class="conts mt20">
                <h3>Diversified Mechanisms Adjusting M & V</h3>
                <p>Public chain maintains diversified mechanisms.</p>
                <p>1.Variable Block Reward</p>
                <p>2.Mining Lock</p>
                <p>3.Variable Transaction Fee</p>
            </div>

        </div>

        <div class="sect01">
            <!--<img src="../../images/phase01.png" class="phase01"/>-->
            <div class="phase01Img">
                <img src="../../images/phase01.png" class="phase01"/>
                <img src="../../images/usdt-icon.png" class="usdt scaleUSDT"/>
                <img src="../../images/usdx-icon.png" class="usdx scaleUSDX">
            </div>
            <h2>Innovative De-Commerce</h2>
            <div class="conts">
                <h3>Kill the Centralized Mechanism</h3>
                <p>1. Tether can release USDT without any collateral and perform as a centralized entity.</p>
                <p>2. With USDX’s absolute decentralized system, we build a healthy and organic de-commerce ecosystem.</p>
            </div>

            <div class="conts mt20">
                <h3>No Collateral No Fraud and No Risk</h3>
                <p>1. Fiat currency as collateral have to be placed in one bank account and the bank account can be frozen at any time  for fraud.</p>
                <p>2. Cryptocurrency as collateral is extremely volatile, and can easily destroy the market before the stablecoin is widely used.</p>
            </div>
        </div>
    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    // require styles
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
        computed: {

        },
        components:{
            Head,
        }
    }
</script>


<style lang="scss">
    .introPhoneoBox{
        padding-bottom: 40px;
        h3{
            font-size: 28px;
            font-weight: normal;
            text-align: center;
            margin-top: -14px;
            width: 100%;
        }
        .sect01{
            width: 330px;
            margin: 0 auto;
            img{
                width: 294px;
                display: block;
                margin:0 auto;
                margin-top: 80px;

            }
            .phase003{
                width: 330px;
                display: block;
                margin: 0 auto;
                margin-top: 40px;
                margin-left: -16px;
                margin-bottom: 10px;
            }
            h2{
                font-size: 23px;
                color: #09cbcd;
                font-weight: normal;

            }
            .conts{
                h3{
                    font-size: 16px;
                    font-weight: normal;
                    text-align: left;
                    margin-top: 12px;
                    margin-bottom: 7px;

                }
                p{
                    font-size: 10px;
                    line-height: 12px;
                    margin-top: 4px;

                }
            }
            .mt20{
                margin-top: 20px;
            }
        }

    }
    .sectBox02{
        width: 294px;
        height: 193px;
        position: relative;
        padding-bottom: 14px;
        .intro-line{
            .shadeImage {
                position: absolute;
                left: 0;
                top: 6px;
                width: 293px;
                margin-top: 0px;
            }
            .torightBig {
                overflow: hidden;
                background: transparent;
            }
        }
    }
    .introPhoneoBox{
        .sect01{
            .phase01Img{
                position: relative;
                .usdx{
                    width: 46px;
                    height: 46px;
                    display: block;
                    position: absolute;
                    right: 33px;
                    top: -33px;

                }
                .usdt{
                    width: 43px;
                    height: 43px;
                    display: block;
                    position: absolute;
                    top: -14px;
                    left: 95px;
                }
            }
        }
    }


    @media screen and (max-width: 720px) {
        .introPhoneoBox{

        }
    }
</style>
