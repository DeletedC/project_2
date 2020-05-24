const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const {students} = this.props;
        return (
            <Layout>
                <div className="container-fluid">
                    <div className="jumbotron">
                        <h1>Student Tracker</h1>
                    </div>
                    <nav className="navbar justify-content-end">
                        <a className="nav-link" href="/students">Home</a>
                        <a className="nav-link" href="/students/new">New Student</a>
                    </nav>
                    <div>
                        {students.map((student, index) => {
                            return (
                                <>
                                <a href={`/students/${student._id}`}>
                                    <h2>{student.nameFirst} {student.nameLast}</h2>
                                </a>
                                <a href={`/students/edit/${student._id}`}>Edit</a>
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