(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6b45"],{"744f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"formEle"},[t.isEditMode?i("div",{staticClass:"eleHolder"},[i("b-button",{staticClass:"btn eleinfo btn-secondary btn-sm active",on:{click:t.clickedEle}},[t._v("Form")])],1):t._e(),i("b-form",{class:t.data.class,attrs:{id:t.data.id,inline:t.data.inline,novalidate:t.data.novalidate,validated:t.data.validated},on:{click:t.clickedEle}},t._l(t.myChilds,(function(t){return i("app-elements",{attrs:{data:t}})})),1)],1)},a=[],n=(i("d3b7"),{name:"FormEle",props:{data:Object},computed:{hasChild:{get:function(){if(void 0!=this.data)return this.$store.getters.hasChild(this.data.eno)}},myChilds:{get:function(){if(void 0!=this.data)return this.$store.getters.getChilds(this.data.eno)}},isEditMode:{get:function(){return this.$store.getters.isEditMode}}},components:{"app-elements":function(){return Promise.resolve().then(i.bind(null,"8b94"))}},methods:{clickedEle:function(t){this.$store.commit("setActiveEno",this.data.eno),this.$store.commit("setEditMode",!0),t.preventDefault(),t.stopPropagation()}}}),o=n,d=i("2877"),l=Object(d["a"])(o,s,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0d6b45.c08f658e.js.map