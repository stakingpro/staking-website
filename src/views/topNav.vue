<template>
    <div class="topNav">
        <i class="icon iconfont icon-USDX-logo"></i>
        <div @click="navTab" class="navBar"></div>
        <ul class="clearfix mobileHide">
            <li v-for="(item,index) in nav"><a href="javascript:;" :class="{'active':curpage==index}" @click="to(item,index)" class="anchor-hd">{{item.content}}</a></li>
        </ul>
        <div class="navtab-box" :class="showNav?'active':''">
            <div class="navtab" :class="showNav?'active':''">
                <div v-for="(item,index) in nav"><a href="javascript:;" :class="{'active':curpage==index}" @click="to2(item,index)" class="anchor-hd">{{item.content}}</a></div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {

            }
        },
        methods: {

        }
    }
</script>


<style lang="scss">
    .topNav{
        z-index: 100;
        height: 60px;
        width: 100%;
        position: fixed;
        top:0;
        background: rgba(41,43,49,0.5);
        //padding-left: 84px;
        img{
            width: 134px;
            height: 40px;
            display: block;
            margin-left: 14px;
            margin-top: 12px;
            float: left;
        }
        .icon-USDX-logo{
            color: #fff;
            font-size: 40px;
            float:left;
            margin-left: 14px;
            margin-top: 10px;
        }
        ul{
            float: right;
            padding-top: 20px;
            padding-right: 60px;
            li {
                float: left;
                display: block;
                height: 28px;
                line-height: 28px;
                padding-left: 17px;
                padding-right: 17px;
                text-align: center;
                a{
                    font-size: 16px;
                    color: #ffffff;
                }
                a.active,a:hover{
                    color: #02f7f7;
                }
            }
        }
        .navtab-box{
            height: 0;
            overflow: hidden;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            &.active{
                height: auto;
            }
        }
        .navtab{
            z-index: -1;
            transition: 0.6s;
            transform: translate3d(0,-100%,0);
            &.active{
                z-index: 1;
                transform: translate3d(0,0,0);
            }
            div{
                height: 45px;
                line-height: 45px;
                padding: 0 12px;
                background-color: #2d3036;
                border-bottom: 1px solid #393b41;
                a{
                    display: block;
                    width: 100%;
                    font-size: 12px;
                    color: #fff;
                    &.active,&:hover{
                        color: #02f7f7;
                    }
                }
            }
        }
    }

    /*720*/
    @media screen and (max-width: 720px) {

    }
</style>