<template>
    <div id="home" class="homeBox">
        <div class="topNav">
            <i class="wl-logo"></i>
            <div @click="navTab" class="navBar"></div>
            <ul class="clearfix mobileHide">
                <li v-for="(item,index) in nav" :key="index"><a href="javascript:;" :class="{'active':curpage==index}" @click="to(item,index)" class="anchor-hd" v-html="item.content"></a></li>
            </ul>
            <div class="navtab-box" :class="showNav?'active':''">
                <div class="navtab" :class="showNav?'active':''">
                    <div v-for="(item,index) in nav" :key="index"><a href="javascript:;" :class="{'active':curpage==index}" @click="to2(item,index)" class="anchor-hd" v-html="item.content"></a></div>

                </div>
            </div>
        </div>
        <div ref="nav-home">
            <index></index>
        </div>
        <div ref="nav-house">
            <house></house>
        </div>

                <div ref="nav-background">
                    <FatalProblems></FatalProblems>
                </div>
        <div ref="nav-products">
            <products></products>
        </div>
        <div ref="skrToken">
            <skr_token></skr_token>
        </div>
                <div ref="nav-allocate">
                    <allocate></allocate>
                </div>

        <div class="linerSection">
            <div ref="nav-team">
                <teamMember></teamMember>
            </div>
            <div ref="nav-advisor">
                <advisor-member></advisor-member>
            </div>
            <div ref="nav-partners">
                <partnersMembers  class="mobileHide"></partnersMembers>
                <partnersMembersMobile  class="mobileShow"></partnersMembersMobile>
            </div>
            <footers></footers>
            <telegramDialog></telegramDialog>

        </div>

    </div>
</template>

<script type="text/javascript">
    import allocate from './allocate';
    import skr_token from './skr_token';
    import index from './index';
    import house from './house';
    import products from './products';
    import FatalProblems from './fatalProblems';
    import usdxIntro from './usdxIntro';
    import usdxIntroPhone from './usdxIntroPhone';
    import roadMap from './roadMap';
    import roadMapPhone from './roadMapPhone';
    import teamMember from './teamMember'

    import supportMember from './supportMember';
    import advisorMember from './advisorMember';
    import partnersMembers from  './partnersMembers';
    import partnersMembersMobile from './partnersMembersMobile';
    import homeData from '../data/home';
    import footers from './footers';
    import telegramDialog from './telegramDialog';
    import { scrollMove } from '../modules/method'

    export default {
        name:'home',
        data() {
            return {
                curpage: 0,
                nav: homeData.nav,
                showNav: false
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll();
                //this.resize();
            })
        },
        methods:{
            resize() {
                this.setScreen();
                window.addEventListener('resize',this.setScreen);
            },
            setScreen() {
                var w = window.innerWidth;
                this.$refs["nav-home"].style.width = w + 'px';
                this.$refs["nav-home"].style.height = window.screen.height +'px';
                if (w > 720) {
                     this.$refs["screen"].style.height = window.screen.height +'px';
                } else {
                    this.$refs["screen"].style.height = 'auto';
                }
            },
            to2(item,index) {
                this.showNav = false;
                this.to(item,index);
            },
            navTab() {
                this.showNav = !this.showNav;
            },
            to(item,index){
                var T = this.$refs[item.ref].getBoundingClientRect().top;
                var t = document.documentElement.scrollTop||document.body.scrollTop;
                this.curpage = index;
                scrollMove({y:t+T})
            },
            scroll() {
                var arr = ['nav-home','nav-background','nav-products','nav-allocate'];
                window.addEventListener('scroll', () => {
                    for (var i = 0; i < arr.length; i++) {
                        var rect = this.$refs[arr[i]].getBoundingClientRect();
                        if (rect.top>=0 && rect.top+rect.height>=0) {
                            this.curpage = i;
                            return ;
                        }
                    }
                    this.curpage = arr.length - 1;

                }, false);
            }
        },
        components: {
            index,
            products,
            FatalProblems,
            usdxIntro,
            usdxIntroPhone,
            roadMap,
            roadMapPhone,
            teamMember,
            advisorMember,
            supportMember,
            partnersMembers,
            partnersMembersMobile,
            footers,
            telegramDialog,
            allocate,
            skr_token,
            house
        }
    }
</script>

<style lang="scss">
    .indexBox{
        position: relative;
        z-index: 10;

        .indexBox-line div{
            position: absolute;
            right: 30%;
            width: 60px;
            height: 2px;
            background: -webkit-gradient(linear,left top,right top,from(lightpink),to(rgba(255,182,193,0)));
            background: linear-gradient(left,lightpink,rgba(255,182,193,0));
            -webkit-animation: tlf 3s ease infinite;
            animation: tlf 3s ease infinite;
            opacity: 0;
            &:nth-child(1){
                top: 15%;
            }
            &:nth-child(2){
                top: 44%;
                animation-delay: 1s;
            }
            &:nth-child(3){
                top: 90%;
                animation-delay: 2s;
            }
        }
    }
    .hexagon-warp{
        padding-top: 30px;
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
    }

    @keyframes tlf{
        0%{
            opacity: 0.1;
            transform: translate3d(0,0,0);
        }
        50%{
            opacity: 1;
            transform: translate3d(-350%,0,0);
        }
        100%{
            opacity: 0.1;
            transform: translate3d(-700%,0,0);
        }
    }
</style>