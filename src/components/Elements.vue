<template>  


<app-parentelement :data="data" v-if="hasChild" />
 <app-childelement :data="data" v-else />   

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
                return this.$store.getters['formBuilder/hasChild'](this.objID);
            }
            
        }
    }  
  
  },
  methods:{
     
  },
  components:{
     
      'app-childelement' : () => import('@/components/ChildElement.vue'),
      'app-parentelement' : () => import('@/components/ParentElement.vue'),

  }
}
</script>