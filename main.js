import { createApp } from 'vue'
import App from './src/App.vue'

const app = createApp(App)
app.mount('#app')



let months = {
    "Janvier" : "01",
    "Fevrier" : "02",
    "Mars" : "03",
    "Avril" : "04",
    "Mai" : "05",
    "Juin" : "06",
    "Juillet" : "07",
    "Août" : "08",
    "Septembre" : "09",
    "Octobre" : "10",
    "Novembre" : "11",
    "Décembre" : "12"
}

window.onload = ()=>{
    let month = document.getElementsByClassName("vuecal__title")[0].children[0].innerHTML.split("(")[1].split(" 2")[0].split(" - ")
}




