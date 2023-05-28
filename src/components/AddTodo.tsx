import React from "react";

const AddTodo = ({addTodos} : {addTodos: (text: string) => void}) => {
    const [todo, setTodo] = React.useState<string>("");
    const submit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if (!todo) {
        alert("Please enter a todo");
      } else {
        addTodos(todo);
        setTodo("");
      }
    };
    return (
      <div className="add-todo">
        <form>
          <input
            value={todo}
            onChange={e => {setTodo(e.target.value)}} />
          <button onClick={submit}>Add</button>
        </form>
      </div>
    );
  };

  export default AddTodo;