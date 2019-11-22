<template>
 <app-formgroups v-if="isFormGroup" :data="data" />
</template>
<script>
import FormGroups from '@/components/FormGroups.vue'
export default {
 name: 'ParentElement',
  props:{
    data:Object
  },
  computed:{
    isFormGroup :{
      get(){
        return (this.data.ele=='form-group' ? true : false);
      }
    }
  },
  components:{
    'app-formgroups' : FormGroups
  }
}
</script>