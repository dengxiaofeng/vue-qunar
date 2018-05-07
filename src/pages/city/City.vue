<template>
   <div>
   	  <city-header></city-header>
   	  <city-search :cities="cities"></city-search>
   	  <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
   	  <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
   </div>
</template>

<script type="text/ecmascript-6">
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'
    import axios from 'axios'
	export default {
	   	data () {
          return {
            hotCities: [],
            cities: {},
            letter: ''
          }
	   },
       components: {
          CityHeader,
          CitySearch,
          CityList,
          CityAlphabet
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
		  },
		  handleLetterChange(letter) {
            this.letter = letter
		  }
       }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>
