let port = 8080;
let host = 'http://localhost';
module.exports = {
	dev:true,
	server: {port,host},
	permission:[],
	code_update:'23t4fdfag56htrsfdjkfdg4334fslaasd93tedddfthgf4y533333tqfsdae',
	crypt:{
		key:'ibsd83ibu20isdbe043a89sdhf7wfh79feksdfhdu2erh9221ffb389fn920cdsn',
		index:43
	},
	axios:{
		baseURL:host+':'+port,
		https:false,
	},
	limit_log:10,
	router: {
		middleware: ['guest']
	},
	
	head: {
		title: 'SEU.VN Professional',
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: 'Phần mềm quản lí bán hàng online SEU.VN' }
		],
		link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		],
		script: [
		//{ src: '/ckeditor/ckeditor.js' }
		]
	},
	loading: { color: 'black' },
	srcDir: 'client/',
	css: [
	'element-ui/lib/theme-chalk/index.css'
	],

	modules: ['@nuxtjs/axios','@nuxtjs/firebase'],
	firebase:{
		config: {
			apiKey: "AIzaSyBCpXejTTw93vPmp_G1JxyAVdlhP1nS-2A",
			authDomain: "receive-otp.firebaseapp.com",
			databaseURL: "https://receive-otp.firebaseio.com",
			projectId: "receive-otp",
			storageBucket: "receive-otp.appspot.com",
			messagingSenderId: "461833477408",
			appId: "1:461833477408:web:04c339fca43bef71fccb45",
			measurementId: "G-FDL0TB2ZJQ"
		},
		services: {
			auth: true 
		}
	},

	buildModules: [],
	plugins: [
	'@/plugins/element-ui',
	{ src: '@/plugins/ckeditor', ssr:false },
	{ src: '@/plugins/vue-chart.js', ssr: false },
	{src: '@/plugins/socket.io.js', ssr:false}
  ],
  build: {
  	transpile: [/^element-ui/],
  	extend ( config, { isDev, isClient, isServer } ) {
  		if ( isServer ) {
  			config.externals = {
  				'@firebase/app': 'commonjs @firebase/app'
  			}
  		}
  	}
  }
};
