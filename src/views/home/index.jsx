import React, { memo, useEffect, useState } from 'react'
import hyRequest from '@/services'

const Home = memo(() => {
    const [highScore, setHighScore] = useState({})
    // 用useEffect包裹网络请求，依赖项为空数组，代表只再最开始渲染时请求一次，防止后续其他渲染进行网络请求，提升性能优化
    useEffect(() => {
        hyRequest.get({ url: "/home/highscore" }).then(res => {
            console.log(res)
            setHighScore(res)
        })
    }, [])

    return (
        <div>
            <h2>{highScore.title}</h2>
            <h4>{highScore.subtitle}</h4>
            <ul>
                {/* useEffect会等到渲染完成后再执行，所以第一次渲染时还未请求数据，highScore为空，渲染不出来东西 */}
                {/* 通过可选链操作符，即?.语法实现highScore不为空时候渲染。该语法在访问对象属性或方法时使用，作用是判断前项是否为none或undefined，如果是就不执行后一项操作，不是就执行，相当于简化版的短路逻辑 */}
                {highScore.list?.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
})

export default Home