import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.vote = props.vote;
    this.votes = props.votes;
    this.text = props.text;
    this.id = props.id;
    console.log('this.votes', this.votes);
    console.log('this.id', this.id);

  }

  upVote = () => {
    this.vote(this.id, +1);
    console.log(this.votes);
  }
  downVote = () => this.vote(this.id, -1);

  render() {
    return (
      <div className="Joke" >
        <div className="Joke-votearea">
          <button onClick={this.upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={this.downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {this.votes}
        </div>

        <div className="Joke-text">{this.text}</div>
      </div>
    );
  }
}

export default Joke;
