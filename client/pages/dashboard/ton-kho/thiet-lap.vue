<template>
	<el-row :gutter="20">
	    <el-col :span="24" :offset="0">
				<el-select v-model="value" placeholder="Select" filterable :allow-create="false" :multiple="true" :multiple-limit="10" :collapse-tags="false" :clearable="false" :disabled="false">
				    <el-option label="Test 1" value="1" :disabled="false"></el-option>
				    <el-option label="Test 2" value="2" :disabled="false"></el-option>
				    <el-option label="Test 3" value="3" :disabled="false"></el-option>

				</el-select>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data(){
			return {
				value:[]
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	
</style>