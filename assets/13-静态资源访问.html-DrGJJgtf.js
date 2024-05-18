import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-GwfBMYMC.js";const p={},e=t(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>创建一个 <code>public</code> 文件夹用来存放静态资源</p><p>在 <code>main.ts</code> 文件中调用 useStaticAssets 来实现静态资源访问：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> NestFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NestExpressApplication <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/platform-express&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>NestExpressApplication<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">useStaticAssets</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> prefix<span class="token operator">:</span> <span class="token string">&#39;/static&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问"><span>访问</span></a></h2><p>在浏览器中访问 <code>localhost:3000/static/文件</code> 即可</p>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","13-静态资源访问.html.vue"]]),d=JSON.parse(`{"path":"/NestJSLearningRecord/13-%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E8%AE%BF%E9%97%AE.html","title":"静态资源访问","lang":"zh-CN","frontmatter":{"title":"静态资源访问","order":13,"date":"2024-03-05T00:00:00.000Z","category":"软件开发","tag":"Nest","cover":"/assets/images/静态资源访问.png","banner":"/assets/images/静态资源访问.png","description":"配置 创建一个 public 文件夹用来存放静态资源 在 main.ts 文件中调用 useStaticAssets 来实现静态资源访问： 访问 在浏览器中访问 localhost:3000/static/文件 即可","head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/NestJSLearningRecord/13-%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E8%AE%BF%E9%97%AE.html"}],["meta",{"property":"og:site_name","content":"茕茕の博客"}],["meta",{"property":"og:title","content":"静态资源访问"}],["meta",{"property":"og:description","content":"配置 创建一个 public 文件夹用来存放静态资源 在 main.ts 文件中调用 useStaticAssets 来实现静态资源访问： 访问 在浏览器中访问 localhost:3000/static/文件 即可"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.azhf8.top/assets/images/静态资源访问.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-18T07:39:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://blog.azhf8.top/assets/images/静态资源访问.png"}],["meta",{"name":"twitter:image:alt","content":"静态资源访问"}],["meta",{"property":"article:author","content":"茕茕"}],["meta",{"property":"article:tag","content":"Nest"}],["meta",{"property":"article:published_time","content":"2024-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-18T07:39:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"静态资源访问\\",\\"image\\":[\\"https://blog.azhf8.top/assets/images/静态资源访问.png\\"],\\"datePublished\\":\\"2024-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-18T07:39:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茕茕\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"访问","slug":"访问","link":"#访问","children":[]}],"git":{"createdTime":1715560636000,"updatedTime":1716017957000,"contributors":[{"name":"zhf521","email":"3407085928@qq.com","commits":2}]},"readingTime":{"minutes":0.4,"words":121},"filePathRelative":"NestJSLearningRecord/13-静态资源访问.md","localizedDate":"2024年3月5日","excerpt":"<h2>配置</h2>\\n<p>创建一个 <code>public</code> 文件夹用来存放静态资源</p>\\n<p>在 <code>main.ts</code> 文件中调用 useStaticAssets 来实现静态资源访问：</p>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// main.ts</span>\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> NestFactory <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'@nestjs/core'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> AppModule <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'./app.module'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> NestExpressApplication <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'@nestjs/platform-express'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">async</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">bootstrap</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> app <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> NestFactory<span class=\\"token punctuation\\">.</span><span class=\\"token generic-function\\"><span class=\\"token function\\">create</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span>NestExpressApplication<span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span>AppModule<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    app<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">useStaticAssets</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'public'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> prefix<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'/static'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">await</span> app<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">listen</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">bootstrap</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}`);export{k as comp,d as data};
