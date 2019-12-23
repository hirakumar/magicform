<template>
<div>
  <h1>Generator</h1>
 <app-elements :data="mainParent" v-for="mainParent in mainParents" :key="mainParent.eno" />
  </div>
</template>
<script>
  export default {
  name: 'About',
  data:function(){
    return {
     showTrue : true
    }
  },
  computed:{
     mainParents:{
        get(){
          return this.$store.getters.getMainParents;
        }
      }
  },
  components:{    
      'app-elements' :  () => import('@/components/generator/Elements.vue'),
  }
  
}
</script>