<template>
<div>
  <div class="border-bottom">
   <b-container >
      <b-row v-if="hasElements" >
          <b-col class="pt-2 pb-2">
            
            <b-form inline>
            <b-select class="mr-1" v-model="selectedDevice" :options="deviceOptions" size="sm" @change="changeDevice"></b-select>
            <b-input class="mr-1" type="text" placeholder="width" v-model="device.width" size="sm" /> <span class="pr-1">x</span> <b-input class="mr-1" type="text" v-model="device.height" placeholder="height" size="sm" />
            <b-button size="sm" @click="rotate">  Rotate</b-button>
            </b-form>
          </b-col>
         
      </b-row>
   </b-container>
 </div>
    <app-tools :data="activeEno" v-if="isEditMode" />
    <app-panel :data="activeEno" v-if="isEditMode"></app-panel>
  <b-container class="about" v-if="!hasElements">
      <b-row align-v="center" align-h="center" align-content="center">
       
        <b-col cols="12" class="pt-3" > 
           
            <app-creator  ></app-creator>
    </b-col>
      
        </b-col>
      </b-row>   
  </b-container>
   <div :class="['formEditor pt-3',showEditor]" >
      <div class="device " :style="editorStyle" v-if="hasElements" >
              <app-elements :data="mainParent" v-for="mainParent in mainParents" :key="mainParent.eno" />
      </div>
   </div> 
  </div>
</template>
<script>
import Container from '@/components/Container.vue';

import FormCreator from '@/components/FormCreator.vue';
import Elements from '@/components/Elements.vue';
import Tools from '@/components/Tools.vue';
import Panel from '@/components/Panel.vue';
export default {
  name: 'About',
  data:function(){
    return {
      selectedDevice:'desktop',
     deviceOptions:[
       {text:'Mobile Device', value:'mobile' },
       {text:'Tablet Device', value:'tablet' },
       {text:'Laptop', value:'laptop' },
       {text:'Desktop', value:'desktop' }
     ],
     landscape : true,
     device:{
       'width':1140,
       'height':500
     },
     showTrue : true
    }
  },
  computed:{
    editorStyle:{
      get(){
        return `width:${this.device.width}px;height:${this.device.height}px`
      }
      
    },
    hasElements :{
      get(){
        return this.$store.getters.hasElements;
      }
    },
    isEditMode:{
      get(){
        return this.$store.getters.isEditMode;
      },
      set(val){         
         return this.$store.commit('setEditMode',val);        
      }
    },
    startStatus:{
      get(){
    
        return (this.$store.getters.getTotalElements>0 ? false : true)
      }
    },
  showEditor:{
    get(){
      if(this.isEditMode){
        return "showEditor";
      }else{
        return "hideEditor";
      }
    }
  },
  	containers:{
  		get(){
       return this.$store.getters.getContainers;
  		},
  		set(val){
  			return val;
  		}
    },
    isConfigEle:{
      get(){
        return this.$store.getters.isConfigEle;
      }
    },
    enoid :{
      get(){
        return this.$store.getters.getConfigEle;
      }
    },
    activeEno :{
      get(){
        
        return this.$store.getters.getActiveEno;
      }
    },
    activeObj:{
      get(){
        return this.$store.getters.activeObj;
      }
    },

      mainParents:{
        get(){
          return this.$store.getters.getMainParents;
        }
      }
  },
  methods:{
    changeDevice:function(val){
      switch(val){
        case 'mobile':
        this.device.width=375;
        this.device.height=667;
        break;

        case 'tablet':
        this.device.width=768;
        this.device.height=1024;
        break;

        case 'laptop':
        this.device.width=1280;
        this.device.height=800;
        break;

        case 'desktop':
        this.device.width=1280;
        this.device.height=800;
        break;

      }
    },
    rotate:function(){
      let deviceClone = Object.assign({},this.device);
      this.device.width=deviceClone.height;
      this.device.height=deviceClone.width;
    }
  },
  components:{
    'app-container' : Container,
    'app-creator':FormCreator,
    'app-elements' : Elements,
    'app-tools' : Tools,
    'app-panel' : Panel
  }
  
}
</script>
<style scoped lang="scss">
.vh{
  height:100vh;
}
.formEditor{
  display:flex;
  flex-direction:row;
  justify-content: center;
  .device{
    display: block;
    border:solid 1px black;
    
  }
}
</style>
