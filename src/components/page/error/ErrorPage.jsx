import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import AnimateLine from '../../common/AnimateLine'
import ErrorWrapper from './ErrorWrapper'
function ErrorPage() {
  return (
    <>
    <div className="creasoft-wrap">
        <AnimateLine/>
     <Breadcrumb pageName="Error" pageTitle="Error"/>   
     <ErrorWrapper/>
    </div>
    </>
  )
}

export default ErrorPage