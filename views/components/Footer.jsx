const React= require('react');

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid footer pt-5">
                <div className="row justify-content-center">
                    <p>Site by Curtis Woods</p>
                </div>
                <div className="row justify-content-center">
                    <a href="https://www.CurtisJWoods.com">
                        <p>See my portfolio</p>
                    </a>
                </div>

            </div>
        );
    };
};

module.exports = Footer;