﻿/ *！
    * jQuery JavaScript Library v3.3.1
        * https://jquery.com/
 *
 * 包括Sizzle.js
    * https://sizzlejs.com/
 *
 * 版权所有JS基金会和其他贡献者
    * 根据MIT许可证发布
    * https://jquery.org/license
 *
 * 日期：2018 - 01 - 20T17：24Z
    * /
（功能（全球，工厂）{

    “严格使用”;

    if（typeof module ===“object”&& typeof module.exports ===“object”）{

        //适用于CommonJS和类似CommonJS的环境，其中有一个正确的“窗口”
        //存在，执行工厂并获取jQuery。
        //对于没有带“文档”的“窗口”的环境
        //（例如Node.js），将工厂公开为module.exports。
        //这突出了创建一个真正的“窗口”的需要。
        //例如var jQuery = require（“jquery”）（window）;
        //有关详细信息，请参阅＃14549票。
        module.exports = global.document？
        工厂（全球，真实）：
        function（w）{
            if（！w.document）{
                抛出新错误（“jQuery需要一个带文档的窗口”）;
            }
            返厂（w）;
        };
    } else {
        工厂（全球）;
    }

    //如果尚未定义窗口，请传递此项
} ）（typeof window！==“undefined”？window：this，function（window，noGlobal）{

    // Edge <= 12  -  13 +，Firefox <= 18  -  45 +，IE 10  -  11，Safari 5.1  -  9 +，iOS 6  -  9.1
    //当非严格代码（例如，ASP.NET 4.5）访问严格模式时抛出异常
    // arguments.callee.caller（trac-13335）。但是从jQuery 3.0（2016）开始，严格模式应该是常见的
    //足以让所有这些尝试都在try块中得到保护。
    “严格使用”;

    var arr = [];

    var document = window.document;

    var getProto = Object.getPrototypeOf;

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;

    var ObjectFunctionString = fnToString.call（Object）;

    var support = {};

    var isFunction = function isFunction（obj）{

        //支持：Chrome <= 57，Firefox <= 52
        //在某些浏览器中，typeof为HTML <object>元素返回“function”
        //（即`typeof document.createElement（“object”）===“function”`）。
        //我们不想将* any * DOM节点归类为函数。
        return typeof obj ===“function”&& typeof obj.nodeType！==“number”;
};


var isWindow = function isWindow（obj）{
    return obj！= null && obj === obj.window;
	};




var preservedScriptAttributes = {
    类型：true，
    src：是的，
    noModule：是的
};

function DOMEval（code，doc，node）{
    doc = doc || 文献;

    var i，
        script = doc.createElement（“script”）;

    script.text = code;
    if（node）{
        for（i in preservedScriptAttributes）{
            if（node[i]）{
                script[i] = node[i];
            }
        }
    }
    doc.head.appendChild（script）.parentNode.removeChild（script）;
}


function toType（obj）{
    if（obj == null）{
        return obj +“”;
    }

    //支持：Android <= 2.3（功能RegExp）
    return typeof obj ===“object”|| typeof obj ===“功能”？
    class2type[toString.call（obj）] || “对象”：
    对象类型;
}
/ *全球符号* /
//在.eslintrc.json中定义此全局会产生使用全局的危险
//在另一个地方无人看守，为这个模块定义全局似乎更安全



VAR
version =“3.3.1”，

//定义jQuery的本地副本
jQuery = function（selector，context）{

    // jQuery对象实际上只是init构造函数'enhanced'
    //如果调用了jQuery，则需要init（如果不包含则允许抛出错误）
    返回新的jQuery.fn.init（selector，context）;
} ，

//支持：Android <= 4.0
//确保我们修剪BOM和NBSP
rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

    //正在使用的jQuery的当前版本
    jquery：版本，

    构造函数：jQuery，

    // jQuery对象的默认长度为0
    长度：0，

    toArray：function（）{
    return slice.call（this）;
} ，

//获取匹配元素集OR中的第N个元素
//将整个匹配的元素集作为干净数组
get：function（num）{

    //返回干净数组中的所有元素
    if（num == null）{
        return slice.call（this）;
    }

    //只返回集合中的一个元素
    返回num < 0？这[num + this.length]：这个[num];
} ，

//获取一系列元素并将其推入堆栈
//（返回新的匹配元素集）
pushStack：function（elems）{

    //构建一个新的jQuery匹配元素集
    var ret = jQuery.merge（this.constructor（），elems）;

    //将旧对象添加到堆栈中（作为参考）
    ret.prevObject = this;

    //返回新形成的元素集
    返回;
} ，

//对匹配集中的每个元素执行回调。
each：function（callback）{
    return jQuery.each（this，callback）;
} ，

map：function（callback）{
    return this.pushStack（jQuery.map（this，function（elem，i）{
        return callback.call（elem，i，elem）;
    } ）;;
} ，

slice：function（）{
    return this.pushStack（slice.apply（this，arguments））;
} ，

第一名：function（）{
    return this.eq（0）;
} ，

last：function（）{
    return this.eq（-1）;
} ，

eq：function（i）{
    var len = this.length，
        j = + i +（i < 0？len：0）;
    return this.pushStack（j > = 0 && j < len？[this[j]]：[]）;
} ，

结束：function（）{
    返回this.prevObject || this.constructor（）;
} ，

// 仅限内部使用。
//表现得像一个Array的方法，而不是像jQuery方法。
推推，
sort：arr.sort，
拼接：arr.splice
};

jQuery.extend = jQuery.fn.extend = function（）{
    var options，name，src，copy，copyIsArray，clone，
        target = arguments[0] || {}，
        i = 1，
        length = arguments.length，
        deep = false;

    //处理深层复制情况
    if（typeof target ===“boolean”）{
        deep = target;

        //跳过布尔值和目标
        target = arguments[i] || {};
        我++;
    }

    //当目标是字符串或其他东西时处理大小写（可能在深层副本中）
    if（typeof target！==“object”&&！isFunction（target））{
        target = {};
    }

    //如果只传递一个参数，则扩展jQuery本身
    if（i === length）{
        target = this;
        一世 - ;
    }

    for（; i < length; i++）{

        //仅处理非null /未定义的值
        if（（options = arguments[i]）！= null）{

            //扩展基础对象
            for（选项中的名称）{
                src = target[name];
                copy = options[name];

                //防止永无止境的循环
                if（target === copy）{
                    继续;
                }

                //如果我们要合并普通对象或数组，请递归
                if（deep && copy &&（jQuery.isPlainObject（copy）||
                （copyIsArray = Array.isArray（copy））））{

                    if（copyIsArray）{
                        copyIsArray = false;
                        clone = src && Array.isArray（src）？src：[];

                    } else {
                        clone = src && jQuery.isPlainObject（src）？src：{ };
                    }

                    //永远不要移动原始对象，克隆它们
                    target[name] = jQuery.extend（deep，clone，copy）;

                    //不要引入未定义的值
                } else if（copy！== undefined）{
                    target[name] = copy;
                }
            }
        }
    }

    //返回修改后的对象
    回归目标;
};

jQuery.extend（{

    //对于页面上的每个jQuery副本都是唯一的
    expando：“jQuery”+（version + Math.random（））.replace（/ \ D / g，“”），

    //假设没有ready模块就准备好了jQuery
    isReady：是的，

    错误：function（msg）{
        抛出新错误（msg）;
    } ，

    noop：function（）{ } ，

    isPlainObject：function（obj）{
        var proto，Ctor;

        //检测明显的否定
        //使用toString而不是jQuery.type来捕获宿主对象
        if（！obj || toString.call（obj）！==“[object Object]”）{
            返回false;
        }

        proto = getProto（obj）;

        //没有原型的对象（例如，`Object.create（null）`）是普通的
        if（！proto）{
            返回true;
        }

        //具有原型的对象是纯粹的，如果它们是由全局Object函数构造的
        Ctor = hasOwn.call（proto，“constructor”）&& proto.constructor;
        返回typeof Ctor ===“function”&& fnToString.call（Ctor）=== ObjectFunctionString;
    } ，

    isEmptyObject：function（obj）{

        / * eslint-disable no-unused-vars * /
        //请参阅https://github.com/eslint/eslint/issues/6125
        var name;

        for（obj中的名字）{
            返回false;
        }
        返回true;
    } ，

    //在全局上下文中评估脚本
    globalEval：function（code）{
        DOMEval（代码）;
    } ，

    each：function（obj，callback）{
        var length，i = 0;

        if（isArrayLike（obj））{
            length = obj.length;
            for（; i < length; i++）{
                if（callback.call（obj[i]，i，obj[i]）=== false）{
                    打破;
                }
            }
        } else {
            for（i in obj）{
                if（callback.call（obj[i]，i，obj[i]）=== false）{
                    打破;
                }
            }
        }

        返回obj;
    } ，

    //支持：Android <= 4.0
    trim：function（text）{
        return text == null？
        “”：
        （text +“”）。replace（rtrim，“”）;
    } ，

    //结果仅供内部使用
    makeArray：function（arr，results）{
        var ret = results || [];

        if（arr！= null）{
            if（isArrayLike（Object（arr）））{
                jQuery.merge（ret，
                typeof arr ===“string”？
                [arr]：arr
                ）;
            } else {
                push.call（ret，arr）;
            }
        }

        返回;
    } ，

    inArray：function（elem，arr，i）{
        return arr == null？-1：indexOf.call（arr，elem，i）;
    } ，

    //支持：仅限Android <= 4.0，仅限PhantomJS 1
    // push.apply（_，arraylike）抛出古老的WebKit
    合并：功能（第一，第二）{
        var len = + second.length，
            j = 0，
            i = first.length;

        for（; j < len; j++）{
            first[i++] = second[j];
        }

        first.length = i;

        先回来;
    } ，

    grep：function（elems，callback，invert）{
        var callbackInverse，
            matches = []，
            i = 0，
            length = elems.length，
            callbackExpect =！invert;

        //浏览数组，只保存项目
        //传递验证器函数
        for（; i < length; i++）{
            callbackInverse =！callback（elems[i]，i）;
            if（callbackInverse！== callbackExpect）{
                matches.push（elems[i]）;
            }
        }

        回归比赛;
    } ，

    // arg仅供内部使用
    map：function（elems，callback，arg）{
        var length，value，
            i = 0，
            ret = [];

        //浏览数组，将每个项目转换为新值
        if（isArrayLike（elems））{
            length = elems.length;
            for（; i < length; i++）{
                value = callback（elems[i]，i，arg）;

                if（value！= null）{
                    ret.push（value）;
                }
            }

            //浏览对象上的每个键，
        } else {
            for（i in elems）{
                value = callback（elems[i]，i，arg）;

                if（value！= null）{
                    ret.push（value）;
                }
            }
        }

        //展平任何嵌套数组
        return concat.apply（[]，ret）;
    } ，

    //对象的全局GUID计数器
    guid：1，

    // jQuery.support未在Core中使用，但其他项目附加了它们
    //它的属性所以它需要存在。
    支持：支持
} ）;

if（typeof Symbol ===“function”）{
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
}

//填充class2type映射
jQuery.each（“布尔值数字字符串函数数组日期RegExp对象错误符号”.split（“”），
function（i，name）{
    class2type[“[object”+ name +“]”] = name.toLowerCase（）;
} ）;

function isArrayLike（obj）{

    //支持：仅限真正的iOS 8.2（在模拟器中不可重现）
    //`in`检查用于防止JIT错误（gh-2145）
    //由于漏报，因此不使用hasOwn
    //关于IE中的Nodelist长度
    在obj && obj.length中，var length = !!obj &&“length”，
        type = toType（obj）;

    if（isFunction（obj）|| isWindow（obj））{
        返回false;
    }

    返回类型 ===“数组”|| 长度 === 0 ||
        typeof length ===“number”&& length > 0 &&（length - 1）in obj;
}
var Sizzle =
    / *！
    * Sizzle CSS Selector Engine v2.3.3
        * https://sizzlejs.com/
 *
 * 版权jQuery Foundation和其他贡献者
    * 根据MIT许可证发布
    * http://jquery.org/license
 *
 * 日期：2016 - 08 - 08
    * /
（功能（窗口）{

    var i，
        支持，
        EXPR，
        gettext的，
        isXML，
        记号化，
        编译，
        选择，
        outermostContext，
        sortInput，
        hasDuplicate，

        //本地文档变量
        setDocument，
        文献，
        docElem，
        documentIsHTML，
        rbuggyQSA，
        rbuggyMatches，
        火柴，
        包含，

        //特定于实例的数据
        expando =“sizzle”+ 1 * new Date（），
    preferredDoc = window.document，
    dirruns = 0，
    完成 = 0，
    classCache = createCache（），
    tokenCache = createCache（），
    compilerCache = createCache（），
    sortOrder = function（a，b）{
        if（a === b）{
            hasDuplicate = true;
        }
        返回0;
    } ，

    //实例方法
    hasOwn =（{ } ）。hasOwnProperty，
    arr = []，
    pop = arr.pop，
    push_native = arr.push，
    push = arr.push，
    slice = arr.slice，
    //使用精简的indexOf，因为它比native更快
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function（list，elem）{
        var i = 0，
            len = list.length;
        for（; i < len; i++）{
            if（list[i] === elem）{
                回归我;
            }
        }
        返回 - 1;
    } ，

    booleans =“checked | selected | async | autofocus | autoplay | controls | defer | disabled | hidden | ismap | loop | multiple | open | readonly | required | scoped”，

    // 常用表达

    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace =“[\\ x20 \\ t \\ r \\ n \\ f]”，

    // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier =“（？：\\\\。| [\\ w -] | [^ \ 0 -  \\ xa0]）+”，

    //属性选择器：http：//www.w3.org/TR/selectors/#attribute-selectors
    attributes =“\\[”+ whitespace +“*（”+ identifier +“）（？：”+ whitespace +
        //运算符（捕获2）
        “*（[* ^ $ |！〜]？=）”+空白 +
        //“属性值必须是CSS标识符[capture 5]或字符串[capture 3或capture 4]”
        “*（？： '（（？：\\\\ | [^ \\\\']）*）'| \ “（（？：\\\\ | [^ \\\\\”] ）*）\“|（”+标识符+“））|）”+空白+
    “* \\]”，

    pseudos =“: (”+ identifier +“）（？：\\（（”+
    //要减少preFilter中需要tokenize的选择器数量，请更喜欢参数：
    // 1.引用（捕获3;捕获4或捕获5）
    “（ '（（？：\\\\ | [^ \\\\']）*）'| \ “（（？：\\\\ | [^ \\\\\”]）*） \“）|”+
    // 2.简单（捕获6）
    “（（？：\\\\。| [^ \\\\（）[\\]] |”+属性 +“）*）|” +
    // 3.其他任何东西（捕获2）
    “。*”+
    “）\\）|）”，

    //前导和非转义尾随空格，捕获后者之前的一些非空白字符
    rwhitespace = new RegExp（空格 +“+”，“g”），
    rtrim = new RegExp（“^”+ whitespace +“+ |（（？：^ | [^ \\\\]）（？：\\\\。）*）”+ whitespace +“+ $”，“g “），

    rcomma = new RegExp（“^”+ whitespace +“*，”+ whitespace +“*”），
    rcombinators = new RegExp（“^”+ whitespace +“*（[> +〜] |”+ whitespace +“）”+ whitespace +“*”），

    rattributeQuotes = new RegExp（“=”+ whitespace +“*（[^ \\]'\”] *？）“+ whitespace +”* \\]“，”g“），

    rpseudo = 新的RegExp（伪），
    ridentifier = new RegExp（“^”+ identifier +“$”），

    matchExpr = {
        “ID”：新的RegExp（“^＃（”+ + identifier +“）”），
    “CLASS”：新的RegExp（“^ \\。（”+ identifier +“）”），
    “TAG”：新的RegExp（“^（”+ identifier +“| [*]）”），
    “ATTR”：新的RegExp（“^”+属性），
    “PSEUDO”：新的RegExp（“^”+ pseudos），
    “CHILD”：新的RegExp（“^ : (仅 | 第一 | 最后 | 第n | 第n - 最后） - （子类型）（？：\\（”+ + whitespace +
    “*（偶数 | 奇数 |（（[+  - ] |）（\\ d *）n |）”+空格 +“*（？：（[+  - ] |）”+空白 +
    “*（\\ d +）|））”+ whitespace +“* \\）|）”，“i”），
    “bool”：新的RegExp（“^（？：”+ booleans +“）$”，“i”），
    //用于实现.is（）的库
    //我们在`select`中使用它进行POS匹配
    “needsContext”：新的RegExp（“^”+空格 +“* [> +〜] | : (偶数 | 奇数 | eq | gt | lt | nth | first | last）（？：\\（”+
        空格 +“*（（？： -  \\ d）？\\ d *）”+空格 +“* \\）|）（？=[^ - ] | $）”，“i”）
} ，

rinputs = / ^（？：input | select | textarea | button）$ / i，
rheader = / ^ h \ d $ / i，

rnative = / ^ [^ {] + \ {\ s * \ [native \ w /，

//易于解析/可检索的ID或TAG或CLASS选择器
rquickExpr = /^(?:#([\w-]+)|(\w+)|\ .( [.w-] +））$ /，

rsibling = / [+〜] /，

// CSS逃脱
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape = new RegExp（“\\\\（[\\ da - f] { 1, 6 } ”+空格 +“？（|”+空格 +“）|。）”，“ig”），
funescape = function（_，escaped，escapedWhitespace）{
    var high =“0x”+转义 - 0x10000;
    // NaN表示非代码点
    //支持：Firefox <24
    //解决错误的数字解释+“0x”
    返回高！== 高 || 逃过白天？
    逃脱：
    高 < 0？
    // BMP代码点
    String.fromCharCode（high + 0x10000）：
    //补充平面代码点（代理对）
    String.fromCharCode（high >> 10 | 0xD800，high＆0x3FF | 0xDC00）;
} ，

// CSS字符串/标识符序列化
// https://drafts.c​​sswg.org/cssom/#common-serializing-idioms
rcssescape = /（[\ 0- \ x1f \ x7f] | ^  - ？\ d）| ^  -  $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w  - ] / g，
fcssescape = function（ch，asCodePoint）{
    if（asCodePoint）{

        // U + 0000 NULL变为U + FFFD REPLACEMENT CHARACTER
        if（ch ===“\ 0”）{
            返回“\ uFFFD”;
        }

        //控制字符和（取决于位置）数字作为代码点转义
        return ch.slice（0，-1）+“\\”+ ch.charCodeAt（ch.length - 1）.toString（16）+“”;
    }

    //其他可能特殊的ASCII字符获得反斜杠转义
    返回“\\”+ ch;
} ，

//用于iframe
//请参阅setDocument（）
//删除函数包装导致“权限被拒绝”
// IE中的错误
unloadHandler = function（）{
    setDocument（）;
} ，

disabledAncestor = addCombinator（
function（elem）{
    return elem.disabled === true &&（elem中的“form”| elem中的“form”）;
} ，
{ dir：“parentNode”，下一个：“legend” }
）;

//优化push.apply（_，NodeList）
尝试{
    push.apply（
    （arr = slice.call（preferredDoc.childNodes）），
    preferredDoc.childNodes
    ）;
    //支持：Android <4.0
    //无声地检测到push.apply失败
    arr[preferredDoc.childNodes.length].nodeType;
} catch（e）{
    push = {
        apply：arr.length？

        //如果可能，利用切片
        function（target，els）{
        push_native.apply（target，slice.call（els））;
    } ：

    //支持：IE <9
    //否则直接附加
    function（target，els）{
        var j = target.length，
            i = 0;
        //不能信任NodeList.length
        while（（target[j++] = els[i++]））{ }
        target.length = j - 1;
    }
};
}

function Sizzle（选择器，上下文，结果，种子）{
    var m，i，elem，nid，match，groups，newSelector，
        newContext = context && context.ownerDocument，

        // nodeType默认为9，因为上下文默认为document
        nodeType = context？context.nodeType：9;

    结果 = 结果 || [];

    //从无效选择器或上下文的调用中提前返回
    if（typeof selector！==“string”||！selector ||
        nodeType！== 1 && nodeType！== 9 && nodeType！== 11）{

        返回结果;
    }

    //尝试在HTML文档中快捷查找操作（而不是过滤器）
    if（！seed）{

        if（（context？context.ownerDocument || context：preferredDoc）！== document）{
            setDocument（context）;
        }
        context = context || 文献;

        if（documentIsHTML）{

            //如果选择器足够简单，请尝试使用“get * By *”DOM方法
            //（除了DocumentFragment上下文，其中方法不存在）
            if（nodeType！== 11 &&（match = rquickExpr.exec（selector）））{

                // ID选择器
                if（（m = match[1]））{

                    //文档上下文
                    if（nodeType === 9）{
                        if（（elem = context.getElementById（m）））{

                            //支持：IE，Opera，Webkit
                            // TODO：识别版本
                            // getElementById可以按名称而不是ID匹配元素
                            if（elem.id === m）{
                                results.push（elem）;
                                返回结果;
                            }
                        } else {
                            返回结果;
                        }

                        //元素上下文
                    } else {

                        //支持：IE，Opera，Webkit
                        // TODO：识别版本
                        // getElementById可以按名称而不是ID匹配元素
                        if（newContext &&（elem = newContext.getElementById（m））&&
                            包含（context，elem）&&
                                elem.id === m）{

                            results.push（elem）;
                            返回结果;
                        }
                    }

                    //类型选择器
                } else if（match[2]）{
                    push.apply（results，context.getElementsByTagName（selector））;
                    返回结果;

                    //类选择器
                } else if（（m = match[3]）&& support.getElementsByClassName &&
                    context.getElementsByClassName）{

                    push.apply（results，context.getElementsByClassName（m））;
                    返回结果;
                }
            }

            //利用querySelectorAll
            if（support.qsa &&
            ！compilerCache[selector +“”] &&
            （！rbuggyQSA ||！rbuggyQSA.test（selector）））{

                if（nodeType！== 1）{
                    newContext = context;
                    newSelector = selector;

                    // qSA查看Element上下文，这不是我们想要的
                    //感谢Andrew Dupont提供的这种解决方法
                    //支持：IE <= 8
                    //排除对象元素
                } else if（context.nodeName.toLowerCase（）！==“object”）{

                    //捕获上下文ID，必要时先设置它
                    if（（nid = context.getAttribute（“id”）））{
                        nid = nid.replace（rcssescape，fcssescape）;
                    } else {
                        context.setAttribute（“id”，（nid = expando））;
                    }

                    //在列表中添加每个选择器的前缀
                    groups = tokenize（selector）;
                    i = groups.length;
                    当我 -  ） {
                        groups[i] =“＃”+ nid +“”+ toSelector（groups[i]）;
                    }
                    newSelector = groups.join（“，”）;

                    //展开兄弟选择器的上下文
                    newContext = rsibling.test（selector）&& testContext（context.parentNode）||
                        上下文;
                }

                if（newSelector）{
                    尝试{
                        push.apply（结果，
                        newContext.querySelectorAll（newSelector）
                        ）;
                        返回结果;
                    } catch（qsaError）{
                    } finally {
                        if（nid === expando）{
                            context.removeAttribute（“id”）;
                        }
                    }
                }
            }
        }
    }

    // 所有其他人
    return select（selector.replace（rtrim，“$ 1”），context，results，seed）;
}

/ **
    * 创建有限大小的键值缓存
    * @returns { function（string，object） } 将对象数据存储在自身后，返回对象数据
        * 属性名称（带空格的）字符串和（如果缓存大于Expr.cacheLength）
 * 删除最旧的条目
    * /
function createCache（）{
    var keys = [];

    function cache（key，value）{
        //使用（键+“”）避免与本机原型属性冲突（请参阅问题＃157）
        if（keys.push（key +“”）> Expr.cacheLength）{
            //仅保留最新的条目
            delete cache[keys.shift（）];
        }
        return （cache[key +“”] = value）;
    }
    返回缓存;
}

/ **
    * 标记Sizzle特殊用途的功能
    * @param { Function } fn要标记的功能
        * /
function markFunction（fn）{
    fn[expando] = true;
    返回fn;
}

/ **
    * 支持使用元素进行测试
    * @param { Function } fn传递创建的元素并返回布尔结果
        * /
function assert（fn）{
    var el = document.createElement（“fieldset”）;

    尝试{
        return !!fn（el）;
    } catch（e）{
        返回false;
    } finally {
        //默认情况下从其父项中删除
        if（el.parentNode）{
            el.parentNode.removeChild（el）;
        }
        //在IE中释放内存
        el = null;
    }
}

/ **
    * 为所有指定的attrs添加相同的处理程序
    * @param { String } attrs以管道分隔的属性列表
        * @param { Function } handler将应用的方法
            * /
function addHandle（attrs，handler）{
    var arr = attrs.split（“|”），
    i = arr.length;

    当我 -  ） {
        Expr.attrHandle[arr[i]] = 处理程序;
    }
}

/ **
    * 检查两个兄弟姐妹的文件顺序
    * @param { Element } a
        * @param { Element } b
            * @returns { Number } 如果a在b之前，则返回小于0，如果a跟随b，则返回大于0
                * /
function siblingCheck（a，b）{
    var cur = b && a，
        diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
            a.sourceIndex - b.sourceIndex;

    //如果在两个节点上都可用，则使用IE sourceIndex
    if（diff）{
        返回差异;
    }

    //检查b是否跟随a
    if（cur）{
        while（（cur = cur.nextSibling））{
            if（cur === b）{
                返回 - 1;
            }
        }
    }

    回来了？1：-1;
}

/ **
    * 返回在伪输入中用于输入类型的函数
    * @param { String } 类型
        * /
function createInputPseudo（type）{
    return函数（elem）{
        var name = elem.nodeName.toLowerCase（）;
        返回名称 ===“输入”&& elem.type === type;
    };
}

/ **
    * 返回一个用于按钮的伪函数
    * @param { String } 类型
        * /
function createButtonPseudo（type）{
    return函数（elem）{
        var name = elem.nodeName.toLowerCase（）;
        return （name ===“input”|| name ===“button”）&& elem.type === type;
    };
}

/ **
    * 返回在伪中使用的函数：enabled /：disabled
        * @param { Boolean } 禁用true表示：已禁用; false for：启用
            * /
function createDisabledPseudo（disabled）{

    //已知：禁用误报：fieldset [disabled]> legend：nth-​​of-type（n + 2）：can-disable
    return函数（elem）{

        //只有某些元素可以匹配：启用或：禁用
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if（elem中的“form”）{

            //检查相关非禁用元素的继承禁用：
            // *在禁用的字段集中列出与表单相关的元素
            // https://html.spec.whatwg.org/multipage/forms.html#category-listed
            // https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
            // *禁用的optgroup中的选项元素
            // https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
            //所有这些元素都有一个“form”属性。
            if（elem.parentNode && elem.disabled === false）{

                //选项元素如果存在，则推迟到父选择组
                if（elem中的“label”）{
                    if（elem.parentNode中的“label”）{
                        return elem.parentNode.disabled === disabled;
                    } else {
                        return elem.disabled === disabled;
                    }
                }

                //支持：IE 6  -  11
                //使用isDisabled快捷方式属性检查禁用的字段集祖先
                return elem.isDisabled === disabled ||

                    //如果没有isDisabled，请手动检查
                    / * jshint -W018 * /
                elem.isDisabled！==！禁用 &&
                    disabledAncestor（elem）=== disabled;
            }

            return elem.disabled === disabled;

            //在信任disabled属性之前，尝试清除无法禁用的元素。
            //有些受害者被我们的网络（标签，图例，菜单，曲目）抓住了，但不应该
            //甚至存在于它们上面，更不用说有一个布尔值。
        } else if（elem中的“label”）{
            return elem.disabled === disabled;
        }

        //剩余的元素既不是：enabled也不是：disabled
        返回false;
    };
}

/ **
    * 返回一个在pseudos中用于定位的函数
    * @param { Function } fn
        * /
function createPositionalPseudo（fn）{
    return markFunction（function（argument）{
        argument = + argument;
        return markFunction（function（seed，matches）{
            var j，
                matchIndexes = fn（[]，seed.length，argument），
                i = matchIndexes.length;

            //匹配在指定索引处找到的元素
            当我 -  ） {
                if（seed[（j = matchIndexes[i]）]）{
                    seed[j] =！（匹配[j] = seed[j]）;
                }
            }
        } ）;
    } ）;
}

/ **
    * 检查节点的有效性作为Sizzle上下文
    * @param { Element | Object = } 上下文
        * @returns { Element | Object | Boolean } 输入节点（如果可接受），否则为假值
            * /
function testContext（context）{
    return context && typeof context.getElementsByTagName！==“undefined”&& context;
}

//为方便起见，公开支持变量
support = Sizzle.support = {};

/ **
    * 检测XML节点
    * @param { Element | Object } elem元素或文档
        * @returns { Boolean } 如果iff elem是非HTML XML节点，则为true
            * /
isXML = Sizzle.isXML = function（elem）{
    //对于尚未存在的情况，会验证documentElement
    //（例如在IE中加载iframe  - ＃4833）
    var documentElement = elem &&（elem.ownerDocument || elem）.documentElement;
    return documentElement？documentElement.nodeName！==“HTML”：false;
};

/ **
    * 根据当前文档设置一次与文档相关的变量
    * @param { Element | Object } [doc]用于设置文档的元素或文档对象
        * @returns { Object } 返回当前文档
            * /
setDocument = Sizzle.setDocument = function（node）{
    var hasCompare，subWindow，
        doc = node？node.ownerDocument || node：preferredDoc;

    //如果doc无效或已经选中，则提前返回
    if（doc === document || doc.nodeType！== 9 ||！doc.documentElement）{
        退货文件;
    }

    //更新全局变量
    document = doc;
    docElem = document.documentElement;
    documentIsHTML =！isXML（document）;

    //支持：IE 9-11，Edge
    //卸载后访问iframe文档会抛出“权限被拒绝”错误（jQuery＃13936）
    if（preferredDoc！== document &&
    （subWindow = document.defaultView）&& subWindow.top！== subWindow）{

        //支持：IE 11，Edge
        if（subWindow.addEventListener）{
            subWindow.addEventListener（“unload”，unloadHandler，false）;

            //支持：仅限IE 9  -  10
        } else if（subWindow.attachEvent）{
            subWindow.attachEvent（“onunload”，unloadHandler）;
        }
    }

    / *属性
    -------------------------------------------------- -------------------- * /

    //支持：IE <8
    //确认getAttribute确实返回属性而不是属性
    //（IE8布尔除外）
    support.attributes = assert（function（el）{
        el.className =“i”;
        return ！el.getAttribute（“className”）;
    } ）;

    / * getElement（s）By *
    -------------------------------------------------- -------------------- * /

    //检查getElementsByTagName（“*”）是否仅返回元素
    support.getElementsByTagName = assert（function（el）{
        el.appendChild（document.createComment（“”））;
        return ！el.getElementsByTagName（“*”）。length;
    } ）;

    //支持：IE <9
    support.getElementsByClassName = rnative.test（document.getElementsByClassName）;

    //支持：IE <10
    //检查getElementById是否按名称返回元素
    //破坏的getElementById方法不会以编程方式设置名称，
    //所以使用环形交叉口getElementsByName测试
    support.getById = assert（function（el）{
        docElem.appendChild（el）.id = expando;
        return ！document.getElementsByName || ！document.getElementsByName（expando）.length;
    } ）;

    // ID过滤并查找
    if（support.getById）{
        Expr.filter[“ID”] =函数（id）{
            var attrId = id.replace（runescape，funescape）;
            return函数（elem）{
                return elem.getAttribute（“id”）=== attrId;
            };
        };
        Expr.find[“ID”] = function（id，context）{
            if（typeof context.getElementById！==“undefined”&& documentIsHTML）{
                var elem = context.getElementById（id）;
                返回元素？[elem]：[];
            }
        };
    } else {
        Expr.filter[“ID”] =函数（id）{
            var attrId = id.replace（runescape，funescape）;
            return函数（elem）{
                var node = typeof elem.getAttributeNode！==“undefined”&&
                    elem.getAttributeNode（ “ID”）;
                return node && node.value === attrId;
            };
        };

        //支持：仅限IE 6  -  7
        // getElementById作为查找快捷方式不可靠
        Expr.find[“ID”] = function（id，context）{
            if（typeof context.getElementById！==“undefined”&& documentIsHTML）{
                var node，i，elems，
                    elem = context.getElementById（id）;

                if（elem）{

                    //验证id属性
                    node = elem.getAttributeNode（“id”）;
                    if（node && node.value === id）{
                        返回[elem];
                    }

                    //回到getElementsByName
                    elems = context.getElementsByName（id）;
                    i = 0;
                    while（（elem = elems[i++]））{
                        node = elem.getAttributeNode（“id”）;
                        if（node && node.value === id）{
                            返回[elem];
                        }
                    }
                }

                return [];
            }
        };
    }

    // 标签
    Expr.find[“TAG”] = support.getElementsByTagName？
    function（tag，context）{
        if（typeof context.getElementsByTagName！==“undefined”）{
            return context.getElementsByTagName（tag）;

            // DocumentFragment节点没有gEBTN
        } else if（support.qsa）{
            return context.querySelectorAll（tag）;
        }
    } ：

    function（tag，context）{
        var elem，
            tmp = []，
            i = 0，
            //幸运的是巧合，一个（破碎的）gEBTN也出现在DocumentFragment节点上
            results = context.getElementsByTagName（tag）;

        //过滤掉可能的评论
        if（tag ===“*”）{
            while（（elem = results[i++]））{
                if（elem.nodeType === 1）{
                    tmp.push（elem）;
                }
            }

            返回tmp;
        }
        返回结果;
    };

    //类
    Expr.find[“CLASS”] = support.getElementsByClassName && function（className，context）{
        if（typeof context.getElementsByClassName！==“undefined”&& documentIsHTML）{
            return context.getElementsByClassName（className）;
        }
    };

    / * QSA / matchesSelector
    -------------------------------------------------- -------------------- * /

    // QSA和matchesSelector支持

    // matchesSelector（：active）在为true时报告为false（IE9 / Opera 11.5）
    rbuggyMatches = [];

    // qSa（：focus）在为true时报告为false（Chrome 21）
    //我们允许这样做，因为IE8 / 9中的错误会引发错误
    //每当在iframe上访问`document.activeElement`时
    //所以，我们允许：焦点一直通过QSA来避免IE错误
    //请参阅https://bugs.jquery.com/ticket/13378
    rbuggyQSA = [];

    if（（support.qsa = rnative.test（document.querySelectorAll）））{
        //构建QSA正则表达式
        //来自Diego Perini的正则表达式策略
        断言（function（el）{
            // Select有意设置为空字符串
            //这是为了测试IE的未明确处理
            //设置布尔内容属性，
            //因为它的存在应该足够了
            // https://bugs.jquery.com/ticket/12359
            docElem.appendChild（el）.innerHTML =“<a id='" + expando +”'> </a>“+
            “<select id='”+ expando +“ -  \ r \\' msallowcapture=''>”+
				“<option selected=''> </ option> </ select>”;

            //支持：IE8，Opera 11-12.16
            //当空字符串跟随^ =或$ =或* =时，不应选择任何内容
            //测试属性在Opera中必须是未知的，但对WinRT来说是“安全的”
            // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
            if（el.querySelectorAll（“[msallowcapture ^ ='']”）。length）{
                rbuggyQSA.push（“[* ^ $] =”+ whitespace +“*（？：'' | \”\“）”）;
            }

            //支持：IE8
            //布尔属性和“值”未得到正确处理
            if（！el.querySelectorAll（“[selected]”）。length）{
                rbuggyQSA.push（“\\[”+ whitespace +“*（?: value |”+ booleans +“）”）;
			}

            //支持：Chrome <29，Android <4.4，Safari <7.0 +，iOS <7.0+，PhantomJS <1.9.8+
            if（！el.querySelectorAll（“[id~ =”+ expando +“ - ]”）。length）{
                rbuggyQSA.push（ “〜=”）;
            }

            // Webkit / Opera  - ：checked应返回选定的选项元素
            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
            // IE8在这里抛出错误，不会看到以后的测试
            if（！el.querySelectorAll（“：checked”）。length）{
                rbuggyQSA.push（ “：检查”）;
            }

            //支持：Safari 8 +，iOS 8+
            // https://bugs.webkit.org/show_bug.cgi?id=136851
            //页内`selector #id兄弟组合选择器'失败
            if（！el.querySelectorAll（“a＃”+ expando +“+ *”）。length）{
                rbuggyQSA.push（ “＃+[+〜]。”）;
            }
        } ）;

        断言（function（el）{
            el.innerHTML =“<a href='' disable='disabled'> </a>”+
            “<select disabled='disabled'> <option /> </ select>”;

            //支持：Windows 8 Native Apps
            //在.innerHTML赋值期间，类型和名称属性受到限制
            var input = document.createElement（“input”）;
            input.setAttribute（“type”，“hidden”）;
            el.appendChild（input）.setAttribute（“name”，“D”）;

            //支持：IE8
            //强制使用name属性区分大小写
            if（el.querySelectorAll（“[name = d]”）。length）{
                rbuggyQSA.push（“name”+ whitespace +“* [* ^ $ |！〜]？=”）;
            }

            // FF 3.5  - ：启用/：禁用和隐藏元素（隐藏元素仍然启用）
            // IE8在这里抛出错误，不会看到以后的测试
            if（el.querySelectorAll（“：enabled”）。length！== 2）{
                rbuggyQSA.push（“：enabled”，“：disabled”）;
            }

            //支持：IE9-11 +
            // IE：禁用的选择器不会拾取禁用的字段集的子节点
            docElem.appendChild（el）.disabled = true;
            if（el.querySelectorAll（“：disabled”）。length！== 2）{
                rbuggyQSA.push（“：enabled”，“：disabled”）;
            }

            // Opera 10-11不会抛出逗号后的无效伪
            el.querySelectorAll（ “* ,: X”）;
            rbuggyQSA.push（ “*：”）;
        } ）;
    }

    if（（support.matchesSelector = rnative.test（（matches = docElem.matches ||
        docElem.webkitMatchesSelector ||
        docElem.mozMatchesSelector ||
        docElem.oMatchesSelector ||
        docElem.msMatchesSelector））））{

        断言（function（el）{
            //检查是否可以执行matchesSelector
            //在断开连接的节点上（IE 9）
            support.disconnectedMatch = matches.call（el，“*”）;

            //这应该失败并出现异常
            // Gecko没有错误，而是返回false
            matches.call（el，“[s！='']：x”）;
            rbuggyMatches.push（“！=”，pseudos）;
        } ）;
    }

    rbuggyQSA = rbuggyQSA.length && new RegExp（rbuggyQSA.join（“|”））;
    rbuggyMatches = rbuggyMatches.length && new RegExp（rbuggyMatches.join（“|”））;

    / *包含
    -------------------------------------------------- -------------------- * /
    hasCompare = rnative.test（docElem.compareDocumentPosition）;

    //元素包含另一个
    //有目的地自我排斥
    //在中，元素不包含自身
    contains = hasCompare || rnative.test（docElem.contains）？
    function（a，b）{
        var adown = a.nodeType === 9？a.documentElement：a，
            bup = b && b.parentNode;
        返回 === bup || !!（bup && bup.nodeType === 1 &&（
        adown.contains？
        adown.contains（bup）：
        a.compareDocumentPosition && a.compareDocumentPosition（bup）＆16
        ））;
    } ：
    function（a，b）{
        if（b）{
            while（（b = b.parentNode））{
                if（b === a）{
                    返回true;
                }
            }
        }
        返回false;
    };

    / *排序
    -------------------------------------------------- -------------------- * /

    //文档订单排序
    sortOrder = hasCompare？
    function（a，b）{

        //重复删除标记
        if（a === b）{
            hasDuplicate = true;
            返回0;
        }

        //如果只有一个输入具有compareDocumentPosition，则排序方法存在
        var compare =！a.compareDocumentPosition  - ！b.compareDocumentPosition;
        if（compare）{
            回报比较;
        }

        //如果两个输入都属于同一文档，则计算位置
        compare =（a.ownerDocument || a）===（b.ownerDocument || b）？
        a.compareDocumentPosition（b）：

        //否则我们知道他们已断开连接
        1;

        //已断开连接的节点
        if（比较＆1 ||
        （！support.sortDetached && b.compareDocumentPosition（a）=== compare））{

            //选择与我们首选文档相关的第一个元素
            if（a === document || a.ownerDocument === preferredDoc && contains（preferredDoc，a））{
                返回 - 1;
            }
            if（b === document || b.ownerDocument === preferredDoc && contains（preferredDoc，b））{
                返回1;
            }

            //保持原始订单
            返回sortInput？
            （indexOf（sortInput，a） -  indexOf（sortInput，b））：
            0;
        }

        返回比较＆4？-1：1;
    } ：
    function（a，b）{
        //如果节点相同，则提前退出
        if（a === b）{
            hasDuplicate = true;
            返回0;
        }

        var cur，
            i = 0，
            aup = a.parentNode，
            bup = b.parentNode，
            ap = [a]，
            bp = [b];

        //无父节点是文档或断开连接
        if（！aup ||！bup）{
            返回一个 === 文件？-1：
            b === 文件？1：
            哎？-1：
            bup？1：
            sortInput？
            （indexOf（sortInput，a） -  indexOf（sortInput，b））：
            0;

            //如果节点是兄弟节点，我们可以快速检查
        } else if（aup === bup）{
            return siblingCheck（a，b）;
        }

        //否则我们需要他们的祖先的完整列表进行比较
        cur = a;
        while（（cur = cur.parentNode））{
            ap.unshift（cur）;
        }
        cur = b;
        while（（cur = cur.parentNode））{
            bp.unshift（cur）;
        }

        //走下树寻找差异
        while（ap[i] === bp[i]）{
            我++;
        }

        回来我？
        //做兄弟检查节点是否有共同的祖先
        siblingCheck（ap[i]，bp[i]）：

        //否则我们文档中的节点首先排序
        ap[i] === preferredDoc？-1：
        bp[i] === preferredDoc？1：
        0;
    };

    退货文件;
};

Sizzle.matches = function（expr，elements）{
    return Sizzle（expr，null，null，elements）;
};

Sizzle.matchesSelector = function（elem，expr）{
    //如果需要，设置文档变量
    if（（elem.ownerDocument || elem）！== document）{
        setDocument（elem）;
    }

    //确保引用属性选择器
    expr = expr.replace（rattributeQuotes，“='$ 1']”）;

    if（support.matchesSelector && documentIsHTML &&
    ！compilerCache[expr +“”] &&
    （！rbuggyMatches ||！rbuggyMatches.test（expr））&&
    （！rbuggyQSA ||！rbuggyQSA.test（expr）））{

        尝试{
            var ret = matches.call（elem，expr）;

            // IE 9的matchesSelector在断开连接的节点上返回false
            if（ret || support.disconnectedMatch ||
                //同样，断开连接的节点也被称为文档
                // IE 9中的片段
                elem.document && elem.document.nodeType！== 11）{
                返回;
            }
        } catch（e）{ }
    }

    return Sizzle（expr，document，null，[elem]）。length > 0;
};

Sizzle.contains = function（context，elem）{
    //如果需要，设置文档变量
    if（（context.ownerDocument || context）！== document）{
        setDocument（context）;
    }
    return contains（context，elem）;
};

Sizzle.attr = function（elem，name）{
    //如果需要，设置文档变量
    if（（elem.ownerDocument || elem）！== document）{
        setDocument（elem）;
    }

    var fn = Expr.attrHandle[name.toLowerCase（）]，
        //不要被Object.prototype属性愚弄（jQuery＃13807）
        val = fn && hasOwn.call（Expr.attrHandle，name.toLowerCase（））？
        fn（elem，name，！documentIsHTML）：
        不确定的;

    return val！== undefined？
    val：
    support.attributes || ！documentIsHTML？
    elem.getAttribute（name）：
    （val = elem.getAttributeNode（name））&& val.specified？
    val.value：
    空值;
};

Sizzle.escape = function（sel）{
    return （sel +“”）.replace（rcssescape，fcssescape）;
};

Sizzle.error = function（msg）{
    抛出新错误（“语法错误，无法识别的表达式：”+ msg）;
};

/ **
    * 文件分类和删除重复
    * @param { ArrayLike } 结果
        * /
Sizzle.uniqueSort = function（results）{
    var elem，
        duplicates = []，
        j = 0，
        i = 0;

    //除非我们*知道*我们可以检测到重复，否则请假设它们存在
    hasDuplicate =！support.detectDuplicates;
    sortInput =！support.sortStable && results.slice（0）;
    results.sort（sortOrder）;

    if（hasDuplicate）{
        while（（elem = results[i++]））{
            if（elem === results[i]）{
                j = duplicates.push（i）;
            }
        }
        while（j--）{
            results.splice（duplicates[j]，1）;
        }
    }

    //排序后清除输入以释放对象
    //请参阅https://github.com/jquery/sizzle/pull/225
    sortInput = null;

    返回结果;
};

/ **
    * 实用程序函数，用于检索DOM节点数组的文本值
        * @param { Array | Element } elem
            * /
getText = Sizzle.getText = function（elem）{
    var节点，
    ret =“”，
    i = 0，
    nodeType = elem.nodeType;

    if（！nodeType）{
        //如果没有nodeType，那么这应该是一个数组
        while（（node = elem[i++]））{
            //不要遍历评论节点
            ret + = getText（node）;
        }
    } else if（nodeType === 1 || nodeType === 9 || nodeType === 11）{
        //对元素使用textContent
        //删除了innerText用法以保证新行的一致性（jQuery＃11153）
        if（typeof elem.textContent ===“string”）{
            return elem.textContent;
        } else {
            //穿越它的孩子
            for（elem = elem.firstChild; elem; elem = elem.nextSibling）{
                ret + = getText（elem）;
            }
        }
    } else if（nodeType === 3 || nodeType === 4）{
        return elem.nodeValue;
    }
    //不包括注释或处理指令节点

    返回;
};

Expr = Sizzle.selectors = {

    //可以由用户调整
    cacheLength：50，

    createPseudo：markFunction，

    匹配：matchExpr，

    attrHandle：{ } ，

找： { } ，

亲戚：{
    “>”：{ dir：“parentNode”，first：true } ，
    “”：{ dir：“parentNode” } ，
    “+”：{ dir：“previousSibling”，first：true } ，
    “〜”：{ dir：“previousSibling” }
} ，

preFilter：{
    “ATTR”：function（match）{
        match[1] = match[1].replace（runescape，funescape）;

        //移动给定值以匹配[3]是引用还是不引用
        match[3] =（match[3] || match[4] || match[5] ||“”）.replace（runescape，funescape）;

        if（match[2] ===“〜=”）{
            match[3] =“”+ match[3] +“”;
        }

        return match.slice（0, 4）;
    } ，

    “CHILD”：function（match）{
        / *匹配来自matchExpr [“CHILD”]
        1种类型（仅 | nth | ...）
        2什么（孩子的类型）
        3个参数（偶数 | 奇数 | \ d * | \ d * n（[+  - ] \ d +）？| ...）
        xn + y参数的4 xn分量（[+  - ]？\ d * n |）
        5个xn分量的符号
        6 x xn - component
        y分量的7个符号
        y元素8 y
            * /
        match[1] = match[1].toLowerCase（）;

        if（match[1].slice（0, 3）===“nth”）{
            // nth- *需要参数
            if（！match[3]）{
                Sizzle.error（匹配[0]）;
            }

            // Expr.filter.CHILD的数字x和y参数
            //记住false / true分别为0/1
            match[4] = +（match[4]？match[5] +（match[6] || 1）：2 *（match[3] ===“even”|| match[3] ===“奇怪的“））;
            match[5] = +（（match[7] + match[8]）|| match[3] ===“odd”）;

            //其他类型禁止参数
        } else if（match[3]）{
            Sizzle.error（匹配[0]）;
        }

        回归比赛;
    } ，

    “PSEUDO”：function（match）{
        var过剩，
        unquoted =！match[6] && match[2];

        if（matchExpr[“CHILD”]。test（match[0]））{
            return null;
        }

        //按原样接受引用的参数
        if（匹配[3]）{
            匹配[2] = 匹配[4] || 匹配[5] || “”;

            //从不带引号的参数中删除多余的字符
        } else if（unquoted && rpseudo.test（unquoted）&&
        //从tokenize中获取多余（递归）
        （excess = tokenize（unquoted，true））&&
        //前进到下一个右括号
        （excess = unquoted.indexOf（“）”，unquoted.length - excess） -  unquoted.length））{

            //多余是负指数
            match[0] = match[0].slice（0，excess）;
            match[2] = unquoted.slice（0，excess）;
        }

        //仅返回伪过滤器方法所需的捕获（类型和参数）
        return match.slice（0, 3）;
    }
} ，

过滤器：{

    “TAG”：function（nodeNameSelector）{
        var nodeName = nodeNameSelector.replace（runescape，funescape）.toLowerCase（）;
        return nodeNameSelector ===“*”？
        function（）{ return true; } ：
        function（elem）{
            return elem.nodeName && elem.nodeName.toLowerCase（）=== nodeName;
        };
    } ，

    “CLASS”：function（className）{
        var pattern = classCache[className +“”];

        返回模式 ||
        （pattern = new RegExp（“（^ |”+ whitespace +“）”+ className +“（”+ whitespace +“| $）”））&&
            classCache（className，function（elem）{
            return pattern.test（typeof elem.className ===“string”&& elem.className || typeof elem.getAttribute！==“undefined”&& elem.getAttribute（“class ”）||“”）;
        } ）;
    } ，

    “ATTR”：函数（名称，运算符，检查）{
        return函数（elem）{
            var result = Sizzle.attr（elem，name）;

            if（result == null）{
                return operator ===“！=”;
            }
            if（！operator）{
                返回true;
            }

            结果 + =“”;

            return operator ===“=”？结果 === 检查：
            operator ===“！=”？结果！== 检查：
            operator ===“^ =”？check && result.indexOf（check）=== 0：
            operator ===“* =”？check && result.indexOf（check）> -1：
            operator ===“$ =”？check && result.slice（-check.length）=== check：
            operator ===“〜=”？（“”+ result.replace（rwhitespace，“”）+“”）。indexOf（check）> -1：
            operator ===“| =”？结果 === 检查 || result.slice（0，check.length + 1）=== check +“ - ”：
            假;
        };
    } ，

    “CHILD”：函数（类型，内容，参数，第一个，最后一个）{
        var simple = type.slice（0, 3）！==“nth”，
        forward = type.slice（-4）！==“last”，
        ofType = what ===“of - type”;

        先退回 === 1 && last === 0？

        //快捷方式：第n  -  *（n）
        function（elem）{
            return !!elem.parentNode;
        } ：

        function（elem，context，xml）{
            var cache，uniqueCache，outerCache，node，nodeIndex，start，
                dir = 简单！== 转发？“nextSibling”：“previousSibling”，
            parent = elem.parentNode，
            name = ofType && elem.nodeName.toLowerCase（），
            useCache =！xml &&！ofType，
            diff = false;

            if（parent）{

                // :( first | last | only） - （child | of-type）
                if（simple）{
                    while（dir）{
                        node = elem;
                        while（（node = node[dir]））{
                            if（ofType？
                            node.nodeName.toLowerCase（）=== name：
                            node.nodeType === 1）{

                                返回false;
                            }
                        }
                        //反向：仅 -  *（如果我们还没有这样做）
                        start = dir = type ===“only”&&！start &&“nextSibling”;
                    }
                    返回true;
                }

                开始 = [前进？parent.firstChild：parent.lastChild];

                // non-xml：nth-​​child（...）将缓存数据存储在`parent`上
                if（forward && useCache）{

                    //从先前缓存的索引中搜索`elem`

                    // ...以gzip友好的方式
                    node = parent;
                    outerCache = node[expando] || （node[expando] = {}）;

                    //支持：IE <9
                    //抵御克隆的attroperties（jQuery gh-1709）
                    uniqueCache = outerCache[node.uniqueID] ||
                    （outerCache[node.uniqueID] = {}）;

                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];

                    while（（node = ++nodeIndex && node && node[dir] ||

                    //从一开始就回到寻求“elem”
                    （diff = nodeIndex = 0）|| start.pop（）））{

                        //找到后，在`parent`上缓存索引并中断
                        if（node.nodeType === 1 && ++diff && node === elem）{
                            uniqueCache[type] = [dirruns，nodeIndex，diff];
                            打破;
                        }
                    }

                } else {
                    //使用先前缓存的元素索引（如果可用）
                    if（useCache）{
                        // ...以gzip友好的方式
                        node = elem;
                        outerCache = node[expando] || （node[expando] = {}）;

                        //支持：IE <9
                        //抵御克隆的attroperties（jQuery gh-1709）
                        uniqueCache = outerCache[node.uniqueID] ||
                        （outerCache[node.uniqueID] = {}）;

                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                    }

                    // xml：nth-​​child（...）
                    //或：nth-​​last-child（...）或：nth（-last）？ -  of-type（...）
                    if（diff === false）{
                        //使用与上面相同的循环从头开始寻找`elem`
                        while（（node = ++nodeIndex && node && node[dir] ||
                        （diff = nodeIndex = 0）|| start.pop（）））{

                            if（（ofType？
                            node.nodeName.toLowerCase（）=== name：
                            node.nodeType === 1）&&
                                ++diff）{

                                //缓存每个遇到元素的索引
                                if（useCache）{
                                    outerCache = node[expando] || （node[expando] = {}）;

                                    //支持：IE <9
                                    //抵御克隆的attroperties（jQuery gh-1709）
                                    uniqueCache = outerCache[node.uniqueID] ||
                                    （outerCache[node.uniqueID] = {}）;

                                    uniqueCache[type] = [dirruns，diff];
                                }

                                if（node === elem）{
                                    打破;
                                }
                            }
                        }
                    }
                }

                //合并偏移量，然后检查循环大小
                diff -  = last;
                return diff === first || （diff％first === 0 && diff / first > = 0）;
            }
        };
    } ，

    “PSEUDO”：function（伪，参数）{
        //伪类名称不区分大小写
        // http://www.w3.org/TR/selectors/#pseudo-classes
        //如果使用大写字母添加自定义伪，则按大小写区分优先级
        //记住setFilters继承自pseudos
        var args，
            fn = Expr.pseudos[伪] || Expr.setFilters[pseudo.toLowerCase（）] ||
                Sizzle.error（“unsupported pseudo：”+ pseudo）;

        //用户可以使用createPseudo来指示
        //创建过滤函数需要参数
        //正如Sizzle所做的那样
        if（fn[expando]）{
            return fn（argument）;
        }

        //但保持对旧签名的支持
        if（fn.length > 1）{
            args = [伪，伪，“”，参数];
            返回Expr.setFilters.hasOwnProperty（pseudo.toLowerCase（））？
            markFunction（function（seed，matches）{
                var idx，
                    匹配 = fn（种子，参数），
                    i = matched.length;
                当我 -  ） {
                    idx = indexOf（seed，matched[i]）;
                    seed[idx] =！（匹配[idx] = matched[i]）;
                }
            } ）：
            function（elem）{
                return fn（elem，0，args）;
            };
        }

        返回fn;
    }
} ，

伪：{
    //可能是复杂的伪
    “not”：markFunction（function（selector）{
        //修剪传递给编译器的选择器
        //避免处理前导和尾随
        //作为组合器的空格
        var input = []，
            results = []，
            matcher = compile（selector.replace（rtrim，“$ 1”））;

        返回匹配器[expando]？
        markFunction（function（seed，matches，context，xml）{
            var elem，
                unmatched = matcher（seed，null，xml，[]），
            i = seed.length;

            //匹配`matcher`无法匹配的元素
            当我 -  ） {
                if（（elem = unmatched[i]））{
                    seed[i] =！（匹配[i] = elem）;
                }
            }
        } ）：
        function（elem，context，xml）{
            input[0] = elem;
            matcher（输入，null，xml，结果）;
            //不要保留元素（问题＃299）
            input[0] = null;
            return ！results.pop（）;
        };
    } ），

    “has”：markFunction（function（selector）{
        return函数（elem）{
            return Sizzle（selector，elem）.length > 0;
        };
    } ），

    “contains”：markFunction（function（text）{
        text = text.replace（runescape，funescape）;
        return函数（elem）{
            return （elem.textContent || elem.innerText || getText（elem））。indexOf（text）> -1;
        };
    } ），

    //“元素是否由：lang（）选择器表示
    //仅基于元素的语言值
    //等于标识符C，
    //或者以标识符C开头，后面紧跟“ - ”。
    //不区分大小写地执行C与元素语言值的匹配。
    //标识符C不必是有效的语言名称。“
    // http://www.w3.org/TR/selectors/#lang-pseudo
    “lang”：markFunction（function（lang）{
        // lang值必须是有效的标识符
        if（！ridentifier.test（lang ||“”））{
            Sizzle.error（“不支持lang：”+ lang）;
        }
        lang = lang.replace（runescape，funescape）.toLowerCase（）;
        return函数（elem）{
            var elemLang;
            做{
                if（（elemLang = documentIsHTML？
                elem.lang：
                elem.getAttribute（“xml：lang”）|| elem.getAttribute（“lang”）））{

                    elemLang = elemLang.toLowerCase（）;
                    返回elemLang === lang || elemLang.indexOf（lang +“ - ”）=== 0;
                }
            } （（elem = elem.parentNode）&& elem.nodeType === 1）;
            返回false;
        };
    } ），

    //杂项
    “target”：function（elem）{
        var hash = window.location && window.location.hash;
        return hash && hash.slice（1）=== elem.id;
    } ，

    “root”：function（elem）{
        return elem === docElem;
    } ，

    “focus”：function（elem）{
        return elem === document.activeElement &&（！document.hasFocus || document.hasFocus（））&& !!（elem.type || elem.href || ~elem.tabIndex）;
    } ，

    //布尔属性
    “enabled”：createDisabledPseudo（false），
    “disabled”：createDisabledPseudo（true），

    “checked”：function（elem）{
        //在CSS3中，：checked应返回已选中和已选中的元素
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        var nodeName = elem.nodeName.toLowerCase（）;
        return （nodeName ===“input”&& !!elem.checked）|| （nodeName ===“option”&& !!elem.selected）;
    } ，

    “selected”：function（elem）{
        //访问此属性会默认选中
        // Safari中的选项正常工作
        if（elem.parentNode）{
            elem.parentNode.selectedIndex;
        }

        return elem.selected === true;
    } ，

    //内容
    “empty”：function（elem）{
        // http://www.w3.org/TR/selectors/#empty-pseudo
        //：empty由element（1）或内容节点（text：3; cdata：4; entity ref：5）取消，
        //但不是其他人（评论：8;处理指令：7;等）
        // nodeType <6有效，因为attributes（2）不显示为子项
        for（elem = elem.firstChild; elem; elem = elem.nextSibling）{
            if（elem.nodeType < 6）{
                返回false;
            }
        }
        返回true;
    } ，

    “parent”：function（elem）{
        返回！Expr.pseudos[“empty”]（elem）;
    } ，

    //元素/输入类型
    “header”：function（elem）{
        return rheader.test（elem.nodeName）;
    } ，

    “input”：function（elem）{
        return rinputs.test（elem.nodeName）;
    } ，

    “button”：function（elem）{
        var name = elem.nodeName.toLowerCase（）;
        返回名称 ===“输入”&& elem.type ===“按钮”|| name ===“button”;
    } ，

    “text”：function（elem）{
        var attr;
        return elem.nodeName.toLowerCase（）===“input”&&
            elem.type ===“text”&&

        //支持：IE <8
        //新的HTML5属性值（例如“搜索”）与elem.type ===“text”一起出现
        （（attr = elem.getAttribute（“type”））== null || attr.toLowerCase（）===“text”）;
    } ，

    //收集位置
    “first”：createPositionalPseudo（function（）{
        return [0];
    } ），

    “last”：createPositionalPseudo（function（matchIndexes，length）{
        return [length - 1];
    } ），

    “eq”：createPositionalPseudo（function（matchIndexes，length，argument）{
        return [参数 < 0？argument + length：argument];
    } ），

    “even”：createPositionalPseudo（function（matchIndexes，length）{
        var i = 0;
        for（; i < length; i + = 2）{
            matchIndexes.push（i）;
        }
        return matchIndexes;
    } ），

    “odd”：createPositionalPseudo（function（matchIndexes，length）{
        var i = 1;
        for（; i < length; i + = 2）{
            matchIndexes.push（i）;
        }
        return matchIndexes;
    } ），

    “lt”：createPositionalPseudo（function（matchIndexes，length，argument）{
        var i = 参数 < 0？参数+长度：参数;
        for（; --i > = 0; ）{
            matchIndexes.push（i）;
        }
        return matchIndexes;
    } ），

    “gt”：createPositionalPseudo（function（matchIndexes，length，argument）{
        var i = 参数 < 0？参数+长度：参数;
        for（; ++i < length; ）{
            matchIndexes.push（i）;
        }
        return matchIndexes;
    } ）
}
};

Expr.pseudos[“nth”] = Expr.pseudos[“eq”];

//添加按钮/输入类型伪
for（i in { radio：true，checkbox：true，file：true，password：true，image：true}）{
    Expr.pseudos[i] = createInputPseudo（i）;
}
for（i in { submit：true，reset：true}）{
    Expr.pseudos[i] = createButtonPseudo（i）;
}

//用于创建新setFilters的Easy API
function setFilters（）{ }
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters（）;

tokenize = Sizzle.tokenize = function（selector，parseOnly）{
    var匹配，匹配，令牌，类型，
    soFar，groups，preFilters，
    cached = tokenCache[selector +“”];

    if（缓存）{
        返回parseOnly？0：cached.slice（0）;
    }

    soFar = 选择器;
    groups = [];
    preFilters = Expr.preFilter;

    while（soFar）{

        //逗号和第一次运行
        if（！matched ||（match = rcomma.exec（soFar）））{
            if（match）{
                //不要将尾随逗号视为有效
                soFar = soFar.slice（match[0].length）|| 至今;
            }
            groups.push（（tokens = []））;
        }

        匹配 = 假;

        //组合
        if（（match = rcombinators.exec（soFar）））{
            matched = match.shift（）;
            tokens.push（{
                价值：匹配，
                //将后代组合子投射到空间
                type：match[0].replace（rtrim，“”）
            } ）;
            soFar = soFar.slice（matched.length）;
        }

        //过滤器
        for（在Expr.filter中输入）{
            if（（match = matchExpr[type].exec（soFar））&&（！preFilters[type] ||
            （match = preFilters[type]（match））））{
                matched = match.shift（）;
                tokens.push（{
                    价值：匹配，
                    类型：类型，
                    匹配：匹配
                } ）;
                soFar = soFar.slice（matched.length）;
            }
        }

        if（！matched）{
            打破;
        }
    }

    //返回无效多余的长度
    //如果我们只是解析
    //否则，抛出错误或返回令牌
    返回parseOnly？
    soFar.length：
    至今 ？
    Sizzle.error（选择器）：
    //缓存令牌
    tokenCache（selector，groups）.slice（0）;
};

function toSelector（tokens）{
    var i = 0，
        len = tokens.length，
        selector =“”;
    for（; i < len; i++）{
        selector + = tokens[i].value;
    }
    返回选择器;
}

function addCombinator（matcher，combinator，base）{
    var dir = combinator.dir，
        skip = combinator.next，
        key = skip || DIR，
        checkNonElements = base && key ===“parentNode”，
        doneName = done++;

    返回combinator.first？
    //检查最近的祖先/前一个元素
    function（elem，context，xml）{
        while（（elem = elem[dir]））{
            if（elem.nodeType === 1 || checkNonElements）{
                return matcher（elem，context，xml）;
            }
        }
        返回false;
    } ：

    //检查所有祖先/前面的元素
    function（elem，context，xml）{
        var oldCache，uniqueCache，outerCache，
            newCache = [dirruns，doneName];

        //我们无法在XML节点上设置任意数据，因此它们无法从组合缓存中受益
        if（xml）{
            while（（elem = elem[dir]））{
                if（elem.nodeType === 1 || checkNonElements）{
                    if（matcher（elem，context，xml））{
                        返回true;
                    }
                }
            }
        } else {
            while（（elem = elem[dir]））{
                if（elem.nodeType === 1 || checkNonElements）{
                    outerCache = elem[expando] || （elem[expando] = {}）;

                    //支持：IE <9
                    //抵御克隆的attroperties（jQuery gh-1709）
                    uniqueCache = outerCache[elem.uniqueID] || （outerCache[elem.uniqueID] = {}）;

                    if（skip && skip === elem.nodeName.toLowerCase（））{
                        elem = elem[dir] || ELEM;
                    } else if（（oldCache = uniqueCache[key]）&&
                        oldCache[0] === dirruns && oldCache[1] === doneName）{

                        //分配给newCache，以便结果反向传播到以前的元素
                        return （newCache[2] = oldCache[2]）;
                    } else {
                        //重用newcache，使结果反向传播到前面的元素
                        uniqueCache[key] = newCache;

                        //一场比赛意味着我们已经完成了; 失败意味着我们必须继续检查
                        if（（newCache[2] = matcher（elem，context，xml）））{
                            返回true;
                        }
                    }
                }
            }
        }
        返回false;
    };
}

function elementMatcher（matchers）{
    return matchers.length > 1？
    function（elem，context，xml）{
        var i = matchers.length;
        当我 -  ） {
            if（！matchers[i]（elem，context，xml））{
                返回false;
            }
        }
        返回true;
    } ：
    匹配器[0];
}

function multipleContexts（selector，contexts，results）{
    var i = 0，
        len = contexts.length;
    for（; i < len; i++）{
        Sizzle（选择器，contexts[i]，结果）;
    }
    返回结果;
}

function condense（unmatched，map，filter，context，xml）{
    var elem，
        newUnmatched = []，
        i = 0，
        len = unmatched.length，
        mapped = map！= null;

    for（; i < len; i++）{
        if（（elem = unmatched[i]））{
            if（！filter || filter（elem，context，xml））{
                newUnmatched.push（elem）;
                if（mapped）{
                    map.push（i）;
                }
            }
        }
    }

    return newUnmatched;
}

function setMatcher（preFilter，selector，matcher，postFilter，postFinder，postSelector）{
    if（postFilter &&！postFilter[expando]）{
        postFilter = setMatcher（postFilter）;
    }
    if（postFinder &&！postFinder[expando]）{
        postFinder = setMatcher（postFinder，postSelector）;
    }
    return markFunction（function（seed，results，context，xml）{
        var temp，i，elem，
            preMap = []，
            postMap = []，
            preexisting = results.length，

            //从种子或上下文中获取初始元素
            elems = 种子 || multipleContexts（selector ||“*”，context.nodeType？[context]：context，[]），

        // Prefilter获取匹配器输入，保留种子结果同步的映射
        matcherIn = preFilter &&（seed ||！selector）？
        压缩（elems，preMap，preFilter，context，xml）：
        elems的，

        matcherOut = matcher？
        //如果我们有postFinder，或过滤的种子，或非种子postFilter或预先存在的结果，
        postFinder || （种子？preFilter：preexisting || postFilter）？

        // ...中间处理是必要的
        []：

        // ...否则直接使用结果
        结果：
        matcherIn;

        //查找主要匹配项
        if（matcher）{
            matcher（matcherIn，matcherOut，context，xml）;
        }

        //应用postFilter
        if（postFilter）{
            temp = condense（matcherOut，postMap）;
            postFilter（temp，[]，context，xml）;

            //通过将失败元素移回matcherIn来使其失败
            i = temp.length;
            当我 -  ） {
                if（（elem = temp[i]））{
                    matcherOut[postMap[i]] =！（matcherIn[postMap[i]] = elem）;
                }
            }
        }

        if（seed）{
            if（postFinder || preFilter）{
                if（postFinder）{
                    //通过将此中间项压缩到postFinder上下文中来获取最终的matcherOut
                    temp = [];
                    i = matcherOut.length;
                    当我 -  ） {
                        if（（elem = matcherOut[i]））{
                            //恢复matcherIn因为elem还不是最终匹配
                            temp.push（（matcherIn[i] = elem））;
                        }
                    }
                    postFinder（null，（matcherOut = []），temp，xml）;
                }

                //将匹配的元素从种子移动到结果以使它们保持同步
                i = matcherOut.length;
                当我 -  ） {
                    if（（elem = matcherOut[i]）&&
                    （temp = postFinder？indexOf（seed，elem）：preMap[i]）> -1）{

                        seed[temp] =！（results[temp] = elem）;
                    }
                }
            }

            //如果已定义，则通过postFinder向结果中添加元素
        } else {
            matcherOut = 浓缩（
            matcherOut === 结果？
            matcherOut.splice（preexisting，matcherOut.length）：
            matcherOut
            ）;
            if（postFinder）{
                postFinder（null，results，matcherOut，xml）;
            } else {
                push.apply（results，matcherOut）;
            }
        }
    } ）;
}

function matcherFromTokens（tokens）{
    var checkContext，matcher，j，
        len = tokens.length，
        leadingRelative = Expr.relative[tokens[0].type]，
        implicitRelative = leadingRelative || Expr.relative[“”]，
        我 = 领先相对？1：0，

    //基础匹配器确保元素可从顶层上下文访问
    matchContext = addCombinator（function（elem）{
        return elem === checkContext;
    } ，implicitRelative，true），
    matchAnyContext = addCombinator（function（elem）{
        return indexOf（checkContext，elem）> -1;
    } ，implicitRelative，true），
    matchers = [function（elem，context，xml）{
        var ret =（！leadingRelative &&（xml || context！== outermostContext））|| （
        （checkContext = context）.nodeType？
        matchContext（elem，context，xml）：
        matchAnyContext（elem，context，xml））;
    //避免挂在元素上（问题＃299）
    checkContext = null;
        返回;
		}];

for（; i < len; i++）{
    if（（matcher = Expr.relative[tokens[i].type]））{
        matchers = [addCombinator（elementMatcher（matchers），matcher）];
    } else {
        matcher = Expr.filter[tokens[i].type].apply（null，tokens[i].matches）;

        //在看到位置匹配器后返回特殊情况
        if（matcher[expando]）{
            //找到下一个相对运算符（如果有）以便正确处理
            j = ++i;
            for（; j < len; j++）{
                if（Expr.relative[tokens[j].type]）{
                    打破;
                }
            }
            return setMatcher（
            i > 1 && elementMatcher（matchers），
            i > 1 && toSelector（
            //如果前面的标记是后代组合子，则插入一个隐式的任意元素`*`
            tokens.slice（0，i - 1）.concat（{ value：tokens[i - 2].type ===“”？“*”：“” } ）
            ）.replace（rtrim，“$ 1”），
            匹配，
            我 < j && matcherFromTokens（tokens.slice（i，j）），
            j < len && matcherFromTokens（（tokens = tokens.slice（j））），
            j < len && toSelector（令牌）
            ）;
        }
        matchers.push（matcher）;
    }
}

return elementMatcher（matchers）;
}

function matcherFromGroupMatchers（elementMatchers，setMatchers）{
    var bySet = setMatchers.length > 0，
        byElement = elementMatchers.length > 0，
        superMatcher = function（seed，context，xml，results，outermost）{
            var elem，j，matcher，
            matchedCount = 0，
            i =“0”，
            unmatched = seed && []，
            setMatched = []，
            contextBackup = outermostContext，
            //我们必须始终拥有种子元素或最外层的上下文
            elems = 种子 || byElement && Expr.find[“TAG”]（“*”，最外层），
    //使用整数dirruns iff这是最外层的匹配器
    dirrunsUnique =（dirruns + = contextBackup == null？1：Math.random（）|| 0.1），
    len = elems.length;

    if（outermost）{
        outermostContext = context === document || 上下文 || 最外层;
    }

    //添加将elementMatchers直接传递给结果的元素
    //支持：IE <9，Safari
    //通过id容忍NodeList属性（IE：“length”; Safari：<number>）匹配元素
    for（; i！== len &&（elem = elems[i]）！= null; i++）{
        if（byElement && elem）{
            j = 0;
            if（！context && elem.ownerDocument！== document）{
                setDocument（elem）;
                xml =！documentIsHTML;
            }
            while（（matcher = elementMatchers[j++]））{
                if（matcher（elem，context || document，xml））{
                    results.push（elem）;
                    打破;
                }
            }
            if（outermost）{
                dirruns = dirrunsUnique;
            }
        }

        //跟踪设置过滤器的不匹配元素
        if（bySet）{
            //他们将经历所有可能的匹配
            if（（elem =！matcher && elem））{
                matchedCount--;
            }

            //为每个元素延长数组，匹配与否
            if（seed）{
                unmatched.push（elem）;
            }
        }
    }

    //`i`现在是上面访问过的元素的数量，并将它添加到`matchedCount`
    //使后者为非负数。
    matchedCount + = i;

    //将集合过滤器应用于不匹配的元素
    //注意：如果没有不匹配的元素（即`matchedCount`），可以跳过这个
    //等于`i`），除非我们没有访问上面循环中的_any_元素，因为我们有
    //没有元素匹配，没有种子。
    //增加一个初始字符串“0”`i`允许`i`只保留一个字符串
    // case，这将导致“00”`matchedCount`与`i`不同，但也是
    //数字为零
    if（bySet && i！== matchedCount）{
        j = 0;
        while（（matcher = setMatchers[j++]））{
            matcher（不匹配，setMatched，context，xml）;
        }

        if（seed）{
            //重新整合元素匹配以消除排序的需要
            if（matchedCount > 0）{
                当我 -  ） {
                    if（！（unmatched[i] || setMatched[i]））{
                        setMatched[i] = pop.call（results）;
                    }
                }
            }

            //丢弃索引占位符值以仅获取实际匹配
            setMatched = condense（setMatched）;
        }

        //为结果添加匹配项
        push.apply（results，setMatched）;

        //无核集匹配成功匹配多个成功的匹配器规定排序
        if（outermost &&！seed && setMatched.length > 0 &&
        （matchedCount + setMatchers.length）> 1）{

            Sizzle.uniqueSort（结果）;
        }
    }

    //通过嵌套匹配器覆盖全局变量的操作
    if（outermost）{
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
    }

    回归无与伦比;
};

返回bySet？
markFunction（superMatcher）：
superMatcher;
}

compile = Sizzle.compile = function（选择器，匹配 / * 仅供内部使用 * /）{
var i，
    setMatchers = []，
    elementMatchers = []，
    cached = compilerCache[selector +“”];

if（！cached）{
    //生成递归函数的函数，可用于检查每个元素
    if（！match）{
        match = tokenize（selector）;
    }
    i = match.length;
    当我 -  ） {
        cached = matcherFromTokens（match[i]）;
        if（cached[expando]）{
            setMatchers.push（cached）;
        } else {
            elementMatchers.push（cached）;
        }
    }

    //缓存已编译的函数
    cached = compilerCache（selector，matcherFromGroupMatchers（elementMatchers，setMatchers））;

    //保存选择器和标记化
    cached.selector = selector;
}
返回缓存;
};

/ **
    * 低级选择功能，适用于Sizzle的编译
        * 选择器功能
        * @param { String | Function } 选择器选择器或预编译器
            * 使用Sizzle.compile构建的选择器功能
            * @param { Element } 上下文
                * @param { 数组 } [结果]
                    * @param { Array } [seed]要匹配的一组元素
                        * /
select = Sizzle.select = function（选择器，上下文，结果，种子）{
    var i，tokens，token，type，find，
        compiled = typeof selector ===“function”&& selector，
    match =！seed && tokenize（（selector = compiled.selector || selector））;

    结果 = 结果 || [];

    //如果列表中只有一个选择器且没有种子，请尝试最小化操作
    //（后者保证我们的背景）
    if（match.length === 1）{

        //如果前导复合选择器是ID，则减少上下文
        tokens = match[0] = match[0].slice（0）;
        if（tokens.length > 2 &&（token = tokens[0]）。type ===“ID”&&
            context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]）{

            context =（Expr.find[“ID”]（token.matches[0].replace（runescape，funescape），context）|| []）[0];
            if（！context）{
                返回结果;

                //预编译的匹配器仍将验证祖先，因此升级一个级别
            } else if（compiled）{
                context = context.parentNode;
            }

            selector = selector.slice（tokens.shift（）。value.length）;
        }

        //获取从右到左匹配的种子集
        i = matchExpr[“needsContext”]。test（selector）？0：tokens.length;
        当我 -  ） {
            token = tokens[i];

            //如果我们击中组合器就中止
            if（Expr.relative[（type = token.type）]）{
                打破;
            }
            if（（find = Expr.find[type]））{
                //搜索，扩展主要兄弟组合子的上下文
                if（（seed = find（
                token.matches[0].replace（runescape，funescape），
                rsibling.test（tokens[0].type）&& testContext（context.parentNode）|| 上下文
                ）））{

                    //如果种子是空的或没有令牌，我们可以提前返回
                    tokens.splice（i，1）;
                    selector = seed.length && toSelector（tokens）;
                    if（！selector）{
                        push.apply（结果，种子）;
                        返回结果;
                    }

                    打破;
                }
            }
        }
    }

    //如果未提供过滤功能，请编译并执行过滤功能
    //如果我们修改了上面的选择器，请提供`match`以避免重新识别
    （编译 || compile（选择器，匹配））（
    种子，
    背景下，
    ！documentIsHTML，
    结果，
    ！context || rsibling.test（selector）&& testContext（context.parentNode）|| 上下文
    ）;
    返回结果;
};

//一次性作业

//排序稳定性
support.sortStable = expando.split（“”）。sort（sortOrder）.join（“”）=== expando;

//支持：Chrome 14-35 +
//如果没有传递给比较函数，则始终假设重复
support.detectDuplicates = !!hasDuplicate;

//针对默认文档初始化
setDocument（）;

//支持：Webkit <537.32  -  Safari 6.0.3 / Chrome 25（在Chrome 27中修复）
//分离的节点混淆地跟随*彼此*
support.sortDetached = assert（function（el）{
    //应返回1，但返回4（以下）
    return el.compareDocumentPosition（document.createElement（“fieldset”））＆1;
} ）;

//支持：IE <8
//防止属性/属性“插值”
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if（！assert（function（el）{
    el.innerHTML =“<a href='#'> </a>”;
    return el.firstChild.getAttribute（“href”）===“＃”;
} ））{
    addHandle（“type | href | height | width”，function（elem，name，isXML）{
        if（！isXML）{
            return elem.getAttribute（name，name.toLowerCase（）===“type”？1：2）;
        }
    } ）;
}

//支持：IE <9
//使用defaultValue代替getAttribute（“value”）
if（！support.attributes ||！assert（function（el）{
    el.innerHTML =“<input />”;
    el.firstChild.setAttribute（“value”，“”）;
    return el.firstChild.getAttribute（“value”）===“”;
} ））{
    addHandle（“value”，function（elem，name，isXML）{
        if（！isXML && elem.nodeName.toLowerCase（）===“input”）{
            return elem.defaultValue;
        }
    } ）;
}

//支持：IE <9
//当getAttribute所在时，使用getAttributeNode获取布尔值
if（！assert（function（el）{
    return el.getAttribute（“disabled”）== null;
} ））{
    addHandle（布尔值，函数（elem，name，isXML）{
        var val;
        if（！isXML）{
            return elem[name] === true？name.toLowerCase（）：
            （val = elem.getAttributeNode（name））&& val.specified？
            val.value：
            空值;
        }
    } ）;
}

返回Sizzle;

}）（窗口）;



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

//已弃用
jQuery.expr[“：”] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function（elem，dir，until）{
    var matched = []，
    truncate = until！== undefined;

while（（elem = elem[dir]）&& elem.nodeType！== 9）{
    if（elem.nodeType === 1）{
        if（truncate && jQuery（elem）.is（until））{
            打破;
        }
        matched.push（elem）;
    }
}
返回匹配;
};


var siblings = function（n，elem）{
    var matched = [];

for（; n; n = n.nextSibling）{
    if（n.nodeType === 1 && n！== elem）{
        matched.push（n）;
    }
}

返回匹配;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName（elem，name）{

    return elem.nodeName && elem.nodeName.toLowerCase（）=== name.toLowerCase（）;

};
var rsingleTag =（/ ^ <（[az] [^ \ / \ 0>：\ x20 \ t \ r \ n \ f] *）[\ x20 \ t \ r \ n \ f] * \ /？>（ ？：<\ / \ 1> |）$ / i）;



//为过滤器实现相同的功能而不是
function winnow（elements，qualifier，not）{
    if（isFunction（qualifier））{
        return jQuery.grep（elements，function（elem，i）{
            return !!qualifier.call（elem，i，elem）！== not;
        } ）;
    }

    //单个元素
    if（qualifier.nodeType）{
        return jQuery.grep（elements，function（elem）{
            return （elem === qualifier）！== not;
        } ）;
    }

    //元素的Arraylike（jQuery，arguments，Array）
    if（typeof qualifier！==“string”）{
        return jQuery.grep（elements，function（elem）{
            return （indexOf.call（qualifier，elem）> -1）！== not;
        } ）;
    }

    //直接过滤简单和复杂的选择器
    return jQuery.filter（限定符，元素，不是）;
}

jQuery.filter = function（expr，elems，not）{
    var elem = elems[0];

    如果不 ） {
        expr =“：not（”+ expr +“）”;
    }

    if（elems.length === 1 && elem.nodeType === 1）{
        返回jQuery.find.matchesSelector（elem，expr）？[elem]：[];
    }

    return jQuery.find.matches（expr，jQuery.grep（elems，function（elem）{
        return elem.nodeType === 1;
    } ）;;
};

jQuery.fn.extend（{
    find：function（selector）{
        var i，ret，
            len = this.length，
            self = this;

        if（typeof selector！==“string”）{
            return this.pushStack（jQuery（selector）.filter（function（）{
                for（i = 0; i < len; i++）{
                    if（jQuery.contains（self[i]，this））{
                        返回true;
                    }
                }
            } ）;;
        }

        ret = this.pushStack（[]）;

        for（i = 0; i < len; i++）{
            jQuery.find（selector，self[i]，ret）;
        }

        返回len > 1？jQuery.uniqueSort（ret）：ret;
    } ，
    filter：function（selector）{
        return this.pushStack（winnow（this，selector || []，false））;
    } ，
    not：function（selector）{
        return this.pushStack（winnow（this，selector || []，true））;
    } ，
    是：function（selector）{
        返回!! winnow（
        这个，

        //如果这是位置/相对选择器，请检查返回集合中的成员资格
        // so $（“p：first”）。is（“p：last”）对于带有两个“p”的doc不会返回true。
        typeof selector ===“string”&& rneedsContext.test（selector）？
        jQuery（选择器）：
        选择器 || []，
        假
        ）。长度;
    }
} ）;


//初始化一个jQuery对象


//对根jQuery（文档）的中心引用
var rootjQuery，

    //检查HTML字符串的简单方法
    //优先#id <tag>以避免XSS通过location.hash（＃9521）
    //严格的HTML识别（＃11290：必须以<开头）
    //快捷简单#id案例的速度
    rquickExpr = / ^（？：\ s *（<[\ w \ W] +>）[^>] * |＃（[\ w  - ] +））$ /，

    init = jQuery.fn.init = function（selector，context，root）{
        var match，elem;

// HANDLE：$（“”），$（null），$（undefined），$（false）
if（！selector）{
    归还这个;
}

//方法init（）接受备用的rootjQuery
//所以迁移可以支持jQuery.sub（gh-2101）
root = root || rootjQuery;

//处理HTML字符串
if（typeof selector ===“string”）{
    if（selector[0] ===“<”&&
        selector[selector.length - 1] ===“>”&&
            selector.length > = 3）{

        //假设以<>开头和结尾的字符串是HTML并跳过正则表达式检查
        match = [null，selector，null];

    } else {
        match = rquickExpr.exec（selector）;
    }

    //匹配html或确保没有为#id指定上下文
    if（match &&（match[1] ||！context））{

        // HANDLE：$（html） - > $（数组）
        if（match[1]）{
            context = 上下文实例jQuery？context[0]：context;

            //对于back-compat，运行脚本的选项是正确的
            //如果parseHTML不存在，请故意抛出错误
            jQuery.merge（this，jQuery.parseHTML（
            匹配[1]，
            context && context.nodeType？context.ownerDocument || 上下文：文件，
            真正
            ））;

            // HANDLE：$（html，props）
            if（rsingleTag.test（match[1]）&& jQuery.isPlainObject（context））{
                for（在上下文中匹配）{

                    //如果可能，将上下文的属性称为方法
                    if（isFunction（this[match]））{
                        这[匹配]（context[match]）;

                        // ...以及以其他方式设置为属性
                    } else {
                        this.attr（match，context[match]）;
                    }
                }
            }

            归还这个;

            // HANDLE：$（＃id）
        } else {
            elem = document.getElementById（match[2]）;

            if（elem）{

                //将元素直接注入jQuery对象
                这[0] = elem;
                this.length = 1;
            }
            归还这个;
        }

        // HANDLE：$（expr，$（...））
    } else if（！context || context.jquery）{
        return （context || root）.find（selector）;

        // HANDLE：$（expr，context）
        //（这相当于：$（context）.find（expr）
    } else {
        return this.constructor（context）.find（selector）;
    }

    //手柄：$（DOMElement）
} else if（selector.nodeType）{
    这[0] = 选择器;
    this.length = 1;
    归还这个;

    //手柄：$（功能）
    //文档就绪的快捷方式
} else if（isFunction（selector））{
    return root.ready！== undefined？
    root.ready（selector）：

    //如果没有准备就立即执行
    selector（jQuery）;
}

return jQuery.makeArray（selector，this）;
	};

//为init函数提供jQuery原型以供以后实例化
init.prototype = jQuery.fn;

//初始化中心参考
rootjQuery = jQuery（document）;


var rparentsprev = / ^（?: parents | prev（？：Until | All））/，

    //保证在从唯一集开始时生成唯一集的方法
    guaranteeUnique = {
        孩子们：是的，
        内容：true，
        下一个：是的，
        上一篇：真的
    };

jQuery.fn.extend（{
    has：function（target）{
        var targets = jQuery（target，this），
        l = targets.length;

        return this.filter（function（）{
            var i = 0;
            for（; i < l; i++）{
                if（jQuery.contains（this，targets[i]））{
                    返回true;
                }
            }
        } ）;
    } ，

    最近的：函数（选择器，上下文）{
        var cur，
            i = 0，
            l = this.length，
            匹配 = []，
            targets = typeof selectors！==“string”&& jQuery（selectors）;

        //位置选择器永远不会匹配，因为没有_selection_上下文
        if（！rneedsContext.test（selectors））{
            for（; i < l; i++）{
                for（cur = this[i]; cur && cur！== context; cur = cur.parentNode）{

                    //始终跳过文档片段
                    if（cur.nodeType < 11 &&（目标？
                    targets.index（cur）> -1：

                    //不要将非元素传递给Sizzle
                    cur.nodeType === 1 &&
                        jQuery.find.matchesSelector（cur，selectors）））{

                        matched.push（cur）;
                        打破;
                    }
                }
            }
        }

        return this.pushStack（matched.length > 1？jQuery.uniqueSort（matched）：matched）;
    } ，

    //确定集合中元素的位置
    index：function（elem）{

        //没有参数，在父级中返回索引
        if（！elem）{
            return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
        }

        // Index in selector
        if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
        }

        // Locate the position of the desired element
        return indexOf.call(this,

            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
        );
    },

    add: function(selector, context) {
        return this.pushStack(
            jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
            )
        );
    },

    addBack: function(selector) {
        return this.add(selector == null ?
            this.prevObject : this.prevObject.filter(selector)
        );
    }
} );

function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) { }
    return cur;
}

jQuery.each({
    parent: function (elem) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function (elem) {
        return dir(elem, "parentNode");
    },
    parentsUntil: function (elem, i, until) {
        return dir(elem, "parentNode", until);
    },
    next: function (elem) {
        return sibling(elem, "nextSibling");
    },
    prev: function (elem) {
        return sibling(elem, "previousSibling");
    },
    nextAll: function (elem) {
        return dir(elem, "nextSibling");
    },
    prevAll: function (elem) {
        return dir(elem, "previousSibling");
    },
    nextUntil: function (elem, i, until) {
        return dir(elem, "nextSibling", until);
    },
    prevUntil: function (elem, i, until) {
        return dir(elem, "previousSibling", until);
    },
    siblings: function (elem) {
        return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function (elem) {
        return siblings(elem.firstChild);
    },
    contents: function (elem) {
        if (nodeName(elem, "iframe")) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if (nodeName(elem, "template")) {
            elem = elem.content || elem;
        }

        return jQuery.merge([], elem.childNodes);
    }
}, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
        var matched = jQuery.map(this, fn, until);

        if (name.slice(-5) !== "Until") {
            selector = until;
        }

        if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
        }

        if (this.length > 1) {

            // Remove duplicates
            if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
            }

            // Reverse order for parents* and prev-derivatives
            if (rparentsprev.test(name)) {
                matched.reverse();
            }
        }

        return this.pushStack(matched);
    };
});
var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);



// Convert String-formatted options into Object-formatted ones
function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
        object[flag] = true;
    });
    return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function (options) {

    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ?
        createOptions(options) :
        jQuery.extend({}, options);

    var // Flag to know if list is currently firing
        firing,

        // Last fire value for non-forgettable lists
        memory,

        // Flag to know if list was already fired
        fired,

        // Flag to prevent firing
        locked,

        // Actual callback list
        list = [],

        // Queue of execution data for repeatable lists
        queue = [],

        // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1,

        // Fire callbacks
        fire = function () {

            // Enforce single-firing
            locked = locked || options.once;

            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
                memory = queue.shift();
                while (++firingIndex < list.length) {

                    // Run callback and check for early termination
                    if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                        options.stopOnFalse) {

                        // Jump to end and forget the data so .add doesn't re-fire
                        firingIndex = list.length;
                        memory = false;
                    }
                }
            }

            // Forget the data if we're done with it
            if (!options.memory) {
                memory = false;
            }

            firing = false;

            // Clean up if we're done firing for good
            if (locked) {

                // Keep an empty list if we have data for future add calls
                if (memory) {
                    list = [];

                    // Otherwise, this object is spent
                } else {
                    list = "";
                }
            }
        },

        // Actual Callbacks object
        self = {

            // Add a callback or a collection of callbacks to the list
            add: function () {
                if (list) {

                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }

                    (function add(args) {
                        jQuery.each(args, function (_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && toType(arg) !== "string") {

                                // Inspect recursively
                                add(arg);
                            }
                        });
                    })(arguments);

                    if (memory && !firing) {
                        fire();
                    }
                }
                return this;
            },

            // Remove a callback from the list
            remove: function () {
                jQuery.each(arguments, function (_, arg) {
                    var index;
                    while ((index = jQuery.inArray(arg, list, index)) > -1) {
                        list.splice(index, 1);

                        // Handle firing indexes
                        if (index <= firingIndex) {
                            firingIndex--;
                        }
                    }
                });
                return this;
            },

            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function (fn) {
                return fn ?
                    jQuery.inArray(fn, list) > -1 :
                    list.length > 0;
            },

            // Remove all callbacks from the list
            empty: function () {
                if (list) {
                    list = [];
                }
                return this;
            },

            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function () {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function () {
                return !list;
            },

            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function () {
                locked = queue = [];
                if (!memory && !firing) {
                    list = memory = "";
                }
                return this;
            },
            locked: function () {
                return !!locked;
            },

            // Call all callbacks with the given context and arguments
            fireWith: function (context, args) {
                if (!locked) {
                    args = args || [];
                    args = [context, args.slice ? args.slice() : args];
                    queue.push(args);
                    if (!firing) {
                        fire();
                    }
                }
                return this;
            },

            // Call all the callbacks with the given arguments
            fire: function () {
                self.fireWith(this, arguments);
                return this;
            },

            // To know if the callbacks have already been called at least once
            fired: function () {
                return !!fired;
            }
        };

    return self;
};


function Identity(v) {
    return v;
}
function Thrower(ex) {
    throw ex;
}

function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {

        // Check for promise aspect first to privilege synchronous behavior
        if (value && isFunction((method = value.promise))) {
            method.call(value).done(resolve).fail(reject);

            // Other thenables
        } else if (value && isFunction((method = value.then))) {
            method.call(value, resolve, reject);

            // Other non-thenables
        } else {

            // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [value].slice(noValue));
        }

        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
    } catch (value) {

        // Support: Android 4.0 only
        // Strict mode functions invoked without .call/.apply get global-object context
        reject.apply(undefined, [value]);
    }
}

jQuery.extend({

    Deferred: function (func) {
        var tuples = [

            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            ["notify", "progress", jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"), 2],
            ["resolve", "done", jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"), 1, "rejected"]
        ],
            state = "pending",
            promise = {
                state: function () {
                    return state;
                },
                always: function () {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function (fn) {
                    return promise.then(null, fn);
                },

                // Keep pipe for back-compat
                pipe: function ( /* fnDone, fnFail, fnProgress */) {
                    var fns = arguments;

                    return jQuery.Deferred(function (newDefer) {
                        jQuery.each(tuples, function (i, tuple) {

                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function () {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) {
                                    returned.promise()
                                        .progress(newDefer.notify)
                                        .done(newDefer.resolve)
                                        .fail(newDefer.reject);
                                } else {
                                    newDefer[tuple[0] + "With"](
                                        this,
                                        fn ? [returned] : arguments
                                    );
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function (onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function () {
                            var that = this,
                                args = arguments,
                                mightThrow = function () {
                                    var returned, then;

                                    // Support: Promises/A+ section 2.3.3.3.3
                                    // https://promisesaplus.com/#point-59
                                    // Ignore double-resolution attempts
                                    if (depth < maxDepth) {
                                        return;
                                    }

                                    returned = handler.apply(that, args);

                                    // Support: Promises/A+ section 2.3.1
                                    // https://promisesaplus.com/#point-48
                                    if (returned === deferred.promise()) {
                                        throw new TypeError("Thenable self-resolution");
                                    }

                                    // Support: Promises/A+ sections 2.3.3.1, 3.5
                                    // https://promisesaplus.com/#point-54
                                    // https://promisesaplus.com/#point-75
                                    // Retrieve `then` only once
                                    then = returned &&

                                        // Support: Promises/A+ section 2.3.4
                                        // https://promisesaplus.com/#point-64
                                        // Only check objects and functions for thenability
                                        (typeof returned === "object" ||
                                            typeof returned === "function") &&
                                        returned.then;

                                    // Handle a returned thenable
                                    if (isFunction(then)) {

                                        // Special processors (notify) just wait for resolution
                                        if (special) {
                                            then.call(
                                                returned,
                                                resolve(maxDepth, deferred, Identity, special),
                                                resolve(maxDepth, deferred, Thrower, special)
                                            );

                                            // Normal processors (resolve) also hook into progress
                                        } else {

                                            // ...and disregard older resolution values
                                            maxDepth++;

                                            then.call(
                                                returned,
                                                resolve(maxDepth, deferred, Identity, special),
                                                resolve(maxDepth, deferred, Thrower, special),
                                                resolve(maxDepth, deferred, Identity,
                                                    deferred.notifyWith)
                                            );
                                        }

                                        // Handle all other returned values
                                    } else {

                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Identity) {
                                            that = undefined;
                                            args = [returned];
                                        }

                                        // Process the value(s)
                                        // Default process is resolve
                                        (special || deferred.resolveWith)(that, args);
                                    }
                                },

                                // Only normal processors (resolve) catch and reject exceptions
                                process = special ?
                                    mightThrow :
                                    function () {
                                        try {
                                            mightThrow();
                                        } catch (e) {

                                            if (jQuery.Deferred.exceptionHook) {
                                                jQuery.Deferred.exceptionHook(e,
                                                    process.stackTrace);
                                            }

                                            // Support: Promises/A+ section 2.3.3.3.4.1
                                            // https://promisesaplus.com/#point-61
                                            // Ignore post-resolution exceptions
                                            if (depth + 1 >= maxDepth) {

                                                // Only substitute handlers pass on context
                                                // and multiple values (non-spec behavior)
                                                if (handler !== Thrower) {
                                                    that = undefined;
                                                    args = [e];
                                                }

                                                deferred.rejectWith(that, args);
                                            }
                                        }
                                    };

                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) {
                                process();
                            } else {

                                // Call an optional hook to record the stack, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getStackHook) {
                                    process.stackTrace = jQuery.Deferred.getStackHook();
                                }
                                window.setTimeout(process);
                            }
                        };
                    }

                    return jQuery.Deferred(function (newDefer) {

                        // progress_handlers.add( ... )
                        tuples[0][3].add(
                            resolve(
                                0,
                                newDefer,
                                isFunction(onProgress) ?
                                    onProgress :
                                    Identity,
                                newDefer.notifyWith
                            )
                        );

                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(
                            resolve(
                                0,
                                newDefer,
                                isFunction(onFulfilled) ?
                                    onFulfilled :
                                    Identity
                            )
                        );

                        // rejected_handlers.add( ... )
                        tuples[2][3].add(
                            resolve(
                                0,
                                newDefer,
                                isFunction(onRejected) ?
                                    onRejected :
                                    Thrower
                            )
                        );
                    }).promise();
                },

                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function (obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            },
            deferred = {};

        // Add list-specific methods
        jQuery.each(tuples, function (i, tuple) {
            var list = tuple[2],
                stateString = tuple[5];

            // promise.progress = list.add
            // promise.done = list.add
            // promise.fail = list.add
            promise[tuple[1]] = list.add;

            // Handle state
            if (stateString) {
                list.add(
                    function () {

                        // state = "resolved" (i.e., fulfilled)
                        // state = "rejected"
                        state = stateString;
                    },

                    // rejected_callbacks.disable
                    // fulfilled_callbacks.disable
                    tuples[3 - i][2].disable,

                    // rejected_handlers.disable
                    // fulfilled_handlers.disable
                    tuples[3 - i][3].disable,

                    // progress_callbacks.lock
                    tuples[0][2].lock,

                    // progress_handlers.lock
                    tuples[0][3].lock
                );
            }

            // progress_handlers.fire
            // fulfilled_handlers.fire
            // rejected_handlers.fire
            list.add(tuple[3].fire);

            // deferred.notify = function() { deferred.notifyWith(...) }
            // deferred.resolve = function() { deferred.resolveWith(...) }
            // deferred.reject = function() { deferred.rejectWith(...) }
            deferred[tuple[0]] = function () {
                deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                return this;
            };

            // deferred.notifyWith = list.fireWith
            // deferred.resolveWith = list.fireWith
            // deferred.rejectWith = list.fireWith
            deferred[tuple[0] + "With"] = list.fireWith;
        });

        // Make the deferred a promise
        promise.promise(deferred);

        // Call given func if any
        if (func) {
            func.call(deferred, deferred);
        }

        // All done!
        return deferred;
    },

    // Deferred helper
    when: function (singleValue) {
        var

            // count of uncompleted subordinates
            remaining = arguments.length,

            // count of unprocessed arguments
            i = remaining,

            // subordinate fulfillment data
            resolveContexts = Array(i),
            resolveValues = slice.call(arguments),

            // the master Deferred
            master = jQuery.Deferred(),

            // subordinate callback factory
            updateFunc = function (i) {
                return function (value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!(--remaining)) {
                        master.resolveWith(resolveContexts, resolveValues);
                    }
                };
            };

        // Single- and empty arguments are adopted like Promise.resolve
        if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject,
                !remaining);

            // Use .then() to unwrap secondary thenables (cf. gh-3000)
            if (master.state() === "pending" ||
                isFunction(resolveValues[i] && resolveValues[i].then)) {

                return master.then();
            }
        }

        // Multiple arguments are aggregated like Promise.all array elements
        while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject);
        }

        return master.promise();
    }
});


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function (error, stack) {

    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
        window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
};




jQuery.readyException = function (error) {
    window.setTimeout(function () {
        throw error;
    });
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function (fn) {

    readyList
        .then(fn)

        // Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function (error) {
            jQuery.readyException(error);
        });

    return this;
};

jQuery.extend({

    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,

    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,

    // Handle when the DOM is ready
    ready: function (wait) {

        // Abort if there are pending holds or we're already ready
        if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
        }

        // Remember that the DOM is ready
        jQuery.isReady = true;

        // If a normal DOM Ready event fired, decrement, and wait if need be
        if (wait !== true && --jQuery.readyWait > 0) {
            return;
        }

        // If there are functions bound, to execute
        readyList.resolveWith(document, [jQuery]);
    }
});

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {

    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);

} else {

    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed);

    // A fallback to window.onload, that will always work
    window.addEventListener("load", completed);
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;

    // Sets many values
    if (toType(key) === "object") {
        chainable = true;
        for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
        }

        // Sets one value
    } else if (value !== undefined) {
        chainable = true;

        if (!isFunction(value)) {
            raw = true;
        }

        if (bulk) {

            // Bulk operations run against the entire set
            if (raw) {
                fn.call(elems, value);
                fn = null;

                // ...except when executing function values
            } else {
                bulk = fn;
                fn = function (elem, key, value) {
                    return bulk.call(jQuery(elem), value);
                };
            }
        }

        if (fn) {
            for (; i < len; i++) {
                fn(
                    elems[i], key, raw ?
                        value :
                        value.call(elems[i], i, fn(elems[i], key))
                );
            }
        }
    }

    if (chainable) {
        return elems;
    }

    // Gets
    if (bulk) {
        return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
    rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase(all, letter) {
    return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
}
var acceptData = function (owner) {

    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
};




function Data() {
    this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

    cache: function (owner) {

        // Check if the owner object already has a cache
        var value = owner[this.expando];

        // If not, create one
        if (!value) {
            value = {};

            // We can accept data for non-element nodes in modern browsers,
            // but we should not, see #8335.
            // Always return an empty object.
            if (acceptData(owner)) {

                // If it is a node unlikely to be stringify-ed or looped over
                // use plain assignment
                if (owner.nodeType) {
                    owner[this.expando] = value;

                    // Otherwise secure it in a non-enumerable property
                    // configurable must be true to allow the property to be
                    // deleted when data is removed
                } else {
                    Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
        }

        return value;
    },
    set: function (owner, data, value) {
        var prop,
            cache = this.cache(owner);

        // Handle: [ owner, key, value ] args
        // Always use camelCase key (gh-2257)
        if (typeof data === "string") {
            cache[camelCase(data)] = value;

            // Handle: [ owner, { properties } ] args
        } else {

            // Copy the properties one-by-one to the cache object
            for (prop in data) {
                cache[camelCase(prop)] = data[prop];
            }
        }
        return cache;
    },
    get: function (owner, key) {
        return key === undefined ?
            this.cache(owner) :

            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function (owner, key, value) {

        // In cases where either:
        //
        //   1. No key was specified
        //   2. A string key was specified, but no value provided
        //
        // Take the "read" path and allow the get method to determine
        // which value to return, respectively either:
        //
        //   1. The entire cache object
        //   2. The data stored at the key
        //
        if (key === undefined ||
            ((key && typeof key === "string") && value === undefined)) {

            return this.get(owner, key);
        }

        // When the key is not a string, or both a key and value
        // are specified, set or extend (existing objects) with either:
        //
        //   1. An object of properties
        //   2. A key and value
        //
        this.set(owner, key, value);

        // Since the "set" path can have two possible entry points
        // return the expected data based on which path was taken[*]
        return value !== undefined ? value : key;
    },
    remove: function (owner, key) {
        var i,
            cache = owner[this.expando];

        if (cache === undefined) {
            return;
        }

        if (key !== undefined) {

            // Support array or space separated string of keys
            if (Array.isArray(key)) {

                // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
            } else {
                key = camelCase(key);

                // If a key with the spaces exists, use it.
                // Otherwise, create an array by matching non-whitespace
                key = key in cache ?
                    [key] :
                    (key.match(rnothtmlwhite) || []);
            }

            i = key.length;

            while (i--) {
                delete cache[key[i]];
            }
        }

        // Remove the expando if there's no more data
        if (key === undefined || jQuery.isEmptyObject(cache)) {

            // Support: Chrome <=35 - 45
            // Webkit & Blink performance suffers when deleting properties
            // from DOM nodes, so set to undefined instead
            // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
            if (owner.nodeType) {
                owner[this.expando] = undefined;
            } else {
                delete owner[this.expando];
            }
        }
    },
    hasData: function (owner) {
        var cache = owner[this.expando];
        return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /[A-Z]/g;

function getData(data) {
    if (data === "true") {
        return true;
    }

    if (data === "false") {
        return false;
    }

    if (data === "null") {
        return null;
    }

    // Only convert to a number if it doesn't change the string
    if (data === +data + "") {
        return +data;
    }

    if (rbrace.test(data)) {
        return JSON.parse(data);
    }

    return data;
}

function dataAttr(elem, key, data) {
    var name;

    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {
        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
        data = elem.getAttribute(name);

        if (typeof data === "string") {
            try {
                data = getData(data);
            } catch (e) { }

            // Make sure we set the data so it isn't changed later
            dataUser.set(elem, key, data);
        } else {
            data = undefined;
        }
    }
    return data;
}

jQuery.extend({
    hasData: function (elem) {
        return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },

    data: function (elem, name, data) {
        return dataUser.access(elem, name, data);
    },

    removeData: function (elem, name) {
        dataUser.remove(elem, name);
    },

    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function (elem, name, data) {
        return dataPriv.access(elem, name, data);
    },

    _removeData: function (elem, name) {
        dataPriv.remove(elem, name);
    }
});

jQuery.fn.extend({
    data: function (key, value) {
        var i, name, data,
            elem = this[0],
            attrs = elem && elem.attributes;

        // Gets all values
        if (key === undefined) {
            if (this.length) {
                data = dataUser.get(elem);

                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                    i = attrs.length;
                    while (i--) {

                        // Support: IE 11 only
                        // The attrs elements can be null (#14894)
                        if (attrs[i]) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                    }
                    dataPriv.set(elem, "hasDataAttrs", true);
                }
            }

            return data;
        }

        // Sets multiple values
        if (typeof key === "object") {
            return this.each(function () {
                dataUser.set(this, key);
            });
        }

        return access(this, function (value) {
            var data;

            // The calling jQuery object (element matches) is not empty
            // (and therefore has an element appears at this[ 0 ]) and the
            // `value` parameter was not undefined. An empty jQuery object
            // will result in `undefined` for elem = this[ 0 ] which will
            // throw an exception if an attempt to read a data cache is made.
            if (elem && value === undefined) {

                // Attempt to get data from the cache
                // The key will always be camelCased in Data
                data = dataUser.get(elem, key);
                if (data !== undefined) {
                    return data;
                }

                // Attempt to "discover" the data in
                // HTML5 custom data-* attrs
                data = dataAttr(elem, key);
                if (data !== undefined) {
                    return data;
                }

                // We tried really hard, but the data doesn't exist.
                return;
            }

            // Set the data...
            this.each(function () {

                // We always store the camelCased key
                dataUser.set(this, key, value);
            });
        }, null, value, arguments.length > 1, null, true);
    },

    removeData: function (key) {
        return this.each(function () {
            dataUser.remove(this, key);
        });
    }
});


jQuery.extend({
    queue: function (elem, type, data) {
        var queue;

        if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);

            // Speed up dequeue by getting out quickly if this is just a lookup
            if (data) {
                if (!queue || Array.isArray(data)) {
                    queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                    queue.push(data);
                }
            }
            return queue || [];
        }
    },

    dequeue: function (elem, type) {
        type = type || "fx";

        var queue = jQuery.queue(elem, type),
            startLength = queue.length,
            fn = queue.shift(),
            hooks = jQuery._queueHooks(elem, type),
            next = function () {
                jQuery.dequeue(elem, type);
            };

        // If the fx queue is dequeued, always remove the progress sentinel
        if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
        }

        if (fn) {

            // Add a progress sentinel to prevent the fx queue from being
            // automatically dequeued
            if (type === "fx") {
                queue.unshift("inprogress");
            }

            // Clear up the last queue stop function
            delete hooks.stop;
            fn.call(elem, next, hooks);
        }

        if (!startLength && hooks) {
            hooks.empty.fire();
        }
    },

    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function (elem, type) {
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function () {
                dataPriv.remove(elem, [type + "queue", key]);
            })
        });
    }
});

jQuery.fn.extend({
    queue: function (type, data) {
        var setter = 2;

        if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
        }

        if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
        }

        return data === undefined ?
            this :
            this.each(function () {
                var queue = jQuery.queue(this, type, data);

                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);

                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
    },
    dequeue: function (type) {
        return this.each(function () {
            jQuery.dequeue(this, type);
        });
    },
    clearQueue: function (type) {
        return this.queue(type || "fx", []);
    },

    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function (type, obj) {
        var tmp,
            count = 1,
            defer = jQuery.Deferred(),
            elements = this,
            i = this.length,
            resolve = function () {
                if (!(--count)) {
                    defer.resolveWith(elements, [elements]);
                }
            };

        if (typeof type !== "string") {
            obj = type;
            type = undefined;
        }
        type = type || "fx";

        while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
            }
        }
        resolve();
        return defer.promise(obj);
    }
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


var cssExpand = ["Top", "Right", "Bottom", "Left"];

var isHiddenWithinTree = function (elem, el) {

    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;

    // Inline style trumps all
    return elem.style.display === "none" ||
        elem.style.display === "" &&

        // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        jQuery.contains(elem.ownerDocument, elem) &&

        jQuery.css(elem, "display") === "none";
};

var swap = function (elem, options, callback, args) {
    var ret, name,
        old = {};

    // Remember the old values, and insert the new ones
    for (name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []);

    // Revert the old values
    for (name in options) {
        elem.style[name] = old[name];
    }

    return ret;
};




function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted, scale,
        maxIterations = 20,
        currentValue = tween ?
            function () {
                return tween.cur();
            } :
            function () {
                return jQuery.css(elem, prop, "");
            },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

        // Starting value computation is required for potential unit mismatches
        initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
            rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {

        // Support: Firefox <=54
        // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
        initial = initial / 2;

        // Trust units reported by jQuery.css
        unit = unit || initialInUnit[3];

        // Iteratively approximate from a nonzero starting point
        initialInUnit = +initial || 1;

        while (maxIterations--) {

            // Evaluate and update our best guess (doubling guesses that zero out).
            // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;

        }

        initialInUnit = initialInUnit * 2;
        jQuery.style(elem, prop, initialInUnit + unit);

        // Make sure we update the tween properties later on
        valueParts = valueParts || [];
    }

    if (valueParts) {
        initialInUnit = +initialInUnit || +initial || 0;

        // Apply relative offset (+=/-=) if specified
        adjusted = valueParts[1] ?
            initialInUnit + (valueParts[1] + 1) * valueParts[2] :
            +valueParts[2];
        if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
        }
    }
    return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
        return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");

    temp.parentNode.removeChild(temp);

    if (display === "none") {
        display = "block";
    }
    defaultDisplayMap[nodeName] = display;

    return display;
}

function showHide(elements, show) {
    var display, elem,
        values = [],
        index = 0,
        length = elements.length;

    // Determine new display value for elements that need to change
    for (; index < length; index++) {
        elem = elements[index];
        if (!elem.style) {
            continue;
        }

        display = elem.style.display;
        if (show) {

            // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
            // check is required in this first loop unless we have a nonempty display value (either
            // inline or about-to-be-restored)
            if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                    elem.style.display = "";
                }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
            }
        } else {
            if (display !== "none") {
                values[index] = "none";

                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
    }

    // Set the display of the elements in a second loop to avoid constant reflow
    for (index = 0; index < length; index++) {
        if (values[index] != null) {
            elements[index].style.display = values[index];
        }
    }

    return elements;
}

jQuery.fn.extend({
    show: function () {
        return showHide(this, true);
    },
    hide: function () {
        return showHide(this);
    },
    toggle: function (state) {
        if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
        }

        return this.each(function () {
            if (isHiddenWithinTree(this)) {
                jQuery(this).show();
            } else {
                jQuery(this).hide();
            }
        });
    }
});
var rcheckableType = (/^(?:checkbox|radio)$/i);

var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);

var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

    // Support: IE <=9 only
    option: [1, "<select multiple='multiple'>", "</select>"],

    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

    _default: [0, "", ""]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll(context, tag) {

    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
        ret = context.getElementsByTagName(tag || "*");

    } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag || "*");

    } else {
        ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
        return jQuery.merge([context], ret);
    }

    return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
        dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
        );
    }
}


var rhtml = /<|&#?\w+;/;

function buildFragment(elems, context, scripts, selection, ignored) {
    var elem, tmp, tag, wrap, contains, j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
        elem = elems[i];

        if (elem || elem === 0) {

            // Add nodes directly
            if (toType(elem) === "object") {

                // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                // Convert non-html into a text node
            } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));

                // Convert html into DOM nodes
            } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));

                // Deserialize a standard representation
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

                // Descend through wrappers to the right content
                j = wrap[0];
                while (j--) {
                    tmp = tmp.lastChild;
                }

                // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, tmp.childNodes);

                // Remember the top-level container
                tmp = fragment.firstChild;

                // Ensure the created nodes are orphaned (#12392)
                tmp.textContent = "";
            }
        }
    }

    // Remove wrapper from fragment
    fragment.textContent = "";

    i = 0;
    while ((elem = nodes[i++])) {

        // Skip elements already in the context collection (trac-4087)
        if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
                ignored.push(elem);
            }
            continue;
        }

        contains = jQuery.contains(elem.ownerDocument, elem);

        // Append to fragment
        tmp = getAll(fragment.appendChild(elem), "script");

        // Preserve script evaluation history
        if (contains) {
            setGlobalEval(tmp);
        }

        // Capture executables
        if (scripts) {
            j = 0;
            while ((elem = tmp[j++])) {
                if (rscriptType.test(elem.type || "")) {
                    scripts.push(elem);
                }
            }
        }
    }

    return fragment;
}


(function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");

    // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");

    div.appendChild(input);

    // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

    // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
})();
var documentElement = document.documentElement;



var
    rkeyEvent = /^key/,
    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
    return true;
}

function returnFalse() {
    return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
    try {
        return document.activeElement;
    } catch (err) { }
}

function on(elem, types, selector, data, fn, one) {
    var origFn, type;

    // Types can be a map of types/handlers
    if (typeof types === "object") {

        // ( types-Object, selector, data )
        if (typeof selector !== "string") {

            // ( types-Object, data )
            data = data || selector;
            selector = undefined;
        }
        for (type in types) {
            on(elem, type, selector, data, types[type], one);
        }
        return elem;
    }

    if (data == null && fn == null) {

        // ( types, fn )
        fn = selector;
        data = selector = undefined;
    } else if (fn == null) {
        if (typeof selector === "string") {

            // ( types, selector, fn )
            fn = data;
            data = undefined;
        } else {

            // ( types, data, fn )
            fn = data;
            data = selector;
            selector = undefined;
        }
    }
    if (fn === false) {
        fn = returnFalse;
    } else if (!fn) {
        return elem;
    }

    if (one === 1) {
        origFn = fn;
        fn = function (event) {

            // Can use an empty set, since event contains the info
            jQuery().off(event);
            return origFn.apply(this, arguments);
        };

        // Use same guid so caller can remove using origFn
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
    });
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

    global: {},

    add: function (elem, types, handler, data, selector) {

        var handleObjIn, eventHandle, tmp,
            events, t, handleObj,
            special, handlers, type, namespaces, origType,
            elemData = dataPriv.get(elem);

        // Don't attach events to noData or text/comment nodes (but allow plain objects)
        if (!elemData) {
            return;
        }

        // Caller can pass in an object of custom data in lieu of the handler
        if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
        }

        // Ensure that invalid selectors throw exceptions at attach time
        // Evaluate against documentElement in case elem is a non-element node (e.g., document)
        if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
        }

        // Make sure that the handler has a unique ID, used to find/remove it later
        if (!handler.guid) {
            handler.guid = jQuery.guid++;
        }

        // Init the element's event structure and main handler, if this is the first
        if (!(events = elemData.events)) {
            events = elemData.events = {};
        }
        if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function (e) {

                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                    jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
        }

        // Handle multiple events separated by a space
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();

            // There *must* be a type, no attaching namespace-only handlers
            if (!type) {
                continue;
            }

            // If event changes its type, use the special event handlers for the changed type
            special = jQuery.event.special[type] || {};

            // If selector defined, determine special event api type, otherwise given type
            type = (selector ? special.delegateType : special.bindType) || type;

            // Update special based on newly reset type
            special = jQuery.event.special[type] || {};

            // handleObj is passed to all event handlers
            handleObj = jQuery.extend({
                type: type,
                origType: origType,
                data: data,
                handler: handler,
                guid: handler.guid,
                selector: selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
            }, handleObjIn);

            // Init the event handler queue if we're the first
            if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;

                // Only use addEventListener if the special events handler returns false
                if (!special.setup ||
                    special.setup.call(elem, data, namespaces, eventHandle) === false) {

                    if (elem.addEventListener) {
                        elem.addEventListener(type, eventHandle);
                    }
                }
            }

            if (special.add) {
                special.add.call(elem, handleObj);

                if (!handleObj.handler.guid) {
                    handleObj.handler.guid = handler.guid;
                }
            }

            // Add to the element's handler list, delegates in front
            if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
                handlers.push(handleObj);
            }

            // Keep track of which events have ever been used, for event optimization
            jQuery.event.global[type] = true;
        }

    },

    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes) {

        var j, origCount, tmp,
            events, t, handleObj,
            special, handlers, type, namespaces, origType,
            elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

        if (!elemData || !(events = elemData.events)) {
            return;
        }

        // Once for each type.namespace in types; type may be omitted
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();

            // Unbind all events (on this namespace, if provided) for the element
            if (!type) {
                for (type in events) {
                    jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
            }

            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] &&
                new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

            // Remove matching events
            origCount = j = handlers.length;
            while (j--) {
                handleObj = handlers[j];

                if ((mappedTypes || origType === handleObj.origType) &&
                    (!handler || handler.guid === handleObj.guid) &&
                    (!tmp || tmp.test(handleObj.namespace)) &&
                    (!selector || selector === handleObj.selector ||
                        selector === "**" && handleObj.selector)) {
                    handlers.splice(j, 1);

                    if (handleObj.selector) {
                        handlers.delegateCount--;
                    }
                    if (special.remove) {
                        special.remove.call(elem, handleObj);
                    }
                }
            }

            // Remove generic event handler if we removed something and no more handlers exist
            // (avoids potential for endless recursion during removal of special event handlers)
            if (origCount && !handlers.length) {
                if (!special.teardown ||
                    special.teardown.call(elem, namespaces, elemData.handle) === false) {

                    jQuery.removeEvent(elem, type, elemData.handle);
                }

                delete events[type];
            }
        }

        // Remove data and the expando if it's no longer used
        if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
        }
    },

    dispatch: function (nativeEvent) {

        // Make a writable jQuery.Event from the native event object
        var event = jQuery.event.fix(nativeEvent);

        var i, j, ret, matched, handleObj, handlerQueue,
            args = new Array(arguments.length),
            handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
            special = jQuery.event.special[event.type] || {};

        // Use the fix-ed jQuery.Event rather than the (read-only) native event
        args[0] = event;

        for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
        }

        event.delegateTarget = this;

        // Call the preDispatch hook for the mapped type, and let it bail if desired
        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
        }

        // Determine handlers
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);

        // Run delegates first; they may want to stop propagation beneath us
        i = 0;
        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;

            j = 0;
            while ((handleObj = matched.handlers[j++]) &&
                !event.isImmediatePropagationStopped()) {

                // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                // a subset or equal to those in the bound event (both can have no namespace).
                if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

                    event.handleObj = handleObj;
                    event.data = handleObj.data;

                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                        handleObj.handler).apply(matched.elem, args);

                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
        }

        // Call the postDispatch hook for the mapped type
        if (special.postDispatch) {
            special.postDispatch.call(this, event);
        }

        return event.result;
    },

    handlers: function (event, handlers) {
        var i, handleObj, sel, matchedHandlers, matchedSelectors,
            handlerQueue = [],
            delegateCount = handlers.delegateCount,
            cur = event.target;

        // Find delegate handlers
        if (delegateCount &&

            // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType &&

            // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {

            for (; cur !== this; cur = cur.parentNode || this) {

                // Don't check non-elements (#13208)
                // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for (i = 0; i < delegateCount; i++) {
                        handleObj = handlers[i];

                        // Don't conflict with Object.prototype properties (#13203)
                        sel = handleObj.selector + " ";

                        if (matchedSelectors[sel] === undefined) {
                            matchedSelectors[sel] = handleObj.needsContext ?
                                jQuery(sel, this).index(cur) > -1 :
                                jQuery.find(sel, this, null, [cur]).length;
                        }
                        if (matchedSelectors[sel]) {
                            matchedHandlers.push(handleObj);
                        }
                    }
                    if (matchedHandlers.length) {
                        handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                    }
                }
            }
        }

        // Add the remaining (directly-bound) handlers
        cur = this;
        if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
        }

        return handlerQueue;
    },

    addProp: function (name, hook) {
        Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,

            get: isFunction(hook) ?
                function () {
                    if (this.originalEvent) {
                        return hook(this.originalEvent);
                    }
                } :
                function () {
                    if (this.originalEvent) {
                        return this.originalEvent[name];
                    }
                },

            set: function (value) {
                Object.defineProperty(this, name, {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: value
                });
            }
        });
    },

    fix: function (originalEvent) {
        return originalEvent[jQuery.expando] ?
            originalEvent :
            new jQuery.Event(originalEvent);
    },

    special: {
        load: {

            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
        },
        focus: {

            // Fire native event if possible so blur/focus sequence is correct
            trigger: function () {
                if (this !== safeActiveElement() && this.focus) {
                    this.focus();
                    return false;
                }
            },
            delegateType: "focusin"
        },
        blur: {
            trigger: function () {
                if (this === safeActiveElement() && this.blur) {
                    this.blur();
                    return false;
                }
            },
            delegateType: "focusout"
        },
        click: {

            // For checkbox, fire native event so checked state will be right
            trigger: function () {
                if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
                    this.click();
                    return false;
                }
            },

            // For cross-browser consistency, don't fire native .click() on links
            _default: function (event) {
                return nodeName(event.target, "a");
            }
        },

        beforeunload: {
            postDispatch: function (event) {

                // Support: Firefox 20+
                // Firefox doesn't alert if the returnValue field is not set.
                if (event.result !== undefined && event.originalEvent) {
                    event.originalEvent.returnValue = event.result;
                }
            }
        }
    }
};

jQuery.removeEvent = function (elem, type, handle) {

    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
        elem.removeEventListener(type, handle);
    }
};

jQuery.Event = function (src, props) {

    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
    }

    // Event object
    if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;

        // Events bubbling up the document may have been marked as prevented
        // by a handler lower down the tree; reflect the correct value.
        this.isDefaultPrevented = src.defaultPrevented ||
            src.defaultPrevented === undefined &&

            // Support: Android <=2.3 only
            src.returnValue === false ?
            returnTrue :
            returnFalse;

        // Create target properties
        // Support: Safari <=6 - 7 only
        // Target should not be a text node (#504, #13143)
        this.target = (src.target && src.target.nodeType === 3) ?
            src.target.parentNode :
            src.target;

        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;

        // Event type
    } else {
        this.type = src;
    }

    // Put explicitly provided properties onto the event object
    if (props) {
        jQuery.extend(this, props);
    }

    // Create a timestamp if incoming event doesn't have one
    this.timeStamp = src && src.timeStamp || Date.now();

    // Mark it as fixed
    this[jQuery.expando] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,

    preventDefault: function () {
        var e = this.originalEvent;

        this.isDefaultPrevented = returnTrue;

        if (e && !this.isSimulated) {
            e.preventDefault();
        }
    },
    stopPropagation: function () {
        var e = this.originalEvent;

        this.isPropagationStopped = returnTrue;

        if (e && !this.isSimulated) {
            e.stopPropagation();
        }
    },
    stopImmediatePropagation: function () {
        var e = this.originalEvent;

        this.isImmediatePropagationStopped = returnTrue;

        if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
        }

        this.stopPropagation();
    }
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,

    which: function (event) {
        var button = event.button;

        // Add which for key events
        if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode;
        }

        // Add which for click: 1 === left; 2 === middle; 3 === right
        if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
            if (button & 1) {
                return 1;
            }

            if (button & 2) {
                return 3;
            }

            if (button & 4) {
                return 2;
            }

            return 0;
        }

        return event.which;
    }
}, jQuery.event.addProp);

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function (orig, fix) {
    jQuery.event.special[orig] = {
        delegateType: fix,
        bindType: fix,

        handle: function (event) {
            var ret,
                target = this,
                related = event.relatedTarget,
                handleObj = event.handleObj;

            // For mouseenter/leave call the handler if related is outside the target.
            // NB: No relatedTarget if the mouse left/entered the browser window
            if (!related || (related !== target && !jQuery.contains(target, related))) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
            }
            return ret;
        }
    };
});

jQuery.fn.extend({

    on: function (types, selector, data, fn) {
        return on(this, types, selector, data, fn);
    },
    one: function (types, selector, data, fn) {
        return on(this, types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
        var handleObj, type;
        if (types && types.preventDefault && types.handleObj) {

            // ( event )  dispatched jQuery.Event
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(
                handleObj.namespace ?
                    handleObj.origType + "." + handleObj.namespace :
                    handleObj.origType,
                handleObj.selector,
                handleObj.handler
            );
            return this;
        }
        if (typeof types === "object") {

            // ( types-object [, selector] )
            for (type in types) {
                this.off(type, selector, types[type]);
            }
            return this;
        }
        if (selector === false || typeof selector === "function") {

            // ( types [, fn] )
            fn = selector;
            selector = undefined;
        }
        if (fn === false) {
            fn = returnFalse;
        }
        return this.each(function () {
            jQuery.event.remove(this, types, fn, selector);
        });
    }
});


var

    /* eslint-disable max-len */

    // See https://github.com/eslint/eslint/issues/3229
    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

    /* eslint-enable */

    // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i,

    // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") &&
        nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

        return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
}
function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
    } else {
        elem.removeAttribute("type");
    }

    return elem;
}

function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
        return;
    }

    // 1. Copy private data: events, handlers, etc.
    if (dataPriv.hasData(src)) {
        pdataOld = dataPriv.access(src);
        pdataCur = dataPriv.set(dest, pdataOld);
        events = pdataOld.events;

        if (events) {
            delete pdataCur.handle;
            pdataCur.events = {};

            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
    }

    // 2. Copy user data
    if (dataUser.hasData(src)) {
        udataOld = dataUser.access(src);
        udataCur = jQuery.extend({}, udataOld);

        dataUser.set(dest, udataCur);
    }
}

// Fix IE bugs, see support tests
function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();

    // Fails to persist the checked state of a cloned checkbox or radio button.
    if (nodeName === "input" && rcheckableType.test(src.type)) {
        dest.checked = src.checked;

        // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
        dest.defaultValue = src.defaultValue;
    }
}

function domManip(collection, args, callback, ignored) {

    // Flatten any nested arrays
    args = concat.apply([], args);

    var fragment, first, scripts, hasScripts, node, doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value);

    // We can't cloneNode fragments that contain checked, in WebKit
    if (valueIsFunction ||
        (l > 1 && typeof value === "string" &&
            !support.checkClone && rchecked.test(value))) {
        return collection.each(function (index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
        });
    }

    if (l) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
        first = fragment.firstChild;

        if (fragment.childNodes.length === 1) {
            fragment = first;
        }

        // Require either new content or an interest in ignored elements to invoke the callback
        if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;

            // Use the original fragment for the last item
            // instead of the first because it can end up
            // being emptied incorrectly in certain situations (#8070).
            for (; i < l; i++) {
                node = fragment;

                if (i !== iNoClone) {
                    node = jQuery.clone(node, true, true);

                    // Keep references to cloned scripts for later restoration
                    if (hasScripts) {

                        // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                }

                callback.call(collection[i], node, i);
            }

            if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;

                // Reenable scripts
                jQuery.map(scripts, restoreScript);

                // Evaluate executable scripts on first document insertion
                for (i = 0; i < hasScripts; i++) {
                    node = scripts[i];
                    if (rscriptType.test(node.type || "") &&
                        !dataPriv.access(node, "globalEval") &&
                        jQuery.contains(doc, node)) {

                        if (node.src && (node.type || "").toLowerCase() !== "module") {

                            // Optional AJAX dependency, but won't run scripts if not present
                            if (jQuery._evalUrl) {
                                jQuery._evalUrl(node.src);
                            }
                        } else {
                            DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
                        }
                    }
                }
            }
        }
    }

    return collection;
}

function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
        if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
        }

        if (node.parentNode) {
            if (keepData && jQuery.contains(node.ownerDocument, node)) {
                setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
        }
    }

    return elem;
}

jQuery.extend({
    htmlPrefilter: function (html) {
        return html.replace(rxhtmlTag, "<$1></$2>");
    },

    clone: function (elem, dataAndEvents, deepDataAndEvents) {
        var i, l, srcElements, destElements,
            clone = elem.cloneNode(true),
            inPage = jQuery.contains(elem.ownerDocument, elem);

        // Fix IE cloning issues
        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
            !jQuery.isXMLDoc(elem)) {

            // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
            destElements = getAll(clone);
            srcElements = getAll(elem);

            for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
            }
        }

        // Copy the events from the original to the clone
        if (dataAndEvents) {
            if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);

                for (i = 0, l = srcElements.length; i < l; i++) {
                    cloneCopyEvent(srcElements[i], destElements[i]);
                }
            } else {
                cloneCopyEvent(elem, clone);
            }
        }

        // Preserve script evaluation history
        destElements = getAll(clone, "script");
        if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
        }

        // Return the cloned set
        return clone;
    },

    cleanData: function (elems) {
        var data, elem, type,
            special = jQuery.event.special,
            i = 0;

        for (; (elem = elems[i]) !== undefined; i++) {
            if (acceptData(elem)) {
                if ((data = elem[dataPriv.expando])) {
                    if (data.events) {
                        for (type in data.events) {
                            if (special[type]) {
                                jQuery.event.remove(elem, type);

                                // This is a shortcut to avoid jQuery.event.remove's overhead
                            } else {
                                jQuery.removeEvent(elem, type, data.handle);
                            }
                        }
                    }

                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) {

                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataUser.expando] = undefined;
                }
            }
        }
    }
});

jQuery.fn.extend({
    detach: function (selector) {
        return remove(this, selector, true);
    },

    remove: function (selector) {
        return remove(this, selector);
    },

    text: function (value) {
        return access(this, function (value) {
            return value === undefined ?
                jQuery.text(this) :
                this.empty().each(function () {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
        }, null, value, arguments.length);
    },

    append: function () {
        return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
            }
        });
    },

    prepend: function () {
        return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
            }
        });
    },

    before: function () {
        return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
            }
        });
    },

    after: function () {
        return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
            }
        });
    },

    empty: function () {
        var elem,
            i = 0;

        for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {

                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));

                // Remove any remaining nodes
                elem.textContent = "";
            }
        }

        return this;
    },

    clone: function (dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

        return this.map(function () {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
        });
    },

    html: function (value) {
        return access(this, function (value) {
            var elem = this[0] || {},
                i = 0,
                l = this.length;

            if (value === undefined && elem.nodeType === 1) {
                return elem.innerHTML;
            }

            // See if we can take a shortcut and just use innerHTML
            if (typeof value === "string" && !rnoInnerhtml.test(value) &&
                !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                value = jQuery.htmlPrefilter(value);

                try {
                    for (; i < l; i++) {
                        elem = this[i] || {};

                        // Remove element nodes and prevent memory leaks
                        if (elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem, false));
                            elem.innerHTML = value;
                        }
                    }

                    elem = 0;

                    // If using innerHTML throws an exception, use the fallback method
                } catch (e) { }
            }

            if (elem) {
                this.empty().append(value);
            }
        }, null, value, arguments.length);
    },

    replaceWith: function () {
        var ignored = [];

        // Make the changes, replacing each non-ignored context element with the new content
        return domManip(this, arguments, function (elem) {
            var parent = this.parentNode;

            if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                    parent.replaceChild(elem, this);
                }
            }

            // Force callback invocation
        }, ignored);
    }
});

jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function (name, original) {
    jQuery.fn[name] = function (selector) {
        var elems,
            ret = [],
            insert = jQuery(selector),
            last = insert.length - 1,
            i = 0;

        for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);

            // Support: Android <=4.0 only, PhantomJS 1 only
            // .get() because push.apply(_, arraylike) throws on ancient WebKit
            push.apply(ret, elems.get());
        }

        return this.pushStack(ret);
    };
});
var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

var getStyles = function (elem) {

    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
        view = window;
    }

    return view.getComputedStyle(elem);
};

var rboxStyle = new RegExp(cssExpand.join("|"), "i");



(function () {

    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {

        // This is a singleton, we need to execute it only once
        if (!div) {
            return;
        }

        container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
            "margin-top:1px;padding:0;border:0";
        div.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
            "margin:auto;border:1px;padding:1px;" +
            "width:60%;top:1%";
        documentElement.appendChild(container).appendChild(div);

        var divStyle = window.getComputedStyle(div);
        pixelPositionVal = divStyle.top !== "1%";

        // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

        // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
        // Some styles come back with percentage values, even though they shouldn't
        div.style.right = "60%";
        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

        // Support: IE 9 - 11 only
        // Detect misreporting of content dimensions for box-sizing:border-box elements
        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

        // Support: IE 9 only
        // Detect overflow:scroll screwiness (gh-3699)
        div.style.position = "absolute";
        scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

        documentElement.removeChild(container);

        // Nullify the div so it wouldn't be stored in the memory and
        // it will also be a sign that checks already performed
        div = null;
    }

    function roundPixelMeasures(measure) {
        return Math.round(parseFloat(measure));
    }

    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");

    // Finish early in limited (non-browser) environments
    if (!div.style) {
        return;
    }

    // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";

    jQuery.extend(support, {
        boxSizingReliable: function () {
            computeStyleTests();
            return boxSizingReliableVal;
        },
        pixelBoxStyles: function () {
            computeStyleTests();
            return pixelBoxStylesVal;
        },
        pixelPosition: function () {
            computeStyleTests();
            return pixelPositionVal;
        },
        reliableMarginLeft: function () {
            computeStyleTests();
            return reliableMarginLeftVal;
        },
        scrollboxSize: function () {
            computeStyleTests();
            return scrollboxSizeVal;
        }
    });
})();


function curCSS(elem, name, computed) {
    var width, minWidth, maxWidth, ret,

        // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;

    computed = computed || getStyles(elem);

    // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)
    if (computed) {
        ret = computed.getPropertyValue(name) || computed[name];

        if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
            ret = jQuery.style(elem, name);
        }

        // A tribute to the "awesome hack by Dean Edwards"
        // Android Browser returns percentage for some values,
        // but width seems to be reliably pixels.
        // This is against the CSSOM draft spec:
        // https://drafts.csswg.org/cssom/#resolved-values
        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

            // Remember the original values
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;

            // Put in the new values to get a computed value out
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;

            // Revert the changed values
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
        }
    }

    return ret !== undefined ?

        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" :
        ret;
}


function addGetHookIf(conditionFn, hookFn) {

    // Define the hook, we'll check on the first run if it's really needed.
    return {
        get: function () {
            if (conditionFn()) {

                // Hook not needed (or it's not possible to use it due
                // to missing dependency), remove it.
                delete this.get;
                return;
            }

            // Hook needed; redefine it so that the support test is not executed again.
            return (this.get = hookFn).apply(this, arguments);
        }
    };
}


var

    // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    rcustomProp = /^--/,
    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
    cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    },

    cssPrefixes = ["Webkit", "Moz", "ms"],
    emptyStyle = document.createElement("div").style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name) {

    // Shortcut for names that are not vendor prefixed
    if (name in emptyStyle) {
        return name;
    }

    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
        name = cssPrefixes[i] + capName;
        if (name in emptyStyle) {
            return name;
        }
    }
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName(name) {
    var ret = jQuery.cssProps[name];
    if (!ret) {
        ret = jQuery.cssProps[name] = vendorPropName(name) || name;
    }
    return ret;
}

function setPositiveNumber(elem, value, subtract) {

    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ?

        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
        value;
}

function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0;

    // Adjustment may not be necessary
    if (box === (isBorderBox ? "border" : "content")) {
        return 0;
    }

    for (; i < 4; i += 2) {

        // Both box models exclude margin
        if (box === "margin") {
            delta += jQuery.css(elem, box + cssExpand[i], true, styles);
        }

        // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
        if (!isBorderBox) {

            // Add padding
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

            // For "border" or "margin", add border
            if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

                // But still keep track of it otherwise
            } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }

            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
        } else {

            // For "content", subtract padding
            if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }

            // For "content" or "padding", subtract border
            if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
    }

    // Account for positive content-box scroll gutter when requested by providing computedVal
    if (!isBorderBox && computedVal >= 0) {

        // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
            computedVal -
            delta -
            extra -
            0.5
        ));
    }

    return delta;
}

function getWidthOrHeight(elem, dimension, extra) {

    // Start with computed style
    var styles = getStyles(elem),
        val = curCSS(elem, dimension, styles),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox;

    // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.
    if (rnumnonpx.test(val)) {
        if (!extra) {
            return val;
        }
        val = "auto";
    }

    // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    valueIsBorderBox = valueIsBorderBox &&
        (support.boxSizingReliable() || val === elem.style[dimension]);

    // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    if (val === "auto" ||
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {

        val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];

        // offsetWidth/offsetHeight provide border-box values
        valueIsBorderBox = true;
    }

    // Normalize "" and auto
    val = parseFloat(val) || 0;

    // Adjust for the element's box model
    return (val +
        boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,

            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
        )
    ) + "px";
}

jQuery.extend({

    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
        opacity: {
            get: function (elem, computed) {
                if (computed) {

                    // We should always get a number back from opacity
                    var ret = curCSS(elem, "opacity");
                    return ret === "" ? "1" : ret;
                }
            }
        }
    },

    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
        "animationIterationCount": true,
        "columnCount": true,
        "fillOpacity": true,
        "flexGrow": true,
        "flexShrink": true,
        "fontWeight": true,
        "lineHeight": true,
        "opacity": true,
        "order": true,
        "orphans": true,
        "widows": true,
        "zIndex": true,
        "zoom": true
    },

    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},

    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra) {

        // Don't set styles on text and comment nodes
        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
        }

        // Make sure that we're working with the right name
        var ret, type, hooks,
            origName = camelCase(name),
            isCustomProp = rcustomProp.test(name),
            style = elem.style;

        // Make sure that we're working with the right name. We don't
        // want to query the value if it is a CSS custom property
        // since they are user-defined.
        if (!isCustomProp) {
            name = finalPropName(origName);
        }

        // Gets hook for the prefixed version, then unprefixed version
        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

        // Check if we're setting a value
        if (value !== undefined) {
            type = typeof value;

            // Convert "+=" or "-=" to relative numbers (#7345)
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);

                // Fixes bug #9237
                type = "number";
            }

            // Make sure that null and NaN values aren't set (#7116)
            if (value == null || value !== value) {
                return;
            }

            // If a number was passed in, add the unit (except for certain CSS properties)
            if (type === "number") {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }

            // background-* props affect original clone's values
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
            }

            // If a hook was provided, use that value, otherwise just set the specified value
            if (!hooks || !("set" in hooks) ||
                (value = hooks.set(elem, value, extra)) !== undefined) {

                if (isCustomProp) {
                    style.setProperty(name, value);
                } else {
                    style[name] = value;
                }
            }

        } else {

            // If a hook was provided get the non-computed value from there
            if (hooks && "get" in hooks &&
                (ret = hooks.get(elem, false, extra)) !== undefined) {

                return ret;
            }

            // Otherwise just get the value from the style object
            return style[name];
        }
    },

    css: function (elem, name, extra, styles) {
        var val, num, hooks,
            origName = camelCase(name),
            isCustomProp = rcustomProp.test(name);

        // Make sure that we're working with the right name. We don't
        // want to modify the value if it is a CSS custom property
        // since they are user-defined.
        if (!isCustomProp) {
            name = finalPropName(origName);
        }

        // Try prefixed name followed by the unprefixed name
        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

        // If a hook was provided get the computed value from there
        if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
        }

        // Otherwise, if a way to get the computed value exists, use that
        if (val === undefined) {
            val = curCSS(elem, name, styles);
        }

        // Convert "normal" to computed value
        if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
        }

        // Make numeric if forced or a qualifier was provided and val looks numeric
        if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
        }

        return val;
    }
});

jQuery.each(["height", "width"], function (i, dimension) {
    jQuery.cssHooks[dimension] = {
        get: function (elem, computed, extra) {
            if (computed) {

                // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) &&

                    // Support: Safari 8+
                    // Table columns in Safari have non-zero offsetWidth & zero
                    // getBoundingClientRect().width unless display is changed.
                    // Support: IE <=11 only
                    // Running getBoundingClientRect on a disconnected node
                    // in IE throws an error.
                    (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
                    swap(elem, cssShow, function () {
                        return getWidthOrHeight(elem, dimension, extra);
                    }) :
                    getWidthOrHeight(elem, dimension, extra);
            }
        },

        set: function (elem, value, extra) {
            var matches,
                styles = getStyles(elem),
                isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                subtract = extra && boxModelAdjustment(
                    elem,
                    dimension,
                    extra,
                    isBorderBox,
                    styles
                );

            // Account for unreliable border-box dimensions by comparing offset* to computed and
            // faking a content-box to get border and padding (gh-3699)
            if (isBorderBox && support.scrollboxSize() === styles.position) {
                subtract -= Math.ceil(
                    elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                    parseFloat(styles[dimension]) -
                    boxModelAdjustment(elem, dimension, "border", false, styles) -
                    0.5
                );
            }

            // Convert to pixels if value adjustment is needed
            if (subtract && (matches = rcssNum.exec(value)) &&
                (matches[3] || "px") !== "px") {

                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
            }

            return setPositiveNumber(elem, value, subtract);
        }
    };
});

jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
    function (elem, computed) {
        if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) ||
                elem.getBoundingClientRect().left -
                swap(elem, { marginLeft: 0 }, function () {
                    return elem.getBoundingClientRect().left;
                })
            ) + "px";
        }
    }
);

// These hooks are used by animate to expand properties
jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
}, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
        expand: function (value) {
            var i = 0,
                expanded = {},

                // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [value];

            for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] =
                    parts[i] || parts[i - 2] || parts[0];
            }

            return expanded;
        }
    };

    if (prefix !== "margin") {
        jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
});

jQuery.fn.extend({
    css: function (name, value) {
        return access(this, function (elem, name, value) {
            var styles, len,
                map = {},
                i = 0;

            if (Array.isArray(name)) {
                styles = getStyles(elem);
                len = name.length;

                for (; i < len; i++) {
                    map[name[i]] = jQuery.css(elem, name[i], false, styles);
                }

                return map;
            }

            return value !== undefined ?
                jQuery.style(elem, name, value) :
                jQuery.css(elem, name);
        }, name, value, arguments.length > 1);
    }
});


function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
}
jQuery.Tween = Tween;

Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function () {
        var hooks = Tween.propHooks[this.prop];

        return hooks && hooks.get ?
            hooks.get(this) :
            Tween.propHooks._default.get(this);
    },
    run: function (percent) {
        var eased,
            hooks = Tween.propHooks[this.prop];

        if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](
                percent, this.options.duration * percent, 0, 1, this.options.duration
            );
        } else {
            this.pos = eased = percent;
        }
        this.now = (this.end - this.start) * eased + this.start;

        if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
        }

        if (hooks && hooks.set) {
            hooks.set(this);
        } else {
            Tween.propHooks._default.set(this);
        }
        return this;
    }
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
    _default: {
        get: function (tween) {
            var result;

            // Use a property on the element directly when it is not a DOM element,
            // or when there is no matching style property that exists.
            if (tween.elem.nodeType !== 1 ||
                tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
            }

            // Passing an empty string as a 3rd parameter to .css will automatically
            // attempt a parseFloat and fallback to a string if the parse fails.
            // Simple values such as "10px" are parsed to Float;
            // complex values such as "rotate(1rad)" are returned as-is.
            result = jQuery.css(tween.elem, tween.prop, "");

            // Empty strings, null, undefined and "auto" are converted to 0.
            return !result || result === "auto" ? 0 : result;
        },
        set: function (tween) {

            // Use step hook for back compat.
            // Use cssHook if its there.
            // Use .style if available and use plain properties where available.
            if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 &&
                (tween.elem.style[jQuery.cssProps[tween.prop]] != null ||
                    jQuery.cssHooks[tween.prop])) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
                tween.elem[tween.prop] = tween.now;
            }
        }
    }
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
        }
    }
};

jQuery.easing = {
    linear: function (p) {
        return p;
    },
    swing: function (p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
    fxNow, inProgress,
    rfxtypes = /^(?:toggle|show|hide)$/,
    rrun = /queueHooks$/;

function schedule() {
    if (inProgress) {
        if (document.hidden === false && window.requestAnimationFrame) {
            window.requestAnimationFrame(schedule);
        } else {
            window.setTimeout(schedule, jQuery.fx.interval);
        }

        jQuery.fx.tick();
    }
}

// Animations created synchronously will run synchronously
function createFxNow() {
    window.setTimeout(function () {
        fxNow = undefined;
    });
    return (fxNow = Date.now());
}

// Generate parameters to create a standard animation
function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = { height: type };

    // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
        which = cssExpand[i];
        attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
        attrs.opacity = attrs.width = type;
    }

    return attrs;
}

function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
        if ((tween = collection[index].call(animation, prop, value))) {

            // We're done with this property
            return tween;
        }
    }
}

function defaultPrefilter(elem, props, opts) {
    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow");

    // Queue-skipping animations hijack the fx hooks
    if (!opts.queue) {
        hooks = jQuery._queueHooks(elem, "fx");
        if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function () {
                if (!hooks.unqueued) {
                    oldfire();
                }
            };
        }
        hooks.unqueued++;

        anim.always(function () {

            // Ensure the complete handler is called before this completes
            anim.always(function () {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                    hooks.empty.fire();
                }
            });
        });
    }

    // Detect show/hide animations
    for (prop in props) {
        value = props[prop];
        if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {

                // Pretend to be hidden if this is a "show" and
                // there is still data from a stopped show/hide
                if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                    hidden = true;

                    // Ignore all other no-op show/hide data
                } else {
                    continue;
                }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        }
    }

    // Bail out if this is a no-op like .hide().hide()
    propTween = !jQuery.isEmptyObject(props);
    if (!propTween && jQuery.isEmptyObject(orig)) {
        return;
    }

    // Restrict "overflow" and "display" styles during box animations
    if (isBox && elem.nodeType === 1) {

        // Support: IE <=9 - 11, Edge 12 - 15
        // Record all 3 overflow attributes because IE does not infer the shorthand
        // from identically-valued overflowX and overflowY and Edge just mirrors
        // the overflowX value there.
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];

        // Identify a display type, preferring old show/hide data over the CSS cascade
        restoreDisplay = dataShow && dataShow.display;
        if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
        }
        display = jQuery.css(elem, "display");
        if (display === "none") {
            if (restoreDisplay) {
                display = restoreDisplay;
            } else {

                // Get nonempty value(s) by temporarily forcing visibility
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
            }
        }

        // Animate inline elements as inline-block
        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {

                // Restore the original display value at the end of pure show/hide animations
                if (!propTween) {
                    anim.done(function () {
                        style.display = restoreDisplay;
                    });
                    if (restoreDisplay == null) {
                        display = style.display;
                        restoreDisplay = display === "none" ? "" : display;
                    }
                }
                style.display = "inline-block";
            }
        }
    }

    if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function () {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
        });
    }

    // Implement show/hide animations
    propTween = false;
    for (prop in orig) {

        // General show/hide setup for this element animation
        if (!propTween) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }

            // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
            if (toggle) {
                dataShow.hidden = !hidden;
            }

            // Show elements before animating them
            if (hidden) {
                showHide([elem], true);
            }

            /* eslint-disable no-loop-func */

            anim.done(function () {

                /* eslint-enable no-loop-func */

                // The final step of a "hide" animation is actually hiding the element
                if (!hidden) {
                    showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
        }

        // Per-property setup
        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
            }
        }
    }
}

function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;

    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
        name = camelCase(index);
        easing = specialEasing[name];
        value = props[index];
        if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
        }

        if (index !== name) {
            props[name] = value;
            delete props[index];
        }

        hooks = jQuery.cssHooks[name];
        if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];

            // Not quite $.extend, this won't overwrite existing keys.
            // Reusing 'index' because we have the correct "name"
            for (index in value) {
                if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            }
        } else {
            specialEasing[name] = easing;
        }
    }
}

function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {

            // Don't match elem in the :animated selector
            delete tick.elem;
        }),
        tick = function () {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(),
                remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

                // Support: Android 2.3 only
                // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                temp = remaining / animation.duration || 0,
                percent = 1 - temp,
                index = 0,
                length = animation.tweens.length;

            for (; index < length; index++) {
                animation.tweens[index].run(percent);
            }

            deferred.notifyWith(elem, [animation, percent, remaining]);

            // If there's more to do, yield
            if (percent < 1 && length) {
                return remaining;
            }

            // If this was an empty animation, synthesize a final progress notification
            if (!length) {
                deferred.notifyWith(elem, [animation, 1, 0]);
            }

            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [animation]);
            return false;
        },
        animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function (prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end,
                    animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function (gotoEnd) {
                var index = 0,

                    // If we are going to the end, we want to run all the tweens
                    // otherwise we skip this part
                    length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (; index < length; index++) {
                    animation.tweens[index].run(1);
                }

                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                    deferred.resolveWith(elem, [animation, gotoEnd]);
                } else {
                    deferred.rejectWith(elem, [animation, gotoEnd]);
                }
                return this;
            }
        }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
        if (result) {
            if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                    result.stop.bind(result);
            }
            return result;
        }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
    }

    // Attach callbacks from options
    animation
        .progress(animation.opts.progress)
        .done(animation.opts.done, animation.opts.complete)
        .fail(animation.opts.fail)
        .always(animation.opts.always);

    jQuery.fx.timer(
        jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })
    );

    return animation;
}

jQuery.Animation = jQuery.extend(Animation, {

    tweeners: {
        "*": [function (prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
        }]
    },

    tweener: function (props, callback) {
        if (isFunction(props)) {
            callback = props;
            props = ["*"];
        } else {
            props = props.match(rnothtmlwhite);
        }

        var prop,
            index = 0,
            length = props.length;

        for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
        }
    },

    prefilters: [defaultPrefilter],

    prefilter: function (callback, prepend) {
        if (prepend) {
            Animation.prefilters.unshift(callback);
        } else {
            Animation.prefilters.push(callback);
        }
    }
});

jQuery.speed = function (speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
        complete: fn || !fn && easing ||
            isFunction(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !isFunction(easing) && easing
    };

    // Go to the end state if fx are off
    if (jQuery.fx.off) {
        opt.duration = 0;

    } else {
        if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];

            } else {
                opt.duration = jQuery.fx.speeds._default;
            }
        }
    }

    // Normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
    }

    // Queueing
    opt.old = opt.complete;

    opt.complete = function () {
        if (isFunction(opt.old)) {
            opt.old.call(this);
        }

        if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
        }
    };

    return opt;
};

jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {

        // Show any hidden elements after setting opacity to 0
        return this.filter(isHiddenWithinTree).css("opacity", 0).show()

            // Animate to the value specified
            .end().animate({ opacity: to }, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop),
            optall = jQuery.speed(speed, easing, callback),
            doAnimation = function () {

                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);

                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) {
                    anim.stop(true);
                }
            };
        doAnimation.finish = doAnimation;

        return empty || optall.queue === false ?
            this.each(doAnimation) :
            this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
        var stopQueue = function (hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
        };

        if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined;
        }
        if (clearQueue && type !== false) {
            this.queue(type || "fx", []);
        }

        return this.each(function () {
            var dequeue = true,
                index = type != null && type + "queueHooks",
                timers = jQuery.timers,
                data = dataPriv.get(this);

            if (index) {
                if (data[index] && data[index].stop) {
                    stopQueue(data[index]);
                }
            } else {
                for (index in data) {
                    if (data[index] && data[index].stop && rrun.test(index)) {
                        stopQueue(data[index]);
                    }
                }
            }

            for (index = timers.length; index--;) {
                if (timers[index].elem === this &&
                    (type == null || timers[index].queue === type)) {

                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
            }

            // Start the next in the queue if the last step wasn't forced.
            // Timers currently will call their complete callbacks, which
            // will dequeue but only if they were gotoEnd.
            if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
            }
        });
    },
    finish: function (type) {
        if (type !== false) {
            type = type || "fx";
        }
        return this.each(function () {
            var index,
                data = dataPriv.get(this),
                queue = data[type + "queue"],
                hooks = data[type + "queueHooks"],
                timers = jQuery.timers,
                length = queue ? queue.length : 0;

            // Enable finishing flag on private data
            data.finish = true;

            // Empty the queue first
            jQuery.queue(this, type, []);

            if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
            }

            // Look for any active animations, and finish them
            for (index = timers.length; index--;) {
                if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
            }

            // Look for any animations in the old queue and finish them
            for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                    queue[index].finish.call(this);
                }
            }

            // Turn off finishing flag
            delete data.finish;
        });
    }
});

jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function (speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ?
            cssFn.apply(this, arguments) :
            this.animate(genFx(name, true), speed, easing, callback);
    };
});

// Generate shortcuts for custom animations
jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
}, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
    };
});

jQuery.timers = [];
jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;

    fxNow = Date.now();

    for (; i < timers.length; i++) {
        timer = timers[i];

        // Run the timer and safely remove it when done (allowing for external removal)
        if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
        }
    }

    if (!timers.length) {
        jQuery.fx.stop();
    }
    fxNow = undefined;
};

jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function () {
    if (inProgress) {
        return;
    }

    inProgress = true;
    schedule();
};

jQuery.fx.stop = function () {
    inProgress = null;
};

jQuery.fx.speeds = {
    slow: 600,
    fast: 200,

    // Default speed
    _default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";

    return this.queue(type, function (next, hooks) {
        var timeout = window.setTimeout(next, time);
        hooks.stop = function () {
            window.clearTimeout(timeout);
        };
    });
};


(function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));

    input.type = "checkbox";

    // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"
    support.checkOn = input.value !== "";

    // Support: IE <=11 only
    // Must access selectedIndex to make default options select
    support.optSelected = opt.selected;

    // Support: IE <=11 only
    // An input loses its value after becoming a radio
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
})();


var boolHook,
    attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
    attr: function (name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1);
    },

    removeAttr: function (name) {
        return this.each(function () {
            jQuery.removeAttr(this, name);
        });
    }
});

jQuery.extend({
    attr: function (elem, name, value) {
        var ret, hooks,
            nType = elem.nodeType;

        // Don't get/set attributes on text, comment and attribute nodes
        if (nType === 3 || nType === 8 || nType === 2) {
            return;
        }

        // Fallback to prop when attributes are not supported
        if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
        }

        // Attribute hooks are determined by the lowercase version
        // Grab necessary hook if one is defined
        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] ||
                (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
        }

        if (value !== undefined) {
            if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
            }

            if (hooks && "set" in hooks &&
                (ret = hooks.set(elem, value, name)) !== undefined) {
                return ret;
            }

            elem.setAttribute(name, value + "");
            return value;
        }

        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
        }

        ret = jQuery.find.attr(elem, name);

        // Non-existent attributes return null, we normalize to undefined
        return ret == null ? undefined : ret;
    },

    attrHooks: {
        type: {
            set: function (elem, value) {
                if (!support.radioValue && value === "radio" &&
                    nodeName(elem, "input")) {
                    var val = elem.value;
                    elem.setAttribute("type", value);
                    if (val) {
                        elem.value = val;
                    }
                    return value;
                }
            }
        }
    },

    removeAttr: function (elem, value) {
        var name,
            i = 0,

            // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);

        if (attrNames && elem.nodeType === 1) {
            while ((name = attrNames[i++])) {
                elem.removeAttribute(name);
            }
        }
    }
});

// Hooks for boolean attributes
boolHook = {
    set: function (elem, value, name) {
        if (value === false) {

            // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
        } else {
            elem.setAttribute(name, name);
        }
        return name;
    }
};

jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
        var ret, handle,
            lowercaseName = name.toLowerCase();

        if (!isXML) {

            // Avoid an infinite loop by temporarily removing this function from the getter
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name, isXML) != null ?
                lowercaseName :
                null;
            attrHandle[lowercaseName] = handle;
        }
        return ret;
    };
});




var rfocusable = /^(?:input|select|textarea|button)$/i,
    rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
    prop: function (name, value) {
        return access(this, jQuery.prop, name, value, arguments.length > 1);
    },

    removeProp: function (name) {
        return this.each(function () {
            delete this[jQuery.propFix[name] || name];
        });
    }
});

jQuery.extend({
    prop: function (elem, name, value) {
        var ret, hooks,
            nType = elem.nodeType;

        // Don't get/set properties on text, comment and attribute nodes
        if (nType === 3 || nType === 8 || nType === 2) {
            return;
        }

        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

            // Fix name and attach hooks
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
        }

        if (value !== undefined) {
            if (hooks && "set" in hooks &&
                (ret = hooks.set(elem, value, name)) !== undefined) {
                return ret;
            }

            return (elem[name] = value);
        }

        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
        }

        return elem[name];
    },

    propHooks: {
        tabIndex: {
            get: function (elem) {

                // Support: IE <=9 - 11 only
                // elem.tabIndex doesn't always return the
                // correct value when it hasn't been explicitly set
                // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                // Use proper attribute retrieval(#12072)
                var tabindex = jQuery.find.attr(elem, "tabindex");

                if (tabindex) {
                    return parseInt(tabindex, 10);
                }

                if (
                    rfocusable.test(elem.nodeName) ||
                    rclickable.test(elem.nodeName) &&
                    elem.href
                ) {
                    return 0;
                }

                return -1;
            }
        }
    },

    propFix: {
        "for": "htmlFor",
        "class": "className"
    }
});

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if (!support.optSelected) {
    jQuery.propHooks.selected = {
        get: function (elem) {

            /* eslint no-unused-expressions: "off" */

            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
            }
            return null;
        },
        set: function (elem) {

            /* eslint no-unused-expressions: "off" */

            var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;

                if (parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
            }
        }
    };
}

jQuery.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
], function () {
    jQuery.propFix[this.toLowerCase()] = this;
});




// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
}


function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
}

function classesToArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
    }
    return [];
}

jQuery.fn.extend({
    addClass: function (value) {
        var classes, elem, cur, curValue, clazz, j, finalValue,
            i = 0;

        if (isFunction(value)) {
            return this.each(function (j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
        }

        classes = classesToArray(value);

        if (classes.length) {
            while ((elem = this[i++])) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                if (cur) {
                    j = 0;
                    while ((clazz = classes[j++])) {
                        if (cur.indexOf(" " + clazz + " ") < 0) {
                            cur += clazz + " ";
                        }
                    }

                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) {
                        elem.setAttribute("class", finalValue);
                    }
                }
            }
        }

        return this;
    },

    removeClass: function (value) {
        var classes, elem, cur, curValue, clazz, j, finalValue,
            i = 0;

        if (isFunction(value)) {
            return this.each(function (j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
        }

        if (!arguments.length) {
            return this.attr("class", "");
        }

        classes = classesToArray(value);

        if (classes.length) {
            while ((elem = this[i++])) {
                curValue = getClass(elem);

                // This expression is here for better compressibility (see addClass)
                cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                if (cur) {
                    j = 0;
                    while ((clazz = classes[j++])) {

                        // Remove *all* instances
                        while (cur.indexOf(" " + clazz + " ") > -1) {
                            cur = cur.replace(" " + clazz + " ", " ");
                        }
                    }

                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) {
                        elem.setAttribute("class", finalValue);
                    }
                }
            }
        }

        return this;
    },

    toggleClass: function (value, stateVal) {
        var type = typeof value,
            isValidValue = type === "string" || Array.isArray(value);

        if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
        }

        if (isFunction(value)) {
            return this.each(function (i) {
                jQuery(this).toggleClass(
                    value.call(this, i, getClass(this), stateVal),
                    stateVal
                );
            });
        }

        return this.each(function () {
            var className, i, self, classNames;

            if (isValidValue) {

                // Toggle individual class names
                i = 0;
                self = jQuery(this);
                classNames = classesToArray(value);

                while ((className = classNames[i++])) {

                    // Check each className given, space separated list
                    if (self.hasClass(className)) {
                        self.removeClass(className);
                    } else {
                        self.addClass(className);
                    }
                }

                // Toggle whole class name
            } else if (value === undefined || type === "boolean") {
                className = getClass(this);
                if (className) {

                    // Store className if set
                    dataPriv.set(this, "__className__", className);
                }

                // If the element has a class name or if we're passed `false`,
                // then remove the whole classname (if there was one, the above saved it).
                // Otherwise bring back whatever was previously saved (if anything),
                // falling back to the empty string if nothing was stored.
                if (this.setAttribute) {
                    this.setAttribute("class",
                        className || value === false ?
                            "" :
                            dataPriv.get(this, "__className__") || ""
                    );
                }
            }
        });
    },

    hasClass: function (selector) {
        var className, elem,
            i = 0;

        className = " " + selector + " ";
        while ((elem = this[i++])) {
            if (elem.nodeType === 1 &&
                (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
            }
        }

        return false;
    }
});




var rreturn = /\r/g;

jQuery.fn.extend({
    val: function (value) {
        var hooks, ret, valueIsFunction,
            elem = this[0];

        if (!arguments.length) {
            if (elem) {
                hooks = jQuery.valHooks[elem.type] ||
                    jQuery.valHooks[elem.nodeName.toLowerCase()];

                if (hooks &&
                    "get" in hooks &&
                    (ret = hooks.get(elem, "value")) !== undefined
                ) {
                    return ret;
                }

                ret = elem.value;

                // Handle most common string cases
                if (typeof ret === "string") {
                    return ret.replace(rreturn, "");
                }

                // Handle cases where value is null/undef or number
                return ret == null ? "" : ret;
            }

            return;
        }

        valueIsFunction = isFunction(value);

        return this.each(function (i) {
            var val;

            if (this.nodeType !== 1) {
                return;
            }

            if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
            } else {
                val = value;
            }

            // Treat null/undefined as ""; convert numbers to string
            if (val == null) {
                val = "";

            } else if (typeof val === "number") {
                val += "";

            } else if (Array.isArray(val)) {
                val = jQuery.map(val, function (value) {
                    return value == null ? "" : value + "";
                });
            }

            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

            // If set returns undefined, fall back to normal setting
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                this.value = val;
            }
        });
    }
});

jQuery.extend({
    valHooks: {
        option: {
            get: function (elem) {

                var val = jQuery.find.attr(elem, "value");
                return val != null ?
                    val :

                    // Support: IE <=10 - 11 only
                    // option.text throws exceptions (#14686, #14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
            }
        },
        select: {
            get: function (elem) {
                var value, option, i,
                    options = elem.options,
                    index = elem.selectedIndex,
                    one = elem.type === "select-one",
                    values = one ? null : [],
                    max = one ? index + 1 : options.length;

                if (index < 0) {
                    i = max;

                } else {
                    i = one ? index : 0;
                }

                // Loop through all the selected options
                for (; i < max; i++) {
                    option = options[i];

                    // Support: IE <=9 only
                    // IE8-9 doesn't update selected after form reset (#2551)
                    if ((option.selected || i === index) &&

                        // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled &&
                        (!option.parentNode.disabled ||
                            !nodeName(option.parentNode, "optgroup"))) {

                        // Get the specific value for the option
                        value = jQuery(option).val();

                        // We don't need an array for one selects
                        if (one) {
                            return value;
                        }

                        // Multi-Selects return an array
                        values.push(value);
                    }
                }

                return values;
            },

            set: function (elem, value) {
                var optionSet, option,
                    options = elem.options,
                    values = jQuery.makeArray(value),
                    i = options.length;

                while (i--) {
                    option = options[i];

                    /* eslint-disable no-cond-assign */

                    if (option.selected =
                        jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
                    ) {
                        optionSet = true;
                    }

                    /* eslint-enable no-cond-assign */
                }

                // Force browsers to behave consistently when non-matching value is set
                if (!optionSet) {
                    elem.selectedIndex = -1;
                }
                return values;
            }
        }
    }
});

// Radios and checkboxes getter/setter
jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
        set: function (elem, value) {
            if (Array.isArray(value)) {
                return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
            }
        }
    };
    if (!support.checkOn) {
        jQuery.valHooks[this].get = function (elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    }
});




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    stopPropagationCallback = function (e) {
        e.stopPropagation();
    };

jQuery.extend(jQuery.event, {

    trigger: function (event, data, elem, onlyHandlers) {

        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
            eventPath = [elem || document],
            type = hasOwn.call(event, "type") ? event.type : event,
            namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

        cur = lastElement = tmp = elem = elem || document;

        // Don't do events on text and comment nodes
        if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
        }

        // focus/blur morphs to focusin/out; ensure we're not firing them right now
        if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
        }

        if (type.indexOf(".") > -1) {

            // Namespaced trigger; create a regexp to match event type in handle()
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
        }
        ontype = type.indexOf(":") < 0 && "on" + type;

        // Caller can pass in a jQuery.Event object, Object, or just an event type string
        event = event[jQuery.expando] ?
            event :
            new jQuery.Event(type, typeof event === "object" && event);

        // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ?
            new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
            null;

        // Clean up the event in case it is being reused
        event.result = undefined;
        if (!event.target) {
            event.target = elem;
        }

        // Clone any incoming data and prepend the event, creating the handler arg list
        data = data == null ?
            [event] :
            jQuery.makeArray(data, [event]);

        // Allow special events to draw outside the lines
        special = jQuery.event.special[type] || {};
        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
        }

        // Determine event propagation path in advance, per W3C events spec (#9951)
        // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
            }

            // Only add window if we got to document (e.g., not plain obj or detached DOM)
            if (tmp === (elem.ownerDocument || document)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
        }

        // Fire handlers on the event path
        i = 0;
        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ?
                bubbleType :
                special.bindType || type;

            // jQuery handler
            handle = (dataPriv.get(cur, "events") || {})[event.type] &&
                dataPriv.get(cur, "handle");
            if (handle) {
                handle.apply(cur, data);
            }

            // Native handler
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                    event.preventDefault();
                }
            }
        }
        event.type = type;

        // If nobody prevented the default action, do it now
        if (!onlyHandlers && !event.isDefaultPrevented()) {

            if ((!special._default ||
                special._default.apply(eventPath.pop(), data) === false) &&
                acceptData(elem)) {

                // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (#6170)
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

                    // Don't re-trigger an onFOO event when we call its FOO() method
                    tmp = elem[ontype];

                    if (tmp) {
                        elem[ontype] = null;
                    }

                    // Prevent re-triggering of the same event, since we already bubbled it above
                    jQuery.event.triggered = type;

                    if (event.isPropagationStopped()) {
                        lastElement.addEventListener(type, stopPropagationCallback);
                    }

                    elem[type]();

                    if (event.isPropagationStopped()) {
                        lastElement.removeEventListener(type, stopPropagationCallback);
                    }

                    jQuery.event.triggered = undefined;

                    if (tmp) {
                        elem[ontype] = tmp;
                    }
                }
            }
        }

        return event.result;
    },

    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function (type, elem, event) {
        var e = jQuery.extend(
            new jQuery.Event(),
            event,
            {
                type: type,
                isSimulated: true
            }
        );

        jQuery.event.trigger(e, null, elem);
    }

});

jQuery.fn.extend({

    trigger: function (type, data) {
        return this.each(function () {
            jQuery.event.trigger(type, data, this);
        });
    },
    triggerHandler: function (type, data) {
        var elem = this[0];
        if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
        }
    }
});


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if (!support.focusin) {
    jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

        // Attach a single capturing handler on the document while someone wants focusin/focusout
        var handler = function (event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };

        jQuery.event.special[fix] = {
            setup: function () {
                var doc = this.ownerDocument || this,
                    attaches = dataPriv.access(doc, fix);

                if (!attaches) {
                    doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function () {
                var doc = this.ownerDocument || this,
                    attaches = dataPriv.access(doc, fix) - 1;

                if (!attaches) {
                    doc.removeEventListener(orig, handler, true);
                    dataPriv.remove(doc, fix);

                } else {
                    dataPriv.access(doc, fix, attaches);
                }
            }
        };
    });
}
var location = window.location;

var nonce = Date.now();

var rquery = (/\?/);



// Cross-browser xml parsing
jQuery.parseXML = function (data) {
    var xml;
    if (!data || typeof data !== "string") {
        return null;
    }

    // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.
    try {
        xml = (new window.DOMParser()).parseFromString(data, "text/xml");
    } catch (e) {
        xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
        jQuery.error("Invalid XML: " + data);
    }
    return xml;
};


var
    rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {

        // Serialize array item.
        jQuery.each(obj, function (i, v) {
            if (traditional || rbracket.test(prefix)) {

                // Treat each array item as a scalar.
                add(prefix, v);

            } else {

                // Item is non-scalar (array or object), encode its numeric index.
                buildParams(
                    prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                    v,
                    traditional,
                    add
                );
            }
        });

    } else if (!traditional && toType(obj) === "object") {

        // Serialize object item.
        for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        }

    } else {

        // Serialize scalar item.
        add(prefix, obj);
    }
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function (key, valueOrFunction) {

            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ?
                valueOrFunction() :
                valueOrFunction;

            s[s.length] = encodeURIComponent(key) + "=" +
                encodeURIComponent(value == null ? "" : value);
        };

    // If an array was passed in, assume that it is an array of form elements.
    if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {

        // Serialize the form elements
        jQuery.each(a, function () {
            add(this.name, this.value);
        });

    } else {

        // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
        }
    }

    // Return the resulting serialization
    return s.join("&");
};

jQuery.fn.extend({
    serialize: function () {
        return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
        return this.map(function () {

            // Can add propHook for "elements" to filter or add form elements
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
        })
            .filter(function () {
                var type = this.type;

                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") &&
                    rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                    (this.checked || !rcheckableType.test(type));
            })
            .map(function (i, elem) {
                var val = jQuery(this).val();

                if (val == null) {
                    return null;
                }

                if (Array.isArray(val)) {
                    return jQuery.map(val, function (val) {
                        return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                    });
                }

                return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
    }
});


var
    r20 = /%20/g,
    rhash = /#.*$/,
    rantiCache = /([?&])_=[^&]*/,
    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

    // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rnoContent = /^(?:GET|HEAD)$/,
    rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
    prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
    transports = {},

    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    allTypes = "*/".concat("*"),

    // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure) {

    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {

        if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
        }

        var dataType,
            i = 0,
            dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

        if (isFunction(func)) {

            // For each dataType in the dataTypeExpression
            while ((dataType = dataTypes[i++])) {

                // Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);

                    // Otherwise append
                } else {
                    (structure[dataType] = structure[dataType] || []).push(func);
                }
            }
        }
    };
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

    var inspected = {},
        seekingTransport = (structure === transports);

    function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" &&
                !seekingTransport && !inspected[dataTypeOrTransport]) {

                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
            } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
            }
        });
        return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target, src) {
    var key, deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
        if (src[key] !== undefined) {
            (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
        }
    }
    if (deep) {
        jQuery.extend(true, target, deep);
    }

    return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses(s, jqXHR, responses) {

    var ct, type, finalDataType, firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;

    // Remove auto dataType and get content-type in the process
    while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === undefined) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
    }

    // Check if we're dealing with a known content-type
    if (ct) {
        for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
    }

    // Check to see if we have a response for the expected dataType
    if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
    } else {

        // Try convertible dataTypes
        for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
            }
            if (!firstDataType) {
                firstDataType = type;
            }
        }

        // Or just use first one
        finalDataType = finalDataType || firstDataType;
    }

    // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response
    if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
    }
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2, current, conv, tmp, prev,
        converters = {},

        // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();

    // Create converters map with lowercased keys
    if (dataTypes[1]) {
        for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
        }
    }

    current = dataTypes.shift();

    // Convert to each sequential dataType
    while (current) {

        if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
        }

        // Apply the dataFilter if provided
        if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
        }

        prev = current;
        current = dataTypes.shift();

        if (current) {

            // There's only work to do if current dataType is non-auto
            if (current === "*") {

                current = prev;

                // Convert response if prev dataType is non-auto and differs from current
            } else if (prev !== "*" && prev !== current) {

                // Seek a direct converter
                conv = converters[prev + " " + current] || converters["* " + current];

                // If none found, seek a pair
                if (!conv) {
                    for (conv2 in converters) {

                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {

                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] ||
                                converters["* " + tmp[0]];
                            if (conv) {

                                // Condense equivalence converters
                                if (conv === true) {
                                    conv = converters[conv2];

                                    // Otherwise, insert the intermediate dataType
                                } else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                }

                // Apply converter (if not an equivalence)
                if (conv !== true) {

                    // Unless errors are allowed to bubble, catch and return them
                    if (conv && s.throws) {
                        response = conv(response);
                    } else {
                        try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
    }

    return { state: "success", data: response };
}

jQuery.extend({

    // Counter for holding the number of active queries
    active: 0,

    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},

    ajaxSettings: {
        url: location.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

        accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },

        contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
        },

        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },

        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {

            // Convert anything to text
            "* text": String,

            // Text to html (true = no transformation)
            "text html": true,

            // Evaluate text as a json expression
            "text json": JSON.parse,

            // Parse text as xml
            "text xml": jQuery.parseXML
        },

        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
            url: true,
            context: true
        }
    },

    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings) {
        return settings ?

            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

            // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
    },

    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),

    // Main method
    ajax: function (url, options) {

        // If url is an object, simulate pre-1.5 signature
        if (typeof url === "object") {
            options = url;
            url = undefined;
        }

        // Force options to be an object
        options = options || {};

        var transport,

            // URL without anti-cache param
            cacheURL,

            // Response headers
            responseHeadersString,
            responseHeaders,

            // timeout handle
            timeoutTimer,

            // Url cleanup var
            urlAnchor,

            // Request state (becomes false upon send and true upon completion)
            completed,

            // To know if global events are to be dispatched
            fireGlobals,

            // Loop variable
            i,

            // uncached part of the url
            uncached,

            // Create the final options object
            s = jQuery.ajaxSetup({}, options),

            // Callbacks context
            callbackContext = s.context || s,

            // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context &&
                (callbackContext.nodeType || callbackContext.jquery) ?
                jQuery(callbackContext) :
                jQuery.event,

            // Deferreds
            deferred = jQuery.Deferred(),
            completeDeferred = jQuery.Callbacks("once memory"),

            // Status-dependent callbacks
            statusCode = s.statusCode || {},

            // Headers (they are sent all at once)
            requestHeaders = {},
            requestHeadersNames = {},

            // Default abort message
            strAbort = "canceled",

            // Fake xhr
            jqXHR = {
                readyState: 0,

                // Builds headers hashtable if needed
                getResponseHeader: function (key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while ((match = rheaders.exec(responseHeadersString))) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },

                // Raw string
                getAllResponseHeaders: function () {
                    return completed ? responseHeadersString : null;
                },

                // Caches the header
                setRequestHeader: function (name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] =
                            requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },

                // Overrides response content-type header
                overrideMimeType: function (type) {
                    if (completed == null) {
                        s.mimeType = type;
                    }
                    return this;
                },

                // Status-dependent callbacks
                statusCode: function (map) {
                    var code;
                    if (map) {
                        if (completed) {

                            // Execute the appropriate callbacks
                            jqXHR.always(map[jqXHR.status]);
                        } else {

                            // Lazy-add the new callbacks in a way that preserves old ones
                            for (code in map) {
                                statusCode[code] = [statusCode[code], map[code]];
                            }
                        }
                    }
                    return this;
                },

                // Cancel the request
                abort: function (statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };

        // Attach deferreds
        deferred.promise(jqXHR);

        // Add protocol if not provided (prefilters might expect it)
        // Handle falsy url in the settings object (#10093: consistency with old signature)
        // We also use the url parameter if available
        s.url = ((url || s.url || location.href) + "")
            .replace(rprotocol, location.protocol + "//");

        // Alias method option to type as per ticket #12004
        s.type = options.method || options.type || s.method || s.type;

        // Extract dataTypes list
        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

        // A cross-domain request is in order when the origin doesn't match the current origin.
        if (s.crossDomain == null) {
            urlAnchor = document.createElement("a");

            // Support: IE <=8 - 11, Edge 12 - 15
            // IE throws exception on accessing the href property if url is malformed,
            // e.g. http://example.com:80x/
            try {
                urlAnchor.href = s.url;

                // Support: IE <=8 - 11 only
                // Anchor's host property isn't correctly set when s.url is relative
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                    urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {

                // If there is an error parsing the URL, assume it is crossDomain,
                // it can be rejected by the transport if it is invalid
                s.crossDomain = true;
            }
        }

        // Convert data if not already a string
        if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
        }

        // Apply prefilters
        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

        // If request was aborted inside a prefilter, stop there
        if (completed) {
            return jqXHR;
        }

        // We can fire global events as of now if asked to
        // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
        fireGlobals = jQuery.event && s.global;

        // Watch for a new set of requests
        if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
        }

        // Uppercase the type
        s.type = s.type.toUpperCase();

        // Determine if request has content
        s.hasContent = !rnoContent.test(s.type);

        // Save the URL in case we're toying with the If-Modified-Since
        // and/or If-None-Match header later on
        // Remove hash to simplify url manipulation
        cacheURL = s.url.replace(rhash, "");

        // More options handling for requests with no content
        if (!s.hasContent) {

            // Remember the hash so we can put it back
            uncached = s.url.slice(cacheURL.length);

            // If data is available and should be processed, append data to url
            if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

                // #9682: remove data so that it's not used in an eventual retry
                delete s.data;
            }

            // Add or update anti-cache param if needed
            if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
            }

            // Put hash and anti-cache on the URL that will be requested (gh-1732)
            s.url = cacheURL + uncached;

            // Change '%20' to '+' if this is encoded form body content (gh-2658)
        } else if (s.data && s.processData &&
            (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
        }

        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
        }

        // Set the correct header, if data is being sent
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
        }

        // Set the Accepts header for the server, depending on the dataType
        jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
                s.accepts[s.dataTypes[0]] +
                (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
                s.accepts["*"]
        );

        // Check for headers option
        for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
        }

        // Allow custom headers/mimetypes and early abort
        if (s.beforeSend &&
            (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

            // Abort if not done already and return
            return jqXHR.abort();
        }

        // Aborting is no longer a cancellation
        strAbort = "abort";

        // Install callbacks on deferreds
        completeDeferred.add(s.complete);
        jqXHR.done(s.success);
        jqXHR.fail(s.error);

        // Get transport
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

        // If no transport, we auto-abort
        if (!transport) {
            done(-1, "No Transport");
        } else {
            jqXHR.readyState = 1;

            // Send global event
            if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }

            // If request was aborted inside ajaxSend, stop there
            if (completed) {
                return jqXHR;
            }

            // Timeout
            if (s.async && s.timeout > 0) {
                timeoutTimer = window.setTimeout(function () {
                    jqXHR.abort("timeout");
                }, s.timeout);
            }

            try {
                completed = false;
                transport.send(requestHeaders, done);
            } catch (e) {

                // Rethrow post-completion exceptions
                if (completed) {
                    throw e;
                }

                // Propagate others as results
                done(-1, e);
            }
        }

        // Callback for when everything is done
        function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified,
                statusText = nativeStatusText;

            // Ignore repeat invocations
            if (completed) {
                return;
            }

            completed = true;

            // Clear timeout if it exists
            if (timeoutTimer) {
                window.clearTimeout(timeoutTimer);
            }

            // Dereference transport for early garbage collection
            // (no matter how long the jqXHR object will be used)
            transport = undefined;

            // Cache response headers
            responseHeadersString = headers || "";

            // Set readyState
            jqXHR.readyState = status > 0 ? 4 : 0;

            // Determine if successful
            isSuccess = status >= 200 && status < 300 || status === 304;

            // Get response data
            if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
            }

            // Convert no matter what (that way responseXXX fields are always set)
            response = ajaxConvert(s, response, jqXHR, isSuccess);

            // If successful, handle type chaining
            if (isSuccess) {

                // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                if (s.ifModified) {
                    modified = jqXHR.getResponseHeader("Last-Modified");
                    if (modified) {
                        jQuery.lastModified[cacheURL] = modified;
                    }
                    modified = jqXHR.getResponseHeader("etag");
                    if (modified) {
                        jQuery.etag[cacheURL] = modified;
                    }
                }

                // if no content
                if (status === 204 || s.type === "HEAD") {
                    statusText = "nocontent";

                    // if not modified
                } else if (status === 304) {
                    statusText = "notmodified";

                    // If we have data, let's convert it
                } else {
                    statusText = response.state;
                    success = response.data;
                    error = response.error;
                    isSuccess = !error;
                }
            } else {

                // Extract error from statusText and normalize for non-aborts
                error = statusText;
                if (status || !statusText) {
                    statusText = "error";
                    if (status < 0) {
                        status = 0;
                    }
                }
            }

            // Set data for the fake xhr object
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";

            // Success/Error
            if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }

            // Status-dependent callbacks
            jqXHR.statusCode(statusCode);
            statusCode = undefined;

            if (fireGlobals) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
                    [jqXHR, s, isSuccess ? success : error]);
            }

            // Complete
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

            if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

                // Handle the global AJAX counter
                if (!(--jQuery.active)) {
                    jQuery.event.trigger("ajaxStop");
                }
            }
        }

        return jqXHR;
    },

    getJSON: function (url, data, callback) {
        return jQuery.get(url, data, callback, "json");
    },

    getScript: function (url, callback) {
        return jQuery.get(url, undefined, callback, "script");
    }
});

jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {

        // Shift arguments if data argument was omitted
        if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
        }

        // The url can be an options object (which then must have .url)
        return jQuery.ajax(jQuery.extend({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
        }, jQuery.isPlainObject(url) && url));
    };
});


jQuery._evalUrl = function (url) {
    return jQuery.ajax({
        url: url,

        // Make this explicit, since user can override this through ajaxSetup (#11264)
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        "throws": true
    });
};


jQuery.fn.extend({
    wrapAll: function (html) {
        var wrap;

        if (this[0]) {
            if (isFunction(html)) {
                html = html.call(this[0]);
            }

            // The elements to wrap the target around
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

            if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
            }

            wrap.map(function () {
                var elem = this;

                while (elem.firstElementChild) {
                    elem = elem.firstElementChild;
                }

                return elem;
            }).append(this);
        }

        return this;
    },

    wrapInner: function (html) {
        if (isFunction(html)) {
            return this.each(function (i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
        }

        return this.each(function () {
            var self = jQuery(this),
                contents = self.contents();

            if (contents.length) {
                contents.wrapAll(html);

            } else {
                self.append(html);
            }
        });
    },

    wrap: function (html) {
        var htmlIsFunction = isFunction(html);

        return this.each(function (i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
        });
    },

    unwrap: function (selector) {
        this.parent(selector).not("body").each(function () {
            jQuery(this).replaceWith(this.childNodes);
        });
        return this;
    }
});


jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
};
jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};




jQuery.ajaxSettings.xhr = function () {
    try {
        return new window.XMLHttpRequest();
    } catch (e) { }
};

var xhrSuccessStatus = {

    // File protocol always yields status code 0, assume 200
    0: 200,

    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
},
    xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function (options) {
    var callback, errorCallback;

    // Cross domain only allowed if supported through XMLHttpRequest
    if (support.cors || xhrSupported && !options.crossDomain) {
        return {
            send: function (headers, complete) {
                var i,
                    xhr = options.xhr();

                xhr.open(
                    options.type,
                    options.url,
                    options.async,
                    options.username,
                    options.password
                );

                // Apply custom fields if provided
                if (options.xhrFields) {
                    for (i in options.xhrFields) {
                        xhr[i] = options.xhrFields[i];
                    }
                }

                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(options.mimeType);
                }

                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                    headers["X-Requested-With"] = "XMLHttpRequest";
                }

                // Set headers
                for (i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                }

                // Callback
                callback = function (type) {
                    return function () {
                        if (callback) {
                            callback = errorCallback = xhr.onload =
                                xhr.onerror = xhr.onabort = xhr.ontimeout =
                                xhr.onreadystatechange = null;

                            if (type === "abort") {
                                xhr.abort();
                            } else if (type === "error") {

                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") {
                                    complete(0, "error");
                                } else {
                                    complete(

                                        // File: protocol always yields status 0; see #8605, #14207
                                        xhr.status,
                                        xhr.statusText
                                    );
                                }
                            } else {
                                complete(
                                    xhrSuccessStatus[xhr.status] || xhr.status,
                                    xhr.statusText,

                                    // Support: IE <=9 only
                                    // IE9 has no XHR2 but throws on binary (trac-11426)
                                    // For XHR2 non-text, let the caller handle it (gh-2498)
                                    (xhr.responseType || "text") !== "text" ||
                                        typeof xhr.responseText !== "string" ?
                                        { binary: xhr.response } :
                                        { text: xhr.responseText },
                                    xhr.getAllResponseHeaders()
                                );
                            }
                        }
                    };
                };

                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");

                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) {
                    xhr.onabort = errorCallback;
                } else {
                    xhr.onreadystatechange = function () {

                        // Check readyState before timeout as it changes
                        if (xhr.readyState === 4) {

                            // Allow onerror to be called first,
                            // but that will not handle a native abort
                            // Also, save errorCallback to a variable
                            // as xhr.onerror cannot be accessed
                            window.setTimeout(function () {
                                if (callback) {
                                    errorCallback();
                                }
                            });
                        }
                    };
                }

                // Create the abort callback
                callback = callback("abort");

                try {

                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {

                    // #14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) {
                        throw e;
                    }
                }
            },

            abort: function () {
                if (callback) {
                    callback();
                }
            }
        };
    }
});




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
        s.contents.script = false;
    }
});

// Install script dataType
jQuery.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, " +
            "application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /\b(?:java|ecma)script\b/
    },
    converters: {
        "text script": function (text) {
            jQuery.globalEval(text);
            return text;
        }
    }
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
        s.cache = false;
    }
    if (s.crossDomain) {
        s.type = "GET";
    }
});

// Bind script tag hack transport
jQuery.ajaxTransport("script", function (s) {

    // This transport only deals with cross domain requests
    if (s.crossDomain) {
        var script, callback;
        return {
            send: function (_, complete) {
                script = jQuery("<script>").prop({
                    charset: s.scriptCharset,
                    src: s.url
                }).on(
                    "load error",
                    callback = function (evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    }
                );

                // Use native DOM manipulation to avoid our domManip AJAX trickery
                document.head.appendChild(script[0]);
            },
            abort: function () {
                if (callback) {
                    callback();
                }
            }
        };
    }
});




var oldCallbacks = [],
    rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
        var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
        this[callback] = true;
        return callback;
    }
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

    var callbackName, overwritten, responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
            "url" :
            typeof s.data === "string" &&
            (s.contentType || "")
                .indexOf("application/x-www-form-urlencoded") === 0 &&
            rjsonp.test(s.data) && "data"
        );

    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    if (jsonProp || s.dataTypes[0] === "jsonp") {

        // Get callback name, remembering preexisting value associated with it
        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ?
            s.jsonpCallback() :
            s.jsonpCallback;

        // Insert callback into url or form data
        if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
        } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
        }

        // Use data converter to retrieve json after script execution
        s.converters["script json"] = function () {
            if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
        };

        // Force json dataType
        s.dataTypes[0] = "json";

        // Install callback
        overwritten = window[callbackName];
        window[callbackName] = function () {
            responseContainer = arguments;
        };

        // Clean-up function (fires after converters)
        jqXHR.always(function () {

            // If previous value didn't exist - remove it
            if (overwritten === undefined) {
                jQuery(window).removeProp(callbackName);

                // Otherwise restore preexisting value
            } else {
                window[callbackName] = overwritten;
            }

            // Save back as free
            if (s[callbackName]) {

                // Make sure that re-using the options doesn't screw things around
                s.jsonpCallback = originalSettings.jsonpCallback;

                // Save the callback name for future use
                oldCallbacks.push(callbackName);
            }

            // Call if it was a function and we have a response
            if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
            }

            responseContainer = overwritten = undefined;
        });

        // Delegate to script
        return "script";
    }
});




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = (function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
})();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
        return [];
    }
    if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
    }

    var base, parsed, scripts;

    if (!context) {

        // Stop scripts or inline event handlers from being executed immediately
        // by using document.implementation
        if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument("");

            // Set the base href for the created document
            // so any parsed elements with URLs
            // are based on the document's URL (gh-2965)
            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base);
        } else {
            context = document;
        }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];

    // Single tag
    if (parsed) {
        return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
        jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function (url, params, callback) {
    var selector, type, response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
    }

    // If it's a function
    if (isFunction(params)) {

        // We assume that it's the callback
        callback = params;
        params = undefined;

        // Otherwise, build a param string
    } else if (params && typeof params === "object") {
        type = "POST";
    }

    // If we have elements to modify, make the request
    if (self.length > 0) {
        jQuery.ajax({
            url: url,

            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function (responseText) {

            // Save response for use in complete callback
            response = arguments;

            self.html(selector ?

                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

                // Otherwise use the full result
                responseText);

            // If the request succeeds, this function gets "data", "status", "jqXHR"
            // but they are ignored because response was set above.
            // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function (jqXHR, status) {
            self.each(function () {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
        });
    }

    return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each([
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend"
], function (i, type) {
    jQuery.fn[type] = function (fn) {
        return this.on(type, fn);
    };
});




jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
        return elem === fn.elem;
    }).length;
};




jQuery.offset = {
    setOffset: function (elem, options, i) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
            position = jQuery.css(elem, "position"),
            curElem = jQuery(elem),
            props = {};

        // Set position first, in-case top/left are set even on static elem
        if (position === "static") {
            elem.style.position = "relative";
        }

        curOffset = curElem.offset();
        curCSSTop = jQuery.css(elem, "top");
        curCSSLeft = jQuery.css(elem, "left");
        calculatePosition = (position === "absolute" || position === "fixed") &&
            (curCSSTop + curCSSLeft).indexOf("auto") > -1;

        // Need to be able to calculate position if either
        // top or left is auto and position is either absolute or fixed
        if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;

        } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
        }

        if (isFunction(options)) {

            // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
        }

        if (options.top != null) {
            props.top = (options.top - curOffset.top) + curTop;
        }
        if (options.left != null) {
            props.left = (options.left - curOffset.left) + curLeft;
        }

        if ("using" in options) {
            options.using.call(elem, props);

        } else {
            curElem.css(props);
        }
    }
};

jQuery.fn.extend({

    // offset() relates an element's border box to the document origin
    offset: function (options) {

        // Preserve chaining for setter
        if (arguments.length) {
            return options === undefined ?
                this :
                this.each(function (i) {
                    jQuery.offset.setOffset(this, options, i);
                });
        }

        var rect, win,
            elem = this[0];

        if (!elem) {
            return;
        }

        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }

        // Get document-relative position by adding viewport scroll to viewport-relative gBCR
        rect = elem.getBoundingClientRect();
        win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    },

    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function () {
        if (!this[0]) {
            return;
        }

        var offsetParent, offset, doc,
            elem = this[0],
            parentOffset = { top: 0, left: 0 };

        // position:fixed elements are offset from the viewport, which itself always has zero offset
        if (jQuery.css(elem, "position") === "fixed") {

            // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();

        } else {
            offset = this.offset();

            // Account for the *real* offset parent, which can be the document or its root element
            // when a statically positioned element is identified
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent &&
                (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                jQuery.css(offsetParent, "position") === "static") {

                offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

                // Incorporate borders into its offset, since they are outside its content origin
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
        }

        // Subtract parent offsets and element margins
        return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
        };
    },

    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function () {
        return this.map(function () {
            var offsetParent = this.offsetParent;

            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
            }

            return offsetParent || documentElement;
        });
    }
});

// Create scrollLeft and scrollTop methods
jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
        return access(this, function (elem, method, val) {

            // Coalesce documents and windows
            var win;
            if (isWindow(elem)) {
                win = elem;
            } else if (elem.nodeType === 9) {
                win = elem.defaultView;
            }

            if (val === undefined) {
                return win ? win[prop] : elem[method];
            }

            if (win) {
                win.scrollTo(
                    !top ? val : win.pageXOffset,
                    top ? val : win.pageYOffset
                );

            } else {
                elem[method] = val;
            }
        }, method, val, arguments.length);
    };
});

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
        function (elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);

                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ?
                    jQuery(elem).position()[prop] + "px" :
                    computed;
            }
        }
    );
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
    jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name },
        function (defaultExtra, funcName) {

            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function (margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

                return access(this, function (elem, type, value) {
                    var doc;

                    if (isWindow(elem)) {

                        // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                        return funcName.indexOf("outer") === 0 ?
                            elem["inner" + name] :
                            elem.document.documentElement["client" + name];
                    }

                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;

                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(
                            elem.body["scroll" + name], doc["scroll" + name],
                            elem.body["offset" + name], doc["offset" + name],
                            doc["client" + name]
                        );
                    }

                    return value === undefined ?

                        // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css(elem, type, extra) :

                        // Set width or height on the element
                        jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
});


jQuery.each(("blur focus focusin focusout resize scroll click dblclick " +
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    "change select submit keydown keypress keyup contextmenu").split(" "),
    function (i, name) {

        // Handle event binding
        jQuery.fn[name] = function (data, fn) {
            return arguments.length > 0 ?
                this.on(name, null, data, fn) :
                this.trigger(name);
        };
    });

jQuery.fn.extend({
    hover: function (fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
});




jQuery.fn.extend({

    bind: function (types, data, fn) {
        return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
        return this.off(types, null, fn);
    },

    delegate: function (selector, types, data, fn) {
        return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {

        // ( namespace ) or ( selector, types [, fn] )
        return arguments.length === 1 ?
            this.off(selector, "**") :
            this.off(types, selector || "**", fn);
    }
});

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if (!isFunction(fn)) {
        return undefined;
    }

    // Simulated bind
    args = slice.call(arguments, 2);
    proxy = function () {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    return proxy;
};

jQuery.holdReady = function (hold) {
    if (hold) {
        jQuery.readyWait++;
    } else {
        jQuery.ready(true);
    }
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function (obj) {

    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") &&

        // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if (typeof define === "function" && define.amd) {
    define("jquery", [], function () {
        return jQuery;
    });
}




var

    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,

    // Map over the $ in case of overwrite
    _$ = window.$;

jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
        window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
    }

    return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
}




return jQuery;
} );