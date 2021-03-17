const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const {students} = this.props;
        const isDatabaseConnected = () => {
            if (students == 'noDatabase') {
                return false;
            } else {
                return true;
            }
        }

        // Alphabetizing the array
        if (isDatabaseConnected()) {
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
                <div className="jumbotron">
                    <h1 className="text-center">Piano Studio</h1>
                    <h1 className="text-center">Student Tracker</h1>
                </div>
                <nav className="nav justify-content-center">
                    <a className="nav-item nav-link" href="/students" role="button">Home</a>
                    {isDatabaseConnected()
                        ? <a className="nav-item nav-link" href="/students/new" role="button">New Student</a>
                        : ''
                    }
                </nav>

                <div className="container">
                <div className="row">
                {isDatabaseConnected()
                    ? students.map((student, index) => {
                        return (
                            <div className="col-sm-3 text-center mb-3 mt-3">
                            <a href={`/students/${student._id}`}>
                                <h2>{student.nameFirst} {student.nameLast}</h2>
                                <img className="card-img-top img-thumbnail" src={student.img}></img>
                            </a>
                            <form action={`/students/edit/${student._id}`} method="get">
                                <input className="btn btn-outline-secondary" type="submit" value="Edit"/>
                            </form>
                            <form action={`/students/${student._id}?_method=DELETE`} method="post">
                                <input className="btn btn-outline-danger" type="submit" value="Delete"/>
                            </form>
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