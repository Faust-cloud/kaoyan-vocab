// Unit 6 后半部分
(function(){
const u = UNITS.find(x => x.id === "u6");
u.sections.push(
  { t: "eco- / edu- / ef-", w: [
    ["economy", "n. 经济;节约", "希腊语 oikos(家)+ nomos(管理)→ 管家 → 经济", "", {
      syn: "economic system · thrift",
      senses: ["the global economy 全球经济", "节约:economy class 经济舱"] }],
    ["economic", "adj. 经济(上)的", "economy + -ic", "", {
      senses: ["economic growth 经济增长"],
      tip: "economic 经济上的 vs economical 节约的,考研常考辨析" }],
    ["economical", "adj. 节约的,划算的", "economic + -al"],
    ["economics", "n. 经济学", "economic + -s(学科)", "同 physics、politics"],
    ["educate / education", "v. 教育 / n. 教育", "e-(出)+ ducere(引)→ 把潜能引出来", "和 deduce、reduce 同根 ducere"],
    ["effect", "n. 效果;影响 v. 实现", "ex-(出)+ facere(做)→ 做出来的结果", "", {
      syn: "result · impact · consequence",
      senses: ["have an effect on 对…有影响", "take effect / come into effect 生效", "in effect 实际上", "v. effect a change 实现变革(熟词僻义)"],
      ex: "The new law will take effect next month.", exZh: "新法律将于下个月生效。",
      tip: "affect 是动词“影响”,effect 多作名词;effect 作动词是“实现、促成”" }],
    ["effective", "adj. 有效的;生效的", "effect + -ive", "", {
      syn: "efficient · successful · in force",
      senses: ["an effective way 有效的方法", "effective from… 自…起生效"] }],
    ["efficient / efficiency", "adj. 高效的 / n. 效率", "ex- + facere(做)→ 做得出活的", "", {
      syn: "productive · effective",
      tip: "effective 管用、有效果;efficient 效率高、不浪费" }],
    ["effort", "n. 努力", "ex-(出)+ fortis(强壮)→ 使出力气", "同根 force、fortify"]
  ]},
  { t: "fa-", w: [
    ["fabric", "n. 织物;结构", "拉丁 fabrica(作坊)", "", {
      senses: ["布料,织物", "(社会的)结构:the fabric of society"] }],
    ["fabricate", "v. 捏造;制造", "fabrica(作坊)→ 加工出来", "", {
      syn: "make up · invent · forge",
      senses: ["捏造(事实、数据)", "制造,组装"],
      ex: "The researcher was accused of fabricating data.", exZh: "这位研究者被指控捏造数据。" }],
    ["face", "n. 脸;表面 v. 面对", "拉丁 facies(外貌)", "", {
      syn: "confront · meet · encounter",
      senses: ["v. 面对:face a challenge", "be faced with 面临", "face up to 勇敢面对"] }],
    ["facet", "n. 方面;(宝石的)切面", "法语 facette(小脸)← face", "", {
      syn: "aspect · side · dimension" }],
    ["factor", "n. 因素", "拉丁 factor(做事者)← facere", "", {
      syn: "element · cause · determinant",
      senses: ["a key factor 关键因素"] }],
    ["fade", "v. 褪色;逐渐消失", "古法语 fader(变弱)", "", {
      syn: "disappear · decline · vanish",
      senses: ["fade away 慢慢消失"] }],
    ["fail / failure", "v. 失败;未能 / n. 失败", "拉丁 fallere(欺骗、落空)", "", {
      syn: "fail to do ≈ not manage to",
      senses: ["fail to do 没能做(阅读常见否定)", "never fail to do 总是会"],
      tip: "fail to do 本身就是否定意思,做题时要留意" }],
    ["fair / fairly", "adj. 公平的;相当的 / adv. 相当", "古英语 fæger(美好的)", "", {
      senses: ["公平的", "相当大的:a fair amount", "n. 集市;博览会", "fairly adv. 相当;公平地"] }],
    ["fall", "v. 落下;下降 n. 秋天", "古英语 feallan", "", {
      senses: ["fall by / to 下降了 / 降到", "fall into 分为几类", "fall short of 达不到"] }],
    ["fan", "n. 迷;扇子", "“迷”是 fanatic(狂热者)的缩写"],
    ["fancy", "n. 想象;喜好 adj. 花哨的", "fantasy 的缩写"],
    ["fascinate", "v. 使着迷", "拉丁 fascinare(施魔法)", "", {
      syn: "attract · captivate",
      senses: ["be fascinated by 被…迷住", "fascinating adj. 迷人的"] }]
  ]},
  { t: "ga- / gen-", w: [
    ["gain", "v. 获得;增加 n. 收获", "古法语 gaaignier(赚取)", "", {
      syn: "obtain · acquire · increase",
      senses: ["gain experience 获得经验", "gain weight 增重", "gain ground 取得进展"] }],
    ["gamble", "v./n. 赌博;冒险", "game(游戏)的变体"],
    ["gap", "n. 缺口;差距", "古诺斯语 gap(裂口)", "", {
      syn: "difference · disparity · divide",
      senses: ["the gap between rich and poor 贫富差距", "bridge / close the gap 缩小差距"] }],
    ["gene", "n. 基因", "希腊 gen-(生)", "同根 generate、genius"],
    ["general", "adj. 一般的;总的 n. 将军", "拉丁 genus(种类)→ 整个种类的 → 普遍的", "", {
      syn: "common · overall · broad",
      senses: ["in general 总的来说", "the general public 公众"] }],
    ["generalize / generalise", "v. 概括;推广", "general + -ize", "", {
      syn: "make broad statements",
      tip: "阅读里 generalize 常带贬义:以偏概全" }]
  ]},
  { t: "ha- / sh-", w: [
    ["habit", "n. 习惯", "拉丁 habere(拿、有)→ 一直“有”的状态", "和本单元的 able、ability 同根"],
    ["habitat", "n. 栖息地", "habitare(居住)← habere", "同根 inhabit"],
    ["hamper", "v. 妨碍 n. 大篮子", "中古英语 hamperen(阻碍)", "", {
      syn: "hinder · impede · obstruct",
      ex: "Progress was hampered by a lack of funds.", exZh: "资金不足拖慢了进展。" }],
    ["handicap", "n. 障碍;残疾 v. 妨碍", "hand in cap(古代抽签游戏)"],
    ["shield", "n. 盾牌 v. 保护", "古英语 scield", "", {
      syn: "protect · guard · screen",
      senses: ["shield sb from 保护某人免受"] }],
    ["shift", "v./n. 转变;移动 n. 轮班", "古英语 sciftan(安排)", "", {
      syn: "change · move · transition",
      senses: ["a shift in attitude 态度的转变", "shift from A to B 从 A 转向 B", "work night shifts 上夜班"],
      ex: "There has been a shift towards remote work.", exZh: "工作方式已经转向远程办公。" }],
    ["shoulder", "n. 肩膀 v. 承担", "古英语 sculdor", "", {
      syn: "bear · take on",
      senses: ["v. shoulder the responsibility 承担责任(熟词僻义)"] }],
    ["show", "v. 显示;表明 n. 表演", "古英语 sceawian(看)", "", {
      syn: "demonstrate · indicate · reveal",
      senses: ["Studies show that… 研究表明"] }],
    ["shower", "n. 淋浴;阵雨", "古英语 scur"]
  ]}
);
u.roots.push(["ducere", "引", "educate · deduce · reduce"], ["facere", "做", "effect · efficient · factor"]);
delete u.pending;
})();
