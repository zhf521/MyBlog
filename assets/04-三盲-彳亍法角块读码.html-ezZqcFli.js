import{_ as i,c as t,o as e,d as l}from"./app-CPtmI6bp.js";const a={},o=l('<p>以下打乱均采用黄顶红前的坐标打乱</p><h2 id="正常情况" tabindex="-1"><a class="header-anchor" href="#正常情况"><span>正常情况</span></a></h2><p>打乱如下：</p><p><code>R2 B2 F2 D R2 U&#39; F2 D R2 U&#39; R2 F&#39; R2 U L2 F2 D&#39; U2 B</code></p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/3x3x3BLD/彳亍法角块读码01.jpg" alt="彳亍法角块读码01" tabindex="0" loading="lazy"><figcaption>彳亍法角块读码01</figcaption></figure><ol><li>打乱完成后，先按坐标（黄顶红前）将魔方调整好</li><li>从缓冲块位置（UFR）开始读码，也就是从编码的 JKL 块的 J 开始读（缓冲块的编码不需要读出来）</li><li>J 位置是白绿橙块的橙，它的编码是 T，那么第一个编码就是 T</li><li>然后看 T 位置，是黄蓝橙块的橙，它的编码是 F，那么第二个编码就是 F</li><li>然后看 F 位置，是白红蓝块的红，它的编码是 B，那么第三个编码就是 B</li><li>然后看 B 位置，是黄橙绿块的橙，它的编码是 H，那么第四个编码就是 H</li><li>然后看 H 位置，是白橙蓝块的蓝，它的编码是 Q，那么第五个编码就是 Q</li><li>然后看 Q 位置，是白红绿块的红，它的编码是 Y，那么第六个编码就是 Y</li><li>然后看 Y 位置，是黄绿红的黄，它的编码是 J，里说明已经回到了缓冲块，我们不需要读出来</li><li>所有棱块都读到了，编码完成</li><li>最终的编码如下：<code>TF BH QY</code></li></ol><h2 id="存在小循环" tabindex="-1"><a class="header-anchor" href="#存在小循环"><span>存在小循环</span></a></h2><p>打乱如下：</p><p><code>B D&#39; L&#39; U2 L D&#39; U2 F2 D2 B2 L F2 L&#39; F2 U2 B</code></p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/3x3x3BLD/彳亍法角块读码02.jpg" alt="彳亍法角块读码02" tabindex="0" loading="lazy"><figcaption>彳亍法角块读码02</figcaption></figure><ol><li>打乱完成后，先按坐标（黄顶红前）将魔方调整好</li><li>从缓冲块块（UFR）开始读码，也就是从编码的 JKL 块的 J 开始读（缓冲块的编码不需要读出来）</li><li>J 位置是白绿橙块的白，它的编码是 R，那么第一个编码就是 R</li><li>然后看 R 位置，是黄绿红块的绿，它是我们的缓冲块（缓冲块的编码是不需要读出来的），此时读码明显没有结束，还有很多角块没有读到，此时我们需要借位</li><li>借位的原则是按色相借位，黄绿红块的绿色是“1”位置，那么我们需要借一个“1”位置的，我们首选的借位是借 GHI 位置（如果 GHI 位置已还原或已读码，则需要借其他位置），那么第二个编码就是 H</li><li>然后看 H 位置，是黄红蓝块的黄，它的编码是 A，那么第三个编码就是 A</li><li>然后看 A 位置，是白红绿块的绿，它的编码是 Z，那么第四个编码就是 Z</li><li>然后看 Z 位置，是白橙蓝块的白，它的编码是 O，那么第五个编码就是 O</li><li>然后看 O 位置，是白蓝红块的蓝，它的编码是 M，那么第六个编码就是 M</li><li>然后看 M 位置，是黄蓝橙块的黄，它的编码是 D，那么第七个编码就是 D</li><li>然后看 D 位置，是黄橙绿块的黄，它的编码是 G，那么第八个编码就是 G</li><li>此时我们发现回到了刚才借的位置（虽然不是 H，但是 GHI 在同一块上），并且最后一个是以“0”位置结束，所有角块都读到了，编码完成</li><li>最终的编码如下：<code>RH AZ OM DG</code></li></ol><h2 id="存在翻色" tabindex="-1"><a class="header-anchor" href="#存在翻色"><span>存在翻色</span></a></h2><p>打乱如下：</p><p><code>U&#39; R2 U&#39; R L&#39; U R U R F2 L2 F2 D2 R U2 R2 U2 D2 L</code></p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/3x3x3BLD/彳亍法角块读码03.jpg" alt="彳亍法角块读码03" tabindex="0" loading="lazy"><figcaption>彳亍法角块读码03</figcaption></figure><ol><li>打乱完成后，先按坐标（黄顶红前）将魔方调整好</li><li>从缓冲块位置（UR）开始读码，也就是从编码的 GH 块的 G 开始读（缓冲块的编码不需要读出来）</li><li>G 位置是黄红块的黄，它的编码是 A，那么第一个编码就是 A</li><li>然后看 A 位置，是白红块的白，它的编码是 I，那么第二个编码就是 I</li><li>然后看 I 位置，是白绿块的白，它的编码是 O，那么第三个编码就是 O</li><li>然后看 O 位置，是橙绿块的橙，它的编码是 Y，那么第四个编码就是 Y</li><li>然后看 Y 位置，是白蓝块的白，它的编码是 K，那么第五个编码就是 K</li><li>然后看 K 位置，是白橙块的橙，它的编码是 N，那么第六个编码就是 N</li><li>然后看 N 位置，是红蓝块的红，它的编码是 S，那么第七个编码就是 S</li><li>然后看 S 位置，是黄蓝块的蓝，它的编码是 D，那么第八个编码就是 D</li><li>然后看 D 位置，是黄橙块的橙，它的编码是 F，那么第九个编码就是 F</li><li>然后看 F 位置，是橙蓝块的橙，它的编码是 W，那么第十个编码就是 W</li><li>然后看 W 位置，是黄绿块的黄，它的编码是 G，这里说明已经回到了缓冲块，我们不需要读出来</li><li>所有棱块都读到了，编码完成</li><li>最终的编码如下：<code>IC FA WP SM</code></li></ol><h2 id="正常情况-1" tabindex="-1"><a class="header-anchor" href="#正常情况-1"><span>正常情况</span></a></h2><p>打乱如下：</p><p><code>F2 L2 D F2 U&#39; L2 U L2 U F2 U&#39; B D&#39; B&#39; U&#39; L2 U2 F&#39; D&#39; F&#39;</code></p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/3x3x3BLD/彳亍法角块读码04.jpg" alt="彳亍法角块读码04" tabindex="0" loading="lazy"><figcaption>彳亍法角块读码04</figcaption></figure><ol><li>打乱完成后，先按坐标（黄顶红前）将魔方调整好</li><li>从缓冲块位置（UR）开始读码，也就是从编码的 GH 块的 G 开始读（缓冲块的编码不需要读出来）</li><li>G 位置是黄红块的黄，它的编码是 A，那么第一个编码就是 A</li><li>然后看 A 位置，是白红块的白，它的编码是 I，那么第二个编码就是 I</li><li>然后看 I 位置，是白绿块的白，它的编码是 O，那么第三个编码就是 O</li><li>然后看 O 位置，是橙绿块的橙，它的编码是 Y，那么第四个编码就是 Y</li><li>然后看 Y 位置，是白蓝块的白，它的编码是 K，那么第五个编码就是 K</li><li>然后看 K 位置，是白橙块的橙，它的编码是 N，那么第六个编码就是 N</li><li>然后看 N 位置，是红蓝块的红，它的编码是 S，那么第七个编码就是 S</li><li>然后看 S 位置，是黄蓝块的蓝，它的编码是 D，那么第八个编码就是 D</li><li>然后看 D 位置，是黄橙块的橙，它的编码是 F，那么第九个编码就是 F</li><li>然后看 F 位置，是橙蓝块的橙，它的编码是 W，那么第十个编码就是 W</li><li>然后看 W 位置，是黄绿块的黄，它的编码是 G，这里说明已经回到了缓冲块，我们不需要读出来</li><li>所有棱块都读到了，编码完成</li><li>最终的编码如下：<code>CE YR NZ</code></li></ol>',21),c=[o];function n(r,p){return e(),t("div",null,c)}const d=i(a,[["render",n],["__file","04-三盲-彳亍法角块读码.html.vue"]]),g=JSON.parse(`{"path":"/3x3x3BLD/04-%E4%B8%89%E7%9B%B2-%E5%BD%B3%E4%BA%8D%E6%B3%95%E8%A7%92%E5%9D%97%E8%AF%BB%E7%A0%81.html","title":"三盲-彳亍法角块读码","lang":"zh-CN","frontmatter":{"title":"三盲-彳亍法角块读码","cover":"https://t.alcy.cc/fj?t=1721268000","order":4,"date":"2024-07-08 10:00","category":"魔方","tag":["彳亍法","三阶魔方盲拧"],"excerpt":false,"description":"以下打乱均采用黄顶红前的坐标打乱 正常情况 打乱如下： R2 B2 F2 D R2 U' F2 D R2 U' R2 F' R2 U L2 F2 D' U2 B 彳亍法角块读码01彳亍法角块读码01 打乱完成后，先按坐标（黄顶红前）将魔方调整好 从缓冲块位置（UFR）开始读码，也就是从编码的 JKL 块的 J 开始读（缓冲块的编码不需要读出来） J 位...","head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/3x3x3BLD/04-%E4%B8%89%E7%9B%B2-%E5%BD%B3%E4%BA%8D%E6%B3%95%E8%A7%92%E5%9D%97%E8%AF%BB%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"茕茕の博客"}],["meta",{"property":"og:title","content":"三盲-彳亍法角块读码"}],["meta",{"property":"og:description","content":"以下打乱均采用黄顶红前的坐标打乱 正常情况 打乱如下： R2 B2 F2 D R2 U' F2 D R2 U' R2 F' R2 U L2 F2 D' U2 B 彳亍法角块读码01彳亍法角块读码01 打乱完成后，先按坐标（黄顶红前）将魔方调整好 从缓冲块位置（UFR）开始读码，也就是从编码的 JKL 块的 J 开始读（缓冲块的编码不需要读出来） J 位..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://t.alcy.cc/fj?t=1721268000"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-14T15:02:24.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://t.alcy.cc/fj?t=1721268000"}],["meta",{"name":"twitter:image:alt","content":"三盲-彳亍法角块读码"}],["meta",{"property":"article:author","content":"茕茕"}],["meta",{"property":"article:tag","content":"彳亍法"}],["meta",{"property":"article:tag","content":"三阶魔方盲拧"}],["meta",{"property":"article:published_time","content":"2024-07-08T10:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-14T15:02:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三盲-彳亍法角块读码\\",\\"image\\":[\\"https://zhf-picture.oss-cn-qingdao.aliyuncs.com/3x3x3BLD/彳亍法角块读码01.jpg\\",\\"https://zhf-picture.oss-cn-qingdao.aliyuncs.com/3x3x3BLD/彳亍法角块读码02.jpg\\",\\"https://zhf-picture.oss-cn-qingdao.aliyuncs.com/3x3x3BLD/彳亍法角块读码03.jpg\\",\\"https://zhf-picture.oss-cn-qingdao.aliyuncs.com/3x3x3BLD/彳亍法角块读码04.jpg\\"],\\"datePublished\\":\\"2024-07-08T10:00:00.000Z\\",\\"dateModified\\":\\"2024-08-14T15:02:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茕茕\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"正常情况","slug":"正常情况","link":"#正常情况","children":[]},{"level":2,"title":"存在小循环","slug":"存在小循环","link":"#存在小循环","children":[]},{"level":2,"title":"存在翻色","slug":"存在翻色","link":"#存在翻色","children":[]},{"level":2,"title":"正常情况","slug":"正常情况-1","link":"#正常情况-1","children":[]}],"git":{"createdTime":1719450400000,"updatedTime":1723647744000,"contributors":[{"name":"zhf521","email":"3407085928@qq.com","commits":7}]},"readingTime":{"minutes":6.1,"words":1831},"filePathRelative":"3x3x3BLD/04-三盲-彳亍法角块读码.md","localizedDate":"2024年7月8日","excerpt":"","autoDesc":true}`);export{d as comp,g as data};
