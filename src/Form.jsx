import React from "react";

export class Form extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="form-horizontal">
        {this.props.children}
      </form>
    )
  }
}

export class FormItem extends React.Component {

  render() {
    let {placeholder, size} = this.props
    size = (size) ? size : 12;
    return (
      <div className={"form-group col-md-"+size+" col-lg-"+size+" col-xs-12"} style={{paddingLeft: 0, paddingRight: 0}}>
        <div className="input-group">
          <span className="input-group-addon">{placeholder}</span>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export class FormRow extends React.Component {

  render() {
    let {margin} = this.props;
    return (
      <div style={{margin: (margin) ? margin : 0}}>
        {this.props.children}
      </div>
    )
  }
}

export class Input extends React.Component {
  render() {
    let {props} = this;
    let {className} = props;
    return <input className={"form-control"} {...props}></input>
  }
}

export const FormInput = class extends React.Component {

  static propTypes = {
    placeholder : React.PropTypes.string,
    size: React.PropTypes.number,
    errors: React.PropTypes.object,
    addon: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    name: React.PropTypes.string.isRequired
  };

  render() {
    let {props} = this;
    let {placeholder, size, name, addon, errors} = props
    delete props[errors];
    let error = (errors && errors[name]);
    size = (size) ? size : 12;
    return <div className={"form-group col-md-"+size+" col-lg-"+size+" col-xs-12"} style={{float:"none", paddingLeft: 0, paddingRight: 0}}>
      <div className="input-group">
        <span className="input-group-addon">{(placeholder) ? placeholder : name}</span>
        <input className={"form-control"} {...props}></input>
        {error && <span className="input-group-addon"><span className="label label-danger">{error}</span></span>}
        {addon && <span className="input-group-addon">{addon}</span>}
      </div>
    </div>
  }
}



export class FormError extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let {errors} = this.props;
    return <div style={{ color: "#a94442", backgroundColor: "#f2dede", borderColor: "#ebccd1", padding: 15, marginBottom: 20, border: "1 solid transparent", borderRadius: 4}}>
      <ul>
      {errors && Object.keys(errors).map((key, index) => {
        let error = errors[key];
        return <div key={"error" + index}>{error}</div>
      })}
      </ul>
    </div>
  }
}

export const onInputChange = (obj, event) => {
  let {state} = obj;
  if (!event.target) throw new Error("Did you set a Name on your Input ?");
  state[event.target.name] = event.target.value;
  obj.setState(state);
  if (obj._onUpdate) {
    obj._onUpdate(state);
  }
}

export class CollectionRow extends React.Component {

  render() {
    let {placeholder, deleteable} = this.props;
    return (<FormRow>
      <FormItem placeholder={placeholder}>
        <div className="form-control" style={{height: "100%"}}>
          {this.props.children}
        </div>
        {deleteable &&<span className="input-group-addon" onClick={deleteable.bind(this)} style={{cursor: "pointer"}}>X</span>}
      </FormItem>
    </FormRow>
    )
  }
}

export class FormButton extends React.Component {

  static propTypes = {
    value : React.PropTypes.string,
    type: React.PropTypes.string,
    onClick: React.PropTypes.func
  };

  _handleClic(event) {
    let {onClick} = this.props;
    if (onClick) {
      onClick(event);
    }
  }

  render() {
    let {name, value, type}= this.props
    return <input type="button" className={"btn btn-" + type } value={value} onClick={this._handleClic.bind(this)}/>
  }
}

export class FormSelect extends React.Component {

  static propTypes = {
    placeholder : React.PropTypes.string,
    size: React.PropTypes.number,
    errors: React.PropTypes.object,
    name: React.PropTypes.string.isRequired
  }

  render() {
    let {props} = this;
    let {placeholder, size, name, errors} = props
    let error = (errors && errors[name]);
    size = (size) ? size : 12;
    return <div className={"form-group col-md-"+size+" col-lg-"+size+" col-xs-12" } style={{float:"none", paddingLeft :0, paddingRight: 0}}>
      <div className="input-group">
        <span className="input-group-addon">{(placeholder) ? placeholder : name}</span>
        <select className="form-control" {...props}>
          {this.props.children}
        </select>
        {error && <span className="input-group-addon"><span className="label label-danger">{error}</span></span>}
      </div>
    </div>
  }
}

export class ColorPicker extends React.Component {

  static propTypes= {
    name: React.PropTypes.string,
    colors: React.PropTypes.array,
    errors: React.PropTypes.object,
    selected: React.PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {
      color : null
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      color: props.color
    });
  }

  _handleChange(name) {
    let state = this.state;
    state.color = name;
    this.setState(state);
    if(this.props.onChange) {
      this.props.onChange(state);
    }
  }

  render() {
    let {colors, selected, errors, name, label} = this.props;
    let error = (errors && errors[name]);
    return(<div className="input-group">
        <span className="input-group-addon">{(label) ? label : name}</span>
        <div className="form-control" style={{height: "100%"}}>
          {colors && colors.map((item, index) => {
            return <ColorPickerItem color={item} key={"article_color" + index} onClick={this._handleChange.bind(this)}  selected={selected===item} />
          })}
        </div>
        {error && <span className="input-group-addon"><span className="label label-danger">{error}</span></span>}
      </div>
    )
  }
}

export default class ColorPickerItem extends React.Component {

  static propTypes= {
    color: React.PropTypes.string,
    selected: React.PropTypes.bool,
    onClick: React.PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {selected, onClick, color} = this.props;
    return 	<div onClick={onClick.bind(this, color)} style={{margin: 5, height: 45, width: 45, float:"left", border: (selected) ? "5px black solid": "5px white solid", background: color}}></div>
  }

}
