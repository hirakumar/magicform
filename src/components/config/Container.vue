<template>

    <b-card no-body >
        <b-list-group flush>
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
        <b-list-group-item>  Fluid Width : <b-form-checkbox v-model="fluidWidth" class="float-right"  name="check-button" switch></b-form-checkbox> 
        </b-list-group-item>
        <b-list-group-item >
            <b-btn-group size="sm">
                <b-button @click="addContainerBefore" > Add Before </b-button>
                <b-button @click="addContainerAfter" > Add After </b-button>
                <b-button variant="danger" @click="removeObj">Remove Container</b-button>
            </b-btn-group>
            
        
        </b-list-group-item>
        </b-list-group>
    </b-card>
</template>
<script>

export default {
 name: 'ConfigContainer',
  props:{
  	data:Number
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
     fluidWidth:{
        get(){
          return (this.eleObj.fluid ? true : false );
        },
        set(val){
          return this.$store.commit('editObj',{fluid:val})
        }
      },
    
  
  },
  components:{
    
  },
  methods:{
     removeObj(){
          this.$store.dispatch("removeObj");
      },
      setContainerWidth(val){
          console.log("set:",val);
      },
      addContainerBefore(){
        this.$store.commit('addContainer',{action:'addBefore'});
      },
      addContainerAfter(){
        this.$store.commit('addContainer',{action:'addAfter'});
      }
  }
}
</script>