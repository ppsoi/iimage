"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[985],{985:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var s=a(4880),n=(a(5331),a(7815)),i=(a(5970),a(9104),a(683)),l=(a(5385),a(47)),o=(a(9648),a(7009)),c=a(850),r=a(1450),d=(a(213),a(9017)),h=(a(8050),a(2105)),u=(a(9092),a(6768)),m=a(4232),p=a(5130);const b={class:"container"},f={class:"header-content"},g={class:"search-card"},k={class:"stats"},F={class:"actions"},C={class:"el-dropdown-link"},v={class:"content"},y=["src"],w={class:"image-overlay"},D={class:"overlay-buttons"},T={class:"file-info"},$={class:"pagination-container"};function L(e,t,a,L,_,S){const x=h.WK,W=(0,u.g2)("font-awesome-icon"),z=d.c6,A=d.Iy,E=d.dW,B=r.R7,I=s.bZ,O=c.dI,V=o.Zq,q=l.S2,P=i.Ik,G=n.aQ,R=s.ZO,N=s.lX;return(0,u.uX)(),(0,u.CE)("div",b,[(0,u.bF)(N,null,{default:(0,u.k6)((()=>[(0,u.bF)(I,null,{default:(0,u.k6)((()=>[(0,u.Lk)("div",f,[(0,u.Lk)("span",{class:"title",onClick:t[0]||(t[0]=(...e)=>S.refreshDashboard&&S.refreshDashboard(...e))},"Dashboard"),(0,u.Lk)("div",g,[(0,u.bF)(x,{modelValue:_.search,"onUpdate:modelValue":t[1]||(t[1]=e=>_.search=e),size:"mini",placeholder:"输入关键字搜索"},null,8,["modelValue"])]),(0,u.Lk)("span",k,[(0,u.bF)(W,{icon:"database",class:"fa-database"}),(0,u.eW)(" 记录总数量: "+(0,m.v_)(_.Number),1)]),(0,u.Lk)("div",F,[(0,u.bF)(B,{content:"排序",placement:"bottom"},{default:(0,u.k6)((()=>[(0,u.bF)(E,{onCommand:S.sort,"hide-on-click":!1},{dropdown:(0,u.k6)((()=>[(0,u.bF)(A,null,{default:(0,u.k6)((()=>[(0,u.bF)(z,{command:"dateDesc"},{default:(0,u.k6)((()=>t[3]||(t[3]=[(0,u.eW)("按时间倒序")]))),_:1}),(0,u.bF)(z,{command:"nameAsc"},{default:(0,u.k6)((()=>t[4]||(t[4]=[(0,u.eW)("按名称升序")]))),_:1})])),_:1})])),default:(0,u.k6)((()=>[(0,u.Lk)("span",C,[(0,u.bF)(W,{icon:S.sortIcon,class:"header-icon"},null,8,["icon"])])])),_:1},8,["onCommand"])])),_:1}),(0,u.bF)(B,{content:"批量复制",placement:"bottom"},{default:(0,u.k6)((()=>[(0,u.bF)(W,{icon:"link",class:(0,m.C4)(["header-icon",{disabled:0===_.selectedFiles.length}]),onClick:S.handleBatchCopy},null,8,["class","onClick"])])),_:1}),(0,u.bF)(B,{content:"批量删除",placement:"bottom"},{default:(0,u.k6)((()=>[(0,u.bF)(W,{icon:"trash-alt",class:(0,m.C4)(["header-icon",{disabled:0===_.selectedFiles.length}]),onClick:S.handleBatchDelete},null,8,["class","onClick"])])),_:1}),(0,u.bF)(B,{content:"黑白名单管理",placement:"bottom"},{default:(0,u.k6)((()=>[(0,u.bF)(W,{icon:"user-cog",class:"header-icon",onClick:S.handleGoToAdmin},null,8,["onClick"])])),_:1}),(0,u.bF)(B,{content:"返回上传页",placement:"bottom"},{default:(0,u.k6)((()=>[(0,u.bF)(W,{icon:"home",class:"header-icon",onClick:S.handleLogout},null,8,["onClick"])])),_:1})])])])),_:1}),(0,u.bF)(R,{class:"main-container"},{default:(0,u.k6)((()=>[(0,u.Lk)("div",v,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(S.paginatedTableData,((e,a)=>((0,u.uX)(),(0,u.Wv)(P,{key:a,class:"img-card"},{default:(0,u.k6)((()=>[(0,u.bF)(O,{modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"]),e.metadata?.FileType?.includes("video")?((0,u.uX)(),(0,u.CE)("video",{key:0,src:"/file/"+e.name,autoplay:"",muted:"",loop:"",class:"video-preview",onClick:t[2]||(t[2]=(...e)=>S.handleVideoClick&&S.handleVideoClick(...e))},null,8,y)):((0,u.uX)(),(0,u.Wv)(V,{key:1,"preview-teleported":!0,src:"/file/"+e.name,"preview-src-list":e.previewSrcList,fit:"cover",lazy:"",class:"image-preview"},null,8,["src","preview-src-list"])),(0,u.Lk)("div",w,[(0,u.Lk)("div",D,[(0,u.bF)(q,{size:"mini",type:"primary",onClick:(0,p.D$)((t=>S.handleCopy(a,e.name)),["stop"])},{default:(0,u.k6)((()=>t[5]||(t[5]=[(0,u.eW)("复制地址")]))),_:2},1032,["onClick"]),(0,u.bF)(q,{size:"mini",type:"danger",onClick:(0,p.D$)((t=>S.handleDelete(a,e.name)),["stop"])},{default:(0,u.k6)((()=>t[6]||(t[6]=[(0,u.eW)("删除")]))),_:2},1032,["onClick"])])]),(0,u.Lk)("div",T,(0,m.v_)(e.metadata?.FileName||e.name),1)])),_:2},1024)))),128))]),(0,u.Lk)("div",$,[(0,u.bF)(G,{background:"",layout:"prev, pager, next",total:S.filteredTableData.length,"page-size":_.pageSize,onCurrentChange:S.handlePageChange,"current-page":_.currentPage},null,8,["total","page-size","onCurrentChange","current-page"])])])),_:1})])),_:1})])}a(4114);var _=a(782),S={data(){return{Number:0,showLogoutButton:!1,tableData:[],search:"",currentPage:1,pageSize:15,selectedFiles:[],sortOption:"dateDesc",isUploading:!1}},computed:{...(0,_.L8)(["credentials"]),filteredTableData(){return this.tableData.filter((e=>!this.search||e.name.toLowerCase().includes(this.search.toLowerCase())||e.metadata?.FileName?.toLowerCase().includes(this.search.toLowerCase())))},paginatedTableData(){const e=this.sortData(this.filteredTableData),t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;let s=e.slice(t,a);const n=s.filter((e=>!e.metadata?.FileType?.includes("video"))).map((e=>`/file/${e.name}`));return s.forEach((e=>{e.metadata?.FileType?.includes("video")||(e.previewSrcList=n.slice(n.indexOf(`/file/${e.name}`)).concat(n.slice(0,n.indexOf(`/file/${e.name}`))))})),s},sortIcon(){return"dateDesc"===this.sortOption?"sort-amount-down":"sort-alpha-up"}},watch:{tableData:{handler(e){this.selectedFiles=e.filter((e=>e.selected))},deep:!0},sortOption(e){localStorage.setItem("sortOption",e)}},methods:{refreshDashboard(){location.reload()},async fetchWithAuth(e,t={}){this.credentials&&(t.headers={...t.headers,Authorization:`Basic ${this.credentials}`},t.credentials="include");const a=await fetch(e,t);if(401===a.status)throw this.$router.push("/adminLogin"),new Error("Unauthorized");return a},handleDelete(e,t){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.fetchWithAuth(`/api/manage/delete/${t}`,{method:"GET"}).then((e=>{if(!e.ok)return Promise.reject("请求失败");{const e=this.tableData.findIndex((e=>e.name===t));-1!==e&&this.tableData.splice(e,1)}})).then((()=>{this.updateStats(),this.$message.success("删除成功!")})).catch((()=>this.$message.error("删除失败，请检查网络连接")))})).catch((()=>this.$message.info("已取消删除")))},handleBatchDelete(){this.$confirm("此操作将永久删除选中的文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{const e=this.selectedFiles.map((e=>this.fetchWithAuth(`/api/manage/delete/${e.name}`,{method:"GET"})));Promise.all(e).then((e=>{e.forEach(((e,t)=>{if(e.ok){const e=this.tableData.findIndex((e=>e.name===this.selectedFiles[t].name));-1!==e&&this.tableData.splice(e,1)}})),this.selectedFiles=[],this.updateStats(),this.$message.success("批量删除成功!")})).catch((()=>this.$message.error("批量删除失败，请检查网络连接")))})).catch((()=>this.$message.info("已取消批量删除")))},handleBatchCopy(){const e=this.selectedFiles.map((e=>`${document.location.origin}/file/${e.name}`)).join("\n");navigator.clipboard?navigator.clipboard.writeText(e).then((()=>this.$message.success("批量复制链接成功~"))):this.copyToClipboardFallback(e)},copyToClipboardFallback(e){const t=document.createElement("textarea");document.body.appendChild(t),t.style.position="fixed",t.style.clip="rect(0 0 0 0)",t.style.top="10px",t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$message.success("批量复制链接成功~")},handleLogout(){this.$router.push("/")},handleGoToAdmin(){window.location.href="/admin-detail"},handleCopy(e,t){const a=`${document.location.origin}/file/${t}`;navigator.clipboard?navigator.clipboard.writeText(a).then((()=>this.$message.success("复制文件链接成功~"))):this.copyToClipboardFallback(a)},handlePageChange(e){this.currentPage=e},updateStats(){this.Number=this.tableData.length},sort(e){this.sortOption=e},sortData(e){return"nameAsc"===this.sortOption?e.sort(((e,t)=>e.name.localeCompare(t.name))):e.sort(((e,t)=>t.metadata.TimeStamp-e.metadata.TimeStamp))},handleVideoClick(e){const t=e.target;t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()}},mounted(){this.fetchWithAuth("/api/manage/check",{method:"GET"}).then((e=>e.text())).then((e=>"true"==e?(this.showLogoutButton=!0,this.fetchWithAuth("/api/manage/list",{method:"GET"})):"Not using basic auth."==e?this.fetchWithAuth("/api/manage/list",{method:"GET"}):Promise.reject())).then((e=>e.json())).then((e=>{this.tableData=e.map((e=>({...e,selected:!1}))),this.updateStats();const t=localStorage.getItem("sortOption");t&&(this.sortOption=t),this.sortData(this.tableData)})).catch((()=>this.$message.error("同步数据时出错，请检查网络连接")))}},x=a(1241);const W=(0,x.A)(S,[["render",L],["__scopeId","data-v-347813a0"]]);var z=W},8050:function(e,t,a){a(5331)},5385:function(e,t,a){a(5331)},9104:function(e,t,a){a(5331)},5970:function(e,t,a){a(5331)},213:function(e,t,a){a(5331),a(9104)}}]);
//# sourceMappingURL=985.57ac81cb.js.map