(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[857],{1393:function(e,t,i){i(6573),i(8100),i(7936),i(7467),i(4732),i(9577),i(4979),i(4603),i(7566),i(8721),function(t,i){e.exports=i()}(0,(function(){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var a;function o(e){return["image/png","image/jpeg","image/gif"].some((t=>t===e))}i.r(t),i.d(t,"canvastoDataURL",(function(){return s})),i.d(t,"canvastoFile",(function(){return l})),i.d(t,"dataURLtoFile",(function(){return u})),i.d(t,"dataURLtoImage",(function(){return d})),i.d(t,"downloadFile",(function(){return c})),i.d(t,"filetoDataURL",(function(){return h})),i.d(t,"imagetoCanvas",(function(){return g})),i.d(t,"urltoBlob",(function(){return f})),i.d(t,"urltoImage",(function(){return m})),i.d(t,"compress",(function(){return y})),i.d(t,"compressAccurately",(function(){return w})),i.d(t,"EImageType",(function(){return a})),function(e){e.PNG="image/png",e.JPEG="image/jpeg",e.GIF="image/gif"}(a||(a={}));var n=function(e,t,i,a){return new(i||(i=Promise))((function(o,n){function s(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}r((a=a.apply(e,t||[])).next())}))};function s(e,t=.92,i=a.JPEG){return n(this,void 0,void 0,(function*(){return o(i)||(i=a.JPEG),e.toDataURL(i,t)}))}function l(e,t=.92,i=a.JPEG){return new Promise((a=>e.toBlob((e=>a(e)),i,t)))}var r=function(e,t,i,a){return new(i||(i=Promise))((function(o,n){function s(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}r((a=a.apply(e,t||[])).next())}))};function u(e,t){return r(this,void 0,void 0,(function*(){const i=e.split(",");let a=i[0].match(/:(.*?);/)[1];const n=atob(i[1]);let s=n.length;const l=new Uint8Array(s);for(;s--;)l[s]=n.charCodeAt(s);return o(t)&&(a=t),new Blob([l],{type:a})}))}function d(e){return new Promise(((t,i)=>{const a=new Image;a.onload=()=>t(a),a.onerror=()=>i(new Error("dataURLtoImage(): dataURL is illegal")),a.src=e}))}function c(e,t){const i=document.createElement("a");i.href=window.URL.createObjectURL(e),i.download=t||Date.now().toString(36),document.body.appendChild(i);const a=document.createEvent("MouseEvents");a.initEvent("click",!1,!1),i.dispatchEvent(a),document.body.removeChild(i)}function h(e){return new Promise((t=>{const i=new FileReader;i.onloadend=e=>t(e.target.result),i.readAsDataURL(e)}))}var p=function(e,t,i,a){return new(i||(i=Promise))((function(o,n){function s(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}r((a=a.apply(e,t||[])).next())}))};function g(e,t={}){return p(this,void 0,void 0,(function*(){const i=Object.assign({},t),a=document.createElement("canvas"),o=a.getContext("2d");let n,s;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=Number(i[e]));if(i.scale){const t=i.scale>0&&i.scale<10?i.scale:1;s=e.width*t,n=e.height*t}else s=i.width||i.height*e.width/e.height||e.width,n=i.height||i.width*e.height/e.width||e.height;switch([5,6,7,8].some((e=>e===i.orientation))?(a.height=s,a.width=n):(a.height=n,a.width=s),i.orientation){case 3:o.rotate(180*Math.PI/180),o.drawImage(e,-a.width,-a.height,a.width,a.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(e,0,-a.width,a.height,a.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(e,-a.height,0,a.height,a.width);break;case 2:o.translate(a.width,0),o.scale(-1,1),o.drawImage(e,0,0,a.width,a.height);break;case 4:o.translate(a.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(e,-a.width,-a.height,a.width,a.height);break;case 5:o.translate(a.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(e,0,-a.width,a.height,a.width);break;case 7:o.translate(a.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(e,-a.height,0,a.height,a.width);break;default:o.drawImage(e,0,0,a.width,a.height)}return a}))}function f(e){return fetch(e).then((e=>e.blob()))}function m(e){return new Promise(((t,i)=>{const a=new Image;a.onload=()=>t(a),a.onerror=()=>i(new Error("urltoImage(): Image failed to load, please check the image URL")),a.src=e}))}var b=function(e,t,i,a){return new(i||(i=Promise))((function(o,n){function s(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}r((a=a.apply(e,t||[])).next())}))};function y(e,t={}){return b(this,void 0,void 0,(function*(){if(!(e instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if("object"!=typeof t&&(t=Object.assign({quality:t})),t.quality=Number(t.quality),Number.isNaN(t.quality))return e;const i=yield h(e);let n=i.split(",")[0].match(/:(.*?);/)[1],l=a.JPEG;o(t.type)&&(l=t.type,n=t.type);const r=yield d(i),c=yield g(r,Object.assign({},t)),p=yield s(c,t.quality,l),f=yield u(p,n);return f.size>e.size?e:f}))}function w(e,t={}){return b(this,void 0,void 0,(function*(){if(!(e instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if("object"!=typeof t&&(t=Object.assign({size:t})),t.size=Number(t.size),Number.isNaN(t.size))return e;if(1024*t.size>e.size)return e;t.accuracy=Number(t.accuracy),(!t.accuracy||t.accuracy<.8||t.accuracy>.99)&&(t.accuracy=.95);const i=t.size*(2-t.accuracy)*1024,n=1024*t.size,l=t.size*t.accuracy*1024,r=yield h(e);let c=r.split(",")[0].match(/:(.*?);/)[1],p=a.JPEG;o(t.type)&&(p=t.type,c=t.type);const f=yield d(r),m=yield g(f,Object.assign({},t));let b,y=.5;const w=[null,null];for(let e=1;e<=7;e++){b=yield s(m,y,p);const t=.75*b.length;if(7===e){(i<t||l>t)&&(b=[b,...w].filter((e=>e)).sort(((e,t)=>Math.abs(.75*e.length-n)-Math.abs(.75*t.length-n)))[0]);break}if(i<t)w[1]=b,y-=Math.pow(.5,e+1);else{if(!(l>t))break;w[0]=b,y+=Math.pow(.5,e+1)}}const k=yield u(b,c);return k.size>e.size?e:k}))}}])}))},6334:function(e,t,i){e.exports=i(1393)},7857:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return te}});var a=i(6768),o=i(4232);const n=e=>((0,a.Qi)("data-v-124b8fea"),e=e(),(0,a.jt)(),e),s={class:"upload-home"},l=n((()=>(0,a.Lk)("img",{id:"bg1",class:"background-image1",alt:"Background Image"},null,-1))),r=n((()=>(0,a.Lk)("img",{id:"bg2",class:"background-image2",alt:"Background Image"},null,-1))),u={class:"toolbar"},d={class:"header"},c={href:"https://github.com/MarSeventh/CloudFlare-ImgBed"},h=["src"],p={class:"main-title",href:"https://github.com/MarSeventh/CloudFlare-ImgBed",target:"_blank"},g={class:"dialog-action"};function f(e,t,i,n,f,m){const b=(0,a.g2)("Refresh"),y=(0,a.g2)("el-icon"),w=(0,a.g2)("el-button"),k=(0,a.g2)("el-tooltip"),L=(0,a.g2)("Connection"),v=(0,a.g2)("Tools"),F=(0,a.g2)("Close"),U=(0,a.g2)("UploadForm"),C=(0,a.g2)("Footer"),_=(0,a.g2)("el-radio"),P=(0,a.g2)("el-radio-group"),I=(0,a.g2)("el-dialog");return(0,a.uX)(),(0,a.CE)("div",s,[l,r,(0,a.Lk)("div",u,[(0,a.bF)(k,{content:"上传方式",placement:"left"},{default:(0,a.k6)((()=>[(0,a.bF)(w,{class:"toolbar-button",size:"large",type:"info",onClick:m.changeUploadMethod,circle:""},{default:(0,a.k6)((()=>[(0,a.bF)(y,{size:"large"},{default:(0,a.k6)((()=>[(0,a.bF)(b)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,a.bF)(k,{content:"链接格式",placement:"left"},{default:(0,a.k6)((()=>[(0,a.bF)(w,{class:"toolbar-button",size:"large",type:"success",onClick:m.openUrlDialog,circle:""},{default:(0,a.k6)((()=>[(0,a.bF)(y,{size:"large"},{default:(0,a.k6)((()=>[(0,a.bF)(L)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,a.bF)(k,{content:"管理页面",placement:"left"},{default:(0,a.k6)((()=>[(0,a.bF)(w,{class:"toolbar-button",size:"large",type:"primary",onClick:m.handleManage,circle:""},{default:(0,a.k6)((()=>[(0,a.bF)(y,{size:"large"},{default:(0,a.k6)((()=>[(0,a.bF)(v)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,a.bF)(k,{content:"退出登录",placement:"left"},{default:(0,a.k6)((()=>[(0,a.bF)(w,{class:"toolbar-button",size:"large",type:"danger",onClick:m.handleLogout,circle:""},{default:(0,a.k6)((()=>[(0,a.bF)(y,{size:"large"},{default:(0,a.k6)((()=>[(0,a.bF)(F)])),_:1})])),_:1},8,["onClick"])])),_:1})]),(0,a.Lk)("div",d,[(0,a.Lk)("a",c,[(0,a.Lk)("img",{class:"logo",alt:"Sanyue logo",src:m.logoUrl},null,8,h)]),(0,a.Lk)("h1",null,[(0,a.Lk)("a",p,(0,o.v_)(m.ownerName),1),(0,a.eW)(" ImgHub")])]),(0,a.bF)(U,{selectedUrlForm:f.selectedUrlForm,uploadMethod:f.uploadMethod,class:"upload"},null,8,["selectedUrlForm","uploadMethod"]),(0,a.bF)(C),(0,a.bF)(I,{title:"选择复制链接格式",modelValue:f.showUrlDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>f.showUrlDialog=e),width:"40%","show-close":!1},{default:(0,a.k6)((()=>[(0,a.bF)(P,{modelValue:f.selectedUrlForm,"onUpdate:modelValue":t[0]||(t[0]=e=>f.selectedUrlForm=e)},{default:(0,a.k6)((()=>[(0,a.bF)(_,{value:"url"},{default:(0,a.k6)((()=>[(0,a.eW)("原始链接")])),_:1}),(0,a.bF)(_,{value:"md"},{default:(0,a.k6)((()=>[(0,a.eW)("MarkDown")])),_:1}),(0,a.bF)(_,{value:"html"},{default:(0,a.k6)((()=>[(0,a.eW)("HTML")])),_:1}),(0,a.bF)(_,{value:"ubb"},{default:(0,a.k6)((()=>[(0,a.eW)("BBCode")])),_:1})])),_:1},8,["modelValue"]),(0,a.Lk)("div",g,[(0,a.bF)(w,{type:"primary",onClick:t[1]||(t[1]=e=>f.showUrlDialog=!1)},{default:(0,a.k6)((()=>[(0,a.eW)("确定")])),_:1})])])),_:1},8,["modelValue"])])}i(4114);const m=e=>((0,a.Qi)("data-v-677a78f9"),e=e(),(0,a.jt)(),e),b={key:0,class:"el-upload__text"},y=m((()=>(0,a.Lk)("em",null,"点击上传",-1))),w={key:1,class:"el-upload__text"},k=m((()=>(0,a.Lk)("em",null,"粘贴",-1))),L=m((()=>(0,a.Lk)("div",{class:"el-upload__tip"},"支持多文件上传，支持图片和视频，不超过20MB",-1))),v={class:"upload-list-dashboard"},F={class:"upload-list-dashboard-action"},U=["href"],C={key:0,style:{width:"10vw","border-radius":"12px"},controls:""},_=["src"],P=["src","onError"],I={class:"upload-list-item-content"},R={key:0,class:"upload-list-item-url"},x={class:"upload-list-item-url-row"},E={class:"upload-list-item-url-row"},j={key:1,class:"upload-list-item-progress"},M={class:"upload-list-item-action"};function W(e,t,i,n,s,l){const r=(0,a.g2)("CameraFilled"),u=(0,a.g2)("CopyDocument"),d=(0,a.g2)("el-icon"),c=(0,a.g2)("el-upload"),h=(0,a.g2)("List"),p=(0,a.g2)("Checked"),g=(0,a.g2)("Failed"),f=(0,a.g2)("el-text"),m=(0,a.g2)("Grid"),W=(0,a.g2)("el-button"),B=(0,a.g2)("el-tooltip"),S=(0,a.g2)("CircleClose"),z=(0,a.g2)("el-button-group"),$=(0,a.g2)("el-input"),T=(0,a.g2)("el-progress"),V=(0,a.g2)("Link"),D=(0,a.g2)("Delete"),A=(0,a.g2)("el-scrollbar"),O=(0,a.g2)("el-card");return(0,a.uX)(),(0,a.CE)("div",{class:"upload-form",onPaste:t[0]||(t[0]=(...e)=>l.handlePaste&&l.handlePaste(...e))},[(0,a.bF)(c,{class:(0,o.C4)(["upload-card",{"is-uploading":s.uploading,"upload-card-busy":s.fileList.length,"paste-mode":"paste"===i.uploadMethod}]),drag:"",multiple:"","http-request":l.uploadFile,onSuccess:l.handleSuccess,"on-error":l.handleError,"before-upload":l.beforeUpload,"on-progress":l.handleProgress,"file-list":s.fileList,"show-file-list":!1,accept:"image/*, video/*"},{tip:(0,a.k6)((()=>[L])),default:(0,a.k6)((()=>[(0,a.bF)(d,{class:"el-icon--upload"},{default:(0,a.k6)((()=>["drag"===i.uploadMethod?((0,a.uX)(),(0,a.Wv)(r,{key:0,color:"blanchedalmond"})):((0,a.uX)(),(0,a.Wv)(u,{key:1,color:"blanchedalmond"}))])),_:1}),"drag"===i.uploadMethod?((0,a.uX)(),(0,a.CE)("div",b,[(0,a.eW)("拖拽 或 "),y])):((0,a.uX)(),(0,a.CE)("div",w,[(0,a.eW)("复制 "),k,(0,a.eW)(" 上传")]))])),_:1},8,["class","http-request","onSuccess","on-error","before-upload","on-progress","file-list"]),(0,a.bF)(O,{class:(0,o.C4)(["upload-list-card",{"upload-list-busy":s.fileList.length}])},{default:(0,a.k6)((()=>[(0,a.Lk)("div",{class:(0,o.C4)(["upload-list-container",{"upload-list-busy":s.fileList.length}])},[(0,a.bF)(A,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",v,[(0,a.bF)(f,{class:"upload-list-dashboard-title"},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(h)])),_:1}),(0,a.eW)((0,o.v_)(l.uploadingCount+l.waitingCount)+" ",1),(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(p)])),_:1}),(0,a.eW)((0,o.v_)(l.uploadSuccessCount)+" ",1),(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(g)])),_:1}),(0,a.eW)((0,o.v_)(l.uploadErrorCount),1)])),_:1}),(0,a.Lk)("div",F,[(0,a.bF)(z,null,{default:(0,a.k6)((()=>[(0,a.bF)(B,{content:"整体复制",placement:"top"},{default:(0,a.k6)((()=>[(0,a.bF)(W,{type:"primary",round:"",onClick:l.copyAll,alt:"整体复制"},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(m)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,a.bF)(B,{content:"清空列表",placement:"top"},{default:(0,a.k6)((()=>[(0,a.bF)(W,{type:"primary",round:"",onClick:l.clearFileList},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(S)])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.fileList,(e=>((0,a.uX)(),(0,a.CE)("div",{class:"upload-list-item",key:e.name,span:8},[(0,a.Lk)("a",{href:e.url,target:"_blank"},[l.isVideo(e.name)?((0,a.uX)(),(0,a.CE)("video",C,[(0,a.Lk)("source",{src:e.url,type:"video/mp4"},null,8,_),(0,a.eW)(" Your browser does not support the video tag. ")])):((0,a.uX)(),(0,a.CE)("img",{key:1,style:{width:"10vw","border-radius":"12px"},src:e.url,onError:t=>e.url="https://imgbed.sanyue.site/file/b6a4a65b4edba4377492e.png"},null,40,P))],8,U),(0,a.Lk)("div",I,[(0,a.bF)(f,{class:"upload-list-item-name",truncated:""},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.name),1)])),_:2},1024),"done"===e.status?((0,a.uX)(),(0,a.CE)("div",R,[(0,a.Lk)("div",x,[(0,a.bF)($,{modelValue:e.finalURL,"onUpdate:modelValue":t=>e.finalURL=t,size:"small",readonly:"",onFocus:l.selectAllText},{prepend:(0,a.k6)((()=>[(0,a.eW)("URL:")])),_:2},1032,["modelValue","onUpdate:modelValue","onFocus"]),(0,a.bF)($,{modelValue:e.mdURL,"onUpdate:modelValue":t=>e.mdURL=t,size:"small",readonly:"",onFocus:l.selectAllText},{prepend:(0,a.k6)((()=>[(0,a.eW)("MarkDown:")])),_:2},1032,["modelValue","onUpdate:modelValue","onFocus"])]),(0,a.Lk)("div",E,[(0,a.bF)($,{modelValue:e.htmlURL,"onUpdate:modelValue":t=>e.htmlURL=t,size:"small",readonly:"",onFocus:l.selectAllText},{prepend:(0,a.k6)((()=>[(0,a.eW)("HTML:")])),_:2},1032,["modelValue","onUpdate:modelValue","onFocus"]),(0,a.bF)($,{modelValue:e.ubbURL,"onUpdate:modelValue":t=>e.ubbURL=t,size:"small",readonly:"",onFocus:l.selectAllText},{prepend:(0,a.k6)((()=>[(0,a.eW)("BBCode:")])),_:2},1032,["modelValue","onUpdate:modelValue","onFocus"])])])):((0,a.uX)(),(0,a.CE)("div",j,[(0,a.bF)(T,{percentage:e.progreess,status:e.status,"show-text":!1},null,8,["percentage","status"])]))]),(0,a.Lk)("div",M,[(0,a.bF)(W,{type:"primary",circle:"",class:"upload-list-item-action-button",onClick:t=>l.handleCopy(e)},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(V)])),_:1})])),_:2},1032,["onClick"]),(0,a.bF)(W,{type:"danger",circle:"",class:"upload-list-item-action-button",onClick:t=>l.handleRemove(e)},{default:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(D)])),_:1})])),_:2},1032,["onClick"])])])))),128))])),_:1})],2)])),_:1},8,["class"])],32)}i(4603),i(7566),i(8721);var B=i(4373),S=i(4570),z=i.n(S),$=i(6334),T={name:"UploadForm",props:{selectedUrlForm:{type:String,default:"url",required:!1},uploadMethod:{type:String,default:"drag",required:!1}},data(){return{fileList:[],uploading:!1,maxUploading:10,waitingList:[]}},computed:{uploadSuccessCount(){return this.fileList.filter((e=>"done"===e.status||"success"===e.status)).length},uploadErrorCount(){return this.fileList.filter((e=>"exception"===e.status)).length},uploadingCount(){return this.fileList.filter((e=>"uploading"===e.status)).length},waitingCount(){return this.waitingList.length}},methods:{uploadFile(e){if(this.uploadingCount>this.maxUploading)return this.waitingList.push(e),void(this.fileList.find((t=>t.uid===e.file.uid)).status="waiting");this.fileList.find((t=>t.uid===e.file.uid)).status="uploading";const t=new FormData;t.append("file",e.file),(0,B.A)({url:"/upload?authCode="+z().get("authCode"),method:"post",data:t,onUploadProgress:t=>{const i=Math.round(t.loaded/t.total*100);e.onProgress({percent:i,file:e.file})}}).then((t=>{e.onSuccess(t,e.file)})).catch((t=>{t.response&&401===t.response.status?(this.waitingList=[],this.fileList=[],this.$message.error("认证状态错误！"),this.$router.push("/login")):e.onError(t,e.file)})).finally((()=>{this.uploadingCount+this.waitingCount===0&&(this.uploading=!1)}))},handleRemove(e){this.fileList=this.fileList.filter((t=>t.uid!==e.uid)),this.$message({type:"info",message:e.name+"已删除"})},handleSuccess(e,t){try{const i=`${window.location.protocol}//${window.location.host}`;this.fileList.find((e=>e.uid===t.uid)).url=i+e.data[0].src,this.fileList.find((e=>e.uid===t.uid)).finalURL=i+e.data[0].src,this.fileList.find((e=>e.uid===t.uid)).mdURL=`![${t.name}](${i+e.data[0].src})`,this.fileList.find((e=>e.uid===t.uid)).htmlURL=`<img src="${i+e.data[0].src}" alt="${t.name}" width=100% />`,this.fileList.find((e=>e.uid===t.uid)).ubbURL=`[img]${i+e.data[0].src}[/img]`,this.fileList.find((e=>e.uid===t.uid)).progreess=100,this.fileList.find((e=>e.uid===t.uid)).status="success",this.$message({type:"success",message:t.name+"上传成功"}),setTimeout((()=>{this.fileList.find((e=>e.uid===t.uid)).status="done"}),1e3)}catch(i){this.$message.error(t.name+"上传失败"),this.fileList.find((e=>e.uid===t.uid)).status="exception"}finally{if(this.uploadingCount+this.waitingCount===0&&(this.uploading=!1),this.waitingList.length){const e=this.waitingList.shift();this.uploadFile(e)}}},handleError(e,t){if(this.$message.error(t.name+"上传失败"),this.fileList.find((e=>e.uid===t.uid)).status="exception",this.waitingList.length){const e=this.waitingList.shift();this.uploadFile(e)}this.uploadingCount+this.waitingCount===0&&(this.uploading=!1)},handleCopy(e){const t=this.fileList.find((t=>t.uid===e.uid)).status;"done"===t||"success"===t?("url"===this.selectedUrlForm?navigator.clipboard.writeText(e.finalURL):"md"===this.selectedUrlForm?navigator.clipboard.writeText(e.mdURL):"html"===this.selectedUrlForm?navigator.clipboard.writeText(e.htmlURL):"ubb"===this.selectedUrlForm?navigator.clipboard.writeText(e.ubbURL):navigator.clipboard.writeText(e.finalURL),this.$message({type:"success",message:"复制成功"})):this.$message({type:"warning",message:"文件未上传成功，无法复制链接"})},beforeUpload(e){return new Promise(((t,i)=>{const a=e.size/1024/1024<20;if(a){this.uploading=!0;const i=URL.createObjectURL(e);this.fileList.push({uid:e.uid,name:e.name,url:i,finalURL:"",mdURL:"",htmlURL:"",ubbURL:"",status:"uploading",progreess:0}),t(e)}else e.type.includes("image")?$.compressAccurately(e,4096).then((a=>{a.size/1024/1024>20&&(this.$message.error(e.name+"压缩后文件过大，无法上传!"),i("文件过大")),this.uploading=!0;const o=new File([a],e.name,{type:a.type});o.uid=e.uid;const n=URL.createObjectURL(o);this.fileList.push({uid:e.uid,name:e.name,url:n,finalURL:"",mdURL:"",htmlURL:"",ubbURL:"",status:"uploading",progreess:0}),t(o)})).catch((t=>{this.$message.error(e.name+"文件过大且压缩失败，无法上传!"),i(t)})):(this.$message.error(e.name+"文件过大，无法上传!"),i("文件过大"))}))},handleProgress(e){this.fileList.find((t=>t.uid===e.file.uid)).progreess=e.percent},copyAll(){if("url"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.finalURL})).join("\n");navigator.clipboard.writeText(e)}else if("md"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.mdURL})).join("\n");navigator.clipboard.writeText(e)}else if("html"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.htmlURL})).join("\n");navigator.clipboard.writeText(e)}else if("ubb"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.ubbURL})).join("\n");navigator.clipboard.writeText(e)}else{const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.finalURL})).join("\n");navigator.clipboard.writeText(e)}this.$message({type:"success",message:"整体复制成功"})},clearFileList(){this.fileList=[],this.$message({type:"info",message:"列表已清空"})},handlePaste(e){if("paste"!==this.uploadMethod)return;const t=e.clipboardData.items;for(let i=0;i<t.length;i++)if("file"===t[i].kind){const e=t[i].getAsFile();if(e.type.includes("image")||e.type.includes("video")){e.uid=Date.now()+i,e.file=e;const t=this.beforeUpload(e);t instanceof Promise&&t.then((e=>{e instanceof File&&this.uploadFile({file:e,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})).catch((e=>{console.log(e)}))}else this.$message({type:"warning",message:"粘贴板中的文件不是图片或视频"})}else"string"===t[i].kind&&t[i].getAsString((e=>{const t=/^(https?:\/\/[^\s$.?#].[^\s]*)$/;t.test(e)&&fetch("/api/fetchRes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((e=>{const t=e.headers.get("content-type");if(200==e.status&&(t.includes("image")||t.includes("video")))return e.blob();throw new Error("URL地址的内容不是图片或视频")})).then((t=>{let a=e.split(".").pop();["jpg","jpeg","png","gif","bmp","webp","mp4","webm","ogg","mkv"].includes(a)||(a="jpeg");Date.now();const o=new File([t],fileName,{type:t.type});o.uid=Date.now()+i,o.file=o;const n=this.beforeUpload(o);n instanceof Promise&&n.then((e=>{e instanceof File&&this.uploadFile({file:e,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})).catch((e=>{console.log(e)}))})).catch((e=>{this.$message({type:"warning",message:"粘贴板中的URL地址的内容不是图片或视频"})}))}))},selectAllText(e){e.target.select()},isImage(e){const t=["jpg","jpeg","png","gif","bmp","webp"],i=e.split(".").pop().toLowerCase();return t.includes(i)},isVideo(e){const t=["mp4","webm","ogg","mkv"],i=e.split(".").pop().toLowerCase();return t.includes(i)}}},V=i(1241);const D=(0,V.A)(T,[["render",W],["__scopeId","data-v-677a78f9"]]);var A=D;const O=e=>((0,a.Qi)("data-v-7c801e22"),e=e(),(0,a.jt)(),e),N={class:"page-footer"},X=O((()=>(0,a.Lk)("p",null,[(0,a.eW)("© 2024 Designed by "),(0,a.Lk)("a",{class:"footer-name",href:"https://github.com/MarSeventh",target:"_blank"},"SanyueQi"),(0,a.eW)(" for You!")],-1))),q=[X];function G(e,t){return(0,a.uX)(),(0,a.CE)("div",N,q)}const J={},H=(0,V.A)(J,[["render",G],["__scopeId","data-v-7c801e22"]]);var Q=H,K=i(144),Y=i(782),Z={name:"UploadHome",data(){return{selectedUrlForm:(0,K.KR)("url"),uploadMethod:(0,K.KR)("drag"),showUrlDialog:!1,bingWallPaperIndex:0,customWallPaperIndex:0}},computed:{...(0,Y.L8)(["userConfig","bingWallPapers"]),ownerName(){return this.userConfig?.ownerName||"Sanyue"},logoUrl(){return this.userConfig?.logoUrl||i(3153)}},mounted(){const e=document.getElementById("bg1"),t=document.getElementById("bg2");"bing"===this.userConfig?.uploadBkImg?this.$store.dispatch("fetchBingWallPapers").then((()=>{e.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,e.onload=()=>{e.style.opacity=1},setInterval((()=>{let i=0!=e.style.opacity?e:t,a=0!=e.style.opacity?t:e;i.style.opacity=0,this.bingWallPaperIndex=(this.bingWallPaperIndex+1)%this.bingWallPapers.length,a.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,a.onload=()=>{a.style.opacity=1}}),3e3)})):this.userConfig?.uploadBkImg instanceof Array&&this.userConfig?.uploadBkImg?.length>1?(e.src=this.userConfig.uploadBkImg[this.customWallPaperIndex],e.onload=()=>{e.style.opacity=1},setInterval((()=>{let i=0!=e.style.opacity?e:t,a=0!=e.style.opacity?t:e;i.style.opacity=0,this.customWallPaperIndex=(this.customWallPaperIndex+1)%this.userConfig.uploadBkImg.length,a.src=this.userConfig.uploadBkImg[this.customWallPaperIndex],a.onload=()=>{a.style.opacity=1}}),3e3)):this.userConfig?.uploadBkImg instanceof Array&&1==this.userConfig?.uploadBkImg.length?(e.src=this.userConfig.uploadBkImg[0],e.onload=()=>{e.style.opacity=1}):(e.src="https://imgbed.sanyue.site/file/0dbd5add3605a0b2e8994.jpg",e.onload=()=>{e.style.opacity=1})},components:{UploadForm:A,Footer:Q},methods:{handleManage(){window.location.href="/admin"},openUrlDialog(){this.showUrlDialog=!0},changeUploadMethod(){this.uploadMethod="drag"===this.uploadMethod?"paste":"drag"},handleLogout(){z().remove("authCode"),this.$router.push("/login"),this.$message.success("已退出登录~")}}};const ee=(0,V.A)(Z,[["render",f],["__scopeId","data-v-124b8fea"]]);var te=ee},3153:function(e,t,i){"use strict";e.exports=i.p+"img/logo.08a1b5de.png"}}]);
//# sourceMappingURL=857.6c18b23d.js.map