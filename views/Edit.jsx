const React = require('react');
const Layout = require('./components/Layout.jsx');

class Edit extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <nav className="nav justify-content-center">
                    <a className="nav-item nav-link" href="/students" role="button">Home</a>
                    <a className="nav-item nav-link" href="/students/new" role="button">New Student</a>
                </nav>
                <div className="container">
                    <h1>{student.nameFirst} {student.nameLast}</h1>
                    <h2>Edit</h2>
                    <form action={`/students/edit/${student._id}?_method=PUT`} method="POST">
                        First Name: <input type="text" name="nameFirst" value={student.nameFirst}/><br/>
                        Last Name: <input type="text" name="nameLast" value={student.nameLast}/><br/>
                        Picture: <input type="text" name="img" value={student.img}/><br/>
                        Book: <input type="text" name="book" value={student.book}/><br/>
                        Level: <input type="text" name="level" value={student.level}/><br/>
                        Notes: <input type="text" name="notes" value={student.notes}/><br/>
                        <br/>
                        <input className="btn btn-outline-success" type="submit" value="Submit"/>
                    </form>
                    <form action={`/students/${student._id}?_method=DELETE`} method="post">
                        <input className="btn btn-outline-danger" type="submit" value="Delete"/>
                    </form>
                </div>
            </Layout>
        );
    };
};

module.exports = Edit;