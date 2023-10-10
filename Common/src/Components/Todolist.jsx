import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import { isEditable } from "@testing-library/user-event/dist/utils";

export const Todolist = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsedit] = useState(false);
  const [indexnum, setindexnum] = useState(null);

  const handleAdd = () => {
    if (isEdit === true) {
      list.splice(indexnum, 1, text);
      setIsedit(false);
      setindexnum(null);
    } else {
      setList([...list, text]);
      setText("");
    }
  };

  const handleDelete = (ind) => {
    //when ind is used for deleting, only specific index item will be deleted
    // alert(item)
    const filtered = list.filter((item, i) => i !== ind);
    setList(filtered);
  };

  const handleDelete2 = (item) => {
    //instead of index,when item is used for deleting, all items with same names will also be deleted
    //alert()
    const filtered2 = list.filter((elem) => elem !== item);
    setList(filtered2);
  };

  const handleUpdate = (item, ind) => {
    setText(item);
    setindexnum(ind);
    setIsedit(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TODO LIST</h1>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <TextField variant="outlined" placeholder="Enter items" value={text} fullWidth onChange={(e) => setText(e.target.value)}/>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleAdd}>{isEdit ? "Update" : "Add"}</Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      {/* <h1>{text}</h1> =>Cowrite= just to check the working of textfield */}

      {/* {console.log(list)} */}

      {/* <h1>{list}</h1> */}

      {list.map((item, ind) => {
        return (
          <>
            <h1>{ind + 1} {item}</h1>
            <button onClick={() => handleDelete(ind)}>Delete</button>
            <button onClick={() => handleDelete2(item)}>Delete2</button>
            <button onClick={() => handleUpdate(item, ind)}>Edit</button>
          </>
        );
      })}
    </div>
  );
};
