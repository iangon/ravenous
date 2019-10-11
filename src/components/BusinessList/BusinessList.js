import React from "react";
import ReactDOM from "react-dom";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map(business => (
          <Business key={business.id} business={business} />
        ))}
      </div>
    );
  }
}

export default BusinessList;
