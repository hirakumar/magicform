<template>
<div class="childEle">
  <app-button v-if="isButton" :data="data"  />
  <app-div v-else-if="isDiv" :data="data" />
  <app-form v-else-if="isForm" :data="data" />
  <app-row v-else-if="isRow" :data="data" />
  <app-col v-else-if="isCol" :data="data" />
  <app-container v-else-if="isContainer" :data="data" />
</div>
</template>
<script>

export default {
 name: 'ChildElement',
  props:{
  	data:Object
  },
  computed:{
   
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
      isForm :{
      get(){
        return (this.data.ele=='form' ? true : false);
      }
    },
     isRow :{
      get(){
        return (this.data.ele=='row' ? true : false);
      }
    },
     isCol :{
      get(){
        return (this.data.ele=='col' ? true : false);
      }
    },
     isContainer :{
      get(){
        return (this.data.ele=='container' ? true : false);
      }
    }
  
  },
  components:{
    
	  'app-button'  : () => import('@/components/Buttons.vue'),	 
    'app-div' : () => import('@/components/DivEle.vue'),
    'app-form' : () => import('@/components/FormEle.vue'),
    'app-row' : () => import('@/components/Row.vue'),
    'app-col' : () => import('@/components/Cols.vue'),
    'app-container' : () => import('@/components/Container.vue')
    
      
  }
}
</script>