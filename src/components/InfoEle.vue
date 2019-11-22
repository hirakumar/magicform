<template>
    <div class="container">
        <div class="row">
              <div class="col">
   
                  {{eleObj}}

    </div>
    </div>
    </div>
    
</template>
<script>

export default {
  name: 'infoele',
   props:{
  	data:Object
  },
  data:function(){
      return {
          
      }
  },
  components:{
  
  },
  computed:{
  
      eleObj:{
          get(){
  			return this.$store.getters.getConfigEleObj;
  		},
  		set(val){
  			return val;
  		}
      },

  }
}
</script>
<style scoped>

</style>