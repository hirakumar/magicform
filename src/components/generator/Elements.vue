<template>    
    <app-parentelement :data="data" v-if="hasChild" />
    <app-childelement :data="data" v-else />   
</template>
<script>
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
      'app-childelement' :  () => import('@/components/generator/ParentElement.vue'),
      'app-parentelement' :  () => import('@/components/generator/ChildElement.vue'),
  }
  
}
</script>