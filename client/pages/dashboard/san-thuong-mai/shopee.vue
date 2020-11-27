<template>
	<div>
		<el-row :gutter="20">
			<el-col align="left" :span="12" :offset="0">
				<el-image style="width:100px" src="https://res.cloudinary.com/doo4xi4rh/image/upload/v1596620226/shopee_digvyt.png"></el-image>
			</el-col>
			<el-col align="right" :span="12" :offset="0">
				<el-button type="default" @click="open_link" icon="" :loading="false" :plain="false" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">Thêm cửa hàng</el-button>

				<el-button type="info" icon="el-icon-tickets" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">Hướng dẫn</el-button>
			</el-col>
		</el-row>
		<br>

		
		
		<el-row :gutter="20">
			<el-col :span="24" :offset="0">
				<el-alert title="Quý khách được thêm tối đa 10 shop Shopee" description="" show-icon type="warning" closable :center="false" effect="light"></el-alert>
				
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




	</div>
</template>
<script>
	import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
	var myWindow;
	export default {
		data(){
			return {
				data:[],
				page:1,
				count:0
			}
		},
		created:async function(req,res){
			await this.Init();
		},
		mounted:async function(){
			let _ = this;
			await this.SubScribe();

			_.$socket.on('accountec',function(result){
				myWindow.close();
				if(result.error){
					_.$message({type:'error',message:result.error})
				}else{
					_.data.push(result)
				}
				
			})
		},
		methods:{
			...mapActions('onsite',['getCountAccountEc']),
			SubScribe(){
				return new Promise(resolve=>{
					this.$socket.get('/api/accountec/subscribe',{},function(res){

						return resolve(res);
					});
				})
			},
			CloseWindow(){
				return this.myWindow.close();
			},
			async Init(){
				return await Promise.all([this.accounts()])
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
				let {data:{data,page,count}} = await this.$axios.post('/api/accountec/get',{page:pagination,ec:'shopee'});
				this.data = data;
				this.page = page;
				this.count = count;
				return;
			},
			async remove(obj){
				await this.$axios.post('/api/accountec/remove',{id:obj.id});
				this.data = this.data.filter(e=>e.id !== obj.id);
				this.$message({type:'warning',message:'Đã gỡ liên kết với Shop: '+obj.name });
				return await this.getCountAccountEc()
			},
			async open_link(){
				myWindow = window.open('https://partner.shopeemobile.com/api/v1/shop/auth_partner?id=845907&token=dfc85e478fa9cec54b5f989f75cb3904db11699c5dced550555ccc71eadd6ca1&redirect=http://localhost:8080/dashboard/san-thuong-mai/shopee', "Liên kết cửa hàng", "width=1050,height=600,left=300,top=100");
			}
		},
		async asyncData({ query , $axios}){
			if(query.code) await $axios.post('/api/accountec/shopee',{shopid:query.shop_id});

		}
	}
</script>
<style scoped>

</style>

