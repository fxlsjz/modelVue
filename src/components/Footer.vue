<template>
  <div class="footer">
    
  	<ul class="footers-ul clearfix parent">
  		<li v-for="list in footlist">
  			<h6>{{list.texts}}</h6>
  			<p v-for="smalllist in list.twolist">{{smalllist.num}}</p>
  		</li>
  	
  	</ul>
   
  </div>
</template>

<script>
import '../../static/css/footer.css'
export default {
  name: 'footer',
  data(){
  	return{
  		footlist:[
	  		{texts:'产品介绍',twolist:[{num:'定量分析'},{num:'数据透视'},{num:'风险分析'},{num:'投后监控'}]},
	  		{texts:'解决方案',twolist:[{num:'信用策略'},{num:'尽职调查'},{num:'IT方案'}]},
	  		{texts:'关于我们',twolist:[{num:'公司介绍'},{num:'团队介绍'},{num:'顾问专家'},{num:'合作伙伴'}]},
	  		{texts:'联系我们',twolist:[{num:'1355214xxxx'},{num:'fxl'}]}
	  	]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
