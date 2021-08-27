<template lang="pug">
#loading
    #loader
</template>
<style scoped>
#loading{
    position: fixed;
    z-index: 2147483647;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate3d(0, 0, 0);
    background-color: black;
    background-color: rgba(0, 0, 0, 0.8);
    background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);
    color: #fff;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
#loader {
    opacity: 0.8;
  border: 12px solid #f3f3f3; /* Light grey */
  border-top: 12px solid #404446; /* Blue */
  border-radius: 50%;
  position: absolute;
  left: 50%;top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 90px;
  height: 90px;
  animation: spin 2s linear infinite;
}

</style>