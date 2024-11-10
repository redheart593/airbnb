import React, { memo } from 'react'
import { EntileWrapper } from './style'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

const Entile = memo(() => {
    return (
        <EntileWrapper>
            <div className="filter">456</div>
            <div className="rooms">798</div>
            <div className="pagination">123</div>
        </EntileWrapper>
    )
})

export default Entile