const state = {
    count:100,
    configEle : 0,
    activeEno : null,
    responsiveMode:false,
     editMode : false,
     lasteno: null,
     // elements:[ { "eno": 1, "order": 1, "ele": "form", "inline": false, "novalidate": true, "validated": true, "parent": null }, { "eno": 2, "ele": "form-group", "label-for": "label2", "label": "Name", "description": "Sample short description", "parent": 1, "order": 1, "invalid-feedback": "", "valid-feedback": "" }, { "eno": 3, "ele": "form-input", "type": "text", "parent": 2, "id": "label2", "required": true }, { "eno": 4, "order": "4", "text": "Submit", "border-style": null, "ele": "button", "parent": 1, "id": "label4", "name": "label4", "active": false, "disabled": false, "append": false, "replace": false, "active-class": "active", "exact": false, "exact-active-class": "", "router-tag": "a", "block": false, "size": "md", "variant": "secondary", "type": "submit", "tag": "button", "pill": false, "squared": false }, { "eno": 5, "ele": "form-group", "label-for": "label5", "label": "Country", "description": "Sample short description", "parent": 1, "order": 3, "invalid-feedback": "", "valid-feedback": "", "state": false }, { "eno": 6, "ele": "form-select", "parent": 5, "id": "label5", "options": [ { "text": "Nepal", "value": "nepal" }, { "text": "Bhutan", "value": "bhutan" }, { "text": "Srilanka", "value": "srilanka" } ], "disabled": false, "required": true, "autofocus": false, "size": "md", "plain": false, "value": "", "multiple": false, "select-size": 0, "aria-invalid": false } ] 
    // elements:[ { "eno": 1, "order": 1, "ele": "form", "inline": false, "novalidate": false, "validated": false, "parent": null }, { "eno": 2, "parent": 1, "ele": "container", "order": 1 }, { "eno": 3, "parent": 2, "ele": "row", "order": 1 }, { "eno": 4, "parent": 3, "ele": "col", "order": 1 }, { "eno": 5, "ele": "col", "order": 2, "parent": 3 }, { "eno": 6, "ele": "form-group", "label-for": "label6", "label": "Name", "description": "", "parent": 4, "order": 1, "invalid-feedback": "", "valid-feedback": "", "state": false }, { "eno": 7, "order": 1, "ele": "form-input", "type": "text", "parent": 6, "id": "label6" }, { "eno": 8, "ele": "form-group", "label-for": "label8", "label": "Subject", "description": "", "parent": 4, "order": 2, "invalid-feedback": "", "valid-feedback": "", "state": false }, { "eno": 9, "order": 2, "ele": "form-input", "type": "text", "parent": 8, "id": "label8" }, { "eno": 10, "ele": "form-group", "label-for": "label10", "label": "Comment", "description": "", "parent": 4, "order": 3, "invalid-feedback": "", "valid-feedback": "", "state": false }, { "eno": 11, "ele": "form-textarea", "name": "label10", "parent": 10, "id": "label10", "required": false, "size": "md", "readonly": false, "plaintext": false, "placeholder": "", "rows": "8", "max-rows": 5, "no-resize": false, "no-auto-shrink": false, "value": "" }, { "eno": 12, "order": 4, "text": "Button", "border-style": null, "ele": "button", "parent": 4, "id": "label12", "name": "label12", "active": false, "disabled": false, "append": false, "replace": false, "active-class": "active", "exact": false, "exact-active-class": "", "router-tag": "a", "block": false, "size": "md", "variant": "secondary", "type": "submit", "tag": "button", "pill": false, "squared": false } ] ,
    elements:[], 
    deviceOptions:[
      {text:'Mobile Device', value:'mobile', landscape:false, status:false, width:375, height:667 },
      {text:'Tablet Device', value:'tablet', landscape:true, status:false,width:1024, height:768 },
      {text:'Laptop', value:'laptop', landscape:true, status:false,width:992, height:500    },
      {text:'Desktop', value:'desktop', landscape:true, status:true, width:1280, height:800  }
    ],
     selectedDevice:null
}


export default (state)