<template>
    <div class="err_msg" v-if="err_msg!==''">
        <p>{{err_msg}}</p>
        <i class="err_close"></i>
    </div>

</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  },
  methods: {},
  props: {
    err_msg: { type: String, required: false }
  }
};
</script>


<style lang="scss">
.err_msg {
  width: 100%;
  background-color: #f75a5a;
  border-radius: 4px;
  border: solid 1px #ff0000;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  p {
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #fefefe;
    position: relative;
    line-height: 30px;
    max-height: 60px;
    overflow: hidden;
    padding-right: 20px;
  }
  i {
    position: absolute;
    background: url(../../images/login/close.png);
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    right: 21px;
    top: 21px;
  }
}
@media screen and (max-width: 720px) {
  .err_msg {
    padding: 11px 13px;
    p {
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #fefefe;
    }
    i {
      width: 8px;
      height: 8px;
      background-size: 8px 8px;
      right: 11px;
      top: 11px;
    }
  }
}
</style>