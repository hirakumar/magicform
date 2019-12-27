import Vue from 'vue'
import Vuex from 'vuex'
export const Mutation = { 
    changeEle (state, payload) {
      state.configEle=payload;
    },
   
    setCol  (state,payload) {
      
      let obj = state.elements.find(item=>item.eno===state.configEle);
      let index = state.elements.indexOf(obj);
      
      if(obj.ele=='col'){
        let cols = obj.cols;
        cols+=payload;
        state.elements[index].cols=cols;
      }
    },
 
    removeEle(state,payload){
       state.elements.splice(payload.index,1);
    },
    
    editOrderByEno(state,payload){
      try{
        if(payload.eno !=undefined){
          let obj = state.elements.find(item=>item.eno===payload.eno);
          obj.order=payload.order;
        }
      }catch(error){
        console.log("Error on editObjByEno :", error);
      }
    },
    /* Input {order:3} */
    editObj(state,payload){
      try{
      
      let obj = state.elements.find(item=>item.eno===state.activeEno);
      let objIndex = state.elements.indexOf(obj);     
      
        Object.entries(payload).map((item,index)=>{
          if( !state.elements[objIndex].hasOwnProperty(item[0])){   
               
            Vue.set(state.elements[objIndex],item[0],item[1]);
          }else{
           
           state.elements[objIndex][item[0]]=item[1];
          }
        })
       }catch(err){
        console.log("Error on editObj :", err);
      }
       
    },
   
    addContainer (state,payload){
      try{
// Assigned Variable
let obj,lastObj,lastContainer,allEleOrder,allContainer;
     
// Active Object 
if(state.activeEno!=null){
  obj =  state.elements.find(item=>item.eno===state.activeEno);
}

// Last Object
if(state.lasteno != null){
  // Last Object
  lastObj = state.elements.find(item=>item.eno===state.lasteno);
}

if(state.elements.length>0){
  // All Container 
  allContainer = state.elements.filter(item=>item.ele==='container');
  // Sort All container ascending by order
  allEleOrder = allContainer.sort((a,b)=>{ return a.order - b.order });
  // Last Container
  lastContainer = allEleOrder[allEleOrder.length-1];
}



/* Add Container Before Targeted Container */
if(payload.action=="addBefore"){
 
  let lasteno = state.lasteno;
  lasteno++;
  state.elements.push({ eno:lasteno, ele:'container', order:obj.order })
  lasteno++;
  state.elements.push({eno:lasteno, parent:lasteno-1, ele:'row', order:1})
  lasteno++;
  state.elements.push({eno:lasteno, parent:lasteno-1, ele:'col', cols:12, order:1})
  state.lasteno = lasteno;

   // List asscenig order
   allEleOrder.forEach(function(item){
    if(item.order>=obj.order){            
      item.order+=1;
    }
  })
  
}

/* Add Container After Targeted Container */
if(payload.action=="addAfter"){
 
   let lasteno = context.getters.getLastEno;  
      if(lasteno==null){
        // context.commit('setLastEno',{eno:obj.eno});

        let list =context.getters.getRawElements.sort((a,b)=> { return a.eno - b.eno} );
        let lasteno= list[list.length-1].eno;
        context.commit('setLastEno',{eno:lasteno});
      }
      lasteno = context.getters.getLastEno; 
      /*
  lasteno++;
  state.elements.push({ eno:lasteno, ele:'container', order:obj.order+1 })
  lasteno++;
  state.elements.push({eno:lasteno, parent:lasteno-1, ele:'row', order:1})
  lasteno++;
  state.elements.push({eno:lasteno, parent:lasteno-1, ele:'col', cols:12, order:1})
  state.lasteno = lasteno;

  allEleOrder.forEach(function(item){
    if(item.order>obj.order){
      item.order+=1;
    }
  })      
  */                                                                                                                             

}
      }catch(err){
        console.log("Error on addContainer : ", err)
      
      
    }
      
    },
    addEle(state,payload){
      try{
          // Targeted Object
          let obj = state.elements.find(item=>item.eno===payload.eno);
          // Targeted Object's parent eno
          let parent = obj.parent;
          // All element whose parent id is equal to targeted's parent eno
          let allEle = state.elements.filter(item=>item.parent===obj.parent);
          // Sorting ascending order
          let sortedList = allEle.sort((a,b)=> { return a.order - b.order} );

          
          if(payload.action=="addBefore"){
            // Creating new Object to add before targeted element
            let newObj = {eno:state.lasteno+1, ele:obj.ele,order:obj.order,parent:obj.parent};
            state.elements.push(newObj);
            state.lasteno=newObj.eno;     
            
            // increase order greater or equal to
          sortedList.map((item)=>{
            if(item.order>=obj.order){
              item.order+=1;
            }
          })

          }

          if(payload.action=="addAfter"){
            // Creating new Object to add before targeted element

            // increase order greater or equal to     

            let newObj = {eno:state.lasteno+1, ele:obj.ele,order:obj.order+1,parent:obj.parent};
            state.elements.push(newObj);
            state.lasteno=newObj.eno; 
           

            sortedList.map((item)=>{
              if(item.order>obj.order){
                item.order+=1;
              }
            })            
                 
          } 
      }catch(err){
        console.log("Error on addEle : ", err)
      }
    },
    setLastEno(state,payload){
      state.lasteno=payload.eno;
    },
    setActiveEno(state,payload){
      state.activeEno=payload;
    },
    setEditMode(state,payload){
      state.editMode=payload;  
    },
    addElement(state,payload){
      state.elements.push(payload);
      state.lasteno=payload.eno;
      if(state.activeEno == null){
          state.activeEno=1;
      }
      if(state.editMode == false){
        state.editMode=true;
      }
    },
    addSelectBoxOption(state,payload){
      
      let index = payload.index;
      state.elements[index].options
      if(state.elements[index].hasOwnProperty('options')){
        var obj = {};
        obj.value = payload.options.value;
        obj.text = payload.options.text;

        let eles = state.elements[index].options.filter(item=>item.text===obj.text);
        if(eles.length==0){
          state.elements[index].options.push({text:payload.options.text,value:payload.options.value});
        }else{
          alert("Sorry duplicate data");
        }
        
      }else{
        //state.elements[index].options=[];
        Vue.set(state.elements[index],'options',[])
       
        var obj = {};
        obj.value = payload.options.value;
        obj.text = payload.options.text;
       state.elements[index].options.push(obj);
       //Vue.set(state.elements[index],'options',obj)
      }
    },
    removeSelectBoxOption(state,payload){
      state.elements[payload.objIndex].options.splice(payload.optionIndex,1);
    },
    setSelectedDevice(state,payload){
      state.selectedDevice=payload;
    },
    setResponsiveMode(state,payload){
      state.responsiveMode=payload;
    }
    
  }