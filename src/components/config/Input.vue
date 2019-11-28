<template>
<b-card no-body >
  
<b-list-group flush>
            <b-list-group-item>
              <b-form-group 
                      
                        label="Input Type : "
                        label-cols="6"
                        class="mb-0"
                        >
                           <b-form-select v-model="inputType"   :options="typeOptions" size="sm" ></b-form-select>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
              <b-form-group 
                      
                        label="Class : "
                        label-cols="6"
                        class="mb-0"
                        >
                          
                            <b-input v-model="classname" size="sm" />
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
               <b-form-group 
                      
                        label="ID : "
                        label-cols="6"
                        class="mb-0"
                        >
                          <b-input v-model="id" size="sm" />
                          
                    </b-form-group>
             </b-list-group-item>
                  <b-list-group-item>
               <b-form-group 
                      
                        label="Name : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-input v-model="name" size="sm" />
                          
                    </b-form-group>
             </b-list-group-item>
             <b-list-group-item>
               <b-form-group 
                      
                        label="Change Form Type : "
                        label-cols="6"
                        class="mb-0"
                        >
                           <b-form-select v-model="inputEle"   :options="formOptions" size="sm" ></b-form-select>
                    </b-form-group>
             </b-list-group-item>
              <b-list-group-item>
               <b-form-group 
                      
                        label="Disabled : "
                        label-cols="6"
                        class="mb-0"
                        >
                          <b-form-checkbox v-model="disabled" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
             </b-list-group-item>
                  <b-list-group-item>
               <b-form-group 
                      
                        label="Required : "
                        label-cols="6"
                        class="mb-0"
                        >
                          <b-form-checkbox v-model="required" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
             </b-list-group-item>
        
          <b-list-group-item>
               <b-form-group 
                      
                        label="Form : "
                        label-cols="6"
                        class="mb-0"
                        >
                          <b-input v-model="form" size="sm" />
                    </b-form-group>
             </b-list-group-item>
 <b-list-group-item>
               <b-form-group 
                      
                        label="Auto Focus : "
                        label-cols="6"
                        class="mb-0"
                        >
                          <b-form-checkbox v-model="autofocus" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
             </b-list-group-item>
 <b-list-group-item>
               <b-form-group 
                      
                        label="Aria Invalid : "
                        label-cols="6"
                        class="mb-0"
                        >
                          <b-form-checkbox v-model="ariaInvalid" class="float-right"  name="check-button" switch></b-form-checkbox> 
                          
                    </b-form-group>
             </b-list-group-item>
              <b-list-group-item>
               <b-form-group 
                      
                        label="Size : "
                        label-cols="6"
                        class="mb-0"
                        >
                          <b-form-select v-model="size"   :options="sizeOptions" size="sm" ></b-form-select>
                    </b-form-group>
             </b-list-group-item>
              <b-list-group-item>
               <b-form-group 
                      
                        label="Value : "
                        label-cols="6"
                        class="mb-0"
                        >
                        <b-input v-model="value" size="sm" />
                    </b-form-group>
             </b-list-group-item>
             <b-list-group-item>
               <b-form-group 
                      
                        label="Plain Text : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-form-checkbox v-model="plaintext" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
             </b-list-group-item>
             <b-list-group-item>
               <b-form-group 
                      
                        label="Placeholder : "
                        label-cols="6"
                        class="mb-0"
                        >
                        <b-input v-model="placeholder" size="sm" />
                    </b-form-group>
             </b-list-group-item>
              <b-list-group-item>
               <b-form-group 
                      
                        label="Auto Complete : "
                        label-cols="6"
                        class="mb-0"
                        >
                        <b-input v-model="autocomplete" size="sm" />
                    </b-form-group>
             </b-list-group-item>
             <b-list-group-item>
               <b-form-group 
                      
                        label="Formater : "
                        label-cols="6"
                        class="mb-0"
                        >
                        <b-input v-model="formater" size="sm" />
                    </b-form-group>
             </b-list-group-item>
              <b-list-group-item>
               <b-form-group 
                      
                        label="Lazy Formatter : "
                        label-cols="6"
                        class="mb-0"
                        >
                        <b-input v-model="lazyFormatter" size="sm" />
                    </b-form-group>
             </b-list-group-item>
              <b-list-group-item>
               <b-form-group 
                      
                        label="Trim : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-form-checkbox v-model="trim" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
             </b-list-group-item>
              <b-list-group-item>
               <b-form-group 
                      
                        label="Number : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-form-checkbox v-model="number" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
             </b-list-group-item>
             <b-list-group-item>
               <b-form-group 
                      
                        label="Lazy : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-form-checkbox v-model="lazy" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
             </b-list-group-item>
               <b-list-group-item>
               <b-form-group 
                      
                        label="Debounce : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-input v-model="debounce" size="sm"  />
                    </b-form-group>
             </b-list-group-item>
              <template v-if="eleObj.type=='number'">
               <b-list-group-item>
               <b-form-group 
                      
                        label="Min : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-input v-model="min" size="sm" type="number" />
                    </b-form-group>
             </b-list-group-item>

               <b-list-group-item>
               <b-form-group 
                      
                        label="Max : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-input v-model="max" size="sm" type="number" />
                    </b-form-group>
             </b-list-group-item>
              </template>
             <b-list-group-item>
               <b-form-group 
                      
                        label="Step : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-input v-model="step" size="sm" type="number" />
                    </b-form-group>
             </b-list-group-item>
  <b-list-group-item>
               <b-form-group 
                      
                        label="List : "
                        label-cols="6"
                        class="mb-0"
                        >
                         <b-input v-model="list" size="sm" type="text" />
                    </b-form-group>
             </b-list-group-item>
          
        </b-list-group>


</b-card>
</template>
<script>

export default {
 name: 'ConfigInput',
  props:{
  	data:Number
  },
  data:function(){
    return {
      activeProperty:'',
     
      typeOptions:['text','number','email','password','search','url','tel','date','time','range','color'],
      sizeOptions:[
        {text:'None', value:false},
        {text:'Small',value:'sm'},
         {text:'Medium',value:'md'},
         {text:'Largge',value:'lg'},
      ],
      formOptions:[
        {text:"Input", value:'form-input' },
        {text:"Select Box", value:'form-select' },
         {text:"Radio Button", value:'form-radio' },
         {text:"Checkbox ", value:'form-checkbox' },
         {text:"Textarea", value:'form-textarea' },
          {text:"File", value:'form-file' }
        ]
    }
  },
  computed:{
      eno:{
          get(){
             return this.data; 
          }
      },
     
      eleObj:{
        get(){
            return this.$store.getters.getObj(this.eno);
  		},
  		set(val){
  			return val;
  		}
      },
     
      id:{
          get(){
            if(this.eleObj != undefined){
                return this.eleObj.id;
              }
            
            },set(val){
                 console.log("ID");
                 this.$store.commit('editObj',{id:val})
            }
      },
      name:{
          get(){
            if(this.eleObj != undefined){
                return this.eleObj.name;
              }
            },set(val){
                 this.$store.commit('editObj',{name:val})
            }
      },
      classname:{
          get(){
            if(this.eleObj != undefined){
                return this.eleObj.class;
              }
            },set(val){
                 this.$store.commit('editObj',{class:val})
            }
      },
      disabled:{
        get(){
          if(this.eleObj != undefined){
            return this.eleObj.disabled;
          }
        },set(val){
              this.$store.commit('editObj',{disabled:val})
        }
      },
      required:{
        get(){
          if(this.eleObj != undefined){
            return this.eleObj.required;
          }
        },set(val){
              this.$store.commit('editObj',{required:val})
        }
      },
       form:{
        get(){
          if(this.eleObj != undefined){
            return this.eleObj.form;
          }
        },set(val){
              this.$store.commit('editObj',{form:val})
        }
      },
       autofocus:{
        get(){
          if(this.eleObj != undefined){
            return this.eleObj.autofocus;
          }
        },set(val){
              this.$store.commit('editObj',{autofocus:val})
        }
      },
      lazyFormatter:{
        get(){
          if(this.eleObj != undefined){
            return this.eleObj['lazy-formatter'];
          }
        },set(val){
              this.$store.commit('editObj',{'lazy-formatter':val})
        }
      },
      ariaInvalid:{
        get(){
          if(this.eleObj != undefined){
            return this.eleObj['aria-invalid'];
          }
        },set(val){
              this.$store.commit('editObj',{'aria-invalid':val})
        }
      },
      size:{
        get(){
          if(this.eleObj != undefined){
            return this.eleObj.size;
          }
        },set(val){
              this.$store.commit('editObj',{size:val})
        }
      },
       value:{
        get(){
          if(this.eleObj != undefined){
            return this.eleObj.value;
          }
        },set(val){
              this.$store.commit('editObj',{value:val})
        }
      },
      plaintext:{
         get(){
          if(this.eleObj != undefined){
            return this.eleObj.plaintext;
          }
        },set(val){
              this.$store.commit('editObj',{plaintext:val})
        }
      },
      autocomplete:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.autocomplete;
          }
        },set(val){
              this.$store.commit('editObj',{autocomplete:val})
        }
      },
           trim:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.trim;
          }
        },set(val){
              this.$store.commit('editObj',{trim:val})
        }
      },
      lazy:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.lazy;
          }
        },set(val){
              this.$store.commit('editObj',{lazy:val})
        }
      },
      debounce :{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.debounce ;
          }
        },set(val){
              this.$store.commit('editObj',{debounce :val})
        }
      },
      
      placeholder:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.placeholder;
          }
        },set(val){
              this.$store.commit('editObj',{placeholder:val})
        }
      },
      number:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.number;
          }
        },set(val){
              this.$store.commit('editObj',{number:val})
        }
      },
         min:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.min;
          }
        },set(val){
              this.$store.commit('editObj',{min:val})
        }
      },
           max:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.max;
          }
        },set(val){
              this.$store.commit('editObj',{max:val})
        }
      },
           step:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.step;
          }
        },set(val){
              this.$store.commit('editObj',{step:val})
        }
      },
          list:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj.list;
          }
        },set(val){
              this.$store.commit('editObj',{list:val})
        }
      },
            noWheel:{
  get(){
          if(this.eleObj != undefined){
            return this.eleObj['no-wheel'];
          }
        },set(val){
              this.$store.commit('editObj',{'no-wheel':val})
        }
      },
      formater:{
 get(){
             if(this.eleObj != undefined){
            return this.eleObj.formater;
          }
        },set(val){
              this.$store.commit('editObj',{formater:val})
        }
      },
    inputType:{
           get(){
               
               return (this.eleObj.hasOwnProperty('type') ? this.eleObj.type : "form-input");
               
            },set(val){
                this.$store.commit('editObj',{type:val})
            }
      },
      inputEle:{
         get(){
               
               return (this.eleObj.hasOwnProperty('ele') ? this.eleObj.ele : "form-input");
               
            },set(val){
                this.$store.commit('editObj',{ele:val})
            }
      }
  
  },
  components:{
    
  },
  methods:{
    /*
    changeActiveProperty(val){
      this.activeProperty=val;
    },
     
   changeTxt(e){
     console.log(e);
    
       this.activeProperty=e.target.dataset.property;
     
      
      switch(this.activeProperty){
       
        case "id" :
          this.$store.commit('editObj',{id:e.target.value})
        break;

        case "name" :
          this.$store.commit('editObj',{name:e.target.value})
        break;


      }
     
   },
   changeBoolean(event){
    
      console.log(val);
      console.log(this.activeProperty);
      switch(this.activeProperty){
        case  "disabled" :
           this.$store.commit('editObj',{disabled:val})
          break;
      }
     
   }
 */
  }
}
</script>