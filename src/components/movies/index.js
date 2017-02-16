import { h, Component } from "preact";
import Movie from "../movie";

function isScreenXS() {
  const mql = window.matchMedia("(max-width: 767px)");
  return mql.matches;
}

export default class Movies extends Component {
  state = {
    movies: [],
    innerWidth: window.innerWidth,
    screenXS: isScreenXS()
  };

  onResize = () => {
    const screenXS = isScreenXS();

    if (screenXS !== this.state.screenXS) {
      this.setState({ screenXS });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);

    fetch("/api/movies.json")
      .then(rsp => rsp.ok ? rsp : Promise.reject(rsp))
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render({}, { movies, innerWidth, screenXS }) {
    return (
      <div class="container">
        {movies.map(movie => (
          <Movie movie={movie} innerWidth={innerWidth} screenXS={screenXS} />
        ))}
      </div>
    );
  }
}
