const e=JSON.parse('{"key":"v-208c337c","path":"/notes/design/chap-one.html","title":"第一章 简单工厂模式在实际项目中的使用","lang":"zh-CN","frontmatter":{"title":"第一章 简单工厂模式在实际项目中的使用","order":1,"isOriginal":true,"tag":["设计模式","简单工厂模式"],"comment":true,"description":"一、巴扎黑的日常 一天，巴扎黑从睡梦中惊醒 随手拿起边上的手机 。。。呀。。。都11点了。。。肚子好饿 +_+ 巴扎黑来到楼下一家餐厅 服务员：您要来份什么？ 巴扎黑：鱼丸粗面！ 服务员：我们这儿不卖鱼丸粗面！ 巴扎黑：。。。那来份新疆大盘鸡。 服务员：我们这儿做大盘鸡的师傅回家休息了。 巴扎黑：那给我来份红烧肉吧！ 服务员：好嘞，你先坐会儿，我让师傅马上给你做。 巴扎黑找了个位置坐下，掏出手机，悠闲的刷起了微博。。。 服务员随即朝向后厨：“刘师傅，做一份你最拿手的红烧肉”。 刘师傅听到后立马准备食材，一会儿工夫，香喷喷的红烧肉就做好了 巴扎黑美滋滋的吃了起来，心想：“这是哪位师傅做的，这么好吃，是怎么做出来的呢。。。不管了，先吃吧。”","head":[["meta",{"property":"og:url","content":"https://piaolingluo.github.io/notes/design/chap-one.html"}],["meta",{"property":"og:site_name","content":"BroNotes(学长笔记)"}],["meta",{"property":"og:title","content":"第一章 简单工厂模式在实际项目中的使用"}],["meta",{"property":"og:description","content":"一、巴扎黑的日常 一天，巴扎黑从睡梦中惊醒 随手拿起边上的手机 。。。呀。。。都11点了。。。肚子好饿 +_+ 巴扎黑来到楼下一家餐厅 服务员：您要来份什么？ 巴扎黑：鱼丸粗面！ 服务员：我们这儿不卖鱼丸粗面！ 巴扎黑：。。。那来份新疆大盘鸡。 服务员：我们这儿做大盘鸡的师傅回家休息了。 巴扎黑：那给我来份红烧肉吧！ 服务员：好嘞，你先坐会儿，我让师傅马上给你做。 巴扎黑找了个位置坐下，掏出手机，悠闲的刷起了微博。。。 服务员随即朝向后厨：“刘师傅，做一份你最拿手的红烧肉”。 刘师傅听到后立马准备食材，一会儿工夫，香喷喷的红烧肉就做好了 巴扎黑美滋滋的吃了起来，心想：“这是哪位师傅做的，这么好吃，是怎么做出来的呢。。。不管了，先吃吧。”"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://piaolingluo.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-29T08:58:35.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"第一章 简单工厂模式在实际项目中的使用"}],["meta",{"property":"article:author","content":"piaolingluo"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"简单工厂模式"}],["meta",{"property":"article:modified_time","content":"2023-10-29T08:58:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第一章 简单工厂模式在实际项目中的使用\\",\\"image\\":[\\"https://piaolingluo.github.io/\\"],\\"dateModified\\":\\"2023-10-29T08:58:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"piaolingluo\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"一、巴扎黑的日常","slug":"一、巴扎黑的日常","link":"#一、巴扎黑的日常","children":[]},{"level":2,"title":"二、简单工厂模式","slug":"二、简单工厂模式","link":"#二、简单工厂模式","children":[{"level":3,"title":"2.1 简单工厂模式介绍","slug":"_2-1-简单工厂模式介绍","link":"#_2-1-简单工厂模式介绍","children":[]},{"level":3,"title":"2.2 简单工厂模式的角色","slug":"_2-2-简单工厂模式的角色","link":"#_2-2-简单工厂模式的角色","children":[]},{"level":3,"title":"2.3 简单工厂模式的 UML 类图","slug":"_2-3-简单工厂模式的-uml-类图","link":"#_2-3-简单工厂模式的-uml-类图","children":[]}]},{"level":2,"title":"三、从日常生活看工厂模式","slug":"三、从日常生活看工厂模式","link":"#三、从日常生活看工厂模式","children":[]},{"level":2,"title":"四、拿具体例子说话","slug":"四、拿具体例子说话","link":"#四、拿具体例子说话","children":[{"level":3,"title":"4.1 场景","slug":"_4-1-场景","link":"#_4-1-场景","children":[]},{"level":3,"title":"4.2 代码","slug":"_4-2-代码","link":"#_4-2-代码","children":[]}]},{"level":2,"title":"五、简单工厂模式的优缺点","slug":"五、简单工厂模式的优缺点","link":"#五、简单工厂模式的优缺点","children":[{"level":3,"title":"5.1 简单工厂模式的优点","slug":"_5-1-简单工厂模式的优点","link":"#_5-1-简单工厂模式的优点","children":[]},{"level":3,"title":"5.2 简单工厂模式的缺点","slug":"_5-2-简单工厂模式的缺点","link":"#_5-2-简单工厂模式的缺点","children":[]}]},{"level":2,"title":"六、简单工厂模式的适用环境","slug":"六、简单工厂模式的适用环境","link":"#六、简单工厂模式的适用环境","children":[]},{"level":2,"title":"PS:","slug":"ps","link":"#ps","children":[]}],"git":{"createdTime":1695701988000,"updatedTime":1698569915000,"contributors":[{"name":"gechenpeng","email":"731269319@qq.com","commits":6}]},"readingTime":{"minutes":9.08,"words":2723},"filePathRelative":"notes/design/chap-one.md","localizedDate":"2023年9月26日","excerpt":"<h2> 一、巴扎黑的日常</h2>\\n<p>一天，巴扎黑从睡梦中惊醒<br>\\n随手拿起边上的手机<br>\\n。。。呀。。。都11点了。。。肚子好饿 +_+<br>\\n巴扎黑来到楼下一家餐厅<br>\\n服务员：您要来份什么？<br>\\n巴扎黑：鱼丸粗面！<br>\\n服务员：我们这儿不卖鱼丸粗面！<br>\\n巴扎黑：。。。那来份新疆大盘鸡。<br>\\n服务员：我们这儿做大盘鸡的师傅回家休息了。<br>\\n巴扎黑：那给我来份红烧肉吧！<br>\\n服务员：好嘞，你先坐会儿，我让师傅马上给你做。<br>\\n巴扎黑找了个位置坐下，掏出手机，悠闲的刷起了微博。。。<br>\\n服务员随即朝向后厨：“刘师傅，做一份你最拿手的红烧肉”。<br>\\n刘师傅听到后立马准备食材，一会儿工夫，香喷喷的红烧肉就做好了<br>\\n巴扎黑美滋滋的吃了起来，心想：“这是哪位师傅做的，这么好吃，是怎么做出来的呢。。。不管了，先吃吧。”</p>","autoDesc":true}');export{e as data};