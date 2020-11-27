<template>
	<el-row>
		<transition name="el-zoom-in-center">
			<div class="transition-box">
				<el-col :span="6" :offset="9">
					<center>
						Đăng Nhập
					</center>

					<el-form ref="login" :rules="login_input" :model="login_form"  status-icon label-width="auto" label-position="top" :inline="false" :disabled="false" :inline-message="false" show-message validate-on-rule-change size="medium">
						<el-form-item align="left" label="Số điện thoại" prop="phone">
							<el-input @keyup.enter.native="login" placeholder="Nhập số điện thoại" size="small" v-model="login_form.phone" clearable :autosize="false" :disabled="false" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item align="left" label="Mật khẩu" prop="password">
							<el-input @keyup.enter.native="login" placeholder="Mật khẩu" v-model="login_form.password" size="small" show-password :disabled="false" autocomplete="off"></el-input>
						</el-form-item>

						<el-form-item align="center">
							<el-button type="primary" @click="login" :loading="login_status" size="small">Đăng nhập</el-button>
						</el-form-item>
						<el-form-item align="right">
							Bạn chưa tài khoản ? <el-link href="/dang-ki" icon="" type="default" :underline="false" :disabled="false">Đăng kí</el-link>
						</el-form-item>
					</el-form>
				</el-col>
			</div>
		</transition>
	</el-row>
</template>
<script>
	import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
	export default {
		data(){
			return{
				login_status:false,
				login_form:{phone:'',password:''},
				login_input:{
					phone:[{type:'string',required:true,trigger:'blur',message:'Quý khách được yêu cầu nhập vào ô trống.'}],
					password:[{type:'string',required:true,trigger:'blur',message:'Quý khách được yêu cầu nhập vào ô trống.'}]

				}
			}
		},
		created:async function(){
			await this.$axios.post('/api/account/info')
		},
		methods:{
			...mapActions('user',['Login']),
			login:async function(){
				let _ = this;
				_.login_status = true;
				this.$refs['login'].validate(async (valid)=>{
					if(valid){
						let data = await this.Login(this.login_form);
						
					    
						if(data.error){
							_.$message({type:'error',message:data.error});
						}else{
							this.$message({type:'success',message:'Đăng nhập thành công !'});

							this.$router.push('/dashboard');
						
						};
						_.login_status = false;
					
					}else{
						return false
					}
				})
			}
		}
	}
</script>