<template>
    <div>
        <!--toast-->
        <!--<div class="toastBox" :class="{'active':showToast}">
            <div class="title">{{title}}</div>
            <div class="message">{{message}}</div>
        </div>-->
        <div class="shadowBox" :class="{'shadowStatus':showDialog}"></div>
        <div class="mailTipBox" :class="{'active':showDialog}">
            <i class="successIcon"></i>
            <h2>Congratulations！</h2>
            <p>Mail has been subscribed to success</p>
            <a href="javascript:;" @click="closeDialog()" class="confirmBtn">CONFIRM</a>
        </div>


        <div class="footerBox">
            <footer class="footerBox">
                <div class="wrapper clearfix">
                    <p class="bottomLogo">
                        <!--<i class="icon iconfont icon-USDX-logo"></i>-->
                        <i class="wl_logo_btn"></i>
                    </p>
                </div>
                <div class="subscribeSection">
                    <input type="text" v-model="email" class="inputBox" placeholder="Please enter your email address here"/>
                    <button class="subBtn" @click="submitEmail()">Subscribe</button>
                </div>
                <div style="clear:both;"></div>
                <!--<div class="clearfix linkBox">
                    &lt;!&ndash;&ndash;&gt;
                    <a href="mailto:contact@usdx.money" target="_blank"  class="icon iconfont icon-youxiang"></a>
                    <a href="https://twitter.com/NewMoneyUSDX" target="_blank"  class="icon iconfont icon-twitter"></a>
                    <a href="https://www.facebook.com/NewMoneyUSDX" target="_blank" class="icon iconfont icon-facebook"></a>
                    &lt;!&ndash;<a href="javascript:;" target="_blank" class="icon icon_msg"><i class="icon iconfont icon-mailbox"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_m"><i class="icon iconfont icon-medium"></i></a>&ndash;&gt;
                    <a href="https://github.com/USDXToken/USDX-token" target="_blank" class="icon iconfont icon-github"></a>
                    &lt;!&ndash;<a href="javascript:;" target="_blank" class="icon icon_reddit"><i class="icon iconfont icon-reddit"></i></a>&ndash;&gt;
                    <a href="https://t.me/USDXBlockchain" target="_blank" class="icon iconfont icon-emi"></a>
                </div>-->
                <div style="clear:both;"></div>

                <p class="copyRight">©️Staking 2019.All Rights Reserved.</p>
            </footer>
        </div>
    </div>

</template>

<script type="text/javascript">
    import axios from 'axios'
    // api https://github.com/axios/axios

    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    export default {
        data(){
            return {
                email:'',
                title:'',
                message:'',
                showToast: false,
                showDialog:false,
            }
        },
        methods: {
            submitEmail(){
                if(!reg.test(this.email)){
                    alert("Please input the correct email !");
                    return;
                }
                axios.get('https://usdx.money/web/api/joinUs',{
                    params: {
                        email: this.email
                    }
                }).then(res => {
                    console.log(res);
                    let json = res.data;
                    if(json && json.status =='successs'){
                        this.showDialog = true;
                    }else{
                        this.showDialog = true;
                        // alert("failed please try again!");

                    }
                }).catch(err => {
                    console.log(err);
                    this.showDialog = true;
                    // alert("server error!");
                });

            },
            closeDialog(){
                this.showDialog = false;

            },

            showDialog(){

                this.showDialog = true;
            }
        }
    }
</script>


<style lang="scss">
    .shadowBox{
        position: fixed;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.1;
        top:0;
        left: 0;
        display: none;
    }
    .shadowStatus{
        display: block;
    }
    .mailTipBox{
        display: none;
        border-radius: 5px;
        background-color: rgba(255, 255, 255,0.95);
        position: fixed;
        left: 50%;
        margin-left: -426px;
        top: 120px;
        width: 855px;
        height: 462px;
        z-index: 454;
        .successIcon{
            display: block;
            width: 90px;
            height: 90px;
            background: url("../../images/successIcon.png");
            background-repeat: no-repeat;
            margin: 0 auto;
            margin-top: 66px;
        }
        h2{
            font-weight: normal;
            font-size: 40px;
            color:#333333;
            text-align: center;
            margin-top: 35px;
        }
        p{
            font-size: 36px;
            color: #666;
            text-align: center;
            margin-top: 24px;

        }
        a{
            border-radius: 5px;
            background-color: rgb(31, 241, 251);
             width: 219px;
             height: 59px;
            color: #fff;
            text-align: center;
            display: block;
            margin: 0 auto;
            line-height: 59px;
            font-size: 24px;
            margin-top: 50px;

        }
        &.active{
            z-index: 10;
            //opacity: 1;
            display: block;
            animation: fadeIn 0.6s 0s both;
        }

    }
    .footerBox{
        width: 100%;
        padding-top: 34px;
        .bottomLogo{
            text-align: center;

            .wl_logo_btn{
                background: url("../../images/skr_logo.png");
                background-size: 285px auto;
                background-repeat: no-repeat;
                width: 285px;
                height: 120px;
                display: block;
                margin: 0 auto;
            }

        }
        .linkBox{
            text-align: center;
            margin: 0 auto;
            margin-top: 25px;
            width: 330px;
            height: 48px;
            display: block;
            overflow: hidden;
            .iconfont{
                font-size: 18px;
                color: #fff;
            }
            a{
                width: 66px;
                height: 44px;
                line-height: 44px;
                text-align: center;
                display: block;
                float: left;
                i{
                    text-align: center;
                }
            }
            a:hover{
                color:#06dde0;
            }
            a:last-child{
                margin-right: 0px;
            }
        }
        .copyRight{
            color:#cccccc;
            font-size: 14px;
            line-height: 15px;
            text-align: center;
            margin-top: 32px;
            padding-bottom: 60px;
        }
        .subscribeSection{
            width: 440px;
            margin: 0 auto;
            height: 28px;
            margin-top: 52px;
            .inputBox{
                margin: 0;
                padding: 0;
                border: none;
                float: left;
                line-height: 38px;
                padding-left: 14px;
                font-size: 14px;
                color: #cccccc;
                border-radius: 4px;
                background-color: rgb(60, 64, 72);
                width: 296px;
                height: 38px;
                box-shadow:none;
            }
            .subBtn{
                float: right;
                height: 38px;
                line-height: 38px;
                text-align: center;
                color: #ffffff;
                border: none;
                border-radius: 4px;
                background-color: rgb(5, 225, 227);
                width: 120px;
                height: 38px;
                font-size: 16px;
            }
        }
    }

    /*720*/
    @media screen and (max-width: 720px) {
        .footerBox{
            padding-top: 0px;
            .bottomLogo{
                img{
                    height: 56px;
                    width: 186px;
                }
                .icon-USDX-logo{
                    font-size: 66px;
                    margin-top: 8px;
                }
                .wl_logo_btn{
                    background-size: 114px auto;
                    height: 48px;
                    width: 114px;
                }
            }
            .linkBox{
                width: 230px;
                margin-top: 10px;
                a{
                    width: 46px;
                    .iconfont{
                        font-size: 20px;
                        margin: 0 10px;

                    }
                }
                a:last-child{margin-right: 0px;}
            }
            .copyRight{
                font-size: 13px;
                margin-top: 20px;
            }
            .subscribeSection{
                width: auto;
                padding-left: 24px;
                padding-right: 24px;
                position: relative;
                margin-top: 28px;
                .inputBox{
                    height: 24px;
                    line-height: 24px;
                    width: 100%;
                    display: block;
                    box-sizing: border-box;
                    font-size: 12px;
                    padding-left: 8px;
                    width: 240px;

                }
                .subBtn{
                    width: 80px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    font-size: 12px;
                    position: absolute;
                    top:0;
                    right: 24px;
                    //border-left:6px solid #292b31;


                }
            }
        }

    }

    .mailTipBox{
        display: none;
        border-radius: 5px;
        background-color: rgba(255, 255, 255,0.95);
        //opacity: 0.952;
        position: fixed;
        left: 50%;
        margin-left: -160px;
        top: 120px;
        width: 320px;
        /*height: 462px;*/
        height: 194px;
        z-index: 454;
        .successIcon{
            display: block;
            width: 50px;
            height: 50px;
            background: url("../../images/successIcon.png");
            background-repeat: no-repeat;
            background-size: 50px 50px;
            margin: 0 auto;
            margin-top: 12px;
        }
        h2{
            font-weight: normal;
            font-size: 18px;
            color:#333333;
            text-align: center;
            margin-top: 14px;
        }
        p{
            font-size: 16px;
            color: #666;
            text-align: center;
            margin-top: 12px;

        }
        a{
            border-radius: 5px;
            background-color: rgb(31, 241, 251);
            width: 219px;
            height: 59px;
            width:140px;
            height: 38px;
            color: #fff;
            text-align: center;
            display: block;
            margin: 0 auto;
            line-height: 38px;
            font-size: 16px;
            margin-top: 16px;

        }
        &.active{
            z-index: 10;
            //opacity: 1;
            display: block;
            animation: fadeIn 0.6s 0s both;
        }

    }
    
@keyframes fadeInRight{
    0%{opacity:0;
    transform:translateX(100%)}
    100%{opacity:1;
    transform:translateX(0)}
}
</style>