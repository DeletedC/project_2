const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const {students} = this.props;

        // Alphabetizing the array
        students.sort((a, b) => {
            if (a.nameLast.toUpperCase() > b.nameLast.toUpperCase()) {
                return 1;
            } else if (a.nameLast.toUpperCase() < b.nameLast.toUpperCase()) {
                return -1;
            } else {
                return 0;
            }
        });

        return (
            <Layout>
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="text-center">Student Tracker</h1>
                    </div>
                    <nav className="nav nav-fill">
                        <a className="nav-item nav-link" href="/students" role="button">Home</a>
                        <a className="nav-item nav-link" href="/students/new" role="button">New Student</a>
                    </nav>
                    <div className="col-8">
                        {students.map((student, index) => {
                            return (
                                <>
                                <a href={`/students/${student._id}`}>
                                    <h2>{student.nameFirst} {student.nameLast}</h2>
                                </a>
                                <form action={`/students/edit/${student._id}`} method="get">
                                    <input className="btn btn-outline-secondary" type="submit" value="Edit"/>
                                </form>
                                <form action={`/students/${student._id}?_method=DELETE`} method="post">
                                    <input className="btn btn-outline-danger" type="submit" value="Delete"/>
                                </form>
                                </>
                            );
                        })}
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = Index;