const React= require('react');

class Banner extends React.Component {
    render() {
        return (
            <div className="jumbotron mb-0">
                <h1 className="text-center">Piano Studio</h1>
                <h1 className="text-center">Student Tracker</h1>
            </div>
        );
    };
};

module.exports = Banner;