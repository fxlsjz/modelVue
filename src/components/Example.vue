<template>
  <div class="example">
    案例
    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    
    <el-tag>标签一</el-tag>
		<el-tag type="success">标签二</el-tag>
		<el-tag type="info">标签三</el-tag>
		<el-tag type="warning">标签四</el-tag>
		<el-tag type="danger">标签五</el-tag>
		
		<div class="block">
	    <span class="demonstration">默认</span>
	    <el-slider v-model="valueA"></el-slider>
	  </div>
    
  </div>
</template>

<script>
export default {
  name: 'example',
  data() {
      return {
        value1: true,
        value2: true,
        valueA: 0
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
