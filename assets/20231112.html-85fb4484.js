const n=JSON.parse('{"key":"v-3c68f4d4","path":"/essay/2023/20231112.html","title":"HashMap 源码分析","lang":"zh-CN","frontmatter":{"title":"HashMap 源码分析","isOriginal":true,"category":["随笔"],"tag":["Java 集合"],"comment":true,"description":"put 方法 HashMap put 方法流程图 public V put(K key, V value) { // 根据 key 的 hashCode 计算出对应的 hash 值，带入 putVal 方法 return putVal(hash(key), key, value, false, true); } /** * 扰动函数，减少 hash 碰撞 */ static final int hash(Object key) { int h; // ^：按位异或（不同为 1，相同为 0） // &gt;&gt;&gt;：无符号右移，忽略符号位，空位补 0 return (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16); } final V putVal(int hash, K key, V value, boolean onlyIfAbsent, boolean evict) { Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; p; int n, i; // 数组为空吗？ if ((tab = table) == null || (n = tab.length) == 0) // 扩容 n = (tab = resize()).length; // 通过公式 (n - 1) &amp; hash 计算要存放的元素对应的数组下标 if ((p = tab[i = (n - 1) &amp; hash]) == null) // 若该下标位置没有元素，则将该元素构造成节点，存入该数组下标位置 tab[i] = newNode(hash, key, value, null); else { // 该下标位置有元素 Node&lt;K,V&gt; e; K k; // 如果待存放元素与下标位置元素的 key 相同，则直接覆盖该位置的 value 值 if (p.hash == hash &amp;&amp; ((k = p.key) == key || (key != null &amp;&amp; key.equals(k)))) e = p; // 如果下标位置的元素是一棵红黑树，则将该元素加入红黑树 else if (p instanceof TreeNode) e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value); // 如果下标位置的元素是一个链表 else { // 遍历链表 for (int binCount = 0; ; ++binCount) { if ((e = p.next) == null) { // 如果后继节点为空，则将元素构造成节点，加入链表的尾部 p.next = newNode(hash, key, value, null); // 当链表长度 &gt; 8 时，考虑是否要将链表转化为红黑树，以提高元素查找效率 if (binCount &gt;= TREEIFY_THRESHOLD - 1) // -1 for 1st treeifyBin(tab, hash); break; } // 如果待存放元素与后继节点的 key 相同，则直接覆盖后继节点的 value 值 if (e.hash == hash &amp;&amp; ((k = e.key) == key || (key != null &amp;&amp; key.equals(k)))) break; // 当前指向后继节点 p = e; } } if (e != null) { // existing mapping for key V oldValue = e.value; if (!onlyIfAbsent || oldValue == null) e.value = value; afterNodeAccess(e); return oldValue; } } ++modCount; // size 自增后，若 &gt; 阈值，则扩容 if (++size &gt; threshold) resize(); afterNodeInsertion(evict); return null; }","head":[["meta",{"property":"og:url","content":"https://cpgege.gitee.io/essay/2023/20231112.html"}],["meta",{"property":"og:site_name","content":"BroNotes(学长笔记)"}],["meta",{"property":"og:title","content":"HashMap 源码分析"}],["meta",{"property":"og:description","content":"put 方法 HashMap put 方法流程图 public V put(K key, V value) { // 根据 key 的 hashCode 计算出对应的 hash 值，带入 putVal 方法 return putVal(hash(key), key, value, false, true); } /** * 扰动函数，减少 hash 碰撞 */ static final int hash(Object key) { int h; // ^：按位异或（不同为 1，相同为 0） // &gt;&gt;&gt;：无符号右移，忽略符号位，空位补 0 return (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16); } final V putVal(int hash, K key, V value, boolean onlyIfAbsent, boolean evict) { Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; p; int n, i; // 数组为空吗？ if ((tab = table) == null || (n = tab.length) == 0) // 扩容 n = (tab = resize()).length; // 通过公式 (n - 1) &amp; hash 计算要存放的元素对应的数组下标 if ((p = tab[i = (n - 1) &amp; hash]) == null) // 若该下标位置没有元素，则将该元素构造成节点，存入该数组下标位置 tab[i] = newNode(hash, key, value, null); else { // 该下标位置有元素 Node&lt;K,V&gt; e; K k; // 如果待存放元素与下标位置元素的 key 相同，则直接覆盖该位置的 value 值 if (p.hash == hash &amp;&amp; ((k = p.key) == key || (key != null &amp;&amp; key.equals(k)))) e = p; // 如果下标位置的元素是一棵红黑树，则将该元素加入红黑树 else if (p instanceof TreeNode) e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value); // 如果下标位置的元素是一个链表 else { // 遍历链表 for (int binCount = 0; ; ++binCount) { if ((e = p.next) == null) { // 如果后继节点为空，则将元素构造成节点，加入链表的尾部 p.next = newNode(hash, key, value, null); // 当链表长度 &gt; 8 时，考虑是否要将链表转化为红黑树，以提高元素查找效率 if (binCount &gt;= TREEIFY_THRESHOLD - 1) // -1 for 1st treeifyBin(tab, hash); break; } // 如果待存放元素与后继节点的 key 相同，则直接覆盖后继节点的 value 值 if (e.hash == hash &amp;&amp; ((k = e.key) == key || (key != null &amp;&amp; key.equals(k)))) break; // 当前指向后继节点 p = e; } } if (e != null) { // existing mapping for key V oldValue = e.value; if (!onlyIfAbsent || oldValue == null) e.value = value; afterNodeAccess(e); return oldValue; } } ++modCount; // size 自增后，若 &gt; 阈值，则扩容 if (++size &gt; threshold) resize(); afterNodeInsertion(evict); return null; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cpgege.gitee.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-14T13:48:31.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"HashMap 源码分析"}],["meta",{"property":"article:author","content":"piaolingluo"}],["meta",{"property":"article:tag","content":"Java 集合"}],["meta",{"property":"article:modified_time","content":"2023-11-14T13:48:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap 源码分析\\",\\"image\\":[\\"https://cpgege.gitee.io/\\"],\\"dateModified\\":\\"2023-11-14T13:48:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"piaolingluo\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"put 方法","slug":"put-方法","link":"#put-方法","children":[]}],"git":{"createdTime":1699804416000,"updatedTime":1699969711000,"contributors":[{"name":"gechenpeng","email":"731269319@qq.com","commits":2}]},"readingTime":{"minutes":1.78,"words":534},"filePathRelative":"essay/2023/20231112.md","localizedDate":"2023年11月12日","excerpt":"<h2> put 方法</h2>\\n<figure><figcaption>HashMap put 方法流程图</figcaption></figure>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">V</span> <span class=\\"token function\\">put</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">K</span> key<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">V</span> value<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 根据 key 的 hashCode 计算出对应的 hash 值，带入 putVal 方法</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">putVal</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">hash</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">,</span> value<span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token doc-comment comment\\">/**\\n * 扰动函数，减少 hash 碰撞\\n */</span>\\n<span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">hash</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Object</span> key<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> h<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// ^：按位异或（不同为 1，相同为 0）</span>\\n    <span class=\\"token comment\\">// &gt;&gt;&gt;：无符号右移，忽略符号位，空位补 0</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>key <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">?</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span>h <span class=\\"token operator\\">=</span> key<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">hashCode</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">^</span> <span class=\\"token punctuation\\">(</span>h <span class=\\"token operator\\">&gt;&gt;&gt;</span> <span class=\\"token number\\">16</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">V</span> <span class=\\"token function\\">putVal</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> hash<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">K</span> key<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">V</span> value<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">boolean</span> onlyIfAbsent<span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token keyword\\">boolean</span> evict<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">Node</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">V</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> tab<span class=\\"token punctuation\\">;</span> <span class=\\"token class-name\\">Node</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">V</span><span class=\\"token punctuation\\">&gt;</span></span> p<span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">int</span> n<span class=\\"token punctuation\\">,</span> i<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 数组为空吗？</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>tab <span class=\\"token operator\\">=</span> table<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">||</span> <span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">=</span> tab<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\">// 扩容</span>\\n        n <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>tab <span class=\\"token operator\\">=</span> <span class=\\"token function\\">resize</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 通过公式 (n - 1) &amp; hash 计算要存放的元素对应的数组下标</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>p <span class=\\"token operator\\">=</span> tab<span class=\\"token punctuation\\">[</span>i <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&amp;</span> hash<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\">// 若该下标位置没有元素，则将该元素构造成节点，存入该数组下标位置</span>\\n        tab<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">newNode</span><span class=\\"token punctuation\\">(</span>hash<span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">,</span> value<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 该下标位置有元素</span>\\n        <span class=\\"token class-name\\">Node</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">V</span><span class=\\"token punctuation\\">&gt;</span></span> e<span class=\\"token punctuation\\">;</span> <span class=\\"token class-name\\">K</span> k<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 如果待存放元素与下标位置元素的 key 相同，则直接覆盖该位置的 value 值</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>p<span class=\\"token punctuation\\">.</span>hash <span class=\\"token operator\\">==</span> hash <span class=\\"token operator\\">&amp;&amp;</span>\\n            <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>k <span class=\\"token operator\\">=</span> p<span class=\\"token punctuation\\">.</span>key<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> key <span class=\\"token operator\\">||</span> <span class=\\"token punctuation\\">(</span>key <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">&amp;&amp;</span> key<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>k<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n            e <span class=\\"token operator\\">=</span> p<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 如果下标位置的元素是一棵红黑树，则将该元素加入红黑树</span>\\n        <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>p <span class=\\"token keyword\\">instanceof</span> <span class=\\"token class-name\\">TreeNode</span><span class=\\"token punctuation\\">)</span>\\n            e <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">TreeNode</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">V</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">)</span>p<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">putTreeVal</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">,</span> tab<span class=\\"token punctuation\\">,</span> hash<span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">,</span> value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 如果下标位置的元素是一个链表</span>\\n        <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token comment\\">// 遍历链表</span>\\n            <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> binCount <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">;</span> <span class=\\"token operator\\">++</span>binCount<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>e <span class=\\"token operator\\">=</span> p<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token comment\\">// 如果后继节点为空，则将元素构造成节点，加入链表的尾部</span>\\n                    p<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> <span class=\\"token function\\">newNode</span><span class=\\"token punctuation\\">(</span>hash<span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">,</span> value<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token comment\\">// 当链表长度 &gt; 8 时，考虑是否要将链表转化为红黑树，以提高元素查找效率</span>\\n                    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>binCount <span class=\\"token operator\\">&gt;=</span> <span class=\\"token constant\\">TREEIFY_THRESHOLD</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// -1 for 1st</span>\\n                        <span class=\\"token function\\">treeifyBin</span><span class=\\"token punctuation\\">(</span>tab<span class=\\"token punctuation\\">,</span> hash<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token comment\\">// 如果待存放元素与后继节点的 key 相同，则直接覆盖后继节点的 value 值</span>\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>e<span class=\\"token punctuation\\">.</span>hash <span class=\\"token operator\\">==</span> hash <span class=\\"token operator\\">&amp;&amp;</span>\\n                    <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>k <span class=\\"token operator\\">=</span> e<span class=\\"token punctuation\\">.</span>key<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> key <span class=\\"token operator\\">||</span> <span class=\\"token punctuation\\">(</span>key <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">&amp;&amp;</span> key<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>k<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n                    <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token comment\\">// 当前指向后继节点</span>\\n                p <span class=\\"token operator\\">=</span> e<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>e <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">// existing mapping for key</span>\\n            <span class=\\"token class-name\\">V</span> oldValue <span class=\\"token operator\\">=</span> e<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>onlyIfAbsent <span class=\\"token operator\\">||</span> oldValue <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span>\\n                e<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> value<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token function\\">afterNodeAccess</span><span class=\\"token punctuation\\">(</span>e<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">return</span> oldValue<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token operator\\">++</span>modCount<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// size 自增后，若 &gt; 阈值，则扩容</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">++</span>size <span class=\\"token operator\\">&gt;</span> threshold<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token function\\">resize</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">afterNodeInsertion</span><span class=\\"token punctuation\\">(</span>evict<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
