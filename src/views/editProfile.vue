<template>
    <div id="edit_profile">
        <h1>Edit Profile</h1>
        <div class="profile_form">
            <errMsg class="errmsg" :err_msg='err_msg' v-if="err_msg!==''"></errMsg>
            <div class="edit">
              <h2>Email:</h2>
              <input type="text"  v-model="profileData.basicMail" :class="{'err':isBasicMailErr}">
            </div>
            <div class="edit edit_p">
              <h2>Title:</h2>
              <input type="text" readonly v-model="profileData.title" @click="showTitleList($event)">
              <ul class="selections" v-show="showTitles">
                <li v-for="(item,index) in titles" :key="index" >
                  <label class="radio_beauty">
                      <span>{{item}}</span>
                      <input type="radio" v-model="profileData.title" :value="item" @focus="showTitleList" @click="hideTitleList" hidden='hidden'/>
                  </label>
                </li>
              </ul>
            </div>
            <div class="edit">
              <h2>First Name:</h2>
              <input type="text"  v-model="profileData.firstName" :class="{'err':isFirstNameErr}">
            </div>
            <div class="edit">
              <h2>Last Name:</h2>
              <input type="text"  v-model="profileData.lastName" :class="{'err':isLastNameErr}">
            </div>
            <div class="edit edit_p">
              <h2>Your Country</h2>
              <input type="text" readonly v-model="profileData.country" @click="showCountryList($event)">
              <ul class="selections" v-show="showCountries">
                <li v-for="(item,index) in countries" :key="index" >
                  <label class="radio_beauty">
                      <span>{{item}}</span>
                      <input type="radio" v-model="profileData.country" :value="item" @focus="showCountryList" @click="hideCountryList" hidden='hidden'/>
                  </label>
                </li>
              </ul>
            </div>
            <div class="birth">
              <div class="edit_birth edit_p">
                <h2>Date of Birth</h2>
                <input type="text" readonly v-model="profileData.day" @click="showDayList($event)">
                <vue-scrollbar ref="Scrollbar" class="selections" v-show="showDays" >
                  <ul>
                    <li v-for="(item,index) in days" :key="index" >
                      <label class="radio_beauty">
                          <span>{{item}}</span>
                          <input type="radio" v-model="profileData.day" :value="item" @focus="showDayList" @click="hideDayList" hidden='hidden'/>
                      </label>
                    </li>
                  </ul>
                </vue-scrollbar>
              </div>
              <div class="edit_birth edit_p">
                <h2>Month</h2>
                <input type="text" readonly v-model="profileData.month" @click="showMonthList($event)">
                <vue-scrollbar ref="Scrollbar" class="selections" v-show="showMonthes" :createElements='true'>
                  <ul>

                    <li v-for="(item,index) in monthes" :key="index" >
                      <label class="radio_beauty">
                          <span>{{item}}</span>
                          <input type="radio" v-model="profileData.month" :value="item" @focus="showMonthList" @click="hideMonthList();updateDateList()" hidden='hidden'/>
                      </label>
                    </li>
                  </ul>
                </vue-scrollbar>
              </div>
              <div class="edit_birth edit_p">
                <h2>Year</h2>
                <input type="text" readonly  v-model="profileData.year" @click="showYearList($event)">
                <vue-scrollbar ref="Scrollbar" class="selections" v-show="showYears">
                  <ul>
                    <li v-for="(item,index) in years" :key="index" >
                      <label class="radio_beauty">
                          <span>{{item}}</span>
                          <input type="radio" v-model="profileData.year" :value="item" @focus="showYearList" @click="hideYearList();updateDateList()" hidden='hidden'/>
                      </label>
                    </li>
                  </ul>
                </vue-scrollbar>
              </div>
            </div>
            <div class="checkbox sendMsg1"> 
              <input type="checkbox" value="1" v-model="profileData.sendMsg1"/> 
              <label >I would like to receive an email after every login</label> 
            </div>
            <div class="checkbox"> 
              <input type="checkbox" value="1" v-model="profileData.sendMsg2"/> 
              <label >I would like to receive news and updates by email</label> 
            </div>
            <div class="save" @click="save">Save</div>
        </div>
    </div>

</template>

<script type="text/javascript">
import errMsg from "../components/errMsg";
import VueScrollbar from "vue2-scrollbar";

import axios from "axios";
import { saveBasic_info } from "../data/usdxUrl";
import "../styles/vue2-scrollbar.css";
import bus from "../components/bus";

export default {
  data() {
    return {
      err_msg: "",
      profileData: {
        basicMail: "",
        title: "Mr",
        firstName: "",
        lastName: "",
        country: "China",
        birthDay: "",
        sendMsg1: "",
        sendMsg2: "",
        year: "2018",
        month: "2",
        day: "27"
      },
      titles: ["Mr", "Ms"],
      countries: ["China", "England"],
      years: [],
      monthes: [],
      days: [],
      showTitles: false,
      showCountries: false,
      showYears: false,
      showMonthes: false,
      showDays: false,
      isBasicMailErr: false,
      isFirstNameErr: false,
      isLastNameErr: false
    };
  },
  created() {
    this.updateDateList();
  },

  methods: {
    showTitleList(ev) {
      if (ev.stopPropagation) ev.stopPropagation();
      else ev.cancelBubble = true;
      this.showTitles = true;
    },
    hideTitleList() {
      this.showTitles = false;
    },
    showCountryList(ev) {
      if (ev.stopPropagation) ev.stopPropagation();
      else ev.cancelBubble = true;
      this.showCountries = true;
    },
    hideCountryList() {
      this.showCountries = false;
    },
    showYearList(ev) {
      if (ev.stopPropagation) ev.stopPropagation();
      else ev.cancelBubble = true;
      this.showYears = true;
    },
    hideYearList() {
      this.showYears = false;
    },
    showMonthList(ev) {
      if (ev.stopPropagation) ev.stopPropagation();
      else ev.cancelBubble = true;
      this.showMonthes = true;
    },
    hideMonthList() {
      this.showMonthes = false;
    },
    showDayList(ev) {
      if (ev.stopPropagation) ev.stopPropagation();
      else ev.cancelBubble = true;
      this.showDays = true;
    },
    hideDayList() {
      this.showDays = false;
    },
    updateDateList() {
      this.$nextTick(() => {
        this.years.splice(0, this.years.length);
        this.monthes.splice(0, this.monthes.length);
        this.days.splice(0, this.days.length);
        for (let i = 1918; i <= 2018; i++) {
          this.years.push(i);
        }
        for (let i = 1; i <= 12; i++) {
          this.monthes.push(i);
        }
        var maxDay = 30;
        var currentMonth = this.profileData.month * 1;

        var currentYear = this.profileData.year * 1;
        if (
          currentMonth == 1 ||
          currentMonth == 3 ||
          currentMonth == 5 ||
          currentMonth == 7 ||
          currentMonth == 8 ||
          currentMonth == 10 ||
          currentMonth == 12
        ) {
          maxDay = 31;
        } else if (currentMonth == 2) {
          if (currentYear % 4 == 0 || currentYear % 400 == 0) {
            maxDay = 29;
          } else {
            maxDay = 28;
          }
        }
        for (let i = 1; i <= maxDay; i++) {
          this.days.push(i);
        }
      });
    },
    clear() {
      this.err_msg = "";
      this.isBasicMailErr = false;
      this.isFirstNameErr = false;
      this.isLastNameErr = false;
    },
    checkInput() {
      if (
        !/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(
          this.profileData.basicMail
        )
      ) {
        this.clear();
        this.err_msg = "please input email";
        this.isBasicMailErr = true;
        return false;
      } else if (!/[a-zA-Z]+/.test(this.profileData.firstName)) {
        this.clear();
        this.err_msg = "please input firstName";
        this.isFirstNameErr = true;
        return false;
      } else if (!/[a-zA-Z]+/.test(this.profileData.lastName)) {
        this.clear();
        this.err_msg = "please input lastName";
        this.isLastNameErr = true;
        return false;
      } else {
        this.clear();
        return true;
      }
    },
    save() {
      if (this.checkInput()) {
        let month = "";
        if (this.profileData.month * 1 < 10) {
          month = `0${this.profileData.month}`;
        }
        this.profileData.birthDay = `${this.profileData.year}-${month}-${
          this.profileData.day
        }`;
        let param = new URLSearchParams();
        param.append("title", this.profileData.title);
        param.append("birthDay", this.profileData.birthDay);
        param.append("country", this.profileData.country);
        param.append("firstName", this.profileData.firstName);
        param.append("lastName", this.profileData.lastName);
        param.append("basicMail", this.profileData.basicMail);
        if (this.profileData.sendMsg1) {
          param.append("sendMsg1", "1");
        }
        if (this.profileData.sendMsg2) {
          param.append("sendMsg2", "1");
        }
        param.append("userId", this.$route.params.userId);
        axios
          .post(saveBasic_info, param)
          .then(res => {
            if (res.data.status === "success") {
              bus.$emit("saveSuccess", "success");
            } else {
              this.err_msg = res.data.msg;
            }
          })
          .catch(err => {
            this.err_msg = err;
          });
      }
    }
  },
  components: {
    errMsg,
    VueScrollbar
  },
  mounted() {
    document.addEventListener("click", () => {
      this.hideTitleList();
      this.hideCountryList();
      this.hideYearList();
      this.hideMonthList();
      this.hideDayList();
    });
  }
};
</script>


<style lang="scss">
#edit_profile {
  padding: 80px 10% 0 10%;
  max-width: 780px;
  input[type="radio"]::-ms-check,
  input[type="checkbox"]::-ms-check {
    display: none;
  }
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
    overflow: hidden;
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
    .edit_p {
      position: relative;
      width: 100%;
      .selections {
        position: absolute;
        bottom: -373px;
        left: 0;
        height: 373px;
        width: 100%;
        background-color: #2e3137;
        box-sizing: border-box;
        font-size: 0;
        z-index: 2;
        overflow: hidden;
        li {
          position: relative;
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 39px;
          color: #ffffff;
          height: 39px;
          .radio_beauty {
            display: block;
            width: 100%;
            height: 39px;
            &:hover {
              background-color: #02babc;
            }
          }
          input[type="radio"]:checked + .radio_beauty {
            background: #02babc;
          }
        }
      }
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40px;
        height: 53px;
        background: url(../../images/myprofile_pc/button.png) no-repeat;
      }
    }
    .birth {
      margin-top: 47px;
      width: 100%;
      font-size: 0;
      div:first-of-type {
        margin-left: 0;
      }
      .edit_birth {
        width: 29%;
        display: inline-block;
        margin-left: 6.5%;
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
          border: solid 1px #f75a5a;
          margin-top: 15px;
          font-size: 20px;
        }
      }
    }
    .sendMsg1 {
      margin: 76px 0 17px 0;
    }
    .checkbox {
      display: inline-block;
      font-size: 0;
      white-space: nowrap;
      overflow: hidden;
      input[type="checkbox"],
      label {
        // dont highlight text when double clicking
        user-select: none;
        font-size: 20px;
        color: #a0a0a0;
        vertical-align: middle;
        overflow: hidden;
        white-space: nowrap;
      }
      input[type="checkbox"] {
        position: relative;
        margin: 0 31px 0 0;
        width: 74px;
        height: 52px;
        background: url(../../images/myprofile_pc/button_uncheck.png) no-repeat;
        background-size: contain;
        background-position: center center;
        border: none;
        border-radius: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::before {
          content: "";
        }
        &:focus {
          outline: none;
          border: none;
        }
        &:active {
          outline: none;
          border: none;
        }
        &:hover {
          outline: none;
          border: none;
        }
        &:checked {
          // the color is what hides the checkmark
          border: none;
          background: url(../../images/myprofile_pc/button_check.png) no-repeat;
          background-size: contain;
          background-position: center center;
        }
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
      margin-bottom: 197px;
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
      .edit_p {
        .selections {
          height: 213px;
          bottom: -213px;
          li {
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 28px;
            color: #ffffff;
            height: 28px;
            input[type="radio"] {
              height: 28px;
            }
          }
        }
        &::before {
          width: 24px;
          height: 30px;
          background-size: 24px 30px;
        }
      }
      .birth {
        margin-top: 0;
        width: 100%;
        .edit_birth {
          width: 100%;
          display: block;
          margin: 0;
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
      }
      .sendMsg1 {
        margin: 21px 0 7px 0;
      }
      .checkbox {
        input[type="checkbox"] {
          width: 33px;
          height: 27px;
        }
        label {
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