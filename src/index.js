import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/App";
import MainLayout from "./components/layout/MainLayout";
import About from "./components/page/about/About";
import BlogSidebar from "./components/page/blog/BlogSidebar";
import BlogDetails from "./components/page/BlogDetails/BlogDetails";
import BlogStandard from "./components/page/BlogStandard/BlogStandard";
import Contact from "./components/page/contact/Contact";
import ErrorPage from "./components/page/error/ErrorPage";
import Faq from "./components/page/faq/Faq";
import HomePageTwo from "./components/page/homepage2/HomePageTwo";
import Pricing from "./components/page/pricing/Pricing";
import Project from "./components/page/project/Project";
import ProjectDetails from "./components/page/ProjectDetails/ProjectDetails";
import Service from "./components/page/service/Service";
import ServiceDetails from "./components/page/ServiceDetails/ServiceDetails";
import Team from "./components/page/team/Team";
import "./index.css"
import HomePageOne from "./components/page/home/HomePageOne";

//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

function Root() {
  return <>
  <BrowserRouter basename="/">
    <Switch>
      {/*main layout*/}
      <Route exact path="/" component={MainLayout} />
      {/* secound layout */}
      <Route exact path="/index2" component={HomePageTwo} />
      {/* all inner page load layout component */}
      <Layout>
        {/* <Route
          exact
          path={`${process.env.PUBLIC_URL}/about-us`}
          component={AboutPage}
        /> */}
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/home`}
          component={HomePageOne}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/about`}
          component={About}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/contact`}
          component={Contact}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/error`}
          component={ErrorPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog`}
          component={BlogSidebar}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-standard`}
          component={BlogStandard}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-details`}
          component={BlogDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/service`}
          component={Service}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/service-details`}
          component={ServiceDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/project-details`}
          component={ProjectDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/project`}
          component={Project}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/team`}
          component={Team}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/pricing`}
          component={Pricing}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/faq`}
          component={Faq}
        />
        {/* 
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/team`}
          component={TeamPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/feedback`}
          component={FeedbackPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/faq`}
          component={FaqPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/error`}
          component={ErrorPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-grid`}
          component={BlogGridPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-sidebar`}
          component={BlogSidebarPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-details`}
          component={BlogDetailsPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/project`}
          component={ProjectPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/project-details`}
          component={ProjectDetailsPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/service`}
          component={ServicePage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/service-details`}
          component={ServiceDetailsPage}
        /> */}
      </Layout>
    </Switch>
  </BrowserRouter>
</>
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
