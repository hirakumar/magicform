<template>
    <b-card title="HTML">
                      
        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-modal id="ckmodal" title="Text Editor" size="xl" hide-footer>
            <ckeditor  :editor="editor" v-model="eleObj.text" :config="editorConfig"></ckeditor>
        </b-modal>
         <b-modal id="bootTextarea" title="Text Editor" size="xl" hide-footer>
            <b-textarea v-model="eleObj.text" v-if="!showCkEditor"></b-textarea>
        </b-modal>
        <b-list-group flush>
         <b-list-group-item class="pl-0 pr-0">
              <b-form-group                        
                       label="Open Rich Text Editor"
                       
                        label-cols="6" class="mb-0"
                    >  <b-form-checkbox   v-model="showCkEditor" class="float-right"  name="check-button" switch></b-form-checkbox>
              </b-form-group>
         </b-list-group-item>
          <b-list-group-item class="pl-0 pr-0">
               <b-form-group                        
                       label="ID"
                       label-cols="6" class="mb-0"
                    >
                    <b-input type="text" v-model="eleObj.id" />
               </b-form-group>
          </b-list-group-item>
      <b-list-group-item class="pl-0 pr-0" >
               <b-form-group                        
                       label="Class"
                       label-cols="6" class="mb-0"
                    >
                    <b-input type="text" v-model="eleObj.class" />
               </b-form-group>
          </b-list-group-item>
                <b-list-group-item class="pl-0 pr-0" >
               <b-form-group                        
                       label="Order"
                       label-cols="6" class="mb-0"
                    >
                    <b-input type="text" v-model="eleObj.order" />
               </b-form-group>
          </b-list-group-item>
        </b-list-group>
    </b-card>
</template>
<script>

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor from '@ckeditor/ckeditor5-vue';

// import ClassicEditor from '@ckeditor/ckeditor5-vue';

export default {
    name: 'ConfigDivEle',
    props: {
        data: Number
    },
    data: function() {
        return {
            expandlevel: 0,
         
             editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
            // The configuration of the editor.
        }
        }
    },
    methods:{
        remove: function(){
          this.$store.dispatch("removeObj");
        },
        toggleModal : function(){
            console.log(this.showCkEditor);
           
            
        }
    },
    components:{
        ckeditor: ckeditor.component
       
    },
    computed:{
        showCkEditor : {
            get(){
                return false;
            },
            set(val){
                console.log(val);
                if(val){
                    this.$bvModal.show('ckmodal')
                }else{
                    this.$bvModal.show('bootTextarea')
                }
                return val;
            }
        },
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