<template>
    <div ref="nav-house" id="houseSection" class="clearfix houseSection">
        <ul class="sContent">
            <li class="sItem clearfix">
                <a href="javascript:;">
                    <img class="item-bg" src="images/house/house_01.jpg" alt="">
                    <div class="mask">
                        <div class="bg "></div>
                        <div class="content">
                            <div class="item-img-panel" style="height: 40px;">
                                <img src="https://img.alicdn.com/tps/TB1aivqLXXXXXbwXVXXXXXXXXXX-144-144.png" alt="" class="item-img">
                                <img src="https://img.alicdn.com/tps/TB1fEPxLXXXXXa9XFXXXXXXXXXX-144-144.png" alt="" class="item-img-hover">
                            </div>
                            <p class="line-panel">
                                <i class="item-line"></i>
                            </p>
                            <h3 class="item-title">A world-leading level of security</h3>
                            <p class="item-desc">
                                Consisting of 24-hour, 365-day monitoring of all buildings by guards and central monitoring systems as well as multiple security mechanisms, we maintain a secure environment with the highest level of technology and know-how in terms of both hardware and software.
                            </p>
                            <span class="item-link">查看详情</span>
                        </div>
                    </div>
                </a>
            </li>
            <li class="sItem clearfix" data-code="ecommerce">
                <a href="javascript:;" style="display:block;">
                    <img class="item-bg" src="images/house/house_02.jpg" alt="">
                    <div class="mask">
                        <div class="bg "></div>
                        <div class="content">
                            <div class="item-img-panel" style="height: 40px;">
                                <img src="https://img.alicdn.com/tps/TB1zuLPLXXXXXXBXXXXXXXXXXXX-144-144.png" alt="" class="item-img">
                                <img src="https://img.alicdn.com/tps/TB1_6_qLXXXXXXZXVXXXXXXXXXX-144-144.png" alt="" class="item-img-hover">
                            </div>
                            <p class="line-panel">
                                <i class="item-line"></i>
                            </p>
                            <h3 class="item-title">Facility systems with seismically-isolated structures</h3>
                            <p class="item-desc">
                                STAKING's data centers ensure highly-dependable power supply with multiplexed power supply systems and reliable redundant facilities. To ensure our node-running with top level stablity.
                            </p>
                            <span class="item-link">查看详情</span>
                        </div>
                    </div>
                </a>
            </li>
            <li class="sItem clearfix" data-code="ecommerce">
                <a href="javascript:;" style="display:block;">
                    <img class="item-bg" src="images/house/house_03.jpg" alt="">
                    <div class="mask">
                        <div class="bg "></div>
                        <div class="content">
                            <div class="item-img-panel" style="height:40px;">
                                <img src="https://img.alicdn.com/tps/TB1o3HILXXXXXXQXpXXXXXXXXXX-144-144.png" alt="" class="item-img">
                                <img src="https://img.alicdn.com/tps/TB16hfjLXXXXXbdaXXXXXXXXXXX-144-144.png" alt="" class="item-img-hover">
                            </div>
                            <p class="line-panel">
                                <i class="item-line"></i>
                            </p>
                            <h3 class="item-title">In depth knowledge and secure operation</h3>
                            <p class="item-desc">
                                AT STAKING's professional data center experts can provide support for a wide variety of operations, from monitoring and management of servers and other IT devices, through monitoring work being carried out in our data centers on the customer's behalf, and up to remote hands operations.
                            </p>
                            <span class="item-link">查看详情</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>

    </div>

</template>

<script type="text/javascript">

    export default {
        data() {
            return {
                winHeight:600,
            }
        },

        mounted() {

        },
        methods: {

        },
        components:{
        }
    }
</script>


<style lang="scss">
    .houseSection{
        background: #22252e;
        padding-bottom: 60px;
        .sContent{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .sItem{
                position: relative;
                float: left;
                color: #000;
                font-size: 0;
                text-align: center;
                width: 400px;
                height: auto;
                img{
                    width: 400px;
                }
                .mask {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    .bg {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        background: #161a1d;
                        opacity: .6;
                        filter: alpha(opacity=60);
                        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(60));
                        transition: all .4s cubic-bezier(.4,0,.2,1)
                    }
                    .bg.other-bg {
                        opacity: .82;
                        filter: alpha(opacity=82);
                        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(82))
                    }
                    .content {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 20px;
                        bottom: 0;
                        transition: all .4s cubic-bezier(.4,0,.2,1);
                        .line-panel {
                            padding: 0;
                            margin: 0;
                            font-size: 0;
                            line-height: 0;
                            margin-top: 20px;
                            transition: all .4s cubic-bezier(.4,0,.2,1);
                            .item-line {
                                width: 20px;
                                height: 2px;
                                background: #fff;
                                display: inline-block;
                                opacity: 1;
                                filter: alpha(opacity=100);
                                -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
                                transition: all .4s cubic-bezier(.4,0,.2,1)
                            }
                        }
                        .item-img-panel {
                            position: relative;
                            width: 25%;
                            height: 54px;
                            display: inline-block;

                            img{
                                position: absolute;
                                left: 25px;
                                right: 0;
                                top: 0;
                                width: 50%;
                                display: inline-block;
                                opacity: 1;
                                filter: alpha(opacity=100);
                                -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
                                transition: all .4s cubic-bezier(.4,0,.2,1);
                            }
                            .item-img-hover {
                                opacity: 0;
                                filter: alpha(opacity=0);
                                -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
                                transition: all .4s cubic-bezier(.4,0,.2,1);
                            }
                        }

                    }

                }

                .line-panel {
                    padding: 0;
                    margin: 0;
                    font-size: 0;
                    line-height: 0;
                    margin-top: 20px;
                    transition: all .4s cubic-bezier(.4,0,.2,1);
                }
                .item-title {
                    color: #fff;
                    font-size: 22px;
                    line-height: 24px;
                    margin: 0;
                    padding: 0;
                    margin-top: 24px;
                    font-weight: 700;
                    transition: all .4s cubic-bezier(.4,0,.2,1);
                }
                .item-desc {
                    font-size: 14px;
                    color: #fff;
                    text-align: center;
                    margin-top: 30px;
                    padding: 0 23px;
                    line-height: 24px;
                    height: 72px;
                }
                .item-desc {
                    opacity: 0;
                    filter: alpha(opacity=0);
                    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
                    transition: all .4s cubic-bezier(.4,0,.2,1);
                }
            }
            .sItem:hover{
                .bg {
                    background: #00c2de;
                    opacity: .9;
                    filter: alpha(opacity=90);
                    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(90))
                }
                .bg.other-bg {
                    opacity: .9;
                    filter: alpha(opacity=90);
                    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(90))
                }
                .content {
                    top: 3%;
                    .item-img-panel{

                        .item-img {
                            opacity: 0;
                            filter: alpha(opacity=0);
                            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0))
                        }
                        .item-img-hover {
                            opacity: 1;
                            filter: alpha(opacity=100);
                            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100))
                        }
                    }
                    .line-panel {
                        margin-top: 10px;
                        .item-line {
                            opacity: 0;
                            filter: alpha(opacity=0);
                            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0))
                        }
                    }
                    .item-title {
                        margin-top: 6px
                    }
                    .item-desc{
                        opacity: 1;
                        filter: alpha(opacity=100);
                        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100))
                    }
                    .item-desc {
                        margin-top: 8px
                    }
                    .item-link {
                        margin-top: 14%
                    }




                }

            }

        }

    }
    @media screen and (max-width: 1280px) {
        .houseSection{

        }
    }

    @media screen and (max-width: 720px) {
        .houseSection{
            background: #22252e;
            padding-bottom: 60px;
            .sContent{
                width: 100%;
                margin: 0 auto;
                overflow: hidden;

                .sItem{
                    position: relative;
                    float: none;
                    color: #000;
                    font-size: 0;
                    text-align: center;
                    height: auto;
                    display: block;
                    img{
                        width: 100%;
                        display: block;

                    }
                    .mask {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        .bg {
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 0;
                            bottom: 0;
                            background: #161a1d;
                            opacity: .6;
                            filter: alpha(opacity=60);
                            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(60));
                            transition: all .4s cubic-bezier(.4,0,.2,1)
                        }
                        .bg.other-bg {
                            opacity: .82;
                            filter: alpha(opacity=82);
                            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(82))
                        }
                        .content {
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 12px;
                            bottom: 0;
                            padding-left: 12px;
                            padding-right: 12px;
                            transition: all .4s cubic-bezier(.4,0,.2,1);
                            .line-panel {
                                padding: 0;
                                margin: 0;
                                font-size: 0;
                                line-height: 0;
                                margin-top: 12px;
                                transition: all .4s cubic-bezier(.4,0,.2,1);
                                .item-line {
                                    width: 20px;
                                    height: 2px;
                                    background: #fff;
                                    display: inline-block;
                                    opacity: 1;
                                    filter: alpha(opacity=100);
                                    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
                                    transition: all .4s cubic-bezier(.4,0,.2,1)
                                }
                            }
                            .item-img-panel {
                                position: relative;
                                width: 25%;
                                height: 54px;
                                display: inline-block;

                                img{
                                    position: absolute;
                                    left: 25px;
                                    right: 0;
                                    top: 0;
                                    width: 50%;
                                    display: inline-block;
                                    opacity: 1;
                                    filter: alpha(opacity=100);
                                    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
                                    transition: all .4s cubic-bezier(.4,0,.2,1);
                                }
                                .item-img-hover {
                                    opacity: 0;
                                    filter: alpha(opacity=0);
                                    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
                                    transition: all .4s cubic-bezier(.4,0,.2,1);
                                }
                            }

                        }

                    }

                    .line-panel {
                        padding: 0;
                        margin: 0;
                        font-size: 0;
                        line-height: 0;
                        margin-top: 20px;
                        transition: all .4s cubic-bezier(.4,0,.2,1);
                    }
                    .item-title {
                        color: #fff;
                        font-size: 18px;
                        line-height: 22px;
                        margin: 0;
                        padding: 0;
                        margin-top: 24px;
                        font-weight: 700;
                        transition: all .4s cubic-bezier(.4,0,.2,1);
                    }
                    .item-desc {
                        font-size: 12px;
                        color: #fff;
                        text-align: center;
                        margin-top: 20px;
                        padding: 0 23px;
                        line-height: 24px;
                        height: 72px;
                    }
                    .item-desc {
                        opacity: 0;
                        filter: alpha(opacity=0);
                        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
                        transition: all .4s cubic-bezier(.4,0,.2,1);
                    }
                }
                .sItem{
                    .bg {
                        background: #00c2de;
                        opacity: .9;
                        filter: alpha(opacity=90);
                        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(90))
                    }
                    .bg.other-bg {
                        opacity: .9;
                        filter: alpha(opacity=90);
                        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(90))
                    }
                    .content {
                        top: 3%;
                        .item-img-panel{

                            .item-img {
                                opacity: 0;
                                filter: alpha(opacity=0);
                                -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0))
                            }
                            .item-img-hover {
                                opacity: 1;
                                filter: alpha(opacity=100);
                                -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100))
                            }
                        }
                        .line-panel {
                            margin-top: 10px;
                            .item-line {
                                opacity: 0;
                                filter: alpha(opacity=0);
                                -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0))
                            }
                        }
                        .item-title {
                            margin-top: 6px
                        }
                        .item-desc{
                            opacity: 1;
                            filter: alpha(opacity=100);
                            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100))
                        }
                        .item-desc {
                            margin-top: 8px
                        }
                        .item-link {
                            margin-top: 14%
                        }




                    }

                }

            }

        }
    }
</style>
