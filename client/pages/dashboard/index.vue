<template>
	<el-row :gutter="20">

		<el-col :span="6" :offset="0">
			<el-card :body-style="{ padding: '0px' }" shadow="hover">
				<div style="background-color: red">
					Doanh thu tháng này
				</div>
				<div style="padding: 14px;">
					116,500,000 (đ)
				</div>
			</el-card>
		</el-col>
		<el-col :span="6" :offset="0">
			<el-card :body-style="{ padding: '14px','text-align':'center' ,'font-size':'30px'}" shadow="hover">
				<div class="header-card" slot="header">
					Doanh thu hôm nay
				</div>
				<div>
					23,000,000 (đ)
				</div>
			</el-card>
		</el-col>
		<el-col :span="6" :offset="0">
			<el-card :body-style="{ padding: '14px','text-align':'center' ,'font-size':'30px'}" shadow="hover">
				<div class="header-card" slot="header">
					Đơn hàng hôm nay
				</div>
				<div>
					43
				</div>
			</el-card>
		</el-col>
		<el-col :span="6" :offset="0">
			<el-card :body-style="{ padding: '14px','text-align':'center' ,'font-size':'30px'}" shadow="hover">
				<div class="header-card" slot="header">
					Đơn hàng chờ xử lí
				</div>
				<div>
					22
				</div>
			</el-card>
		</el-col>
		<el-button @click="create_user" type="primary" icon="" :loading="false" :plain="false" :round="false" :circle="false" :autofocus="false" size="medium" :disabled="false">Button</el-button>
	</el-row>
</template>
<script>
	
	export default {
		data(){
			return {
				message:'',
				roomName:'',
				history:[],
				online:false
			}
		},
		mounted:async function(){
			
			
			


			this.$socket.get('/api/user/subscribe',function(res){
				console.log(res);
			})
			


			this.$socket.on('user',function(data){

				console.log(data);
			})

			
		},
		
		methods:{
			
			async send(){
				let {data} = await this.$axios.post('/api/user/updateUser', { id:'5f26715fcbaca506b1998f9f',name: 'deptraivl' });

			},
			async create_user(){
				this.$socket.post('/api/user/createUser',{name:'asdffasdfdfdsfsdsdfdf'},function(res){
					//console.log(res);
				})
			},
			
			goBack(){
				alert('hello world');
			}
		}
	}
</script>
<style scoped>

</style>