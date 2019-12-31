<template>    
    <div class="buttonGroup" >
      <div class="eleHolder" v-if="isEditMode" >
        <b-button @click="clickEvent" class="btn eleinfo btn-secondary btn-sm active" >Button Group</b-button>
      </div>
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
       <app-elements :data="child" v-for="child in myChilds" :key="child.eno" />
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
    clickEvent:function(event){
      if(this.isEditMode){
        this.$store.commit('setActiveEno',this.data.eno);
        this.$store.commit('setEditMode',true);
        event.preventDefault();
        event.stopPropagation();
      }   
      
    },  
  
  },
  computed:{
    isEditMode:{
      get(){
        return this.$store.getters['formBuilder/isEditMode'];
      },      
    },
  
    hasChild:{
        get(){
            if(this.data != undefined){
                
                return this.$store.getters['formBuilder/hasChild'](this.data.eno);
            }
            
        }
    },
    myChilds:{
      get(){
        if(this.data != undefined){
          return this.$store.getters['formBuilder/getChilds'](this.data.eno)
        }
      }
    },
  },
  components: {
    'app-button' : Button,
    'app-elements' :  () => import('@/components/Elements.vue'),
   
  }
}
</script>
