<template>
<div class="container">
    <table class="table">
      <tr style="background-color:#f5f4f4;">
        <th>基本資料</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr style="padding-top: 1%;">
        <td>訂票人<br>FULL NAME</td>
        <td style="width: 75%;"><input></td>
        <td></td>
        <td></td>
      </tr>
      <tr  style="padding-top: 1%;">
        <td>行動電話號碼<br>MOBILE NUMBER</td>
        <td style="width: 75%;"><input></td>
        <td></td>
        <td></td>
      </tr>
      <tr  style="padding-top: 1%;">
        <td>電子郵件<br>EMAIL</td>
        <td style="width: 75%;"><input></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <div class="totalprice">
      <button id="ConfirmButton">確認<br>Submit</button>
    </div>
</div>



</template>

<script>
export default {
  name: 'CreateOrder',
  props: {
    msg: String
  },
   data: function () {
    return {
      orderinfo: 'orderinfo',
      shipName: 'shipName',
      departure: 'departure',
      destination: 'destination',
      orderKinds: [
            {
              name: '東琉全票',
              amount: 1,
              unitPrice: 380,
              prepayment: 150,
            },
            {
              name: '東琉半票',
              amount: 1,
              unitPrice: 300,
              prepayment: 150,
            },
      ],
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
  width: 25%;
  vertical-align: middle!important;
}

th{
  width: 25%;
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
