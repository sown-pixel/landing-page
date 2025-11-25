import React from 'react'
import BannerWidget from '../blog/BannerWidget'
import CatagoryWidget from '../blog/CatagoryWidget'
import NewPostWidget from '../blog/NewPostWidget'
import PostTagWidget from '../blog/PostTagWidget'
import SearchWidget from '../blog/SearchWidget'
import BlogDetailsContent from './BlogDetailsContent'

function BlogDetailsWrap() {
  return (
    <>
     <div className="blog-details-area sec-mar-top">
         <div className="container">
             <div className="row">
                 <div className="col-lg-8">
                    <BlogDetailsContent/>
                 </div>
                 <div className="col-lg-4">
                     <SearchWidget/>
                     <CatagoryWidget/>
                     <NewPostWidget/>
                     <PostTagWidget/>
                     <BannerWidget/>
                 </div>
             </div>
         </div>
    </div>   
    </>
  )
}

export default BlogDetailsWrap