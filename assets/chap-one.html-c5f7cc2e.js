import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as l,c as i,d as n,e as s,b as a,f as p}from"./app-aa9f0189.js";const u="/assets/简单工厂模式UML类图-49b4db7d.png",r={},d=p('<h2 id="一、巴扎黑的日常" tabindex="-1"><a class="header-anchor" href="#一、巴扎黑的日常" aria-hidden="true">#</a> 一、巴扎黑的日常</h2><p>一天，巴扎黑从睡梦中惊醒<br> 随手拿起边上的手机<br> 。。。呀。。。都11点了。。。肚子好饿 +_+<br> 巴扎黑来到楼下一家餐厅<br> 服务员：您要来份什么？<br> 巴扎黑：鱼丸粗面！<br> 服务员：我们这儿不卖鱼丸粗面！<br> 巴扎黑：。。。那来份新疆大盘鸡。<br> 服务员：我们这儿做大盘鸡的师傅回家休息了。<br> 巴扎黑：那给我来份红烧肉吧！<br> 服务员：好嘞，你先坐会儿，我让师傅马上给你做。<br> 巴扎黑找了个位置坐下，掏出手机，悠闲的刷起了微博。。。<br> 服务员随即朝向后厨：“刘师傅，做一份你最拿手的红烧肉”。<br> 刘师傅听到后立马准备食材，一会儿工夫，香喷喷的红烧肉就做好了<br> 巴扎黑美滋滋的吃了起来，心想：“这是哪位师傅做的，这么好吃，是怎么做出来的呢。。。不管了，先吃吧。”</p><p>吃饱后，巴扎黑闲逛，路过一家理发店，门口LED屏幕上正打着半价优惠的活动，巴扎黑走了进去，服务员热情的迎来<br> 服务员：先生，要理发吗？<br> 巴扎黑：嗯嗯，给我理个帅气的发型！<br> 服务员：有认识的理发师吗？<br> 巴扎黑：没有！<br> 服务员：你要剪什么价位的？我们这儿有28的，58的，128的。<br> 巴扎黑：128的吧！<br> 服务员：好，你先坐，我马上安排。<br> 巴扎黑刚坐下，一位身着小西装的小伙迎面走来，胸前的别章上印着“总监”。<br> 在他的修剪下，巴扎黑原本乱糟糟的头发瞬间精神了。<br> “果然128剪出来的效果就是不一样！”巴扎黑心里想着，对着镜子，嘴角微微的上扬了一下。</p><h2 id="二、简单工厂模式" tabindex="-1"><a class="header-anchor" href="#二、简单工厂模式" aria-hidden="true">#</a> 二、简单工厂模式</h2><h3 id="_2-1-简单工厂模式介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-简单工厂模式介绍" aria-hidden="true">#</a> 2.1 简单工厂模式介绍</h3><blockquote><p>简单工厂模式(Simple Factory Pattern)：又称为静态工厂方法(Static Factory Method)模式，它属于创建型模式。简单工厂模式的实质是由一个工厂类根据传入的参数，动态决定应该创建哪一个产品类（这些产品类继承或实现一个父类或接口）的实例。</p></blockquote><h3 id="_2-2-简单工厂模式的角色" tabindex="-1"><a class="header-anchor" href="#_2-2-简单工厂模式的角色" aria-hidden="true">#</a> 2.2 简单工厂模式的角色</h3><h4 id="工厂类-creator-角色" tabindex="-1"><a class="header-anchor" href="#工厂类-creator-角色" aria-hidden="true">#</a> 工厂类（Creator）角色：</h4><blockquote><p>简单工厂模式的核心，它负责实现创建所有实例的内部逻辑。工厂类提供静态方法，可以根据传入的参数，创建所需的产品对象。</p></blockquote><h4 id="抽象产品-product-角色" tabindex="-1"><a class="header-anchor" href="#抽象产品-product-角色" aria-hidden="true">#</a> 抽象产品（Product）角色：</h4><blockquote><p>简单工厂模式所创建的所有对象的父类，它负责描述所有实例所共有的公共接口。可以是抽象类或接口。</p></blockquote><h4 id="具体产品-concrete-product-角色" tabindex="-1"><a class="header-anchor" href="#具体产品-concrete-product-角色" aria-hidden="true">#</a> 具体产品（Concrete Product）角色：</h4><blockquote><p>是简单工厂模式的创建目标，所有创建的对象都是充当这个角色的某个具体类的实例。</p></blockquote><h3 id="_2-3-简单工厂模式的-uml-类图" tabindex="-1"><a class="header-anchor" href="#_2-3-简单工厂模式的-uml-类图" aria-hidden="true">#</a> 2.3 简单工厂模式的 UML 类图</h3><figure><img src="'+u+`" alt="简单工厂模式 UML 类图" tabindex="0" loading="lazy"><figcaption>简单工厂模式 UML 类图</figcaption></figure><h2 id="三、从日常生活看工厂模式" tabindex="-1"><a class="header-anchor" href="#三、从日常生活看工厂模式" aria-hidden="true">#</a> 三、从日常生活看工厂模式</h2><p>就拿巴扎黑理发这件事来说，服务员就充当了工厂类，她根据巴扎黑想要剪的价位来安排一位合适的理发师。理发师这个称谓就相当于抽象产品，它描述了所有理发师都具备的能力——理发。服务员安排的这位总监就相当于具体产品。<br> 简单工厂模式中，对于某个具体业务而言，client 无需知道由谁来处理这个业务，怎么处理，它只需告诉工厂类这个业务的类型，并调用工厂类提供的静态方法拿到一个具体的产品，然后调用产品的业务方法来完成业务。就像巴扎黑去餐厅吃饭，他只要告诉服务员他想吃什么，然后自然会有一位师傅帮他做好，自己根本就不需要关心这个师傅是谁以及怎么做出这道美味菜肴。这样看来，吃饭这件事也不麻烦。<br> 但是设想一下，巴扎黑很早就起床了，他想自己做菜来犒劳自己，他有充足的时间来准备。首先他得考虑想要吃什么，于是有了下面的思考：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 伪代码</span>
<span class="token function">prepareToEat</span><span class="token punctuation">(</span>food<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>food <span class="token operator">==</span> <span class="token string">&quot;鱼丸粗面&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        去买鱼丸和粗面<span class="token punctuation">;</span>
        放在锅里烧<span class="token punctuation">;</span> 
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>   
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>food <span class="token operator">==</span> <span class="token string">&quot;大盘鸡&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        去菜场挑只鸡让大妈杀了，剁好装袋<span class="token punctuation">;</span>
        买洋葱和其他配料<span class="token punctuation">;</span>
        把鸡肉浸水洗净<span class="token punctuation">;</span>
        洋葱切好<span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>food <span class="token operator">==</span> <span class="token string">&quot;红烧肉&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        去菜场挑一块五花肉<span class="token punctuation">;</span> <span class="token comment">// 一定要买带肥肉的，不然烧出来很难吃</span>
        切块洗净放料酒浸泡<span class="token punctuation">;</span>
        锅里放油煸炒肉块<span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要想吃点好的，脑袋里还得装一本厚厚的菜谱，想要尝尝新菜，还得不断丰富大脑里的菜谱，着实麻烦。有时候脑袋不够使，还会把菜谱记错，倒不如直接去餐厅点菜吃来的省事儿。</p><h2 id="四、拿具体例子说话" tabindex="-1"><a class="header-anchor" href="#四、拿具体例子说话" aria-hidden="true">#</a> 四、拿具体例子说话</h2><h3 id="_4-1-场景" tabindex="-1"><a class="header-anchor" href="#_4-1-场景" aria-hidden="true">#</a> 4.1 场景</h3><blockquote><p>实现一个简单的翻译功能，要求：能够将一段中文文本翻译成不同的语言版本</p></blockquote><h3 id="_4-2-代码" tabindex="-1"><a class="header-anchor" href="#_4-2-代码" aria-hidden="true">#</a> 4.2 代码</h3><p>要实现翻译，我们得有一个翻译器。我们先定义一个抽象的翻译器(AbstractTranslator)，用于描述所有翻译器都具备的功能——翻译(translate)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 翻译器抽象类
 * 抽象产品，定义产品必须实现的方法
 *
 * <span class="token keyword">@author</span> piaolingluo
 * <span class="token keyword">@date</span> 2017-11-08
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractTranslator</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">protected</span> <span class="token class-name">BaiduConfig</span> baiduConfig<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 翻译
     *
     * <span class="token keyword">@param</span> <span class="token parameter">content</span> 待翻译的内容
     * <span class="token keyword">@return</span> 翻译的得到的内容
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再定义一个具体的翻译器——英语翻译器(EnglishTranslator)，继承AbstractTranslator，它能将一段中文翻译成英文</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 英语翻译器
 * 具体产品
 *
 * <span class="token keyword">@author</span> piaolingluo
 * <span class="token keyword">@date</span> 2017-11-08
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnglishTranslator</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTranslator</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Gson</span> gson<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TransApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TransApi</span><span class="token punctuation">(</span>baiduConfig<span class="token punctuation">.</span><span class="token function">getAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> baiduConfig<span class="token punctuation">.</span><span class="token function">getSecurityKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> response <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getTransResult</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TransResult</span> result <span class="token operator">=</span> gson<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token class-name">TransResult</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">getTransResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再定义一个具体的翻译器——日语翻译器(JapaneseTranslator)，继承AbstractTranslator，它能将一段中文翻译成日语</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 日语翻译器
 * 具体产品
 *
 * <span class="token keyword">@author</span> piaolingluo
 * <span class="token keyword">@date</span> 2017-11-08
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JapaneseTranslator</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTranslator</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Gson</span> gson<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TransApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TransApi</span><span class="token punctuation">(</span>baiduConfig<span class="token punctuation">.</span><span class="token function">getAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> baiduConfig<span class="token punctuation">.</span><span class="token function">getSecurityKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> response <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getTransResult</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TransResult</span> result <span class="token operator">=</span> gson<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token class-name">TransResult</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">getTransResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，我们定义系统能能翻译的语言有哪些，如果后续支持新的语言，可以追加</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 语言枚举
 * 定义系统能翻译的语言
 *
 * <span class="token keyword">@author</span> piaolingluo
 * <span class="token keyword">@date</span> 2017-11-08
 */</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">LanguageEnum</span> <span class="token punctuation">{</span>

    <span class="token function">CHINESE</span><span class="token punctuation">(</span><span class="token string">&quot;chinese&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中文&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">ENGLISH</span><span class="token punctuation">(</span><span class="token string">&quot;english&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;英语&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">JAPANESE</span><span class="token punctuation">(</span><span class="token string">&quot;japanese&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;日语&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token class-name">LanguageEnum</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">LanguageEnum</span> <span class="token function">valueOfLanguage</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>languageEnum <span class="token operator">-&gt;</span> languageEnum<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，比较重要的一点是为不同的语言指定各自的实例，后续如果支持新的语言，可以在此扩展</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 语言类型与翻译器实例的映射
 *
 * <span class="token keyword">@author</span> piaolingluo
 * <span class="token keyword">@date</span> 2017-11-08
 */</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">TranslatorEnum</span> <span class="token punctuation">{</span>

    <span class="token function">ENGLISH_TRANSLATOR</span><span class="token punctuation">(</span><span class="token class-name">LanguageEnum</span><span class="token punctuation">.</span><span class="token constant">ENGLISH</span><span class="token punctuation">,</span> <span class="token string">&quot;englishTranslator&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">JAPANESE_TRANSLATOR</span><span class="token punctuation">(</span><span class="token class-name">LanguageEnum</span><span class="token punctuation">.</span><span class="token constant">JAPANESE</span><span class="token punctuation">,</span> <span class="token string">&quot;japaneseTranslator&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 语言
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">LanguageEnum</span> language<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 具体翻译器处理bean的名字
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> translatorName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最最重要的就是编写这个工厂类(Factory)，初始化的时候，将所有的翻译器按各自能处理的语言类型存放在 TRANSLATOR_MAP 里，并提供一个静态方法，能够根据不同的语言拿到具体的翻译器</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 工厂
 *
 * <span class="token keyword">@author</span> piaolingluo
 * <span class="token keyword">@date</span> 2017-11-08
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Factory</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LanguageEnum</span><span class="token punctuation">,</span> <span class="token class-name">AbstractTranslator</span><span class="token punctuation">&gt;</span></span> <span class="token constant">TRANSLATOR_MAP</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">AbstractTranslator</span><span class="token punctuation">&gt;</span></span> beanMap <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBeansOfType</span><span class="token punctuation">(</span><span class="token class-name">AbstractTranslator</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token class-name">TranslatorEnum</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>translatorEnum <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token class-name">AbstractTranslator</span> translator <span class="token operator">=</span> beanMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>translatorEnum<span class="token punctuation">.</span><span class="token function">getTranslatorName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> translator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token constant">TRANSLATOR_MAP</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>translatorEnum<span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> translator<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据语言枚举拿到指定语言的翻译器
     *
     * <span class="token keyword">@param</span> <span class="token parameter">languageEnum</span> 语言枚举
     * <span class="token keyword">@return</span> 指定语言的翻译器
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span> 当拿不到翻译器时，抛出此异常
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AbstractTranslator</span> <span class="token function">getTranslator</span><span class="token punctuation">(</span><span class="token class-name">LanguageEnum</span> languageEnum<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">AbstractTranslator</span> translator <span class="token operator">=</span> <span class="token constant">TRANSLATOR_MAP</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>languageEnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> translator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;无法翻译成这种语言&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> translator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据语言编码拿到指定语言的翻译器
     *
     * <span class="token keyword">@param</span> <span class="token parameter">languageCode</span> 语言编码
     * <span class="token keyword">@return</span> 指定语言的翻译器
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span> 当拿不到翻译器时，抛出此异常
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AbstractTranslator</span> <span class="token function">getTranslator</span><span class="token punctuation">(</span><span class="token class-name">String</span> languageCode<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getTranslator</span><span class="token punctuation">(</span><span class="token class-name">LanguageEnum</span><span class="token punctuation">.</span><span class="token function">valueOfLanguage</span><span class="token punctuation">(</span>languageCode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们写个 TranslateController ，接收指定的语言编码和待翻译的文本，返回翻译后的文本</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 翻译服务
 *
 * <span class="token keyword">@author</span> piaolingluo
 * <span class="token keyword">@date</span> 2017-11-08
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;translate&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TranslateController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{code}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> code<span class="token punctuation">,</span>
                                    <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span> required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 调用工厂类的静态方法，传入语言编码，拿到具体的翻译器实例进行翻译</span>
            <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token class-name">Factory</span><span class="token punctuation">.</span><span class="token function">getTranslator</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),k={href:"http://localhost:8080/translate/english?content=%E4%BD%A0%E5%A5%BD",target:"_blank",rel:"noopener noreferrer"},v={href:"https://gitee.com/xiao_gege/design.git",target:"_blank",rel:"noopener noreferrer"},m=p('<h2 id="五、简单工厂模式的优缺点" tabindex="-1"><a class="header-anchor" href="#五、简单工厂模式的优缺点" aria-hidden="true">#</a> 五、简单工厂模式的优缺点</h2><h3 id="_5-1-简单工厂模式的优点" tabindex="-1"><a class="header-anchor" href="#_5-1-简单工厂模式的优点" aria-hidden="true">#</a> 5.1 简单工厂模式的优点</h3><blockquote><p>工厂类是整个模式的关键，包含了必要的逻辑判断，根据外界给定的信息，决定究竟应该创建哪个具体类的对象。通过使用工厂类，外界可以从直接创建具体产品对象的尴尬局面摆脱出来，仅仅需要负责“消费”对象就可以了。而不必管这些对象究竟如何创建及如何组织的。明确了各自的职责和权利，有利于整个软件体系结构的优化。</p></blockquote><h3 id="_5-2-简单工厂模式的缺点" tabindex="-1"><a class="header-anchor" href="#_5-2-简单工厂模式的缺点" aria-hidden="true">#</a> 5.2 简单工厂模式的缺点</h3><blockquote><p>由于工厂类集中了所有实例的创建逻辑，违反了高内聚责任分配原则，将全部创建逻辑集中到了一个工厂类中。它所能创建的类只能是事先考虑到的，如果需要添加新的类，就需要改变工厂类了。</p></blockquote><h2 id="六、简单工厂模式的适用环境" tabindex="-1"><a class="header-anchor" href="#六、简单工厂模式的适用环境" aria-hidden="true">#</a> 六、简单工厂模式的适用环境</h2><blockquote><p>(1) 工厂类负责创建的对象比较少：由于创建的对象较少，不会造成工厂方法中的业务逻辑太过复杂；<br> (2) 客户端只知道传入工厂类的参数，对于如何创建对象不关心：客户端既不需要关心创建细节，甚至连类名都不需要记住，只需要知道类型所对应的参数。</p></blockquote><h2 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> PS:</h2><p>讲到这里，大家有没有对简单工厂模式有一定的了解呢？希望这篇文章能帮助大家更好的理解和使用简单工厂模式😜。<br> 忘了介绍我们故事的主角了，巴扎黑，你过来！<br><img src="http://upload-images.jianshu.io/upload_images/5825596-620bec9b5727ef1b.gif?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" referrerpolicy="no-referrer" loading="lazy"><br><img src="http://upload-images.jianshu.io/upload_images/5825596-549dc015e50951e0.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" referrerpolicy="no-referrer" loading="lazy"></p>',9),b={href:"https://weibo.com/chahuashi",target:"_blank",rel:"noopener noreferrer"};function g(h,f){const t=e("ExternalLinkIcon"),o=e("Share");return l(),i("div",null,[d,n("p",null,[s("最后我们测试一下，比如 "),n("a",k,[s("将“你好”翻译成英语"),a(t)])]),n("p",null,[n("a",v,[s("demo完整代码请戳这里"),a(t)])]),m,n("p",null,[s("喜欢巴扎黑的，可以关注"),n("a",b,[s("吾皇的白茶"),a(t)]),s(" 😜")]),a(o,{colorful:"",services:"qrcode,telegram,twitter"})])}const q=c(r,[["render",g],["__file","chap-one.html.vue"]]);export{q as default};
