<template>
    <div class="headBox clearfix">
        <table class="title">
            <tr>
                <td class="left">
                &nbsp;
                </td>
                <td v-if="lineHeight == 2" :class="'content lineHeight20 '+(fontSize==29?'fontSize29':'')" v-html="htitle"></td>
                <td v-else :class="'content '+(fontSize==29?'fontSize29':'')" v-html="htitle"></td>
                <td class="right">&nbsp;</td>
            </tr>
        </table>
    </div>

</template>

<script type="text/javascript">

    export default {
        data(){
            return {
                htitle:'',
                lineHeight:'',
                fontSize:'',
            }
        },
        props:["htitle","lineHeight","fontSize"],
        methods: {

        }
    }
</script>


<style lang="scss">
    .headBox{
        padding-top: 50px;
        .title{
            text-align: center;
            margin: 0 auto;
            br{
                display: none;;
            }

            .content{
                font-size: 47px;
                line-height: 60px;
                font-weight: normal;
                margin-left: 18px;
                margin-right: 18px;
                color: #fff;
                display: inline-block;
            }
            .left{
                width: 109px;
                background: url("../../images/left_line_icon.png") no-repeat;
                background-size: 109px 1px;
                height: 40px;
                background-position: left center;
            }
            .right{
                width: 109px;
                background: url("../../images/right_line_icon.png") no-repeat;
                background-size: 109px 1px;
                height: 40px;
                background-position: left center;
            }


        }
    }

    /*720*/
    @media screen and (max-width: 720px) {
        .headBox{
            padding-top: 38px;
            .title{

                .content{
                    font-size: 20px;
                    margin-left: 6px;
                    margin-right: 6px;
                }
                .lineHeight20{
                    line-height: 20px;
                }
                .fontSize29{
                    font-size: 29px;
                }
                .left{
                    width: 68px;
                    background-size:68px auto;
                }
                .right{
                    width: 68px;
                    background-size:68px auto;
                }


            }
        }

    }
</style>