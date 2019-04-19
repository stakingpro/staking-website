<template>
    <div id="products" class="productBox">
        <div
                @mouseover="enterCircle(name)"
                @mouseout="outCircle(name)"
                :class="'friends-circle friends-circle-'+size" ref="circleRef" :style="'transform:scale('+checkValue(position)+')'">
            <slot></slot>
            <a :href="url" target="_blank">
                <div class="layerBox" v-show="isShow">
                    <span>{{name}}</span>
                </div>

            </a>



        </div>

    </div>
</template>


<script type="text/javascript">
    let Placement = {
        bottom: 0,
        height: 0,
        left:   0,
        right:  0,
        top:    0,
        width:  0
    };

    const OldRange = 50 - 0;
    const NewRange = 1.2 - 1;
    export default {
        name: 'friendsCircle',
        data() {
            return {
                value:1,
                isShow:false,
                mousePosition:{

                }
            }
        },
        props:['size','position','name','url'],

        mounted() {

        },
        methods: {
            setWindowHeight(winHeight) {
                this.$nextTick(function () {
                    document.getElementById("indexSection").style.height = winHeight + "px";
                });
            },
            checkValue(obj){
                 let val = (this.position && this.$refs.circleRef)? this.checkDistance(this.$refs.circleRef.getBoundingClientRect(), this.position.x, this.position.y) : 1
                // console.info(this.$refs.circleRef?this.$refs.circleRef.getBoundingClientRect():'null')
                 return val;

            },
            checkDistance(placement, x2, y2) {
                // console.info('size:'+this.size+'place:'+placement.right+placement.left+"x2:"+x2+"y2:"+y2)
                const
                    x = (placement.right + placement.left) / 2,
                    y = (placement.top + placement.bottom) / 2;
                let z = Math.sqrt(Math.pow(Math.abs(x-x2), 2) + Math.pow(Math.abs(y-y2), 2));
                if (z <= 100)
                    return (((100 - z) * NewRange) / OldRange) + 1;
                return 1;
            },
            enterCircle(name){
                this.isShow = true;
                // this.$refs.circleRef

            },
            outCircle(name){
                console.info('out:'+name)
                this.isShow = false;
            }

        },
        components: {}
    }
</script>


<style lang="scss">
    .productBox {
        .layerBox{
            position: absolute;
            top:0px;
            left: 0px;
            text-align: center;
            padding-top: 26px;
            box-sizing: border-box;
            background: rgba(0,0,0,0.8);

            span{
                color: #fff;
                font-size: 14px;
            }
        }
        .Friends {
            position: relative;
            width: 100vw;
            /*background: -webkit-radial-gradient(circle, #545454 0%, #424242);*/
            /*background: -o-radial-gradient(circle, #545454 0%, #424242);*/
            /*background: radial-gradient(circle, #545454 0%, #424242);*/
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
        .friends-circle{position: relative;}
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

            .Friends {
                padding: 70px 0px;
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
        }

    }
</style>