import { h, Component } from "preact";
import Genre from "./genre";

export default class Movie extends Component {
  render({ movie, screenXS }) {
    let img = null;

    if (!screenXS) {
      img = (
        <div class="col-sm-2">
          <img
            class="img-responsive ng-scope"
            src={`//image.tmdb.org/t/p/w150${movie.poster_path}`}
          />
        </div>
      );
    }

    return (
      <div class="row well">
        {img}
        <div class="col-sm-10">
          <h4>{movie.title}</h4>
          <p>{movie.overview}</p>
          <span class="pull-left">
            <a class="btn btn-primary" href="#/movies/10180">Read More</a>
          </span>
          <span class="pull-right">
            {movie.genres.map(genre => <Genre genre={genre} />)}
          </span>
        </div>
        <div class="clearfix" />
      </div>
    );
  }
}
