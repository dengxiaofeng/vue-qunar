<template>
	<div>
		<div class="title">周末去哪</div>
	    <ul >
		   <li class="item" 
		       v-for="item in weekendList" 
		       :key="item.id">
		     <div class="item-img-wrapper">
		     	 <img class="item-img" :src="item.imgUrl"/>
		     </div>
		   	   
		   	 <div class="item-info">
		   	 	<div class="item-title">{{item.title}}</div>
		   	 	<div class="item-desc">{{item.desc}}</div>
		   	 </div>
		   </li>
	    </ul>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			weekendList: {
				type: Array,
				default(){
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
.item-img-wrapper
 overflow: hidden
 height: 0
 padding-bottom: 33.9%
.item-info
  padding: 0.1rem
  .item-title
  	line-height: 0.54rem
  	font-size: 0.32rem
  .item-desc
    line-height: 0.4rem
    color: #bbb
</style>