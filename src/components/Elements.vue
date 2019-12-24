<template>  
<div> 
   
<app-parentelement :data="data" v-if="hasChild" />
 <app-childelement :data="data" v-else />   
</div>
</template>
<script>

import ParentElement from '@/components/ParentElement.vue'
import ChildElement from '@/components/ChildElement.vue'

export default {
 name: 'Elements',
  props:{
      data:Object,
     
  },
  
  computed:{
     objID:{
        get(){
            return this.data.eno;
        }  
     },  
    hasChild:{
        get(){
            if(this.objID != undefined){
                return this.$store.getters.hasChild(this.objID);
            }
            
        }
    }  
  
  },
  methods:{
     
  },
  components:{
     
      'app-childelement' : ChildElement,
      'app-parentelement' : ParentElement,
  }
}
</script>