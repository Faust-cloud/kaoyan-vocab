// 每个词:[单词, 意思, 词源, 关联(可选)]
window.UNITS = [
{
  id: "u1", name: "Unit 1", tag: "必考词",
  sections: [
    { t: "em- / e-", w: [
      ["embrace", "v. 拥抱;欣然接受", "em-(进入)+ brace(手臂,← 拉丁 bracchium)→ 搂进臂弯 → 拥抱"],
      ["embed", "v. 嵌入,把…牢牢插入", "em-(进入)+ bed(床、底座)→ 放进底座里 → 嵌入"],
      ["embody", "v. 体现,具体表现", "em-(使)+ body(身体)→ 让抽象的东西有了形体 → 体现"],
      ["embryo", "n. 胚胎;萌芽阶段", "希腊语 embryon = en-(在内)+ bryein(膨胀、生长)→ 在体内生长之物"],
      ["elicit", "v. 引出,探出(反应、信息)", "e-(出)+ lacere(引诱)→ 把东西引出来"],
      ["elite", "n. 精英 adj. 精英的", "法语 élite ← élire(挑选)← 拉丁 e-(出)+ legere(选)→ 被挑出来的人"],
      ["elsewhere", "adv. 在别处", "else(其他)+ where(地方)"]
    ]},
    { t: "th-", d: "日耳曼本族词,没有拉丁词根可拆", w: [
      ["thirst", "n./v. 口渴;渴望", "古英语 thurst,本族词"],
      ["thorough", "adj. 彻底的,详尽的", "古英语 thurh(穿过)→ 穿透到底 → 彻底", "和 through 本来是同一个词,后来分了家"],
      ["though", "conj. 虽然 adv. 不过", "古诺斯语 tho,本族词"],
      ["thought", "n. 想法;think 的过去式", "古英语 thoht ← think"],
      ["thoughtful", "adj. 深思的;体贴的", "thought + -ful(充满)→ 处处替人着想 → 体贴"],
      ["threat", "n. 威胁", "古英语 threat(压迫、逼迫)"],
      ["threaten", "v. 威胁,恐吓", "threat + -en(动词后缀)"]
    ]},
    { t: "up-", w: [
      ["update", "v./n. 更新;最新消息", "up(向上)+ date(日期)→ 把日期推到最新"],
      ["upgrade", "v./n. 升级", "up + grade(等级,← 拉丁 gradus 台阶)→ 往上走一级"],
      ["uphold", "v. 支持,维护", "up + hold(举住)→ 高高托住 → 维护"],
      ["upset", "v. 使不安 adj. 心烦的", "up + set → 把东西掀翻 → 打乱 → 心烦"],
      ["up-to-date", "adj. 最新的", "up to date → 一直到今天 → 最新"]
    ]},
    { t: "v- / w-", w: [
      ["ventilate", "v. 使通风", "拉丁 ventus(风)→ 让风吹进来"],
      ["venture", "n./v. 冒险(事业);敢于", "adventure 的缩略 ← 拉丁 advenire(来到)→ 将要到来的未知 → 冒险"],
      ["widespread", "adj. 分布广的,普遍的", "wide(宽)+ spread(铺开)"],
      ["win", "v. 赢,获胜", "古英语 winnan(奋斗、争取)"],
      ["wit", "n. 机智;智力", "古英语 witt(知道、心智)"],
      ["withdraw", "v. 撤回;取款", "with(向后)+ draw(拉)→ 往回拉 → 撤回、取钱"],
      ["witness", "n. 目击者 v. 目睹", "wit(知道)+ -ness → 知情的人 → 证人"]
    ]},
    { t: "in-", w: [
      ["inaugurate", "v. 为…举行就职典礼;开创", "in-(进入)+ augur(古罗马占卜官)→ 占卜官看鸟定了吉时,才正式就职 → 就职、开启"],
      ["incentive", "n. 激励;动机", "拉丁 incentivus(定调、激发)← in- + canere(唱)→ 起个调带动大家 → 激励"],
      ["incidence", "n. 发生率", "in-(落到)+ cadere(落)→ 事情落下来的比例 → 发生率", "不可数,常用 the incidence of…"],
      ["incident", "n. 事件,小插曲", "in- + cadere(落)→ 落到身上的一件事", "可数,指一件具体的事"],
      ["incidentally", "adv. 顺便说一句;偶然地", "incident + -ally → 顺带落下的"],
      ["incline", "v. 倾向于;倾斜 n. 斜坡", "in-(向)+ clinare(倾)→ 身子往一边倒 → 倾向"]
    ]},
    { t: "ac-", d: "ac- 就是 ad-(向)", w: [
      ["academy", "n. 学院,研究院", "希腊语 Akadēmeia,雅典城外的树林,柏拉图在那里讲学 → 高等学府"],
      ["academic", "adj. 学术的", "academy + -ic"],
      ["accelerate", "v. 加速", "ad-(趋于)+ celer(快)→ 使变快"],
      ["accept", "v. 接受", "ad-(向自己)+ capere(拿)→ 拿到自己这边"],
      ["acceptance", "n. 接受,认可", "accept + -ance"],
      ["access", "n. 通道;接近 v. 访问", "ad-(向)+ cedere(走)→ 走向、靠近"],
      ["accessory", "n. 配件;从犯", "ad- + cedere(走)→ 额外走过来附上的东西 → 配件;额外参与犯罪的人 → 从犯"]
    ]},
    { t: "be-(古英语)", d: "be- 只是加强语气,和“好”无关", w: [
      ["begin", "v. 开始", "be-(加强)+ ginnan(着手)"],
      ["beginning", "n. 开端", "begin + -ing"],
      ["behalf", "n. 代表,利益方", "be(在…旁)+ half(一边)→ 站在某人这一边 → on behalf of 代表"],
      ["behave", "v. 举止,表现", "be-(加强)+ have(持有)→ 如何掌控自己 → 举止"],
      ["behavior / behaviour", "n. 行为", "behave + -ior(behaviour 为英式拼写)"],
      ["belief", "n. 信念", "be- + lief(珍视的,与 love 同源)→ 心中珍视之物"],
      ["believe", "v. 相信", "be- + lief(珍视)→ 把某说法珍视为真"],
      ["belong", "v. 属于", "be- + long(关联、附属)→ 与…相连"]
    ]},
    { t: "bene-(拉丁“好”)", w: [
      ["beneficial", "adj. 有益的", "bene(好)+ facere(做)→ 做好事的"],
      ["benefit", "n./v. 好处,受益", "bene(好)+ facere(做)→ 被做的好事"],
      ["benevolent", "adj. 仁慈的", "bene(好)+ velle(想要)→ 心怀好意"],
      ["benign", "adj. 温和的;良性的", "bene(好)+ gen(天性)→ 天性善良"]
    ]},
    { t: "ch-", w: [
      ["challenge", "n./v. 挑战;质疑", "古法语 chalenge(指控)← 拉丁 calumnia(诬告)→ 发难 → 挑战"],
      ["chance", "n. 机会;偶然", "拉丁 cadentia(落下)← cadere → 骰子怎么落 → 运气、机会", "和 incident 同一个根 cadere"],
      ["change", "v./n. 改变;零钱", "晚期拉丁 cambiare(交换)→ 变换;换零钱"],
      ["channel", "n. 频道;海峡;渠道", "拉丁 canalis(水管,同 canal)→ 渠道 → 频道"],
      ["character", "n. 性格;角色;字符", "希腊语 kharaktēr(刻下的印记)← kharassein(雕刻)→ 鲜明特征 → 性格"],
      ["characteristic", "n. 特征 adj. 典型的", "character + -istic"],
      ["characterise / characterize", "v. 以…为特征;描绘", "character + -ize(-ise 为英式拼写)"]
    ]},
    { t: "de-", w: [
      ["defend", "v. 防御,保卫", "de-(离开)+ fendere(打)→ 把攻击挡开", "offend:击向别人"],
      ["define", "v. 定义", "de-(彻底)+ finire(划界,← finis 边界)→ 把范围框定"],
      ["definite", "adj. 明确的", "同 define → 边界清楚的"],
      ["definition", "n. 定义;清晰度", "define + -tion"],
      ["defy", "v. 公然反抗", "dis-(背离)+ fidus(忠诚)→ 背弃效忠", "同根 confidence、fidelity"],
      ["degree", "n. 程度;度数;学位", "de-(向下)+ gradus(台阶)→ 一级一级 → 等级"],
      ["delay", "v./n. 推迟", "古法语 de- + laier(留下)→ 搁着不办"],
      ["deliberate", "adj. 深思熟虑的;故意的", "de-(加强)+ librare(称重,← libra 天平)→ 反复掂量"],
      ["delicate", "adj. 精致的;娇嫩的;微妙的", "拉丁 delicatus(娇贵的,与 delight 同源)"],
      ["deliver", "v. 递送;发表;解救", "de-(离开)+ liberare(释放)→ 放出去交到手上"],
      ["delivery", "n. 递送;分娩", "deliver + -y"]
    ]},
    { t: "f- / g-", w: [
      ["fiction", "n. 小说;虚构", "拉丁 fingere(塑造、捏造)→ 捏出来的故事"],
      ["field", "n. 田野;领域", "古英语 feld(开阔地),本族词"],
      ["fierce", "adj. 凶猛的;激烈的", "拉丁 ferus(野兽般的)", "同根 ferocious"],
      ["fight", "v./n. 打斗", "古英语 feohtan,本族词"],
      ["figure", "n. 外形;数字;人物 v. 认为", "拉丁 figura(形状)← fingere(塑造)", "和 fiction 是亲兄弟"],
      ["finance", "n. 金融 v. 为…提供资金", "古法语 finance(付清)← 拉丁 finis(结束)→ 把债了结"],
      ["financial", "adj. 金融的", "finance + -ial"],
      ["finding", "n. 发现;调查结果", "find + -ing,本族词"],
      ["finite", "adj. 有限的", "拉丁 finitus ← finis(边界)→ 有界限的"],
      ["firm", "adj. 坚固的 n. 公司", "拉丁 firmus(坚固)。“公司”义来自意大利语 firma(签名)", "同根 confirm、affirm"],
      ["first", "adj./adv. 第一", "古英语 fyrst,fore(前)的最高级"],
      ["fit", "adj. 合适的;健康的", "中古英语,来源不明"],
      ["globe", "n. 球体;地球", "拉丁 globus(圆团、球)"],
      ["global", "adj. 全球的;整体的", "globe + -al"]
    ]}
  ],
  roots: [
    ["capere", "拿", "accept · capture · capable"],
    ["cedere", "走", "access · accessory · proceed"],
    ["cadere", "落", "chance · incident · incidence"],
    ["finis", "边界", "define · definite · finance · finite"],
    ["fingere", "塑形", "fiction · figure"],
    ["gradus", "台阶", "degree · upgrade · graduate"],
    ["liber", "自由", "deliver · liberty · liberate"],
    ["bene", "好", "benefit · benevolent · benign"]
  ]
},
{
  id: "u2", name: "Unit 2", tag: "必考词",
  sections: [
    { t: "radi-", d: "radius 光线 和 radix 树根 是两个根", w: [
      ["radiate", "v. 辐射;流露", "拉丁 radius(光线、辐条)→ 发出光线"],
      ["radiant", "adj. 光芒四射的;容光焕发的", "radius(光线)→ 正在发光的"],
      ["radical", "adj. 根本的;激进的", "拉丁 radix(树根)→ 触及根部 → 根本的;连根拔起 → 激进", "同根 eradicate、radish"]
    ]},
    { t: "ob-", d: "ob- = 对着、朝向、盖在上面", w: [
      ["object", "n. 物体;对象 v. 反对", "ob-(对着)+ jacere(扔)→ 扔到眼前之物;把话掷回去 → 反对"],
      ["objective", "adj. 客观的 n. 目标", "object + -ive → 以外在之物为准 → 客观;瞄准之物 → 目标"],
      ["objection", "n. 反对,异议", "object + -ion"],
      ["obligation", "n. 义务", "ob- + ligare(捆绑)→ 把你绑住的东西"],
      ["oblige", "v. 迫使;施恩", "ob- + ligare → 用责任把人捆住"],
      ["obscure", "adj. 模糊的;晦涩的", "ob-(盖在上)+ scurus(遮盖)→ 被盖住看不清"],
      ["observe", "v. 观察;遵守", "ob- + servare(看守)→ 盯着看;守住规矩"],
      ["observation", "n. 观察;评论", "observe + -ation"],
      ["obsession", "n. 痴迷", "ob-(对着)+ sedere(坐)→ 念头围坐在脑子里赶不走"],
      ["obsolete", "adj. 过时的", "ob- + solere(习惯)→ 不再习惯使用"],
      ["obtain", "v. 获得", "ob- + tenere(握)→ 牢牢抓到手"],
      ["obvious", "adj. 明显的", "ob-(挡在)+ via(路)→ 就横在路当中"]
    ]},
    { t: "ide- / idem", w: [
      ["ideal", "adj. 理想的 n. 理想", "希腊语 idea(← idein 看)→ 心中看到的完美形象"],
      ["ideology", "n. 意识形态", "idea + -logy(学说)"],
      ["identical", "adj. 完全相同的", "拉丁 idem(同一)"],
      ["identify", "v. 识别;认同", "idem + -fy(使)→ 认出是同一个"],
      ["identification", "n. 识别;身份证明", "identify + -cation"],
      ["identity", "n. 身份", "idem → 是其本身"]
    ]},
    { t: "jour- / jus-", d: "dies 天 · jus 法律、公正", w: [
      ["journal", "n. 日志;期刊", "拉丁 diurnalis(每日的)← dies(天)"],
      ["journalist", "n. 记者", "journal + -ist"],
      ["journey", "n. 旅程", "古法语 jornee(一天的路程)← dies"],
      ["judge", "n. 法官 v. 判断", "jus(法)+ dicere(说)→ 宣读法律的人"],
      ["judgment / judgement", "n. 判断;判决", "judge + -ment"],
      ["judicial", "adj. 司法的", "拉丁 judicialis ← judex(法官)"],
      ["jury", "n. 陪审团", "拉丁 jurare(发誓)→ 一群宣过誓的人"],
      ["jurisdiction", "n. 司法权,管辖权", "juris(法律的)+ dictio(说)→ 宣告法律的权力"],
      ["justice", "n. 正义;司法", "拉丁 justus(公正的)← jus"],
      ["justify", "v. 证明…正当", "justus + -fy → 使之显得正当", "injury:in-(不)+ jus → 侵权 → 伤害"]
    ]},
    { t: "l-", w: [
      ["label", "n. 标签 v. 贴标签", "古法语 label(布条),日耳曼来源"],
      ["lag", "v./n. 落后", "来源不明"],
      ["largely", "adv. 主要地", "large(← 拉丁 largus 丰裕)+ -ly"],
      ["lateral", "adj. 侧面的,横向的", "拉丁 latus(侧边)", "bilateral 双边的"],
      ["latter", "adj. 后者的", "古英语 læt(晚)的比较级,和 late 同族"],
      ["law", "n. 法律", "古诺斯语 lagu(定下来的东西),和 lay 同源"],
      ["lawsuit", "n. 诉讼", "law + suit(诉求)"]
    ]},
    { t: "magn-", d: "magnus 大", w: [
      ["magnitude", "n. 量级;重要性", "magnus(大)→ 规模"],
      ["magnify", "v. 放大", "magnus + -fy"],
      ["magnificent", "adj. 宏伟的", "magn-(大)+ facere(做)→ 做出大场面"],
      ["major", "adj. 主要的", "拉丁 maior(更大),magnus 的比较级"],
      ["majority", "n. 大多数", "major + -ity"],
      ["make", "v. 制作", "古英语 macian,本族词"],
      ["maintain", "v. 维持;坚称", "manu(手)+ tenere(握)→ 握在手里"],
      ["maintenance", "n. 维护", "maintain 的名词"]
    ]},
    { t: "the- / qual-", w: [
      ["theme", "n. 主题", "希腊语 thema(放下的东西)→ 立论点"],
      ["theory", "n. 理论", "希腊语 theoria(观察、思辨)"],
      ["theoretical", "adj. 理论上的", "theory + -ical"],
      ["therapy", "n. 疗法", "希腊语 therapeia(照料、医治)"],
      ["qualify", "v. 使合格;限定", "拉丁 qualis(什么样的)+ -fy"],
      ["qualification", "n. 资格", "qualify 的名词"],
      ["quality", "n. 质量", "拉丁 qualitas ← qualis"],
      ["qualitative", "adj. 定性的", "quality + -ative", "对比 quantitative 定量的"]
    ]},
    { t: "sa- / sc-", w: [
      ["safeguard", "n./v. 保护", "safe + guard"],
      ["safety", "n. 安全", "safe(← 拉丁 salvus 完好)+ -ty"],
      ["savage", "adj. 野蛮的", "拉丁 silvaticus(林中的)← silva 森林", "和 save 无关"],
      ["save", "v. 拯救;节省", "拉丁 salvare(使安全)"],
      ["saving", "n. 节约;储蓄", "save + -ing"],
      ["scale", "n. 刻度;规模 v. 攀登", "拉丁 scala(梯子)→ 刻度、规模"],
      ["scene", "n. 场景", "希腊语 skene(舞台)"],
      ["scenery", "n. 风景", "scene + -ry"]
    ]},
    { t: "p-", w: [
      ["pace", "n. 步速 v. 踱步", "拉丁 passus(一步)", "同根 pass"],
      ["panel", "n. 面板;专门小组", "拉丁 pannus(布片)"],
      ["panorama", "n. 全景", "希腊语 pan(全)+ horama(景象)"],
      ["prove", "v. 证明", "拉丁 probare(检验)", "同根 probe、approve、proof"],
      ["provide", "v. 提供", "pro-(预先)+ videre(看)→ 预见并备好"],
      ["provided", "conj. 假如", "在…备好的条件下 → provided that"]
    ]}
  ],
  roots: [
    ["jacere", "扔", "object · reject · project"],
    ["ligare", "捆绑", "obligation · oblige"],
    ["tenere", "握", "obtain · maintain · contain"],
    ["dies", "天", "journal · journey"],
    ["jus", "法律", "judge · justice · jury"],
    ["magnus", "大", "magnify · major · majority"],
    ["videre", "看", "provide · vision"]
  ]
},
{
  id: "u3", name: "Unit 3", tag: "必考词",
  sections: [
    { t: "t- / tech-", w: [
      ["tow", "v./n. 拖,拉", "古英语 togian,本族词"],
      ["toward / towards", "prep. 朝向;对于", "to + -ward(朝…方向)"],
      ["take", "v. 拿,取", "古诺斯语 taka"],
      ["talent", "n. 天赋;人才", "希腊语 talanton(一大笔钱的重量单位)→ 《圣经》按才干分银子 → 天赋"],
      ["target", "n. 目标,靶子", "古法语 targe(圆盾)+ 指小后缀 → 小圆盾 → 靶子"],
      ["taste", "n./v. 味道;品味", "古法语 taster(触摸、品尝)"],
      ["technical", "adj. 技术的", "希腊语 tekhnē(技艺)+ -ical"],
      ["technician", "n. 技术员", "tekhnē + -ician"],
      ["technique", "n. 技巧", "法语 ← tekhnē"],
      ["technology / tech", "n. 技术", "tekhnē + -logy"],
      ["teenager", "n. 青少年", "-teen(13–19)+ age + -er"]
    ]},
    { t: "temp- 的三条线", d: "tempus 时间 · temperare 调和 · temptare 试探", w: [
      ["temporal", "adj. 时间的;世俗的", "tempus(时间)"],
      ["temporary", "adj. 暂时的", "tempus → 只持续一段时间"],
      ["temper", "n. 脾气 v. 缓和", "temperare(调和)→ 体液调配的状态 → 性情"],
      ["temperature", "n. 温度", "temperare → 冷热的调配程度"],
      ["tempt", "v. 引诱", "temptare(试探)"],
      ["temptation", "n. 诱惑", "tempt + -ation"],
      ["tentative", "adj. 试探性的,暂定的", "tentare(= temptare,试探)", "长得像 tend,其实和 tempt 是亲戚"]
    ]},
    { t: "tend / term / tra-", w: [
      ["tend", "v. 倾向;照料", "tendere(伸、拉)→ 朝某方向伸"],
      ["tendency", "n. 趋势", "tend + -ency"],
      ["term", "n. 术语;期限;条款", "拉丁 terminus(界石)→ 时间的界限、词义的界限"],
      ["terminal", "adj. 末端的;晚期的 n. 终点站", "terminus → 到头的地方"],
      ["terminate", "v. 终止", "terminus + -ate"],
      ["testify", "v. 作证", "testis(证人)+ -fy", "同根 testimony、protest"],
      ["trace", "n. 痕迹 v. 追溯", "拉丁 tractus(拖拽)← trahere(拉)→ 拖出的印迹"],
      ["track", "n. 轨道;足迹 v. 追踪", "古法语 trac(踪迹)"],
      ["tradition", "n. 传统", "trans-(越过)+ dare(给)→ 一代代往下交"]
    ]},
    { t: "ultimate / under-", w: [
      ["ultimate", "adj. 最终的;根本的", "拉丁 ultimus(最远的)← ultra"],
      ["underestimate", "v. 低估", "under + estimate"],
      ["undergo", "v. 经历,遭受", "under + go → 从底下穿过"],
      ["underlie / underlying", "v. 构成…的基础 / adj. 潜在的", "under + lie(躺)→ 躺在下面"],
      ["underline", "v. 强调", "under + line"],
      ["understand / understanding", "v. 理解 / n. 理解;谅解", "古英语 understandan,词义演变说法不一,当熟词记"],
      ["undertake", "v. 承担,从事", "under + take → 把担子接过来"]
    ]},
    { t: "un- 否定 与 unus「一」", d: "两回事:前一批是“不”,后一批是“一”", w: [
      ["uneasy", "adj. 不安的", "un- + easy"],
      ["unemployment", "n. 失业", "un- + employment"],
      ["unexpected", "adj. 意外的", "un- + expected"],
      ["unlike / unlikely", "prep. 不像 / adj. 不太可能的", "un- + like / likely"],
      ["unusual", "adj. 不寻常的", "un- + usual"],
      ["unify", "v. 统一", "unus(一)+ -fy"],
      ["union", "n. 联盟;工会", "unus → 合而为一"],
      ["unique", "adj. 唯一的,独特的", "unicus ← unus"],
      ["universe", "n. 宇宙", "unus + versus(转)→ 转成一体的整体"],
      ["universal", "adj. 普遍的", "universe + -al"]
    ]},
    { t: "v-", w: [
      ["vague", "adj. 模糊的", "拉丁 vagus(游荡的)→ 意思飘忽"],
      ["vain", "adj. 徒劳的;自负的", "vanus(空的)"],
      ["vanish", "v. 消失", "vanus → 变空"],
      ["valid", "adj. 有效的", "valere(强、有价值)"],
      ["value / valuable", "n. 价值 / adj. 贵重的", "valere(值)"],
      ["vary", "v. 变化", "varius(多样的)"],
      ["various / variety", "adj. 各种各样的 / n. 多样性", "varius"],
      ["variable / variance / variation", "adj. 可变的 / n. 差异 / n. 变化", "vary + -able / -ance / -ation"],
      ["vast", "adj. 巨大的,广阔的", "vastus(辽阔)", "同根 waste"]
    ]},
    { t: "w- / y- / z- / k-", d: "大多是本族词", w: [
      ["wage", "n. 工资", "古法语 wage(报酬)", "同根 wager"],
      ["wander", "v. 漫游", "古英语 wandrian"],
      ["want", "v. 想要;缺少", "古诺斯语 vanta(缺)"],
      ["way", "n. 道路;方式", "古英语 weg"],
      ["weigh / weight", "v. 称重 / n. 重量", "古英语 wegan(举起)→ 掂量"],
      ["weak", "adj. 弱的", "古诺斯语 veikr(易弯)"],
      ["wear / weary", "v. 穿;磨损 / adj. 疲倦的", "两词不同源"],
      ["weird", "adj. 怪异的", "古英语 wyrd(命运)→ 命运三女巫 → 诡异"],
      ["welfare", "n. 福利", "well + fare(过日子)→ 过得好"],
      ["whirl / whisper", "v. 旋转 / v. 低语", "whirl ← 古诺斯语;whisper 拟声"],
      ["yield", "v. 产出;屈服", "古英语 gieldan(支付)→ 交出来"],
      ["youth", "n. 青春", "古英语 geoguþ,和 young 同源"],
      ["zigzag", "n./adj. 之字形", "德语 Zickzack"],
      ["zone", "n. 区域", "希腊语 zōnē(腰带)→ 一圈地带"],
      ["zoom", "v. 急速移动;变焦", "拟声"],
      ["key", "n. 钥匙 adj. 关键的", "古英语 cæg"],
      ["knit", "v. 编织", "古英语 cnyttan(打结)", "同根 knot"]
    ]}
  ],
  roots: [
    ["tendere", "拉伸", "tend · tendency · intense"],
    ["terminus", "界石", "term · terminal · terminate"],
    ["unus", "一", "unify · union · unique · universe"],
    ["valere", "强、值", "valid · value · valuable"],
    ["varius", "多样", "vary · various · variety"],
    ["vanus", "空", "vain · vanish"]
  ]
},
{
  id: "u4", name: "Unit 4", tag: "必考词",
  sections: [
    { t: "medi- / el-", w: [
      ["mediate", "v. 调解", "medius(中间)→ 站到两方中间"],
      ["medium", "n. 媒介 adj. 中等的", "medius 的中性形式"],
      ["media", "n. 媒体", "medium 的复数"],
      ["meditation", "n. 冥想,沉思", "拉丁 meditari(反复思量)", "和 medius 无关"],
      ["elaborate", "adj. 精心的 v. 详述", "e-(出)+ laborare(劳作)→ 下功夫做出来"],
      ["elegant", "adj. 优雅的", "e-(出)+ legere(选)→ 精挑细选"],
      ["element", "n. 元素;要素", "拉丁 elementum,来源不明"],
      ["elementary", "adj. 基本的", "element + -ary"],
      ["eliminate", "v. 消除,淘汰", "e-(出)+ limen(门槛)→ 赶出门外"]
    ]},
    { t: "ab-", d: "ab- = 离开", w: [
      ["abolish", "v. 废除", "拉丁 abolere(消灭)"],
      ["absent / absence", "adj. 缺席的 / n. 缺席", "ab- + esse(在)→ 不在场"],
      ["abroad", "adv. 在国外", "a- + broad → 散到很宽的地方"],
      ["absolute", "adj. 绝对的", "ab- + solvere(松开)→ 解开一切束缚"],
      ["absorb", "v. 吸收", "ab- + sorbere(吸)"],
      ["abstract", "adj. 抽象的 n. 摘要", "abs- + trahere(拉)→ 从具体中抽出来"]
    ]},
    { t: "ba-", w: [
      ["ban", "v./n. 禁止", "古英语 bannan(宣告)→ 公开宣布不许"],
      ["bar", "n. 栏杆;酒吧 v. 阻挡", "古法语 barre(横木)"],
      ["bare / barely", "adj. 赤裸的 / adv. 仅仅", "古英语 bær(光秃)"],
      ["bargain", "n. 便宜货 v. 讨价还价", "古法语 bargaignier"]
    ]},
    { t: "ca- / ce-", d: "capere 拿 · caput 头 · cadere 落 · certus 确定", w: [
      ["capable", "adj. 有能力的", "capere(拿)→ 拿得住"],
      ["capacity", "n. 容量;能力", "capere → 能装下多少"],
      ["captive / capture", "adj. 被俘的 / v. 俘获", "captus ← capere"],
      ["catch", "v. 抓住", "古法语 cachier ← capere"],
      ["cater", "v. 迎合;提供饮食", "古法语 acater(采买)← capere"],
      ["capital", "n. 首都;资本;大写字母", "caput(头)→ 头等的", "不是 capere"],
      ["case", "n. 情况;箱子", "casus(落下)→ 发生的事;capsa(盒子)→ 箱子"],
      ["casual", "adj. 随便的;偶然的", "casus(偶然落下)"],
      ["casualty", "n. 伤亡人员", "casus(意外)→ 意外中出事的人"],
      ["career", "n. 职业,生涯", "carrus(马车)→ 赛车道 → 人生跑道"],
      ["careful", "adj. 小心的", "古英语 caru(忧虑)+ -ful"],
      ["cast", "v. 投掷;铸造 n. 演员阵容", "古诺斯语 kasta(扔)"],
      ["category", "n. 类别", "希腊语 katēgoria(归类)"],
      ["cause", "n. 原因 v. 引起", "拉丁 causa(理由)"],
      ["caution / cautious", "n. 谨慎 / adj. 谨慎的", "拉丁 cavere(提防)"],
      ["cease", "v. 停止", "cessare ← cedere(走开)"],
      ["celebrate", "v. 庆祝", "celeber(人来人往的)→ 大家都来"],
      ["celebrity", "n. 名人", "celeber(有名的)"],
      ["ceremony", "n. 典礼", "拉丁 caerimonia"],
      ["certain / certainty", "adj. 确定的 / n. 确定性", "certus ← cernere(分辨)"],
      ["certify / certificate", "v. 证明 / n. 证书", "certus + -fy → 使之确定"]
    ]},
    { t: "de-", w: [
      ["decline", "v. 下降;拒绝", "de-(向下)+ clinare(倾)", "对比 incline"],
      ["decrease", "v./n. 减少", "de- + crescere(生长)→ 反着长"],
      ["decree", "n. 法令", "de- + cernere(决定)", "和 certain 同根"],
      ["deem", "v. 认为", "古英语 deman(判断)", "同源 doom"],
      ["dedicate", "v. 奉献", "de- + dicare(宣布献给)"],
      ["deduce", "v. 推断", "de- + ducere(引)→ 从前提引出结论"],
      ["deduct", "v. 扣除", "de- + ducere → 引走一部分"]
    ]},
    { t: "fa- / si- / sk-", w: [
      ["fashion", "n. 时尚;方式", "拉丁 factio(制作)← facere"],
      ["fashionable", "adj. 时髦的", "fashion + -able"],
      ["favor / favour", "n. 恩惠 v. 偏爱", "拉丁 favere(厚待)"],
      ["favorable / favourable", "adj. 有利的", "favour + -able"],
      ["favorite / favourite", "adj. 最喜欢的", "意大利语 favorito"],
      ["sit", "v. 坐", "古英语 sittan,与拉丁 sedere 远古同源"],
      ["site", "n. 地点;网站", "拉丁 situs(位置)"],
      ["situate / situation", "v. 使位于 / n. 处境", "situs → 所处的位置"],
      ["skeleton", "n. 骨架", "希腊语 skeletos(干枯的)"],
      ["skeptical / sceptical", "adj. 怀疑的", "希腊语 skeptikos(爱探究的)→ 什么都要看看"],
      ["sketch", "n./v. 素描;概述", "希腊语 skhedios(即兴的)→ 随手画"]
    ]}
  ],
  roots: [
    ["capere", "拿", "capable · capture · catch"],
    ["caput", "头", "capital(单独记)"],
    ["cadere", "落", "case · casual · casualty"],
    ["certus", "确定", "certain · certify · decree"],
    ["ducere", "引", "deduce · deduct · reduce"],
    ["clinare", "倾", "decline · incline"],
    ["trahere", "拉", "abstract · trace · attract"]
  ]
},
{
  id: "u5", name: "Unit 5", tag: "必考词",
  sections: [
    { t: "pa- / pe- / per-", w: [
      ["patch", "n. 补丁 v. 修补", "中古英语,来源不明"],
      ["patent", "n. 专利 adj. 明显的", "拉丁 patere(敞开)→ 公开诏书授予权利;敞开摆着 → 明显"],
      ["pattern", "n. 模式;图案", "由 patron(榜样,← pater 父亲)变来 → 照着学的样子"],
      ["pay / payment", "v. 支付 / n. 付款", "拉丁 pacare(使平静,← pax 和平)→ 安抚债主"],
      ["peculiar", "adj. 奇特的;特有的", "peculium(私产,← pecu 牲畜)→ 自己独有的"],
      ["peer", "n. 同辈 v. 凝视", "par(相等)→ 地位相同的人", "同根 disparity"],
      ["per", "prep. 每;经由", "拉丁 per(穿过)"],
      ["perceive", "v. 察觉", "per-(彻底)+ capere(拿)→ 完整抓住"],
      ["percentage", "n. 百分比", "per(每)+ centum(一百)"],
      ["perfect", "adj. 完美的", "per-(彻底)+ facere(做)→ 做到底"]
    ]},
    { t: "ra-", w: [
      ["rail", "n. 栏杆;铁轨", "拉丁 regula(直尺)", "同根 regular、rule"],
      ["railroad / railway", "n. 铁路", "rail + road / way"],
      ["raise", "v. 举起;养育;筹集", "古诺斯语 reisa,和 rise"],
      ["rally", "n. 集会 v. 重整旗鼓", "re-(再)+ allier(联合)"],
      ["random", "adj. 随机的", "古法语 randon(狂奔)→ 不管方向"],
      ["range", "n. 范围;山脉", "古法语 rang(一排)"],
      ["rank", "n. 等级", "古法语 rang(一排)→ 排位"]
    ]},
    { t: "ma-", d: "注意 mean 是三个来源撞在了一起", w: [
      ["master", "n. 大师 v. 掌握", "拉丁 magister(长官,← magis 更多)"],
      ["masterpiece", "n. 杰作", "master + piece → 工匠升师傅时交的作品"],
      ["mate", "n. 伙伴", "中古低地德语 mate(同吃一份饭的人)"],
      ["material", "n. 材料 adj. 物质的", "拉丁 materia(物质、木料)"],
      ["mathematical", "adj. 数学的", "希腊语 mathēma(学到的东西)"],
      ["mature", "adj. 成熟的", "拉丁 maturus(熟透的)"],
      ["maximum", "n. 最大值", "maximus(最大),magnus 的最高级"],
      ["measure", "v. 测量 n. 措施", "拉丁 mensura ← metiri(测量)"],
      ["mean ①", "v. 意思是;打算", "古英语 mænan(心里想)"],
      ["meaning", "n. 意义", "mean① + -ing"],
      ["mean ②", "n. 平均数 adj. 中间的", "拉丁 medianus(中间)", "和 medium"],
      ["means", "n. 手段", "mean② → 目的与你之间的中间物"],
      ["meantime / meanwhile", "adv. 同时", "mean② → 中间那段时间"],
      ["mean ③", "adj. 吝啬的;刻薄的", "古英语 gemæne(普通的)→ 低下 → 小气"]
    ]},
    { t: "op-", d: "op- 就是 ob-(对着),opus = 工作", w: [
      ["opening", "n. 开口;空缺", "open + -ing"],
      ["opera", "n. 歌剧", "拉丁 opera(作品,opus 的复数)"],
      ["operate", "v. 操作;做手术", "拉丁 operari(劳作)"],
      ["operation / operational / operator", "n. 运作 / adj. 运营的 / n. 操作员", "operate + -ion / -al / -or"],
      ["opinion", "n. 观点", "拉丁 opinari(认为)"],
      ["opportunity", "n. 机会", "ob-(朝向)+ portus(港口)→ 风正吹向港口"],
      ["oppose", "v. 反对", "ob- + ponere(放)→ 放到对面"],
      ["opponent", "n. 对手", "ob- + ponere → 站在对面的人", "对比 proponent 支持者"],
      ["opposite", "adj. 相反的", "ob- + ponere"],
      ["oppress", "v. 压迫", "ob- + premere(压)"]
    ]},
    { t: "sc- / se-", w: [
      ["scope", "n. 范围", "希腊语 skopos(瞭望)", "同根 telescope"],
      ["score", "n. 得分;二十", "古诺斯语 skor(刻痕)→ 刻痕计数"],
      ["scorn", "v./n. 蔑视", "古法语 escarnir(嘲弄)"],
      ["secure", "adj. 安全的 v. 获得", "se-(没有)+ cura(忧虑)→ 没有后顾之忧"],
      ["security", "n. 安全", "secure + -ity"],
      ["see / seek / seem / seemingly", "看见 / 寻找 / 似乎 / 看上去", "都是本族词"]
    ]},
    { t: "th- / t- / u- / w-", w: [
      ["thrive", "v. 兴旺", "古诺斯语 thrifa(抓住)→ 攒下家业"],
      ["thrift", "n. 节俭", "和 thrive 同源"],
      ["thrill", "n./v. 激动", "古英语 thyrlian(刺穿)→ 一阵电流穿过"],
      ["through / throughout", "prep. 穿过 / 遍及", "古英语 thurh", "和 thorough 同一个词"],
      ["tip", "n. 尖端;小费;提示", "来源不明"],
      ["title", "n. 标题;头衔", "拉丁 titulus(碑文)"],
      ["urban", "adj. 城市的", "拉丁 urbs(城市)"],
      ["urge / urgent", "v. 催促 / adj. 紧急的", "拉丁 urgere(推、逼)"],
      ["utilize / utilise", "v. 利用", "拉丁 utilis(有用的)"],
      ["utter", "v. 说出 adj. 完全的", "都和 out 有关:外面的 → 极端的;拿出来 → 说出口"],
      ["wonder", "v. 想知道 n. 奇迹", "古英语 wundor"],
      ["worth / worthy / worthwhile", "adj. 值得的", "古英语 weorþ"],
      ["worship", "v./n. 崇拜", "worth + -ship → 可敬之处"],
      ["write / writer", "v. 写 / n. 作家", "古英语 writan(刻)"]
    ]}
  ],
  roots: [
    ["capere", "拿", "perceive"],
    ["facere", "做", "perfect"],
    ["ponere", "放", "oppose · opponent · opposite"],
    ["premere", "压", "oppress · press · express"],
    ["opus", "工作", "opera · operate · operation"],
    ["cura", "忧虑、照料", "secure · cure · accurate"]
  ]
},
{
  id: "u6", name: "Unit 6", tag: "必考词 · 进行中",
  sections: [
    { t: "ab- 和 able", w: [
      ["abandon", "v. 放弃;抛弃", "古法语 a bandon(交给别人处置)← ban(号令)", "ban 就是 Unit 4 的禁止"],
      ["abide", "v. 忍受;abide by 遵守", "古英语 abidan(留下)"],
      ["able / ability", "adj. 能够的 / n. 能力", "拉丁 habilis(容易拿住的)← habere(拿)", "本单元的 habit 也是 habere"],
      ["abnormal", "adj. 反常的", "ab-(偏离)+ norma(木匠的直角尺)"]
    ]},
    { t: "ba-", w: [
      ["background", "n. 背景", "back + ground"],
      ["balance", "n. 平衡;余额", "拉丁 bilanx = bi-(两个)+ lanx(秤盘)"],
      ["base / basic / basis", "n. 基础 / adj. 基本的 / n. 根据", "希腊语 basis(脚下踩的地方)"],
      ["basement", "n. 地下室", "base + -ment"]
    ]},
    { t: "ca-", w: [
      ["calculate", "v. 计算", "拉丁 calculus(小石子)→ 古罗马人用石子数数", "calcium 钙同一家"],
      ["call", "v. 叫;打电话", "古诺斯语 kalla"],
      ["calm", "adj. 平静的", "希腊语 kauma(炎热)→ 正午最热时大家都歇着"],
      ["campaign", "n. 运动;战役", "拉丁 campania(田野)← campus", "camp、campus 同根"],
      ["candidate", "n. 候选人", "拉丁 candidatus(穿白衣的)→ 罗马参选人穿雪白长袍", "candle 同根"]
    ]},
    { t: "da- / de-", w: [
      ["decide / decision", "v. 决定 / n. 决定", "de-(离开)+ caedere(砍)→ 一刀砍掉其他选项 → 决定", "同根 concise 简洁、precise 精确、pesticide 杀虫剂", {
        syn: "determine · resolve · make up one's mind",
        senses: ["decide to do / decide on sth 决定做 / 选定", "make a decision 做决定"],
        tip: "别和 Unit 1 的 cadere(落)混:caedere 是“砍”,cadere 是“落”"
      }],
      ["decisive", "adj. 决定性的;果断的", "decide + -ive", "", {
        syn: "crucial · determining · conclusive(果断:resolute)",
        senses: ["决定性的:a decisive factor 决定性因素", "果断的:a decisive leader 果断的领导者"],
        ex: "Price is not always the decisive factor in consumers' choices.",
        exZh: "价格并不总是消费者选择的决定性因素。"
      }],
      ["deal", "v. 处理;经营 n. 交易;大量", "古英语 dǣl(一部分)→ 分出去的那份 → 分配 → 交易", "", {
        syn: "deal with ≈ handle · cope with · tackle · address",
        senses: ["deal with 处理,应对(最常考)", "deal in 经营某类商品", "a deal 一笔交易", "a great deal (of) 大量:本义“一大份”"],
        ex: "Governments must deal with the rising cost of health care.",
        exZh: "政府必须应对不断上涨的医疗成本。",
        tip: "几个意思都从“分一份”来:发牌、分东西、做买卖、一大份"
      }],
      ["debate", "n./v. 辩论,争论", "de-(向下)+ battere(打)→ 把对方打下去", "同根 battle、combat", {
        syn: "dispute · controversy · argument",
        senses: ["debate over / about sth 就…辩论", "a heated debate 激烈的争论", "open to debate 尚有争议"],
        ex: "Whether the policy works remains open to debate.",
        exZh: "这项政策是否有效仍有争议。"
      }],
      ["data", "n. 数据", "拉丁 datum(被给出的)← dare(给)→ 已知的事实 → 数据", "同根 tradition(Unit 3)", {
        syn: "figures · statistics · evidence",
        senses: ["data 是 datum 的复数,正式写作常作复数:The data suggest…", "日常也可当不可数:The data is…,两种都算对"],
        ex: "The data suggest that young people read less than before.",
        exZh: "数据表明,年轻人比以前读书少了。"
      }],
      ["date", "n. 日期;约会 v. 确定年代", "拉丁 data(交出的)→ 罗马信件开头写“于某日交出”→ 日期", "", {
        syn: "date back to ≈ trace back to · go back to · originate in",
        senses: ["date back to / date from 追溯到(熟词僻义,阅读常考)", "v. 测定…的年代", "out of date 过时的"],
        ex: "The tradition dates back to the 18th century.",
        exZh: "这个传统可以追溯到 18 世纪。"
      }],
      ["decade", "n. 十年", "希腊 deka(十)", "同根 decimal 十进制、December(罗马旧历第十个月)", {
        syn: "ten years",
        senses: ["in the past decade 过去十年间", "decades of… 几十年的…"]
      }],
      ["database", "n. 数据库", "data + base"],
      ["dealer", "n. 经销商;发牌人", "deal + -er"],
      ["dazzle", "v. 使目眩;使惊叹", "daze(发昏)+ -le(反复)→ 亮得人发晕"],
      ["decorate", "v. 装饰", "拉丁 decus(装饰、荣誉)"]
    ]}
  ],
  roots: [
    ["habere", "拿", "able · ability · habit"],
    ["campus", "田野", "campaign · camp · campus"],
    ["caedere", "砍", "decide · concise · precise"],
    ["dare", "给", "data · date · tradition"]
  ],
  pending: "Coming next: economic / educate / effect / fabric / gene / habit …"
}
];
