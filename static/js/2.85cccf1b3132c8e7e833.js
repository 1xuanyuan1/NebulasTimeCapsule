webpackJsonp([2],{esL9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a=s("NYxO"),l={name:"save",computed:n()({},Object(a.b)({string:"string"})),data:function(){return{title:"",content:""}},methods:{toAdd:function(){var t=this;""!==this.title.trim()?""!==this.content.trim()?this.$api.save({title:this.title,content:this.content}).then(function(e){t.$showAlert({title:""+t.string.nav.save+t.string.success,type:"info"}),t.title="",t.content=""}):this.$showAlert({title:""+this.string.save.content+this.string.input_hint,type:"danger"}):this.$showAlert({title:""+this.string.save.title+this.string.input_hint,type:"danger"})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("card",{attrs:{title:t.string.save.label}},[s("div",{staticClass:"form"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v(t._s(t.string.save.title))]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",attrs:{type:"text",placeholder:t.string.save.title},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v(t._s(t.string.save.content))]),t._v(" "),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textarea",attrs:{placeholder:t.string.save.content},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-link",on:{click:t.toAdd}},[t._v(t._s(t.string.save.submit))])])])])])],1)},staticRenderFns:[]},o=s("VU/8")(l,r,!1,null,null,null);e.default=o.exports}});