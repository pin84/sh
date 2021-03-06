

export default {
  3377: {
    rule: "万位、千位的和值，取其个位数为庄；十位、个位的和值，取其个位数为闲。庄大于闲，即投注“庄”赢；庄小于闲，即投注“闲”赢；庄等于闲，即投注“和”赢；如果万位和千位号码相同，即投注“庄对”赢；如果十位和个位号码相同，即投注“闲对”赢；若庄为6，闲小于6，即投注“Super6”赢",
    example: '投注方案：选择"庄", 开奖结果为87666, 即为中奖',
    description: '从"庄"、"闲","和","庄对","闲对", "Super6"之间任意选择一个或以上',
  },
  3375: {
    rule: `开奖号码不分顺序, 根据开奖第一球到第五球开出的球号数字为基础，任意组合三个号码成0或10的倍数，取剩余两个号码之和为点数(大于10时减去10后的数字作为对奖基数) <br />` +

      `牛牛双面:<br />
   牛大:牛6、牛7、牛8、牛9、牛牛<br />
   牛小:牛1、牛2、牛3、牛4、牛5<br />
   牛单:牛1、牛3、牛5、牛7、牛9<br />
   牛双:牛2、牛4、牛6、牛8、牛牛<br />
   牛质:牛1、牛2、牛3、牛5、牛7<br />
   牛合:牛4、牛6、牛8、牛9、牛牛<br />
   开出无牛即为沒中奖。`,

    example: "投注方案：选择牛8、牛大、牛双、牛合, 开奖结果为00026, 即为中奖",
    description: "从没牛到牛牛之间任意选择一个或以上",
  },
  3210: {
    rule: "开奖结果十位大于个位为龙、个位大于十位为虎、二者相同为和；十个总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码十位大于个位即中龙虎一等奖",
    description: "从十位、个位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  3207: {
    rule: "开奖结果百位大于个位为龙、个位大于百位为虎、二者相同为和；百个总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码百位大于个位即中龙虎一等奖",
    description: "从百位、个位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  3201: {
    rule: "开奖结果百位大于十位为龙、十位大于百位为虎、二者相同为和；百十总和的十位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码百位大于十位即中龙虎一等奖",
    description: "从百位、十位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  3198: {
    rule: "开奖结果千位大于个位为龙、个位大于千位为虎、二者相同为和；千个总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码千位大于个位即中龙虎一等奖",
    description: "从千位、个位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  3198: {
    rule: "开奖结果千位大于十位为龙、十位大于千位为虎、二者相同为和；千十总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码千位大于十位即中龙虎一等奖",
    description: "从千位、十位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  3195: {
    rule: "开奖结果千位大于百位为龙、百位大于千位为虎、二者相同为和；千百总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码千位大于百位即中龙虎一等奖",
    description: "从千位、百位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },

  3192: {
    rule: "开奖结果万位大于个位为龙、个位大于万位为虎、二者相同为和；万个总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码万位大于个位即中龙虎一等奖",
    description: "从万位、个位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  3189: {
    rule: "开奖结果万位大于十位为龙、十位大于万位为虎、二者相同为和；万十总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码万位大于十位即中龙虎一等奖",
    description: "从万位、十位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  3186: {
    rule: "开奖结果万位大于百位为龙、百位大于万位为虎、二者相同为和；万百总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码万位大于百位即中龙虎一等奖",
    description: "从万位、百位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  3183: {
    rule: "开奖结果万位大于千位为龙、千位大于万位为虎、二者相同为和；万千总和的个位数1,3,5,7,9时为“单”，0,2,4,6,8时为“双”；5~9为“大”，0~4时为“小”。",
    example: "投注方案：龙；开奖号码万位大于千位即中龙虎一等奖",
    description: "从万位、千位“龙、虎、和”或“大、小、单、双”中任意选择一个",
  },
  1296: {
    description: "手动输入号码，至少输入1个五位数号码组成一注。",
    example: "投注方案：23456； 开奖号码：23456，即中五星直选一等奖",
    rule: "手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi1",
    algorithm: [5],
    sub: ["", [0, 9]],
    format: ["n,n,n,n,n"],
    name: "五星五星直选单式"
  },
  1297: {
    description: "从万位、千位、百位、十位、个位中选择一个5位数号码组成一注。",
    example: "投注方案：23456；<br>开奖号码：23456，<br>即中五星直选。",
    rule: "从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。",
    tpl: "num1",
    sub: [["万位", "千位", "百位", "十位", "个位"], [0, 9]],
    algorithm: ["R1"],
    format: ["n|n|n|n|n"],
    rank: [0, 1, 2, 3, 4],
    name: "五星五星直选复式"
  },
  1298: {
    description: "从个、十、百、千、万位各选一个号码组成五注。",
    example: "五星组合示例，如购买：4+5+6+7+8，该票共5元，由以下5注：45678(五星)、5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：45678，即可中五星、四星、三星、二星、一星的一等奖各1注。 ",
    rule: "从万位、千位、百位、十位、个位中至少各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖，五星奖金90000元，四星奖金9000元，三星奖金900元，二星奖金90元，一星奖金9元。",
    tpl: "num1",
    sub: [["万位", "千位", "百位", "十位", "个位"], [0, 9]],
    algorithm: ["R2"],
    rank: [0, 1, 2, 3, 4],
    name: "五星五星直选组合"
  },
  1299: {
    description: "从0-9中选择5个号码组成一注。",
    example: "投注方案：02568，开奖号码的五个数字只要包含0、2、5、6、8，即可中五星组选120一等奖。",
    rule: "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组选120"], [0, 9]],
    algorithm: ["R3", 5],
    format: ["m|n|n|n|n"],
    rank: ["5star120"],
    name: "五星五星组选组选120"
  },
  1300: {
    description: "从“二重号”选择一个号码，“单号”中选择三个号码组成一注。",
    example: "投注方案：二重号：8，单号：0、2、5，只要开奖的5个数字包括 0、2、5、8、8，即可中五星组选60一等奖。",
    rule: "选择1个二重号码和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
    tpl: "num1",
    sub: [["二重号", "单号"], [0, 9]],
    algorithm: ["R3", 1, 3],
    format: ["m|n,n,n"],
    isAllowSamePos: !0,
    rank: ["5star60"],
    name: "五星五星组选组选60"
  },
  1301: {
    description: "从“二重号”选择两个号码，“单号”中选择一个号码组成一注。",
    example: "投注方案：二重号：2、8，单号：0，只要开奖的5个数字包括 0、2、2、8、8，即可中五星组选30一等奖。",
    rule: "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖。",
    tpl: "num1",
    sub: [["二重号", "单号"], [0, 9]],
    algorithm: ["R3", 2, 1],
    format: ["m,n|n"],
    isAllowSamePos: !0,
    rank: ["5star60"],
    name: "五星五星组选组选30"
  },
  1302: {
    description: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注。",
    example: "投注方案：三重号：8，单号：0、2，只要开奖的5个数字包括 0、2、8、8、8，即可中五星组选20一等奖。",
    rule: "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
    tpl: "num1",
    sub: [["三重号", "单号"], [0, 9]],
    algorithm: ["R3", 1, 2],
    format: ["m|n,n"],
    isAllowSamePos: !0,
    rank: ["5star20"],
    name: "五星五星组选组选20"
  },
  1303: {
    description: "从“三重号”选择一个号码，“二重号”中选择一个号码组成一注。",
    example: "投注方案：三重号：8，二重号：2，只要开奖的5个数字包括 2、2、8、8、8，即可中五星组选10一等奖。",
    rule: "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。",
    tpl: "num1",
    sub: [["三重号", "二重号"], [0, 9]],
    algorithm: ["R3", 1, 1],
    format: ["m|n"],
    isAllowSamePos: !0,
    rank: ["5star10"],
    name: "五星五星组选组选10"
  },
  1304: {
    description: "从“四重号”选择一个号码，“单号”中选择一个号码组成一注。",
    example: "投注方案：四重号：8，单号：2，只要开奖的5个数字包括 2、8、8、8、8，即可中五星组选5一等奖。",
    rule: "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。",
    tpl: "num1",
    sub: [["四重号", "单号"], [0, 9]],
    algorithm: ["R3", 1, 1],
    format: ["m|n"],
    isAllowSamePos: !0,
    rank: ["5star5"],
    name: "五星五星组选组选5"
  },
  2529: {
    description: "手动输入号码，至少输入1个四位数号码组成一注。",
    example: "投注方案：手动输入3456；开奖号码：3456，即中四星直选。",
    rule: "手动输入一个4位数号码组成一注，所选号码的万位、千位、百位、十位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi1",
    algorithm: [4],
    sub: ["", [0, 9]],
    format: ["n,n,n,n"],
    name: "前四四星直选单式"
  },
  2530: {
    description: "从万位、千位、百位、十位中至少各选择一个号码组成一注。",
    example: "投注方案：3456，开奖号码：3456，即中四星直选。",
    rule: "从万位、千位、百位、十位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "num1",
    sub: [["万位", "千位", "百位", "十位"], [0, 9]],
    algorithm: ["R1"],
    format: ["n|n|n|n"],
    rank: [0, 1, 2, 3],
    name: "前四四星直选复式"
  },
  2531: {
    description: "在万位、千位、百位、十位任意位置上任意选择1个或1个以上号码。",
    example: "如：四星组合示例，如购买：5+6+7+8，该票共4元，由以下4注：5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：5678，即可中四星、三星、二星、一星各1注。",
    rule: "从万位、千位、百位、十位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖，四星奖金9000元，三星奖金900元，二星奖金90元，一星奖金9元。",
    tpl: "num1",
    sub: [["万位", "千位", "百位", "十位"], [0, 9]],
    algorithm: ["R2"],
    rank: [0, 1, 2, 3],
    name: "前四四星直选组合"
  },
  2532: {
    description: "从0-9中选择4个号码组成一注。",
    example: "投注方案：0568，开奖号码的四个数字只要包含0、5、6、8，即可中四星组选24一等奖。",
    rule: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位相同，且顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组选24"], [0, 9]],
    algorithm: ["R3", 4],
    format: ["m|n|n|n"],
    rank: ["4star24"],
    name: "前四四星组合组选24"
  },
  2533: {
    description: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
    example: "投注方案：二重号：8，单号：0、6，只要开奖的四个数字包括 0、6、8、8，即可中四星组选12一等奖。",
    rule: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
    tpl: "num1",
    sub: [["二重号", "单号"], [0, 9]],
    algorithm: ["R3", 1, 2],
    format: ["m|n,n"],
    isAllowSamePos: !0,
    rank: ["4star12"],
    name: "前四四星组合组选12"
  },
  2534: {
    description: "从“二重号”选择两个号码组成一注。",
    example: "投注方案：二重号：6、8，只要开奖的四个数字从小到大排列为 6、6、8、8，即可中四星组选6。",
    rule: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。",
    tpl: "num1",
    sub: [["二重号"], [0, 9]],
    algorithm: ["R3", 2],
    format: ["m|n"],
    rank: ["4star6"],
    name: "前四四星组合组选6"
  },
  2535: {
    description: "从“三重号”选择一个号码，“单号”中选择一个号码组成一注。",
    example: "投注方案：三重号：8，单号：2，只要开奖的四个数字从小到大排列为 2、8、8、8，即可中四星组选4。",
    rule: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
    tpl: "num1",
    sub: [["三重号", "单号"], [0, 9]],
    algorithm: ["R3", 1, 1],
    format: ["m|n"],
    isAllowSamePos: !0,
    rank: ["4star4"],
    name: "前四四星组合组选4"
  },
  1305: {
    description: "手动输入号码，至少输入1个四位数号码组成一注。",
    example: "投注方案：手动输入3456；开奖号码：3456，即中四星直选。",
    rule: "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi1",
    algorithm: [4],
    sub: ["", [0, 9]],
    format: ["n,n,n,n"],
    name: "后四四星直选单式"
  },
  1306: {
    description: "从千位、百位、十位、个位中至少各选择一个号码组成一注。",
    example: "投注方案：3456，开奖号码：3456，即中四星直选。",
    rule: "从千位、百位、十位、个位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "num1",
    sub: [["千位", "百位", "十位", "个位"], [0, 9]],
    algorithm: ["R1"],
    format: ["n|n|n|n"],
    rank: [1, 2, 3, 4],
    name: "后四四星直选复式"
  },
  1307: {
    description: "在千位、百位、十位、个位任意位置上任意选择1个或1个以上号码。",
    example: "如：四星组合示例，如购买：5+6+7+8，该票共4元，由以下4注：5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：5678，即可中四星、三星、二星、一星各1注。",
    rule: "从千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖，四星奖金9000元，三星奖金900元，二星奖金90元，一星奖金9元。",
    tpl: "num1",
    sub: [["千位", "百位", "十位", "个位"], [0, 9]],
    algorithm: ["R2"],
    rank: [1, 2, 3, 4],
    name: "后四四星直选组合"
  },
  1308: {
    description: "从0-9中选择4个号码组成一注。",
    example: "投注方案：0568，开奖号码的四个数字只要包含0、5、6、8，即可中四星组选24一等奖。",
    rule: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组选24"], [0, 9]],
    algorithm: ["R3", 4],
    format: ["m|n|n|n"],
    rank: ["4star24"],
    name: "后四四星组合组选24"
  },
  1309: {
    description: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
    example: "投注方案：二重号：8，单号：0、6，只要开奖的四个数字包括 0、6、8、8，即可中四星组选12一等奖。",
    rule: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
    tpl: "num1",
    sub: [["二重号", "单号"], [0, 9]],
    algorithm: ["R3", 1, 2],
    format: ["m|n,n"],
    isAllowSamePos: !0,
    rank: ["4star12"],
    name: "后四四星组合组选12"
  },
  1310: {
    description: "从“二重号”选择两个号码组成一注。",
    example: "投注方案：二重号：6、8，只要开奖的四个数字从小到大排列为 6、6、8、8，即可中四星组选6。",
    rule: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。",
    tpl: "num1",
    sub: [["二重号"], [0, 9]],
    algorithm: ["R3", 2],
    format: ["m|n"],
    rank: ["4star6"],
    name: "后四四星组合组选6"
  },
  1311: {
    description: "从“三重号”选择一个号码，“单号”中选择一个号码组成一注。",
    example: "投注方案：三重号：8，单号：2，只要开奖的四个数字从小到大排列为 2、8、8、8，即可中四星组选4。",
    rule: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
    tpl: "num1",
    sub: [["三重号", "单号"], [0, 9]],
    algorithm: ["R3", 1, 1],
    format: ["m|n"],
    isAllowSamePos: !0,
    rank: ["4star4"],
    name: "后四四星组合组选4"
  },
  1312: {
    description: "手动输入号码，至少输入1个三位数号码组成一注。",
    example: "投注方案：345； 开奖号码：345，即中后三直选一等奖",
    rule: "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi1",
    algorithm: [3],
    sub: ["", [0, 9]],
    format: ["n,n,n"],
    name: "后三码后三直选单式"
  },
  1313: {
    description: "从个、十、百位各选一个号码组成一注。",
    example: "投注方案：345；<br>开奖号码：345，<br>即中后三直选一等奖",
    rule: "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。",
    tpl: "num1",
    sub: [["百位", "十位", "个位"], [0, 9]],
    algorithm: ["R1"],
    format: ["n|n|n"],
    rank: [2, 3, 4],
    name: "后三码后三直选复式"
  },
  1314: {
    description: "从0-27中任意选择1个或1个以上号码。",
    example: "投注方案：和值1；开奖号码后三位：001,010,100,即中后三直选和值一等奖",
    rule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["直选和值"], [0, 27]],
    algorithm: ["R4", 3, 0, 9],
    rank: ["after3_d_sum"],
    name: "后三码后三直选直选和值"
  },
  1315: {
    description: "从0-9中任意选择2个或2个以上号码。",
    example: "投注方案：5,8,8；开奖号码后三位：1个5，2个8 (顺序不限)，即中后三组选三一等奖。",
    rule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组三"], [0, 9]],
    algorithm: ["R5"],
    format: ["m|n"],
    rank: [2, 3, 4],
    rank: ["after3_3"],
    count: 2,
    name: "后三码后三组合组三"
  },
  1316: {
    description: "从0-9中任意选择3个或3个以上号码。",
    example: "投注方案：2,5,8；开奖号码后三位：1个2、1个5、1个8 (顺序不限)，即中后三组选六一等奖。",
    rule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组六"], [0, 9]],
    algorithm: ["R1", 3],
    format: ["m|n|n"],
    rank: [2, 3, 4],
    rank: ["after3_6"],
    name: "后三码后三组合组六"
  },
  1317: {
    description: "手动输入号码，至少输入1个三位数号码。",
    example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码后三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
    rule: "键盘手动输入购买号码，3个数字为一注，开奖号码的百位、十位、个位符合后三组三或组六均为中奖，单倍奖金组三300元，组六150元。",
    tpl: "danshi1",
    algorithm: [3],
    format: ["n,n,n"],
    sub: ["", [0, 9]],
    isGroupInput: !0,
    name: "后三码后三组合混合组选"
  },
  1318: {
    description: "从1-26中选择1个号码。",
    example: "投注方案：和值3；开奖号码后三位：(1)开出003号码，顺序不限，即中后三组选三一等奖；(2)开出012号码，顺序不限，即中后三组选六一等奖",
    rule: "所选数值等于开奖号码百位、十位、个位三个数字相加之和，即为中奖，单倍奖金组三300元，组六150元",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["组选和值"], [1, 26]],
    algorithm: ["R4", 3, 0, 9, "C"],
    rank: ["after3_c_sum"],
    name: "后三码后三组合组选和值"
  },
  1319: {
    description: "手动输入号码，至少输入1个三位数号码组成一注。",
    example: "投注方案：345； 开奖号码：345，即中前三直选一等奖",
    rule: "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi1",
    algorithm: [3],
    sub: ["", [0, 9]],
    format: ["n,n,n"],
    name: "前三码前三直选单式"
  },
  1320: {
    description: "从万、千、百位各选一个号码组成一注。",
    example: "投注方案：345； 开奖号码：345，即中前三直选一等奖",
    rule: "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。",
    tpl: "num1",
    sub: [["万位", "千位", "百位"], [0, 9]],
    algorithm: ["R1"],
    format: ["n|n|n"],
    rank: [0, 1, 2],
    name: "前三码前三直选复式"
  },
  1321: {
    description: "从0-27中任意选择1个或1个以上号码。",
    example: "投注方案：和值1；开奖号码前三位：001,010,100,即中前三直选和值一等奖",
    rule: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["直选和值"], [0, 27]],
    algorithm: ["R4", 3, 0, 9],
    rank: ["before_d_sum"],
    name: "前三码前三直选直选和值"
  },
  1322: {
    description: "从0-9中任意选择2个或2个以上号码。",
    example: "投注方案：5,8,8；开奖号码前三位：1个5，2个8 (顺序不限)，即中前三组选三一等奖。",
    rule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组三"], [0, 9]],
    algorithm: ["R5"],
    format: ["m|n"],
    rank: ["before3_3"],
    count: 2,
    name: "前三码前三组选组三"
  },
  1323: {
    description: "从0-9中任意选择3个或3个以上号码。",
    example: "投注方案：2,5,8；开奖号码前三位：1个2、1个5、1个8 (顺序不限)，即中前三组选六一等奖。",
    rule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组六"], [0, 9]],
    algorithm: ["R1", 3],
    format: ["m|n|n"],
    rank: ["before3_6"],
    name: "前三码前三组选组六"
  },
  1324: {
    description: "手动输入号码，至少输入1个三位数号码。",
    example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码前三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
    rule: "键盘手动输入购买号码，3个数字为一注，开奖号码的万位、千位、百位符合前三组三或组六均为中奖，单注奖金组三300元，组六150元。",
    tpl: "danshi1",
    algorithm: [3],
    format: ["n,n,n"],
    sub: ["", [0, 9]],
    isGroupInput: !0,
    name: "前三码前三组选混合组选"
  },
  1325: {
    description: "从1-26中任意选择1个以上号码。",
    example: "投注方案：和值3；<br>开奖号码前三位：<br>(1)开出003号码，顺序不限，即中前三组选三一等奖；<br>(2)开出012号码，顺序不限，即中前三组选六一等奖",
    rule: "所选数值等于开奖号码万位、千位、百位三个数字相加之和，即为中奖单倍奖金组三300元，组六150元。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["组选和值"], [1, 26]],
    algorithm: ["R4", 3, 0, 9, "C"],
    rank: ["before3_c_sum"],
    name: "前三码前三组选组选和值"
  },
  1326: {
    description: "手动输入号码，至少输入1个三位数号码组成一注。",
    example: "投注方案：手动输入123，开奖号码为是*123*，即为中奖",
    rule: "手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi1",
    algorithm: [3],
    sub: ["", [0, 9]],
    format: ["n,n,n"],
    name: "中三码中三直选单式"
  },
  1327: {
    description: "从千、百、十位各选一个号码组成一注。",
    example: "投注方案：千位选择1，百位选择2，十位选择3，开奖号码为是*123*，即为中奖",
    rule: "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。",
    tpl: "num1",
    sub: [["千位", "百位", "十位"], [0, 9]],
    algorithm: ["R1"],
    format: ["n|n|n"],
    rank: [1, 2, 3],
    name: "中三码中三直选复式"
  },
  1328: {
    description: "从0-27中任意选择1个或1个以上号码。",
    example: "投注方案：选择6，开奖号码为*123*、*141*、*114*、*006*、*060*等任意一个和值为6的结果，即为中奖。",
    rule: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["直选和值"], [0, 27]],
    algorithm: ["R4", 3, 0, 9],
    rank: ["middle3_d_sum"],
    name: "中三码中三直选直选和值"
  },
  1329: {
    description: "从0-9中任意选择2个或2个以上号码。",
    example: "投注方案：5,8,8；开奖号码中间三位：1个5，2个8 (顺序不限)，即中中三组选三一等奖。",
    rule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组三"], [0, 9]],
    algorithm: ["R5"],
    format: ["m|n"],
    rank: ["middle3_3"],
    count: 2,
    name: "中三码中三组选组三"
  },
  1330: {
    description: "从0-9中任意选择3个或3个以上号码。",
    example: "投注方案：2,5,8；开奖号码中间三位：1个2、1个5、1个8 (顺序不限)，即中中三组选六一等奖。",
    rule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。",
    tpl: "num1",
    sub: [["组六"], [0, 9]],
    algorithm: ["R1", 3],
    format: ["m|n|n"],
    rank: ["middle3_6"],
    name: "中三码中三组选组六"
  },
  1331: {
    description: "手动输入号码，至少输入1个三位数号码。",
    example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码中间三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
    rule: "键盘手动输入购买号码，3个数字为一注，开奖号码的千位、百位、十位符合中三组三或组六均为中奖，单倍奖金组三300元，组六150元。",
    tpl: "danshi1",
    algorithm: [3],
    format: ["n,n,n"],
    sub: ["", [0, 9]],
    isGroupInput: !0,
    name: "中三码中三组选混合组选"
  },
  1332: {
    description: "从1-26中选择1个和值。",
    example: "投注方案：和值3；开奖号码中间三位：(1)开出003号码，顺序不限，即中中三组选三一等奖；(2)开出012号码，顺序不限，即中中三组选六一等奖",
    rule: "所选数值等于开奖号码千位、百位、十位三个数字相加之和，即为中奖单倍奖金组三300元，组六150元。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["组选和值"], [1, 26]],
    algorithm: ["R4", 3, 0, 9, "C"],
    rank: ["middle3_c_sum"],
    name: "中三码中三组选组选和值"
  },
  1333: {
    description: "从十、个位各选一个号码组成一注。",
    example: "投注方案：58；开奖号码后二位：58，即中后二直选一等奖",
    rule: "从十位和个位上至少各选1个号码，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。",
    tpl: "num1",
    sub: [["十位", "个位"], [0, 9]],
    algorithm: ["R1"],
    format: ["n|n"],
    rank: [3, 4],
    name: "二码二星直选后二(复式)"
  },
  1334: {
    description: "手动输入号码，至少输入1个两位数号码。",
    example: "投注方案：58；开奖号码后二位：58，即中后二直选一等奖",
    rule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi1",
    algorithm: [2],
    sub: ["", [0, 9]],
    format: ["n,n"],
    name: "二码二星直选后二(单式)"
  },
  1335: {
    description: "从万、千位各选一个号码组成一注。",
    example: "投注方案：58；开奖号码前二位：58，即中前二直选一等奖。",
    rule: "从万位和千位上至少各选1个号码，所选号码与开奖号码的万位、千位相同，且顺序一致，即为中奖。",
    tpl: "num1",
    sub: [["万位", "千位"], [0, 9]],
    algorithm: ["R1"],
    format: ["n|n"],
    rank: [0, 1],
    name: "二码二星直选前二(复式)"
  },
  1336: {
    description: "手动输入号码，至少输入1个两位数号码。",
    example: "投注方案：58；开奖号码前二位：58，即中前二直选一等奖。",
    rule: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi1",
    algorithm: [2],
    sub: ["", [0, 9]],
    format: ["n,n"],
    name: "二码二星直选前二(单式)"
  },
  1337: {
    description: "从0-18中任意选择1个或1个以上的和值号码。",
    example: "投注方案：和值1；开奖号码后二位：01,10，即中后二直选。",
    rule: "所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["和值"], [0, 18]],
    algorithm: ["R4", 2, 0, 9],
    rank: ["after2_d_sum"],
    name: "二码二星直选后二和值"
  },
  1338: {
    description: "从0-18中任意选择1个或1个以上的和值号码。",
    example: "投注方案：和值1；开奖号码前二位：01,10，即中前二直选。",
    rule: "所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["和值"], [0, 18]],
    algorithm: ["R4", 2, 0, 9],
    rank: ["before2_d_sum"],
    name: "二码二星直选前二和值"
  },
  1339: {
    description: "从0-9中任意选择2个或2个以上号码。",
    example: "投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。",
    rule: "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即中奖。",
    tpl: "num1",
    sub: [["组选"], [0, 9]],
    algorithm: ["R1", 2],
    format: ["m|n"],
    rank: ["after2_c"],
    name: "二码二星组选后二(复式)"
  },
  1340: {
    description: "手动输入号码，至少输入1个两位数号码。",
    example: "投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。",
    rule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。",
    tpl: "danshi1",
    algorithm: [2],
    sub: ["", [0, 9]],
    format: ["m,n"],
    isGroupInput: !0,
    name: "二码二星组选后二(单式)"
  },
  1341: {
    description: "从0-9中任意选择2个或2个以上号码。",
    example: "投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中前二组选一等奖。",
    rule: "从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限，即中奖。",
    tpl: "num1",
    sub: [["组选"], [0, 9]],
    algorithm: ["R1", 2],
    format: ["m|n"],
    rank: ["before2_c"],
    name: "二码二星组选前二(复式)"
  },
  1342: {
    description: "手动输入号码，至少输入1个两位数号码。",
    example: "投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中前二组选一等奖。",
    rule: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，顺序不限，即为中奖。",
    tpl: "danshi1",
    algorithm: [2],
    sub: ["", [0, 9]],
    format: ["m,n"],
    isGroupInput: !0,
    name: "二码二星组选前二(单式)"
  },
  1343: {
    description: "从1-17中任意选择1个或1个以上的和值号码。",
    example: "投注方案：和值1；开奖号码后二位：10或01(顺序不限，不含对子号)，即中后二组选。",
    rule: "所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["和值"], [1, 17]],
    algorithm: ["R4", 2, 0, 9, "C"],
    rank: ["after2_c_sum"],
    name: "二码二星组选后二和值"
  },
  1344: {
    description: "从1-17中任意选择1个或1个以上号码。",
    example: "投注方案：和值1；开奖号码前二位：10或01 (顺序不限，不含对子号)，即中前二组选。",
    rule: "所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。",
    tpl: "hezhi1",
    vm: "num1",
    sub: [["和值"], [1, 17]],
    algorithm: ["R4", 2, 0, 9, "C"],
    rank: ["before2_c_sum"],
    name: "二码二星组选前二和值"
  },
  1345: {
    description: "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码。",
    example: "投注万位号码1，开奖号码万位是1，即中定位胆万位一等奖。",
    rule: "从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
    tpl: "num1",
    sub: [["万位", "千位", "百位", "十位", "个位"], [0, 9]],
    enableMapping: [21014, 21015, 21016, 21017, 21018],
    algorithm: ["R6"],
    format: ["n"],
    rank: [0, 1, 2, 3, 4],
    odds: !0,
    name: "定位胆定位胆定位胆"
  },
  1346: {
    description: "从0-9中任意选择1个以上号码。",
    example: "投注方案：1；开奖号码后三位：至少出现1个1，即中后三一码不定位一等奖。",
    rule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。",
    tpl: "num1",
    sub: [["不定胆"], [0, 9]],
    algorithm: ["R8"],
    format: ["n"],
    rank: ["after3_1_no"],
    name: "不定胆三星不定胆后三一码不定胆"
  },
  1347: {
    description: "从0-9中任意选择2个以上号码。",
    example: "投注方案：1,2；开奖号码后三位：至少出现1和2各1个，即中后三二码不定位一等奖。",
    rule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。",
    tpl: "num1",
    sub: [["不定胆"], [0, 9]],
    algorithm: ["R8", 2],
    format: ["m|n"],
    rank: ["after3_2_no"],
    name: "不定胆三星不定胆后三二码不定胆"
  },
  1348: {
    description: "从0-9中任意选择1个以上号码。",
    example: "投注方案：1；开奖号码前三位：至少出现1个1，即中前三一码不定位一等奖。",
    rule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。",
    tpl: "num1",
    sub: [["不定胆"], [0, 9]],
    algorithm: ["R8"],
    format: ["n"],
    rank: ["before3_1_no"],
    name: "不定胆三星不定胆前三一码不定胆"
  },
  1349: {
    description: "从0-9中任意选择2个以上号码。",
    example: "投注方案：1,2；开奖号码前三位：至少出现1和2各1个，即中前三二码不定位一等奖。",
    rule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。",
    tpl: "num1",
    sub: [["不定胆"], [0, 9]],
    algorithm: ["R8", 2],
    format: ["m|n"],
    rank: ["before3_2_no"],
    name: "不定胆三星不定胆前三二码不定胆"
  },
  1350: {
    description: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注。",
    example: "投注方案：大单；开奖号码十位与个位：大单，即中后二大小单双一等奖。",
    rule: "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
    tpl: "num2",
    vm: "num1",
    sub: [["十位", "个位"], ["大", "小", "单", "双"]],
    algorithm: ["R1", 1],
    format: ["n|n"],
    name: "大小单双大小单双后二大小单双"
  },
  1351: {
    description: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注。",
    example: "投注方案：小双；开奖号码万位与千位：小双，即中前二大小单双一等奖。",
    rule: "对万位和千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
    tpl: "num2",
    vm: "num1",
    sub: [["万位", "千位"], ["大", "小", "单", "双"]],
    algorithm: ["R1", 1],
    format: ["n|n"],
    name: "大小单双大小单双前二大小单双"
  },
  1352: {
    description: "从0-9中任意选择1个以上号码。",
    example: "投注方案：8；开奖号码：至少出现1个8，即中一帆风顺。",
    rule: "从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。",
    tpl: "num1",
    sub: [["一帆风顺"], [0, 9]],
    algorithm: ["R8"],
    format: ["n"],
    rank: ["one"],
    name: "趣味特殊一帆风顺"
  },
  1353: {
    description: "从0-9中任意选择1个以上的二重号码。",
    example: "投注方案：8；开奖号码：至少出现2个8，即中好事成双。",
    rule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。",
    tpl: "num1",
    sub: [["好事成双"], [0, 9]],
    algorithm: ["R8"],
    format: ["n"],
    rank: ["two"],
    name: "趣味特殊好事成双"
  },
  1354: {
    description: "从0-9中任意选择1个以上的三重号码。",
    example: "投注方案：8；开奖号码：至少出现3个8，即中三星报喜。",
    rule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。",
    tpl: "num1",
    sub: [["三星报喜"], [0, 9]],
    algorithm: ["R8"],
    format: ["n"],
    rank: ["three"],
    name: "趣味特殊三星报喜"
  },
  1355: {
    description: "从0-9中任意选择1个以上的四重号码。",
    example: "投注方案：8；开奖号码：至少出现4个8，即中四季发财。",
    rule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。",
    tpl: "num1",
    sub: [["四季发财"], [0, 9]],
    algorithm: ["R8"],
    format: ["n"],
    rank: ["four"],
    name: "趣味特殊四季发财"
  },
  1356: {
    description: "从万位、千位、百位、十位、个位中至少两位上各选1个号码组成1注。",
    example: "投注方案：万位1，百位2；<br>开奖号码：13245，<br>即中任选二直选一等奖",
    rule: "从任意两个以上的位置中选择一个号码，所选号码与开奖号码对应位置出现的号码相同，且顺序一致，即为中奖。",
    tpl: "num1",
    vm: "num2",
    sub: [["万位", "千位", "百位", "十位", "个位"], [0, 9]],
    algorithm: ["R7", 2, 1],
    format: ["n|n"],
    name: "任选二任二直选直选复式"
  },
  1357: {
    description: "手动输入号码，至少输入1个两位数号码。",
    example: "投注方案：58；开奖号码后二位：58，即中后二直选一等奖",
    rule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
    tpl: "danshi2",
    algorithm: [2],
    sub: ["", [0, 9]],
    format: ["n,n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    name: "任选二任二直选直选单式"
  },
  1358: {
    description: "从0-18中任意选择1个或1个以上的和值号码。",
    example: "投注方案：选择十位、个位，购买和值1；开奖号码后二位：01,10，即中后二直选。",
    rule: "所选数值等于开奖号码的所选位数相加之和，即为中奖。",
    tpl: "hezhi2",
    vm: "renxuan",
    algorithm: ["R4", 2, 0, 9, "A"],
    sub: [["直选和值"], [0, 18]],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 2,
    name: "任选二任二直选直选和值"
  },
  1359: {
    description: "从0-9中任意选择2个或2个以上号码。",
    example: "投注方案：万位5,百8；开奖号码位5*8**或者8*5** (顺序不限)，即中任选二组选一等奖。",
    rule: "从0-9中选2个号码组成一注，所选号码出现在开奖号的对应位上，顺序不限，即中奖。",
    tpl: "renxuan1",
    vm: "renxuan",
    algorithm: ["R1", 2, 0, 9, "C"],
    sub: [["组选"], [0, 9]],
    format: ["m|n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 2,
    name: "任选二任二组选组选复式"
  },
  1360: {
    description: "手动输入号码，至少输入1个两位数号码。",
    example: "投注方案：十位、个位选择号码5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。",
    rule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。",
    tpl: "danshi2",
    vm: "danshi3",
    algorithm: [2],
    sub: ["", [0, 9]],
    format: ["n,m"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 2,
    isGroupInput: !0,
    name: "任选二任二组选组选单式"
  },
  1361: {
    description: "从1-17中任意选择1个或1个以上的和值号码。",
    example: "投注方案：和值1；开奖号码后二位：10或01(顺序不限，不含对子号)，即中后二组选。",
    rule: "所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。",
    tpl: "hezhi2",
    vm: "renxuan",
    algorithm: ["R4", 2, 0, 9, "C"],
    sub: [["组选"], [1, 17]],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 2,
    name: "任选二任二组选组选和值"
  },
  1362: {
    description: "手动输入号码，至少输入1个三位数号码组成一注。",
    example: "投注方案：万位、千位、百位345，开奖号码345**，即中任选三直选一等奖",
    rule: "所选位置和所选号码与开奖号码的位置相同,且顺序一致,即为中奖。",
    tpl: "danshi2",
    algorithm: [3],
    sub: ["", [0, 9]],
    format: ["n,n,n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    name: "任选三任三直选单式"
  },
  1363: {
    description: "从万位、千位、百位、十位、个位中至少三位上各选1个号码组成1注。",
    example: "投注方案：万位1，千位2，百位3；<br>开奖号码：12345，<br>即中任选三直选一等奖",
    rule: "从任意三个以上的位置中选择一个号码，所选号码与开奖号码对应位置出现的号码相同，且顺序一致，即为中奖。",
    tpl: "num1",
    vm: "num2",
    sub: [["万位", "千位", "百位", "十位", "个位"], [0, 9]],
    algorithm: ["R7", 3, 1],
    format: ["n|n|n"],
    name: "任选三任三直选复式"
  },
  1364: {
    description: "从0-27中任意选择1个或1个以上号码。",
    example: "投注方案：选择百位、十位、个位和值1；开奖号码后三位：001,010,100,即中任选三直选一等奖",
    rule: "所选数值等于开奖号码的指定三位的三个数字相加之和，即为中奖。",
    tpl: "hezhi2",
    vm: "renxuan",
    algorithm: ["R4", 3, 0, 9, "A"],
    sub: [["直选和值"], [0, 27]],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 3,
    name: "任选三任三直选直选和值"
  },
  1365: {
    description: "从0-9中任意选择2个或2个以上号码。",
    example: "投注方案：5,8,8；开奖号码所选的相对应的三位：1个5，2个8 (顺序不限)，即任选三组选三一等奖。",
    rule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的所选择的位相同，且顺序不限，即为中奖。",
    tpl: "renxuan1",
    vm: "renxuan",
    algorithm: ["R5", 3],
    sub: [["组三"], [0, 9]],
    format: ["m|n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 3,
    count: 2,
    name: "任选三任三组选组三"
  },
  1366: {
    description: "从0-9中任意选择3个或3个以上号码。",
    example: "投注方案：2,5,8；开奖号码所选的指定三位：1个2、1个5、1个8 (顺序不限)，即中任选三组选六一等奖。",
    rule: "从0-9中选3个号码组成一注，所选号码出现在开奖号的对应位上，顺序不限，即中奖。",
    tpl: "renxuan1",
    vm: "renxuan",
    algorithm: ["R1", 3],
    sub: [["组六"], [0, 9]],
    format: ["m|n|n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 3,
    name: "任选三任三组选组六"
  },
  1367: {
    description: "手动输入号码，至少输入1个三位数号码。",
    example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码指定位包括：(1)0,0,1，顺序不限，即中得任选三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
    rule: "键盘手动输入购买号码，3个数字为一注，开奖号码的指定位符合组三或组六均为中奖，单注奖金组三600元，组六300元。",
    tpl: "danshi2",
    vm: "danshi3",
    algorithm: [3],
    sub: ["", [0, 9]],
    format: ["n,n,n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    isGroupInput: !0,
    name: "任选三任三组选混合组选"
  },
  1368: {
    description: "从1-26中任意选择1个以上号码。",
    example: "投注方案：和值3；<br>开奖号码指定三位：<br>(1)开出003号码，顺序不限，即中任选三组选三一等奖；<br>(2)开出012号码，顺序不限，即中任选三组选六一等奖",
    rule: "所选数值等于开奖号码万位、千位、百位三个数字相加之和，即为中奖单倍奖金组三600元组六300元。",
    tpl: "hezhi2",
    vm: "renxuan",
    algorithm: ["R4", 3, 0, 9, "C"],
    sub: [["组选和值"], [1, 26]],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 3,
    name: "任选三任三组选组选和值"
  },
  2537: {
    description: "手动输入号码，至少输入1个四位数号码组成一注。",
    example: "投注方案：勾选位置万位、千位、十位、个位，输入号码1524； 开奖号码：15*24，即中任四直选。",
    rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，手动输入一个四位数号码组成一注，所选4个位置上的开奖号码与输入号码完全相同，且顺序一致，即为中奖。",
    tpl: "danshi2",
    algorithm: [4],
    sub: ["", [0, 9]],
    format: ["n,n,n,n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    name: "任四直选单式"
  },
  2538: {
    description: "从万位、千位、百位、十位、个位中至少四位上各选1个号码组成1注。",
    example: "投注方案：万位1、千位5、百位0、十位2； 开奖号码：1502*，即中任四直选。",
    rule: "从万位、千位、百位、十位、个位中任意选择四个位置，在这四个位上至少各选1个号码组成一注，所选4个位置上的开奖号码与所选号码完全相同，且顺序一致，即为中奖。",
    tpl: "num1",
    vm: "num2",
    sub: [["万位", "千位", "百位", "十位", "个位"], [0, 9]],
    algorithm: ["R7", 4, 1],
    format: ["n|n|n|n"],
    name: "任四直选复式"
  },
  2540: {
    description: "从三重号选1个号，单号中选1个号组成一注。",
    example: "投注方案：勾选位置万位、千位、十位、个位，选择三重号：8，单号：0； 开奖号码：88*80 或 80*88，均中任四组选4。",
    rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择1个三重号和1个单号组成一注，所选4个位置的开奖号码与所选号码一致，并且所选三重号码在所选4个位置的开奖号码中出现了3次，顺序不限，即为中奖。",
    tpl: "renxuan1",
    vm: "renxuan",
    algorithm: ["R3", 1, 1],
    sub: [["三重号", "单号"], [0, 9]],
    format: ["m|n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 4,
    name: "任四组4"
  },
  2541: {
    description: "从二重号中选择2个号组成一注。",
    example: "投注方案：勾选位置万位、千位、十位、个位，选择二重号：6、8； 开奖号码：66*88 或 68*68，均中任四组选6。",
    rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择2个二重号组成一注，所选4个位置的开奖号码与所选号码一致，并且所选的2个二重号码在所选4个位置的开奖号码中分别出现了2次，顺序不限，即为中奖。",
    tpl: "renxuan1",
    vm: "renxuan",
    algorithm: ["R3", 2],
    sub: [["二重号"], [0, 9]],
    format: ["m|n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 4,
    name: "任四组6"
  },
  2542: {
    description: "从二重号中选1个号，单号中选2个号组成一注。",
    example: "投注方案：勾选位置万位、千位、十位、个位，选择二重号：8，单号：0、6； 开奖号码：88*06 或 08*68，均中任四组选12。",
    rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，然后选择1个二重号码和2个单号号码组成一注，所选4个位置的开奖号码中包含与所选号码，且所选二重号码在所选4个位置的开奖号码中出现了2次，即为中奖。",
    tpl: "renxuan1",
    vm: "renxuan",
    algorithm: ["R3", 1, 2],
    sub: [["二重号", "单号"], [0, 9]],
    format: ["m|n,n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 4,
    name: "任四组12"
  },
  2543: {
    description: "从单号中选4个号组成一注。",
    example: "投注方案：勾选位置万位、千位、十位、个位，选择号码1234； 开奖号码：12*34 或 13*24，均中任四组选24。",
    rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择四个号码组成一注，所选4个位置的开奖号码与所选号码一致，顺序不限，即为中奖。",
    tpl: "renxuan1",
    vm: "renxuan",
    algorithm: ["R3", 4],
    sub: [["单号"], [0, 9]],
    format: ["m|n|n|n"],
    defaultCheckedPos: ["0", "1", "2", "3", "4"],
    posLen: 4,
    name: "任四组24"
  },
  3145: {
    description: "从0-9中选择1个号码。",
    example: "投注方案：和值尾数 8<br>开奖号码：后三位 936，和值位数为8，即中和值尾数。",
    rule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和的尾数，即为中奖。",
    tpl: "num1",
    format: ["n"],
    sub: [["和值尾数"], [0, 9]],
    algorithm: ["R6"]
  },
  3146: {
    description: "从0-9中选择1个号码。",
    example: "投注方案：跨度8<br>开奖号码：后三位0,8,X，其中X不等于9；或者后三位1,9,X，其中X不等于0，即可中后三直选。",
    rule: "所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。",
    tpl: "num1",
    format: ["n"],
    sub: [["直选跨度"], [0, 9]],
    algorithm: ["R12", 3, [0, 9]]
  },
  3147: {
    description: "从0-9中选择1个号码。",
    example: "投注方案：包胆3<br>开奖号码：后三位 3XX 或者 33X，即中后三组选三，后三位 3XY，即中后三组选六。",
    rule: "从0-9中任意选择1个包胆号码，开奖号码的百位、十位、个位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖。",
    tpl: "hezhi1",
    vm: "num1",
    format: ["n"],
    sub: [["组选包胆"], [0, 9]],
    algorithm: ["R13", 3, [0, 9], !1],
    isRadio: !0
  },
  3149: {
    description: "从0-9中选择1个号码。",
    example: "投注方案：1<br>开奖号码：后四位，至少出现1个1，即中四星一码不定位。",
    rule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位、个位中包含所选号码，即为中奖。",
    tpl: "num1",
    vm: "num1",
    format: ["n"],
    sub: [["四星一码"], [0, 9]],
    algorithm: ["R8"]
  },
  3150: {
    description: "从0-9中任意选择2个以上号码。",
    example: "投注方案：12<br>开奖号码：后四位，至少出现1和2各一个，即中四星二码不定位。",
    rule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。",
    tpl: "num1",
    vm: "num1",
    format: ["m|n"],
    sub: [["四星二码"], [0, 9]],
    algorithm: ["R1", 2]
  },
  3151: {
    description: "从0-9中任意选择2个以上号码。",
    example: "投注方案：12<br>开奖号码：至少出现1和2各一个，即中五星二码不定位。",
    rule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。",
    tpl: "num1",
    vm: "num1",
    format: ["m|n"],
    sub: [["五星二码"], [0, 9]],
    algorithm: ["R1", 2]
  },
  3152: {
    description: "从0-9中任意选择3个以上号码。",
    example: "投注方案：123<br>开奖号码：至少出现1、2、3各1个，即中五星三码不定位。",
    rule: "从0-9中选择3个号码，每注由3个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。",
    tpl: "num1",
    vm: "num1",
    format: ["m|n|n"],
    sub: [["五星三码"], [0, 9]],
    algorithm: ["R1", 3]
  },
}