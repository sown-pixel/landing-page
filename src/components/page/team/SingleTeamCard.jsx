import React from "react";

function SingleTeamCard(props) {
  return (
    <>
      <div className="single-team">
        <div className="member-img">
          <img src={`${process.env.PUBLIC_URL} ${props.image}`} alt="Images" />
          <svg
            width={185}
            height={299}
            viewBox="0 0 167 269"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z"
              fill="#191A1C"
            />
          </svg>
          <ul className="team-social">
            <li>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/">
                <i className="fab fa-whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <div className="team-inner">
          <h4>{props.name}</h4>
          <span>{props.title}</span>
        </div>
      </div>
    </>
  );
}

export default SingleTeamCard;
