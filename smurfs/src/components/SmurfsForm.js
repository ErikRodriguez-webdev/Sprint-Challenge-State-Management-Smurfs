import React, { useState } from "react";

import { connect } from "react-redux";
import { postItems } from "../actions/index";

const SmurfsForm = (props) => {
  //local state
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  //handle changes
  const handleChanges = (event) => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //reset inputs and axios post
    props.postItems(smurf);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChanges}
            value={smurf.name}
            placeholder="Johnny"
          />
        </label>

        <label>
          Age:
          <input
            type="text"
            name="age"
            onChange={handleChanges}
            value={smurf.age}
            placeholder="3"
          />
        </label>

        <label>
          Height:
          <input
            type="text"
            name="height"
            onChange={handleChanges}
            value={smurf.height}
            placeholder="4cm"
          />
        </label>

        <button type="submit">Add a Smurf</button>
      </form>
    </div>
  );
};

export default connect(null, { postItems })(SmurfsForm);
