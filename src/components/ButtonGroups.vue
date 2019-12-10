<template>
    
    <div class="buttonGroup" 
      >
     
      <b-button @click="clickEvent" class="btn eleinfo btn-secondary btn-sm active" >Button Group</b-button>
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
import Button from '@/components/Buttons.vue'

export default {
  name: 'buttonGroups',
  props:{
  	data:Object
  },
  methods:{
    mouseEnter:function(){
     // console.log("Mouse Enter :" + this.data.eno);
      this.$store.commit('changeEle',this.data.eno);
      
    },
    mouseLeave:function(){
     // console.log("Mouse Leave")
    },
    clickEvent:function(event){
      console.log("Clicked :" + this.data.eno);
      this.$store.commit('setActiveEno',this.data.eno);
      this.$store.commit('setEditMode',true);
      event.preventDefault();
      event.stopPropagation();
    },
   
  
  },
  computed:{
    hasChild:{
        get(){
            
            console.log(this.data.eno);
           
        return this.$store.getters.hasChild(this.data.eno);
            
            
        }
    },
    buttons:{
        get(){
            if(this.hasChild){
                return this.$store.getters.getChilds(this.data.eno);
            }
        }
    }
  },
  components: {
    'app-button' : Button,
   
  }
}
</script>
