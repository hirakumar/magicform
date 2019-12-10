<template>
    <div  @click="clickedEle">
    <b-button
        :id = "data.id"
        :class = "data.class"
        :name = "data.name"
        :href = "data.href"
        :rel = "data.rel"
        :target = "data.target"
        :active = "data.active"
        :disabled = "data.disabled"
        :to = "data.to"
        :append = "data.append"
        :replace = "data.replace"
        :event = "data.event"
        :active-class = "data['active-class']"
        :exact = "data.exact"
        :exact-active-class = "data['exact-active-class']"
        :router-tag = "data['router-tag']"
        :no-prefetch = "data['no-prefetch']"
        :block = "data.block"
        :size = "data.size"
        :variant = "data.variant"
        :type = "data.type"
        :tag = "data.tag"
        :pill = "data.pill"
        :squared = "data.squared"
        :pressed = "data.pressed"
        :data-eno = "data.eno"
       
     >{{data.text}}</b-button>
     </div>
     
  

</template>
<script>

export default {
 name: 'Button',
  props:{
  	data:Object
  },
  
  computed:{
     
    
  
  },
  components:{
    
  },
  methods:{
     clickedEle:function(event){
       this.$store.commit("setActiveEno",this.data.eno);
       this.$store.commit("setEditMode",true);
       event.preventDefault();
       event.stopPropagation();
    }
  }
  
}
</script>