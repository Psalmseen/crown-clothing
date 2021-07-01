import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.style.scss";

// const Directory = () => (
//     <div className="directory-menu">
//       <MenuItem title="HATS"/>
//     </div>
// )

const Directory = ({ sections }) => (
  <div className="directory-menu">
    { sections.map(({ id, ...someOtherProps }) => (
      <MenuItem key={id} {...someOtherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
