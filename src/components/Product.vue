<template>
  <div class="product">
    产品<br />
    <el-radio-group v-model="radio2">
	    <el-radio :label="3">备选项111</el-radio>
	    <el-radio :label="6">备选项222</el-radio>
	    <el-radio :label="9">备选项333</el-radio>
	  </el-radio-group>
  	<div @click="tab()">点击</div>
  </div>
  
</template>

<script>
export default {
  name: 'product',
  data () {
  	return {
  		radio2: 3
  	};
  },
  methods: {
	    tab() {
	        alert(this.radio2)
	    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
