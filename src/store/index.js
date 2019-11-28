import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	 state: {
     count:100,
     configEle : 0,
     activeEno : null,
      editMode : false,
      lasteno: null,
  	  elements:[]
  },
  mutations: { 
    changeEle (state, payload) {
      state.configEle=payload;
    },
   /*
    setCol  (state,payload) {
      
      let obj = state.elements.find(item=>item.eno===state.configEle);
      let index = state.elements.indexOf(obj);
      
      if(obj.ele=='col'){
        let cols = obj.cols;
        cols+=payload;
        state.elements[index].cols=cols;
      }
    },
    */
    removeEle(state,payload){
       state.elements.splice(payload.index,1);
    },
    

    editObj(state,payload){
      try{
      
      let obj = state.elements.find(item=>item.eno===state.activeEno);
      let objIndex = state.elements.indexOf(obj);     
      
        Object.entries(payload).map((item,index)=>{
          if( !state.elements[objIndex].hasOwnProperty(item[0])){   
            console.log("Vue SEt");     
            Vue.set(state.elements[objIndex],item[0],item[1]);
          }else{
            console.log("Yppsd SEt"); 
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

/* Adding Container At Last */
if(payload.action == "addAtLast") {
  if(state.elements.length==0){
    
    state.elements.push({ eno:1, ele:'container', order:1,  })
    state.elements.push({eno:2, parent:1, ele:'row', order:1})
    state.elements.push({eno:3, parent:2, ele:'col', cols:12, order:1})
    state.lasteno=3;
  }else{
 
    let lasteno=state.lasteno;  
    lasteno++;
    state.elements.push({ eno:lasteno, ele:'container', order:lastContainer.order+1 })
    lasteno++;
    state.elements.push({eno:lasteno, parent:lasteno-1, ele:'row', order:1})
    lasteno++;
    state.elements.push({eno:lasteno, parent:lasteno-1, ele:'col', cols:12, order:1})
    state.lasteno=lasteno;

  }
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
 
  let lasteno = state.lasteno;
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
            console.log(JSON.stringify(sortedList));

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
    }
    
  },
  actions: { 
    createFormGroup(context,payload){
      console.log('createForm Group');
      console.log('payload',payload);
      let activeObj = context.getters.getActiveObj;
      let lasteno = context.getters.getLastEno;
      console.log("Last Eno :", lasteno);
      
      console.log("Last Eno :", lasteno);
      let formgroupObj = {eno : lasteno+1, ele:'form-group', label:'Enter your name', description:'Please enter your full name', parent:activeObj.eno}
      context.commit('addElement',formgroupObj);

      let inputObj;
      switch(payload.formType){
        case 'input':
        inputObj = {eno:lasteno+2, ele:'form-input', type:'text', parent:lasteno+1};
        break;

        case 'select':
        inputObj = {eno:lasteno+2, ele:'form-select',  parent:lasteno+1};
        break;

        case 'textarea':
        inputObj = {eno:lasteno+2, ele:'form-textarea',  parent:lasteno+1};
        break;

        case 'checkbox':
        inputObj = {eno:lasteno+2, ele:'form-checkbox',  parent:lasteno+1};
        break;

        case 'radio':
        inputObj = {eno:lasteno+2, ele:'form-radio',  parent:lasteno+1};
        break;

        case 'file':
        inputObj = {eno:lasteno+2, ele:'form-file', parent:lasteno+1};
        break;

        case 'button':
        inputObj = {eno:lasteno+2, ele:'button', parent:lasteno+1};
        break;
      }
     
      context.commit('addElement',inputObj);


    },
removeObj(context){

      try{

       
      let obj = context.getters.getActiveObj
     
      var removeEle=[];

      removeEle.push(context.getters.getActiveEno);

      // Recursive function to detect it's child and collect eno on remoEle variable
      var findChilds= function searchChild(parentID){
                     
        let childs = context.getters.getChilds(parentID);
        if(childs.length>0){
          childs.map((item)=> { 
            removeEle.push(item.eno);
            findChilds(item.eno);
          });
        }        
      }

      findChilds(context.getters.getActiveEno);
      
      // Removing one by one
      removeEle.map((eno)=>{
          
          let obj = context.getters.getObj(eno);
          let index = context.getters.getIndexByEno(eno);

          // Removing specific obj from it's index
          context.commit('removeEle',{index:index});         

          // Adjuest Last eno while deleting object . If 
          if(context.getters.getLastEno>=obj.eno && context.getters.getTotalElements>0){
            let lastIndex = context.getters.getTotalElements-1;
            let obj = context.getters.getObjByIndex(lastIndex);
            context.commit('setLastEno',{eno:obj});
          }
          // If we do not have elements then set lasteno is null
          if(context.getters.getTotalElements==0){
            context.commit('setLastEno',{eno:null});
          }

      })     

      // Setting active and edit mode false
      context.commit('setActiveEno',null);
      context.commit('setEditMode',false);
          
      
       }catch(err){
        console.log("Error on removeObj:", err);
      }
    },
   },
  getters: {
    hasContainer: state =>{
      return (state.elements.length>0 ? true : false);
    },
    isEditMode : state =>{
      return state.editMode;
    },
    getActiveEno : state => {     
      return state.activeEno;
    },
    getTotalElements : state =>{
      return state.elements.length;
    },
    hasProperty: (state) => (obj)=>{
      if(obj.ele.hasOwnProperty(obj.propery)){
        return true;
      }else{
        return false;
      }
    },
    getObjByIndex : (state) => (index) => {
      return state.elements[index];
    },
    getActiveObj : state =>{
      return state.elements.find(item=>item.eno===state.activeEno)
    },
    getConfigEle: state => {     
      return state.configEle;
    },
    getLastEno : state =>{
      console.log("getLastEno" , state.lasteno);
      if(state.lasteno!=undefined){
        return state.lasteno;
      }
      
    },
    isConfigEle: state => {     
      return (state.configEle >0 ? true : false);
    },
    getIndexByEno: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);
      return state.elements.indexOf(obj);
    },
    getConfigEleObj : state => {     
      return state.elements.find(item=>item.eno===state.configEle);
    },
    getConfigEleCols : state =>{
      let obj= state.elements.find(item=>item.eno===state.configEle);
     
      return obj.cols;
    },
  	getContainers: state => {
      let containers = state.elements.filter(item=>item.ele==='container');
      return containers.sort((a,b)=> { return a.order - b.order} );
    },
    getObj: (state) => (eno) => {
      return state.elements.find(item=>item.eno===eno);
    },
    getRows: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      return list.sort((a,b)=> { return a.order - b.order} );
    },
    getCols: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      return list.sort((a,b)=> { return a.order - b.order} );

    },
    getChilds: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);
      if(obj != undefined){
        let list = state.elements.filter(item => item.parent===obj.eno);
        let final = list.sort((a,b) => { return a.order - b.order} );
         return final;
      } 
    },
    hasChild: (state) => (eno) => {
      console.log(eno);
      let obj = state.elements.find(item => item.eno === eno);
      console.log(JSON.stringify(obj));      
      let list = state.elements.filter(item => item.parent === obj.eno);
      console.log(obj.ele +":" + list.length + ":" + obj.eno);
      return (list.length>0 ? true : false);
    },
    getFormGroups: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list= state.elements.filter(item=>item.parent===obj.eno);
      return list.sort((a,b)=> { return a.order - b.order} );
 
    },
    getElements: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      return list.sort((a,b)=> { return a.order - b.order} );
    },
    getInputs: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      let allList= list.filter(item=>item.ele=='form-input');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
    getDivs: (state) => (eno) => {
      
      let obj = state.elements.find(item => item.eno === eno);         
      let list = state.elements.filter(item=>item.parent===obj.eno);
      let allList= list.filter(item=>item.ele=='div');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
    getformCheckboxGroup: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      let allList= list.filter(item=>item.ele=='form-checkbox-group');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
    getformRadioGroup: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      let allList = list.filter(item=>item.ele=='form-radio-group');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
    getformFile: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      let allList= list.filter(item=>item.ele=='form-file');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
    getformSelect: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      let allList= list.filter(item=>item.ele=='form-select');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
    getformTextarea: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      let allList = list.filter(item=>item.ele=='form-textarea');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
    getbuttons: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);     
      return list.filter(item=>item.ele=='button');
    },
    getformcheckboxs: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);     
      let allList = list.filter(item=>item.ele=='form-checkbox');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
    get_h: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);     
      let allList =  list.filter(item=>item.ele=='h');
      return allList.sort((a,b)=> { return a.order - b.order} );
    },
   
  }
})
