import React, { PureComponent } from 'react';

class StatusCode extends PureComponent {
    explainStatusCode(statusCode) {
        let explain;
        switch(statusCode) {
            case 200:
                explain = 'ok';
                break;
            case 201:
                explain = 'created';
                break;
            case 418:
                explain =  "I'm a teapot";
                break;
            default:
                explain = 'no existe ameo';
        }

        return (
            <p>{explain}</p>
        );
    }

    render() {
        const { statusCode } = this.props;

        return(
            this.explainStatusCode(statusCode)
        )
    }
}

export default StatusCode;