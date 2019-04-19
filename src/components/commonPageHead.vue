<template>
    <div id="pageHead">
         <i class="icon iconfont icon-USDX-logo"></i>
    </div>

</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="scss">
#pageHead {
  height: 94px;
  .icon-USDX-logo {
    color: #fff;
    font-size: 40px;
    float: left;
    margin-left: 14px;
    margin-top: 10px;
  }
}
@media screen and (max-width: 720px) {
  #pageHead {
    height: 53px;
    .icon-USDX-logo {
      font-size: 32px;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
}
</style>