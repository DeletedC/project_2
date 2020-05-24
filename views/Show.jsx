const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <nav>
                    <a href="/students">Home</a>
                    <a href="/students/new">New Student</a>
                </nav>
                <h1>{student.nameFirst} {student.nameLast}</h1>
                <img src={student.img}/>
                <div>
                    <h3>Book: {student.book}</h3>
                    <h3>Level: {student.level}</h3>
                    <h3>Notes: {student.notes}</h3>
                </div>
                <a href={`/students/edit/${student._id}`}>Edit</a>
            </Layout>
        );
    };
};

module.exports = Show;