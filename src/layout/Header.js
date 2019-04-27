import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
    this.state.isActive = false;
  }

  burgerToggleActive = (e) => {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    return (
      <section className="app-topbar">
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" className={"navbar-burger burger" + (this.state.isActive ? ' is-active' : '')}
            aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.burgerToggleActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={"navbar-menu" + (this.state.isActive ? ' is-active' : '')}>
          <div className="navbar-start">
            <a className="navbar-item" href="/" >Home</a>
            <a className="navbar-item">Playlists</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Admin</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Team Settings</a>
                <a className="navbar-item">Invitations</a>
                <a className="navbar-item">Authentication</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
        </nav>
      </section>
    );
  }
}
