import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import PriceCardWrap from '../service/PriceCardWrap'

function Pricing() {
  return (
    <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Pricing Plan" pageName="Pricing" />
        <PriceCardWrap/>
        <SubscribArea />
      </div>
  )
}

export default Pricing