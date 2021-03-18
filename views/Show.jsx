const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <nav className="nav justify-content-center">
                    <a className="nav-item nav-link" href="/students" role="button">Home</a>
                    <a className="nav-item nav-link" href="/students/new" role="button">New Student</a>
                </nav>
                <h1>{student.nameFirst} {student.nameLast}</h1>
                <img className="img" src={student.img}/>
                <div>
                    <h3>Book: {student.book}</h3>
                    <h3>Level: {student.level}</h3>
                    <h3>Notes: {student.notes}</h3>
                </div>
                <form action={`/students/edit/${student._id}`} method="get">
                    <input className="btn btn-outline-secondary" type="submit" value="Edit"/>
                </form>
                <form action={`/students/${student._id}?_method=DELETE`} method="post">
                    <input className="btn btn-outline-danger" type="submit" value="Delete"/>
                </form>
            </Layout>
        );
    };
};

module.exports = Show;