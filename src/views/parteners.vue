<template>
    <div class="partenersBox">
        <Head htitle="PARTNERS"></Head>
        <div class="itemContainer">
            <ul class="itemContainer-pc" v-for="icon in iconPC">
                <li v-for="item in icon">
                    <a :href="item.link">
                        <img :src="item.img" alt="">
                    </a>
                </li>
            </ul>
            <ul class="itemContainer-mobile" v-for="icon in iconMobile">
                <li v-for="item in icon">
                    <a :href="item.link">
                        <img :src="item.img" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import homeData from '../data/home'
    const icon = homeData.icon;
    import Head from './head';
    export default {
        data() {
            return {
                iconPC: [],
                iconMobile: []
            }
        },
        mounted() {
            this.setPCIcon();
            this.setMobileIcon();
        },
        methods: {
            setMobileIcon() {
                this.iconMobile = [icon.slice(0,3),icon.slice(3,6),icon.slice(6,9)];
            },
            setPCIcon() {
                this.iconPC = [icon.slice(0,5),icon.slice(5,10)];
            }
        },
        components:{
            Head,
        }

    }
</script>

<style lang="scss">
    .partenersBox {
        .itemContainer{
            padding-top: 77px;
            padding-bottom: 85px;
            ul{
                display: flex;
                width: 80%;
                margin: 0 auto;
                li{
                    flex: 1;
                    display: block;
                    margin-top: 20px;
                    margin-right: 20px;
                    border: 1px solid #25272c;
                    img{
                        display: block;
                        width: 100%;
                    }
                    &:last-child{
                        margin-right: 0;
                    }
                    &.active,&:active,&:hover{
                        border: 1px solid #2e3137;
                        background-color: #2e3137;
                        box-shadow: 3px 2.598px 12.18px 1.82px rgba(0, 0, 0, 0.067);
                    }
                }
            }
        }
    }
    @media screen and (max-width: 720px) {
        .partenersBox{
            .itemContainer{
                padding-top: 28px;
            }
            .icon-partners{
                font-size: 20px;
            }
        }
    }

    
</style>
