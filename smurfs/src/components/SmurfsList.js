import React, { useEffect } from "react";
import SmurfsCard from "./SmurfsCard";
import { connect } from "react-redux";

const SmurfsList = (props) => {
  useEffect(() => {
    //axios get
  }, []);

  return (
    <div>
      {props.smurfsArray.map((each) => {
        return (
          <SmurfsCard
            id={each.id}
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

export default connect(mapStateToProps, {})(SmurfsList);
