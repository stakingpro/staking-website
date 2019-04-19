<template>
    <div id="sendEmail">
        <commonPageHead></commonPageHead>
        <h2 class="sendEmail_title">PASSWORD</h2>
        <p v-if="!sended">Reset your password</p>
        <div class="sendEmail_form" v-if="!sended">
            <errMsg :err_msg='err_msg' v-if="err_msg!==''"></errMsg>
            <input type="text" class="email_input input" v-model="sendEmailData.email" placeholder="Email" :class="{'err':isEmailErr}">
            
            <span class="sendEmail_bt" @click="sendEmail">send reset link</span>
            <span class="cancle_bt" @click="cancle">CANCEL</span>
        </div>
        <div class="sended" v-if="sended">We have e-mailed your password reset link!
            <i class="close">X</i>
        </div>
        <div class="other">
            <span>Not a member yet?</span>
            <router-link tag='span' :to="{path:'/register'}" class="register">Create an Account</router-link>
        </div>
    </div>

</template>

<script type="text/javascript">
import commonPageHead from "../components/commonPageHead";
import errMsg from "../components/errMsg";
import axios from "axios";
import { sendMail } from "../data/usdxUrl";
import bus from "../components/bus";

export default {
  data() {
    return {
      err_msg: "",
      sendEmailData: {
        email: ""
      },
      isEmailErr: false,
      sended: false
    };
  },
  methods: {
    clear() {
      this.err_msg = "";
      this.isEmailErr = false;
    },
    checkInput() {
      if (
        !/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(
          this.sendEmailData.email
        )
      ) {
        this.clear();
        this.err_msg = "please input email";
        this.isEmailErr = true;
        return false;
      } else {
        this.clear();
        return true;
      }
    },
    sendEmail() {
      if (this.checkInput()) {
        let param = new URLSearchParams();
        param.append("mail", this.loginData.email);
        axios.post(sendMail, param).then(res => {
          if (res.data.status==='success') {
            this.sended = true;
          }else{
            bus.$emit("saveErr", "邮件发送失败");
          }
        }).catch(err=>{
          this.err_msg = err;
        });
      }
    },
    cancle() {
      console.log(1111111);
    }
  },
  components: {
    commonPageHead,
    errMsg
  }
};
</script>


<style lang="scss">
#sendEmail {
  .sendEmail_title {
    height: 38px;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 34px;
    letter-spacing: 0px;
    color: #ffffff;
    margin: 84px auto 39px;
    text-align: center;
  }
  p {
    font-size: 16px;
    color: #ffffff;
    text-align: center;
  }
  .sendEmail_form {
    width: 532px;
    height: 449px;
    border-radius: 4px;
    margin: 49px auto 50px;
    box-sizing: border-box;
    padding: 33px 76px 0;
    .input {
      width: 380px;
      height: 50px;
      border-radius: 4px;
      border: 1px solid #a0a0a0;
      box-sizing: border-box;
      padding: 16px 22px;
      background: rgba(0, 0, 0, 0);
      margin-top: 13px;
      box-shadow: none;
      font-size: 20px;
      color: #a0a0a0;
      line-height: 50px;
    }
    .err {
      border: solid 1px #f75a5a;
    }

    .sendEmail_bt {
      display: block;
      width: 380px;
      height: 50px;
      background-color: #02c0c2;
      box-shadow: 0px 3px 8px 0px rgba(2, 178, 180, 0.5);
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      line-height: 50px;
      margin-top: 54px;
      cursor: pointer;
    }
    .cancle_bt {
      display: block;
      width: 380px;
      height: 50px;
      border-radius: 4px;
      border: solid 1px #05e1e3;
      font-size: 16px;
      color: #fff;
      text-align: center;
      line-height: 50px;
      margin-top: 54px;
      cursor: pointer;
    }
  }
  .sended {
    position: relative;
    width: 402px;
    height: 50px;
    border-radius: 4px;
    border: solid 1px #05e1e3;
    margin: 131px auto 45px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #05e1e3;
    .close {
      width: 12px;
      height: 11px;
      font-size: 12px;
      margin-left: 35px;
    }
  }
  .other {
    text-align: center;
    font-size: 16px;
    color: #757575;
    margin-top: 29px;
    .register {
      color: #00c9cb;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 720px) {
  #sendEmail {
    .sendEmail_title {
      height: 21px;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #ffffff;
      margin: 63px auto 39px;
    }
    .sendEmail_form {
      width: 334px;
      height: 282px;
      margin: 31px auto 0;
      padding: 18px 48px 0;
      .input {
        width: 240px;
        height: 32px;
        padding: 12px 14px;
        margin-top: 9px;
        font-size: 12px;
        line-height: 32px;
      }
      .sendEmail_bt,
      .cancle_bt {
        width: 240px;
        height: 32px;
        font-size: 10px;
        line-height: 32px;
        margin-top: 48px;
      }
    }
    .sended {
      position: relative;
      width: 302px;
      height: 30px;
      margin: 101px auto 45px;
      line-height: 30px;
      font-size: 12px;
    }
    .other {
      font-size: 12px;
      margin-top: 29px;
    }
  }
}
</style>