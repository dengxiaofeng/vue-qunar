<template>
   <div>
   	  <city-header></city-header>
   	  <city-search></city-search>
   	  <city-list :hotCities="hotCities" :cities="cities"></city-list>
   </div>
</template>

<script type="text/ecmascript-6">
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import axios from 'axios'
	export default {
	   	data () {
          return {
            hotCities: [],
            cities: {}	
          }
	   },
       components: {
          CityHeader,
          CitySearch,
          CityList
       },
       mounted () {
          this.getCityInfo()
       },
       methods: {
          getCityInfo(){
			axios.get('api/city.json')
				 .then((res) => {
				    this.getCityInfoSync(res)
				 })
		  },
		  getCityInfoSync(res) {
		  	var _res = res.data.data
		  	this.cities = _res.cities
		  	this.hotCities= _res.hotCities
		  }
       }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>
