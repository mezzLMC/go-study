<template>
<div id="payement" v-bind:style='{display: loaded? "block" : "none"}'>
    <div class="container" id="payementForm">
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
<conclusion ref="conclusion"></conclusion>
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
        "schedules": this.selectedHours.map(x => new Date(x).toISOString()),
        "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone
      }
      console.log(body)
      axios.post('http://localhost:8000/course', body,{
        headers: {"Access-Control-Allow-Origin": "*"},  
      })
    axios.post('https://api.go-study.fr/newcourse.php', body,{
        headers: {"Access-Control-Allow-Origin": "*"},
      })
      this.$refs["conclusion"].approve()
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
        await window.scrollTo(0,document.getElementById("payement").offsetTop)
    },
  }
}

</script>



