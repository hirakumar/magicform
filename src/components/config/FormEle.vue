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
                    >  <b-input v-model="data.id" size="sm" />
              </b-form-group>
         </b-list-group-item>
          <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="Class"
                       
                        label-cols="6" class="mb-0"
                    >  <b-input v-model="data.class" size="sm" />
              </b-form-group>
         </b-list-group-item>
         <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="Inline"
                       
                        label-cols="6" class="mb-0"
                    ><b-form-checkbox v-model="eleObj.inline" class="float-right"  name="check-button" switch></b-form-checkbox>
              </b-form-group>
         </b-list-group-item>
         <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="No Validate"
                       
                        label-cols="6" class="mb-0"
                    ><b-form-checkbox v-model="eleObj.novalidate" class="float-right"  name="check-button" switch></b-form-checkbox>
              </b-form-group>
         </b-list-group-item>
          <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="Validated"
                       
                        label-cols="6" class="mb-0"
                    ><b-form-checkbox v-model="eleObj.validated " class="float-right"  name="check-button" switch></b-form-checkbox>
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
    data: function() {
        return {
            expandlevel: 0,
         
           
        }
    },
    methods:{
        remove: function(){
          this.$store.dispatch("removeObj");
        },
       
    },
    components:{
       
       
    },
    computed:{
       
        eno: {
            get() {
                return this.data;
            }
        },

        eleObj: {
            get() {
                return this.$store.getters.getObj(this.eno);
            },
            set(val) {
                return val;
            }
        },
    }
}
</script>
<style scoped>

</style>