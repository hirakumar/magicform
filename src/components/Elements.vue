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
      parentID:Number
  },
  
  computed:{
     objID:{
        get(){
            return this.data.eno;
        }  
     },  
    hasChild:{
        get(){
            return this.$store.getters.hasChild(this.objID);
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