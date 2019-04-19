<template>
    <div id="register_page">
        <commonPageHead></commonPageHead>
        <h2 class="register_title">JOIN</h2>
        <h3>Enter your details to create your account</h3>
        <div class="register_form">
          <errMsg :err_msg='err_msg' v-if="err_msg!==''"></errMsg>
          <div class="edit edit_wrap">
            <input type="text" class="edit_first" placeholder="First Name" v-model="registerData.firstName" :class="{'err':isFirstNameErr}">
            <input type="text" class="edit_last" placeholder="Last Name" v-model="registerData.lastName" :class="{'err':isLastNameErr}">
          </div>
          <input type="text" class="edit" placeholder="Email" v-model="registerData.email" :class="{'err':isEmailErr}">
          <input type="password" class="edit" placeholder="Password" v-model="registerData.passWord" :class="{'err':isPassWordErr}">
          <input type="password" class="edit" placeholder="Retype your Password" v-model="registerData.reTypePassWord" :class="{'err':isReTypePassWordErr}">
          <div class="other">
            <div class="checkbox sendMsg1"> 
              <input type="checkbox" value="1" v-model="registerData.agree"/> 
              <label >I Agree with the terms and conditions.</label> 
            </div>
            <div class="checkbox"> 
              <input type="checkbox" value="1" v-model="registerData.sendEmailMsg"/> 
              <label >I agree to get announcements and updates by email.</label> 
            </div>
          </div> 
          <span class="register_bt" @click="regist">JOIN</span>
        </div>
    </div>

</template>

<script type="text/javascript">
import commonPageHead from "../components/commonPageHead";
import errMsg from "../components/errMsg";
import axios from "axios";
import { registUrl } from "../data/usdxUrl";

export default {
  data() {
    return {
      err_msg: "",
      registerData: {
        email: "",
        passWord: "",
        firstName: "",
        lastName: "",
        reTypePassWord: "",
        sendEmailMsg: "0",
        agree: "0"
      },
      isFirstNameErr: false,
      isLastNameErr: false,
      isEmailErr: false,
      isPassWordErr: false,
      isReTypePassWordErr: false,
      isSendEmailMsgErr: false
    };
  },
  methods: {
    clear() {
      this.err_msg = "";
      this.isFirstNameErr = false;
      this.isLastNameErr = false;
      this.isEmailErr = false;
      this.isPassWordErr = false;
      this.isReTypePassWordEr = false;
      this.isSendEmailMsgErr = false;
    },
    checkInput() {
      if (!/[a-zA-Z]+/.test(this.registerData.firstName)) {
        this.clear();
        this.err_msg = "please input firstName";
        this.isFirstNameErr = true;
        return false;
      } else if (!/[a-zA-Z]+/.test(this.registerData.lastName)) {
        this.clear();
        this.err_msg = "please input lastName";
        this.isLastNameErr = true;
        return false;
      } else if (!/^[a-zA-Z0-9]{6,20}$/.test(this.registerData.passWord)) {
        this.clear();
        this.err_msg = "please input passWord";
        this.isPassWordErr = true;
        return false;
      } else if (
        !/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(
          this.registerData.email
        )
      ) {
        this.clear();
        this.err_msg = "please input email";
        this.isEmailErr = true;
        return false;
      } else if (
        !/^[a-zA-Z0-9]{6,20}$/.test(this.registerData.reTypePassWord) &&
        this.registerData.reTypePassWord === this.registerData.passWord
      ) {
        this.clear();
        this.err_msg = "please input reTypePassWord";
        this.isReTypePassWordErr = true;
        return false;
      } else if (!this.registerData.agree) {
        this.clear();
        this.err_msg = "please agree with the terms and conditions.";
        return false;
      } else {
        this.clear();
        return true;
      }
    },
    regist() {
      if (this.checkInput()) {
        let param = new URLSearchParams();
        param.append("lastName", this.registerData.lastName);
        param.append("firstName", this.registerData.firstName);
        param.append("password", this.registerData.passWord);
        param.append("registerMail", this.registerData.email);
        param.append("reTypePassword", this.registerData.passWord);
        if (this.registerData.sendEmailMsg) {
          param.append("sendEmailMsg", '1');
        }
        axios.post(registUrl, param).then(res => {
          if (res.data.status==='success') {
            this.$router.push({ name: 'joinSuccess', params: { userId: res.data.userId }})
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
    commonPageHead,
    errMsg
  }
};
</script>


<style lang="scss">
.register_title {
  width: 137px;
  height: 38px;
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 34px;
  letter-spacing: 0px;
  color: #ffffff;
  margin: 84px auto 20px;
}
h3 {
  font-size: 20px;
  text-align: center;
  color: #a0a0a0;
}
.register_form {
  width: 559px;
  height: 749px;
  margin: 46px auto 0;
  box-sizing: border-box;
  .edit {
    width: 100%;
    height: 53px;
    background-color: #2a2c32;
    border-radius: 4px;
    border: solid 1px #444648;
    box-sizing: border-box;
    padding: 16px;
    margin-top: 32px;
    font-size: 20px;
    color: #a0a0a0;
    box-shadow: none;
    line-height: 20px;
  }
  .err {
    border: solid 1px #f75a5a;
  }
  .edit_wrap {
    border: none;
    padding: 0;
    font-size: 0;
    input {
      display: inline-block;
      width: 263px;
      height: 53px;
      background-color: #2a2c32;
      border-radius: 4px;
      border: solid 1px #444648;
      box-sizing: border-box;
      padding: 16px;
      font-size: 20px;
      line-height: 20px;
      color: #a0a0a0;
      box-shadow: none;
    }
    .err {
      border: solid 1px #f75a5a;
    }
    .edit_last {
      margin-left: 32px;
    }
  }
  .sendMsg1 {
    margin-bottom: 22px;
  }
  .other {
    margin-top: 52px;
    .checkbox {
      display: inline-block;
      font-size: 0;
      input[type="checkbox"],
      label {
        // dont highlight text when double clicking
        user-select: none;
        font-size: 20px;
        color: #a0a0a0;
        vertical-align: middle;
      }
      input[type="checkbox"] {
        position: relative;
        margin: 0 10px 0 0;
        padding: 0;
        text-align: center;
        width: 17px;
        height: 17px;
        border-radius: 4px;
        border: solid 1px #05e1e3;
        background: white;
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-border-radius: 4px;
        color: rgba(white, 0);
        transition: all 0.2s ease;
        // Better Font Rendering
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &:before {
          // checkmark
          content: "✔";
          font-size: 17px;
          vertical-align: top;
        }
        &:focus {
          outline: 0;
          border: 1px solid darken(#05e1e3, 5%);
        }
        &:active {
          outline: none;
        }
        &:hover {
          outline: none;
        }
        &:checked {
          // the color is what hides the checkmark
          color: rgba(#02c0c2, 1);
        }
      }
    }
  }
  .register_bt {
    display: block;
    width: 100%;
    height: 53px;
    background-color: #05e1e3;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 53px;
    margin-top: 73px;
    cursor: pointer;
  }
}
@media screen and (max-width: 720px) {
  .register_title {
    width: 82px;
    height: 21px;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 34px;
    letter-spacing: 0px;
    color: #ffffff;
    margin: 63px auto 12px;
  }
  h3 {
    font-size: 12px;
  }
  .register_form {
    width: 335px;
    height: 481px;
    margin: 15px auto 0;
    .edit {
      height: 32px;
      margin-top: 13px;
      font-size: 12px;
      padding: 11px;
    }
    .edit_wrap {
      border: none;
      height: 77px;
      padding: 0;
      input {
        width: 100%;
        height: 32px;
        padding: 11px;
        font-size: 12px;
      }
      .edit_last {
        margin: 13px 0 0 0;
      }
    }
    .sendMsg1 {
      margin-bottom: 13px;
    }
    .other {
      margin-top: 33px;
      .checkbox {
        input[type="checkbox"] {
          width: 12px;
          height: 12px;
          &:before {
            font-size: 12px;
          }
        }
        label {
          font-size: 12px;
        }
      }
    }
    .register_bt {
      height: 32px;
      font-size: 9px;
      line-height: 32px;
      margin-top: 40px;
    }
  }
}
</style>