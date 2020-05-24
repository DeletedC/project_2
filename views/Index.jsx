const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const {students} = this.props;
        return (
            <Layout>
                <h1>Hellooooooo! I'm an index!</h1>
                <div>
                    {students.map((student, index) => {
                        return (
                            <a href={`/students/${student._id}`}>
                                <h2>{student.nameFirst} {student.nameLast}</h2>
                            </a>
                        );
                    })};
                </div>
            </Layout>
        );
    };
};

module.exports = Index;