<template>
	<div>
		<home-header></home-header>
	    <home-swiper></home-swiper>
	    <home-icons></home-icons>
	    <home-recommend></home-recommend>
	</div>
</template>

<script type="text/ecmascript-6">
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/recmmend.vue'
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>