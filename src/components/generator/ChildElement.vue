<template>
  <app-button v-if="isButton" :data="data"  />
  <app-div v-else-if="isDiv" :data="data" />
  <app-form v-else-if="isForm" :data="data" />
  <app-row v-else-if="isRow" :data="data" />
  <app-col v-else-if="isCol" :data="data" />
  <app-container v-else-if="isContainer" :data="data" />
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
    
	  'app-button'  : () => import('@/components/generator/Buttons.vue'),	 
    'app-div' : () => import('@/components/generator/DivEle.vue'),
    'app-form' : () => import('@/components/generator/FormEle.vue'),
    'app-row' : () => import('@/components/generator/Row.vue'),
    'app-col' : () => import('@/components/generator/Cols.vue'),
    'app-container' : () => import('@/components/generator/Container.vue')
    
      
  }
}
</script>