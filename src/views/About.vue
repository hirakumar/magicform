<template>
<div>
   <b-container  >
      <b-row v-if="hasElements">
          <b-col cols="11">
            
            <b-form inline>
            <b-select v-model="selectedDevice" :options="deviceOptions" size="sm" @change="changeDevice"></b-select>
            <b-input type="text" placeholder="width" v-model="device.width" size="sm" /> x <b-input type="text" v-model="device.height" placeholder="height" size="sm" />
            <b-button size="sm" @click="rotate">  Rotate</b-button>
            </b-form>
          </b-col>
          <b-col cols="1">
              <b-form-checkbox v-model="isEditMode" class="float-right" name="check-button" switch></b-form-checkbox>
          </b-col>
      </b-row>
   </b-container>
    <app-tools :data="activeEno" v-if="isEditMode" />
    <app-panel :data="activeEno" v-if="isEditMode"></app-panel>
  <b-container class="about" >
      <b-row>
       
        <b-col cols="12"> 
           
            <app-creator v-if="!hasElements" ></app-creator>
    </b-col>
      
        </b-col>
      </b-row>   
  </b-container>
   <div :class="['formEditor',showEditor]" >
      <div class="device" :style="editorStyle">
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
