<template>
    <div id="kycPage">
        <upload></upload>
        <upload></upload>
         
    </div>

</template>

<script type="text/javascript">
import bus from "../components/bus";
import EXIF from "exif-js";
import {uploadImage} from "../data/usdxUrl"
import upload from '../components/upload'
// 统计img总数 防止重复
let imgNumber = 0;

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components:{
    upload
  }
};
</script>


<style lang="scss">
#kycPage {
  padding: 87px 8% 1155px 8%;
  max-width: 929px;
  font-size: 0;
  div:first-of-type {
    margin-right: 3%;
  }
}
@media screen and (max-width: 1080px) {
  #kycPage {
    padding: 31px 13px 88px 13px;
    div:first-of-type {
      margin-right: auto;
    }
  }
}
</style>