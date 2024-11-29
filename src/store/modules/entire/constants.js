// 定义常量作用：
// 1、避免字符串硬编码: 如果直接使用字符串（例如 "entire/change_house_list"），可能会在不同的地方拼写错误或遗漏，导致调试困难。使用常量可以避免这种问题。
// 2、集中管理: 将常量统一管理，使得修改或维护变得更加容易。如果要修改 action 类型，只需要修改常量的定义，而不需要去修改每个 reducer 或者 dispatch 的地方。

// 其中entire代表所在模块，斜杠后边表action类别
export const CHANGE_HOUSE_LIST = "entire/change_house_list"
export const CHANGE_TOTAL_COUNT = "entire/change_total_count"
export const CHANGE_CURRENT_PAGE = "entire/change_current_page"