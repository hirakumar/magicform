<template>


  <app-formgroups :data="data" v-if="isFormGroup"  />
  <app-buttongroup v-else-if="isButtonGroup" :data="data" />
  <app-form v-else-if="isForm" :data="data" ></app-form>
  <app-row v-else-if="isRow" :data="data" />
  <app-col v-else-if="isCol" :data="data" />
  <app-container v-else-if="isContainer" :data="data" />
 
</template>
<script>

export default {
 name: 'ParentElement',
  props:{
    data:Object
  },
  computed:{
    isFormGroup :{
      get(){
        return (this.data.ele=='form-group' ? true : false);
      }
    },
    isButtonGroup :{
      get(){
        return (this.data.ele=='button-group' ? true : false);
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
    },
    hasChild:{
        get(){
            if(this.objID != undefined){
                return this.$store.getters['formBuilder/hasChild'](this.objID);
            }            
        }
    }  
  },
  components:{
    'app-formgroups'      : () => import('@/components/FormGroups.vue'),
    'app-buttongroup'     : () => import('@/components/ButtonGroups.vue'),
    'app-form'            : () => import('@/components/FormEle.vue'),
    'app-row'             : () => import('@/components/Row.vue'),
    'app-col'             : () => import('@/components/Cols.vue'),
    'app-container'       : () => import('@/components/Container.vue')
    
  }
}
</script>