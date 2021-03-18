const React = require('react');
const Layout = require('./components/Layout.jsx');
const Card = require('./components/Card');
import {isDatabaseConnected} from '../public/js/check'

class Index extends React.Component {
    render() {
        const {students} = this.props;
        let connected = isDatabaseConnected(students);

        // Alphabetizing the array
        if (connected) {
            students.sort((a, b) => {
                if (a.nameLast.toUpperCase() > b.nameLast.toUpperCase()) {
                    return 1;
                } else if (a.nameLast.toUpperCase() < b.nameLast.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        

        return (
            <Layout>
                <nav className="nav justify-content-center p-3 sticky-top">
                    <a className="nav-item nav-link" href="/students" role="button">Home</a>
                    {connected
                        ? <a className="nav-item nav-link" href="/students/new" role="button">New Student</a>
                        : ''
                    }
                </nav>

                <div className="container">
                <div className="row">
                {connected
                    ? students.map((student, index) => {
                        return (
                            <Card student={student}/>
                        );
                    })

                    : 
                    <div className="col mt-5 text-center">
                        <h3>The database is not connected. Please try again later.</h3>
                    </div>  
                }
                </div>
                </div>   
            </Layout>
        );
    };
};

module.exports = Index;