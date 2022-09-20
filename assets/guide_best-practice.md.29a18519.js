import{_ as s,c as a,o as n,a as o}from"./app.265c48c2.js";const i=JSON.parse('{"title":"Best Practice","description":"","frontmatter":{},"headers":[{"level":3,"title":"Destructuring","slug":"destructuring","link":"#destructuring","children":[]}],"relativePath":"guide/best-practice.md","lastUpdated":1655859557000}'),e={name:"guide/best-practice.md"},l=o(`<h1 id="best-practice" tabindex="-1">Best Practice <a class="header-anchor" href="#best-practice" aria-hidden="true">#</a></h1><h3 id="destructuring" tabindex="-1">Destructuring <a class="header-anchor" href="#destructuring" aria-hidden="true">#</a></h3><p>Most of the functions in VueUse returns an <strong>object of refs</strong> that you can use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank" rel="noreferrer">ES6&#39;s object destructure</a> syntax to take what you need. For example:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMouse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueuse/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// &quot;x&quot; and &quot;y&quot; are refs</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMouse</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mouse </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMouse</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(mouse</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span></span>
<span class="line"></span></code></pre></div><p>If you prefer to use them as object properties style, you can unwrap the refs by using <code>reactive()</code>. For example:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reactive</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMouse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueuse/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mouse </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">useMouse</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// &quot;x&quot; and &quot;y&quot; will be auto unwrapped, no \`.value\` needed</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(mouse</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x)</span></span>
<span class="line"></span></code></pre></div>`,6),p=[l];function t(c,r,D,y,A,F){return n(),a("div",null,p)}const u=s(e,[["render",t]]);export{i as __pageData,u as default};
