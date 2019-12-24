<template>
<div>
  <div class="container"><div class="row"><div class="col"><h2 class="pt-5">Generator</h2></div></div></div>
  <b-tabs content-class="mt-3" align="center">
    <b-tab title="Form" active>
      <div id="htmlform">
  <app-element :data="mainParent" v-for="mainParent in mainParents" :key="mainParent.eno" ></app-element>
  </div>
    </b-tab>
    <b-tab title="HTML"><b-textarea  id="rawHTML" :value="rawHTML" rows="14" size="sm"></b-textarea></b-tab>
   
  </b-tabs>
  
  
 
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
       
        /* Removig Unnecessary Attribute */
        let fieldsets = htmlform.querySelectorAll('fieldset');
        console.log(fieldsets.length)
        let i=0;
        while(i<fieldsets.length){
          fieldsets[i].removeAttribute('data-v-e81b82b8');
          fieldsets[i].removeAttribute('id');
          i++;
        }

        /* Removig Unnecessary Attribute */
        let legends = htmlform.querySelectorAll('legend');
        console.log(fieldsets.length)
        let k=0;
        while(k<legends.length){
            legends[k].removeAttribute('id');
          k++;
        }

        /* Removig uncecesary div */
        let divs = htmlform.querySelectorAll('*[data-v-e81b82b8]');
        console.log(divs.length)
        let j=0;
        while(j<divs.length){
          divs[j].removeAttribute('data-v-e81b82b8');          
          j++;
        }

        
        htmlform.innerHTML=htmlform.innerHTML.replace(new RegExp("<!---->","g"),"");
        this.rawHTML=htmlform.innerHTML;
        
      });
     },1000)
      
  }
  
}
</script>