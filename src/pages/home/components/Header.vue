<template>
	<div class="header">
		<div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
		<div class="header-input"><span class="iconfont input-icon">&#xe632;</span>输入城市/景点/游玩主题</div>
		<router-link to="/city">
		    <div class="header-right">北京<span class="iconfont city-icon">&#xe6b5;</span></div>
		</router-link>
	</div>
</template>

<script type="text/ecmascript-6">
	
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl'
	.header
	  display: flex
	  height: .86rem
	  line-height: .86rem
	  background: $bgColor
	  color: $color
	  position: fixed
	  top: 0
	  bottom: 0
	  left: 0
	  right: 0
	  z-index: 999
	  .header-left
	   	width: .64rem
	   	float: left
	   	.back-icon
	   	 text-align: center
	   	 font-size: .4rem
	  .header-input
	  	flex: 1
	  	height: .64rem
	  	line-height: .64rem
	  	margin-top: .12rem
	  	margin-left: .2rem
	  	padding-left: .2rem
	  	background: $color
	  	border-radius: .1rem
	  	color: #ccc
	  .header-right
	  	width: 1.24rem
	  	float: right
	  	text-align: center
	  	color: #fff
</style>