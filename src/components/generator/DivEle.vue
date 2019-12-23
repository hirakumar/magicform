<template>
  <div class="divEle" >
    <div v-html="data.text" :class="data.class"  :id="data.id"></div>   
  </div>
</template>
<script>

export default {
 name: 'DivEle',
  props:{
  	data:Object
  },
  data:function(){
    return {
     orderBtn: false
    }
  },
  computed:{
     
    
  },
  components:{
    
  },
  methods:{
  
  },
    
}
</script>