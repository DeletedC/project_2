const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <nav className="nav justify-content-center">
                    <a className="nav-item nav-link" href="/students" role="button">Home</a>
                    <a className="nav-item nav-link" href="/students/new" role="button">New Student</a>
                </nav>
                <div className="container-fluid">
                    <h1>New Student Form</h1>
                    <form action="/students" method="POST">
                        First Name: <input type="text" name="nameFirst"/><br/>
                        Last Name: <input type="text" name="nameLast"/><br/>
                        Picture URL: <input type="text" name="img"/><br/>
                        Book: <input type="text" name="book"/><br/>
                        Level: <input type="text" name="level"/><br/>
                        Notes: <input type="text" name="notes"/><br/>
                        <br/>
                        <input className="btn btn-outline-success" type="submit" value="Submit"/>
                    </form>
                </div>
            </Layout>
        );
    };
};

module.exports = New;