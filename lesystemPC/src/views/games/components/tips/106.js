export default {

    1767: {
        description: "从3-18中任意选择1个或1个以上号码。",
        specialDes: "猜3个开奖号相加的和，3-10为小，11-18为大。",
        classList: "hezhi",
        example: "投注方案：5；开奖号码：113，即中和值。",
        rule: "至少选择1个和值（3个号码之和）进行投注，所选和值与开奖的3个号码的和值相同即中奖。",
        tpl: "num7",
    },

    1765: {
        description: "对三个号码中两个指定的相同号码和一个指定的不同号码进行投注。",
        example: "投注方案：同号11，不同号2；开奖号码：112，即中二同号单选。",
        rule: "选择1对相同号码和1个不同号码投注，选号与奖号相同（顺序不限），即中奖。",
        tpl: "num6",
        vm: "num1",
        algorithm: ["R1"],
        sub: [["同号", "不同号"], ["11", "22", "33", "44", "55", "66"], ["1", "2", "3", "4", "5", "6"]],
        format: ["m|n"],
        isAllowSamePos: !1,
        name: "二同号单选"
    },
    1766: {
        description: "对三个号码中两个指定的相同号码和一个任意号码进行投注。",
        example: "投注方案：11；开奖号码：112，即中二同号复选。",
        rule: "从11～66中任选1个或多个号码，选号与奖号（包含11～66，不限顺序）相同，即中奖。",
        tpl: "num6",
        vm: "num1",
        algorithm: ["R1"],
        sub: [["二同复选"], ["11", "22", "33", "44", "55", "66"]],
        format: ["n"],
        name: "二同号复选"
    },
    1776: {
        description: "对三个号码中两个指定的不同号码和一个任意号码进行投注。",
        example: "投注方案：12；开奖号码：123，即中二不同号。",
        rule: "从1～6中任选2个或多个号码，所选号码与开奖号码任意2个号码相同，即中奖。",
        tpl: "num6",
        vm: "num1",
        algorithm: ["R1", 2],
        sub: [["标准"], [1, 6]],
        format: ["m|n"],
        name: "二不同号"
    },
    1772: {
        description: "从所有相同的三个号码（111、222、…、666）中任意选择一组号码进行投注。",
        example: "投注方案：111；开奖号码：111，即中三同号单选。",
        rule: "对相同的三个号码（111、222、333、444、555、666）中的任意一个进行投注，所选号码开出即中奖。",
        tpl: "num6",
        vm: "num1",
        algorithm: ["R1"],
        sub: [["三同单选"], ["111", "222", "333", "444", "555", "666"]],
        format: ["n"],
        name: "三同号单选"
    },
    1773: {
        description: "对所有相同的三个号码（111、222、…、666）进行投注。",
        example: "投注方案：三同号通选；开奖号码：111，即中三同号通选。",
        rule: "对所有相同的三个号码（111、222、333、444、555、666）进行投注，任意号码开出即中奖。",
        tpl: "num6",
        vm: "num1",
        algorithm: ["R1"],
        sub: [["三同复选"], ["三同号通选"]],
        name: "三同号复选"
    },
    1777: {
        description: "对三个各不相同的号码进行投注。",
        example: "投注方案：123；开奖号码：123，即中三不同号。",
        rule: "从1～6中任选3个或多个号码，所选号码与开奖号码的3个号码相同即中奖。",
        tpl: "num6",
        vm: "num1",
        algorithm: ["R1", 3],
        sub: [["标准"], [1, 6]],
        format: ["m|n|n"],
        name: "三不同号"
    },
    1775: {
        description: "对所有三个相连的号码（仅限：123、234、345、456）进行投注。",
        example: "投注方案：三连号通选；开奖号码：456，即中三连号通选。",
        rule: "对所有3个相连的号码（123、234、345、456）进行投注，任意号码开出即中奖。",
        tpl: "num6",
        vm: "num1",
        algorithm: ["R1"],
        sub: [["三连号"], ["三连号通选"]],
        name: "三连号"
    },
}