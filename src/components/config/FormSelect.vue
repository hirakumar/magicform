<template>
<b-card   title="Form Group">

  <b-button variant="link" size="md" class="trash" @click="remove">
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
            <b-dropdown right split text="Split Menu">
              <b-dropdown-item>Add Custom Data</b-dropdown-item>
          </b-dropdown>
          </b-form-group>
      </b-list-group-item>
  </b-list-group>
</b-card>
</template>
<script>

export default {
 name: 'ConfigFormSelect',
  props:{
  	data:Number
  },
  
  computed:{
     
    
  
  },
  components:{
    
  }
}
</script>