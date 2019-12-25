<template>
  <div class="toolsEle">
    <b-btn-group :vertical="true" size="sm" >
      <!-- ### Container ###  -->
      <template v-if="isContainer">
          <b-button @click="addRow">Add Row</b-button>
          <b-dropdown right text="Add Container">
            <b-dropdown-item @click="addContainerBefore">   Before Container </b-dropdown-item>
            <b-dropdown-item @click="addContainerAfter">   After Container </b-dropdown-item>
          </b-dropdown>
      </template>
      <!-- ### Row ### -->
      <template v-if="isRow">                 
          <b-button @click="addCol">Add Col</b-button>
           <b-button @click="addRow">Add Row</b-button>
               
      </template>
      <!-- ###  Form ### -->
      <template v-if="isForm">
         <b-button @click="createFormGroup" size="sm">
           <img src="../assets/form-group.svg" />                    
         </b-button>
          <b-button @click="createFormSelectBox" size="sm">
           <img src="../assets/form-select.svg" />
          </b-button>
          <b-button @click="createCheckBoxGroup">
            <img src="../assets/form-checkbox-group.svg" />
          </b-button>

          <b-button @mouseenter="showBtnMenu"  @mouseleave="hideBtnMenu">
              <img src="../assets/button.svg" />
            <b-button-group right text="Buttons" v-if="btnMenuStatus" class="subBtnGroup">
             <b-button @click="createButton"> 
                <img src="../assets/button.svg" />
              </b-button>
             <b-button @click="createButtonGroup">BG</b-button>
           </b-button-group>
          </b-button>           
          <b-button @click="createRadioGroup">
            <img src="../assets/form-radio-group.svg" />
          </b-button>
          
          <b-button @click="createTextarea">
            <img src="../assets/form-textarea.svg" />
          </b-button>
          <b-button @click="createFile">
            <img src="../assets/form-file.svg" />
        </b-button>
       
          <b-button @click="createHTML">
            <img src="../assets/html.svg" />

          </b-button>
           <b-button @click="createContainer">
             <img src="../assets/container.svg" />
          </b-button>
      </template>
      <!-- ### Col ### -->
      <template v-if="isCol">
         <b-button @click="createFormGroup" size="sm">
           <img src="../assets/form-group.svg" />                    
         </b-button>
        <b-button @click="createFormSelectBox" size="sm">
         <img src="../assets/form-select.svg" />
        </b-button>
        <b-button @click="createCheckBoxGroup">
          <img src="../assets/form-checkbox-group.svg" />
        </b-button>

        <b-button @mouseenter="showBtnMenu"  @mouseleave="hideBtnMenu">
          <img src="../assets/button.svg" />
          <b-button-group right text="Buttons" v-if="btnMenuStatus" class="subBtnGroup">
           <b-button @click="createButton"> 
              <img src="../assets/button.svg" />
            </b-button>
           <b-button @click="createButtonGroup">BG</b-button>
         </b-button-group>
        </b-button>
         
        <b-button @click="createRadioGroup">
          <img src="../assets/form-radio-group.svg" />
        </b-button>
        
        <b-button @click="createTextarea">
          <img src="../assets/form-textarea.svg" />
        </b-button>
        <b-button @click="createFile">
          <img src="../assets/form-file.svg" />
        </b-button>       
        <b-button @click="createHTML"><img src="../assets/html.svg" /></b-button>
        <b-button @mouseenter="showColMenu" @mouseleave="hideColMenu">
         <img src="../assets/col.svg" />
          <b-button-group right text="Add Column" v-if="colMenuStatus"  class="subBtnGroup">
            <b-button @click="addColBefore">Before</b-button>
            <b-button  @click="addColAfter">After</b-button>
          </b-button-group>
        </b-button>  
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
          true : true,
          btnMenuStatus : false,
          colMenuStatus : false,
      }
  },
  methods:{
    showBtnMenu(){
      this.btnMenuStatus = true;
    },
    hideBtnMenu(){
      this.btnMenuStatus = false;
    },
     showColMenu(){
      this.colMenuStatus = true;
    },
    hideColMenu(){
      this.colMenuStatus = false;
    },
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
      /*
      addRowBefore : function(){
        this.$store.commit("addEle",{action:'addBefore',eno:this.data});
      },
      addRowAfter: function(){
          this.$store.commit("addEle",{action:'addAfter',eno:this.data});
          
      },
      */
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
<style scoped >
.subBtnGroup{
  position:absolute;
  top:-2px;
  left:45px;
}
</style>
