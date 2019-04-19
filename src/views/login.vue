<template>
    <div id="login_page">
        <commonPageHead></commonPageHead>
        <h2 class="login_title">LOGIN</h2>
        <div class="login_form">
            <errMsg :err_msg='err_msg' v-if="err_msg!==''"></errMsg>
            <successMsg :err_msg='success_msg' v-if="success_msg!==''&&success_msg!=undefined"></successMsg>
            <input type="text" class="email_input input" v-model="loginData.email" placeholder="Email" :class="{'err':isEmailErr}">
            <input type="password" class="pw_input input" v-model="loginData.passWord" placeholder="Password" :class="{'err':isPasswordErr}">
            <div class="other">
                <div id="remember">
                  <div class="checkbox"> 
                    <input type="checkbox"/> 
                    <label >Remember me</label> 
                  </div>
                </div>
                
                <router-link :to="{path:'/my_pofile/edit_profile'}" class="forget">Forgot password?</router-link>
            </div>
            <span class="login_bt" @click="login">LOGIN</span>
            <router-link :to="{path:'/register'}" class="register">Don’t have an account yet? Get started!</router-link>
        </div>
    </div>

</template>

<script type="text/javascript">
import commonPageHead from "../components/commonPageHead";
import errMsg from "../components/errMsg";
import successMsg from "../components/successMsg";
import axios from "axios";
import { loginUrl } from "../data/usdxUrl";

export default {
  data() {
    return {
      err_msg: "",
      success_msg:'',
      loginData: {
        email: "",
        passWord: ""
      },
      isEmailErr: false,
      isPasswordErr: false,
      remember: false
    };
  },
  created(){
    this.success_msg = this.$route.params.resetPassword;
    console.log(this.$route.params.resetPassword);
    
  },
  methods: {
    clear() {
      this.err_msg = "";
      this.isEmailErr = false;
      this.isPasswordErr = false;
    },
    checkInput() {
      if (
        !/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(
          this.loginData.email
        )
      ) {
        this.clear();
        this.err_msg = "please input email";
        this.isEmailErr = true;
        return false;
      } else if (!/^[a-zA-Z0-9]{6,20}$/.test(this.loginData.passWord)) {
        this.clear();
        this.err_msg = "please input passWord";
        this.isPassWordErr = true;
        return false;
      } else {
        this.clear();
        return true;
      }
    },
    login() {
      if (this.checkInput()) {
        let param = new URLSearchParams();
        param.append("registerMail", this.loginData.email);
        param.append("password", this.loginData.passWord);
        axios.post(loginUrl, param).then(res => {
          if (res.data.status==='success') {
            this.$router.push({ name: 'edit_profile', params: { userId: res.data.userId }})
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
    errMsg,
    successMsg
  }
};
</script>


<style lang="scss">
.login_title {
  width: 137px;
  height: 38px;
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 34px;
  letter-spacing: 0px;
  color: #ffffff;
  margin: 84px auto 0;
}
.login_form {
  width: 532px;
  height: 449px;
  background-color: #eeeeee;
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
  }
  .err {
    border: solid 1px #f75a5a;
  }
  .other {
    margin-top: 14px;
    font-size: 0;
    #remember {
      vertical-align: middle;
      display: inline-block;
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
    .forget {
      color: #00c9cb;
      font-size: 16px;
      display: inline-block;
      vertical-align: middle;
      margin-left: 85px;
    }
  }
  .login_bt {
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
    margin-top: 78px;
    cursor: pointer;
  }
  .register {
    display: block;
    text-align: center;
    margin-top: 14px;
    font-size: 16px;
    color: #00c9cb;
  }
}
@media screen and (max-width: 720px) {
  .login_title {
    width: 82px;
    height: 21px;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 34px;
    letter-spacing: 0px;
    color: #ffffff;
    margin: 63px auto 0;
  }
  .login_form {
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
    }
    .other {
      margin-top: 7px;
      #remember {
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
      .forget {
        font-size: 10px;
        margin-top: 3px;
        margin-left: 40px;
      }
    }
    .login_bt {
      width: 240px;
      height: 32px;
      font-size: 10px;
      line-height: 32px;
      margin-top: 48px;
    }
    .register {
      margin-top: 12px;
      font-size: 10px;
    }
  }
}
</style>