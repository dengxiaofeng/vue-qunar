<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
				   <div class="button">北京</div>
			    </div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list" >
				<div class="button-wrapper" v-for="item in hotCities" :key="item.id">
				   <div class="button">{{item.name}}</div>
			    </div>
			</div>
		</div>
		<div class="area" v-for="(item,key) in cities " :key="key" :ref="key">
			<div class="title border-topbottom">{{key}}</div>
			<div class="item-list" v-for="innerItem of item" :key="innerItem.id">
				<div class="item border-bottom">{{innerItem.name}}</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    import Bscroll from 'better-scroll'
	export default {
       props: {
       	  cities: {
       	  	type: Object,
       	  	default(){
       	  		return {}
       	  	}
       	  },
       	  hotCities: {
       	  	type: Array,
       	  	default() {
       	  		return []
       	  	}
       	  },
       	  letter: {
       	  	type: String,
       	  	default() {
       	  		return ''
       	  	}
       	  }
       },
       mounted () {
          this.scroll =new Bscroll(this.$refs.wrapper)
       },
       watch: {
       	  letter() {
             console.log(this.letter)
             var element = this.$refs[this.letter][0]
             this.scroll.scrollToElement(element)
       	  }
       }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '~styles/varibles.styl'
	.border-topbottom
	 &:before
	   border-color: #ccc
	 &:after
	   border-color: #ccc
	.border-bottom
	 &:before
	   border-color: #ccc
	.list
		 position: absolute
		 overflow: hidden
		 top: 1.58rem
		 left: 0
		 right: 0
		 bottom: 0 
		.title
		 line-height: .44rem
		 background: #eee
		 padding: .2rem
		 color: #666
		 font-size: .26rem
		.button-list
		 padding: .1rem .6rem .1rem .1rem
		 overflow: hidden
		 .button-wrapper
		  float: left
		  width: 33.33%
		  .button
		  	margin: .1rem
		  	padding: .1rem 0
		  	text-align: center
		  	border: .02rem solid #ccc
		  	border-radius: .06rem
		.item-list
		 .item
		  line-height: .76rem
		  padding-left: .2rem
	 
</style>