"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[391],{2391:function(s,e,t){t.r(e),t.d(e,{default:function(){return I}});var n=t(6768),a=t(4232),i=t(5130);const l=s=>((0,n.Qi)("data-v-54d5a4c0"),s=s(),(0,n.jt)(),s),r={class:"login-container"},o=l((()=>(0,n.Lk)("h1",null,"Login",-1)));function u(s,e,t,l,u,g){const d=(0,n.g2)("el-input"),h=(0,n.g2)("el-button");return(0,n.uX)(),(0,n.CE)("div",{class:"login",style:(0,a.Tr)(g.backgroundImg)},[(0,n.Lk)("div",r,[o,(0,n.bF)(d,{class:"password-input",modelValue:u.password,"onUpdate:modelValue":e[0]||(e[0]=s=>u.password=s),placeholder:"输入认证码，若未设置留空即可~",type:"password","show-password":"",onKeyup:(0,i.jR)(g.login,["enter","native"])},null,8,["modelValue","onKeyup"]),(0,n.bF)(h,{class:"submit",type:"primary",onClick:g.login},{default:(0,n.k6)((()=>[(0,n.eW)("submit")])),_:1},8,["onClick"])])],4)}t(4114);var g=t(4570),d=t.n(g),h=t(4373),p=t(782),c={data(){return{password:"",writtenPass:"",bingWallPaperIndex:0,customWallPaperIndex:0}},computed:{...(0,p.L8)(["userConfig","bingWallPapers"]),backgroundImg(){let s="";return s="bing"===this.userConfig?.loginBkImg?`url(${this.bingWallPapers[this.bingWallPaperIndex]?.url})`:this.userConfig?.loginBkImg.length>0?`url(${this.userConfig.loginBkImg[this.customWallPaperIndex]})`:"url(https://imgbed.sanyue.site/file/0dbd5add3605a0b2e8994.jpg)",{backgroundImage:s}}},mounted(){"bing"===this.userConfig?.loginBkImg?(this.$store.dispatch("fetchBingWallPapers"),setInterval((()=>{this.bingWallPaperIndex=(this.bingWallPaperIndex+1)%this.bingWallPapers.length}),3e3)):this.userConfig?.loginBkImg.length>1&&setInterval((()=>{this.customWallPaperIndex=(this.customWallPaperIndex+1)%this.userConfig.loginBkImg.length}),3e3)},methods:{login(){""===this.password?this.writtenPass="unset":this.writtenPass=this.password,h.A.post("/login",{authCode:this.password}).then((s=>{200===s.status?(d().set("authCode",this.writtenPass,"14d"),this.$router.push("/"),this.$message.success("登录成功~")):this.$message.error("登录失败，请检查认证码是否正确~")})).catch((s=>{this.$message.error("登录失败，请检查认证码是否正确~")}))}}},m=t(1241);const b=(0,m.A)(c,[["render",u],["__scopeId","data-v-54d5a4c0"]]);var I=b}}]);
//# sourceMappingURL=391.d5b751e3.js.map