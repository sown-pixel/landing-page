import React from 'react'
import ProjectDetailsContent from './ProjectDetailsContent'
import RelatedProject from './RelatedProject'
import SidebarWidget from './SidebarWidget'

function ProjectDetailsWrap() {
  return (
    <div>
        <div className="project-details sec-mar-top">

            <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <ProjectDetailsContent/>
                  </div>
                  <div className="col-lg-4">
                    <SidebarWidget/>
                  </div>
                    <RelatedProject/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetailsWrap