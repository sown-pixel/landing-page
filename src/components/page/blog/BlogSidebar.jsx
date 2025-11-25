import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import BlogSidebarWrapper from "./BlogSidebarWrapper";

function BlogSidebar() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Blog Sidebar" pageTitle="Blog Sidebar" />
        <BlogSidebarWrapper/>
        <SubscribArea/>
      </div>
    </>
  );
}

export default BlogSidebar;
