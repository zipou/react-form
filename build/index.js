"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPicker = exports.FormSelect = exports.FormButton = exports.CollectionRow = exports.onInputChange = exports.FormError = exports.FormInput = exports.Input = exports.FormRow = exports.FormItem = exports.Form = undefined;

var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = exports.Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { className: "form-horizontal" },
        this.props.children
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

var FormItem = exports.FormItem = function (_React$Component2) {
  _inherits(FormItem, _React$Component2);

  function FormItem() {
    _classCallCheck(this, FormItem);

    return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
  }

  _createClass(FormItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          size = _props.size;

      size = size ? size : 12;
      return _react2.default.createElement(
        "div",
        { className: "form-group col-md-" + size + " col-lg-" + size + "" },
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement(
            "span",
            { className: "input-group-addon" },
            placeholder
          ),
          this.props.children
        )
      );
    }
  }]);

  return FormItem;
}(_react2.default.Component);

var FormRow = exports.FormRow = function (_React$Component3) {
  _inherits(FormRow, _React$Component3);

  function FormRow() {
    _classCallCheck(this, FormRow);

    return _possibleConstructorReturn(this, (FormRow.__proto__ || Object.getPrototypeOf(FormRow)).apply(this, arguments));
  }

  _createClass(FormRow, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: { margin: 10 } },
        this.props.children
      );
    }
  }]);

  return FormRow;
}(_react2.default.Component);

var Input = exports.Input = function (_React$Component4) {
  _inherits(Input, _React$Component4);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var className = props.className;

      return _react2.default.createElement("input", _extends({ className: "form-control" }, props));
    }
  }]);

  return Input;
}(_react2.default.Component);

var FormInput = exports.FormInput = (_temp = _class = function (_React$Component5) {
  _inherits(FormInput, _React$Component5);

  function FormInput() {
    _classCallCheck(this, FormInput);

    return _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).apply(this, arguments));
  }

  _createClass(FormInput, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var placeholder = props.placeholder,
          size = props.size,
          name = props.name,
          addon = props.addon,
          errors = props.errors;

      delete props[errors];
      var error = errors && errors[name];
      size = size ? size : 12;
      return _react2.default.createElement(
        "div",
        { className: "form-group col-md-" + size + " col-lg-" + size + "", style: { float: "none" } },
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement(
            "span",
            { className: "input-group-addon" },
            placeholder ? placeholder : name
          ),
          _react2.default.createElement("input", _extends({ className: "form-control" }, props)),
          error && _react2.default.createElement(
            "span",
            { className: "input-group-addon" },
            _react2.default.createElement(
              "span",
              { className: "label label-danger" },
              error
            )
          ),
          addon && _react2.default.createElement(
            "span",
            { className: "input-group-addon" },
            _react2.default.createElement(
              "span",
              { className: "label label-danger" },
              addon
            )
          )
        )
      );
    }
  }]);

  return FormInput;
}(_react2.default.Component), _class.propTypes = {
  placeholder: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.number,
  errors: _react2.default.PropTypes.object,
  addon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
  name: _react2.default.PropTypes.string.isRequired
}, _temp);

var FormError = exports.FormError = function (_React$Component6) {
  _inherits(FormError, _React$Component6);

  function FormError(props) {
    _classCallCheck(this, FormError);

    return _possibleConstructorReturn(this, (FormError.__proto__ || Object.getPrototypeOf(FormError)).call(this, props));
  }

  _createClass(FormError, [{
    key: "render",
    value: function render() {
      var errors = this.props.errors;

      return _react2.default.createElement(
        "div",
        { style: { color: "#a94442", backgroundColor: "#f2dede", borderColor: "#ebccd1", padding: 15, marginBottom: 20, border: "1 solid transparent", borderRadius: 4 } },
        _react2.default.createElement(
          "ul",
          null,
          errors && Object.keys(errors).map(function (key, index) {
            var error = errors[key];
            return _react2.default.createElement(
              "div",
              { key: "error" + index },
              error
            );
          })
        )
      );
    }
  }]);

  return FormError;
}(_react2.default.Component);

var onInputChange = exports.onInputChange = function onInputChange(obj, event) {
  var state = obj.state;

  if (!event.target) throw new Error("Did you set a Name on your Input ?");
  state[event.target.name] = event.target.value;
  obj.setState(state);
  if (obj._onUpdate) {
    obj._onUpdate(state);
  }
};

var CollectionRow = exports.CollectionRow = function (_React$Component7) {
  _inherits(CollectionRow, _React$Component7);

  function CollectionRow() {
    _classCallCheck(this, CollectionRow);

    return _possibleConstructorReturn(this, (CollectionRow.__proto__ || Object.getPrototypeOf(CollectionRow)).apply(this, arguments));
  }

  _createClass(CollectionRow, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          placeholder = _props2.placeholder,
          deleteable = _props2.deleteable;

      return _react2.default.createElement(
        FormRow,
        null,
        _react2.default.createElement(
          FormItem,
          { placeholder: placeholder },
          _react2.default.createElement(
            "div",
            { className: "form-control", style: { height: "100%" } },
            this.props.children
          ),
          deleteable && _react2.default.createElement(
            "span",
            { className: "input-group-addon", onClick: deleteable.bind(this), style: { cursor: "pointer" } },
            "X"
          )
        )
      );
    }
  }]);

  return CollectionRow;
}(_react2.default.Component);

var FormButton = exports.FormButton = function (_React$Component8) {
  _inherits(FormButton, _React$Component8);

  function FormButton() {
    _classCallCheck(this, FormButton);

    return _possibleConstructorReturn(this, (FormButton.__proto__ || Object.getPrototypeOf(FormButton)).apply(this, arguments));
  }

  _createClass(FormButton, [{
    key: "_handleClic",
    value: function _handleClic(event) {
      var onClick = this.props.onClick;

      if (onClick) {
        onClick(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props,
          name = _props3.name,
          value = _props3.value,
          type = _props3.type;

      return _react2.default.createElement("input", { type: "button", className: "btn btn-" + type, value: value, onClick: this._handleClic.bind(this) });
    }
  }]);

  return FormButton;
}(_react2.default.Component);

FormButton.propTypes = {
  value: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func
};

var FormSelect = exports.FormSelect = function (_React$Component9) {
  _inherits(FormSelect, _React$Component9);

  function FormSelect() {
    _classCallCheck(this, FormSelect);

    return _possibleConstructorReturn(this, (FormSelect.__proto__ || Object.getPrototypeOf(FormSelect)).apply(this, arguments));
  }

  _createClass(FormSelect, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var placeholder = props.placeholder,
          size = props.size,
          name = props.name,
          errors = props.errors;

      var error = errors && errors[name];
      size = size ? size : 12;
      return _react2.default.createElement(
        "div",
        { className: "form-group col-md-" + size + " col-lg-" + size + "", style: { float: "none" } },
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement(
            "span",
            { className: "input-group-addon" },
            placeholder ? placeholder : name
          ),
          _react2.default.createElement(
            "select",
            _extends({ className: "form-control" }, props),
            this.props.children
          ),
          error && _react2.default.createElement(
            "span",
            { className: "input-group-addon" },
            _react2.default.createElement(
              "span",
              { className: "label label-danger" },
              error
            )
          )
        )
      );
    }
  }]);

  return FormSelect;
}(_react2.default.Component);

FormSelect.propTypes = {
  placeholder: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.number,
  errors: _react2.default.PropTypes.object,
  name: _react2.default.PropTypes.string.isRequired
};

var ColorPicker = exports.ColorPicker = function (_React$Component10) {
  _inherits(ColorPicker, _React$Component10);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this10 = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

    _this10.state = {
      color: null
    };
    return _this10;
  }

  _createClass(ColorPicker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        color: props.color
      });
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(name) {
      var state = this.state;
      state.color = name;
      this.setState(state);
      if (this.props.onChange) {
        this.props.onChange(state);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      var _props4 = this.props,
          colors = _props4.colors,
          selected = _props4.selected,
          errors = _props4.errors;

      var error = errors && errors[name];
      return _react2.default.createElement(
        "div",
        { className: "input-group" },
        _react2.default.createElement(
          "span",
          { className: "input-group-addon" },
          "Couleur"
        ),
        _react2.default.createElement(
          "div",
          { className: "form-control", style: { height: "100%" } },
          colors && colors.map(function (item, index) {
            return _react2.default.createElement(ColorPickerItem, { color: item, key: "article_color" + index, onClick: _this11._handleChange.bind(_this11), selected: selected === item });
          })
        ),
        error && _react2.default.createElement(
          "span",
          { className: "input-group-addon" },
          _react2.default.createElement(
            "span",
            { className: "label label-danger" },
            error
          )
        )
      );
    }
  }]);

  return ColorPicker;
}(_react2.default.Component);

ColorPicker.propTypes = {
  colors: _react2.default.PropTypes.array,
  errors: _react2.default.PropTypes.object,
  selected: _react2.default.PropTypes.bool
};

var ColorPickerItem = function (_React$Component11) {
  _inherits(ColorPickerItem, _React$Component11);

  function ColorPickerItem(props) {
    _classCallCheck(this, ColorPickerItem);

    return _possibleConstructorReturn(this, (ColorPickerItem.__proto__ || Object.getPrototypeOf(ColorPickerItem)).call(this, props));
  }

  _createClass(ColorPickerItem, [{
    key: "render",
    value: function render() {
      var _props5 = this.props,
          selected = _props5.selected,
          onClick = _props5.onClick,
          color = _props5.color;

      return _react2.default.createElement("div", { onClick: onClick.bind(this, color), style: { margin: 5, height: 45, width: 45, float: "left", border: selected ? "5px black solid" : "5px white solid", background: color } });
    }
  }]);

  return ColorPickerItem;
}(_react2.default.Component);

ColorPickerItem.propTypes = {
  color: _react2.default.PropTypes.string,
  selected: _react2.default.PropTypes.bool,
  onClick: _react2.default.PropTypes.func
};
exports.default = ColorPickerItem;
