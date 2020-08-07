import React, { Component } from 'react'

export default class KeypadComponent extends Component {
    render() {
        return (
            <div className="button">
                <div className="inline-div">
                    <div className="neumorphic variation-2" name="CE" onClick={e => this.props.onClick("CE")}><span>CE</span></div>
                    
                    <div className="neumorphic variation-2" name="(" onClick={e => this.props.onClick("(")}><span>(</span></div>
                    <div className="neumorphic variation-2" name=")" onClick={e => this.props.onClick(")")}><span>)</span></div>
                    <div className="neumorphic variation-2" name="/" onClick={e => this.props.onClick("/")}><span>/</span></div>
                    
                </div>
                <br></br>
                <div className="inline-div">
                    <div className="neumorphic variation-2" name="7" onClick={e => this.props.onClick("7")}><span>7</span></div>
                    <div className="neumorphic variation-2" name="8" onClick={e => this.props.onClick("8")}><span>8</span></div>
                    <div className="neumorphic variation-2" name="9" onClick={e => this.props.onClick("9")}><span>9</span></div>
                    <div className="neumorphic variation-2" name="*" onClick={e => this.props.onClick("*")}><span>*</span></div>
                </div>
                <br></br>
                <div className="inline-div">
                    <div className="neumorphic variation-2" name="4" onClick={e => this.props.onClick("4")}><span>4</span></div>
                    <div className="neumorphic variation-2" name="5" onClick={e => this.props.onClick("5")}><span>5</span></div>
                    <div className="neumorphic variation-2" name="6" onClick={e => this.props.onClick("6")}><span>6</span></div>
                    <div className="neumorphic variation-2" name="-" onClick={e => this.props.onClick("-")}><span>-</span></div>
                    
                </div>
                <br></br>
                <div className="inline-div">
                    <div className="neumorphic variation-2" name="1" onClick={e => this.props.onClick("1")}><span>1</span></div>
                    <div className="neumorphic variation-2" name="2" onClick={e => this.props.onClick("2")}><span>2</span></div>
                    <div className="neumorphic variation-2" name="3" onClick={e => this.props.onClick("3")}><span>3</span></div>
                    
                    <div className="neumorphic variation-2" name="+" onClick={e => this.props.onClick("+")}><span>+</span></div>
                </div>
                <br></br>
                <div className="inline-div">
                    <div className="neumorphic variation-2" name="C" onClick={e => this.props.onClick("C")}><span>C</span></div>
                    <div className="neumorphic variation-2" name="0" onClick={e => this.props.onClick("0")}><span>0</span></div>
                    <div className="neumorphic variation-2" name="." onClick={e => this.props.onClick(".")}><span>.</span></div>
                    <div className="neumorphic variation-2" name="=" onClick={e => this.props.onClick("=")}><span>=</span></div>
                </div>
            </div>
        )
    }
}
