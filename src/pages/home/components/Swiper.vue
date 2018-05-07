<template>
   <div class="wrapper">
     <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id" v-if="swiperList.length">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'carrousel',
    props: {
      swiperList: {
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
           pagination: '.swiper-pagination',
           loop: true,
           autoplay: 3000,
           autoplayDisableOnInteraction: true
        }
      }
    },
    mounted(){
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background:#eee
  margin-top: 0.86rem
  .swiper-img
    width:100% 
</style>