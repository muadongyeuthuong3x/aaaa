<template>
	<el-container>
		
		
		<el-aside  :width="aside ? 'auto': '220px'">
			<AsideSection/>
		</el-aside>
		<el-container>
			<el-header>
				<HeaderSection/>
			</el-header>
			<el-main>
				<nuxt/>
				
			</el-main>

		</el-container>
	</el-container>
	

</template>
<script>
	import HeaderSection from '~/components/dashboard/container/header';
	import AsideSection from '~/components/dashboard/container/aside';
	import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
	export default {
		data(){
			return {
				collapse:false
			}
		},
		computed:{
			...mapState('onsite',['aside'])
		},
		components:{HeaderSection,AsideSection}
	}
</script>
<style>
.el-header{
	padding: 0 0px;
}
.el-main{
	padding: 16px 20px;
}
.el-header{
	border-bottom: 1px solid #eaeaea;
}
.el-menu-item, .el-submenu__title,.el-tabs__item,.el-table,.el-link,.el-checkbox__label,.el-form-item__label{
	font-size:16px;
}
</style>

