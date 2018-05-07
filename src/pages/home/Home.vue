<template>
	<div>
		<home-header></home-header>
		<div class="wrapper" ref="wrapper">
			<home-swiper :swiperList="swiperList"></home-swiper>
	        <home-icons :iconList="iconList"></home-icons>
	        <home-recommend :recommendList="recommendList"></home-recommend>
	        <home-weekend :weekendList="weekendList"></home-weekend>
		</div>
	    
	</div>
</template>

<script type="text/ecmascript-6">
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/recmmend'
    import HomeWeekend from './components/Weekend'
    import Bscroll from 'better-scroll'
    import axios from 'axios'
	export default {
		name: 'Home',
		data() {
          return {
          	 swiperList: [],
          	 iconList: [],
          	 recommendList: [],
          	 weekendList: []
          }
		},
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		mounted() {
          this.getHomeInfo()
          console.log(this.swiperList)
		},
		methods: {
			getHomeInfo(){
				axios.get('api/index.json')
				     .then((res) => {
				     	this.getHomeInfoSync(res)
				     })
			},
			getHomeInfoSync(res){
				var _res = res.data.data;
				this.swiperList = _res.swiperList
                this.iconList = _res.iconList
                this.recommendList= _res.recommendList
                this.weekendList = _res.weekendList
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>