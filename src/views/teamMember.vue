<template>
    <div class="teamBox">
        <Head htitle="TEAM"></Head>

        <div class="teamMemberBox">
            <ul class="clearfix">
                <li>
                    <img src="../../images/team/head_001.png"/>
                    <div class="memberItem">
                        <h2 class="title mobileHide">Frank C.</h2>
                        <h3 class="degree mobileHide">Founder</h3>
                        <h2 class="title mobileShow">Frank C. / Founder</h2>
                        <a href="https://github.com/adyliu"><i class="icon iconfont icon-github"></i></a>
                        <div class="desc">
                            <!--<p>Used to study at UC Berkeley</p>-->
                            <!--<p>Proficienxt at design and development with experience on the XOR project and in the Stablecoin lab</p>-->
                            <p>Master Degree in Computer Science at Tsinghua University. Former EMC2 Chief Architect, an expert engineer at Alibaba, Baidu, and Sgcc. Over 10 years of experience in system engineering, blockchain, and cloud computing. His research has focused on high concurrency and multithreaded design of distributed systems.</p>

                        </div>
                    </div>
                </li>
                <li>
                    <img src="../../images/team/head_002.png"/>
                    <div class="memberItem">
                        <h2 class="title mobileHide">Vincent Deng.</h2>
                        <h3 class="degree mobileHide">Core Developer</h3>
                        <h2 class="title mobileShow">Vincent Deng / Core Developer</h2>
                        <a href="https://github.com/dengwenqi123" target="_blank"><i class="icon iconfont icon-github"></i></a>
                        <div class="desc">
                            <p>A serial entrepreneur, blockchain developer and hacker with rich experience in Artificial Intelligence, big data, and blockchain. Former system architect at Alibaba and led the development of risk management and core products in one of the largest Fintech company in China - Yirendai</p>
                        </div>
                    </div>
                </li>

                <li>
                    <img src="../../images/team/head_003.png" />
                    <div class="memberItem">
                        <h2 class="title mobileHide">Yi W.</h2>
                        <h3 class="degree mobileHide">Core Developer</h3>
                        <h2 class="title mobileShow">Yi W. / Core Developer</h2>
                        <a href="https://github.com/davideuler"><i class="icon iconfont icon-github"></i></a>
                        <div class="desc">
                            <p>Head of FIT (Future internet technology) lab at Tsinghua University. Senior architect of Baidu distributed database, he has many research results in the field of distributed computing framework, distributed protocol, server cluster management, and distributed database.
                            </p>
                        </div>
                    </div>
                </li>

                <li>
                    <img src="../../images/team/head_004.png" />
                    <div class="memberItem">
                        <h2 class="title mobileHide">Xujia L.</h2>
                        <h3 class="degree mobileHide">Core Developer</h3>
                        <h2 class="title mobileShow">Xujia L. / Core Developer</h2>
                        <a href="https://github.com/probablycorey"><i class="icon iconfont icon-github"></i></a>
                        <div class="desc">
                            <p>Head of the Institute of Information Technology at Tsinghua University. Former technical director at the Agricultural Bank of China and Great Wall Asset Management. Former leader of the Laudms project. He has many years of research experience in distributed storage and cluster architecture.</p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

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
    .teamMemberBox{

        ul{
            width: 1066px;
            margin: 0 auto;
            padding-bottom: 120px;
            li{
                width: 250px;
                margin-right: 22px;
                height: 600px;
                background: #23262a;
                border-radius: 6px;
                float: left;
                margin-top: 48px;
                background: url("../../images/teamMember/team_item_bg.png");
                background-size: 250px 600px;
                background-repeat: repeat-y;
                text-align: center;

                img{
                    display: block;
                    width: 126px;
                    height: auto;
                    margin: 0 auto;
                    padding-top: 32px;
                }
                .title{
                    font-size: 24px;
                    color: #fff;
                    text-align: center;
                    font-weight: normal;
                    margin-top: 20px;
                    line-height: 22px;

                }
                .degree{
                    font-size: 15px;
                    font-weight: normal;
                    text-align: center;
                    line-height: 18px;
                    color: #999;
                    margin-top: 14px;
                    margin-bottom: 6px;
                }
                .icon-github{
                    font-size: 20px;
                    color: #fff;
                    text-align: center;
                    margin-top: 10px;
                }
                .desc{

                    p{
                        font-size: 16px;
                        color: #999999;
                        line-height: 24px;
                        margin-top: 12px;
                        padding-left: 26px;
                        padding-right: 6px;
                        text-align: left;
                    }
                }
            }
            li:nth-child(4){
                margin-right: 0px;
            }
            li:nth-child(5){height: 544px;background-size: 250px 544px;}
            li:nth-child(6){height: 544px;background-size: 250px 544px;}
            li:nth-child(7){height: 544px;background-size: 250px 544px;}
            li:nth-child(8){
                margin-right: 0px;
                height: 544px;
                background-size: 250px 544px;

            }
        }

    }




    @media screen and (max-width: 720px) {
        .teamMemberBox{
            ul{
                width: auto;
                margin: 0 auto;
                padding-bottom: 120px;
                padding: 0 12px;
                li{
                    border-style: solid;
                    border-width: 1px;
                    border-color: rgb(69, 71, 76);
                    border-radius: 10px;
                    box-sizing: border-box;
                    width: 100%;
                    height: auto;
                    background: #23262a;

                    padding-bottom: 14px;
                    position: relative;
                    margin-top: 10px;
                    img{
                        display: block;
                        width: 88px;
                        height: 88px;
                        //margin-left: 8px;
                        //margin-top: 14px;
                        padding-top: 0px;
                        position: absolute;
                        left: 8px;
                        top: 14px;
                    }
                    .memberItem{
                        text-align: left;


                        padding-left: 112px;
                        .title{
                            font-size: 12px;
                            color: #fff;
                            text-align: left;
                            font-weight: normal;
                            margin-top: 14px;
                            line-height: 14px;
                            padding-bottom: 10px;
                        }
                        .degree{
                            font-size: 12px;
                            font-weight: normal;
                            text-align: left;
                            line-height: 18px;
                            color: #999;
                            margin-top: 6px;
                        }

                        .desc{

                            p{
                                font-size: 11px;
                                color: #999999;
                                line-height: 15px;
                                margin-top: 8px;
                                padding-left: 0px;
                                padding-right: 6px;
                                text-align: left;
                            }
                        }
                    }

                }
                li:nth-child(4){
                    margin-right: 0px;
                }
                li:nth-child(5){height: auto}
                li:nth-child(6){height: auto}
                li:nth-child(7){height: auto}
                li:nth-child(8){
                    margin-right: 0px;
                    height: auto;
                }
            }

        }
    }
</style>
