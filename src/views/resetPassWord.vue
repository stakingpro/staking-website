<template>
    <div id="edit_profile">
        <h1>PASSWORD</h1>
        <p>Your new password</p>
        <div class="profile_form">
            <errMsg class="errmsg" :err_msg='err_msg' v-if="err_msg!==''"></errMsg>
            <div class="edit">
              <input type="text"  placeholder="Email Address" v-model="changePasswordData.registerMail" :class="{'err':isRegisterMailErr}">
            </div>
            <div class="edit">
              <input type="text" placeholder="Your new password" v-model="changePasswordData.newPassword" :class="{'err':isNewPasswordErr}">
            </div>
            <div class="edit">
              <input type="text" placeholder="Retype your new password" v-model="changePasswordData.restPassword" :class="{'err':isRestPasswordErr}">
            </div>
            <div class="save" @click="changePassword">save new password</div>
        </div>
    </div>

</template>

<script type="text/javascript">
import errMsg from "../components/errMsg";
import axios from "axios";
import { forgotPassword } from "../data/usdxUrl";

export default {
  data() {
    return {
      err_msg: "",
      changePasswordData: {
        registerMail: "",
        newPassword: "",
        restPassword: ""
      },
      isRegisterMailErr: false,
      isNewPasswordErr: false,
      isRestPasswordErr: false
    };
  },
  methods: {
    clear() {
      this.err_msg = "";
      this.isRegisterMailErr = false;
      this.isNewPasswordErr = false;
      this.isRestPasswordErr = false;
    },
    checkInput() {
      if (!/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(this.changePasswordData.registerMail)) {
        this.clear();
        this.err_msg = "please input registerMail";
        this.isRegisterMailErr = true;
        return false;
      } else if (
        !/^[a-zA-Z0-9]{6,20}$/.test(this.changePasswordData.newPassword)
      ) {
        this.clear();
        this.err_msg = "please input passWord";
        this.isNewPasswordErr = true;
        return false;
      } else if (
        !/^[a-zA-Z0-9]{6,20}$/.test(this.changePasswordData.restPassword) &&
        this.changePasswordData.restPassword ===
          this.changePasswordData.newPassword
      ) {
        this.clear();
        this.err_msg = "please input reTypePassWord";
        this.isRestPasswordErr = true;
        return false;
      } else {
        this.clear();
        return true;
      }
    },
    changePassword() {
      if (this.checkInput()) {
        let param = new URLSearchParams();
        param.append("registerMail", this.changePasswordData.registerMail);
        param.append("newPassword", this.changePasswordData.newPassword);
        param.append("restPassword", this.changePasswordData.restPassword);
        axios.post(forgotPassword, param).then(res => {
          if (res.data.status==='success') {
            this.$router.push({ name: 'login', params: { resetPassword: 'You have change your password successfully,please login now using the new password.' }})
          }else{
            this.err_msg = res.data.msg;
          }
        }).catch(err=>{
          this.err_msg = err;
        });
      }
    }
  },
  components: {
    errMsg
  }
};
</script>


<style lang="scss">
#edit_profile {
  padding: 80px 10% 0 10%;
  max-width: 780px;
  h1 {
    font-size: 40px;
    color: #fff;
    font-weight: normal;
    font-stretch: normal;
    height: 67px;
    margin-bottom: 39px;
    border-bottom: 0 solid #2e3137;
    text-align: center;
  }
  p{
      text-align: center;
  }
  .profile_form {
    width: 100%;
    .errmsg {
      width: 100%;
    }
    .edit {
      margin-top: 43px;
      width: 100%;
      h2 {
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        color: #fff;
      }
      input {
        width: 100%;
        height: 53px;
        background-color: #3c4048;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid #a0a0a0;
        margin-top: 15px;
        font-size: 20px;
        line-height: 53px;
      }
      .err {
        border: solid 1px #f75a5a;
      }
    }
    .save {
      width: 100%;
      height: 53px;
      background-color: #05e1e3;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      line-height: 53px;
      text-align: center;
      margin-top: 96px;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 720px) {
  #edit_profile {
    padding: 40px 13px 0 13px;
    .profile_form {
      .edit {
        margin-top: 14px;
        h2 {
          font-size: 12px;
        }
        input {
          height: 30px;
          margin-top: 6px;
          font-size: 12px;
          line-height: 30px;
        }
      }
      .save {
        width: 100%;
        height: 30px;
        font-size: 12px;
        line-height: 30px;
        margin-top: 32px;
        margin-bottom: 103px;
      }
    }
  }
}
</style>