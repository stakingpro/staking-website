<template>
    <div id="edit_profile">
        <h1>Change Password</h1>
        <div class="profile_form">
            <errMsg class="errmsg" :err_msg='err_msg' v-if="err_msg!==''"></errMsg>
            <div class="edit">
              <h2>Old Password:</h2>
              <input type="text"  v-model="changePasswordData.oldPassword" :class="{'err':isOldPasswordErr}">
            </div>
            <div class="edit">
              <h2>Your New Password:</h2>
              <input type="text"  v-model="changePasswordData.newPassword" :class="{'err':isNewPasswordErr}">
            </div>
            <div class="edit">
              <h2>Retype Your New Password:</h2>
              <input type="text"  v-model="changePasswordData.retypePassword" :class="{'err':isRetypePasswordErr}">
            </div>
            <div class="save" @click="changePassword">Save</div>
        </div>
    </div>

</template>

<script type="text/javascript">
import errMsg from "../components/errMsg";
import axios from "axios";
import { setPassword } from "../data/usdxUrl";
import bus from "../components/bus";

export default {
  data() {
    return {
      err_msg: "",
      changePasswordData: {
        oldPassword: "",
        newPassword: "",
        retypePassword: ""
      },
      isOldPasswordErr: false,
      isNewPasswordErr: false,
      isRetypePasswordErr: false
    };
  },
  methods: {
    clear() {
      this.err_msg = "";
      this.isOldPasswordErr = false;
      this.isNewPasswordErr = false;
      this.isRetypePasswordErr = false;
    },
    checkInput() {
      if (!/^[a-zA-Z0-9]{6,20}$/.test(this.changePasswordData.oldPassword)) {
        this.clear();
        this.err_msg = "please input passWord";
        this.isOldPasswordErr = true;
        return false;
      } else if (
        !/^[a-zA-Z0-9]{6,20}$/.test(this.changePasswordData.newPassword)
      ) {
        this.clear();
        this.err_msg = "please input passWord";
        this.isNewPasswordErr = true;
        return false;
      } else if (
        !/^[a-zA-Z0-9]{6,20}$/.test(this.changePasswordData.retypePassword) &&
        this.changePasswordData.retypePassword ===
          this.changePasswordData.newPassword
      ) {
        this.clear();
        this.err_msg = "please input reTypePassWord";
        this.isRetypePasswordErr = true;
        return false;
      } else {
        this.clear();
        return true;
      }
    },
    changePassword() {
      if (this.checkInput()) {
        let param = new URLSearchParams();
        param.append("oldPassword", this.loginData.oldPassword);
        param.append("newPassword", this.loginData.newPassword);
        param.append("restPassword", this.loginData.retypePassword);
        axios.post(setPassword, param).then(res => {
          if (res.data.status==='success') {
            bus.$emit("saveSuccess", "密码修改成功");
          }else{
            bus.$emit("saveErr", "密码修改失败");
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
    border-bottom: 2px solid #2e3137;
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
      }
      .err {
        border: solid 1px #f75a5a;
      }
    }
    .save {
      width: 120px;
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
        }
      }
      .save {
        width: 74px;
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