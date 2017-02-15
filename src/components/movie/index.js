import { h, Component } from "preact";
import Genre from "./genre";

export default class Movie extends Component {
  render({ movie }) {
    return (
      <div class="row well">
        <div class="col-sm-2 hidden-xs">
          <img class="img-responsive ng-scope" src={movie.poster_path} />
        </div>
        <div class="col-sm-10">
          <h4 class="title">{movie.title}</h4>
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
