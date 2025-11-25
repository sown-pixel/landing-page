import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import SubscribArea from '../../common/SubscribArea'
import ProjectWrap from '../project/ProjectWrap'
// import PriceCardWrap from '../service/PriceCardWrap'
// import TeamWrap from '../team/TeamWrap'
import AboutArea from './AboutArea'
import FeaturesArea from './FeaturesArea'
import HeroArea from './HeroArea'
// import LatesPost from './LatesPost'
import PartnarArea from './PartnarArea'
import ServiceArea from './ServiceArea'
// import Testimonial from './Testimonial'

function HomePageOne() {
  return (
    <>
        <div className="creasoft-wrap">
            <AnimateLine/>
            <HeroArea/>
            <ServiceArea/>
            <AboutArea image="/img/logo-dark.svg"/>
            <FeaturesArea/>
            <ProjectWrap/>
            <PartnarArea/>
            {/* <PriceCardWrap/> */}
            {/* <Testimonial/> */}
            {/* <TeamWrap/> */}
            {/* <LatesPost/> */}
            <SubscribArea/>
        </div>
    </>
  )
}

export default HomePageOne