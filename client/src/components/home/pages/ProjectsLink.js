import { connect }      from 'react-redux'
import fetch            from 'cross-fetch';
import ProjectsPage     from './ProjectsPage'

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    googleOAuthSignIn: () => {
      fetch('http://localhost:5000/api/auth/google', {method: "GET"})
      .then((resp) => resp.json())
      .then(function(data) {
          console.log(data);
      });
    }
  }
}

const ProjectsLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage)

export default ProjectsLink