import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import BlogDetailsWrap from './BlogDetailsWrap'

function BlogDetails() {
  return (
    <>
     <Breadcrumb pageName="blog Details" pageTitle="blog Details" />
     <BlogDetailsWrap/>
     <SubscribArea/>
        
    </>
  )
}

export default BlogDetails
