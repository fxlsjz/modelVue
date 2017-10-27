<template>
  <div class="index">
    	<h1>首页</h1>
    		<ul class="tab clearfix">
            <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
        </ul>
        <div class="tabCon">
            <div v-show="num == 0">11111</div>
            <div v-show="num == 1">2222</div>
            <div v-show="num == 2">3333</div>
        </div>
        
        <div style="padding: 30px 0;"></div>
        
        <el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
			    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
			    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
			    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
			  </el-tabs>
			  
			  <div style="padding: 30px 0;"></div>
			  
			  <el-radio class="radio" v-model="radio" label="1">选项111111</el-radio>
  			<el-radio class="radio" v-model="radio" label="2">选项222222</el-radio>
  			<div @click="spot()">点击</div>
    
  </div>
</template>

<script>
import '../../static/css/index.css'
export default {
  name: 'index',
  data(){
	    return{
	    	tabs: ["标题一", "标题二","标题三"],
	    	num: 0,
	    	activeName: 'first',
	    	radio: '1',
	    	checked: true
	    }
	},
	methods: {
	    tab(index) {
	        this.num = index;
	    },
	    handleClick(tab, event) {
        console.log(tab, event);
     	},
     	spot(){
     		alert(this.radio)
     	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
