const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <h1>New Student Form</h1>
                <form action="/students" method="POST">
                    First Name: <input type="text" name="nameFirst"/><br/>
                    Last Name: <input type="text" name="nameLast"/><br/>
                    Picture: <input type="text" name="img"/><br/>
                    Book: <input type="text" name="book"/><br/>
                    Level: <input type="text" name="level"/><br/>
                    Notes: <input type="text" name="notes"/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </Layout>
        );
    };
};

module.exports = New;