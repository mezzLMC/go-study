<template>
<div id="payement">
    <div class="row" id="timeline">
      <div style="width: 50%;text-align:center;" v-if="false">
        <div class="box" id="payementForm">
        <p>Paiement</p>
        <div id="form">
          <textarea name="surname" rows="1" placeholder="Nom" v-model="surname" class="formArea"></textarea> <br>
          <textarea name="firstname" rows="1" placeholder="Prénom" v-model="firstName"  class="formArea" ></textarea>
          <textarea name="mail" rows="1" placeholder="Adresse e-mail" v-model="mail" class="formArea" style="width: 95%;margin-top:10px;"></textarea>
          <div ref="paypal" id="paypal"></div>
          <br>
        </div>
      </div>
      </div>
      <div style="width: 50%;text-align:center;">
        <div class="box" id="confirmation">
          <p>Confirmation</p>
          <img src="../assets/booked.svg" height="200px"> 
          <p style="font-size: 30px;margin-bottom:0;">Votre résérvation a bien été enregistrée!</p>
          <p style="font-size: 24px; font-weight: 500; padding-left: 5%; padding-right: 5%;margin-top: 10px">
            un email récapitulant vos prochains cours et les informations pour l'accès aux cours à été envoyé a votre adresse. Merci de votre réservation ! 
          </p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import '../css/component.css'
import Loading from "./loaderPage.vue"
import Conclusion from "./ConclusionPage.vue"

export default{
  components: {Loading,Conclusion},
  data(){
    return{
      surname: "",
      firstName: "",
      mail: "",
      loaded: false,
      isloading: false,
    }
  },
  props: {
    "hoursCounter": Number,
    "selectedHours": Array,
    "events": Array,
  },
  methods: {
    submit(){
      let body = {
        "firstName": this.firstName,
        "surname": this.surname,
        "mail": this.mail,
        "schedules": this.selectedHours.map(x=> x.toISOString().replace(/\.[0-9]{3}/, '')),
        "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone
      }
      /*
      axios.post('http://localhost:8000/course', body,{
        headers: {"Access-Control-Allow-Origin": "*"},  
      })
      */
     axios.post('https://api.go-study.fr/newcourse.php', body,{
        headers: {"Access-Control-Allow-Origin": "*"},
      }) 
      
      //this.$refs["conclusion"].approve()
    },
    goPayement: async function() {
       await window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.hoursCounter + " heures de cours",
                  amount: {
                    currency_code: "EUR",
                    value: this.hoursCounter * 15
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.submit();
            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        }).render(document.getElementById("paypal"))
        this.loaded = true
        window.scroll(0, document.getElementById("payement").offsetTop)
    },
  }
}

</script>
<style>
#payement{
    position: absolute;
    top: 200%;
    width: 100%;
    height: 100%;
    background-color: #6200EE;
}
.box{
    width: 700px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
    height: 480px;
    border-radius: 48px;
    background-color: #E3E5E5;
    padding: 10px;
    font: "Inter";
    color: #3A147B;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
#form{
  margin-top: 30px;
  margin-left: 20px;
}
.formArea{
    box-shadow: var(--shadow-large);
    border-radius: 15px;
    border: none;
    font-size: 20px;
    padding-left: 10px;
    line-height: 50px;
    height: 55px;
    vertical-align: middle;
    margin-bottom: 15px;
    width: 80%;
}
.formArea::placeholder{
    font-weight: 500;
    color: #3A147B;
}
p{
  font-size: 35px;
}
textarea{
  resize: none;
}
#paypal{
  width: 85%;
  position: relative;
  left: 50%;
  margin-left: -15px;
  transform: translateX(-50%)
  
}
.paypal-powered-by{
  display: none;
}
#timeline{
  width: 2000px;
  display: flex;
  left: 30px;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  overflow: scroll;
}
</style>


