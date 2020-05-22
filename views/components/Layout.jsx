const React= require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    {/* Bootstrap */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
                    
                    {/* Personal CSS */}
                    <link href="/css/style.css" rel="stylesheet"/>
                    <title>Student Tracker</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    };
};

module.exports = Layout;