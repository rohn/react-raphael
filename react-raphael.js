!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Raphael"),require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["Raphael","React","ReactDOM"],t):"object"==typeof exports?exports["react-raphael"]=t(require("Raphael"),require("React"),require("ReactDOM")):e["react-raphael"]=t(e.Raphael,e.React,e.ReactDOM)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(3),o=r.Paper,a=r.Set,i=r.Circle,c=r.Ellipse,l=r.Image,s=r.Path,u=r.Rect,p=r.Text;t.Raphael=n(2),t.Utils=n(1),t.Paper=o,t.Set=a,t.Circle=i,t.Ellipse=c,t.Image=l,t.Path=s,t.Rect=u,t.Text=p},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(2),a={createPaper:function(e,t){var n=t.width,r=t.height,i=o(e,n,r);return a.paper=i,i},create:function(e,t){var n=null;switch(e){case"set":n=a.paper.set();break;case"circle":var o=t.x,i=t.y,c=t.r;n=a.paper.circle(o,i,c);break;case"ellipse":var o=t.x,i=t.y,l=t.rx,s=t.ry;n=a.paper.ellipse(o,i,l,s);break;case"image":var u=t.src,o=t.x,i=t.y,p=t.width,m=t.height;n=a.paper.image(u,o,i,p,m);break;case"path":var f=t.d;n=a.paper.path(f);break;case"rect":var o=t.x,i=t.y,p=t.width,m=t.height,c=t.r;n=a.paper.rect(o,i,p,m,c);break;case"text":var o=t.x,i=t.y,h=t.text;n=a.paper.text(o,i,h)}if(n)for(var y in t)switch(y){case"attr":"object"===r(t[y])&&n.attr(t.attr);break;case"animate":"object"===r(t[y])&&n.animate(t.animate);break;case"animateWith":"object"===r(t[y])&&n.animateWith(t.animateWith);break;case"click":"function"==typeof t[y]&&n.click(t.click);break;case"dblclick":"function"==typeof t[y]&&n.dblclick(t.dblclick);break;case"drag":"function"==typeof t[y]&&n.drag(t.drag);break;case"glow":"function"==typeof t[y]&&n.click(t.click);break;case"hover":"function"==typeof t[y]&&n.dblclick(t.dblclick);break;case"hide":"boolean"==typeof t[y]&&(t.hide?n.hide():n.show());break;case"mousedown":"function"==typeof t[y]&&n.mousedown(t.mousedown);break;case"mousemove":"function"==typeof t[y]&&n.mousemove(t.mousemove);break;case"mouseout":"function"==typeof t[y]&&n.mouseout(t.mouseout);break;case"mouseover":"function"==typeof t[y]&&n.mouseover(t.mouseover);break;case"mouseup":"function"==typeof t[y]&&t.mouseup(n.mouseup);break;case"rotate":"rotate"==typeof t[y]&&n.rotate(t.attr);break;case"scale":"scale"==typeof t[y]&&n.scale(t.animate);break;case"touchcancel":"function"==typeof t[y]&&n.touchcancel(t.touchcancel);break;case"touchend":"function"==typeof t[y]&&n.touchend(t.touchend);break;case"touchmove":"function"==typeof t[y]&&t.touchmove(n.touchmove);break;case"touchstart":"function"==typeof t[y]&&t.touchstart(n.touchstart);break;case"transform":"object"!==r(t[y])&&"array"!=typeof t[y]||t.transform(n.transform);break;case"translate":"object"===r(t[y])&&t.translate(n.translate)}return n},createElement:function(e,t,n){var r=a.create(e,t);return a.elements.push({type:e,props:t,callback:n,element:r}),n&&n(r),r},createSet:function(e){var t=a.create("set",e);return a.elements.push({type:"set",element:t}),t},removeSet:function(e){var t=a.elements.filter(function(t){return t===e});t.length>0&&t[0].remove()},removeElement:function(e){var t=a.elements.filter(function(t){return t===e});t.length>0&&t[0].remove()},paper:null,elements:[]};e.exports=a},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=n(5),s=n(1),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loading:!1},n}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=l.findDOMNode(this.refs.container),t=s.createPaper(e,this.props);this.paper=t,this.setState({loading:!0})}},{key:"componentWillUnmount",value:function(){this.paper.remove()}},{key:"genElementsContainer",value:function(){return this.state.loading?c.createElement("div",{className:"elements-container"},this.props.children):c.createElement("div",{className:"elements-container"})}},{key:"getPaper",value:function(){return this.paper}},{key:"render",value:function(){var e=this.genElementsContainer();return c.createElement("div",{className:"react-raphael"},e,c.createElement("div",{ref:"container",className:"paper-container"}))}}]),t}(c.Component),p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.elements=[],n.state={loading:!1},n}return a(t,e),i(t,[{key:"componentWillMount",value:function(){this.onCreatedElement=this.onCreatedElement.bind(this),this.elements=[];var e=this.props.children||[],t=e instanceof Array;t||(e=[e]);for(var n=0;n<e.length;n++){var r=e[n],o={};for(var a in r.props)o[a]=r.props[a];o.onCreatedElement=this.onCreatedElement,o.key=n,this.elements.push(c.createElement(r.type,o,null))}}},{key:"componentWillUpdate",value:function(){this.elements=[];var e=this.props.children||[],t=e instanceof Array;t||(e=[e]);for(var n=0;n<e.length;n++){var r=e[n],o={};for(var a in r.props)o[a]=r.props[a];o.onCreatedElement=this.onCreatedElement,o.key=n,this.elements.push(c.createElement(r.type,o,null))}}},{key:"componentDidMount",value:function(){var e=s.createSet(this.props);this.set=e,this.setState({loading:!0})}},{key:"componentWillUnmout",value:function(){s.removeSet(this.set)}},{key:"onCreatedElement",value:function(e){this.set.push(e)}},{key:"getSet",value:function(){return this.set}},{key:"render",value:function(){return this.state.loading?c.createElement("div",{className:"raphael-set"},this.elements):c.createElement("div",{className:"raphael-set"})}}]),t}(c.Component),m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=s.createElement("circle",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){s.removeElement(this.element)}},{key:"render",value:function(){return c.createElement("div",{className:"raphael-circle"})}}]),t}(c.Component),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=s.createElement("ellipse",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){s.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return c.createElement("div",{className:"raphael-ellipse"})}}]),t}(c.Component),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=s.createElement("image",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){s.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return c.createElement("div",{className:"raphael-image"})}}]),t}(c.Component),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=s.createElement("path",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){s.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return c.createElement("div",{className:"raphael-path"})}}]),t}(c.Component),v=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=s.createElement("rect",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){s.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return c.createElement("div",{className:"raphael-rect"})}}]),t}(c.Component),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=s.createElement("text",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){s.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return c.createElement("div",{className:"raphael-text"})}}]),t}(c.Component);e.exports={Paper:u,Set:p,Circle:m,Ellipse:f,Image:h,Path:y,Rect:v,Text:d}},function(e,n){e.exports=t},function(e,t){e.exports=n}])});