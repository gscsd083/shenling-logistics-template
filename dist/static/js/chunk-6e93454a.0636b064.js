(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e93454a"],{"0873":function(t,e,n){},"4bf1":function(t,e,n){"use strict";var i=n("cc6a"),a=n.n(i);a.a},5850:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o}));var i=n("b775"),a=function(t){return Object(i["a"])("/business-hall/tree","get",t)},s=function(t){return Object(i["a"])("/business-hall/".concat(t),"get",t)},r=function(t){return Object(i["a"])("/business-hall/user/page","get",t)},o=function(t){return Object(i["a"])("/business-hall","post",t)}},"855a":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"org institutions-jobs-area"},[i("div",{staticClass:"app-container scheduling-box"},[i("div",{staticClass:"l-box"},[i("el-card",{staticClass:"box-card",staticStyle:{"border-radius":"8px"},attrs:{shadow:"never"}},[i("div",{staticClass:"app-container-tree",staticStyle:{"border-radius":"8px"}},[i("el-scrollbar",{staticStyle:{height:"728px",width:"100% border-radius: 8px"}},[i("div",{staticClass:"tree-box"},[i("el-tree",{ref:"tree",staticClass:"filter-tree customer-tree-box",staticStyle:{"font-size":"12px"},attrs:{indent:22,data:t.instituJobDataList,"highlight-current":"","node-key":"id",props:t.defaultProps,"expand-on-click-node":!1,"filter-node-method":t.filterNode,"default-expanded-keys":t.treeExpandData},on:{"node-click":t.handleNodeClick}})],1)])],1)])],1),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingMap,expression:"loadingMap"}],staticClass:"r-box",attrs:{"element-loading-text":"只有网点机构的作业范围可以查看和编辑"}},[i("el-card",{attrs:{shadow:"never"}},[t.agencyId?i("div",{staticStyle:{},attrs:{slot:"header"},slot:"header"},[i("span",[t._v("作业范围")]),t._v(" "),t.isShowOperation&&3===t.currentNode.type?i("div",{staticStyle:{float:"right","margin-right":"40px"}},[i("el-tooltip",{attrs:{effect:"dark",content:"点击编辑释放绘制电子围栏功能",placement:"top"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showEdit,expression:"showEdit"}],staticClass:"save-area-btn",on:{click:t.editData}},[t._v("编辑")])],1),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击保存上传绘制好的电子围栏",placement:"top"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],staticClass:"save-area-btn",on:{click:t.createData}},[t._v("提交")])],1),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],staticClass:"cancel-area-btn",on:{click:t.cancelData}},[t._v("取消")])],1):t._e()]):t._e(),t._v(" "),i("div",{staticClass:"searchBox"},[i("div",{staticClass:"keyword"},[i("label",[t._v("地区关键词：")]),t._v(" "),i("el-input",{attrs:{placeholder:"请输入地区关键词"},on:{input:t.handleInputfun},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)]),t._v(" "),i("div",{staticStyle:{padding:"22px 0"}},[i("baidu-map",{ref:"myMap",staticClass:"map",attrs:{center:t.center,zoom:t.zoom,"scroll-wheel-zoom":!0,"map-click":!1},on:{mousemove:t.syncPolyline,click:t.paintPolyline,rightclick:t.newPolyline,ready:t.ready}},[i("bm-local-search",{attrs:{keyword:t.keyword,"auto-viewport":!0,panel:!1}}),t._v(" "),i("bm-control",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],staticStyle:{background:"#fff",width:"100%"}},[i("el-button",{staticClass:"new-btn",attrs:{type:"primary"},on:{click:function(e){return t.toggle("polyline")}}},[t._v(t._s(t.polyline.editing?"完成绘制":"开始绘制"))]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:!1!==t.polyline.editing,expression:"polyline.editing !== false"}],staticClass:"dele",staticStyle:{color:"#818693",border:"1px solid #d8dde3",padding:"10px 20px","margin-left":"12px"},on:{click:function(e){return t.clear()}}},[t._v("删除围栏")]),t._v(" "),i("P",{staticStyle:{"font-size":"12px",color:"rgba(198, 126, 18, 1)",width:"100%",background:"rgba(255, 245, 231, 1)",height:"30px","line-height":"30px","text-align":"left","padding-left":"10px"}},[i("img",{staticStyle:{width:"14px","vertical-align":"middle","margin-bottom":"2px","margin-right":"6px"},attrs:{src:n("57bd"),alt:""}}),t._v("点击或拖动鼠标绘制作业范围，右击鼠标结束图形绘制，图形不可有交叉点。完成绘制后，点击提交按钮保存。每个机构仅可支持绘制一个作业范围")])],1),t._v(" "),t._l(t.polyline.paths,(function(e,n){return i("bm-polygon",{key:n,attrs:{path:e,"stroke-color":"#e85552","fill-color":"rgba(232,85,82,0.30)","fill-opacity":.9,"stroke-opacity":.5,"stroke-weight":1,editing:t.polyline.editing,"stroke-style":"dashed"},on:{lineupdate:t.updatePolygonPath}})}))],2)],1)])],1)])])},a=[],s=(n("ac6a"),n("28a5"),n("96cf"),n("3b8d")),r=(n("7f7f"),n("5850")),o=n("95e9"),c={name:"InstitutionsJobsArea",data:function(){return{agencyType:null,keyword:"",isShowOperation:!0,agencyId:"",isFirstEdit:!0,polygonPath:"",treeExpandData:[],treeExpandData2:[],provincialCenterId:"",provincialCenterId2:[],loadingMap:!1,center:{lng:116.404,lat:39.915},isOperation:!1,zoom:13,showEdit:!0,showSave:!1,defaultProps:{children:"children",label:"name"},provinceCity:"暂无地址",instituJobDataList:[],listLoading:!0,polyline:{editing:!1,paths:[]},currentNode:{}}},created:function(){this.initialDate()},updated:function(){},methods:{ready:function(t){var e=t.BMap,n=t.map;this.map=n,this.BMap=e,this.initialDate()},initialDate:function(){this.getList()},filterNode:function(t,e){return!t||-1!==e.name.indexOf(t)},handleNodeClick:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n,i,a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.currentNode=e,t.next=3,Object(o["f"])(e.id,1);case 3:n=t.sent,i=n.data,a=[],s=[],i.polygon&&i.polygon.length>0?(a=i.polygon.map((function(t){return{lat:t.latitude,lng:t.longitude}})),this.isHaveAgencyArange=!0):(this.isHaveAgencyArange=!1,s=i.latitude?[{lat:i.latitude,lng:i.longitude}]:[{lat:"39.915",lng:"116.4045"}]),r=this.map&&this.map.getViewport(this.isHaveAgencyArange?a:s),this.$set(this.center,"lng",r.center.lng),this.$set(this.center,"lat",r.center.lat),this.zoom=this.isHaveAgencyArange?r.zoom:11,this.isFirstEdit=Boolean(i.polygon&&i.polygon.length>0),this.agencyId=e.id,this.$set(this.polyline,"paths",a?[a]:[]),this.$set(this.polyline,"editing",!1);case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getExpandData:function(t){var e=this,n=t.split(",");n.forEach((function(t){e.treeExpandData.push(t)}))},getExpandData2:function(t){this.treeExpandData2=[t];var e=this;setTimeout((function(){e.handleNodeClick(t)}),50)},createData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,i,a,s,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.polyline.editing=!1,this.isOperation=!1,0!==this.polyline.paths.length){t.next=4;break}return t.abrupt("return",this.$message.error("请绘制作业机构范围"));case 4:return e=[],this.polyline.paths.forEach((function(t){e.push(t.length)})),n=Math.max.apply(Math,e),i=e.indexOf(n),a=(this.isFirstEdit?this.polygonPath:this.polyline.paths[i]).map((function(t){return{latitude:t.lat,longitude:t.lng}})),a.push(a[0]),s={polygon:a,type:1,bid:this.agencyId},t.next=13,Object(o["c"])(s).then((function(t){200===t.code?(r.showSave=!1,r.showEdit=!0,r.$emit("newDataes",r.newDataes),r.$message.success("电子围栏保存成功"),r.$set(r.polyline,"editing",!1)):r.$message.error(t.msg||"电子围栏保存失败")})).catch((function(){r.$message.error("电子围栏保存失败")}));case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleInputfun:function(){this.$set(this.center,"lng",0),this.$set(this.center,"lat",0),this.zoom=0},editData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.showSave=!0,this.showEdit=!1,e=this.map&&this.map.getViewport(this.polyline.paths[0]),this.$set(this.center,"lng",e.center.lng),this.$set(this.center,"lat",e.center.lat),this.zoom=this.isHaveAgencyArange?e.zoom:11;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancelData:function(){this.showSave=!1,this.showEdit=!0,this.polyline.editing=!1,this.isShowOperation=!0},getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,Object(r["a"])();case 3:e=t.sent,n=e.data,this.instituJobDataList=JSON.parse(n),this.provincialCenterId2=this.instituJobDataList[0].children[0].children[0],this.provincialCenterId=this.instituJobDataList[0].children[0].id,this.getExpandData(this.provincialCenterId),this.getExpandData2(this.provincialCenterId2),this.$nextTick((function(){this.$refs["tree"].setCurrentKey(this.instituJobDataList[0].children[0].children[0].id)})),this.listLoading=!1;case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),toggle:function(t){this[t].editing=!this[t].editing},clear:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isOperation=!1,this.polyline.editing=!1,this.showSave=!0,this.showEdit=!1,this.isFirstEdit){t.next=8;break}this.$set(this.polyline,"paths",[]),t.next=12;break;case 8:return t.next=10,Object(o["g"])(this.agencyId,1);case 10:e=t.sent,200===e.code?(this.$message.success("删除机构作业范围成功"),this.polyline.paths=[],this.handleNodeClick(this.currentNode)):this.$message.error(e.msg||"删除机构作业范围成功");case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),syncPolyline:function(t){if(this.polyline.editing&&this.isOperation){var e=this.polyline.paths;if(e.length){var n=e[e.length-1];n.length&&(1===n.length&&n.push(t.point),this.$set(n,n.length-1,t.point))}}},newPolyline:function(t){if(this.polyline.editing){var e=this.polyline.paths;e.length||e.push([]);var n=e[e.length-1];n.pop(),n.length&&e.push([])}},paintPolyline:function(t){if(this.polyline.editing&&!this.isFirstEdit){this.isOperation=!0;var e=this.polyline.paths;!e.length&&e.push([]),e[e.length-1].push(t.point)}},updatePolygonPath:function(t){this.polygonPath=t.target.getPath()}}},l=c,u=(n("4bf1"),n("860c"),n("8fcc"),n("dc96"),n("2877")),h=Object(u["a"])(l,i,a,!1,null,"192cb3bb",null);e["default"]=h.exports},"860c":function(t,e,n){"use strict";var i=n("9118"),a=n.n(i);a.a},"8fcc":function(t,e,n){"use strict";var i=n("0873"),a=n.n(i);a.a},9118:function(t,e,n){},"95e9":function(t,e,n){"use strict";n.d(e,"l",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"j",(function(){return r})),n.d(e,"k",(function(){return o})),n.d(e,"m",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return h})),n.d(e,"c",(function(){return d})),n.d(e,"n",(function(){return p})),n.d(e,"g",(function(){return g})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return v})),n.d(e,"h",(function(){return y}));var i=n("b775"),a=function(t){return Object(i["a"])("/goodsType/page","get",t)},s=function(t){return Object(i["a"])("/goodsType","post",t)},r=function(t){return Object(i["a"])("/goodsType/".concat(t),"delete",t)},o=function(t){return Object(i["a"])("/goodsType/".concat(t),"get",t)},c=function(t,e){return Object(i["a"])("/goodsType/".concat(t),"put",e)},l=function(t){return Object(i["a"])("/business-hall/courier/page","get",t)},u=function(t){return Object(i["a"])("/business-hall/courier/".concat(t),"get",t)},h=function(t,e){return Object(i["a"])("/business-hall/scope/".concat(t,"/").concat(e),"get",t)},d=function(t){return Object(i["a"])("/business-hall/scope","post",t)},p=function(t){return Object(i["a"])("/pickup-dispatch-task-manager/page","post",t)},g=function(t,e){return Object(i["a"])("/business-hall/scope/".concat(t,"/").concat(e),"delete")},f=function(t){return Object(i["a"])("/truck-return-register/pageQuery","post",t)},v=function(t){return Object(i["a"])("/truck-return-register/detail/".concat(t),"get",t)},y=function(t){return Object(i["a"])("/pickup-dispatch-task-manager/".concat(t.courierId),"put",t.ids)}},cc6a:function(t,e,n){},d4bf:function(t,e,n){},dc96:function(t,e,n){"use strict";var i=n("d4bf"),a=n.n(i);a.a}}]);