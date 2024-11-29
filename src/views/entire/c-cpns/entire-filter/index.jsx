import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo((props) => {
    // 存储点击过的item
    const [selectItems, setSelectItems] = useState([])

    // 点击就调用函数，当selectItems数组中有该数据就删除，没有就加上
    function itemClick(item) {
        // 无法直接给selectItems进行操作，需要通过新数组操作再重新set。注意赋值时要赋值一个数组，内部是展开的selectItems。
        const newItems = [...selectItems]
        /**
         * 1、通过includes查找
         * 2、若已包含该item就删去。先通过findIndex找到该item对应的index（注意findIndex是回调函数根据条件返回一个index，不能直接findIndex(item）
         *    然后通过splice(index, 1)删去。splice第一个参数是开始删除的index，第二个是往后删除的个数
         * 3、如果不包括就push进去
         */
        if (selectItems.includes(item)) {
            const index = selectItems.findIndex(newitem => newitem === item)
            newItems.splice(index, 1)
        } else {
            newItems.push(item)
        }
        // 最后将新数组set过去。注意同样要以数组方式展开作为参数
        setSelectItems([...newItems])
    }
    return (
        // 对filter数据进行遍历
        <FilterWrapper>
            <div className="filter">
                {filterData.map((item, index) => {
                    return (
                        <div className={classNames("item", { active: selectItems.includes(item) })}
                            key={item}
                            onClick={() => itemClick(item)}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </FilterWrapper>
    )
})

EntireFilter.propTypes = {}

export default EntireFilter