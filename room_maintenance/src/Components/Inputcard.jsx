import React, { useState } from "react";

function Inputcard() {
  const [val, setVal] = useState([]);

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  const handleChange = (onChangeValue, i) => {
    const inputData = [...val];
    inputData[i] = onChangeValue.target.value;
    setVal(inputData);
  };

  const handleDelete = (i) => {
    const deleteData = [...val];
    deleteData.splice(i, 1);
    setVal(deleteData);
  };

  console.log(val, "dddddddddddddddd");

  return (
    <>
      <button onClick={() => handleAdd()}>Add</button>

      {val.map((data, i) => {
        return (
          <div>
            <input value={data} onChange={(e) => handleChange(e, i)} />
            <button onClick={() => handleDelete(i)}>X</button>
          </div>
        );
      })}
    </>
  );
}

export default Inputcard;
