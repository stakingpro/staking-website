<template>
    <div class="support-box">
        <Head htitle="R&D SUPPORT TEAM"></Head>
        <div class="supportContent">
            <ul class="clearfix">
                <li>
                    <div class="contentBox">
                        <div class="nameBox">
                            <img src="images/rd/rd_one.png"/>
                        </div>
                        <div class="positionBox mobileHide">
                            <h2 class="name">Hash Hao</h2>
                            <p class="position">Researcher</p>
                        </div>
                        <div class="positionBox mobileShow">
                            <h2 class="name">Hash Hao / Researcher</h2>
                        </div>
                        <div class="descBox">
                            <p>Graduated from Columbia <br/>University</p>
                            <p>Serial entrepreneur and <br/>Fintech expert</p>
                            <p>Has been successfully<br/>created and existed a series <br/>of ventures</p>
                            <p>Used to work at investment <br/>banks and hedge funds in <br/>New York and Beijing</p>
                        </div>
                    </div>


                </li>

                <li>
                    <div class="contentBox">
                        <div class="nameBox">
                            <img src="images/rd/rd_two.png"/>
                        </div>

                        <div class="positionBox mobileHide">
                            <h2 class="name">Steven Li</h2>
                            <p class="position">Researcher</p>
                        </div>
                        <div class="positionBox mobileShow">
                            <h2 class="name">Steven Li / Researcher</h2>
                        </div>

                        <div class="descBox">
                            <p>Graduated from University <br/>of Toronto</p>
                            <p>Serial entrepreneur and <br/>angel investor</p>
                            <p>Has founded and managed <br/>multiple hedge funds </p>
                            <p>Used to be the investment <br/>director at a large Internet <br/>company</p>
                        </div>

                    </div>

                </li>

                <li>
                    <div class="contentBox">
                        <div class="nameBox">
                            <img src="images/rd/rd_three.png"/>
                        </div>

                        <div class="positionBox mobileHide">
                            <h2 class="name">Chen Nie</h2>
                            <p class="position">Developer</p>
                        </div>
                        <div class="positionBox mobileShow">
                            <h2 class="name">Chen Nie / Developer</h2>
                        </div>

                        <div class="descBox">
                            <p>Graduated from University <br/>of Toronto</p>
                            <p>Lead engineer of BCG <br/>Digital Ventures</p>
                            <p>Experienced expert in <br/>Trading Strategy, Investment <br/>Analyst and Engineering</p>
                        </div>
                    </div>

                </li>

            </ul>
        </div>
        <div style="height: 45px;"></div>

    </div>
</template>

<script type="text/javascript">
    import Head from './head';
    export default {
        data(){
            return {

            }
        },
        methods: {
            showItem(item,index) {
                if (item.title) {
                    this.cur = index;
                }
            }
        },
        components:{
            Head,
        }
    }
</script>


<style lang="scss">
    .icon-rd_title{
        float: left;
        margin-left: 18px;
        margin-right: 18px;
        font-size: 22px;
    }

    .supportContent{
        margin: 0 auto;
        margin-top: 70px;
        width: 960px;
        ul{
            display: block;
            width: 100%;
            li{
                float: left;
                width: 33.3%;
                display: block;
                .contentBox{
                    width: 201px;
                    img{
                        width: 201px;
                        height: auto;
                    }
                    .name{
                        text-align: center;
                        color: #cccccc;
                        font-size: 24px;
                        line-height: 26px;
                        font-weight: 500;
                        margin-top: 8px;
                    }
                    .position{
                        text-align: center;
                        font-size: 24px;
                        line-height: 26px;
                        color: #cccccc;
                        margin-top: 6px;

                    }
                }
                .nameBox{
                    display: block;
                    text-align: center;
                    font-size: 24px;
                    color: #222428;
                    line-height: 25px;
                    margin-top:-20px;
                    .name{
                        font-weight: 600;

                    }
                    .position{
                        margin-top: 8px;
                        font-weight: normal;

                    }
                }
                .descBox{
                    margin-top: 14px;
                    text-align: left;
                    padding-left:4px;
                    p{
                        font-size: 16px;
                        color: #999999;
                        line-height: 22px;
                        margin-top: 6px;

                    }
                }
            }
            li:nth-child(2){
                .contentBox{
                    margin:  0 auto;
                }
            }
            li:nth-child(3){
                position: relative;
                .contentBox{
                    position: absolute;
                    right: 0;
                }
            }
        }
    }
    @media screen and (max-width: 720px) {
        .supportContent{
            margin: 0;
            padding: 0;
            width: auto;

            ul{
                width: 100%;
                margin: 0px;
                padding: 0px;

                li{
                    margin: 0;
                    padding: 0 24px;
                    width: 100%;
                    box-sizing: border-box;
                    margin-top: 20px;

                    .contentBox{
                        width: auto;
                        img{
                            width: 104px;
                            height: auto;
                        }
                        .name{
                            text-align: left;

                        }
                        .position{
                            text-align: left;

                        }
                    }
                    .nameBox{
                        float: left;
                        width: auto;
                        font-size: 16px;
                        padding-top: 24px;
                        line-height: 18px;
                        .name{
                            font-size: 13px;

                        }
                        .position{
                            padding-top: 6px;
                            margin-top: 0px;

                        }
                    }
                    .descBox{
                        margin-top: 6px;
                        padding-left: 120px;
                        p{
                            font-size: 10px;
                            line-height: 16px;
                            margin-top: 2px;
                            br{
                                display: none;
                            }
                        }
                    }
                    .positionBox{
                        padding-left: 120px;
                        .name{
                            font-size: 14px;
                            line-height: 16px;
                        }
                        .position{
                            font-size: 14px;
                            margin-top: 3px;
                            line-height: 16px;
                        }
                    }
                }
                li:nth-child(2){
                    .contentBox{
                    }
                }
                li:nth-child(3){
                    position: relative;
                    .contentBox{
                        position: relative;

                    }
                }
            }
        }
    }

</style>