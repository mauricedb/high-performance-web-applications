import { h, Component } from "preact";
import Movie from "../movie";

export default class Movies extends Component {
  isScreenXS = () => {
    if (!this.mediaQueryList) {
      this.mediaQueryList = matchMedia("(max-width: 767px)");
      
      this.mediaQueryList.addListener(e => {
        if (e.matches !== this.state.screenXS) {
          this.setState({ screenXS: e.matches });
        }
      })
    }
    return this.mediaQueryList.matches;
  }

  state = {
    movies: [],
    take: 5,
    screenXS: this.isScreenXS()
  };

  onScroll = () => {
    const buffer = 300;
    const { take, movies: { length } } = this.state;
    const {
      innerHeight,
      pageYOffset,
      document: { body: { offsetHeight } }
    } = window;

    if (innerHeight + pageYOffset + buffer >= offsetHeight && take < length) {
      this.setState({ take: take + 5 });
    }
  };


  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);

    fetch("/api/movies.json")
      .then(rsp => rsp.ok ? rsp : Promise.reject(rsp))
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  componentWillUnmount() {
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
