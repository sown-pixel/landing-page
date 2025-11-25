import React from "react";

function SearchWidget() {
  return (
    <>
      <div className="sidebar-widget">
        <div className="widget-search">
          <form action="#" method="post">
            <input type="text" name="search" placeholder="Search Here" />
            <button type="submit" onSubmit={(e)=>e.preventDefault()}>
              <i className="bi bi-search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchWidget;
