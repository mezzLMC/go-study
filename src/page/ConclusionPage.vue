<template lang="pug" >
#conclusion(v-bind:style={display: paypalApproved ? "block" : "none"})
    nav.navbar.navbar-expand-lg
        .container-fluid
            a#topLogo.navbar-brand.title1 Ayoub Zalali
            #navbarNav.collapse.navbar-collapse
    p#conclusionBody
        img(src="../assets/finalbackground.png")
        br
        span#thanks.title1 Merci de ta réservation!
        br
        span#email.regular-spaced Un e-mail contenant les informations de connexion 
            br
            | au(x) cours a été envoyé à ton adresse
    
</template>
<script>
export default {
    data(){
        return{
            paypalApproved: false
        }
    },
    methods:{
        approve(){
            this.paypalApproved = true
            window.scrollTo(0,document.getElementById("conclusion"))
        }
    }
}
</script>
<style>
#conclusionBody img{
    height: 60%;
    z-index: 20;
}
#conclusion{
    position: absolute;
    height: 100%;
    top: 200%;
    z-index: 30;
    width: 100%;
    background-color: #E3E5E5;
}
#conclusionBody{
    margin-top: 30px;
    height: 80%;
    text-align: center;
    width: auto;
}
#topLogo{
    color:white;    
}
#conclusionBody nav{
    background-color: #6B4EFF;
}
#email{
    font-size: 30px;
}
</style>