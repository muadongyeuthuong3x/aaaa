<template>
<div>
		<el-row :gutter="20">
			<el-col align="left" :span="12" :offset="0">
				<el-image style="width:70px" src="data:image/png;base64,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"></el-image>
			</el-col>
			<el-col align="right" :span="12" :offset="0">
				<el-button @click="add_shop = true" type="warning" icon="" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">Thêm Liên Kết</el-button>

				<el-button type="info" icon="el-icon-tickets" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">Hướng dẫn</el-button>
			</el-col>
		</el-row>
		<br>

		
		
		<el-row :gutter="20">
			<el-col :span="24" :offset="0">
				<el-alert title="Quý khách được thêm tối đa 10 shop Sendo" description="" show-icon type="warning" closable :center="false" effect="light"></el-alert>
				
			</el-col>
		</el-row>
		




		<el-table :data="data" max-height="400" :border="true" :highlight-current-row="true" :stripe="false" :lazy="false" :show-summary="false" tooltip-effect="light">


			<el-table-column label="Thời gian" align="center" :sortable="false" :fixed="false" width="240">
				<template slot-scope="scope">
					{{TimeConvert(scope.row.createdAt)}}
				</template>

			</el-table-column>

			<el-table-column label="Tên Shop" prop="name" align="center" :sortable="false" :fixed="false" width="480"/>
			<el-table-column label="Trạng Thái" prop="status" align="center" :sortable="false" :fixed="false" width="250">
				<template slot-scope="scope">

					<el-tag :type="scope.row.active ? 'success' : 'danger'" :closable="false" effect="light" size="mini" :disable-transitions="false">{{scope.row.active ? 'Đang hoạt động' : 'Ngừng hoạt động'}}</el-tag>

				</template>
			</el-table-column>

			<el-table-column label="" align="center" width="180">
				<template slot-scope="scope">
					<el-popconfirm title="Bạn có chắc chắn?" @onConfirm="remove(scope.row)" confirmButtonText='OK' cancelButtonText='Không,cảm ơn.' icon="el-icon-info" iconColor="red">

						<el-button slot="reference" type="warning" icon="" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">Gỡ</el-button>
					</el-popconfirm>

				</template>
			</el-table-column>


		</el-table>
		<br>
		<el-pagination style="float: right" @current-change="" :total="count" :pager-count="11" prev-text="" next-text="" :hide-on-single-page="false" background layout="prev, pager, next"></el-pagination>



<el-dialog title="Thêm Shop trên Sendo" :visible.sync="add_shop" :center="false" :fullscreen="false" top="15vh" width="40%">
			<div>
				<el-form ref="form" :rules="ruleForm" :model="formData"  status-icon label-width="auto" label-position="top" :inline="false" :disabled="false" :inline-message="false" show-message validate-on-rule-change size="small">
					<el-form-item label="Mã Shop :" prop="shop_key_sendo" align="left">
						<el-input spellcheck="false" placeholder="Nhập mã shop" v-model="formData.shop_key_sendo" size="medium" prefix-icon="el-icon-key" clearable type="text" :autosize="false" :disabled="false" autocomplete="off"></el-input>


						



					</el-form-item>
					<el-form-item label="Mã bảo mật :" prop="secret_key_sendo" align="left">
						<el-input spellcheck="false" placeholder="Nhập mã bảo mật" v-model="formData.secret_key_sendo" size="medium" prefix-icon="el-icon-key" clearable type="text" :autosize="false" :disabled="false" autocomplete="off"></el-input>


						



					</el-form-item>
				</el-form>
				
				

				<el-alert
				:closable="false"
				
				type="warning">
				<template slot="title">
					<div  style="font-size:14px !important">
						<i class="el-icon-s-opportunity"></i>
						Quý khách vui lòng truy cập vào <el-link target="_blank" href="http://ban.sendo.vn/cau-hinh/api" icon="" type="primary" :underline="false" :disabled="false">http://ban.sendo.vn/cau-hinh/api</el-link> để lấy mã Shop và Mã bảo mật kết nối sau đó Copy và Dán vào ô trống ở trên.
						<br> <br>
						<el-image src="blob:https://sendovn.atlassian.net/2dcaa887-14b0-4ede-b5b1-62a022b9ad93#media-blob-url=true&id=7ec70837-5e64-43eb-81d3-0fa75dfda6ab&contextId=1228701883&collection=contentId-1228701883" fit="cover"></el-image>
					</div>
				</template>
			</el-alert>
			
		</div>
		<span slot="footer">
			<el-button @click="add_shop = false">Cancel</el-button>
			<el-button icon="el-icon-right" @click="add" :loading="loading_confirm" type="primary">Xác nhận</el-button>
		</span>
	</el-dialog>
	</div>
</template>
<script>
    import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
	export default {
		data(){
			return {
				data:[],
				page:1,
				count:0,
				add_shop:false,
				formData:{
					shop_key_sendo:'',secret_key_sendo:''
				},
				ruleForm:{
					'shop_key_sendo':[{required:true,message:'Quý khách chưa nhập Mã Shop',trigger:'click'}],
					'secret_key_sendo':[{required:true,message:'Quý khách chưa nhập Mã bảo mật',trigger:'click'}]


				},
				loading_confirm:false
			}
		},
		created:async function(req,res){
			await this.Init();
		},
		methods:{
			...mapActions('onsite',['getCountAccountEc']),
			async Init(){
				return await Promise.all([this.accounts()])
			},
			reset(){
				this.formData.shop_key_sendo = '';
				this.formData.secret_key_sendo = '';
				this.loading_confirm = false;
			},
			async add(){
				let _ = this;
				_.$refs['form'].validate(async valid=>{
					if(valid){
						_.loading_confirm = true;
						try{
							let {data} = await this.$axios.post('/api/accountec/sendo',{shop_key_sendo:this.formData.shop_key_sendo,secret_key_sendo:this.formData.secret_key_sendo});
							if(data.error) throw data.error;
							_.data.push(data);
							_.add_shop = false;
							
							_.$message({type:'success',message:'Shop '+data.name+' vừa được thêm Thành công.'});
							await _.getCountAccountEc();
						}catch(message){
							_.$message({type:'error',message});
						}
						return _.reset();

					}else{
						return false;
					}
				})
			},
			TimeConvert(unixtime){
				let time = new Date(unixtime);
				let day = time.getDate();
				let month = time.getMonth()+1;
				let year = time.getFullYear();
				let hour = time.getHours();
				let minute = time.getMinutes();
				return day+'/'+month+'/'+year+' '+hour+':'+minute
			},
			async accounts(pagination = 1){
				let {data:{data,page,count}} = await this.$axios.post('/api/accountec/get',{page:pagination,ec:'sendo'});
				this.data = data;
				this.page = page;
				this.count = count;
				return;
			},
			async remove(obj){
				await this.$axios.post('/api/accountec/remove',{id:obj.id});
				this.data = this.data.filter(e=>e.id !== obj.id);
			    this.$message({type:'warning',message:'Đã gỡ liên kết với Shop: '+obj.name });
			    return await this.getCountAccountEc();
			}
		}
	}
</script>
<style scoped>

</style>

