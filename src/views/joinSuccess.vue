<template>
    <div id="joinSuccess">
        <commonPageHead></commonPageHead>
        <div class="success">
            <h2>Successful</h2>
            <p>Your account was successfully activated!</p>
            <p>You can now lgin</p>
            <div class="dashboardBt" @click="gotoMyProfile">Go to your Dashboard</div>
        </div>
    </div>

</template>

<script type="text/javascript">
import commonPageHead from "../components/commonPageHead";

export default {
  data() {
    return {};
  },
  methods: {
    gotoMyProfile() {
      this.$router.push({
        name: "edit_profile",
        params: { userId: this.$route.params.userId }
      });
    }
  },
  components: {
    commonPageHead
  }
};
</script>


<style lang="scss">
.success {
  width: 380px;
  height: 326px;
  margin: 110px auto 0;
  text-align: center;
  h2 {
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 50px;
    color: #ffffff;
  }
  p {
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 16px;
    color: #a0a0a0;
    margin-top: 19px;
  }
  .dashboardBt {
    width: 263px;
    height: 53px;
    background-color: #05e1e3;
    border-radius: 4px;
    margin: 114px auto 0;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 53px;
    letter-spacing: 0px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
  }
}
@media screen and (max-width: 720px) {
  .success {
    width: 360px;
    height: 326px;
    margin: 110px auto 0;
    text-align: center;
    h2 {
      font-size: 30px;
      line-height: 30px;
    }
    p {
      font-size: 12px;
      line-height: 12px;
    }
  }
}
</style>