export default {
    methods: {
        moveOneDay(_date, _symbol, _limitDate) {
            // _symbol : 增加/減少一天 ;
            // _limitDate : 不能低於的日期 ; ex: trip1.time 不能低於今天, trip2.time 不能低於blockdate ;
            let date = new Date(_date);
            if (_symbol === "+") date.setDate(date.getDate() + 1);
            else if (_symbol === "-") date.setDate(date.getDate() - 1);
      
            let yyyy = date.getFullYear();
            let mm = date.getMonth() + 1; // 1月為 0 ;
            let dd = date.getDate();
            if (dd < 10) {
              dd = "0" + dd;
            }
            if (mm < 10) {
              mm = "0" + mm;
            }
      
            date = yyyy + "-" + mm + "-" + dd;
            
            if (date < _limitDate)
              // 不讓使用者選到低於限制日期 ;
              date = _limitDate; // trip1.time 不能低於今天 ; trip2.time 不能低於 trip1.time ;
      
            return date;
        },
        getToday() {
          let date = new Date();
          let yyyy = date.getFullYear();
          let mm = date.getMonth() + 1; // 1月為 0 ;
          let dd = date.getDate();
          if (dd < 10) {
            dd = "0" + dd;
          }
          if (mm < 10) {
            mm = "0" + mm;
          }
          
          return yyyy + "-" + mm + "-" + dd;
        },
        alertPopup( _msg ) {
          this.$emit('alert-popup', _msg) ;
        }
    }
    
}