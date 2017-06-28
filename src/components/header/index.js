import { h, Component } from "preact";
import { Link } from "preact-router";
import style from "./style";

export default class Header extends Component {
  state = {
    expanded: false
  }
  toggleExpanded = () => {
    this.setState({expanded: !this.state.expanded});
  }
  collapse = () => {
    this.setState({expanded: false});
  }
  render({}, {expanded}) {
    const dropDownClass = expanded ? '': 'collapse navbar-collapse';

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
              onClick={this.toggleExpanded}
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
            <Link class="navbar-brand" href="/">Home</Link>
          </div>

          <div
            class={dropDownClass}
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li><Link onClick={this.collapse} href="/movies">Movies</Link></li>
              <li><Link onClick={this.collapse} href="/directors">Directors</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
