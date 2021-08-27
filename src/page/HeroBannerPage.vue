<template>
<div id="p1">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid"><a class="navbar-brand title1" id="topLogo">GoStudy</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><input class="login button outline-light" type="button" value="Se connecter" /></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="row" id="herobanner">
        <div id="pave">
            <p class="title1"> Réservez vos cours hebdomadaire de manière simple et efficace. </p><br />
            <p class="regular-spaced">Cliquez sur le bouton pour réserver vos premières heures </p><br /><input class="button fill-dark reg-nn-medium" id="herobStart" type="button" v-on:click="scrollTop" value="Réserver" /><br />
        </div><img id="herobIllu" src='./herobanilu.png' />
    </div>
    <div class="row" id="technos">
        <div class="col">
            <div class="active techno"><img class="technoImg" id="ppal" src='./paypalfinal.png' /></div>
            <div class="technoExplain active">
                <p class="technoExp active">Connexion et payement simple et sécurisé</p>
            </div>
        </div>
        <div class="col">
            <div class="techno"><img class="technoImg" id="zoom" src='./Zoom-Logo-650x366.png' /></div>
            <div class="technoExplain">
                <p class="technoExp">Accès rapide sur toute les plateformes</p>
            </div>
        </div>
        <div class="col">
            <div class="techno"><img class="technoImg" id="gagenda" src='./google-calendar.png' /></div>
            <div class="technoExplain">
                <p class="technoExp">Synchronisation automatique personnalisée</p>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>

let counter = 0
let moveInterval = window.setInterval(() => {
    let technoArray = document.getElementsByClassName("techno")
    let explainArray = document.getElementsByClassName("technoExplain")
    technoArray[counter].classList.remove("active")
    explainArray[counter].classList.remove("active")
    counter == 2 ? counter = 0 : counter=counter+1 
    technoArray[counter].classList.add("active")
    explainArray[counter].classList.add("active")
}, 5000);

export default {
    data(){
        return{
            //herobanilu: require("./herobanilu.png"),
            //paypalfinal: require("../assets/paypal final.png"),
            //calendar: require("../assets/google-calendar.png"),
            //zoom: require("/assets/Zoom-Logo-650x366.png")
        }
    },
    methods: {
         scrollTop(){
            let y = document.getElementById("p2").offsetTop
            console.log(y)
            window.scrollTo(0,y)
        }
    }
}

</script>

<style>
#p1{
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    height: 100%;
    display: block;
    overflow: hidden;
}
#topLogo{
    margin-left: 20px;
    color: #6B4EFF !important;
}

#pave{
    max-width: 600px;
    margin-left: 40px;
    margin-top: 70px;
    position: relative;
    z-index: 20;
}
#herobStart{
    margin-top: -10px;
    height: 80px;
    font-size: 35px;
    width: 300px;
    font: "inter";
    font-weight: 600;
}
#herobIllu{
    z-index: 0;
    position: absolute;
    right: -10px;
    max-width: 950px;
    z-index: 10;
    opacity: 1;
}
#technos{
    box-shadow: var(--shadow-large);
    max-width: 630px;
    border-radius: 16px;
    margin-left: 40px;
    max-height: 140px;
    z-index: 50;
    margin-top: 55px;
}
.techno{
    height: 160px;
    margin-top: -10px;
}
.techno.active{
    background-color: var(--purle-primary);
    border-radius: 48px;
    box-shadow: var(--shadow-medium);
}

.technoImg{
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    transform: translateY(-50%) translateX(-50%);
}
.technoExplain{
    box-shadow: var(--shadow-large);
    background-color: var(--purle-primary);
    border-radius: 25px;
    margin-top: 10px;
    height: 80px;
    font: "inter";
    font-weight: 700;
    color: #6B4EFF;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    vertical-align: middle;
    padding: auto;
    display: none;
}
.technoExp{
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.technoExplain.active{
    display:block !important;
}
#ppal,#zoom{
    width: 190px;
}
#gagenda{
    width: 110px;
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {  

    #pave{
        margin-top: 10px;
    }
    #herobIllu{
        max-width: 850px;
    }
    #technos{
        visibility: hidden;
    }
    #herobStart{
        width: 260px;
        height: 70px;
        margin-top: -15px;
    }

}


</style>
