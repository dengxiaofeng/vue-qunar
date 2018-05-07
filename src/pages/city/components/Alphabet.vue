<template>
	<ul class="list">
		<li 
		      class="item" 
		      v-for="item in letters" 
		      :key="item"
		      :ref="item"
		      @click="handleLetterClick"
		      @touchstart="handleTouchStart"
		      @touchmove="handleTouchMove"
		      @touchend="handleTouchEnd"
		>{{item}}</li>
	</ul>
</template>

<script type="text/ecmascript-6">
	export default {
       props: {
       	  cities:{
       	  	type: Object,
       	  	default () {
              return {}
       	  	}
       	  }
       },
       data () {
       	 return {
       	 	touchStatus: false,
       	 	startY: 0,
       	 	timer: null
       	 }
       },
       computed:{
         letters() {
         	 const letters = Object.keys(this.cities)
         	 return letters
         }
       },
       mounted() {
       },
       methods: {
       	 handleLetterClick(e) {
            this.$emit('change', e.target.innerText)
       	 },
       	 handleTouchStart() {
            this.touchStatus =true
       	 },
       	 handleTouchMove(e) {
            if(this.touchStatus) {
            	if(this.timer) {
            		clearTimeout(this.timer)
            	}
            	this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY -79
                    const index  = Math.floor((touchY - this.startY) / 20 )
                    if(index >= 0 && index < this.letters.length) {
                    	this.$emit('change', this.letters[index])
                    }
                    console.log(touchY)
            	},20)
            }
       	 },
       	 handleTouchEnd() {
            this.touchStatus =false
       	 }
       },
       updated() {
       	 this.startY = this.$refs['A'][0].offsetTop
       }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '~styles/varibles.styl'
	.list 
	 position: absolute
	 top: 1.58rem
	 right: 0
	 bottom: 0
	 width: .4rem
	 display: flex
	 flex-direction: column
	 justify-content: center
	 .item
	 	text-align: center
	 	height: .4rem
	 	line-height: .4rem
	 	color: $bgColor
</style>