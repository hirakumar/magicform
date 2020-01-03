const getters = {

    hasElements: state =>{
        return (state.elements.length>0 ? true : false);
      },
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
        if(state.editMode != undefined){
          return state.editMode;
        }      
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
        //return state.elements.find(item=>item.eno===state.configEle);
      },
      getConfigEleCols : state =>{
       // let obj= state.elements.find(item=>item.eno===state.configEle);
       
        //return obj.cols;
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
        try{
          if(state.activeEno != null){
            let activeObj = state.elements.find(item=>item.eno===state.activeEno);
            let list = state.elements.filter(item=>item.parent===activeObj.eno);
            
            if(list.length>0){
              let sortedList = list.sort((a,b)=> { return a.order - b.order} );
              return sortedList[sortedList.length-1];
            }else{
              return false;
            }
          }else{
            return false;
          }
        }catch(error){
          console.log("Error on getLastChild :", error);
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
      getDeviceOptions: state =>{
         return state.deviceOptions;
      },
      getSelectedDevice : state =>{
         return state.selectedDevice;
      },
      getDeviceObj : state =>{
        return state.deviceOptions.find(item=>item.value=== state.selectedDevice);
      },
      isResponsiveMode : state =>{
        
        return state.responsiveMode;
      }


}

export default (getters)