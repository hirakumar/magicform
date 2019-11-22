<template>
        <div id="config" >
          <div class="info">{{shadowBox}}
            <Br />
            Left Style : {{leftStyle}}
          </div>
          <div class="container">
            <div class="row">
            <div class="col">1</div>
            <div class="col">2</div>
            <div class="col">3</div>
            <div class="col">4</div>
            <div class="col">5</div>
            <div class="col">6</div>
            <div class="col">7</div>
            <div class="col">8</div>
            <div class="col">9</div>
            <div class="col">10</div>
            <div class="col">11</div>
            <div class="col">12</div>
          </div>
        

        <div class="boxTop box" :style="{top:box.y+'px'}"> </div>
        <div class="boxBottom box" :style="{top:box.y+box.height+'px'}"> </div>
        <div class="boxRight box" :style="{left:box.x+box.width+'px'}"> </div>
        <div class="boxLeft box" :style="{left:box.x+'px'}"> </div>
        <div class="expandRight" :style="{left:shadowBox.originX+'px',top:box.y+'px',height:box.height+'px', width:shadowBox.width+'px' }"></div>
        <template v-for="col in configCols">
            <div class="colline" :style="{left:col.start+'px'}"></div>
            <div class="colline" :style="{left:col.end+'px'}"></div>
        </template>
          <div class="containerLeft" :style="{left:container.start+'px'}"></div>
          <div class="containerRight" :style="{left:container.end+'px'}"></div>
        <div class="block" >
            <div class="dragger"  id="rightArrow" data-item="dragItem"  :style="{
        
        display      : 'block', 
        position     : 'absolute',
        height       : heightStyle+'px', 
        top          : topStyle+'px', 
        left         : shadowBox.x+'px',
        width        : '10px',
        height       : '10px'
        
           }" >
              </div>
        

           </div>
      </div>
      </div>
</template>
<script>
export default {
  name :'Builder',
 created: function(){
    window.addEventListener('mousedown',this.mouseDownEvent);
    window.addEventListener('mouseup',this.mouseUpEvent);
 },
 data:function(){
   return {
    configCols:[

    ],    
    initPos:{
      x:0,
      y:0
    },
    mousePos:{
      x:0,
      y:0
    },
    difference : {
      x:0,
      y:0
    },
    container:{
      start:0
    },
    shadowBox:{
      width:0,
      height:0,
      diff:0,
      x:0,
      y:0,
      originX:0,
      tik:0
    },
    ifContainer : false
    
   }
 },
computed:{
    eleStr:{
      get(){
       
        return this.$store.getters.getConfigEle;
      }
    },
    
   countContainer :{
      get(){
        setTimeout(()=>{
            console.log("ads",document.querySelectorAll('.container').length);
             return  document.querySelectorAll('.container').length;
         
        },1000)
       
      }
   },

   containerPos:{
     get(){
       if(isContainer){
         let container = document.querySelector('.container');
         return {start:container.clientX,end:container.clientWidth+container.clientX}
       }
     },
     set(val){
       return val;
     }
   },
    ele :{
      get(){
        if(this.eleStr != null) {
          return document.querySelector("*[data-eno='"+this.eleStr+"']");
        }else{
          return false;
        }
          
      }
    },
    box:{
      get(){
        console.log("Box :" , this.ele);
        if(this.ele !=null){
             return {
            x:this.ele.offsetLeft,
            y:this.ele.offsetTop,
            width:this.ele.clientWidth,
            height:this.ele.clientHeight
          }
        }else{
          return false
        }    
       
      }
    },
    leftStyle :{
      get(){
        if(this.ele!=undefined){
this.shadowBox.x=this.ele.clientWidth+this.ele.offsetLeft;
        }
            
           return (this.ele!=undefined ? this.ele.clientWidth+this.ele.offsetLeft : false)
        
      },set(val){
        return val;
      }
    },
     heightStyle:{
      get(){
        let ele= document.querySelector("*[data-eno='"+this.eleStr+"']");
        if(ele != undefined) {
          
          return ele.clientHeight;
          }else{
        
          return false;
          }
      }
    },
    topStyle:{
      get(){
        let ele= document.querySelector("*[data-eno='"+this.eleStr+"']");
        if(ele != undefined) {
          
          return ele.offsetTop+(ele.clientHeight/2);
          }else{
        
          return false;
          }
      }
    },

  },
 
  methods:{
    setCol(val){
      console.log(this.eleStr);
      this.$store.commit('setCol',val);
      
    },
    changeLeftStyle(val){
      console.log("changeleft",val)
      this.leftStyle=val;
    },
    dragme(event){
        console.log("Drag me")
    },
    mouseDownEvent(event){
        console.log("Mouse Down", event);
        if(event.target.dataset.item=="dragItem"){
            this.shadowBox.x=this.leftStyle;
            this.shadowBox.originX=this.leftStyle;
            window.addEventListener('mousemove',this.mouseMoveEvent);
         
        }
        
    },
    mouseUpEvent(event){
        console.log("Mouse Up", event);

          window.removeEventListener('mousemove',this.mouseMoveEvent);      
         

    },
    mouseMoveEvent(event){
          this.shadowBox.tik=event.clientX-this.shadowBox.x;
          this.shadowBox.x=event.clientX;
          console.log("Mouse Move", event.layerX);
          this.shadowBox.diff = event.clientX-this.shadowBox.originX;
          this.shadowBox.width= this.shadowBox.diff;
          if(this.shadowBox.width<0){
            this.shadowBox.width*=-1;
          }
         s
          console.log(event)

         
        

    }
  },
  mounted(){
    
      let cont = document.querySelector('#config .container');
      console.log(cont);
      this.container.start=cont.offsetLeft;
      this.container.end=cont.offsetLeft+cont.clientWidth;
      
      let cols = cont.querySelectorAll('.col');
      console.log("Total Cols :" + cols.length);

      let _this = this;
      cols.forEach(function(item){
       
        let obj = {
          start : item.offsetLeft,
          end : item.offsetLeft+item.clientWidth-15
        }
        _this.configCols.push(obj);
      })
      
  var that = this;
   setInterval(()=>{
     
     that.leftStyle=300;
   },3000)

    
  }

}
</script>
<style scoped>
#config .block{

}
.rightArrow{font-size:15px; width:16px}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}
.containerLeft,.containerRight{
  width:1px;
  display:block;
  height:100%;
  border-left:dashed 1px red;
  position:fixed;
 
  top:0px;
}
.colline{
   width:1px;
  display:block;
  height:100%;
  border-right:dashed 1px rgba(255,0,0,1);
  border-left:dashed 1px rgba(255,0,0,1);
  width:15px;
  position:fixed;
  
  top:0px;
}
.boxTop,.boxBottom{
  position:fixed;
  left:0px;
  width:100%;
  border-bottom:solid 1px red;
  display:block;
}

.boxLeft,.boxRight{
  position:fixed;
   height:100%;
  width:1px;
  top:0px;
  border-left:solid 1px red;
  display:block;
}
.dragger{display:block; width:10px; height:10px; background:red; border-radius:10px}
.expandRight{
  display:block;
  width:0px;
  background:blue;
  position:fixed;
}
.info{position:fixed; width:100%; top:0px; left:0px; font-size:16px}
</style>