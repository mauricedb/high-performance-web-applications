import { h, Component } from "preact";

export default class Genre extends Component {
  render({ genre }) {
    return (
      <button class="btn btn-info btn-xs btn-genre">
        <span class="glyphicon glyphicon-tag" />
        {genre}
      </button>
    );
  }
}
