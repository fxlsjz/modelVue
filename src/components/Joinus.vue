<template>
  <div class="joinus">
    	加入我们<br />
    	<el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}">
		  </el-time-select>
		  <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}">
		  </el-time-select>
		  <div @click="spots()">点击</div>
		  
		  <el-select v-model="value" placeholder="请选择">
		    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
		    </el-option>
		  </el-select>

          
		  
  </div>
</template>

<script>
export default {
  name: 'joinus',
  data(){
	    return{
	    	startTime: '',
        endTime: '',
        options: [{value: '选项1',label: '黄金糕'}, {value: '选项2',label: '双皮奶'}, {value: '选项3',label: '蚵仔煎'}, {value: '选项4',label: '龙须面'}, {value: '选项5',label: '北京烤鸭'}],
        value: ''
	    }
	},
	methods: {
     	spots(){
     		alert(this.startTime)
     	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
