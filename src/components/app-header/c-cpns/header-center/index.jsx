import React, { memo, useState } from 'react'
import { CenterWrapper } from './styled'
import { CSSTransition } from "react-transition-group"
import SearchTitles from "@/assets/data/search_titles"
import SearchTabs from './cpns/search-tabs'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchSections from './cpns/search-sections'

const HeaderCenter = memo((props) => {
    // 传进来状态变量和更改状态变量的函数
    const { isSearch, searchBarClick } = props
    const titles = SearchTitles.map(item => item.title)
    // 设置变量保存当前点击了哪个tab
    const [tabIndex, setTabIndex] = useState(0)
    const searchBarClickHandle = () => {
        if (searchBarClick) searchBarClick()
    }

    return (
        <CenterWrapper>
            {/* 中央搜索框 */}
            {/* 两个动画同时进行以实现效果 */}
            <CSSTransition
                in={!isSearch}
                classNames="bar"
                timeout={250}
                unmountOnExit={true}
            >
                <div className='search-bar' onClick={searchBarClickHandle}>
                    <div className='text'>搜索房源和体验</div>
                    <span className='icon'>
                        <IconSearchBar />
                    </span>
                </div>
            </CSSTransition>
            <CSSTransition
                in={isSearch}
                classNames="detail"
                timeout={250}
                unmountOnExit={true}
            >
                <div className='search-detail'>
                    {/* tab栏，传入切换tab变量的函数 */}
                    <SearchTabs titles={titles} tabClick={setTabIndex} />
                    <div className='infos'>
                        <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
                    </div>
                </div>
            </CSSTransition>

        </CenterWrapper>
    )
})

export default HeaderCenter

// import React, { memo, useState } from 'react'
// import { CSSTransition } from "react-transition-group"

// import SearchTitles from "@/assets/data/search_titles"
// import SearchTabs from './cpns/search-tabs'
// import IconSearchBar from '@/assets/svg/icon-search-bar'
// import { CenterWrapper } from './styled'
// import SearchSections from './cpns/search-sections'

// const HeaderCenter = memo((props) => {
//     const { isSearch, searchBarClick } = props

//     const [tabIndex, setTabIndex] = useState(0)
//     const titles = SearchTitles.map(item => item.title)

//     function searchBarClickHandle() {
//         if (searchBarClick) searchBarClick()
//     }

//     return (
//         <CenterWrapper>
//             <CSSTransition
//                 in={!isSearch}
//                 classNames="bar"
//                 timeout={250}
//                 unmountOnExit={true}
//             >
//                 <div className='search-bar' onClick={searchBarClickHandle}>
//                     <div className='text'>
//                         搜索房源和体验
//                     </div>
//                     <div className='icon'>
//                         <IconSearchBar />
//                     </div>
//                 </div>
//             </CSSTransition>
//             <CSSTransition
//                 in={isSearch}
//                 classNames="detail"
//                 timeout={250}
//                 unmountOnExit={true}
//             >
//                 <div className='search-detail'>
//                     <SearchTabs titles={titles} tabClick={setTabIndex} />
//                     <div className='infos'>
//                         <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
//                     </div>
//                 </div>
//             </CSSTransition>
//         </CenterWrapper>
//     )
// })

// export default HeaderCenter