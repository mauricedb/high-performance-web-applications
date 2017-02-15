import { h, Component } from "preact";
import Movie from "../movie";

export default class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch("/api/movies.json")
      .then(rsp => rsp.ok ? rsp : Promise.reject(rsp))
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  render({}, { movies }) {
    return (
      <div>
        {movies.map(movie => <Movie movie={movie} />)}
      </div>
    );
  }
}
