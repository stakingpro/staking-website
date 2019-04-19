<template>
    <div id="edit_profile">
        <h1>WhiteList</h1>
        <div class="profile_form">
            <errMsg class="errmsg" :err_msg='err_msg' v-if="err_msg!==''"></errMsg>
            <div class="edit">
              <h2>First Name:</h2>
              <input type="text"  v-model="whiteListData.firstName" :class="{'err':isFirstNameErr}">
            </div>
            <div class="edit">
              <h2>Last Name:</h2>
              <input type="text"  v-model="whiteListData.lastName" :class="{'err':isLastNameErr}">
            </div>
            <div class="edit">
              <h2>Email:</h2>
              <input type="text"  v-model="whiteListData.mail" :class="{'err':isMailErr}">
            </div>
            <div class="edit">
              <h2>NEO Wallet Address:</h2>
              <input type="text"  v-model="whiteListData.address" :class="{'err':isAddressErr}">
            </div>
            <div class="edit">
              <h2>Estimated Number of Tokens Purchasing:</h2>
              <input type="text"  v-model="whiteListData.stimatedNumber" :class="{'err':isStimatedNumberErr}">
            </div>
            <div class="edit edit_p">
              <h2>Country:</h2>
              <input type="text" readonly v-model="whiteListData.country" @click="showCountryList($event)">
              <ul class="selections" v-show="showCountries">
                <li v-for="(item,index) in countries" :key="index" >
                  <label class="radio_beauty">
                      <span>{{item}}</span>
                      <input type="radio" v-model="whiteListData.country" :value="item" @focus="showCountryList" @click="hideCountryList" hidden='hidden'/>
                  </label>
                </li>
              </ul>
            </div>
            <div class="save" @click="save">Save</div>
        </div>
    </div>

</template>

<script type="text/javascript">
import errMsg from "../components/errMsg";
import axios from "axios";
import {whiteListUrl} from "../data/usdxUrl";
import bus from "../components/bus"

export default {
  data() {
    return {
      err_msg: "",
      whiteListData: {
        mail: "",
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        stimatedNumber: ""
      },
      countries: ["China", "England"],
      isMailErr: false,
      isFirstNameErr: false,
      isLastNameErr: false,
      isAddressErr: false,
      isCountryErr: false,
      isStimatedNumberErr: false,
      showCountries: false,
    };
  },
  methods: {
    clear() {
      this.err_msg = "";
      this.isMailErr = false;
      this.isFirstNameErr = false;
      this.isLastNameErr = false;
      this.isAddressErr = false;
      this.isCountryErr = false;
      this.isStimatedNumberErr = false;
    },
    checkInput() {
      if (!/[a-zA-Z]+/.test(this.whiteListData.firstName)) {
        this.clear();
        this.err_msg = "please input firstName";
        this.isFirstNameErr = true;
        return false;
      } else if (!/[a-zA-Z]+/.test(this.whiteListData.lastName)) {
        this.clear();
        this.err_msg = "please input lastName";
        this.isLastNameErr = true;
        return false;
      } else if (
        !/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(
          this.whiteListData.mail
        )
      ) {
        this.clear();
        this.err_msg = "please input email";
        this.isMailErr = true;
        return false;
      } else {
        this.clear();
        return true;
      }
    },
    save() {
      if (this.checkInput()) {
        let param = new URLSearchParams();
        param.append("firstName", this.whiteListData.firstName);
        param.append("lastName", this.whiteListData.lastName);
        param.append("mail", this.whiteListData.mail);
        param.append("address", this.whiteListData.address);
        param.append("country", this.whiteListData.country);
        param.append("stimatedNumber", this.whiteListData.stimatedNumber);
        param.append("register_user_id", this.$route.params.userId);
        axios.post(whiteListUrl, param).then(res => {
          if (res.data.status==='success') {
             bus.$emit('saveSuccess','success')
          }else{
            this.err_msg = res.data.msg;
          }
        }).catch(err=>{
          this.err_msg = err;
        });
      }
    },
    showCountryList(ev) {
      if (ev.stopPropagation) ev.stopPropagation();
      else ev.cancelBubble = true;
      this.showCountries = true;
    },
    hideCountryList() {
      this.showCountries = false;
    },
  },
  mounted(){
    console.log( this.$route.params.name );
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