<template>
  <div class="container">
    <table>
      <!-- <getInfo v-bind:_unitInfo="PassengerInformation[0]"></getInfo> -->
      <!-- <getInfo v-bind:_unitInfo="PassengerInformation[2]"></getInfo> -->
      <tr style="background-color:#f5f4f4;">
        <th>訂票人</th>
        <th>身分證字號</th>
        <th>生日</th>
        <th>行動電話號碼</th>
        <th>電子郵件</th>
      </tr>
      <tr id="orderBoard" v-for="(item, index) in PassengerInfo" v-bind:key="index">
          <td> {{ PassengerInfo.name }}</td>
          <td> {{ PassengerInfo.idNum }}</td>
          <td> {{ PassengerInfo.birthday }}</td>
          <td> {{ PassengerInfo.phoneNum }}</td>
          <td> {{ PassengerInfo.email }}</td>
      </tr>
    </table>
      

    <table class="table">
      <tr style="background-color: #f5f4f4">
        <th>基本資料（請如實填寫）</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr style="padding-top: 1%">
        <td>訂票人<br />FULL NAME</td>
        <td style="width: 75%"><input v-model="PassengerInfo.name" /></td>
        <td></td>
        <td></td>
      </tr>
      <tr style="padding-top: 1%">
        <td>
          身分證字號<br />PASSPORT ID
          <select v-model="selNation">
            <option v-for="(item, index) in nationality" v-bind:key="index">
              {{ item.nationCon }}
            </option>
          </select>
        </td>
        <td style="width: 75%">
          <input
            type="text"
            v-bind:class="{ 'is-invalid': checkIDError }"
            v-model="checkID"
            placeholder="請輸入身分證字號"
          />

          <div class="invalid-feedback">
            {{ checkIDErrMsg }}
          </div>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr style="padding-top: 1%">
        <td>生日<br />Birthday</td>
        <td style="width: 75%">
          <input
            class="forn-control"
            type="date"
            v-model="PassengerInfo.birthday"
            :max="today"
          />
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr style="padding-top: 1%">
        <td>行動電話號碼<br />MOBILE NUMBER</td>
        <td style="width: 75%"><input v-model="PassengerInfo.phoneNum" /></td>
        <td></td>
        <td></td>
      </tr>
      <tr style="padding-top: 1%">
        <td>電子郵件<br />EMAIL</td>
        <td style="width: 75%"><input v-model="PassengerInfo.email" /></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <div class="totalprice">
      <button id="ConfirmButton">確認<br />Submit</button>
    </div>
  </div>
</template>

<script>
// import getInfo from "../components/getInfo.vue";
export default {
  name: "PassInfo",
  components: {
    // getInfo,
  },

  props: {
    msg: String,
  },
  computed: {
    today() {
      return this.getToday();
    },
  },

  watch: {
    checkID: function () {
      var isText = /^[A-Z]{1}[1-2||8-9]{1}[0-9]{8}$/;
      if (!isText.test(this.checkID)) {
        this.checkIDError = true;
        this.checkIDErrMsg = "請檢查格式是否正確“開頭大寫‘A-Z’ + 後九碼‘0-9’”";
      } else {
        this.checkIDError = false;
        this.PassengerInfor.idNum = this.checkID;
      }
      console.log(this.checkIDError);
    },
  },

  data: function () {
    return {
      checkID: "",
      checkIDError: false,
      checkIDErrMsg: "",
      orderinfo: "orderinfo",
      shipName: "shipName",
      departure: "departure",
      destination: "destination",
      selNation: "",
      nationality: [
        {
          nationCon: "本國人",
        },
        {
          nationCon: "Foreigner",
        },
      ],
      isShow: true,
      PassengerInformation: [
        {
          name: "",
          idNum: "",
          birthday: "",
          phoneNum: "",
          email: "",
        },
        {
          name: "Jimmy",
          idNum: "A193764064",
          birthday: "Mar/29th",
          phoneNum: "0914201932",
          email: "112233@gmail.com",
        },
        {
          name: "Amy",
          idNum: "F293764064",
          birthday: "Mar/29th",
          phoneNum: "0914248932",
          email: "221133@gmail.com",
        },
      ],
      PassengerInfo: {
        name: "",
        idNum: "",
        birthday: "",
        phoneNum: "",
        email: "",
      },
    };
  },
  methods: {
    initData() {
      this.selNation = this.nationality[0].nationCon;
    },
    // idCheckPass(e) {
    //     const value=e.target.value
    //     console.log(value)
    // },
  },
  mounted() {
    this.initData();
  },
  toggle: function () {
    this.isShow = !this.isShow;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-bottom: 20%;
  display: inline-table;
}

.table td {
  padding: 1.2rem 0.75rem;
}

h2 {
  width: 84%;
  margin: 0 auto;
  padding: 10px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #dee2e6;
}

td {
  width: 20%;
  vertical-align: middle !important;
}

th {
  width: 20%;
}

p {
  margin-top: 20px;
}

input {
  width: 66%;
  min-width: 120px;
}

.totalprice {
  display: flex;
  margin-left: 9%;
  position: relative;
}

#PurchasePrice {
  position: absolute;
  top: 1%;
  left: 1%;
}

#ConfirmButton {
  position: absolute;
  top: 1%;
  right: 10%;
}
</style>
