import React, { Component } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import "./styles/App.css";

import SearchProfile from "./components/SearchProfile.js";
import Profile from "./components/Profile.js";

class App extends Component {
  state = {
    username: "reactjs",
    user: {},
    isLoading: true,
    notFound: false
  };

  getUser = async username => {
    this.setState({ isLoading: true, notFound: false });
    try {
      const user = await axios.get(`https://api.github.com/users/${username}`);
      this.setState({ user: user.data, isLoading: false, notFound: false });
    } catch (error) {
      this.setState({ notFound: true, isLoading: false });
    }
  };

  componentDidMount() {
    this.getUser(this.state.username);
  }

  render() {
    return (
      <Container>
        <SearchProfile getProfile={this.getUser} />
        <Profile user={this.state} />
      </Container>
    );
  }
}

export default App;
