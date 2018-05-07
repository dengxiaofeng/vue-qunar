<template>
	<div class="icons">
		<swiper :options="swiperOption" ref="mySwiper">
		 <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
       data () {
       	  return {
       	  	 swiperOption: {
                 autoplay: false,
                pagination: '.swiper-pagination'
             }
       	  }
       },
       props: {
         iconList: {
           type:Array,
           default (){
             return 
           }
         }
       },
       computed:{
       	  swiper() {
           return this.$refs.mySwiper.swiper
          },
          pages() {
         	const pages = []
         	this.iconList.forEach((item,index) =>{
         		const page = Math.floor(index/8)
         		if(!pages[page]) {
         			pages[page] = []
         		}
         		pages[page].push(item)
         	})
         	return pages
         }
       }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.icons >>> .swiper-container
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 42%
.icons
 overflow: hidden
 height: 0
 width: 100%
 padding-bottom: 42%
 margin-top: .1rem
 .icon
 	position: relative
 	float: left
 	width: 25%
 	height: 0
 	padding-bottom: 18%
 	.icon-img
 	 position: absolute
 	 top: 0
 	 left: 0
 	 right: 0
 	 bottom: .44rem
 	 box-sizing: border-box
 	 padding: .1rem
 	 .icon-img-content
 	 	/*height: 100%*/
 	 	width: 55px
 	 	height: 55px
 	 	display: block
 	 	margin: 0 auto
 	.icon-desc
 		color: #000
 		position: absolute
 		left: 0
 		right: 0
 		bottom: 0
 		height: .44rem
 		line-height: .44rem
 		text-align: center
</style>