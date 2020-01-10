<template>    
    <div class="buttonGroup" >
      
    <div v-html="data.before" class="before"></div>   
    <b-btn-group
      :id = "data.id"
      :class = "data.class"
      :vertical = "data.vertical"
      :size = "data.size"
      :tag = "data.tag"
      :ariaRole = "data['aria-role']"        
    >    
    <template v-if="hasChild">     
       <app-button v-for="btn in buttons" :data="btn" :key="btn.order"></app-button>
    </template>    
  </b-btn-group>
    <div v-html="data.after" class="after"></div>
  </div>
</template>

<script>

export default {
  name: 'buttonGroups',
  props:{
  	data:Object
  },
  methods:{
 
  
  },
  computed:{

    hasChild:{
        get(){
            return this.$store.getters['hasChild'](this.data.eno);
        }
    },
    buttons:{
        get(){
            if(this.hasChild){
                return this.$store.getters['getChilds'](this.data.eno);
            }
        }
    }
  },
  components: {
   
    'app-button' :  () => import('@/components/generator/Buttons.vue'),
   
  }
}
</script>
