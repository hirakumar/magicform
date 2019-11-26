import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	 state: { 
     count:100,
     configEle : 0,
     activeEno :null,
      editMode : false,
  	  elements:[
        /*
      {eno:64, ele:'container', order:2},
      {eno:65, parent:64, ele:'row', order:1},
      {eno:66, parent:65, ele:'col', cols:12, order:1},     
      {eno:225, parent:66, ele:'div', text:'<b>Hira Kumar Maharjan</b>', order:2},
      {eno:68, parent:66, ele:'h', size:2, text:'Sample txt', order:1},
      {eno:52, ele :'container', order:1},
      {eno:53, ele :'row', parent:52,order:1},
      {eno:54, ele :'col', cols:6, parent:53, order:1},
      {eno:88, ele :'h', parent:54, size:1, order:1, id:'pagetitle', class:'pagetitle1', text:'Customer Comments'},
      {eno:55, ele : 'form-group', parent : 54, order:2, label:'Name', label_cols:3, before:'Before', after:'<b>After</b>'},
      {eno:56, ele : 'form-input', parent : 55, order:1},
      {eno:57, ele : 'form-group', parent : 54, label:'Email', label_cols:3, order:3},
      {eno:58, ele : 'form-input', parent : 57, type:'email', order:1},
      {eno:59, ele : 'form-group', parent : 54, label:'Subject',label_cols:3, order:4 },
      {eno:60, ele : 'form-select', parent : 59, 
        options:[
          {text : 'Customer Support', value : 'Customer Support'},
          {text : 'New Registration', value : 'New Registration'},
          {text : 'Claim Referer ', value : 'Claim Referer'},
          {text : 'Technical Support ', value : 'Technical Support'}
        ],
        order:1
       },
       {eno:61, ele : 'form-group', parent : 54, order:5 },
      {eno : 62, ele : 'form-checkbox', parent : 61, order:1, text :'I accept the terms and condition'},
      {eno : 63, ele : 'button', parent : 54, order:6, text :'Submit', type:'submit'},
      {eno:69, parent:66, ele:'h', size:3, text:'Sample txt 2', order:3},
*/
  	]
  },
  mutations: { 
    changeEle (state, payload) {
      state.configEle=payload;
    },
    setActiveEno(state, payload) {
      state.activeEno=payload;
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
    removeObj(state){
      let obj = state.elements.find(item=>item.eno===state.activeEno);
      let objIndex = state.elements.indexOf(obj);

      state.elements.splice(objIndex,1);
      state.activeEno=null;
      state.editMode=false;
    },
    editObj(state,payload){
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
      
       
    },
    setEditMode (state,payload){
     state.editMode=payload;
    },
    setActiveEno (state,payload){
      state.activeEno=payload;
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
    
  },
  actions: {  },
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
    getActiveObj : state =>{
      return state.elements.find(item=>item.eno===state.activeEno)
    },
    getConfigEle: state => {     
      return state.configEle;
    },
    isConfigEle: state => {     
      return (state.configEle >0 ? true : false);
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
      let list = state.elements.filter(item => item.parent===obj.eno);
      let final = list.sort((a,b) => { return a.order - b.order} );
      return final;
    },
    hasChild: (state) => (eno) => {
      let obj = state.elements.find(item => item.eno === eno);      
      let list = state.elements.filter(item => item.parent == obj.eno);
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
