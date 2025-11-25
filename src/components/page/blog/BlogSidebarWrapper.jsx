import React from 'react'
import BannerWidget from './BannerWidget'
import CatagoryWidget from './CatagoryWidget'
import NewPostWidget from './NewPostWidget'
import PostTagWidget from './PostTagWidget'
import SearchWidget from './SearchWidget'
import Pagination from '../../common/Pagination'
import SingleBlog from './SingleBlog'

function BlogSidebarWrapper() {
  return (
    <>
     <div className="blog-grid sec-mar-top">
         <div className="container">
             <div className="row">
                 <div className="col-lg-4">
                     <SearchWidget/>
                     <CatagoryWidget/>
                     <NewPostWidget/>
                     <PostTagWidget/>
                     <BannerWidget/>
                 </div>
                 <div className="col-lg-8">
                     <div className="blog-item-grid">
                         <div className="row g-4">
                             <SingleBlog image="/img/blog/blog-1.jpg" date="21.05.2022" title="UI/UX" details="Quisque malesuada sapien and Donec sed nunc."  />
                             <SingleBlog image="/img/blog/blog-2.jpg" date="23.05.2022" title="Software" details="Suspendisse pretium magna qu nisl egestas porttitor."  />
                             <SingleBlog image="/img/blog/blog-3.jpg" date="25.03.2022" title="Dashbord" details="In a augue sit amet erat Suspel eleifend suscipit issen."  />
                             <SingleBlog image="/img/blog/blog-4.jpg" date="15.01.2022" title="3D Design" details="Quisque malesuada sapien and Donec sed nunc."  />
                             <SingleBlog image="/img/blog/blog-5.jpg" date="02.02.2022" title="Graphic" details="Suspendisse pretium magna qu nisl egestas porttitor."  />
                             <SingleBlog image="/img/blog/blog-6.png" date="03.02.2022" title="App" details="In a augue sit amet erat Suspel eleifend suscipit issen."  />
                             <SingleBlog image="/img/blog/blog-7.jpg" date="05.02.2022" title="Development" details="Quisque malesuada sapien and Donec sed nunc."  />
                             <SingleBlog image="/img/blog/blog-8.jpg" date="05.08.2022" title="Software" details="Suspendisse pretium magna qu nisl egestas porttitor."  />
                         </div>
                     </div>
                     <Pagination />
                 </div>
             </div>
         </div>
    </div>   
    </>
  )
}

export default BlogSidebarWrapper