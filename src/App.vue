<template>
  <div id="app">
  	
    <myheader></myheader>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './components/Header.vue'// (严谨模式下加注释要在“/”后面加空格)
import myfooter from './components/Footer.vue'
import '../static/css/reset.css'

export default {
  name: 'app',
  components: {
    myheader,
    myfooter
  }
}
</script>


