<template>
      <tr id="orderBoard">
          <td></td>
          <td><span v-text="_unitInfo.name"></span></td>
          <td><span v-text="_unitInfo.birthday"></span></td>
          <td><span v-text="_unitInfo.phoneNum"></span></td>
          <td><span v-text="_unitInfo.email"></span></td>
      </tr>
</template>

<script>
export default {
  name: "getInfo",

  props: {
    _unitInfo: {
      name: String,
      checkID: String,
      birthday: String,
      phoneNum: String,
      email: String,
    },
  },
  computed: {
    today() {
      return this.getToday();
    },
  },

  watch: {
    checkID: function () {
      var isText = /^[A-Z][1-2||8-9][0-9]{8}$/;
      if (!isText.test(this.checkID)) {
        this.checkIDError = true;
        this.checkIDErrMsg = "請檢查格式是否正確“開頭大寫‘A-Z’ + 後九碼‘0-9’”";
      } else if (this.checkID.length > 10) {
        this.checkIDError = true;
        this.checkIDErrMsg = "請勿超過10個字";
      } else {
        this.checkIDError = false;
        this.PassengerInformation[0].idNum = this.checkID;
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
        checkID: "",
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
