import React from "react";

class InputTodo extends React.Component {
  state = { title: "" };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write something");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
        <button className='input-submit'>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
