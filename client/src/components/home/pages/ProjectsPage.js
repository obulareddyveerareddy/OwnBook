import React from 'react';

const ProjectsPage = ({title})=>{
    return(
        <div style={{display:'flex', flexDirection:'column', margin:'2rem'}}>
            <div className="row">
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img className="img-thumbnail rounded" src="./assets/own-account-projects-page-card-header.jpg" />
                            <div className="card-title col s12 m12 black-text text-darken-2 grey lighten-3">{title}</div>
                        </div>
                        <div className="card-content">
                            <p>Own-Account helps you create a monthly budget so you can achieve your money goals. The application help to configure remainders. The application provides plug-ins for small businesses like Travels, Farming... to maintain & plan.</p>
                        </div>
                        <div className="card-action">
                            <div style={{display:'flex', flexDirection:'column'}}>
                            <a  href='http://localhost:5000/api/auth/google'  className="waves-effect waves-light btn social google red lighten-1"><i className="fa fa-google"></i> Sign in with Google</a>
                            <a  href='http://localhost:5000/api/auth/github'  className="waves-effect waves-light btn social google red lighten-1"><i className="fa fa-google"></i> Sign in with Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;