<template>
<div>
 
    <h1 v-if="data.size == 1">{{data.text}}</h1>
    <h2 v-if="data.size == 2">{{data.text}}</h2>
    <h3 v-if="data.size == 3">{{data.text}}</h3>
    <h4 v-if="data.size == 4">{{data.text}}</h4>
    <h5 v-if="data.size == 5">{{data.text}}</h5>
    <h6 v-if="data.size == 6">{{data.text}}</h6>
   
</div>
</template>
<script>

export default {
 name: 'H',
  props:{
  	data:Object
  },
  
  computed:{
     
    
  
  },
  components:{
    
  }
}
</script>