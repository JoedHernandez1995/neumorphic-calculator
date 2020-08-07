import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        let {result} = this.props;
        return (
            <div className="screen">
                <div><input type="text" className="result" placeholder="0" readOnly value={result}/></div>
            </div>
        )
    }
}
