import React from "react";
import { Button, ListItem, ListItemText } from "@material-ui/core";
import { db } from "./firebase_config";
function TodoListItem({ todo, iscompleted, id }) {


  function update() {
    db.collection("todos").doc(id).update({
      iscompleted: !iscompleted,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={iscompleted ? "Done" : "Pending"}
        />
      </ListItem>
      <Button onClick={update}>{iscompleted ? "Undone" : "Done"}</Button>
      <Button onClick={deleteTodo}   color="secondary">Delete</Button>
    </div>
  );
}

export default TodoListItem;
