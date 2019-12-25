<template>
<div class="eleHolder">
  <b-link  :class="['eleinfo',myClass]" size="md" @click ="clickCol">
   
    <span class="ele">&lt;{{data.ele}}</span> 
     <span class="eno">eno="{{data.eno}}"</span>
    <span v-if="data.hasOwnProperty('id')" class="ele_id"> id="{{data.id}}" </span> 
    <span v-if="data.hasOwnProperty('class')" class="ele_class"> class="{{data.class}}" </span>  order="{{data.order}}" 
    <span v-if="data.hasOwnProperty('name')" class="ele_name"> class="{{data.name}}" </span>
    &gt; 
  </b-link>
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