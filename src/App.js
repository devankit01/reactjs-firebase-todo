import "./App.css";
import { TextField, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import  TodoListItem from "./TodoListItem";
import { db } from "./firebase_config";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const gettodos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          iscompleted: doc.data().iscompleted,
        }))
      );
    });
  };

  // Get all Data
  useEffect(() => {
    gettodos();
  }, []); // Runs on first launch

  const addTodo = (e) => {
    // Prevent Reload
    e.preventDefault();
    console.log("Form Submit");

    // Add to DB
    db.collection("todos").add({
      iscompleted: false,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todo,
    });

    // Set Field Blank
    setTodo("");
  };

  return (
    <div className="App">
      <h1>ReactJS Todo App 😎</h1>
      <form>
        <TextField
          id="standard-basic"
          label="Add work"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
            console.log(e.target.value);
          }}
          style={{ maxWidth: "300px" }}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={addTodo}
          style={{
            margin: "10px 30px",
          }}
          disabled={!todo}
        >
          Add Todo
        </Button>
      </form>

      {/* Data Shows */}
      <div className="todos">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            iscompleted={todo.iscompleted}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
