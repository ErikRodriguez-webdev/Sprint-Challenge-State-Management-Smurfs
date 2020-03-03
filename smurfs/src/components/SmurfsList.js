import React, { useEffect } from "react";
import SmurfsCard from "./SmurfsCard";

import { connect } from "react-redux";
import { getItems } from "../actions/index";

const SmurfsList = (props) => {
  console.log(props);
  useEffect(() => {
    props.getItems();
  }, []);

  return (
    <div>
      {props.smurfsArray.map((each) => {
        return (
          <SmurfsCard
            key={each.id}
            name={each.name}
            age={each.age}
            height={each.height}
          />
        );
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    smurfsArray: state.smurfsArray
  };
}

export default connect(mapStateToProps, { getItems })(SmurfsList);
