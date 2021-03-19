<template>
<div class="container">
  <h2 style="text-align: centzsdedser;">乘客資訊</h2>

    <table class="table">
      <tr style="background-color:#f5f4f4;">
        <th>取票人</th>
        <th>身分證字號</th>
        <th>生日</th>
        <th>手機號碼</th>
        <th>email</th>
      </tr>
      
      <tr id="orderBoard" v-for="(item, index) in PassengerInformation" v-bind:key="index">
          <td>{{ index }} {{ item.name }}</td>
          <td><span v-text="item.idNum"></span></td>
          <td><span v-text="item.birthday"></span></td>
          <td><span v-text="item.phoneNum"></span></td>
          <td><span v-text="item.email"></span></td>
      </tr>
    </table>
    <p>
    <table class="table">
      <tr style="background-color:#f5f4f4;">
        <th>基本資料（請如實填寫）</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr style="padding-top: 1%;">
        <td>訂票人<br>FULL NAME</td>
        <td style="width: 75%;"><input v-model="PassengerInfo.name"></td>
        <td></td>
        <td></td>
      </tr>
      <tr  style="padding-top: 1%;">
        <td>身分證字號<br>PASSPORT ID</td>
        <td style="width: 75%;"><input v-model="PassengerInfo.idNum"></td>
        <td></td>
        <td></td>
      </tr>
      <tr  style="padding-top: 1%;">
        <td>生日<br>Birthday</td>
        <td style="width: 75%;"><input v-model="PassengerInfo.birthday"></td>
        <td></td>
        <td></td>
      </tr>
      <tr  style="padding-top: 1%;">
        <td>行動電話號碼<br>MOBILE NUMBER</td>
        <td style="width: 75%;"><input v-model="PassengerInfo.phoneNum"></td>
        <td></td>
        <td></td>
      </tr>
      <tr  style="padding-top: 1%;">
        <td>電子郵件<br>EMAIL</td>
        <td style="width: 75%;"><input v-model="PassengerInfo.email"></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    </p>
    <div class="totalprice">
      <button id="ConfirmButton">確認<br>Submit</button>
    </div>
</div>



</template>

<script>
export default {
  name: 'PassInfo',
  props: {
    msg: String
  },
   data: function () {
    return {
      orderinfo: 'orderinfo',
      shipName: 'shipName',
      departure: 'departure',
      destination: 'destination',
      PassengerInformation: [
            {
              name: '',
              idNum: '',
              birthday: '',
              phoneNum: '',
              email:'',
            },
            {
              name: 'Jimmy',
              idNum: 'A193764064',
              birthday: 'Mar/29th',
              phoneNum: '0914201932',
              email:'112233@gmail.com',
            },
            {
              name: 'Amy',
              idNum: 'F293764064',
              birthday: 'Mar/29th',
              phoneNum: '0914248932',
              email:'221133@gmail.com',
            },
      ],
      PassengerInfo: {
              name: '',
              idNum: '',
              birthday: '',
              phoneNum: '',
              email:'',
            }
    }
  } 
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-bottom: 20%;
  display: inline-table;
}

.table td{
  padding: 1.2rem 0.75rem;
}

h2{
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

table{
  width: 100%;
  margin: 0 auto;
  border: 1px solid #dee2e6;
  
}

td{
  width: 20%;
  vertical-align: middle!important;
}

th{
  width: 20%;
}

p{
  margin-top: 20px;
}

input{
  width: 66%;
  min-width: 120px;
}



.totalprice{
  display: flex;
  margin-left: 9%;
  position: relative;
}

#PurchasePrice{
  position: absolute;
  top: 1%;
  left: 1%;
}

#ConfirmButton{
  position: absolute;
  top: 1%;
  right: 10%;
}

</style>
