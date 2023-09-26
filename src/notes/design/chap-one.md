---
title: 第一章 简单工厂模式在实际项目中的使用
order: 1
tag: 
 - 设计模式
 - 简单工厂模式
comment: true
---

## 一、巴扎黑的日常
一天，巴扎黑从睡梦中惊醒
随手拿起边上的手机
。。。呀。。。都11点了。。。肚子好饿 +_+
巴扎黑来到楼下一家餐厅
服务员：您要来份什么？
巴扎黑：鱼丸粗面！
服务员：我们这儿不卖鱼丸粗面！
巴扎黑：。。。那来份新疆大盘鸡。
服务员：我们这儿做大盘鸡的师傅回家休息了。
巴扎黑：那给我来份红烧肉吧！
服务员：好嘞，你先坐会儿，我让师傅马上给你做。
巴扎黑找了个位置坐下，掏出手机，悠闲的刷起了微博。。。
服务员随即朝向后厨：“刘师傅，做一份你最拿手的红烧肉”。
刘师傅听到后立马准备食材，一会儿工夫，香喷喷的红烧肉就做好了
巴扎黑美滋滋的吃了起来，心想：“这是哪位师傅做的，这么好吃，是怎么做出来的呢。。。不管了，先吃吧。”

吃饱后，巴扎黑闲逛，路过一家理发店，门口LED屏幕上正打着半价优惠的活动，巴扎黑走了进去，服务员热情的迎来
服务员：先生，要理发吗？
巴扎黑：嗯嗯，给我理个帅气的发型！
服务员：有认识的理发师吗？
巴扎黑：没有！
服务员：你要剪什么价位的？我们这儿有28的，58的，128的。
巴扎黑：128的吧！
服务员：好，你先坐，我马上安排。
巴扎黑刚坐下，一位身着小西装的小伙迎面走来，胸前的别章上印着“总监”。
在他的修剪下，巴扎黑原本乱糟糟的头发瞬间精神了。
“果然128剪出来的效果就是不一样！”巴扎黑心里想着，对着镜子，嘴角微微的上扬了一下。

## 二、简单工厂模式
### 2.1 简单工厂模式介绍
> 简单工厂模式(Simple Factory Pattern)：又称为静态工厂方法(Static Factory Method)模式，它属于创建型模式。简单工厂模式的实质是由一个工厂类根据传入的参数，动态决定应该创建哪一个产品类（这些产品类继承或实现一个父类或接口）的实例。

### 2.2 简单工厂模式的角色
#### 工厂类（Creator）角色：
> 简单工厂模式的核心，它负责实现创建所有实例的内部逻辑。工厂类提供静态方法，可以根据传入的参数，创建所需的产品对象。
#### 抽象产品（Product）角色：
> 简单工厂模式所创建的所有对象的父类，它负责描述所有实例所共有的公共接口。可以是抽象类或接口。
#### 具体产品（Concrete Product）角色：
> 是简单工厂模式的创建目标，所有创建的对象都是充当这个角色的某个具体类的实例。

### 2.3 简单工厂模式的 UML 类图
![简单工厂模式类图](http://upload-images.jianshu.io/upload_images/5825596-e6ac88ac8bb1e68c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240){referrerpolicy="no-referrer"}

## 三、从日常生活看工厂模式
就拿巴扎黑理发这件事来说，服务员就充当了工厂类，她根据巴扎黑想要剪的价位来安排一位合适的理发师。理发师这个称谓就相当于抽象产品，它描述了所有理发师都具备的能力——理发。服务员安排的这位总监就相当于具体产品。
简单工厂模式中，对于某个具体业务而言，client 无需知道由谁来处理这个业务，怎么处理，它只需告诉工厂类这个业务的类型，并调用工厂类提供的静态方法拿到一个具体的产品，然后调用产品的业务方法来完成业务。就像巴扎黑去餐厅吃饭，他只要告诉服务员他想吃什么，然后自然会有一位师傅帮他做好，自己根本就不需要关心这个师傅是谁以及怎么做出这道美味菜肴。这样看来，吃饭这件事也不麻烦。
但是设想一下，巴扎黑很早就起床了，他想自己做菜来犒劳自己，他有充足的时间来准备。首先他得考虑想要吃什么，于是有了下面的思考：
```java
// 伪代码
prepareToEat(food) {
    if (food == "鱼丸粗面") {
        去买鱼丸和粗面;
        放在锅里烧; 
        ...   
    } else if (food == "大盘鸡") {
        去菜场挑只鸡让大妈杀了，剁好装袋;
        买洋葱和其他配料;
        把鸡肉浸水洗净;
        洋葱切好;
        ...
    } else if (food == "红烧肉") {
        去菜场挑一块五花肉; // 一定要买带肥肉的，不然烧出来很难吃
        切块洗净放料酒浸泡;
        锅里放油煸炒肉块;
        ...
    }
    ...
}
```
要想吃点好的，脑袋里还得装一本厚厚的菜谱，想要尝尝新菜，还得不断丰富大脑里的菜谱，着实麻烦。有时候脑袋不够使，还会把菜谱记错，倒不如直接去餐厅点菜吃来的省事儿。

## 四、拿具体例子说话
### 4.1 场景
> 实现一个简单的翻译功能，要求：能够将一段中文文本翻译成不同的语言版本

### 4.2 代码
要实现翻译，我们得有一个翻译器。我们先定义一个抽象的翻译器(AbstractTranslator)，用于描述所有翻译器都具备的功能——翻译(translate)
```java
/**
 * 翻译器抽象类
 * 抽象产品，定义产品必须实现的方法
 *
 * @author piaolingluo
 * @date 2017-11-08
 */
public abstract class AbstractTranslator {

    @Autowired
    protected BaiduConfig baiduConfig;

    /**
     * 翻译
     *
     * @param content 待翻译的内容
     * @return 翻译的得到的内容
     */
    public abstract String translate(String content);
}
```
再定义一个具体的翻译器——英语翻译器(EnglishTranslator)，继承AbstractTranslator，它能将一段中文翻译成英文
```java
/**
 * 英语翻译器
 * 具体产品
 *
 * @author piaolingluo
 * @date 2017-11-08
 */
@Service
public class EnglishTranslator extends AbstractTranslator {

    @Autowired
    private Gson gson;

    @Override
    public String translate(String content) {
        TransApi api = new TransApi(baiduConfig.getAppId(), baiduConfig.getSecurityKey());
        String response = api.getTransResult(content, "auto", "en");
        TransResult result = gson.fromJson(response, TransResult.class);
        return result.getTransResult().get(0).getDst();
    }
}
```
再定义一个具体的翻译器——日语翻译器(JapaneseTranslator)，继承AbstractTranslator，它能将一段中文翻译成日语
```java
/**
 * 日语翻译器
 * 具体产品
 *
 * @author piaolingluo
 * @date 2017-11-08
 */
@Service
public class JapaneseTranslator extends AbstractTranslator {

    @Autowired
    private Gson gson;

    @Override
    public String translate(String content) {
        TransApi api = new TransApi(baiduConfig.getAppId(), baiduConfig.getSecurityKey());
        String response = api.getTransResult(content, "auto", "jp");
        TransResult result = gson.fromJson(response, TransResult.class);
        return result.getTransResult().get(0).getDst();
    }
}
```
接着，我们定义系统能能翻译的语言有哪些，如果后续支持新的语言，可以追加
```java
/**
 * 语言枚举
 * 定义系统能翻译的语言
 *
 * @author piaolingluo
 * @date 2017-11-08
 */
@Getter
public enum LanguageEnum {

    CHINESE("chinese", "中文"),

    ENGLISH("english", "英语"),

    JAPANESE("japanese", "日语");

    private String code;

    private String name;

    LanguageEnum(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public static LanguageEnum valueOfLanguage(String code) {
        return Stream.of(values())
                .filter(languageEnum -> languageEnum.getCode().equals(code))
                .findFirst()
                .orElse(null);
    }
}
```
接着，比较重要的一点是为不同的语言指定各自的实例，后续如果支持新的语言，可以在此扩展
```java
/**
 * 语言类型与翻译器实例的映射
 *
 * @author piaolingluo
 * @date 2017-11-08
 */
@Getter
@AllArgsConstructor
public enum TranslatorEnum {

    ENGLISH_TRANSLATOR(LanguageEnum.ENGLISH, "englishTranslator"),

    JAPANESE_TRANSLATOR(LanguageEnum.JAPANESE, "japaneseTranslator");

    /**
     * 语言
     */
    private LanguageEnum language;

    /**
     * 具体翻译器处理bean的名字
     */
    private String translatorName;
}
```
最最重要的就是编写这个工厂类(Factory)，初始化的时候，将所有的翻译器按各自能处理的语言类型存放在 TRANSLATOR_MAP 里，并提供一个静态方法，能够根据不同的语言拿到具体的翻译器
```java
/**
 * 工厂
 *
 * @author piaolingluo
 * @date 2017-11-08
 */
@Component
public class Factory {

    private static final Map<LanguageEnum, AbstractTranslator> TRANSLATOR_MAP = new ConcurrentHashMap<>();

    @Autowired
    private ApplicationContext applicationContext;

    @PostConstruct
    public void init() {
        Map<String, AbstractTranslator> beanMap = applicationContext.getBeansOfType(AbstractTranslator.class);

        Arrays.stream(TranslatorEnum.values())
                .forEach(translatorEnum -> {
                    AbstractTranslator translator = beanMap.get(translatorEnum.getTranslatorName());
                    if (null != translator) {
                        TRANSLATOR_MAP.put(translatorEnum.getLanguage(), translator);
                    }
                });
    }

    /**
     * 根据语言枚举拿到指定语言的翻译器
     *
     * @param languageEnum 语言枚举
     * @return 指定语言的翻译器
     * @throws Exception 当拿不到翻译器时，抛出此异常
     */
    public static AbstractTranslator getTranslator(LanguageEnum languageEnum) throws Exception {
        AbstractTranslator translator = TRANSLATOR_MAP.get(languageEnum);
        if (null == translator) {
            throw new Exception("无法翻译成这种语言");
        }
        return translator;
    }

    /**
     * 根据语言编码拿到指定语言的翻译器
     *
     * @param languageCode 语言编码
     * @return 指定语言的翻译器
     * @throws Exception 当拿不到翻译器时，抛出此异常
     */
    public static AbstractTranslator getTranslator(String languageCode) throws Exception {
        return getTranslator(LanguageEnum.valueOfLanguage(languageCode));
    }
}
```
然后我们写个 TranslateController ，接收指定的语言编码和待翻译的文本，返回翻译后的文本
```java
/**
 * 翻译服务
 *
 * @author piaolingluo
 * @date 2017-11-08
 */
@RestController
@RequestMapping("translate")
public class TranslateController {

    @GetMapping("{code}")
    public ResponseEntity<String> translate(@PathVariable("code") String code,
                                    @RequestParam(value = "content", required = false) String content) {
        try {
            // 调用工厂类的静态方法，传入语言编码，拿到具体的翻译器实例进行翻译
            return ResponseEntity.ok(Factory.getTranslator(code).translate(content));
        } catch (Exception e) {
            return ResponseEntity.ok(e.getMessage());
        }
    }
}
```
最后我们测试一下，比如 [将“你好”翻译成英语](http://localhost:8080/translate/english?content=你好)

[demo完整代码请戳这里](https://gitee.com/xiao_gege/design.git)

## 五、简单工厂模式的优缺点
### 5.1 简单工厂模式的优点
> 工厂类是整个模式的关键，包含了必要的逻辑判断，根据外界给定的信息，决定究竟应该创建哪个具体类的对象。通过使用工厂类，外界可以从直接创建具体产品对象的尴尬局面摆脱出来，仅仅需要负责“消费”对象就可以了。而不必管这些对象究竟如何创建及如何组织的。明确了各自的职责和权利，有利于整个软件体系结构的优化。

### 5.2 简单工厂模式的缺点
> 由于工厂类集中了所有实例的创建逻辑，违反了高内聚责任分配原则，将全部创建逻辑集中到了一个工厂类中。它所能创建的类只能是事先考虑到的，如果需要添加新的类，就需要改变工厂类了。

## 六、简单工厂模式的适用环境
> (1) 工厂类负责创建的对象比较少：由于创建的对象较少，不会造成工厂方法中的业务逻辑太过复杂；
(2) 客户端只知道传入工厂类的参数，对于如何创建对象不关心：客户端既不需要关心创建细节，甚至连类名都不需要记住，只需要知道类型所对应的参数。

## PS: 
讲到这里，大家有没有对简单工厂模式有一定的了解呢？希望这篇文章能帮助大家更好的理解和使用简单工厂模式😜。
忘了介绍我们故事的主角了，巴扎黑，你过来！
![](http://upload-images.jianshu.io/upload_images/5825596-620bec9b5727ef1b.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240){referrerpolicy="no-referrer"}
![](http://upload-images.jianshu.io/upload_images/5825596-549dc015e50951e0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240){referrerpolicy="no-referrer"}

喜欢巴扎黑的，可以关注[吾皇的白茶](https://weibo.com/chahuashi) 😜
