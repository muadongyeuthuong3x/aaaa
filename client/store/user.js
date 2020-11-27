export const state = ()=> ({
	
});
export const mutations = {

};
export const getters = {

};
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export const actions =  {
	async Login({},{phone,password}){
		let {data} = await this.$axios.post('/api/account/login',{phone,password});
		if(data.token) setCookie('auth_seu.vn',data.token,90)
		return data;
	},

};