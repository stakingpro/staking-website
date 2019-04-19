<template>
    <div class="fatalMoblieBox">
        <div class="scanBox">
            <div class="scrollBox">
                <div class="swiper-button-prev_fm" slot="button-prev"></div>
                <div class="swiper-button-next_fm" slot="button-next"></div>
                <!-- swiper -->
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <a class="linkBox mr6" href="https://www.cnbc.com/2018/02/02/tether-what-you-need-to-know-about-the-cryptocurrency-worrying-markets.html" target="_blank">
                            <div class="content">
                                <img class="logo" src="../../images/logo/cnbc.png"/>
                                <h3>'Devastating' Effects On The Market</h3>
                                <div class="fromBox">
                                    <span class="date">Feb 3, 2018</span>
                                </div>
                                <div class="ctn">
                                    "Tether printing moves the market appreciably; 48.8 percent of <br/>BTC's price rise in the period studied occurred in the two-hour <br/>periods following the arrival of 91 different tether grants to the <br/>Bitfinex wallet," 
                                </div>
                            </div>
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a class="linkBox" href="https://www.marketwatch.com/story/why-bitfinex-tether-are-raising-nagging-questions-in-the-cryptocurrency-market-2018-01-30" target="_blank">
                            <div class="content">
                                <img src="../../images/logo/mw_logo.png" class="logo"/>
                                <h3>Friedman LLP didn’t respond to calls or emails<br/>for comment.</h3>
                                <div class="fromBox">
                                    <span class="date">Jan 31, 2018</span>
                                </div>
                                <div class="ctn">
                                    “The ending of the audit has fueled criticisms of the cryptocurrency company and led to accusations that the $2.3 billion worth of USDT currently in circulation is not backed ...
                                </div>
                            </div>
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a class="linkBox mr6" href="https://www.coindesk.com/report-cftc-sends-subpoenas-bitfinex-tether/" target="_blank">
                            <div class="content">
                                <img class="logo" src="../../images/logo/codedesk.png"/>
                                <h3>CFTC Sends Subpoenas to Bitfinex, Tether</h3>
                                <div class="fromBox">
                                    <span class="date">Jan 30, 2018</span>
                                </div>
                                <div class="ctn">
                                    “The news comes days after CoinDesk reported that Tether's relationship with auditing firm Friedman LLC had "dissolved," though it still remains unclear which party moved to curtail the work. ”
                                </div>
                            </div>
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a class="linkBox" href="https://news.bitcoin.com/report-claims-48-8-btcs-price-rises-last-9-months-occurred-within-2-hours-91-usdt-issuances/" target="_blank">
                            <div class="content">
                                <img class="logo" src="../../images/logo/bitcoin_logo.png"/>
                                <h3>Report Finds Correlation Between USDT<br/>Issuances and BTC Price Moves</h3>
                                <div class="fromBox">
                                    <span class="date">Jan 28, 2018</span>
                                </div>
                                <div class="ctn">
                                    “The Tether Report, a pseudonymously authored analysis examining the speculative assertion that bitcoin price volatility is highly correlated to the issuance of new USDT, has claimed ...
                                </div>
                            </div>
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a class="linkBox" href="http://www.businessinsider.com/cryptocurrency-exchange-bitfinex-reportedly-subpoenaed-by-cftc-2018-1" target="_blank">
                            <div class="content">
                                <img class="logo" src="../../images/logo/business_logo.png"/>
                                <h3>Bitfinex and Tether, which share a CEO, have<br/>
                                    been accused of fraudulent behavior.</h3>
                                <div class="fromBox">
                                    <span class="date">Jan 30, 2018</span>
                                </div>
                                <div class="ctn">
                                    “The ending of the audit has fueled criticisms of the cryptocurrency company and led to accusations that the $2.3 billion worth of USDT currently in circulation is not backed ...
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>

            </div>

        </div>
    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next_fm',
                        prevEl: '.swiper-button-prev_fm'
                    }
                }
            }
        },

        mounted() {
        },
        methods: {

        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="scss">
    .fatalMoblieBox{
        box-sizing: border-box;
        width: 280px;
        height: 180px;
        margin: 0 auto;
        padding-bottom: 40px;
    }

</style>
