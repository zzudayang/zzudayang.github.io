var app=new Vue({
	el:"#mydiv",
	data:{
		mybanner:"banner1",
		bannerlist:[
			"banner1",
			"banner2",
			"banner3",
			"banner4",
			"banner5",
			"banner6",
		],
		num:0
	},
	methods:{
		one:function(){
			this.mybanner=this.bannerlist[0]
			this.num=0
		},
		two:function(){
			this.mybanner=this.bannerlist[1]
			this.num=1
		},
		three:function(){
			this.mybanner=this.bannerlist[2]
			this.num=2
		},
		four:function(){
			this.mybanner=this.bannerlist[3]
			this.num=3
		},
		five:function(){
			this.mybanner=this.bannerlist[4]
			this.num=4
		},
		six:function(){
			this.mybanner=this.bannerlist[5]
			this.num=5
		},
		toleft:function(){
			this.num=(this.num+5)%6
			this.mybanner=this.bannerlist[this.num]
		},
		toright:function(){
			this.num=(this.num+1)%6
			this.mybanner=this.bannerlist[this.num]
		}
	},
	created:function(){
		setInterval(this.toright,5000)
	}
})