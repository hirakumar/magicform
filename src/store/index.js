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
      // elements:[ { "eno": 1, "order": 1, "ele": "form", "inline": false, "novalidate": true, "validated": true, "parent": null }, { "eno": 2, "ele": "form-group", "label-for": "label2", "label": "Name", "description": "Sample short description", "parent": 1, "order": 1, "invalid-feedback": "", "valid-feedback": "" }, { "eno": 3, "ele": "form-input", "type": "text", "parent": 2, "id": "label2", "required": true }, { "eno": 4, "order": "4", "text": "Submit", "border-style": null, "ele": "button", "parent": 1, "id": "label4", "name": "label4", "active": false, "disabled": false, "append": false, "replace": false, "active-class": "active", "exact": false, "exact-active-class": "", "router-tag": "a", "block": false, "size": "md", "variant": "secondary", "type": "submit", "tag": "button", "pill": false, "squared": false }, { "eno": 5, "ele": "form-group", "label-for": "label5", "label": "Country", "description": "Sample short description", "parent": 1, "order": 3, "invalid-feedback": "", "valid-feedback": "", "state": false }, { "eno": 6, "ele": "form-select", "parent": 5, "id": "label5", "options": [ { "text": "Nepal", "value": "nepal" }, { "text": "Bhutan", "value": "bhutan" }, { "text": "Srilanka", "value": "srilanka" } ], "disabled": false, "required": true, "autofocus": false, "size": "md", "plain": false, "value": "", "multiple": false, "select-size": 0, "aria-invalid": false } ] 
      elements:[]
  },
  mutations: { 
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
    }
    
  },
  /* *********************************************************** 
     *                                                         *
     *                         ACTION                          *
     *                                                         *
     *********************************************************** 
  */
  actions: { 
    setOrder(context,payload){
      try{
        // console.log(JSON.stringify(payload));
      let activeObj = context.getters.getObj(payload.activeEno);
      let eno = activeObj.eno;
    
      let allParentChilds = context.getters.getChilds(activeObj.parent);
      let allChidsWithOrder = allParentChilds.sort((a,b)=> { return a.order - b.order} );
     
      
      let arry=[];
      arry.push(activeObj.order);

      let fromEle = allChidsWithOrder.find(item=>item.eno===eno);
     
      let fromEleIndex = allChidsWithOrder.indexOf(fromEle);
      
      if(payload.action=="up"){
        let toEle = allChidsWithOrder[fromEleIndex-1];
        arry.push(parseInt(toEle.order));        
        context.commit('editOrderByEno',{eno:eno,order:arry[1]});
        context.commit('editOrderByEno',{eno:toEle.eno,order:arry[0]});
      }

      if(payload.action=="down"){
        let toEle = allChidsWithOrder[fromEleIndex+1];
        arry.push(parseInt(toEle.order));        
        context.commit('editOrderByEno',{eno:eno,order:arry[1]});
        context.commit('editOrderByEno',{eno:toEle.eno,order:arry[0]});
      }
     
      
      }catch(err){
        console.log("Error on Action setOrder", err);
      }
      

    },
    addOption(context,payload){
      let eno = context.getters.getActiveEno;
      let index = context.getters.getIndexByEno(eno);
      context.commit('addSelectBoxOption',{index:index,options:payload});
    },
    removeSelectOption(context,payload){
      let eno = context.getters.getActiveEno;
      let index = context.getters.getIndexByEno(eno);
      context.commit('removeSelectBoxOption',{objIndex:index,optionIndex:payload.index})
    },
    createEle(context,payload){
      let activeObj = context.getters.getActiveObj;
      if(activeObj == undefined){
        activeObj={eno:null};
      }
      let lasteno = context.getters.getLastEno;
      if(lasteno == undefined){
        lasteno=0;
      }
      
      let obj;
      let order=1;
      
      // Find last child element and find order
      if(context.getters.getLastChild != false){
          order= parseInt(context.getters.getLastChild.order)+1;
      }
       
      switch(payload.ele){
        case 'form': 
      
        obj = {eno : lasteno+1, order:order,  ele:'form', inline:false, novalidate:false, validated:false};
        
        if(activeObj!=undefined){
          obj.parent=activeObj.eno
        }
       
        context.commit('addElement',obj);
        break;

        case 'button':
        obj = {eno : lasteno+1, order:order, text:'Button', 'border-style':null, ele:'button', parent:activeObj.eno, id : `label${lasteno+1}`, name:`label${lasteno+1}`, active : false, disabled : false, append: false, replace : false, 'active-class':'active', exact: false, 'exact-active-class': '', 'router-tag':'a', block:false,size:'md',variant:'secondary', type:'button', tag:'button',pill:false,squared:false}
        context.commit('addElement',obj);
        break;

        case 'col':
        obj = {eno:lasteno+1, parent:activeObj.eno, ele:'col', order:order}
        context.commit('addElement',obj);
        break;

        case 'row':
        let rowObj = {eno:lasteno+1, parent:activeObj.eno, ele:'row', order:order}
        context.commit('addElement',rowObj);

        obj = {eno:lasteno+2, parent:rowObj.eno, ele:'col', order:1}
        context.commit('addElement',obj);
        break;

        case 'div':
        obj = {eno : lasteno+1, parent:activeObj.eno, ele:'div', order:order, text:'<b>Sample Text</b>' }
        context.commit('addElement',obj);
        break;

        case 'container':
        let containerObj = {eno : lasteno+1, parent:activeObj.eno, ele:'container', order:order }
        context.commit('addElement',containerObj);

        let rowObj1 = {eno:lasteno+2, parent:containerObj.eno, ele:'row', order:1}
        context.commit('addElement',rowObj1);

        let colObj = {eno:lasteno+3, parent:rowObj1.eno, ele:'col', order:1}
        context.commit('addElement',colObj);
        break;
      }
      //context.commit('addElement',obj);
      
      
    },
    createButtonGroup(context,payload){
      let activeObj = context.getters.getActiveObj;
      let lasteno = context.getters.getLastEno;  
      
      let buttonGroupObj = {eno : lasteno+1, ele:'button-group',  parent:activeObj.eno, before:'', after:'', vertical:false, size:'md',tag:'div','aria-role':'group'}
      context.commit('addElement',buttonGroupObj);

      let btnObj = {eno : lasteno+2, text:'Button', order:1, 'border-style':null, ele:'button', parent:lasteno+1, id : `btn${lasteno+1}`, name:`btn${lasteno+1}`, active : false, disabled : false, append: false, replace : false, 'active-class':'active', exact: false, 'exact-active-class': '', 'router-tag':'a', block:false,size:'md',variant:'secondary', type:'button', tag:'button',pill:false,squared:false}
      context.commit('addElement',btnObj);
    },
    createFormGroup(context,payload){
    
      let activeObj = context.getters.getActiveObj;
      let lasteno = context.getters.getLastEno;  
      let order=1;      
      // Find last child element and find order
      if(context.getters.getLastChild != false){
          order= parseInt(context.getters.getLastChild.order)+1;
      }
      
      let formgroupObj = {eno : lasteno+1, ele:'form-group', 'label-for' :`label${lasteno+1}`, label:'Sample Label Text', description:'Sample short description', parent:activeObj.eno, order:order,'invalid-feedback':'','valid-feedback':'', state:false}
      context.commit('addElement',formgroupObj);

      let inputObj;
     
      switch(payload.formType){
        case 'input':
        inputObj = {eno:lasteno+2, order:order, ele:'form-input', type:'text', parent:lasteno+1, id : `label${lasteno+1}`};
        break;

        case 'form-select':
        inputObj = {eno:lasteno+2, ele:'form-select',  parent:lasteno+1, id : `label${lasteno+1}`, options:[], disabled:false, required:false, autofocus: false, size:'md', plain : false, value:'', multiple:false, 'select-size':0,'aria-invalid':false, };
        break;

        case 'form-textarea':
        inputObj = {eno:lasteno+2, ele:'form-textarea', name:`label${lasteno+1}`,  parent:lasteno+1, id : `label${lasteno+1}`, required : false, size: 'md', readonly : false, plaintext : false, placeholder : '', rows : 2, 'max-rows' : 5, 'no-resize' : false, 'no-auto-shrink' :  false, value :''};
        break;

        case 'form-checkbox-group':
        inputObj = {eno:lasteno+2, ele:'form-checkbox-group', name:`label${lasteno+1}`, stacked:false, options:[{text:'Sample Checkbox Option1', value:'sample_checkbox_option1'}],  parent:lasteno+1, id : `label${lasteno+1}`, disabled:false, size:'sm', switches :false, buttons:false, 'button-variant':'primary', required:false, autofocus: false, size:'md',};
        break;

        case 'form-radio-group':
        inputObj = {eno:lasteno+2, ele:'form-radio-group', name:`label${lasteno+1}`, stacked:false, options:[{text:'Sample Radio Option1', value:'sample_checkbox_option1'}],  parent:lasteno+1, id : `label${lasteno+1}`, disabled:false, size:'md', switches :false, buttons:false, 'button-variant':'primary', required:false, autofocus: false, };
        break;

        case 'radio':
        inputObj = {eno:lasteno+2, ele:'form-radio',  parent:lasteno+1, id : `label${lasteno+1}`};
        break;

        case 'form-file':
        inputObj = {eno:lasteno+2, ele:'form-file', name:`label${lasteno+1}`, parent:lasteno+1, id : `label${lasteno+1}`,  disabled:false, size:'sm', required:false, autofocus: false, capture : false, multiple:false, accept:'', plain:false, 'browse-text':'Browse', directory:false,'no-traverse':false,'no-drop':false, 'placeholder' :'No File choosen', 'drop-placeholder' : 'Drop files here' };
        break;
        
      }
     
      context.commit('addElement',inputObj);
     

    },
removeObj(context,payload){

      try{

       
      let obj;
      if(payload!=undefined){
        obj=payload.data;
      }else{
        obj=context.getters.getActiveObj
      }
     
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
            context.commit('setLastEno',{eno:obj.eno});
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
    isFirstOrder: (state) => (eno) => {
     
      let obj= state.elements.find(item=>item.eno===eno);
      let list = state.elements.filter(item => item.parent===obj.parent);
      let orderList = list.sort((a,b)=> { return a.order - b.order} );
      
      return (obj.order == orderList[0].order ? true : false);
    },
    isLastOrder: (state) => (eno) => {
      
      let obj= state.elements.find(item=>item.eno===eno);
      let list = state.elements.filter(item => item.parent===obj.parent);
      let orderList = list.sort((a,b)=> { return a.order - b.order} );
      
      return (obj.order == orderList[orderList.length-1].order ? true : false);
    },
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
      if(state.lasteno>0 ){        
        return state.lasteno;
      }else if(state.lasteno==null){
        return null; 
      }else{        
        let list = state.elements.sort((a,b)=> { return a.eno - b.eno} );
        return list[list.length-1].eno;
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
    getMainParents: state => {
      let eles = state.elements.filter(item=> item.hasOwnProperty('parent')==false || item.parent==null );
      return eles.sort((a,b)=> { return a.order - b.order} );
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
      try{
        
        let obj = state.elements.find(item => item.eno === eno);
        let list = state.elements.filter(item => item.parent === obj.eno);
        return (list.length>0 ? true : false);
      }catch(err){
        console.log("Error on hasChild :", err);
      }
      
    },
    getFormGroups: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list= state.elements.filter(item=>item.parent===obj.eno);
      return list.sort((a,b)=> { return a.order - b.order} );
 
    },
    getLastChild: state => {
      let activeObj = state.elements.find(item=>item.eno===state.activeEno);
      let list = state.elements.filter(item=>item.parent===activeObj.eno);
      
      if(list.length>0){
        let sortedList = list.sort((a,b)=> { return a.order - b.order} );
        return sortedList[sortedList.length-1];
      }else{
        return false;
      }
      

    },
    getElements: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item=>item.parent===obj.eno);
      return list.sort((a,b)=> { return a.order - b.order} );
    },
    getRawElements: state =>{
      return state.elements;
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
