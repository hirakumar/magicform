<template>
<div>
  <div id="htmlform">
  <app-element :data="mainParent" v-for="mainParent in mainParents" :key="mainParent.eno" ></app-element>
  </div>
  <b-textarea id="rawHTML" :value="rawHTML"></b-textarea>
 
</div>
</template>
<script>

  export default {
  name: 'About',
  data:function(){
    return {
     showTrue : true,
     rawHTML:''
    }
  },
  computed:{
     mainParents:{
        get(){
          return this.$store.getters.getMainParents;
        }
      }
  },
  components:{    
      'app-element' :  () => import('@/components/generator/Elements.vue'),
  },
  mounted:function(){
     setTimeout(()=>{
       this.$nextTick(() => {
        let htmlform = document.getElementById('htmlform');
        let rawHTML = document.getElementById('rawHTML');
        //console.log(rawHTML.value=htmlform.innerHTML);
        this.rawHTML=htmlform.firstChild.innerHTML;
        /*
        var replace =[
          '<!---->','data-v-e81b82b8=""','id="__BVID__[0-9]"']; 
         
         let i=0;
         while(i<2){
           this.rawHTML=this.rawHTML.replace(new RegExp(replace[i],"g"),"")
           i++;
         }
         console.log(this.rawHTML);
         */
         //console.log(/id="__BVID__[0-9]/g.(this.rawHTML));
       this.rawHTML= this.rawHTML.replace(/data-v-e81b82b8=""/,'');
        console.log(this.rawHTML);

      });
     },1000)
      
  }
  
}
</script>