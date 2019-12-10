<template>
 <app-formgroups v-if="isFormGroup" :data="data" />
 <app-buttongroup v-else-if="isButtonGroup" :data="data" />
</template>
<script>
import FormGroups from '@/components/FormGroups.vue'
import ButtonGroups from '@/components/ButtonGroups.vue'
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
    },
    isButtonGroup :{
      get(){
        return (this.data.ele=='button-group' ? true : false);
      }
    }
  },
  components:{
    'app-formgroups' : FormGroups,
    'app-buttongroup' : ButtonGroups
  }
}
</script>