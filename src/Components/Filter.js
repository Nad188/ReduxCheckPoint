import React from "react";

const Filter = ({ setDone, setUnDone }) => {
  return (
    <div className="checkBox">
      <label className="checkBoxInp">Done</label>
      <input
        type="checkbox"
        name=""
        id=""
        className="checkBoxInp"
        onChange={(e) => setDone(e.target.checked)}
      />
      <label className="checkBoxInp">UnDone</label>
      <input
        type="checkbox"
        name=""
        id=""
        className="checkBoxInp"
        onChange={(e) => setUnDone(e.target.checked)}
      />
    </div>
  );
};

export default Filter;
