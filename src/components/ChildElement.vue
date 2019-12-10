<template>
<div class="childElement">
  <app-h v-if="isH" :data="data" />
   <app-button v-if="isButton" :data="data"  />
   <app-div v-if="isDiv" :data="data" ></app-div>

</div>
</template>
<script>

import Button from '@/components/Buttons.vue'
import H from '@/components/H.vue'
import DivEle from '@/components/DivEle.vue'

export default {
 name: 'ChildElement',
  props:{
  	data:Object
  },
  computed:{
   
     isH:{
        get(){
        return (this.data.ele=='h' ? true : false);
       }
     },
     isButton:{
        get(){
        return (this.data.ele=='button' ? true : false);
       }
     },
     isDiv:{
         get(){
             
             return (this.data.ele=='div' ? true : false);
         }
     },


  

   
   
  
  },
  components:{
    
	  'app-button' : Button,
	  'app-h' : H,
      'app-div' : DivEle,
  }
}
</script>