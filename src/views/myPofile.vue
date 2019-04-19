<template>
    <div id="myProfile">
        <div id="toast" :class="{'active':showToast,'toastErr':isErr}">Profile updated successful !</div>
        <commonPageHead></commonPageHead>
        <div class="navBar" @click="navTab"></div>
        <div class='myProfile_wrap'>
            <div id='sideBar' :class="showNav?'active':''">
                <ul>
                    <router-link :to="{ name: 'edit_profile', params: { userId: this.$route.params.userId }}" tag="li" class="avatar" active-class="avatar_active">My Profile</router-link>
                    <router-link :to="{ name: 'edit_profile', params: { userId: this.$route.params.userId }}" tag="li" class="edit_link edit_profile" active-class="edit_profile_active">Edit Profile</router-link>
                    <router-link :to="{ name: 'white_list', params: { userId: this.$route.params.userId }}" tag="li" class="edit_link white_list" active-class="white_list_active">White List</router-link>
                    <router-link :to="{ name: 'change_password', params: { userId: this.$route.params.userId }}" tag="li" class="edit_link change_password" active-class="change_password_active">Change Password</router-link>
                    <router-link :to="{ name: 'kycpage', params: { userId: this.$route.params.userId }}" tag="li" class="kycpage" active-class="kycpage_active">Your KYC’s</router-link>
                </ul>
            </div>
           
            <div id='myProfile_content'>
                 <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
	    </div>
    </div>

</template>

<script type="text/javascript">
import commonPageHead from "../components/commonPageHead";
import bus from "../components/bus";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      showNav: false,
      showToast:false,
      isErr:false
    };
  },
  methods: {
    navTab() {
      this.showNav = !this.showNav;
    }
  },
  components: {
    commonPageHead
  },
  mounted() {
    bus.$on("saveSuccess", data => {
      this.showToast = true;
      this.isErr = false;
      setTimeout(()=>{
        this.showToast = false;
      },2000)
    });
    bus.$on("saveErr", data => {
      this.showToast = true;
      this.isErr = true;
      setTimeout(()=>{
        this.showToast = false;
      },2000)
    })
  }
};
</script>


<style lang="scss">
#myProfile {
  width: 100%;
  #toast {
    width: 441px;
    height: 75px;
    line-height: 75px;
    background-color: rgba(5, 225, 227, 0.8);
    border-radius: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 8;
    text-align: center;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: 0.3s cubic-bezier(0.18, 0.81, 0.3, 0.89);
    transition: 0.3s cubic-bezier(0.18, 0.81, 0.3, 0.89);
  }
  #toast.active{
    transform: translateY(0);
  }
  #toast.toastErr{
    background-color: #f75a5a;
  }
  .myProfile_wrap {
    width: 100%;
    overflow: hidden;
    #sideBar {
      float: left;
      width: 254px;
      margin-bottom: -2000px;
      padding: 90px 0 2000px 40px;
      box-sizing: border-box;
      box-shadow: 3px 0px 3px 0px rgba(21, 24, 29, 0.5);
      background-color: #23252a;
      .avatar {
        color: #575757;
        line-height: 20px;
        font-size: 20px;
        cursor: pointer;
        margin-bottom: 37px;
        padding-left: 37px;
        background-size: 20px 20px;
        background: url(../../images/myprofile_pc/MyProfile.png) no-repeat;
      }
      .avatar_active {
        background: url(../../images/myprofile_pc/MyProfile_click.png) no-repeat;
        color: #05e1e3;
      }
      .edit_link {
        color: #575757;
        padding-left: 28px;
        line-height: 20px;
        font-size: 16px;
        cursor: pointer;
        margin-bottom: 21px;
        margin-left: 23px;
        background-size: 20px 20px;
      }
      .edit_profile {
        background: url(../../images/myprofile_pc/EditProfile.png) no-repeat;
        background-size: 15px 20px;
      }
      .white_list {
        background: url(../../images/myprofile_pc/WhiteList.png) no-repeat;
      }
      .change_password {
        background: url(../../images/myprofile_pc/ChangePassword.png) no-repeat;
      }
      .edit_profile_active {
        background: url(../../images/myprofile_pc/EditProfile_click.png)
          no-repeat;
        color: #05e1e3;
      }
      .white_list_active {
        background: url(../../images/myprofile_pc/WhiteList_click.png) no-repeat;
        color: #05e1e3;
      }
      .change_password_active {
        background: url(../../images/myprofile_pc/ChangePassword_click.png)
          no-repeat;
        color: #05e1e3;
      }
      .kycpage {
        color: #575757;
        line-height: 20px;
        font-size: 20px;
        cursor: pointer;
        margin-top: 45px;
        padding-left: 37px;
        background-size: 20px 20px;
        background: url(../../images/myprofile_pc/KYC.png) no-repeat;
      }
      .kycpage_active {
        background: url(../../images/myprofile_pc/KYC_click.png) no-repeat;
        color: #05e1e3;
      }
    }
    #myProfile_content {
      overflow: hidden;
      padding-bottom: 2000px;
      margin-bottom: -2000px;
      background-color: #191b1e;
    }
  }
}
@media screen and (max-width: 720px) {
  #myProfile {
    width: 100%;
    .navBar {
      display: block;
      width: 23px;
      height: 17px;
      position: absolute;
      right: 10px;
      top: 18px;
      background: url("../../images/mobile/nav_bar_icon.png");
      background-repeat: no-repeat;
    }
    .myProfile_wrap {
      width: 100%;
      #sideBar {
        position: fixed;
        top: 0;
        left: 0;
        width: 167px;
        height: 100%;
        padding: 26px 0 0 14px;
        box-sizing: border-box;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        -webkit-transition: 0.3s cubic-bezier(0.18, 0.81, 0.3, 0.89);
        transition: 0.3s cubic-bezier(0.18, 0.81, 0.3, 0.89);
        z-index: 5;
        .avatar {
          line-height: 14px;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 28px;
          padding-left: 31px;
          background-size: 14px 14px;
        }
        .edit_link {
          padding-left: 28px;
          line-height: 14px;
          font-size: 11px;
          margin-bottom: 15px;
          margin-left: 16px;
          background-size: 14px 14px;
        }
        .kycpage {
          line-height: 14px;
          font-size: 14px;
          cursor: pointer;
          margin-top: 33px;
          padding-left: 31px;
          background-size: 14px 14px;
        }
        .edit_profile {
          background-size: 11px 14px;
        }
      }
      #sideBar.active {
        transform: translateX(0);
      }
      #myProfile_content {
        width: 100%;
      }
    }
  }
}
</style>