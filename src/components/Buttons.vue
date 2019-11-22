<template>
 
    <b-button
        :id = "data.id"
        :href = "data.href"
        :rel = "data.rel"
        :target = "data.target"
        :active = "data.active"
        :disabled = "data.disabled"
        :to = "data.to"
        :append = "data.append"
        :replace = "data.replace"
        :event = "data.event"
        :active-class = "data.active_class"
        :exact = "data.exact"
        :exact-active-class = "data.exact_active_class"
        :router-tag = "data.router_tag"
        :no-prefetch = "data.no_prefetch"
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
    
  }
}
</script>