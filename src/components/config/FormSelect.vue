<template>
<b-card   title="Form Group">

  <b-button variant="link" size="md" class="trash" >
      <font-awesome-icon :icon="['fas','trash-alt']" /> 
  </b-button>
  <b-list-group flush>
      <b-list-group-item>
          <!-- Label -->
          <b-form-group                        
            label="Fill Data from : "
            label-for="label"
            label-cols="6"
            class="mb-0"
            >
            
          </b-form-group>
          <b-row>
              <b-col cols="5"><b-input placeholder="Text" v-model="text" @keyup="changeValue" /> </b-col>
              <b-col cols="5"><b-input placeholder="Value" v-model="value" /></b-col>
              <b-col cols="2"><b-button size="sm" @click="addOption"><font-awesome-icon :icon="['fas','plus']" /> </b-button></b-col>
          </b-row>
      </b-list-group-item>
  </b-list-group>
</b-card>
</template>
<script>

export default {
 name: 'ConfigFormSelect',
  props:{
    data:Number,
    addDataPanelStatus:false
  },
  data:function(){
    return {
      text:'',
      value:''
    }
  },
  computed:{  
    
  
  },
  components:{
    
  },
  methods:{
    addCustomData :  function(){
      this.addDataPanelStatus =true;
    },
    
    changeValue : function(){
      this.value =this.text.replace(/\s/g,'_').toLowerCase();
    },
    addOption : function(){
      this.$store.dispatch('addOption',{text:this.text, value:this.value})
    }

  }
}
</script>