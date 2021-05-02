import React, { useState } from "react";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
    } else {
      alert("Please add some text");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        placeholder="Add Todo..."
        name="title"
        onChange={onChange}
        value={inputText.title}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
