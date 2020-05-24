const React = require('react');
const Layout = require('./components/Layout.jsx');

class Edit extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <h1>Edit Student</h1>
                <form action={`/students/edit/${student._id}?_method=PUT`} method="POST">
                    First Name: <input type="text" name="nameFirst" value={student.nameFirst}/><br/>
                    Last Name: <input type="text" name="nameLast" value={student.nameLast}/><br/>
                    Picture: <input type="text" name="img" value={student.img}/><br/>
                    Book: <input type="text" name="book" value={student.book}/><br/>
                    Level: <input type="text" name="level" value={student.level}/><br/>
                    Notes: <input type="text" name="notes" value={student.notes}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </Layout>
        );
    };
};

module.exports = Edit;