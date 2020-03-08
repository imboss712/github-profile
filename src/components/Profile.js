import React, { Component } from "react";
import {
  Divider,
  Grid,
  Segment,
  Image,
  Dimmer,
  Loader
} from "semantic-ui-react";
import "../styles/Profile.css";

class Profile extends Component {
  render() {
    const { user, isLoading, notFound } = this.props.user;

    if (isLoading) {
      return (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Segment>
      );
    } else if (notFound) {
      return (
        <Segment
          style={{ textAlign: "center", padding: "40px 0", lineHeight: "1.6" }}
        >
          <p style={{ fontSize: "28px", color: "#546e7a", fontWeight: "bold" }}>
            404 Not Found
          </p>
          <p style={{ fontSize: "18.5px", color: "#004d40" }}>
            Please search another username.
          </p>
        </Segment>
      );
    } else {
      return (
        <Segment style={{ backgroundColor: "#ffffff" }} placeholder>
          <Grid columns={2} className="Profile" relaxed="very" stackable>
            <Grid.Column className="LeftColumn" verticalAlign="middle">
              <Image
                src={user.avatar_url}
                alt={user.name}
                title={user.name}
                size="small"
                style={{ margin: "15px auto 20px auto" }}
                circular
              />
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                title={user.name}
              >
                {user.name} <i className="fas fa-external-link-alt"></i>
              </a>
              <h5>{user.location}</h5>
              <p>{user.bio}</p>
            </Grid.Column>

            <Grid.Column className="RightColumn" verticalAlign="middle">
              <section className="RightColSection">
                <p className="first">{user.public_repos}</p>
                <p className="second">Repositories</p>
              </section>
              <Divider></Divider>
              <section className="RightColSection">
                <p className="first">{user.followers}</p>
                <p className="second">Followers</p>
              </section>
              <Divider></Divider>
              <section className="RightColSection">
                <p className="first">{user.following}</p>
                <p className="second">Following</p>
              </section>
            </Grid.Column>
          </Grid>

          <Divider className="VerticalDivider" vertical>
            GITHUB
          </Divider>
        </Segment>
      );
    }
  }
}

export default Profile;
