const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const {students} = this.props;
        return (
            <Layout>
                <h1>Hellooooooo! I'm an index!</h1>
                <nav>
                    <a href="/students">Home</a>
                    <a href="/students/new">New Student</a>
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
            </Layout>
        );
    };
};

module.exports = Index;