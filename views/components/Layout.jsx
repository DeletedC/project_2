const React= require('react');
const Banner = require('./Banner');
const Footer = require('./Footer');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    {/* meta tags for LinkedIn */}
                    <meta property="og:title" content="Piano Studio Student Tracker"/>
                    <meta property="og:image" content="https://curtiswoods.herokuapp.com/img/screenshot.png"/>
                    <meta property="og:description" content="Piano Studio Student Tracker"/>
                    <meta property="og:url" content="//curtiswoods.herokuapp.com/students"/>

                    {/* Bootstrap */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
                    
                    {/* Personal CSS */}
                    <link href="/css/style.css" rel="stylesheet"/>
                    <title>Student Tracker</title>

                    <link href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,700;0,900;1,400&display=swap" rel="stylesheet"/> 
                </head>
                <body>
                    <Banner/>
                    {this.props.children}
                    <Footer/>
                </body>
            </html>
        );
    };
};

module.exports = Layout;