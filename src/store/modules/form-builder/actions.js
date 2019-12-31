

const actions = {

    setSelectedDevice(context,payload){
        try{
            context.commit('setSelectedDevice',payload)
        }catch(error){
            console.log("Error on action setSelectedDevice :", error);
        }
      },
      setOrder(context,payload){
        try{
          // console.log(JSON.stringify(payload));
        let activeObj = context.getters.getObj(payload.activeEno);
        let eno = activeObj.eno;
      
        let allParentChilds = context.getters.getChilds(activeObj.parent);
        var allChidsWithOrder = allParentChilds.sort((a,b)=> { return a.order - b.order} );
       
        
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
        try{
          let eno = context.getters.getActiveEno;
          let index = context.getters.getIndexByEno(eno);
          context.commit('addSelectBoxOption',{index:index,options:payload});
        }catch(error){
          console.log("Error on addOption :" + error);
        }
        
      },
      removeSelectOption(context,payload){
        try{
          let eno = context.getters.getActiveEno;
          let index = context.getters.getIndexByEno(eno);
          context.commit('removeSelectBoxOption',{objIndex:index,optionIndex:payload.index})
        }catch(error){
          console.log("Error on removeSelectOption :" + error);
        }
       
      },
      createEle(context,payload){
        try{
        
        let activeObj = context.getters.getActiveObj;
        
        if(activeObj == undefined){
          activeObj={eno:null};
        }
        
        var lasteno = context.getters.getLastEno;  
       
        if(lasteno==null){
          context.commit('setLastEno',{eno:0});
        }
        
        lasteno = context.state.lasteno; 
      
        
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
          if(activeObj.ele=="row"){
            parentID=activeObj.eno;
          }else if(activeObj.ele=="col"){
            parentID=activeObj.parent;
          }
          obj = {eno:lasteno+1, parent:parentID, ele:'col', order:order}
          context.commit('addElement',obj);
          break;
  
          case 'row':
          let parentID;
          if(activeObj.ele=="container"){
            parentID=activeObj.eno;
          }else if(activeObj.ele=="row"){
            parentID=activeObj.parent;
          }
          let rowObj = {eno:lasteno+1, parent:parentID, ele:'row', order:order}
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
        
      }catch(error){
        console.log("Error on createEle :" + error);
      }
        
        
      },
      createButtonGroup(context,payload){
        try{
        let activeObj = context.getters.getActiveObj;
        let lasteno = context.getters.getLastEno;  
        
        let buttonGroupObj = {eno : lasteno+1, ele:'button-group',  parent:activeObj.eno, before:'', after:'', vertical:false, size:'md',tag:'div','aria-role':'group'}
        context.commit('addElement',buttonGroupObj);
  
        let btnObj = {eno : lasteno+2, text:'Button', order:1, 'border-style':null, ele:'button', parent:lasteno+1, id : `btn${lasteno+1}`, name:`btn${lasteno+1}`, active : false, disabled : false, append: false, replace : false, 'active-class':'active', exact: false, 'exact-active-class': '', 'router-tag':'a', block:false,size:'md',variant:'secondary', type:'button', tag:'button',pill:false,squared:false}
        context.commit('addElement',btnObj);
        }catch(error){
          console.log("Error on createEle :" + error);
        }
      },
      createFormGroup(context,payload){
        try{
        let activeObj = context.getters.getActiveObj;
        let lasteno = context.getters.getLastEno;  
        if(lasteno==null){
          
          let list =context.getters.getRawElements.sort((a,b)=> { return a.eno - b.eno} );
          let lasteno= list[list.length-1].eno;
          context.commit('setLastEno',{eno:lasteno});
        }
        lasteno = context.getters.getLastEno; 
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
       
        }catch(error){
          console.log("Error on createFormGroup :" + error);
        }
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
        //context.commit('setEditMode',false);
            
        
         }catch(err){
          console.log("Error on removeObj:", err);
        }
      },
      setResponsiveMode(context,payload){
        try{
          
          if(context.getters.isResponsiveMode){
            context.commit('setResponsiveMode',false);
          }else{
            context.commit('setResponsiveMode',true);
          }
          
        }catch(error){
          console.log("Error on action setResponsiveMode :", error)
        }
      }
}

export default (actions);
