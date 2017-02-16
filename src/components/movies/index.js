import "whatwg-fetch";
import { h, Component } from "preact";
import Movie from "../movie";

function isScreenXS() {
  const mql = window.matchMedia("(max-width: 767px)");
  return mql.matches;
}

export default class Movies extends Component {
  state = {
    movies: [],
    take: 5,
    screenXS: isScreenXS()
  };

  onResize = () => {
    const screenXS = isScreenXS();

    if (screenXS !== this.state.screenXS) {
      this.setState({ screenXS });
    }
  };

  onScroll = () => {
    const buffer = 300;
    const { take, movies: { length } } = this.state;
    const {
      innerHeight,
      scrollY,
      document: { body: { offsetHeight } }
    } = window;

    if (innerHeight + scrollY + buffer >= offsetHeight && take < length) {
      this.setState({ take: take + 5 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.onScroll);

    fetch("/api/movies.json")
      .then(rsp => rsp.ok ? rsp : Promise.reject(rsp))
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  }

  render({}, { movies, take, screenXS }) {
    return (
      <div class="container" id="movies">
        {movies
          .slice(0, take)
          .map(movie => <Movie movie={movie} screenXS={screenXS} />)}
      </div>
    );
  }
}
