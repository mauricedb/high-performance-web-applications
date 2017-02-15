import { h, Component } from "preact";

export default class Genre extends Component {
  render({ genre }) {
    return (
      <button class="btn btn-info btn-xs">
        <span class="glyphicon glyphicon-tag" />
        {genre}
      </button>
    );
  }
}
