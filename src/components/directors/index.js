import { h, Component } from "preact";

export default class Directors extends Component {
  state = {
    directors: []
  };

  componentDidMount() {
    fetch("/api/directors.json")
      .then(rsp => rsp.ok ? rsp : Promise.reject(rsp))
      .then(rsp => rsp.json())
      .then(directors => this.setState({ directors }));
  }

  render({}, { directors }) {
    return (
      <div class="container">
          <h2>Directors</h2>
        <ul>
          {directors.map(director => <li>{director}</li>)}
        </ul>
      </div>
    );
  }
}
