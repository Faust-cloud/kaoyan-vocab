(function(){
  const u = UNITS.find(x => x.id === "s1");
  u.sections.push(
    { t: "D", w: [
      ["dairy", "n. 乳制品;奶场", "本族词 dey(挤奶女工)+ -ry"],
      ["dam", "n. 水坝", "中古荷兰语 dam"],
      ["danger", "n. 危险", "古法语 dangier(支配权)"],
      ["dangerous", "adj. 危险的", "danger + -ous"],
      ["dare", "v. 敢", "本族词", "", {
        senses: ["How dare you! 你竟敢!"] }],
      ["darling", "n. 亲爱的", "dear + -ling"],
      ["dark", "adj. 黑暗的", "本族词"],
      ["dear", "adj. 亲爱的;昂贵的", "本族词"],
      ["death", "n. 死亡", "本族词"],
      ["December", "n. 十二月", "拉丁 decem(十),古罗马历的第十个月"],
      ["deep", "adj. 深的", "本族词"],
      ["deer", "n. 鹿", "本族词,原意“野兽”"],
      ["defence / defense", "n. 防御;辩护", "拉丁 defendere;defense 是美式"],
      ["dental", "adj. 牙齿的", "拉丁 dens(牙)"],
      ["despatch / dispatch", "v. 派遣;发送 n. 急件", "意大利语 dispacciare(加速)"],
      ["dessert", "n. 甜点", "法语 desservir(撤去餐具)", "", {
        tip: "dessert 甜点(两个 s)vs desert 沙漠" }],
      ["destroy", "v. 摧毁", "de- + struere(建)→ 拆掉"],
      ["dew", "n. 露水", "本族词"],
      ["dialog / dialogue", "n. 对话", "希腊 dialogos;dialog 是美式"],
      ["diamond", "n. 钻石", "希腊 adamas(坚不可摧的)"],
      ["diary", "n. 日记", "拉丁 dies(日)"],
      ["dictionary", "n. 词典", "拉丁 dictio(说法)"],
      ["die", "v. 死", "古北欧语 deyja", "", {
        senses: ["die out 灭绝"] }],
      ["different", "adj. 不同的", "dis- + ferre(带)→ 带往不同方向"],
      ["difficult", "adj. 困难的", "dis-(不)+ facilis(容易)"],
      ["difficulty", "n. 困难", "difficult 的名词", "", {
        senses: ["have difficulty (in) doing 做…有困难"] }],
      ["dinner", "n. 晚餐", "古法语 disner"],
      ["direct", "adj. 直接的 v. 指导;导演", "拉丁 dirigere(使直)"],
      ["directly", "adv. 直接地", "direct + -ly"],
      ["dirt", "n. 污垢", "古北欧语 drit"],
      ["discourse", "n. 话语;论述", "dis- + currere(跑)→ 来回谈论"],
      ["disc / disk", "n. 圆盘;光盘;磁盘", "希腊 diskos(铁饼)"],
      ["ditch", "n. 沟渠 v. 抛弃", "本族词", "", {
        senses: ["v. 抛弃(口语):ditch a plan"] }],
      ["dome", "n. 圆顶", "拉丁 domus(房屋)"],
      ["donkey", "n. 驴", "来源不明"],
      ["doorway", "n. 门口", "door + way"],
      ["dormitory / dorm", "n. 宿舍", "拉丁 dormire(睡);dorm 是缩写"],
      ["dove", "n. 鸽子;鸽派", "本族词"],
      ["downstairs", "adv. 在楼下", "down + stairs"],
      ["dozen", "n. 一打", "拉丁 duodecim(十二)", "", {
        senses: ["dozens of 几十个"] }],
      ["dream", "n./v. 梦;梦想", "本族词"],
      ["drunk", "adj. 喝醉的", "drink 的过去分词"],
      ["during", "prep. 在…期间", "dure(持续)+ -ing"],
      ["dust", "n. 灰尘", "本族词"],
      ["dwelling", "n. 住所", "dwell + -ing"]
    ]},
    { t: "E", w: [
      ["eagle", "n. 鹰", "拉丁 aquila"],
      ["earthquake", "n. 地震", "earth + quake(震动)"],
      ["Easter", "n. 复活节", "本族词,来自春之女神名"],
      ["eclipse", "n. 日食;月食 v. 使黯然失色", "希腊 ekleipsis(消失)", "", {
        senses: ["v. 使相形见绌"] }],
      ["elder", "adj. 年长的 n. 长者", "old 的比较级"],
      ["electricity", "n. 电", "electric + -ity"],
      ["electron", "n. 电子", "希腊 elektron(琥珀)"],
      ["electronic", "adj. 电子的", "electron + -ic"],
      ["else", "adv. 其他", "本族词"],
      ["embassy", "n. 大使馆", "古法语 ambassade"],
      ["emperor", "n. 皇帝", "拉丁 imperator(统帅)"],
      ["encyclopedia / encyclopaedia", "n. 百科全书", "希腊 enkyklios paideia(全面的教育)"],
      ["ending", "n. 结局", "end + -ing"],
      ["enemy", "n. 敌人", "拉丁 inimicus(不友好的)"],
      ["enjoy", "v. 享受", "en- + joy", "", {
        tip: "enjoy 后接 doing:enjoy reading" }],
      ["enough", "adj./adv. 足够", "本族词"],
      ["enter", "v. 进入", "拉丁 intrare"],
      ["envelope", "n. 信封", "法语 envelopper(包裹)"],
      ["exam / examination", "n. 考试", "examine 的名词,exam 是缩写"],
      ["excellent", "adj. 极好的", "excel + -ent"],
      ["excessive", "adj. 过度的", "excess + -ive", "", {
        syn: "too much · undue · extreme" }],
      ["excite", "v. 使兴奋", "ex- + ciere(召唤)"],
      ["exciting", "adj. 令人兴奋的", "excite + -ing"],
      ["expensive", "adj. 昂贵的", "expense + -ive"],
      ["explain", "v. 解释", "ex- + planus(平)→ 摊平说清"],
      ["eyebrow", "n. 眉毛", "eye + brow"],
      ["eyesight", "n. 视力", "eye + sight"]
    ]},
    { t: "F", w: [
      ["famous", "adj. 著名的", "fame + -ous", "", {
        senses: ["be famous for 以…著称"] }],
      ["fairy", "n. 仙女", "古法语 faerie"],
      ["far", "adj./adv. 远", "本族词", "", {
        senses: ["so far 到目前为止", "far from 远非"] }],
      ["farm", "n. 农场", "古法语 ferme(租约)"],
      ["farmer", "n. 农民", "farm + -er"],
      ["fertilizer / fertiliser", "n. 肥料", "fertile + -izer"],
      ["festival", "n. 节日", "拉丁 festum(节日)"],
      ["few", "adj. 很少的", "本族词", "", {
        tip: "few 几乎没有(否定)vs a few 一些(肯定)" }],
      ["finger", "n. 手指", "本族词"],
      ["fist", "n. 拳头", "本族词"],
      ["flag", "n. 旗帜 v. 标记", "来源不明"],
      ["fleet", "n. 舰队;车队", "本族词"],
      ["floor", "n. 地板;楼层", "本族词"],
      ["flour", "n. 面粉", "flower 的变体(“精华”的部分)"],
      ["flower", "n. 花", "拉丁 flos"],
      ["forest", "n. 森林", "拉丁 foris(外面)→ 外面的林子"],
      ["forever", "adv. 永远", "for + ever"],
      ["forget", "v. 忘记", "for-(去掉)+ get"],
      ["fork", "n. 叉子", "拉丁 furca"],
      ["fossil", "n. 化石", "拉丁 fodere(挖)", "", {
        senses: ["fossil fuels 化石燃料"] }],
      ["found", "v. 建立;创办", "拉丁 fundare(打地基)", "", {
        tip: "found-founded-founded,别和 find-found 混" }],
      ["fox", "n. 狐狸", "本族词"],
      ["fridge / refrigerator", "n. 冰箱", "re- + frigus(冷);fridge 是缩写"],
      ["frog", "n. 青蛙", "本族词"],
      ["front", "n. 前面", "拉丁 frons(额头)"],
      ["full", "adj. 满的", "本族词"],
      ["fun", "n. 乐趣", "来源不明"],
      ["furious", "adj. 狂怒的", "拉丁 furia(狂怒)"],
      ["furnace", "n. 熔炉", "拉丁 fornax"],
      ["furniture", "n. 家具", "法语 fournir(提供)", "", {
        tip: "不可数:a piece of furniture" }]
    ]},
    { t: "G", w: [
      ["gadget", "n. 小器械", "来源不明"],
      ["gallon", "n. 加仑", "古法语 galon"],
      ["garden", "n. 花园", "古法语 jardin"],
      ["garlic", "n. 大蒜", "本族词 gar(矛)+ leac(葱)"],
      ["garment", "n. 衣服", "古法语 garnement"],
      ["gasoline / gasolene", "n. 汽油(美)", "gas + -ol + -ine"],
      ["gate", "n. 大门", "本族词"],
      ["genetic", "adj. 基因的;遗传的", "希腊 genesis(起源)"],
      ["gentleman", "n. 绅士", "gentle + man"],
      ["glass", "n. 玻璃;玻璃杯", "本族词"],
      ["glove", "n. 手套", "本族词"],
      ["god", "n. 神", "本族词"],
      ["golf", "n. 高尔夫", "苏格兰语,来源不明"],
      ["goodness", "n. 善良", "good + -ness"],
      ["goose", "n. 鹅", "本族词", "", {
        tip: "复数 geese" }],
      ["grammar", "n. 语法", "希腊 gramma(字母)"],
      ["grass", "n. 草", "本族词"],
      ["gray / grey", "adj. 灰色的", "本族词;gray 是美式"],
      ["guess", "v./n. 猜", "来源不明"],
      ["guest", "n. 客人", "古北欧语 gestr"],
      ["guitar", "n. 吉他", "希腊 kithara"],
      ["gulf", "n. 海湾;鸿沟", "希腊 kolpos", "", {
        senses: ["a widening gulf 不断扩大的鸿沟"] }],
      ["guy", "n. 家伙", "英国 Guy Fawkes 的名字"],
      ["gymnasium / gym", "n. 体育馆", "希腊 gymnos(裸体的)→ 古希腊裸体训练"]
    ]},
    { t: "H", w: [
      ["hamburger / burger", "n. 汉堡包", "德国城市 Hamburg"],
      ["handkerchief", "n. 手帕", "hand + kerchief(头巾)"],
      ["handsome", "adj. 英俊的;可观的", "hand + -some(称手的)", "", {
        senses: ["a handsome profit 可观的利润"] }],
      ["harness", "v. 利用 n. 马具", "古法语 harneis", "", {
        senses: ["harness solar energy 利用太阳能"] }],
      ["hate", "v./n. 恨", "本族词"],
      ["headache", "n. 头痛;麻烦事", "head + ache"],
      ["headmaster", "n. 校长", "head + master"],
      ["hen", "n. 母鸡", "本族词"],
      ["hi / hey", "int. 嗨", "感叹词"],
      ["hide", "v. 隐藏", "本族词"],
      ["high", "adj. 高的", "本族词"],
      ["historic", "adj. 有历史意义的", "history + -ic", "", {
        tip: "historic 有历史意义的 vs historical 历史上的" }],
      ["history", "n. 历史", "希腊 historia(探究)"],
      ["hole", "n. 洞", "本族词"],
      ["home", "n. 家", "本族词"],
      ["honey", "n. 蜂蜜;亲爱的", "本族词"],
      ["hopeful", "adj. 抱有希望的", "hope + -ful"],
      ["hospital", "n. 医院", "拉丁 hospes(客人)→ 收留客人的地方"],
      ["hot", "adj. 热的", "本族词"],
      ["housewife", "n. 家庭主妇", "house + wife"],
      ["housework", "n. 家务", "house + work"],
      ["hungry", "adj. 饥饿的", "hunger + -y"],
      ["hurry", "v./n. 匆忙", "来源不明"],
      ["hurt", "v. 伤害;疼", "古法语 hurter(撞)"],
      ["hut", "n. 小屋", "法语 hutte"],
      ["hybrid", "n. 混合物;杂交品种 adj. 混合的", "拉丁 hybrida(杂种)", "", {
        senses: ["hybrid car 混合动力车"] }],
      ["hydrogen", "n. 氢", "希腊 hydor(水)+ gen(生成)"]
    ]},
    { t: "I / J", w: [
      ["ice-cream", "n. 冰淇淋", "ice + cream"],
      ["icon", "n. 图标;偶像", "希腊 eikon(像)"],
      ["idea", "n. 主意;想法", "希腊 idea(形象)"],
      ["idiot", "n. 白痴", "希腊 idiotes(普通人、外行)"],
      ["inch", "n. 英寸", "拉丁 uncia(十二分之一)"],
      ["inn", "n. 小旅馆", "本族词"],
      ["insect", "n. 昆虫", "in- + secare(切)→ 身体分节"],
      ["instead", "adv. 代替", "in + stead(位置)", "", {
        senses: ["instead of 代替,而不是"] }],
      ["interesting", "adj. 有趣的", "interest + -ing"],
      ["invite", "v. 邀请", "拉丁 invitare"],
      ["jar", "n. 罐子", "阿拉伯语 jarrah"],
      ["jazz", "n. 爵士乐", "来源不明"],
      ["join", "v. 加入;连接", "拉丁 jungere"],
      ["joke", "n./v. 玩笑", "拉丁 jocus"],
      ["joy", "n. 快乐", "拉丁 gaudium"],
      ["jug", "n. 壶", "来源不明"],
      ["just", "adv. 刚刚;只是 adj. 公正的", "拉丁 justus(公正的)"]
    ]},
    { t: "K / L", w: [
      ["keep", "v. 保持;保存", "本族词", "", {
        senses: ["keep up with 跟上", "keep doing 一直做"] }],
      ["kettle", "n. 水壶", "拉丁 catillus(小碗)"],
      ["kick", "v./n. 踢", "来源不明"],
      ["kilometer / kilometre", "n. 千米", "kilo(千)+ metre"],
      ["kindergarten", "n. 幼儿园", "德语 Kinder(孩子)+ Garten(花园)"],
      ["knock", "v./n. 敲", "本族词,拟声"],
      ["lab / laboratory", "n. 实验室", "拉丁 laborare(工作);lab 是缩写"],
      ["ladder", "n. 梯子", "本族词"],
      ["lamp", "n. 灯", "希腊 lampas(火炬)"],
      ["land", "n. 土地 v. 着陆", "本族词"],
      ["landlady", "n. 女房东", "land + lady"],
      ["landlord", "n. 房东", "land + lord"],
      ["landscape", "n. 风景;形势", "荷兰语 landschap", "", {
        senses: ["the political landscape 政治格局"] }],
      ["laptop", "n. 笔记本电脑", "lap(大腿)+ top"],
      ["Latin", "n. 拉丁语", "拉丁 Latium(罗马所在地区)"],
      ["lavatory", "n. 厕所", "拉丁 lavare(洗)"],
      ["lawn", "n. 草坪", "古法语 launde(林间空地)"],
      ["lawyer", "n. 律师", "law + -yer"],
      ["layoff", "n. 裁员", "lay + off", "", {
        senses: ["mass layoffs 大规模裁员"] }],
      ["least", "adj./adv. 最少", "little 的最高级", "", {
        senses: ["at least 至少"] }],
      ["lemon", "n. 柠檬", "阿拉伯语 laimun"],
      ["length", "n. 长度", "long + -th", "", {
        senses: ["at length 详细地;最终"] }],
      ["let", "v. 让;出租", "本族词"],
      ["liberty", "n. 自由", "拉丁 liber(自由的)", "", {
        senses: ["at liberty to do 可以随意做"] }],
      ["librarian", "n. 图书管理员", "library + -an"],
      ["lip", "n. 嘴唇", "本族词"],
      ["liter / litre", "n. 升", "希腊 litra"],
      ["literacy", "n. 读写能力", "literate + -cy", "", {
        senses: ["computer literacy 计算机能力"] }],
      ["living-room", "n. 客厅", "living + room"],
      ["load", "n. 负荷 v. 装载", "本族词", "", {
        senses: ["a load of 大量"] }],
      ["lock", "n. 锁 v. 锁上", "本族词"],
      ["locker", "n. 储物柜", "lock + -er"],
      ["lonely", "adj. 孤独的", "lone + -ly"],
      ["lounge", "n. 休息室", "来源不明"],
      ["lovely", "adj. 可爱的", "love + -ly"],
      ["lover", "n. 爱人;爱好者", "love + -er"],
      ["luggage", "n. 行李", "lug(拖)+ -age", "", {
        tip: "不可数" }],
      ["lure", "v. 引诱 n. 诱惑", "古法语 loirre(诱饵)", "", {
        syn: "attract · tempt · entice" }]
    ]}
  );
})();
