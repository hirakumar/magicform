<template>
   <parentelement :data="data" v-if="hasChild" />
    <childelement :data="data" v-else />
 
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
                return this.$store.getters['formBuilder/hasChild'](this.objID);
            }
            
        }
    }  
  
  },
  methods:{
     
  },
  components:{
      'parentelement' :  () => import('@/components/generator/ParentElement.vue'),
      'childelement' :  () => import('@/components/generator/ChildElement.vue'),
  }
  
}
</script>