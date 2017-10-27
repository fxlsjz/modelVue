<template>
  <div class="header">
    
  	<ul class="nav parent">
  		<!--<li v-for="list in navlist" :text="list.texts"></li>-->
  		<!--<li v-for="list in navlist" v-text="list.texts"></li>-->
  		<li v-for="list in navlist">
  			<router-link :to="list.hrefs">{{list.texts}}</router-link>
  		</li>
  	</ul>
   
  </div>
</template>

<script>
import '../../static/css/header.css'
export default {
  name: 'header',
  data(){
  	return{
  		navlist:[
	  		{texts:'首页',hrefs:'/'},
	  		{texts:'产品',hrefs:'/Product'},
	  		{texts:'模块',hrefs:'Modules'},
	  		{texts:'案例',hrefs:'/Example'},
	  		{texts:'加入我们',hrefs:'Joinus'}
	  	]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
