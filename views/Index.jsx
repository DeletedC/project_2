const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Hellooooooo! I'm an index!</h1>
            </Layout>
        );
    };
};

module.exports = Index;