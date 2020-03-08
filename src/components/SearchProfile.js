import React from "react";
import { Form } from "semantic-ui-react";
import "../styles/SearchProfile.css";

class SearchProfile extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    let username = this.refs.username.value;
    this.props.getProfile(username);
    this.refs.username.value = "";
  };

  render() {
    return (
      <div>
        <Form className="SearchProfile" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="username"
            placeholder="Type username and hit enter..."
            style={{
              padding: "11px 14px",
              width: "100%",
              outline: "none",
              border: "1.5px solid #ccc",
              borderRadius: "3px",
              fontSize: "17.5px",
              color: "#004666"
            }}
            required
          />
        </Form>
      </div>
    );
  }
}

export default SearchProfile;
