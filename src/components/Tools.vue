<template>
  <div>

      <b-btn-group :vertical="true" >
                <template v-if="isContainer">
                    <b-button @click="addRow">Add Row</b-button>
                    <b-dropdown right text="Add Container">
                      <b-dropdown-item @click="addContainerBefore">   Before Container </b-dropdown-item>
                      <b-dropdown-item @click="addContainerAfter">   After Container </b-dropdown-item>
                    </b-dropdown>
                </template>

                <template v-if="isRow">
                 
                    <b-button @click="addCol">Add Col</b-button>
                    <b-dropdown right text="Add Row">
                      <b-dropdown-item @click="addRowBefore"> Before Row</b-dropdown-item>
                      <b-dropdown-item @click="addRowAfter"> After Row</b-dropdown-item>
                    </b-dropdown>

                
                </template>
                <template v-if="isForm">
                   <b-button @click="createFormGroup">Text Box</b-button>
                    <b-button @click="createFormSelectBox">Select Box</b-button>
                    <b-button @click="createCheckBoxGroup">Check Box</b-button>
                     <b-dropdown right text="Buttons">
                       <b-dropdown-item @click="createButton">Button</b-dropdown-item>
                       <b-dropdown-item @click="createButtonGroup">Button Groups</b-dropdown-item>
                     </b-dropdown>
                    <b-button @click="createRadioGroup">Radio Button Group</b-button>
                    
                    <b-button @click="createTextarea">Textarea</b-button>
                    <b-button @click="createFile">File</b-button>
                     <b-dropdown right text="Add Column">
                        <b-dropdown-item @click="addColBefore">Before Column</b-dropdown-item>
                        <b-dropdown-item  @click="addColAfter">After Column</b-dropdown-item>
                    </b-dropdown>
                    <b-button @click="createHTML">HTML</b-button>
                     <b-button @click="createContainer">Container</b-button>
                </template>
                <template v-if="isCol">
                   
                     
                    <b-button @click="createFormGroup">Input</b-button>
                    <b-button @click="createFormSelectBox">Select Box</b-button>
                    <b-button @click="createCheckBoxGroup">Check Box</b-button>
                     <b-dropdown right text="Buttons">
                       <b-dropdown-item @click="createButton">Button</b-dropdown-item>
                       <b-dropdown-item @click="createButtonGroup">Button Groups</b-dropdown-item>
                     </b-dropdown>
                    <b-button @click="createRadioGroup">Radio Button Group</b-button>
                    
                    <b-button @click="createTextarea">Textarea</b-button>
                    <b-button @click="createFile">File</b-button>
                     <b-dropdown right text="Add Column">
                        <b-dropdown-item @click="addColBefore">Before Column</b-dropdown-item>
                        <b-dropdown-item  @click="addColAfter">After Column</b-dropdown-item>
                    </b-dropdown>
                    <b-button @click="createHTML">HTML</b-button>
                    
                     
                </template>
                </b-btn-group>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Tools',
  props:{
  	data:Number
  },
  data:function(){
      return {
          true : true
      }
  },
  methods:{
    createFormGroup(){
          this.$store.dispatch('createFormGroup',{formType : 'input'});
      },
      createFormSelectBox(){
        this.$store.dispatch('createFormGroup',{formType : 'form-select'});
      },
      createCheckBoxGroup(){
        this.$store.dispatch('createFormGroup',{formType : 'form-checkbox-group'});
      },
      createRadioGroup(){
        this.$store.dispatch('createFormGroup',{formType : 'form-radio-group'});
      },
      createTextarea(){
        this.$store.dispatch('createFormGroup',{formType : 'form-textarea'});
      },
      createFile(){
        this.$store.dispatch('createFormGroup',{formType : 'form-file'});
      },
      createButton(){
        this.$store.dispatch('createEle',{ele : 'button'});
      },
      createButtonGroup(){
        this.$store.dispatch('createButtonGroup',{ele : 'button-group'});
      },
      addCol(){
        this.$store.dispatch('createEle',{ele:'col'});
      },
      addRow(){
        this.$store.dispatch('createEle',{ele:'row'});
      },
      addColBefore: function() {
          this.$store.commit("addEle", {
              action: 'addBefore',
              eno: this.data
          });
      },
      addColAfter: function() {
          this.$store.commit("addEle", {
              action: 'addAfter',
              eno: this.data
          });
      },
      addRowBefore : function(){
        this.$store.commit("addEle",{action:'addBefore',eno:this.data});
      },
      addRowAfter: function(){
          this.$store.commit("addEle",{action:'addAfter',eno:this.data});
      },
      createHTML: function(){
        this.$store.dispatch('createEle',{ele:'div'});
      },
      createContainer:function(){
          this.$store.dispatch('createEle',{ele:'container'});
      },
       addContainerBefore() {
            this.$store.commit('addContainer', {
                action: 'addBefore'
            });
        },
        addContainerAfter() {
            this.$store.commit('addContainer', {
                action: 'addAfter'
            });
        }
  },
  computed: {
      showTrue:{
          get(){
              return true;
          }
      },
     eno:{
          get(){
             return this.data; 
          }
      },
     
      eleObj:{
        get(){
            console.log(this.data);
            if(this.data != undefined){
                return this.$store.getters.getObj(this.data);
            }
  		},
  		set(val){
  			return val;
  		}
      },
      
      isContainer:{
        get(){
            if(this.eleObj != undefined){

              return (this.eleObj.ele=="container" ? true : false);
            }
          }
      },
      isCol:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="col" ? true : false);
            }
          }
      },
       isFormGroup:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-group" ? true : false);
            }
          }
      },
       isFormSelect:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-select" ? true : false);
            }
          }
      },
      isForm:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form" ? true : false);
            }
          }
      },
       isButton:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="button" ? true : false);
            }
          }
      },
      isButtonGroup:{
        get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="button-group" ? true : false);
            }
          }
      },
      isInput:{
          get(){
              if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-input" ? true : false);
            }
          }
      },
      isCheckBoxGroup:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-checkbox-group" ? true : false);
          }
        }
      },
      
       isRadioGroup:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-radio-group" ? true : false);
          }
        }
      },
      isTextarea:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-textarea" ? true : false);
          }
        }
      },
      isFile:{
          get(){
              if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-file" ? true : false);
            }
          }
      },
      isRow:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="row" ? true : false);
            }
          }
      },
       isDivEle:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="div" ? true : false);
            }
          }
      },
  }
}
</script>
