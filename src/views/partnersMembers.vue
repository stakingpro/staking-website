<template>
    <div class="partnerMemberBox">
        <Head htitle="Investors"></Head>

        <ul class="clearfix">
            <li><a href="http://www.futuremoneyventure.com/" target="_blank">
                <img src="../../images/partners/future_money_icon.png"/>
            </a> </li>
            <li><a href="https://qtum.org/en/" target="_blank">
                <img src="../../images/partners/qtum_icon.png"/>
            </a> </li>
            <li><a href="https://tokenfunder.com/" target="_blank">
                <img src="../../images/partners/token_found.png"/>
            </a> </li>
            <li><a href="http://www.chinabridgecapital.com/">
                <img src="../../images/partners/xin_gen_icon.png"/>
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
    .partnerMemberBox{
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
                    width: 280px;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                }
            }

        }

    }

    @media screen and (max-width: 720px) {
        .partnerMemberBox{


        }
    }
</style>
