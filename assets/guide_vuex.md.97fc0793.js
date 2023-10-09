import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.7e2c98a7.js";const u=JSON.parse('{"title":"Vuex","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vuex.md","filePath":"guide/vuex.md"}'),p={name:"guide/vuex.md"},l=e(`<h1 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;Vuex&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>Vuex 同样实现了自动注册，开发只需关注 <code>./store/modules/</code> 文件夹里的文件即可，请根据模块区分文件。</p><p>新建模板：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// example.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">getters</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">actions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mutations</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    namespaced: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    state,</span></span>
<span class="line"><span style="color:#E1E4E8;">    actions,</span></span>
<span class="line"><span style="color:#E1E4E8;">    getters,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mutations</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// example.js</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">getters</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">actions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mutations</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    namespaced: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    state,</span></span>
<span class="line"><span style="color:#24292E;">    actions,</span></span>
<span class="line"><span style="color:#24292E;">    getters,</span></span>
<span class="line"><span style="color:#24292E;">    mutations</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>文件默认开启命名空间，文件名会默认注册为模块名，使用方法：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.state.example.xxx;</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.getters[</span><span style="color:#9ECBFF;">&#39;example/xxx&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;example/xxx&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;example/xxx&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.state.example.xxx;</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.getters[</span><span style="color:#032F62;">&#39;example/xxx&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.</span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;example/xxx&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;example/xxx&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="settings" tabindex="-1">settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;settings&quot;">​</a></h2><p>负责存放配置相关数据，不建议在该文件进行二次开发。</p><h2 id="keepalive" tabindex="-1">keepAlive <a class="header-anchor" href="#keepalive" aria-label="Permalink to &quot;keepAlive&quot;">​</a></h2><p>负责记录页面缓存的组件 <code>name</code> 名，不建议在该文件进行二次开发。</p><h2 id="menu" tabindex="-1">menu <a class="header-anchor" href="#menu" aria-label="Permalink to &quot;menu&quot;">​</a></h2><p>负责生成导航菜单的路由数据，不建议在该文件进行二次开发。</p><h2 id="tabbar" tabindex="-1">tabbar <a class="header-anchor" href="#tabbar" aria-label="Permalink to &quot;tabbar&quot;">​</a></h2><p>负责记录标签栏状态，不建议在该文件进行二次开发。</p><p>当配置开启标签栏功能时，页面组件的 <code>name</code> 会在打开页面时自动加入缓存列表，如果页面无需缓存，则不设置 <code>name</code> 即可，注意，是页面组件的 <code>name</code> ，不是路由的 <code>name</code> 。</p><p>固定的标签会将数据存放到 <code>localStorage</code> 里。</p><h2 id="user" tabindex="-1">user <a class="header-anchor" href="#user" aria-label="Permalink to &quot;user&quot;">​</a></h2><p>负责实现用户的登录、登出，以及用户信息处理。</p><p>这个文件是需要二次开发的，其中 <code>getters.isLogin</code>、<code>dispatch(&#39;login&#39;)</code>、<code>commit(&#39;setUserData&#39;)</code>、<code>commit(&#39;removeUserData&#39;)</code> 为必须修改的地方，主要负责校验是否登录、登录操作、登录成功记录用户信息、登出清除用户信息。</p><p>按框架的设计，用户登录时不获取权限数据，登录成功后通过 <code>dispatch(&#39;getPermissions&#39;)</code> 获取用户权限数据，如果你的系统是在登录时就能拿到用户权限数据，那在这个方法里可以只保留一句 <code>resolve(permissions)</code> ，只需将权限数据 resolve 出去即可。</p>`,21),o=[l];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const x=s(p,[["render",t]]);export{u as __pageData,x as default};
