<template>
<div class="eleHolder">
  <b-button  :class="['eleinfo',myClass]" size="md" @click ="clickCol">
    {{data.ele}} : {{data.eno}} / {{data.order}}  
  </b-button>
 </div>
</template>
<script>

export default {
  name: 'infoele',
   props:{
  	data:Object
  },
  data:function(){
      return {
         
         
      }
  },
  computed:{
    myClass:{
      get(){
          if(this.data != undefined){
            return this.data.ele+"Ele";
          }
         
      }
    },
  },
  methods:{
    clickCol : function(event){     
      event.currentTarget.classList.add('active');
      this.$store.commit('setActiveEno',this.data.eno);
      event.preventDefault();
      event.stopPropagation();
      
    }
  },

}
</script>
<style scoped>
.eleinfo.containerEle{
  left:-15px;
}
</style>