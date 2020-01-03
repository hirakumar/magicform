<template>

    <b-card title="Form">

        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        
        <b-list-group flush>
           
         <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="ID"
                       
                        label-cols="6" class="mb-0"
                       
                    >  <b-input  size="sm"  v-model="eleObj.id" />
              </b-form-group>
         </b-list-group-item>
          <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="Class"
                       
                        label-cols="6" class="mb-0"
                        
                    >  <b-input  size="sm"  v-model="eleObj.class" />
              </b-form-group>
         </b-list-group-item>
            <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                      label="Inline"
                         
                        label-cols="6" class="mb-0"
                    ><b-form-checkbox  class="float-right" v-model="eleObj.inline"  name="check-button" switch></b-form-checkbox>
              </b-form-group>
         </b-list-group-item>
       <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="No Validate"
                       
                        label-cols="6" class="mb-0"
                    ><b-form-checkbox class="float-right"  v-model="eleObj.novalidate"  name="check-button" switch></b-form-checkbox>
              </b-form-group>
         </b-list-group-item>
          <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="Validated"
                       
                        label-cols="6" class="mb-0"
                    ><b-form-checkbox  class="float-right"   v-model="eleObj.validated" name="check-button" switch></b-form-checkbox>
              </b-form-group>
         </b-list-group-item>
    
        </b-list-group>
    </b-card> 
  
</template>
<script>

export default {
    name: 'FormEle',
    props: {
        data: Number
    },
    created:function(){
        console.log("DAta :", this.data);
    },
    data: function() {
        return {
            expandlevel: 0,       
           
        }
    },
    methods:{
        remove: function(){
          this.$store.dispatch("formBuilder/removeObj");
        },
       
    },
    components:{
       
       
    },
    computed:{       
       eleObj:{
           get(){
               return this.$store.getters['formBuilder/getObj'](this.data);
           }
       }
    }
}
</script>
<style scoped>

</style>