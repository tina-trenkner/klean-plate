import React from "react"
import { Link } from "gatsby"


function Menu() {
    return (
      <div style={{display: `flex`}}>
      <h2 style={{ marginTop: `0`}}>
     <Link style={{
       boxShadow: `none`,
       textDecoration: `none`,
       backgroundImage: `none`,
     }} to={`recs`}
      >
      Food blogs, links, recs
      </Link>

     </h2>
     </div>
  )
};

export default Menu
