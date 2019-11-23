<template>
 <b-button href="#" class="eleinfo" size="sm" @click ="clickCol">{{data.ele}} : {{data.eno}}</b-button>
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
  components:{
  
  },
  methods:{
    clickCol : function(event){
      event.currentTarget.classList.add('active');
      this.$store.commit('setEditMode',true);
      this.$store.commit('setActiveEno',this.data.eno);
      event.preventDefault();
      event.stopPropagation();
    }
  },
  computed:{
  
      eleObj:{
          get(){
  			return this.$store.getters.getConfigEleObj;
  		},
  		set(val){
  			return val;
  		}
      },

  }
}
</script>
<style scoped>

</style>