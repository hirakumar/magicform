<template> 
   
     <div @click = "clickInput">
     <b-form-input 
      :disabled = "data.disabled"
      :required = "data.required"
      :form = "data.form"
      :autofocus = "data.autofocus"
      :size = "data.size"
      :state = "data.state"
      :name = "data.name"
      :value = "data.value"
      :readonly = "data.readonly"
      :plaintext = "data.plaintext"
      :autocomplete = "data.autocomplete"
      :placeholder = "data.placeholder"
      :trim = "data.trim"
      :number = "data.number"
      :type = "data.type"
      :on-wheel = "data['on-wheel']"
      :min = "data.min"
      :max = "data.max"
      :step = "data.step"
      :list = "data.list"
      :id = "data.id"
      :class = "data.class"
      :data-eno = "data.eno"
      
     ></b-form-input>
     </div>
     

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'inputs',
  props:{
  	data:Object
  },
  methods:{
    clickInput:function(event){
        if(this.isEditMode){
          this.$store.commit("setActiveEno",this.data.eno);
          this.$store.commit("setEditMode",true);
          event.preventDefault();
          event.stopPropagation();
        }     
    }
  },
  computed:{
    isEditMode:{
      get(){          
          return this.$store.getters.isEditMode;
      } 
    },
  },
  components: {
   
  }
}
</script>
