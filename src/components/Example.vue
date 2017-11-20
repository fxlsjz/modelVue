<template>
  <div class="example">
    案例
    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    
  </div>
</template>

<script>
export default {
  name: 'example',
  data() {
      return {
        value1: true,
        value2: true
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
