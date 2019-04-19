<template>
    <div class="telegramBox">
        <!--<a href="https://t.me/USDXBlockchain" target="_blank">JOIN OUR TELEGRAM</a>-->
        <!--<a href="https://t.me/USDXBlockchain" class="circle mobileHide"></a>-->
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>


<style lang="scss">
    .telegramBox{
        position: relative;

        a{

            border-radius: 19px;
            background-color: rgb(33, 35, 40);
            border:1px solid #05e1e3;

            width: 204px;
            height: 38px;
            z-index: 3;
            display: block;
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 12px;
            color: #fff;
            line-height: 38px;
            box-sizing: border-box;
            padding-right: 34px;
            text-align: center;

            cursor: pointer;
        }
        .circle{
            border-radius: 50%;
            background-color: #05e1e3;
            width: 50px;
            height: 50px;

            position: fixed;
            bottom: 15px;
            right: 20px;
            z-index: 4;
            background-image: url("../../images/telegram_icon.png");
            background-repeat: no-repeat;
            background-position: 9px center;
            background-size: 27px 21px;


        }
    }

    /*720*/
    @media screen and (max-width: 720px) {
        .telegramBox{
            a{
                border-width: 1px;
                border-color: rgb(5, 225, 227);
                border-style: solid;
                border-radius: 2px;
                background-color: rgb(32, 35, 38);
                width: 112px;
                height: 22px;
                z-index: 999;
                display: block;
                position: fixed;
                top: 16px;
                right: 48px;
                font-size: 7px;
                color: #fff;
                line-height: 22px;
                box-sizing: border-box;
                padding-right: 26px;
                text-align: center;
                background-image: url("../../images/telegram_icon.png");
                background-repeat: no-repeat;
                background-position: 87px center;
                background-size: 14px auto;
                cursor: pointer;
            }
            .circle{
                display: none;


            }
            .mobileHide{
                display: none;
            }
        }


    }

</style>