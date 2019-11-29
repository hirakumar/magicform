<template>


                    
        <b-card no-body >
        <b-list-group flush>
            <b-list-group-item>
    <!-- Cols -->
    <b-form-group
        id="cols"      
        label="Cols : "
        label-for="cols"     
        label-cols="4"
        class="mb-0"
        >
        <b-form-input id="cols" min="0" max="12" type="range" size="sm" v-model="cols"  trim></b-form-input>
    </b-form-group>
     </b-list-group-item>
       <b-list-group-item>
                  <!-- Label -->
                    <b-form-group                        
                        label="ID : "
                        label-for="id"
                        label-cols="6"
                        class="mb-0"
                    >
                        <b-form-input id="id" type="text" size="sm" v-model="idname"   trim></b-form-input>
                    </b-form-group>

             </b-list-group-item>
             <b-list-group-item>
                  <!-- Label -->
                    <b-form-group                        
                        label="Class : "
                        label-for="class"
                        label-cols="6"
                        class="mb-0"
                    >
                        <b-form-input id="class" type="text" size="sm" v-model="classname"   trim></b-form-input>
                    </b-form-group>

             </b-list-group-item>
    </b-list-group-item>
    <b-list-group-item>
        <b-button-group>
        <b-button size='sm' @click="addBefore">Add Before</b-button>
        <b-button size='sm' @click="addAfter">Add After</b-button>
        <b-button size='sm' @click="remove" variant="danger">Remove</b-button>

        </b-button-group>

        <b-form-checkbox v-model="detail" class="float-right"  name="check-button" switch></b-form-checkbox>
        
    </b-list-group-item>
    <template v-if="detail">
    <b-list-group-item>
    <!-- Col -->
        <b-form-group
        id="col"      
        label="Col : "
        label-for="col"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-checkbox v-model="col" class="float-right"  name="check-button" switch></b-form-checkbox> 
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
    <b-form-group
        id="col"      
        label="sm: "
        label-for="col"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="cols" type="number" min="0" max="12" size="sm" v-model="colsm"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="md: "

        label-for="md"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="md" type="number" min="0" max="12" size="sm" v-model="md"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="xl: "

        label-for="xl"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="md" type="number" min="0" max="12" size="xl" v-model="xl"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="lg: "

        label-for="lg"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="md" type="number" min="0" max="12" size="xl" v-model="lg"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="offset: "

        label-for="offsset"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="offset" type="number" min="0" max="12" size="xl" v-model="offset"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
    <b-form-group
        id="col"      
        label="offset sm: "
        label-for="offsset-sm"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="offset-sm" type="number" min="0" max="12" size="sm" v-model="offset_sm"  trim></b-form-input>
        
    </b-form-group>
    </b-list-group-item>
    <b-list-group-item>
    
        <b-form-group
        id="col"      
        label="offset md: "
        label-for="offsset-md"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="offset-md" type="number" min="0" max="12" size="sm" v-model="offset_md"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
    <b-form-group
        id="col"      
        label="offset lg: "
        label-for="offsset-lg"     
        label-cols="4"
        >
        <b-form-input id="offset-lg" type="number" min="0" max="12" size="sm" v-model="offset_lg"  trim></b-form-input>
        
    </b-form-group>
</b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="offset xl: "
        label-for="offsset-xl"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="offset-xl" type="number" min="0" max="12" size="sm" v-model="offset_xl"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
    <b-form-group
        id="col"      
        label="order: "
        label-for="order"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="order" type="number" min="0" max="12" size="sm" v-model="order"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
    <b-form-group
        id="col"      
        label="order sm: "
        label-for="order-sm"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="order-sm" type="number" min="0" max="12" size="sm" v-model="order_sm"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
    <b-form-group
        id="col"      
        label="order md: "
        label-for="order-md"     
        label-cols="4"
          class="mb-0"
        >
        <b-form-input id="order-md" type="number" min="0" max="12" size="sm" v-model="order_md"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="order lg: "
        label-for="order-lg"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="order-lg" type="number" min="0" max="12" size="sm" v-model="order_lg"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="order xl: "
        label-for="order-xl"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="order-xl" type="number" min="0" max="12" size="sm" v-model="order_xl"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="Align self: "
        label-for="align-self"     
        label-cols="4"
            class="mb-0"
        >
    
        <b-form-select   :options="alignOptions" size="sm" ></b-form-select>
    </b-form-group>
        </b-list-group-item>
    <b-list-group-item>
        <b-form-group
        id="col"      
        label="Tag : "
        label-for="tag"     
        label-cols="4"
            class="mb-0"
        >
        <b-form-input id="tag" type="text" min="0" max="12" size="sm" v-model="tag"  trim></b-form-input>
        
    </b-form-group>
        </b-list-group-item>
        </template>
            </b-list-group>
            </b-card>

                    
</template>
<script>

export default {
 name: 'DivEle',
  props:{
      data:Number,    
  },
  data: function(){
      return {
          detail :false
      }
  },
  computed:{
     idname:{
          get(){
              return this.eleObj.id;
          },
          set(val){
               return this.$store.commit('editObj',{id:val})
          }
      },
      classname:{
          get(){
              return this.eleObj.class;
          },
          set(val){
               return this.$store.commit('editObj',{class:val})
          }
      },
      alignOptions:{
          get(){
                return ['start','center','end']
          }
      },
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
      isCol:{
          get(){
              return (this.eleObj.ele=="col" ? true : false);
          }
      },
       cols:{
            get(){
                return this.eleObj.cols;
            },set(val){
                //this.$store.commit('changeColVal',val)
               this.$store.commit('editObj',{cols:val})
            }
      },
       col:{
        get(){
            return this.eleObj.col;
  		},
  		set(val){
  			this.$store.commit('editObj',{col:val})
  		}
      },
      colsm:{
 get(){
            return this.eleObj.sm;
  		},
  		set(val){
  			this.$store.commit('editObj',{sm:val})
  		}
      },
      md:{
 get(){
            return this.eleObj.md;
  		},
  		set(val){
  			this.$store.commit('editObj',{md:val})
  		}
      },
       lg:{
 get(){
            return this.eleObj.lg;
  		},
  		set(val){
  			this.$store.commit('editObj',{lg:val})
  		}
      },
      xl:{
 get(){
            return this.eleObj.xl;
  		},
  		set(val){
  			this.$store.commit('editObj',{xl:val})
  		}
      },
       offset:{
        get(){
            return this.eleObj.offset;
  		},
  		set(val){
  			this.$store.commit('editObj',{offset:val})
  		}
      },
      offset_sm:{
        get(){
            return this.eleObj['offset-sm'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'offset-sm':val})
  		}
      },
      offset_md:{
        get(){
            return this.eleObj['offset-md'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'offset-md':val})
  		}
      },
       offset_lg:{
        get(){
            return this.eleObj['offset-lg'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'offset-lg':val})
  		}
      },
      offset_xl:{
        get(){
            return this.eleObj['offset-xl'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'offset-xl':val})
  		}
      },
       order:{
        get(){
            return this.eleObj['order'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'order':val})
  		}
      },
      order_sm:{
        get(){
            return this.eleObj['order-sm'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'order-sm':val})
  		}
      },
      order_md:{
        get(){
            return this.eleObj['order-md'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'order-md':val})
  		}
      },
      order_lg:{
        get(){
            return this.eleObj['order-lg'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'order-lg':val})
  		}
      },
      order_xl:{
        get(){
            return this.eleObj['order-xl'];
  		},
  		set(val){
  			this.$store.commit('editObj',{'order-xl':val})
  		}
      },
      align_self:{
          get(){
              return this.eleObj['align-self'];
          },
          set(val){
             this.$store.commit('editObj',{'align-self':val})
          }
      },
      tag:{
          get(){

          },
          set(val){
             this.$store.commit('editObj',{'tag':val})
          }
      }
    
  
  },
  components:{
   
  },
  methods:{
     

        addBefore : function(){
          this.$store.commit("addEle",{action:'addBefore',eno:this.data});
      },
      addAfter: function(){
          this.$store.commit("addEle",{action:'addAfter',eno:this.data});
      },
      remove: function(){
          this.$store.dispatch("removeObj");
      }

  }
}
</script>