const React = require('react');
const Layout = require('./components/Layout.jsx');
import {isDatabaseConnected} from '../public/js/check'

class Index extends React.Component {
    render() {
        const {students} = this.props;
        let connected = isDatabaseConnected(students);

        // Alphabetizing the array
        if (connected) {
            students.sort((a, b) => {
                if (a.nameLast.toUpperCase() > b.nameLast.toUpperCase()) {
                    return 1;
                } else if (a.nameLast.toUpperCase() < b.nameLast.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        

        return (
            <Layout>
                <nav className="nav justify-content-center p-3 sticky-top">
                    <a className="nav-item nav-link" href="/students" role="button">Home</a>
                    {connected
                        ? <a className="nav-item nav-link" href="/students/new" role="button">New Student</a>
                        : ''
                    }
                </nav>

                <div className="container">
                <div className="row">
                {connected
                    ? students.map((student, index) => {
                        return (
                            <div className="col-sm-3 text-center mb-3 mt-3">
                            <a href={`/students/${student._id}`}>
                                <h2>{student.nameLast}, {student.nameFirst}</h2>
                                <img className="card-img-top img-thumbnail" src={student.img}></img>
                            </a>
                            <div className="row justify-content-center">
                                <form action={`/students/edit/${student._id}`} method="get">
                                    <input className="btn btn-outline-secondary" type="submit" value="Edit"/>
                                </form>
                                <form action={`/students/${student._id}?_method=DELETE`} method="post">
                                    <input className="btn btn-outline-danger" type="submit" value="Delete"/>
                                </form>
                            </div>
                            
                            </div>
                        );
                    })

                    : <p>The database is not connected. Please try again later.</p>
                }
                </div>
                </div>   
            </Layout>
        );
    };
};

module.exports = Index;