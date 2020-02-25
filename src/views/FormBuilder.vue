<template>
<div>
  <div class="border-bottom">
   <b-container >
    
      <b-row v-if="hasElements" >
          <b-col class="pt-2 pb-2">
       
          sdf : {{selectedDevice}}
            <b-form inline v-if="isResponsiveMode">
            <b-select class="mr-1 " v-if="hasSelectedDevice" v-model="selectedDevice" :options="deviceOptions" size="sm" ></b-select>
            <b-input class="mr-1 " type="text" placeholder="width" v-if="hasSelectedDevice" v-model="selectedDeviceObj.width" size="sm" />
             <span class="pr-1">x</span> <b-input class="mr-1" type="text"  v-if="hasSelectedDevice" v-model="selectedDeviceObj.height" placeholder="height" size="sm" />
            <b-button size="sm" @click="rotate" v-if="rotateStatus">  Rotate</b-button>
            </b-form>
          </b-col>
          <b-col>
            <b-form-checkbox v-model="isEditMode" class="float-right mt-2" name="check-button"  switch></b-form-checkbox>
             <b-button v-if="isEditMode" variant="link" @click="toggleResponsiveMode" class="float-right"><img src="../assets/responsive.svg" width="30" height="30" /></b-button>
          </b-col>
      </b-row>
   </b-container>
 </div>
    <template v-if="isEditMode">
    <app-tools :data="activeEno" v-if="hasElements" />
    </template>
    <app-panel :data="activeEno" ></app-panel>
  <b-container class="about" v-if="!hasElements">
      <b-row align-v="center" align-h="center" align-content="center">
        <b-col cols="12" class="pt-3" > 
          <app-creator  ></app-creator>
        </b-col>
      </b-row>   
  </b-container>
  <!--  <div  > -->
   <div :class="['formEditor pt-3',showEditor]"   >
     
      <!--  <div class="device " :style="editorStyle" v-if="hasElements" > -->
        
      <div class="device " :style="editorStyle"  v-if="hasElements" >
             
           
              <app-elements :data="mainParent" v-for="mainParent in mainParents" :key="mainParent.eno" />
      </div>
   </div> 
  
      <b-container>
      <b-row>
          <b-col cols="8">
            {{getRawElements}}
          </b-col>
      </b-row>
    </b-container>
   
   
  </div>
</template>
<script>




export default {
  name: 'FormBuilder',
  data:function(){
    return {
     showTrue : true
    }
  },
   created() {
           
        },
  computed:{
    getRawElements:{
      get(){
       
        if(this.$store.getters['formBuilder/getRawElements'].length>0){
           
           return this.$store.getters['formBuilder/getRawElements'];
        }
      
      },
      set(val){
        return val;
      }
    },
    selectedDevice:{
       get(){
          console.log( "asdfasdf");
            var obj = this.$store.getters['formBuilder/getDeviceOptions'].find(item=>item.value=== this.$store.getters.getSelectedDevice);       
            
            return obj;  
          
       },
       set(val){
          var obj = this.$store.getters['formBuilder/getDeviceOptions'].find(item=>item.value===val);       
          this.$store.dispatch('formBuilder/setSelectedDevice',obj.value);
       }        
    },
    hasSelectedDevice:{
      get(){
        if(this.selectedDevice!=null){
          return true;
        }else{
          return false;
        }
      },
      set(val){
        return val;
      }
    },
    rotateStatus:{
      get(){        
        if(this.selectedDevice == "laptop" || this.selectedDevice == "desktop"){
          return false;
        }else{
          return true;
        }
      }
    },
    selectedDeviceObj:{
       get(){
          if(this.$store.getters['formBuilder/getDeviceOptions']!=undefined){
            return this.$store.getters['formBuilder/getDeviceOptions'].find(item=>item.value===this.selectedDevice);
          }
          
       },
    },
    deviceOptions: {
       get(){
          return this.$store.getters['formBuilder/getDeviceOptions'];
       }
    },
    editorStyle:{
      get(){
        
        if(this.selectedDeviceObj != undefined){
            return `width:${this.selectedDeviceObj.width}px;min-height:${this.selectedDeviceObj.height}px;`
        }else{
           return 'width:100%';
        }
        
      }
      
    },
    hasElements :{
      get(){
        console.log(this.$store.getters['formBuilder/hasElements']);
        return this.$store.getters['formBuilder/hasElements'];
      }
    },
    isEditMode:{
      get(){
        return this.$store.getters['formBuilder/isEditMode'];
      },
      set(val){         
         return this.$store.commit('formBuilder/setEditMode',val);        
      }
    },
    startStatus:{
      get(){    
        return (this.$store.getters['formBuilder/getTotalElements']>0 ? false : true)
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
       return this.$store.getters['formBuilder/getContainers'];
  		},
  		set(val){
  			return val;
  		}
    },
    isConfigEle:{
      get(){
        return this.$store.getters['formBuilder/isConfigEle'];
      }
    },
    enoid :{
      get(){
        return this.$store.getters['formBuilder/getConfigEle'];
      }
    },
    activeEno :{
      get(){        
        return this.$store.getters['formBuilder/getActiveEno'];
      }
    },
    activeObj:{
      get(){
        return this.$store.getters['formBuilder/activeObj'];
      }
    },
    isResponsiveMode:{
      get(){
        console.log("asdfasd");
        return this.$store.getters['formBuilder/isResponsiveMode'];
      }
    },
      mainParents:{
        get(){
          return this.$store.getters['formBuilder/getMainParents'];
        }
      }
  },
  methods:{

    rotate:function(){
     if(this.selectedDeviceObj != undefined){
      let deviceClone = Object.assign({},this.selectedDeviceObj);
      this.selectedDeviceObj.width=deviceClone.height;
      this.selectedDeviceObj.height=deviceClone.width;
      }
    },
    toggleResponsiveMode : function(){
      this.$store.dispatch('formBuilder/setResponsiveMode');
    }
  },
  mounted:function() {
    console.log("Mounted : " , this.$store.getters['formBuilder/hasElements']);
    console.log("childs :",this.$store.getters['formBuilder/getLastEno']);
    /* Value assign for lastEno */
    if(this.$store.getters['formBuilder/hasElements'] == true && this.$store.getters['formBuilder/getLastEno']==null){
     
      let list =this.$store.getters['formBuilder/getRawElements'].sort((a,b)=> { return a.eno - b.eno} );
          let lasteno= list[list.length-1].eno;
         
         this.$store.commit('formBuilder/setLastEno',{eno:lasteno});
    }
  },
  components:{
    
    'app-creator':() => import('@/components/FormCreator.vue'),
    'app-elements': () => import('@/components/Elements.vue'),
    'app-tools' : () => import('@/components/Tools.vue'),
    'app-panel' : () => import('@/components/Panel.vue'),
  }
  
}
</script>
<style  lang="scss">
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


.configBlock{ position:absolute; width:350px ; right:15px; top:80px; z-index:99;
	.card-title{text-transform: uppercase; font-size:14px}
	.list-group-item {
		padding:3px 0;
		font-size:12px;
		.form-row{
			legend{
				padding-top:3px;
				padding-bottom:3px;
			}
		}
		
	}
}
.toolsEle{position:absolute; left: 10px; top: 61px;
	img{
		width:22px
	}
}

.showEditor{

	.rowHolder{
		min-height:20px;
		width:100%;
		display: flex;
		flex-direction: row;
	}
  .eleHolder{
		min-height:20px;
		width:100%;
		display: flex;
		flex-direction: row;
	}

	.buttonGroup,.formEle,.formCheckBoxGroups{
		border:dashed 1px gray;
    
	}
	.formGroupBlock,.btnEle,.divEle,.rowHolder,.eleHolder{
		position:relative;
		.orderBtn{position:absolute; top:0px; right:0px; z-index:99; display: flex}
	}
	.formGroupBlock,.btnEle,.divEle{
 border:dotted 1px #333;
	}
	.eleinfo{
		padding: 0px;
		font-size: 12px;
		line-height: 20px;
		border-radius: 0px; 
		position:relative; 
		top:0px; 
		left:0px;
		background:#ccc;
		border:#ccc;
		color:#fff;
		text-decoration:none;
		&:after{
			content:'';
			display:block;
			width:100%;
			height:1px;
		}
		.ele,.eno,.eno_class,.eno_id,span{
			display: inline-block;
			min-width: 15px;
			min-height: 13px;			
			text-align: center;	
			padding-left:2px;
			padding-right:2px;	
			color:#fff;	
		}
		
	}

.buttonGroup,.formGroupBlock{
		position:relative;
		.btn-group{
			flex-wrap: wrap;
		}
	}
.container,.container-fluid{
	border:dashed 1px #ccc;
	
	
	.row{
		border:dashed 1px #999; position: relative;
			.orderBtn{
				position:absolute;
				left: 62px;
				top: 0px;
				font-size:12px;
				z-index:9;
				background:#fff;
				
				a{
					display:flex;
					justify-content: center;
					color:#999999;
					width:20px;
					height:20px;
					align-items:center;
					svg{
						font-size:10px;
					}
				}
			}
		.col,.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12{
			border:dashed 1px #333;
			min-height:20px;
			.eleinfo{
				left:-15px;
				top:-5px;
				background:#333;
				border:#333;
				position:absolute;
				top:0px;
				left:0px;
			}
			.buttonGroup,.btnEle{
				border:dashed 1px gray; position: relative;
				.eleinfo{
					left:0px;
				}
				.orderBtn{
						
						min-width:20px;
						padding-left:5px;
						padding-right:5px;
						border-radius:20px;
            left:150px;
						background:none;
						a{
							background:white
						}
						
					}
				.btn-group{
					position: absolute;
					left:0px;
					background:none;
							
					
				}
			}
		
			.divEle{
				
				.orderBtn{
					display: inline-block;
					left:auto;
					right:0px;
					background:none;
				}
			}
			.formGroupBlock{
				.orderBtn{
					left:auto;
					right:0px;
				}
			}
		}
	}
}

}




</style>
