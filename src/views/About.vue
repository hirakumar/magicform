<template>
  <div class="about">
    
    <InfoEle v-if="isConfigEle" />
    <EditEle v-if="isEditMode==true" :data="activeEno" />
    
    <b-form >
        <app-container :data="container" v-for="container in containers" :key="container.id" />
    </b-form>
    <app-creator></app-creator>
    
  </div>
</template>
<script>
import Container from '@/components/Container.vue';
import InfoEle from '@/components/InfoEle.vue';
import EditEle from '@/components/EditEle.vue';
import FormCreator from '@/components/FormCreator.vue';
export default {
  name: 'About',
  computed:{
  	containers:{
  		get(){
       return this.$store.getters.getContainers;
  		},
  		set(val){
  			return val;
  		}
    },
    isConfigEle:{
      get(){
        return this.$store.getters.isConfigEle;
      }
    },
    enoid :{
      get(){
        return this.$store.getters.getConfigEle;
      }
    },
    activeEno :{
      get(){
        
        return this.$store.getters.getActiveEno;
      }
    },
    activeObj:{
      get(){
        return this.$store.getters.activeObj;
      }
    },
    isEditMode:{
          get(){
              return this.$store.getters.isEditMode;
          }
      }
  },
  components:{
    'app-container' : Container,
    InfoEle,
    EditEle,
    'app-creator':FormCreator
  }
  
}
</script>
