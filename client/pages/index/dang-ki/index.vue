<template>
	<el-row :gutter="20">
	    <el-col :span="6" :offset="9">
				<el-form ref="form" :rules="ruleForm" :model="formData"  status-icon label-width="auto" label-position="top" :inline="false" :disabled="false" :inline-message="false" show-message validate-on-rule-change size="medium">
					<el-form-item align="center">
						<h1>Hoàn tất đăng kí</h1>
					</el-form-item>
					<el-form-item align="left">
						Kính chào Quý khách :  <el-link type="primary" icon="" :loading="false" :underline="false" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">{{phone}}</el-link> 
						<br>
						Quý khách vui lòng nhập các thông tin vào các ô dưới đây để hoàn tất việc thiết lập tài khoản.
					</el-form-item>
					<el-form-item label="Họ và Tên" prop="fullname" align="left">
						<el-input  @keyup.enter.native="register" autofocus spellcheck="false" placeholder="Vui lòng nhập Họ và Tên" v-model="formData.fullname" size="medium" prefix-icon="" clearable type="text" :autosize="false" :disabled="false" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="Thiết lập mật khẩu" prop="password" align="left">
						<el-input  @keyup.enter.native="register" spellcheck="false" placeholder="Nhập mật khẩu tối thiếu 6 kí tự" v-model="formData.password" size="medium" prefix-icon="" suffix-icon="" show-password :disabled="false" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="Nhập lại mật khẩu" prop="repassword" align="left">
						<el-input  @keyup.enter.native="register" spellcheck="false" placeholder="Nhập lại mật khẩu" v-model="formData.repassword" size="medium" prefix-icon="" suffix-icon="" show-password :disabled="false" autocomplete="off"></el-input>
						
					</el-form-item>
				
				
				    <el-form-item align="center">
					  <el-button type="primary"  @click="register" :loading="loading" size="small">Hoàn tất</el-button>
				    </el-form-item>
				</el-form>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data(){
			var validate_password = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Quý khách được yêu cầu nhập mật khẩu.'));
				} else {
					if (this.formData.repassword !== '') {
						this.$refs.form.validateField('repassword');
				    }
					callback();
				}
			};
			var validate_repassword = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Quý khách được yêu cầu nhập lại mật khẩu.')); 
				} else if (value !== this.formData.password) {
				    callback(new Error('Mật khẩu nhập lại không trùng khớp.'));
				} else {
					callback();
				}
			};
			return {
				formData:{
					fullname:'',
					password:'',
					repassword:''
				},
				ruleForm:{
					fullname:[{type:'string',required:true,message:'Quý khách vui lòng nhập Họ và Tên.'}],
					password:[{type:'string',required:true,validator:validate_password}],
					repassword:[{type:'string',required:true,validator:validate_repassword}],

				},
				loading:false
			}
		},
		methods:{
			async register(){
				let _ = this;
				_.$refs['form'].validate(async valid=>{
					if(valid){
					    _.loading = true;
						try{
							let {data} = await this.$axios.post('/api/account/register',{token_phone:this.token_phone,fullname:this.formData.fullname,password:this.formData.password});
							if(data.error){
								return this.$message({type:'error',message:data.error})
							}

							await _.$auth.loginWith('local',{data:{phone:data.phone,password:this.formData.password}});
							
					    }catch(message){
							_.$message({type:'error',message});
					    }
					    _.loading = false;
					}else{
						return false;
					}
				})
			}
		},
		async asyncData({ $axios ,req ,query , redirect }){

			let response = await $axios.$post('/api/account/get-number-phone',{token_phone:query.token_phone});
			if(response.error) return redirect('/')
			return {phone:response.phone,token_phone:query.token_phone}
			
		}
	}
</script>
<style scoped>
	
</style>