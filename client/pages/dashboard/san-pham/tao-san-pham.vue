<template>
	<el-row :gutter="20">
		<el-col :span="24" :offset="0">
			<el-row :gutter="20">
				<el-col :span="12" :offset="0">
					<h1>Tạo sản phẩm</h1>
				</el-col>
				<el-col :span="12" align="right" :offset="0">
					<el-button @click="copy_link" type="danger" icon="el-icon-paperclip" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">Sao chép sản phẩm</el-button>
				</el-col>
			</el-row>
			<el-form ref="form" :rules="ruleForm" :model="formData"  status-icon label-width="auto" label-position="top" :inline="false" :disabled="false" :inline-message="false" show-message validate-on-rule-change size="small">
				
				<el-form-item  label="Lựa chọn cửa hàng :" prop="shops" align="left">

					<el-col style="padding: 0 0 !important" :span="8" :offset="0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<div slot="header">
								<el-row :gutter="20">
									<el-col :span="2" :offset="0">
										<el-image class="logo" src="data:image/png;base64,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"></el-image> 
									</el-col>
									<el-col :span="22" :offset="0">
										LAZADA
									</el-col>


									
								</el-row>
							</div>
							<div style="padding: 14px;">
								<el-checkbox v-for="(data,index) in shops.filter(({ec})=>ec === 'lazada')" v-model="formData.shops"  :label="data.id" :key="index" :border="false" :checked="false" :disabled="false">{{data.name}}</el-checkbox>

								<el-link style="margin-left:20px" target="_blank" icon="el-icon-plus" type="primary" :underline="false" :disabled="false"></el-link>
							</div>
						</el-card>
					</el-col>
					<el-col  :span="8" :offset="0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<div slot="header">
								
								<el-row :gutter="20">
									<el-col :span="2" :offset="0">
										<el-image class="logo" src="data:image/png;base64,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"></el-image> 
									</el-col>
									<el-col :span="22" :offset="0">
										SENDO
									</el-col>
								</el-row>
							</div>
							<div style="padding: 14px;">
								<el-checkbox v-for="(data,index) in shops.filter(({ec})=>ec === 'sendo')" :key="index" v-model="formData.shops" :label="data.id"  :border="false" :checked="false" :disabled="false">{{data.name}}</el-checkbox>

								<el-link style="margin-left:20px" target="_blank" icon="el-icon-plus" type="primary" :underline="false" :disabled="false"></el-link>
							</div>
						</el-card>
					</el-col>

					<el-col style="padding: 0 0 !important" :span="8" :offset="0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<div slot="header">

								<el-row :gutter="20">
									<el-col :span="2" :offset="0">
										<el-image class="logo" src="data:image/png;base64,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"></el-image> 
									</el-col>
									<el-col :span="22" :offset="0">
										SHOPEE
									</el-col>
								</el-row>
							</div>
							<div style="padding: 14px;">
								<el-checkbox v-for="(data,index) in shops.filter(({ec})=>ec === 'shopee')" :key="index" v-model="formData.shops" :label="data.id" :border="false" :checked="false" :disabled="false">{{data.name}}</el-checkbox>

								<el-link style="margin-left:20px" target="_blank" icon="el-icon-plus" type="primary" :underline="false" :disabled="false"></el-link>
							</div>
						</el-card>
					</el-col>
					
					
					
					
					
				</el-form-item>
				<el-row :gutter="10">
					<el-col :span="(shop_lazada.length === 0 && shop_shopee.length === 0) ? 24 : 16" :offset="0">
						<el-form-item label="Tên sản phẩm :" prop="name" align="left">
							<el-input spellcheck="false" placeholder="Nhập tên sản phẩm" @blur="active_suggession" v-model="formData.name" prefix-icon="el-icon-shopping-bag-2" size="medium" clearable type="text" :autosize="false" :disabled="false" autocomplete="off"></el-input>
						</el-form-item>
					</el-col>
					<el-col v-if="!(shop_lazada.length === 0 && shop_shopee.length === 0)" :span="(shop_lazada.length === 0 && shop_shopee.length === 0) ? 0 : 6" :offset="0">
						<el-form-item label="Tên thương hiệu :" prop="brand" align="left">
							<el-autocomplete style="width: 200px" spellcheck="false" :fetch-suggestions="SearchBrand" @select="select_brand" placeholder="Chọn tên thương hiệu" v-model="formData.brand" size="medium" type="text" :autosize="true" :disabled="false" autocomplete="on"></el-autocomplete>
						</el-form-item>
					</el-col>
				</el-row>
				
				
				<el-form-item v-if="shop_lazada.length > 0 || shop_sendo.length > 0 || shop_shopee.length > 0"  label="Chọn danh mục :" prop="category" align="left">

					<el-switch style="float: right;margin-top: -30px" v-model="auto_category" active-text="Tự động" inactive-text="" :disabled="false"></el-switch>
					<el-row v-if="shop_lazada.length > 0" :gutter="100">
						<el-col :span="3" :offset="0">
							<el-button @click="open_category('lazada')" style="width: 95px" :type="formData.category_lazada.length > 0 ? 'success' :'default'" icon="el-icon-s-grid" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">LAZADA</el-button>
						</el-col>
						<el-col :span="21" :offset="0">
							<el-breadcrumb style="margin-top: 8px" separator-class="el-icon-caret-right">
								<span v-if="formData.category_lazada.length === 0 && !category_load.lazada" style="color:#606266">Chọn danh mục ...</span>
								<i v-if="category_load.lazada" class="el-icon-loading"></i>
								<el-breadcrumb-item v-for="(data,index) in formData.category_lazada" :key="index">{{data.name}}</el-breadcrumb-item>
							</el-breadcrumb>
						</el-col>
					</el-row>
					
					<el-row  v-if="shop_sendo.length > 0" style="margin-top: 5px" :gutter="100">
						<el-col :span="3" :offset="0">
							<el-button @click="open_category('sendo')" style="width: 95px"  :type="formData.category_sendo.length > 0 ? 'success' :'default'" icon="el-icon-s-grid" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">SENDO</el-button>
						</el-col>
						<el-col :span="21" :offset="0">
							<el-breadcrumb style="margin-top: 8px" separator-class="el-icon-caret-right">
								<span v-if="formData.category_sendo.length === 0 && !category_load.sendo" style="color:#606266">Chọn danh mục ...</span>
								<i v-if="category_load.sendo" class="el-icon-loading"></i>
								<el-breadcrumb-item v-for="(data,index) in formData.category_sendo" :key="index">{{data.name}}</el-breadcrumb-item>
								
							</el-breadcrumb>
						</el-col>
					</el-row>
					<el-row  v-if="shop_shopee.length > 0" style="margin-top: 5px" :gutter="100">
						<el-col :span="3" :offset="0">
							<el-button @click="open_category('shopee')" style="width: 95px"  :type="formData.category_shopee.length > 0 ? 'success' :'default'" icon="el-icon-s-grid" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="mini" :disabled="false">SHOPEE</el-button>
						</el-col>
						<el-col :span="21" :offset="0">
							<el-breadcrumb style="margin-top: 8px" separator-class="el-icon-caret-right">
								<span v-if="formData.category_shopee.length === 0 && !category_load.shopee" style="color:#606266">Chọn danh mục ...</span>
								<i v-if="category_load.shopee" class="el-icon-loading"></i>
								<el-breadcrumb-item v-for="(data,index) in formData.category_shopee" :key="index">{{data.name}}</el-breadcrumb-item>
								
							</el-breadcrumb>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="Hình ảnh sản phẩm :" prop="images" align="left">
					<el-upload action="#" list-type="picture-card" :auto-upload="false">
						<i slot="default" class="el-icon-plus"></i>
						<div slot="file" slot-scope="{file}">
							<img
							class="el-upload-list__item-thumbnail"
							:src="file.url" alt=""
							>
							<span class="el-upload-list__item-actions">
								<span
								class="el-upload-list__item-preview"
								@click="handlePictureCardPreview(file)"
								>
								<i class="el-icon-zoom-in"></i>
							</span>
							<span
							v-if="!disabled"
							class="el-upload-list__item-delete"
							@click="handleDownload(file)"
							>
							<i class="el-icon-download"></i>
						</span>
						<span
						v-if="!disabled"
						class="el-upload-list__item-delete"
						@click="handleRemove(file)"
						>
						<i class="el-icon-delete"></i>
					</span>
				</span>
			</div>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</el-form-item>
	<el-form-item v-if="(attribute_option_checkbox('sendo').length > 0)  || (attribute_option_select('sendo').length > 0) || (attribute_option_input('sendo').length > 0) " label="Thuộc tính :" prop="" align="left">

		<el-row :gutter="20">
			<el-col v-for="(data,index) in attribute_option_checkbox('sendo')" :key="index"  :span="6" :offset="0">
				<el-form-item :label="data.name+' :'" prop="" align="left">
					<el-select placeholder="Select" size="small" filterable :allow-create="false" :multiple="true" multiple-limit="0" :collapse-tags="false" :clearable="false" :disabled="false">
						<el-option v-for="(obj,indexc) in data.data" :key="indexc" :label="obj.text" :value="obj.value" :disabled="false"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-row>

		<el-row :gutter="20">
			<el-col v-for="(data,index) in attribute_option_select('sendo')" :key="index"  :span="6" :offset="0">
				<el-form-item :label="data.name+' :'" prop="" align="left">
					<el-select placeholder="Select" size="small" filterable :allow-create="false" :multiple="false" multiple-limit="0" :collapse-tags="false" :clearable="false" :disabled="false">
						<el-option v-for="(obj,index) in data.data" :key="index" :label="obj.text" :value="obj.value" :disabled="false"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-row>

		<el-row :gutter="20">
			<el-col v-for="(data,index) in attribute_option_input('sendo')" :key="index"  :span="6" :offset="0">
				<el-form-item :label="data.name+' :'" prop="" align="left">
					<el-input placeholder="" size="medium" clearable type="text" :autosize="false" :disabled="false" autocomplete="off"></el-input>
				</el-form-item>
			</el-col>
		</el-row>


		
		
	</el-form-item>

	<el-form-item label="Mô tả :" prop="description" align="left">
		<el-input
		type="textarea"
		:autosize="{ minRows: 6, maxRows: 20}"
		placeholder="Nhập mô tả"
		v-model="formData.description"
		>
	</el-input>
</el-form-item>



<el-form-item align="center">
	<el-button type="primary" @click="submit" :loading="loading" size="small">Submit</el-button>
</el-form-item>
<el-dialog title="Chọn Danh Mục" :visible.sync="category_show" :center="false" :fullscreen="false" top="6vh" width="80%">
	<el-row :gutter="20">


		<el-col v-for="(category_list,index) in categories" :key="index" :style="{ 'margin-top': index > 2 ? '30px' : '0px' }" :span="8" :offset="0">
			<el-card :body-style="{ padding: '0px' ,height:'400px','overflow-y':'scroll'}" shadow="always">
				<div style="padding: 14px;">
					<div @click="LoadCategory(data,index)" :class="data.status === 3 ? 'category-active' : ''" class="category" v-for="(data,i) in category_list" :key="i">
						<el-link icon="" type="primary" :underline="false" :disabled="false">{{data.name}}</el-link>
						<i v-if="data.status !== 2" style="float: right;color:#adadad" class="el-icon-caret-right"></i>
						<i v-if="data.status === 2" style="float: right;" class="el-icon-loading"></i>
					</div>

				</div>
			</el-card>

		</el-col>
	</el-row>

</el-dialog>
</el-form>
</el-col>
</el-row>
</template>
<script>


	export default {
		data(){
			return {
				ruleForm:{
					category:[{required:true,message:'Quý khách chưa lựa chọn Danh mục sản phẩm'}],
					name:[{required:true,message:'Quý khách chưa nhập tên sản phẩm'}],
					brand:[{required:true,message:'Quý khách chưa nhập Thương Hiệu'}],
					images:[{required:true,message:'Quý khách chưa tải lên hình ảnh sản phẩm'}],
					description:[{required:true,message:'Nội dung mô tả sản phẩm không được nhỏ hơn 30 kí tự.'}]


				},
				category_select:[],
				formData:{
					shops:[],
					category_sendo:[],
					category_lazada:[],
					category_shopee:[],
					name:'',
					brand:'',
					description:''
				},
				attribute_form_sendo:[],
				loading:false,
				shops:[],
				categories:[],
				auto_category:true,
				dialogImageUrl: '',
				dialogVisible: false,
				disabled: false,
				category_show:false,
				ec_category:'',
				category_load:{
					lazada:false,
					sendo:false,
					shopee:false
				}
			}
		},
		created:async function(){
			return await this.Init();
		},
		computed:{
			shop_lazada(){
				let _ = this;
				return _.shops.filter(({ec})=>ec === 'lazada').filter(({id})=>_.formData.shops.includes(id))
			},
			shop_sendo(){
				let _ = this;
				return _.shops.filter(({ec})=>ec === 'sendo').filter(({id})=>_.formData.shops.includes(id))
			},
			shop_shopee(){
				let _ = this;
				return _.shops.filter(({ec})=>ec === 'shopee').filter(({id})=>_.formData.shops.includes(id))
			},




			
		},
		mounted() {
			
		},
		methods:{
			attribute_option_select(ecom){
				return this.attribute_form_sendo.filter(({type,ec})=>(type === 'select') && (ecom === ec))
			},
			attribute_option_input(ecom){
				return this.attribute_form_sendo.filter(({type,ec})=>(type === 'input') && (ecom === ec))
			},
			attribute_option_checkbox(ecom){
				return this.attribute_form_sendo.filter(({type,ec})=>(type === 'checkbox') && (ecom === ec))

			},
			async Init(){
				return await Promise.all([this.LoadAllShop()])
			},
			async active_suggession(){
				if(this.formData.name.replace(/ /g,'').length > 0) return await Promise.all([this.Suggest_LAZADA(),this.Suggest_SHOPEE(),this.Suggest_SENDO()])
			},
		async Suggest_LAZADA(){
			this.category_load.lazada = true;
			this.formData.category_lazada = [];
			let {data} = await this.$axios.post('/api/category/suggestion/lazada',{keyword:this.formData.name});
			if(data.error) return this.$message({type:'error',message:data.error});
			this.category_load.lazada = false;
			return this.formData.category_lazada = data;
		},
		async Suggest_SHOPEE(){
			this.category_load.shopee = true;
			this.formData.category_shopee = [];
			let {data} = await this.$axios.post('/api/category/suggestion/shopee',{keyword:this.formData.name});
			if(data.error) return this.$message({type:'error',message:data.error});
			this.category_load.shopee = false;
			return this.formData.category_shopee = data;
		},
		async Suggest_SENDO(){
			this.category_load.sendo = true;
			this.formData.category_sendo = [];
			let {data} = await this.$axios.post('/api/category/suggestion/sendo',{keyword:this.formData.name});
			if(data.error) return this.$message({type:'error',message:data.error});
			this.category_load.sendo = false;
			this.formData.category_sendo = data;


			return await this.LoadAttributeSendo(data[data.length -1].category_id)
		},
		async LoadAllShop(){
			let {data} = await this.$axios.post('/api/accountec/get-all');
			return this.shops = data;
		},
		async LoadAttributeSendo(category_id){
			let {data} = await this.$axios.post('/api/optionform/attribute',{category_id,ec:'sendo'});
			return this.attribute_form_sendo = data;
		},
		async LoadCategorySendo(id_category = 0,name_category,index){
			let {data} = await this.$axios.post('/api/category/sendo',{id_category});
			if(this.categories.length > 0){
				let category_data = this.categories[index].find(({category_id})=>category_id === id_category);
				if(id_category !== 0) this.category_select.push(category_data);
			}
			data = data.map(({category_id,name})=>({category_id,status:1,name}));

			if(data.length > 0){
				this.categories.push(data);
			} else{

					//this.category_show = false;
					this.formData.category_sendo = this.category_select;
					this.category_select = [];
					this.ec_category = '';
					await this.LoadAttributeSendo(this.formData.category_sendo[this.formData.category_sendo.length -1].category_id)

					
				}
				return;
			},
			async LoadCategoryLazada(id_category = 1,name_category,index){
				let {data} = await this.$axios.post('/api/category/lazada',{id_category});
				
				if(this.categories.length > 0){
					let category_data = this.categories[index].find(e=>e.category_id === id_category);
					if(id_category !== 0) this.category_select.push(category_data);
				}
				data = data.map(({category_id,name})=>({category_id,status:1,name:name.split('|').pop()}))
				if(data.length > 0){
					this.categories.push(data);
				} else{
					//this.category_show = false;
					this.formData.category_lazada = this.category_select;
					this.category_select = [];
					this.ec_category = '';
				}
				return;
			},

			async LoadCategoryShopee(id_category = 0,name_category,index){
				let {data} = await this.$axios.post('/api/category/shopee',{id_category});
				if(this.categories.length > 0){
					let category_data = this.categories[index].find(e=>e.category_id === id_category);
					if(id_category !== 0) this.category_select.push(category_data);
				}
				data = data.map(({category_id,name})=>({category_id,status:1,name}))
				if(data.length > 0){
					this.categories.push(data);
				} else{
				//	this.category_show = false;
				this.formData.category_shopee = this.category_select;
				this.category_select = [];
				this.ec_category = '';
			}
			return;
		},
		async SearchBrand(queryString,cb){
			if(queryString.length === 0) return;
			let {data} = await this.$axios.post('/api/brand/search',{keyword:queryString});
			data = data.map(({name})=>({value:name}))
			return cb(data)
		},

		async LoadCategory(data = {},index = 0){
			let id_category = data.category_id;
			let name_category = data.name || '';

			if(this.categories.length > 0){
				this.categories[index] = this.categories[index].map(e=>{
					e.status = (e.category_id === id_category) ? 2 : 1;
					return e;
				})
			}

			this.categories = this.categories.slice(0,index+1)

			if(this.ec_category === 'sendo')  await this.LoadCategorySendo(id_category,name_category,index);
			if(this.ec_category === 'lazada') await this.LoadCategoryLazada(id_category,name_category,index);
			if(this.ec_category === 'shopee') await this.LoadCategoryShopee(id_category,name_category,index);	

			if((this.categories.length > 0) && id_category){
				this.categories[index] = this.categories[index].map(e=>{
					if(e.category_id === id_category) e.status = 3;
					return e;
				})
			}
		},
		async submit(){
			alert('hello world');
		},
		handleRemove(file) {
			console.log(file);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		handleDownload(file) {
			console.log(file);
		},
		async open_category(ec){
			this.category_show = true;
			this.categories = [];
			this.ec_category = ec;
			this.category_select = [];
			await this.LoadCategory();
			if(this.formData['category_'+ec].length > 0){

				let list_category = this.formData['category_'+ec];

				for(let index = 0;index<list_category.length;index++){

					await this.LoadCategory({category_id:list_category[index].category_id,name:list_category[index].name},index)
				}
			}
		},
		select_brand(){
			alert('hello ')
		},
		async copy_link(){
			this.$prompt('Vui lòng điền dữ liệu', 'Lấy thông tin', {
			    confirmButtonText: 'OK',
			    cancelButtonText: 'Cancel'
			}).then(async ({ value }) => {
			        
			}).catch(() => {
			             
			});
			
		}
	}
}
</script>
<style>
.logo{
	width:23px;
	margin-top:5px;
}
.el-card__header{
	padding-top:10px !important;
	padding-bottom: 0px !important;
	padding-left: 13px !important;
}
.el-breadcrumb__separator{
	color:orange;
}
.el-form-item__content{
	padding: 0 0 !important;
}
.el-breadcrumb{
	font-size: 15px;
}
.category{
	border-bottom: 1px solid #e0e0e0;
	padding: 10px 10px;
	color:black;
}
.category > .el-link{
	color:black;
	font-size:15px;
}
.category > .el-link:hover{
	color:black;
	
}
.category:hover{
	background-color: #ffd99f;
	cursor: pointer;
}
.category-active{
	border:1px solid orange;
}
</style>