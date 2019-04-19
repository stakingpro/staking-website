<template>
    <div ref="nav-products"  id="products" class="productBox">

        <div class="Friends">
            <Head htitle="PARTNERSHIPS"></Head>
            <div class="friendBox" @mousemove='updateXY($event)'>
                <div class="friends-circle-container">
                    <FriendsCircle size="sm" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="md" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="lg" :position="{x:x,y:y}"></FriendsCircle>

                    <FriendsCircle size="full" :position="{x:x,y:y}" name="Cardano">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.cardano.org/en/home/">
                            <div class="friends-component-icon">
                                <img width="65px" height="65px" src="images/product/cardano_1.png"/>
                            </div>
                        </a>
                    </FriendsCircle>

                    <FriendsCircle size="full" :position="{x:x,y:y}" name="Cosmos" url="https://cosmos.network/">
                        <a target="_blank" rel="noopener noreferrer" href="https://cosmos.network/">
                            <div class="friends-component-icon" style="background: #2e3049;">
                                <img width="65px" height="65px" src="images/product/cosmos_01.png"/></div>
                        </a>
                    </FriendsCircle>

                    <FriendsCircle size="full" :position="{x:x,y:y}" name="IoTex" url="https://iotex.io/">
                        <a target="_blank" rel="noopener noreferrer" href="https://iotex.io/">
                            <div class="friends-component-icon">
                                <img width="65px" height="65px" src="images/product/IoTex.png"/>
                            </div>
                        </a>
                    </FriendsCircle>

                        <FriendsCircle size="full" :position="{x:x,y:y}" name="Irisnet" url="https://www.irisnet.org/">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.irisnet.org/">
                                <div class="friends-component-icon">
                                    <img width="65px" height="65px" src="images/product/Irisnet.png"/>
                                </div>
                            </a>
                        </FriendsCircle>

                    <FriendsCircle size="full" :position="{x:x,y:y}" name="Pchain" url="https://www.pchain.org/">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.pchain.org/">
                            <div class="friends-component-icon" style="background: #469de6;">
                                <img width="65px" height="65px" src="images/product/Pchain.png"/>
                            </div>
                        </a>
                    </FriendsCircle>

                    <FriendsCircle size="lg" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="md" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="sm" :position="{x:x,y:y}"></FriendsCircle>
                </div>
                <div class="friends-circle-container">
                    <FriendsCircle size="sm" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="md" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="lg" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="full" :position="{x:x,y:y}" name="Tezos" url="https://tezos.com/">
                        <a target="_blank" rel="noopener noreferrer" href="https://tezos.com/">
                            <div class="friends-component-icon" style="background: #4256b6;">
                                <img width="65px" height="65px" src="images/product/tezos_02.png"/>
                            </div>
                        </a>
                    </FriendsCircle>
                        <FriendsCircle size="full" :position="{x:x,y:y}" name="Polkadot" url="https://polkadot.network/">
                            <a target="_blank" rel="noopener noreferrer" href="https://polkadot.network/">
                                <div class="friends-component-icon"  style="background: #4d4d4d;">
                                    <img width="65px" height="65px" src="images/product/polkadot.png"/>
                                </div>
                            </a>
                        </FriendsCircle>

                            <FriendsCircle size="full" :position="{x:x,y:y}" name="Dfinity" url="https://dfinity.org/">
                                <a target="_blank" rel="noopener noreferrer" href="https://dfinity.org/">
                                    <div class="friends-component-icon">
                                        <img width="65px" height="65px" src="images/product/dfinity.png">
                                    </div>
                                </a>
                            </FriendsCircle>

                                <FriendsCircle size="full" :position="{x:x,y:y}" name="Ethereum" url="https://www.ethereum.org/">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.ethereum.org/">
                                        <div class="friends-component-icon">
                                            <img width="65px" height="65px" src="images/product/eth.png">
                                        </div>
                                    </a>
                                </FriendsCircle>
                    <FriendsCircle size="lg" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="md" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="sm" :position="{x:x,y:y}"></FriendsCircle>
                </div>
                <div class="friends-circle-container">
                    <FriendsCircle size="sm" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="md" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="lg" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="full" :position="{x:x,y:y}" name="Zcash" url="https://z.cash/">
                        <a target="_blank" rel="noopener noreferrer" href="https://z.cash/">
                            <div class="friends-component-icon" style="background: #000000">
                                <img width="65px" height="65px" src="images/product/zcash.png">
                            </div>
                        </a>
                    </FriendsCircle>
                        <FriendsCircle size="full" :position="{x:x,y:y}" name="EOS" url="https://eos.io/">
                            <a target="_blank" rel="noopener noreferrer" href="https://eos.io/">
                                <div class="friends-component-icon" style="background: #000">
                                    <img width="65px" height="65px" src="images/product/eos2.png">
                                </div>
                            </a>
                        </FriendsCircle>
                            <FriendsCircle size="full" :position="{x:x,y:y}" name="Loom" url="https://loomx.io/">
                                <a target="_blank" rel="noopener noreferrer" href="https://loomx.io/">
                                    <div class="friends-component-icon" style="background: #131f37;">
                                        <img width="65px" height="65px" src="images/product/loom2.png">
                                    </div>
                                </a>
                            </FriendsCircle>

                    <FriendsCircle size="lg" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="md" :position="{x:x,y:y}"></FriendsCircle>
                    <FriendsCircle size="sm" :position="{x:x,y:y}"></FriendsCircle>
                </div>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    import FriendsCircle from './FriendsCircle';
    import Head from './head';
    let Placement = {
        bottom: 0,
        height: 0,
        left:   0,
        right:  0,
        top:    0,
        width:  0
    };
    export default {
        name: 'products',
        data() {
            return {
                winHeight: 600,
                x:0,
                y:0,
            }
        },

        mounted() {

        },
        methods: {
            setWindowHeight(winHeight) {
                this.$nextTick(function () {
                    document.getElementById("indexSection").style.height = winHeight + "px";
                });
            },
            updateXY:function(event){
                this.x=event.x;
                this.y=event.y;
                // console.info('x:'+this.x+"y:"+this.y);
            }


        },
        components: {
            Head,
            FriendsCircle
        }
    }
</script>


<style lang="scss">
    .productBox {
        .Friends {
            position: relative;
            width: 100vw;
            background: #2c2f35;
            color: white;
            min-height: 200px;
            padding: 90px 0px;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            text-align: center;
            margin: auto;
        }
        .friendBox{
            margin-top: 60px;
        }

        .friends-header {
            padding-bottom: 20px;
            font-size: 35px;
            font-family: 'Larsseit';
        }

        .friends-circle-container {
            margin: auto;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            padding: 20px 0px 5px 0px;
        }

        .friends-circle-sm {
            display: inline-block;
            border-radius: 100%;
            background-color: white;
            width: 10px;
            height: 10px;
            margin-left: 30px;
            margin-right: 30px;
        }

        .friends-circle-md {
            display: inline-block;
            border-radius: 100%;
            background-color: white;
            width: 25px;
            height: 25px;
            margin-left: 30px;
            margin-right: 30px;
        }

        .friends-circle-lg {
            display: inline-block;
            border-radius: 100%;
            background-color: white;
            width: 45px;
            height: 45px;
            margin-left: 30px;
            margin-right: 30px;
        }

        .friends-circle-full {
            border-radius: 100%;
            background-color: white;
            width: 65px;
            height: 65px;
            margin-left: 20px;
            margin-right: 20px;
            cursor: pointer;
            overflow: hidden;
        }

        .friends-circle-full * {
            width: 100%;
            height: 100%;
        }
    }

        @media (max-width: 1000px)  {
            .friends-circle-sm {
                margin-left: 20px;
                margin-right: 20px;
            }

            .friends-circle-md {
                margin-left: 20px;
                margin-right: 20px;
            }

            .friends-circle-lg {
                margin-left: 20px;
                margin-right: 20px;
            }

            .friends-circle-full {
                margin-left: 10px;
                margin-right: 10px;
            }

        }

        @media (max-width: 750px)  {
            .productBox {
                .Friends {
                    padding: 10px 0px;
                    text-align: center;
                }

                .friends-circle-sm {
                    visibility: collapse;
                }

                .friends-circle-md {
                    visibility: collapse;
                }

                .friends-circle-lg {
                    visibility: collapse;
                }

                .friends-circle-full {
                    margin-left: 10px;
                    margin-right: 10px;
                }
                .friendBox{
                    width: 100%;
                    overflow: hidden;
                }
            }

        }

        @media (max-width: 430px) {
            .friends-circle-container {
                padding-top: 7px;
                padding-bottom: 0px;
            }

            .friends-circle-full {
                margin-left: 7px;
                margin-right: 7px;
                width: 45px;
                height: 45px;
            }
            .friends-circle-sm{
                display: none;
            }
            .friends-circle-md{display: none;}
            .friends-circle-lg{
                display: none;
            }
        }


</style>