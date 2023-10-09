import{_ as t,o,c as a,k as e,a as s}from"./chunks/framework.7e2c98a7.js";const b=JSON.parse('{"title":"错误日志","description":"","frontmatter":{},"headers":[],"relativePath":"guide/bug.md","filePath":"guide/bug.md"}'),r={name:"guide/bug.md"},c=e("h1",{id:"错误日志",tabindex:"-1"},[s("错误日志 "),e("sup",{class:"pro-badge"}),s(),e("a",{class:"header-anchor",href:"#错误日志","aria-label":'Permalink to "错误日志 <sup class="pro-badge" />"'},"​")],-1),n=e("p",null,[s("在配置里开启错误日志后，需要去 "),e("code",null,"/src/util/error.log.js"),s(" 文件里编写业务代码。框架为方便演示，将错误日志记录在 "),e("code",null,"sessionStorage"),s(" 里，开发者需要根据实际业务情况修改代码，例如将错误日志进行上报，或者增加上报信息，记录用户账号、token等数据。")],-1),l=e("p",null,[s("由于开启错误日志监控后，所有的 js 错误都不会在控制台里显示，所以开发环境下即使开启错误日志也不会启用，如果需要在开发环境下测试，可在 "),e("code",null,"/src/util/error.log.js"),s(" 里自行处理。")],-1),d=[c,n,l];function i(u,_,p,g,h,m){return o(),a("div",null,d)}const k=t(r,[["render",i]]);export{b as __pageData,k as default};