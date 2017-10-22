!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Formsy=t(require("react")):e.Formsy=t(e.react)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,r){e.exports=r(5)()},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default={arraysDiffer:function(e,t){var r=this,n=!1;return e.length!==t.length?n=!0:e.forEach(function(e,i){r.isSame(e,t[i])||(n=!0)},this),n},objectsDiffer:function(e,t){var r=this,n=!1;return Object.keys(e).length!==Object.keys(t).length?n=!0:Object.keys(e).forEach(function(i){r.isSame(e[i],t[i])||(n=!0)},this),n},isSame:function(e,t){return(void 0===e?"undefined":n(e))===(void 0===t?"undefined":n(t))&&(Array.isArray(e)&&Array.isArray(t)?!this.arraysDiffer(e,t):"function"==typeof e?e.toString()===t.toString():"object"===(void 0===e?"undefined":n(e))&&null!==e&&null!==t?!this.objectsDiffer(e,t):e===t)},find:function(e,t){for(var r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i))return i}return null},runRules:function(e,t,r,n){var i={errors:[],failed:[],success:[]};return Object.keys(r).length&&Object.keys(r).forEach(function(o){if(n[o]&&"function"==typeof r[o])throw new Error("Formsy does not allow you to override default validations: "+o);if(!n[o]&&"function"!=typeof r[o])throw new Error("Formsy does not have the validation rule: "+o);if("function"==typeof r[o]){var s=r[o](t,e);return void("string"==typeof s?(i.errors.push(s),i.failed.push(o)):s||i.failed.push(o))}if("function"!=typeof r[o]){var a=n[o](t,e,r[o]);return void("string"==typeof a?(i.errors.push(a),i.failed.push(o)):a?i.success.push(o):i.failed.push(o))}i.success.push(o)}),i}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.withFormsy=t.propTypes=t.addValidationRule=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=r(4),c=n(d),p=r(0),h=n(p),v=r(1),m=n(v),y=r(2),b=n(y),g=r(9),V=n(g),E=r(10),S=n(E),O=function(e){function t(e){o(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={isValid:!0,isSubmitting:!1,canChange:!1},r.inputs=[],r.attachToForm=r.attachToForm.bind(r),r.detachFromForm=r.detachFromForm.bind(r),r.getCurrentValues=r.getCurrentValues.bind(r),r.getPristineValues=r.getPristineValues.bind(r),r.isChanged=r.isChanged.bind(r),r.isFormDisabled=r.isFormDisabled.bind(r),r.reset=r.reset.bind(r),r.resetModel=r.resetModel.bind(r),r.resetInternal=r.resetInternal.bind(r),r.runValidation=r.runValidation.bind(r),r.submit=r.submit.bind(r),r.updateInputsWithError=r.updateInputsWithError.bind(r),r.validate=r.validate.bind(r),r.validateForm=r.validateForm.bind(r),r}return a(t,e),f(t,[{key:"getChildContext",value:function(){var e=this;return{formsy:{attachToForm:this.attachToForm,detachFromForm:this.detachFromForm,validate:this.validate,isFormDisabled:this.isFormDisabled,isValidValue:function(t,r){return e.runValidation(t,r).isValid}}}}},{key:"componentDidMount",value:function(){this.validateForm()}},{key:"componentWillUpdate",value:function(){this.prevInputNames=this.inputs.map(function(e){return e.props.name})}},{key:"componentDidUpdate",value:function(){this.props.validationErrors&&"object"===l(this.props.validationErrors)&&Object.keys(this.props.validationErrors).length>0&&this.setInputValidationErrors(this.props.validationErrors);var e=this.inputs.map(function(e){return e.props.name});b.default.arraysDiffer(this.prevInputNames,e)&&this.validateForm()}},{key:"attachToForm",value:function(e){-1===this.inputs.indexOf(e)&&this.inputs.push(e),this.validate(e)}},{key:"detachFromForm",value:function(e){var t=this.inputs.indexOf(e);-1!==t&&(this.inputs=this.inputs.slice(0,t).concat(this.inputs.slice(t+1))),this.validateForm()}},{key:"getCurrentValues",value:function(){return this.inputs.reduce(function(e,t){var r=t.props.name,n=Object.assign({},e);return n[r]=t.state.value,n},{})}},{key:"getModel",value:function(){var e=this.getCurrentValues();return this.mapModel(e)}},{key:"getPristineValues",value:function(){return this.inputs.reduce(function(e,t){var r=t.props.name,n=Object.assign({},e);return n[r]=t.props.value,n},{})}},{key:"isChanged",value:function(){return!b.default.isSame(this.getPristineValues(),this.getCurrentValues())}},{key:"isFormDisabled",value:function(){return this.props.disabled}},{key:"mapModel",value:function(e){return this.props.mapping?this.props.mapping(e):c.default.toObj(Object.keys(e).reduce(function(t,r){for(var n=r.split("."),i=t;n.length;){var o=n.shift();i[o]=n.length?i[o]||{}:e[r],i=i[o]}return t},{}))}},{key:"reset",value:function(e){this.setFormPristine(!0),this.resetModel(e)}},{key:"resetInternal",value:function(e){e.preventDefault(),this.reset(),this.props.onReset&&this.props.onReset()}},{key:"resetModel",value:function(e){this.inputs.forEach(function(t){var r=t.props.name;e&&Object.prototype.hasOwnProperty.call(e,r)?t.setValue(e[r]):t.resetValue()}),this.validateForm()}},{key:"runValidation",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.value,n=this.getCurrentValues(),i=e.props.validationErrors,o=e.props.validationError,s=b.default.runRules(r,n,e.validations,V.default),a=b.default.runRules(r,n,e.requiredValidations,V.default),u=!!Object.keys(e.requiredValidations).length&&!!a.success.length,l=!(s.failed.length||this.props.validationErrors&&this.props.validationErrors[e.props.name]);return{isRequired:u,isValid:!u&&l,error:function(){if(l&&!u)return[];if(s.errors.length)return s.errors;if(t.props.validationErrors&&t.props.validationErrors[e.props.name])return"string"==typeof t.props.validationErrors[e.props.name]?[t.props.validationErrors[e.props.name]]:t.props.validationErrors[e.props.name];if(u){var r=i[a.success[0]];return r?[r]:null}return s.failed.length?s.failed.map(function(e){return i[e]?i[e]:o}).filter(function(e,t,r){return r.indexOf(e)===t}):void 0}()}}},{key:"setInputValidationErrors",value:function(e){this.inputs.forEach(function(t){var r=t.props.name,n=[{isValid:!(r in e),validationError:"string"==typeof e[r]?[e[r]]:e[r]}];t.setState.apply(t,n)})}},{key:"setFormPristine",value:function(e){this.setState({formSubmitted:!e}),this.inputs.forEach(function(t){t.setState({formSubmitted:!e,isPristine:e})})}},{key:"submit",value:function(e){e&&e.preventDefault&&e.preventDefault(),this.setFormPristine(!1);var t=this.getModel();this.props.onSubmit(t,this.resetModel,this.updateInputsWithError),this.state.isValid?this.props.onValidSubmit(t,this.resetModel,this.updateInputsWithError):this.props.onInvalidSubmit(t,this.resetModel,this.updateInputsWithError)}},{key:"updateInputsWithError",value:function(e){var t=this;Object.keys(e).forEach(function(r){var n=b.default.find(t.inputs,function(e){return e.props.name===r});if(!n)throw new Error("You are trying to update an input that does not exist. Verify errors object with input names. "+JSON.stringify(e));var i=[{isValid:t.props.preventExternalInvalidation,externalError:"string"==typeof e[r]?[e[r]]:e[r]}];n.setState.apply(n,i)})}},{key:"validate",value:function(e){this.state.canChange&&this.props.onChange(this.getCurrentValues(),this.isChanged());var t=this.runValidation(e);e.setState({isValid:t.isValid,isRequired:t.isRequired,validationError:t.error,externalError:null},this.validateForm)}},{key:"validateForm",value:function(){var e=this,t=function(){var t=e.inputs.every(function(e){return e.state.isValid});e.setState({isValid:t}),t?e.props.onValid():e.props.onInvalid(),e.setState({canChange:!0})};this.inputs.forEach(function(r,n){var i=e.runValidation(r);i.isValid&&r.state.externalError&&(i.isValid=!1),r.setState({isValid:i.isValid,isRequired:i.isRequired,validationError:i.error,externalError:!i.isValid&&r.state.externalError?r.state.externalError:null},n===e.inputs.length-1?t:null)}),this.inputs.length||this.setState({canChange:!0})}},{key:"render",value:function(){var e=this.props,t=(e.getErrorMessage,e.getErrorMessages,e.getValue,e.hasValue,e.isFormDisabled,e.isFormSubmitted,e.isPristine,e.isRequired,e.isValid,e.isValidValue,e.mapping,e.onChange,e.onInvalidSubmit,e.onInvalid,e.onReset,e.onSubmit,e.onValid,e.onValidSubmit,e.preventExternalInvalidation,e.resetValue,e.setValidations,e.setValue,e.showError,e.showRequired,e.validationErrors,i(e,["getErrorMessage","getErrorMessages","getValue","hasValue","isFormDisabled","isFormSubmitted","isPristine","isRequired","isValid","isValidValue","mapping","onChange","onInvalidSubmit","onInvalid","onReset","onSubmit","onValid","onValidSubmit","preventExternalInvalidation","resetValue","setValidations","setValue","showError","showRequired","validationErrors"]));return m.default.createElement("form",u({onReset:this.resetInternal,onSubmit:this.submit},t),this.props.children)}}]),t}(m.default.Component);O.displayName="Formsy",O.defaultProps={children:null,disabled:!1,getErrorMessage:function(){},getErrorMessages:function(){},getValue:function(){},hasValue:function(){},isFormDisabled:function(){},isFormSubmitted:function(){},isPristine:function(){},isRequired:function(){},isValid:function(){},isValidValue:function(){},mapping:null,onChange:function(){},onError:function(){},onInvalid:function(){},onInvalidSubmit:function(){},onReset:function(){},onSubmit:function(){},onValid:function(){},onValidSubmit:function(){},preventExternalInvalidation:!1,resetValue:function(){},setValidations:function(){},setValue:function(){},showError:function(){},showRequired:function(){},validationErrors:null},O.propTypes={children:h.default.node,disabled:h.default.bool,getErrorMessage:h.default.func,getErrorMessages:h.default.func,getValue:h.default.func,hasValue:h.default.func,isFormDisabled:h.default.func,isFormSubmitted:h.default.func,isPristine:h.default.func,isRequired:h.default.func,isValid:h.default.func,isValidValue:h.default.func,mapping:h.default.object,preventExternalInvalidation:h.default.bool,onChange:h.default.func,onInvalid:h.default.func,onInvalidSubmit:h.default.func,onReset:h.default.func,onSubmit:h.default.func,onValid:h.default.func,onValidSubmit:h.default.func,resetValue:h.default.func,setValidations:h.default.func,setValue:h.default.func,showError:h.default.func,showRequired:h.default.func,validationErrors:h.default.object},O.childContextTypes={formsy:h.default.object};var R=function(e,t){V.default[e]=t},F=S.default;t.addValidationRule=R,t.propTypes=E.propTypes,t.withFormsy=F,t.default=O},function(e,t){function r(e){return Object.keys(e).reduce(function(t,r){var n=r.match(/[^\[]*/i),i=r.match(/\[.*?\]/g)||[];i=[n[0]].concat(i).map(function(e){return e.replace(/\[|\]/g,"")});for(var o=t;i.length;){var s=i.shift();s in o?o=o[s]:(o[s]=i.length?isNaN(i[0])?{}:[]:e[r],o=o[s])}return t},{})}function n(e){function t(e,r,n){return Array.isArray(n)||"[object Object]"===Object.prototype.toString.call(n)?(Object.keys(n).forEach(function(i){t(e,r+"["+i+"]",n[i])}),e):(e[r]=n,e)}return Object.keys(e).reduce(function(r,n){return t(r,n,e[n])},{})}e.exports={fromObj:n,toObj:r}},function(e,t,r){"use strict";var n=r(6),i=r(7),o=r(8);e.exports=function(){function e(e,t,r,n,s,a){a!==o&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";function n(e){return function(){return e}}var i=function(){};i.thatReturns=n,i.thatReturnsFalse=n(!1),i.thatReturnsTrue=n(!0),i.thatReturnsNull=n(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,r){"use strict";function n(e,t,r,n,o,s,a,u){if(i(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,o,s,a,u],d=0;l=new Error(t.replace(/%s/g,function(){return f[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var i=function(e){};e.exports=n},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return null!==e&&void 0!==e},i=function(e){return""===e},o={isDefaultRequiredValue:function(e,t){return void 0===t||""===t},isExisty:function(e,t){return n(t)},matchRegexp:function(e,t,r){return!n(t)||i(t)||r.test(t)},isUndefined:function(e,t){return void 0===t},isEmptyString:function(e,t){return i(t)},isEmail:function(e,t){return o.matchRegexp(e,t,/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)},isUrl:function(e,t){return o.matchRegexp(e,t,/^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/i)},isTrue:function(e,t){return!0===t},isFalse:function(e,t){return!1===t},isNumeric:function(e,t){return"number"==typeof t||o.matchRegexp(e,t,/^[-+]?(?:\d*[.])?\d+$/)},isAlpha:function(e,t){return o.matchRegexp(e,t,/^[A-Z]+$/i)},isAlphanumeric:function(e,t){return o.matchRegexp(e,t,/^[0-9A-Z]+$/i)},isInt:function(e,t){return o.matchRegexp(e,t,/^(?:[-+]?(?:0|[1-9]\d*))$/)},isFloat:function(e,t){return o.matchRegexp(e,t,/^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][+-]?(?:\d+))?$/)},isWords:function(e,t){return o.matchRegexp(e,t,/^[A-Z\s]+$/i)},isSpecialWords:function(e,t){return o.matchRegexp(e,t,/^[A-Z\s\u00C0-\u017F]+$/i)},isLength:function(e,t,r){return!n(t)||i(t)||t.length===r},equals:function(e,t,r){return!n(t)||i(t)||t===r},equalsField:function(e,t,r){return t===e[r]},maxLength:function(e,t,r){return!n(t)||t.length<=r},minLength:function(e,t,r){return!n(t)||i(t)||t.length>=r}};t.default=o},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.propTypes=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),f=n(l),d=r(1),c=n(d),p=r(2),h=n(p),v=function(e){return"string"==typeof e?e.split(/,(?![^{[]*[}\]])/g).reduce(function(e,t){var r=t.split(":"),n=r.shift();if(r=r.map(function(e){try{return JSON.parse(e)}catch(t){return e}}),r.length>1)throw new Error("Formsy does not support multiple args on string validations. Use object format of validations instead.");var i=Object.assign({},e);return i[n]=!r.length||r[0],i},{}):e||{}},m={innerRef:f.default.func,name:f.default.string.isRequired,required:f.default.bool,validations:f.default.oneOfType([f.default.object,f.default.string]),value:f.default.oneOfType([f.default.bool,f.default.string])};t.propTypes=m,t.default=function(e){var t=function(t){function r(e){i(this,r);var t=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={value:e.value,isRequired:!1,isValid:!0,isPristine:!0,pristineValue:e.value,validationError:[],externalError:null,formSubmitted:!1},t.getErrorMessage=t.getErrorMessage.bind(t),t.getErrorMessages=t.getErrorMessages.bind(t),t.getValue=t.getValue.bind(t),t.isFormDisabled=t.isFormDisabled.bind(t),t.isPristine=t.isPristine.bind(t),t.isRequired=t.isRequired.bind(t),t.isValid=t.isValid.bind(t),t.resetValue=t.resetValue.bind(t),t.setValue=t.setValue.bind(t),t.showRequired=t.showRequired.bind(t),t}return s(r,t),u(r,[{key:"componentWillMount",value:function(){var e=this;if(!this.props.name)throw new Error("Form Input requires a name property when used");!function(){e.setValidations(e.props.validations,e.props.required),e.context.formsy.attachToForm(e)}()}},{key:"componentWillReceiveProps",value:function(e){this.setValidations(e.validations,e.required)}},{key:"componentDidUpdate",value:function(e){h.default.isSame(this.props.value,e.value)||this.setValue(this.props.value),h.default.isSame(this.props.validations,e.validations)&&h.default.isSame(this.props.required,e.required)||this.context.formsy.validate(this)}},{key:"componentWillUnmount",value:function(){this.context.formsy.detachFromForm(this)}},{key:"getErrorMessage",value:function(){var e=this.getErrorMessages();return e.length?e[0]:null}},{key:"getErrorMessages",value:function(){return!this.isValid()||this.showRequired()?this.state.externalError||this.state.validationError||[]:[]}},{key:"getValue",value:function(){return this.state.value}},{key:"hasValue",value:function(){return""!==this.state.value}},{key:"isFormDisabled",value:function(){return this.context.formsy.isFormDisabled()}},{key:"isFormSubmitted",value:function(){return this.state.formSubmitted}},{key:"isPristine",value:function(){return this.state.isPristine}},{key:"isRequired",value:function(){return!!this.props.required}},{key:"isValid",value:function(){return this.state.isValid}},{key:"isValidValue",value:function(e){return this.context.formsy.isValidValue.call(null,this,e)}},{key:"resetValue",value:function(){var e=this;this.setState({value:this.state.pristineValue,isPristine:!0},function(){e.context.formsy.validate(e)})}},{key:"setValidations",value:function(e,t){this.validations=v(e)||{},this.requiredValidations=!0===t?{isDefaultRequiredValue:!0}:v(t)}},{key:"setValue",value:function(e){var t=this;arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?this.setState({value:e}):this.setState({value:e,isPristine:!1},function(){t.context.formsy.validate(t)})}},{key:"showError",value:function(){return!this.showRequired()&&!this.isValid()}},{key:"showRequired",value:function(){return this.state.isRequired}},{key:"render",value:function(){var t=this.props.innerRef,r=a({getErrorMessage:this.getErrorMessage,getErrorMessages:this.getErrorMessages,getValue:this.getValue,hasValue:this.hasValue,isFormDisabled:this.isFormDisabled,isValid:this.isValid,isPristine:this.isPristine,isFormSubmitted:this.isFormSubmitted,isRequired:this.isRequired,isValidValue:this.isValidValue,resetValue:this.resetValue,setValidations:this.setValidations,setValue:this.setValue,showRequired:this.showRequired,showError:this.showError},this.props);return t&&(r.ref=t),c.default.createElement(e,r)}}]),r}(c.default.Component);return t.displayName="Formsy("+function(e){return e.displayName||e.name||("string"==typeof e?e:"Component")}(e)+")",t.contextTypes={formsy:f.default.object},t.defaultProps={innerRef:function(){},required:!1,validationError:"",validationErrors:{},validations:null,value:e.defaultValue},t.propTypes=m,t}}])});
//# sourceMappingURL=formsy-react.js.map