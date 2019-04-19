<template>
    <div class="partnerMemberMobileBox">
        <Head htitle="Investors"></Head>

        <ul class="clearfix">
            <li><a href="http://www.futuremoneyventure.com/" target="_blank">
                <img class="one" src="../../images/partners/future_money_icon.png"/>
            </a> </li>
            <li><a href="https://qtum.org/en/" target="_blank">
                <img class="two" src="../../images/partners/qtum_icon.png"/>
            </a> </li>
            <li><a href="https://tokenfunder.com/" target="_blank">
                <img class="three" src="../../images/partners/token_found.png"/>
            </a> </li>
            <li><a href="http://www.chinabridgecapital.com/">
                <img class="four" src="../../images/partners/xin_gen_icon.png"/>
            </a> </li>
        </ul>

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
    .partnerMemberMobileBox{
        ul{
            width: 960px;
            margin: 0 auto;
            margin-top: 80px;
            padding-bottom: 200px;
            li{

                float: left;

            }
            li:nth-child(1){
                width: 250px;
                img{
                    width: 188px;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                    margin-top: 12px;
                }
            }
            li:nth-child(2){
                width: 260px;
                img{
                    width: 157px;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                    margin-top: 8px;
                }

            }
            li:nth-child(3){
                width: 206px;
                img{
                    width: 110px;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                }

            }
            li:nth-child(4){
                width: 244px;
                img{
                    width: 156px;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                }
            }

        }

    }

    @media screen and (max-width: 720px) {
        .partnerMemberMobileBox{
            ul{
                width: 100%;
                padding: 0 12px;
                box-sizing: border-box;
                margin-top: 20px;
                padding-bottom: 50px;

                li{
                    width: 50%;
                    box-sizing: border-box;
                    padding: 0 10px;
                    float: left;
                    height: 64px;
                    margin-top: 12px;
                    a{
                        display: block;
                        width: 100%;
                        box-sizing: border-box;
                        border:1px solid #45474c;
                        height: 64px;

                        .one{
                            width: 125px;
                            margin-top: 18px;
                        }
                        .two{
                            width: 115px;
                            margin-top: 14px;
                        }
                        .three{
                            width: 80px;
                            margin-top: 8px;

                        }
                        .four{
                            width: 158px;
                            margin-top: 12px;

                        }
                    }

                }
                li:nth-child(1){
                    width: 50%;

                }
                li:nth-child(2){
                    width: 50%;

                }
                li:nth-child(3){
                    width: 50%;

                }
                li:nth-child(4){
                    width: 50%;

                }
            }


        }
    }
</style>
