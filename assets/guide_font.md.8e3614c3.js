import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.7e2c98a7.js";const t="/vue2-docs/font1.png",n="/vue2-docs/font2.png",_=JSON.parse('{"title":"自定义字体","description":"","frontmatter":{},"headers":[],"relativePath":"guide/font.md","filePath":"guide/font.md"}'),l={name:"guide/font.md"},p=o('<h1 id="自定义字体" tabindex="-1">自定义字体 <sup class="pro-badge"></sup> <a class="header-anchor" href="#自定义字体" aria-label="Permalink to &quot;自定义字体 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h1><blockquote><p>用户访问使用了自定义字体的页面时，会自动下载字体文件，字体文件有大有小，所以不建议在非英文环境中使用。</p></blockquote><p>框架预设了 Digital 7 的两套字体，除此之外，你也可以通过以下方法引入你需要的自定义字体。</p><h2 id="找字体" tabindex="-1">找字体 <a class="header-anchor" href="#找字体" aria-label="Permalink to &quot;找字体&quot;">​</a></h2><p>访问 <a href="https://www.dafont.com/" target="_blank" rel="noreferrer">DaFont</a>，如果有其它字体站也可以，主要是下载 <code>.ttf</code> 格式的字体文件。</p><p><img src="'+t+'" alt=""></p><h2 id="生成字体" tabindex="-1">生成字体 <a class="header-anchor" href="#生成字体" aria-label="Permalink to &quot;生成字体&quot;">​</a></h2><blockquote><p><code>.ttf</code> 格式的字体文件不是浏览器支持的字体格式，所以需要通过 <code>.ttf</code> 生成其它格式的字体文件。</p></blockquote><p>访问 <a href="https://www.fontsquirrel.com/tools/webfont-generator" target="_blank" rel="noreferrer">Font Squirrel</a>，上传 <code>.ttf</code> 文件，并按照下面设置后，点击下载。</p><p><img src="'+n+`" alt=""></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>将上一步下载的压缩包解压并放入 <code>/src/assets/fonts/</code> 目录下，注意按文件夹区分，随后引入文件夹中的 <code>stylesheet.css</code> 即可使用，以 Digital 7 字体为例：</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../../assets/fonts/digital-7/stylesheet.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">.digital-7</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;digital-7regular&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../../assets/fonts/digital-7/stylesheet.css&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">.digital-7</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-family</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;digital-7regular&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>字体的 <code>font-family</code> 名称在 <code>stylesheet.css</code> 里查看。</p><p>另外你也可以将 <code>@import &#39;../../assets/fonts/digital-7/stylesheet.css&#39;;</code> 这句代码放到全局引入，这样所有页面就都可以通过设置 <code>font-family: &#39;digital-7regular&#39;;</code> 直接使用了。</p>`,15),c=[p];function r(i,d,h,f,u,y){return a(),e("div",null,c)}const E=s(l,[["render",r]]);export{_ as __pageData,E as default};
