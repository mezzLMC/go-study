<template lang="pug">
hero-banner
#p2holder
reservation
</template>

<script>
import "./css/component.css"
import HeroBanner from './page/HeroBannerPage.vue'
import Reservation from "./page/reservationPage.vue"
import { deviceDetect } from 'mobile-device-detect';

export default {
  data(){
    return{
      togglePayement: true
    }
  },
  components: {
      "hero-banner": HeroBanner,
      "reservation": Reservation,
  },
  mounted(){
    console.log(deviceDetect())
  }

};


</script>

<style>
html {
  scroll-behavior: smooth;
}
#app{
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

}

*{
    --purple-dark: #6B4EFF;
    --purle-primary: #C6C4FF;
    --purple-light: #9990FF;
    --shadow-small: 0px 0px 1px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.08);
    --shadow-medium: 0px 0px 1px rgba(20, 20, 20, 0.08), 0px 1px 8px 2px rgba(20, 20, 20, 0.08);
    --shadow-large: 0px 1px 24px 8px rgba(20, 20, 20, 0.08);
}

#p2holder{
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
    background-color: #6200EE;
    z-index: 1000;
}
.login{
    width: 170px;
    height: 58px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
}
.vuecal__event-time{
    display: none;
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {  
    #p2holder{
        height: 15px;
    }
    .login{
        width: 170px;
        height: 50px;
    }
}
</style>

