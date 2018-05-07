<template>
	<div>
		<div class="title">热销推荐</div>
	    <ul >
		   <li class="item" v-for="item in recommendList" :key="item.id">
		   	 <img class="item-img" :src="item.imgUrl"/>
		   	 <div class="item-info">
		   	 	<div class="item-title">{{item.title}}</div>
		   	 	<div class="item-desc">{{item.desc}}</div>
		   	 	<button class="item-button">查看详情</button>
		   	 </div>
		   </li>
	    </ul>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		 props: {
       recommendList: {
         type: Array,
         default (){
           return []
         }
       }
     }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.title
 line-height:.8rem
 background: #eee
 text-indent:.2rem
.item
 display: flex
 overflow: hidden
 height: 1.9rem
 .item-img
  height: 1.7rem
  width: 1.7rem
  padding: 0.1rem
 .item-info
  flex: 1
  min-width: 0
  padding: 0.1rem
  .item-title
  	line-height: 0.54rem
  	font-size: 0.32rem
  .item-desc
    line-height: 0.4rem
    color: #bbb
  .item-button
    line-height: 0.44rem
    background: #ff9300
    padding: 0 0.2rem
    border-radius: 0.06rem
    margin-top: 0.16rem
    color: #fff
    
</style>