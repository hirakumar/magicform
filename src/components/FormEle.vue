<template>
    <b-form :class="['divEle',data.class]" @click="clickedEle" :id="data.id" :inline="data.inline" :novalidate="data.novalidate" :validated="data.validated"  />
</template>
<script>

export default {
 name: 'FormEle',
  props:{
  	data:Object
  },
  
  computed:{
     
    
  
  },
  components:{
    
  },
    methods:{
     clickedEle:function(event){
       this.$store.commit("setActiveEno",this.data.eno);
       this.$store.commit("setEditMode",true);
       event.preventDefault();
       event.stopPropagation();
    }
  }
}
</script>