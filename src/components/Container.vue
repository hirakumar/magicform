<template>
  <b-container :data-eno="data.eno" :fluid="data.fluid"  :tag="data.tag" :id="data.id" :class="data.class" >
    
      <app-infoele :data="data" v-if="isEditMode"></app-infoele>
      <app-elements :data="child" v-for="child in myChilds" :key="child.eno" v-if="hasChild" />
 </b-container>
</template>

<script>
export default {
  name: 'container',
  props:{
  	data:Object
  }, 
  components:{  	
    'app-elements' :  () => import('@/components/Elements.vue'),
    'app-infoele' : () => import('@/components/InfoEle.vue'),
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
  methods:{
  
  }
}
</script>
<style>


</style>
