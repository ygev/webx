(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1YZC":function(e,t,n){"use strict";n("V+eJ"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.getUnhandledProps=function(e,t){var n=Object.keys(e);return Object.keys(t).reduce((function(e,i){return-1===n.indexOf(i)&&(e[i]=t[i]),e}),{})}},"8oxB":function(e,t){var n,i,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var u,l=[],c=!1,d=-1;function h(){c&&u&&(c=!1,u.length?l=u.concat(l):d=-1,l.length&&p())}function p(){if(!c){var e=s(h);c=!0;for(var t=l.length;t;){for(u=l,l=[];++d<t;)u&&u[d].run();d=-1,t=l.length}u=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||c||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},Amf5:function(e,t,n){"use strict";n("bWfx"),n("8+KV"),n("2Spj"),n("hHhE"),n("/SS/"),n("rE2o"),n("ioFf"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n("q1tI")),r=s(n("IrXD")),a=s(n("17x9")),o=n("1YZC");function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n("jeKP");var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}(this,c(t).call(this,e))).state={index:e.defaultIndex&&e.defaultIndex<e.children.length?e.defaultIndex:0},n.width=0,n.imageContainer=null,n.wrapper=null,n.timeout=null,n.moveSlides=n.moveSlides.bind(d(n)),n.pauseSlides=n.pauseSlides.bind(d(n)),n.startSlides=n.startSlides.bind(d(n)),n.resizeListener=n.resizeListener.bind(d(n)),n.goToSlide=n.goToSlide.bind(d(n)),n.tweenGroup=new r.default.Group,n}var n,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;this.setWidth(),window.addEventListener("resize",this.resizeListener);var t=this.props,n=t.autoplay,i=t.duration;n&&(this.timeout=setTimeout((function(){return e.goNext()}),i))}},{key:"componentWillUnmount",value:function(){this.willUnmount=!0,clearTimeout(this.timeout),window.removeEventListener("resize",this.resizeListener)}},{key:"setWidth",value:function(){this.allImages=Array.prototype.slice.call(this.wrapper.querySelectorAll(".images-wrap > div"),0),this.width=this.wrapper.clientWidth;var e=this.width*(this.props.children.length+2);this.imageContainer.style.width="".concat(e,"px"),this.imageContainer.style.transform="translate(-".concat(this.width*(this.state.index+1),"px)"),this.applySlideStyle()}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.autoplay!==e.autoplay&&(this.props.autoplay?this.timeout=setTimeout((function(){return t.goNext()}),this.props.duration):clearTimeout(this.timeout)),this.props.children.length!=e.children.length&&this.setWidth()}},{key:"resizeListener",value:function(){this.setWidth()}},{key:"applySlideStyle",value:function(){var e=this;this.allImages.forEach((function(t,n){t.style.width="".concat(e.width,"px")}))}},{key:"pauseSlides",value:function(){this.props.pauseOnHover&&clearTimeout(this.timeout)}},{key:"startSlides",value:function(){var e=this,t=this.props,n=t.pauseOnHover,i=t.autoplay;n&&i&&(this.timeout=setTimeout((function(){return e.goNext()}),this.props.duration))}},{key:"moveSlides",value:function(e){"next"===e.currentTarget.dataset.type?this.goNext():this.goBack()}},{key:"goToSlide",value:function(e){var t=e.target;this.goTo(parseInt(t.dataset.key))}},{key:"goTo",value:function(e){this.slideImages(e)}},{key:"goNext",value:function(){var e=this.state.index,t=this.props,n=t.children;(t.infinite||e!==n.length-1)&&this.slideImages(e+1)}},{key:"goBack",value:function(){var e=this.state.index;(this.props.infinite||0!==e)&&this.slideImages(e-1)}},{key:"render",value:function(){var e=this,n=this.props,r=n.children,a=n.infinite,s=n.indicators,u=n.arrows,l=(0,o.getUnhandledProps)(t.propTypes,this.props),c=this.state.index,d={transform:"translate(-".concat((c+1)*this.width,"px)")};return i.default.createElement("div",l,i.default.createElement("div",{className:"react-slideshow-container",onMouseEnter:this.pauseSlides,onMouseLeave:this.startSlides},u&&i.default.createElement("div",{className:"nav ".concat(c<=0&&!a?"disabled":""),"data-type":"prev",onClick:this.moveSlides},i.default.createElement("span",null)),i.default.createElement("div",{className:"react-slideshow-wrapper slide",ref:function(t){return e.wrapper=t}},i.default.createElement("div",{className:"images-wrap",style:d,ref:function(t){return e.imageContainer=t}},i.default.createElement("div",{"data-index":"-1"},r[r.length-1]),r.map((function(e,t){return i.default.createElement("div",{"data-index":t,key:t,className:t===c?"active":""},e)})),i.default.createElement("div",{"data-index":"-1"},r[0]))),u&&i.default.createElement("div",{className:"nav ".concat(c!==r.length-1||a?"":"disabled"),"data-type":"next",onClick:this.moveSlides},i.default.createElement("span",null))),s&&i.default.createElement("div",{className:"indicators"},r.map((function(t,n){return i.default.createElement("div",{key:n,"data-key":n,className:c===n?"active":"",onClick:e.goToSlide})}))))}},{key:"slideImages",value:function(e){var t=this,n=this.props,i=n.children,a=n.transitionDuration,o=n.autoplay,s=n.infinite,u=n.duration,l=n.onChange;if(!this.tweenGroup.getAll().length){clearTimeout(this.timeout);var c={margin:-this.width*(this.state.index+1)},d=new r.default.Tween(c,this.tweenGroup).to({margin:-this.width*(e+1)},a).onUpdate((function(e){t.imageContainer.style.transform="translate(".concat(e.margin,"px)")})).start();!function e(){t.willUnmount?t.tweenGroup.removeAll():(requestAnimationFrame(e),t.tweenGroup.update())}(),d.onComplete((function(){var n=e<0?i.length-1:e>=i.length?0:e;t.willUnmount||("function"==typeof l&&l(t.state.index,n),t.setState({index:n},(function(){o&&(s||t.state.index<i.length)&&(t.timeout=setTimeout((function(){return t.goNext()}),u))})))}))}}}])&&l(n.prototype,a),s&&l(n,s),t}(i.Component);p.defaultProps={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!1},p.propTypes={duration:a.default.number,transitionDuration:a.default.number,defaultIndex:a.default.number,infinite:a.default.bool,indicators:a.default.bool,autoplay:a.default.bool,arrows:a.default.bool,onChange:a.default.func,pauseOnHover:a.default.bool};var f=p;t.default=f},AqG9:function(e,t,n){},"BMj+":function(e,t,n){"use strict";n("bWfx"),n("2Spj"),n("hHhE"),n("/SS/"),n("rE2o"),n("ioFf"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n("q1tI")),r=s(n("17x9")),a=s(n("IrXD")),o=n("1YZC");function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n("dxhT");var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}(this,c(t).call(this,e))).state={index:e.defaultIndex&&e.defaultIndex<e.children.length?e.defaultIndex:0},n.width=0,n.timeout=null,n.divsContainer=null,n.wrapper=null,n.setWidth=n.setWidth.bind(d(n)),n.resizeListener=n.resizeListener.bind(d(n)),n.navigate=n.navigate.bind(d(n)),n.preZoom=n.preZoom.bind(d(n)),n.pauseSlides=n.pauseSlides.bind(d(n)),n.startSlides=n.startSlides.bind(d(n)),n.tweenGroup=new a.default.Group,n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeListener),this.setWidth(),this.play()}},{key:"play",value:function(){var e=this,t=this.props,n=t.autoplay,i=t.children,r=this.state.index;n&&i.length>1&&(clearTimeout(this.timeout),this.timeout=setTimeout((function(){return e.zoomTo(r+1)}),this.props.duration))}},{key:"componentWillUnmount",value:function(){this.willUnmount=!0,clearTimeout(this.timeout),window.removeEventListener("resize",this.resizeListener)}},{key:"componentDidUpdate",value:function(e){this.props.autoplay!==e.autoplay&&(this.props.autoplay?this.play():clearTimeout(this.timeout)),this.props.children.length!=e.children.length&&(this.applyStyle(),this.play())}},{key:"setWidth",value:function(){this.width=this.wrapper.clientWidth,this.applyStyle()}},{key:"resizeListener",value:function(){this.setWidth()}},{key:"applyStyle",value:function(){var e=this.width*this.props.children.length;this.divsContainer.style.width="".concat(e,"px");for(var t=0;t<this.divsContainer.children.length;t++){var n=this.divsContainer.children[t];n&&(n.style.width="".concat(this.width,"px"),n.style.left="".concat(t*-this.width,"px"))}}},{key:"pauseSlides",value:function(){this.props.pauseOnHover&&clearTimeout(this.timeout)}},{key:"startSlides",value:function(){var e=this,t=this.props,n=t.pauseOnHover,i=t.autoplay;n&&i&&(this.timeout=setTimeout((function(){return e.goNext()}),this.props.duration))}},{key:"goNext",value:function(){var e=this.state.index,t=this.props,n=t.children;(t.infinite||e!==n.length-1)&&this.zoomTo((e+1)%n.length)}},{key:"goBack",value:function(){var e=this.state.index,t=this.props,n=t.children;(t.infinite||0!==e)&&this.zoomTo(0===e?n.length-1:e-1)}},{key:"goTo",value:function(e){this.zoomTo(e)}},{key:"navigate",value:function(e){var t=e.target.dataset;t.key!=this.state.index&&this.goTo(parseInt(t.key))}},{key:"preZoom",value:function(e){"prev"===e.currentTarget.dataset.type?this.goBack():this.goNext()}},{key:"render",value:function(){var e=this,n=this.props,r=n.indicators,a=n.arrows,s=n.infinite,u=n.children,l=this.state.index,c=(0,o.getUnhandledProps)(t.propTypes,this.props);return i.default.createElement("div",c,i.default.createElement("div",{className:"react-slideshow-container",onMouseEnter:this.pauseSlides,onMouseLeave:this.startSlides},a&&i.default.createElement("div",{className:"nav ".concat(l<=0&&!s?"disabled":""),"data-type":"prev",onClick:this.preZoom},i.default.createElement("span",null)),i.default.createElement("div",{className:"react-slideshow-zoom-wrapper",ref:function(t){return e.wrapper=t}},i.default.createElement("div",{className:"zoom-wrapper",ref:function(t){return e.divsContainer=t}},u.map((function(e,t){return i.default.createElement("div",{style:{opacity:t===l?"1":"0",zIndex:t===l?"1":"0"},"data-index":t,key:t},e)})))),a&&i.default.createElement("div",{className:"nav ".concat(l!==u.length-1||s?"":"disabled"),"data-type":"next",onClick:this.preZoom},i.default.createElement("span",null))),r&&i.default.createElement("div",{className:"indicators"},u.map((function(t,n){return i.default.createElement("div",{key:n,"data-key":n,className:l===n?"active":"",onClick:e.navigate})}))))}},{key:"zoomTo",value:function(e){var t=this,n=this.state.index,i=this.props,r=i.children,o=i.scale,s=i.autoplay,u=i.infinite,l=i.transitionDuration,c=i.duration,d=i.onChange;this.tweenGroup.getAll().length||(this.divsContainer.children[e]||(e=0),clearTimeout(this.timeout),function e(){t.willUnmount?t.tweenGroup.removeAll():(requestAnimationFrame(e),t.tweenGroup.update())}(),new a.default.Tween({opacity:0,scale:1},this.tweenGroup).to({opacity:1,scale:o},l).onUpdate((function(i){t.divsContainer.children[e].style.opacity=i.opacity,t.divsContainer.children[n].style.opacity=1-i.opacity,t.divsContainer.children[n].style.transform="scale(".concat(i.scale,")")})).start().onComplete((function(){t.willUnmount||("function"==typeof d&&d(n,e),t.setState({index:e},(function(){t.divsContainer.children[n].style.transform="scale(1)"})),s&&(u||e<r.length-1)&&(clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.zoomTo((e+1)%r.length)}),c)))})))}}])&&l(n.prototype,r),s&&l(n,s),t}(i.Component);p.defaultProps={duration:5e3,transitionDuration:1e3,defaultIndex:0,indicators:!1,arrows:!0,autoplay:!0,infinite:!0,pauseOnHover:!1},p.propTypes={duration:r.default.number,transitionDuration:r.default.number,defaultIndex:r.default.number,indicators:r.default.bool,scale:r.default.number.isRequired,arrows:r.default.bool,autoplay:r.default.bool,infinite:r.default.bool,onChange:r.default.func,pauseOnHover:r.default.bool};var f=p;t.default=f},Clcs:function(e,t,n){},GhMY:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),a=n("Eg6Q"),o=n("jUOO"),s=(n("Wbzz"),n("8k0H")),u=(n("93Eu"),n("km63"),n("+m0d"),n("Clcs"),n("/eHF"),n("m6L1")),l=["https://via.placeholder.com/1500/11EDD3/000.png","https://via.placeholder.com/1500x1200/11EDD3/000.png","https://via.placeholder.com/1200x1500/11EDD3/000.png"],c={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0},d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"projectContent--wrapper"},r.a.createElement(u.Slide,c,r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url("+l[0]+")"}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url("+l[1]+")"}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url("+l[2]+")"}}))),r.a.createElement("section",{className:"project__text--wrapper"},r.a.createElement(s.a,{rows:[1,1,1]},r.a.createElement("h4",{className:"project__label project__label--outcome project__label--active"},"Outcome"),r.a.createElement("h4",{className:"project__label project__label--process project__label--inactive"},"Process")),r.a.createElement("div",{className:"project__text--scroller"},r.a.createElement("p",{className:"project__text project__text--outcome"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat elit, consequat habitasse convallis. Tempus vitae ac, nulla sed massa, tempor. Velit maecenas tortor quis consequat elementum commodo et. Nulla egestas non sagittis, aliquam. Mauris, tincidunt nulla ut arcu egestas suspendisse ipsum, ornare mattis. Placerat pharetra, viverra habitant fringilla nec odio maecenas lectus faucibus. Facilisis sem mauris, ullamcorper senectus. Sed quisque pulvinar id tortor, euismod. Sapien arcu nisi tristique pharetra in. Pretium posuere sem faucibus adipiscing enim nulla velit se ipsum, ornare  enim, mae. Leo aliquet nullam duis pretium enim, maecenas scelerisque eget. Ac faucibus vivamus dolor varius vestibulum donec nec id cursus. A non tristique lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat elit, consequat habitasse convallis. Tempus vitae ac, nulla sed massa, tempor. Velit maecenas tortor quis consequat elementum commodo et. Nulla egestas non sagittis, aliquam. Mauris, tincidunt nulla ut arcu egestas suspendisse ipsum, ornare mattis. Placerat pharetra, viverra habitant fringilla nec odio maecenas lectus faucibus. Facilisis sem mauris, ullamcorper senectus. Sed quisque pulvinar id tortor, euismod. Sapien arcu nisi tristique pharetra in. Pretium posuere sem faucibus adipiscing enim nulla velit se ipsum, ornare  enim, mae. Leo aliquet nullam duis pretium enim, maecenas scelerisque eget. Ac faucibus vivamus dolor varius vestibulum donec nec id cursus. A non tristique lorem.")))))},h=(n("+CgC"),n("5esm"),n("WnmQ"),n("mVm4"),n("N087")),p=n("fItr");t.default=function(e){var t=e.pageContext;return r.a.createElement("div",null,r.a.createElement(a.a,null),r.a.createElement(o.a,{projectName:t.projectName,studentName:t.firstName+" "+t.lastName,studentWebsite:t.website,studentInstagram:t.instagram,projectCoverImg:n("X/re")("./"+t.email+"/ProjectCoverImage/cover.png")}),r.a.createElement(d,null),r.a.createElement(h.a,null),r.a.createElement(p.a,null))}},IrXD:function(e,t,n){"use strict";n.r(t),function(e){n("hHhE"),n("eM6i"),n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var i=function(){this._tweens={},this._tweensAddedDuringUpdate={}};i.prototype={getAll:function(){return Object.keys(this._tweens).map(function(e){return this._tweens[e]}.bind(this))},removeAll:function(){this._tweens={}},add:function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},remove:function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},update:function(e,t){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(e=void 0!==e?e:a.now();n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]];r&&!1===r.update(e)&&(r._isPlaying=!1,t||delete this._tweens[n[i]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var r,a=new i;a.Group=i,a._nextId=0,a.nextId=function(){return a._nextId++},"undefined"==typeof self&&void 0!==e&&e.hrtime?a.now=function(){var t=e.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?a.now=self.performance.now.bind(self.performance):void 0!==Date.now?a.now=Date.now:a.now=function(){return(new Date).getTime()},a.Tween=function(e,t){this._isPaused=!1,this._pauseStart=null,this._object=e,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=a.Easing.Linear.None,this._interpolationFunction=a.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onRepeatCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||a,this._id=a.nextId()},a.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},isPaused:function(){return this._isPaused},to:function(e,t){return this._valuesEnd=Object.create(e),void 0!==t&&(this._duration=t),this},duration:function(e){return this._duration=e,this},start:function(e){for(var t in this._group.add(this),this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._startTime=void 0!==e?"string"==typeof e?a.now()+parseFloat(e):e:a.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[t]instanceof Array){if(0===this._valuesEnd[t].length)continue;this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}void 0!==this._object[t]&&(void 0===this._valuesStart[t]&&(this._valuesStart[t]=this._object[t]),this._valuesStart[t]instanceof Array==!1&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(1/0),this},pause:function(e){return this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=void 0===e?a.now():e,this._group.remove(this)),this},resume:function(e){return this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=(void 0===e?a.now():e)-this._pauseStart,this._pauseStart=0,this._group.add(this),this):this},stopChainedTweens:function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop()},group:function(e){return this._group=e,this},delay:function(e){return this._delayTime=e,this},repeat:function(e){return this._repeat=e,this},repeatDelay:function(e){return this._repeatDelayTime=e,this},yoyo:function(e){return this._yoyo=e,this},easing:function(e){return this._easingFunction=e,this},interpolation:function(e){return this._interpolationFunction=e,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(e){return this._onStartCallback=e,this},onUpdate:function(e){return this._onUpdateCallback=e,this},onRepeat:function(e){return this._onRepeatCallback=e,this},onComplete:function(e){return this._onCompleteCallback=e,this},onStop:function(e){return this._onStopCallback=e,this},update:function(e){var t,n,i;if(e<this._startTime)return!0;for(t in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=0===this._duration||n>1?1:n,i=this._easingFunction(n),this._valuesEnd)if(void 0!==this._valuesStart[t]){var r=this._valuesStart[t]||0,a=this._valuesEnd[t];a instanceof Array?this._object[t]=this._interpolationFunction(a,i):("string"==typeof a&&(a="+"===a.charAt(0)||"-"===a.charAt(0)?r+parseFloat(a):parseFloat(a)),"number"==typeof a&&(this._object[t]=r+(a-r)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object,n),1===n){if(this._repeat>0){for(t in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[t]&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var o=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=o}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,null!==this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,u=this._chainedTweens.length;s<u;s++)this._chainedTweens[s].start(this._startTime+this._duration);return!1}return!0}},a.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return 0===e?0:Math.pow(1024,e-1)},Out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return 0===e?0:1===e?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}},Back:{In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)}},Bounce:{In:function(e){return 1-a.Easing.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*a.Easing.Bounce.In(2*e):.5*a.Easing.Bounce.Out(2*e-1)+.5}}},a.Interpolation={Linear:function(e,t){var n=e.length-1,i=n*t,r=Math.floor(i),o=a.Interpolation.Utils.Linear;return t<0?o(e[0],e[1],i):t>1?o(e[n],e[n-1],n-i):o(e[r],e[r+1>n?n:r+1],i-r)},Bezier:function(e,t){for(var n=0,i=e.length-1,r=Math.pow,o=a.Interpolation.Utils.Bernstein,s=0;s<=i;s++)n+=r(1-t,i-s)*r(t,s)*e[s]*o(i,s);return n},CatmullRom:function(e,t){var n=e.length-1,i=n*t,r=Math.floor(i),o=a.Interpolation.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(r=Math.floor(i=n*(1+t))),o(e[(r-1+n)%n],e[r],e[(r+1)%n],e[(r+2)%n],i-r)):t<0?e[0]-(o(e[0],e[0],e[1],e[1],-i)-e[0]):t>1?e[n]-(o(e[n],e[n],e[n-1],e[n-1],i-n)-e[n]):o(e[r?r-1:0],e[r],e[n<r+1?n:r+1],e[n<r+2?n:r+2],i-r)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=a.Interpolation.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:(r=[1],function(e){var t=1;if(r[e])return r[e];for(var n=e;n>1;n--)t*=n;return r[e]=t,t}),CatmullRom:function(e,t,n,i,r){var a=.5*(n-e),o=.5*(i-t),s=r*r;return(2*t-2*n+a+o)*(r*s)+(-3*t+3*n-2*a-o)*s+a*r+t}}},a.version="18.5.0",t.default=a}.call(this,n("8oxB"))},"X/re":function(e,t,n){var i={"./ayeh01@mica.edu/ProjectCoverImage/cover.png":"9fsx","./bhorne@mica.edu/ProjectCoverImage/cover.png":"npZ3","./hclark03@mica.edu/ProjectCoverImage/cover.png":"P8dI","./kbradley@mica.edu/ProjectCoverImage/cover.png":"5/Rf","./lukashenko@mica.edu/ProjectCoverImage/cover.png":"fi/P","./ygevorgyan@mica.edu/ProjectCoverImage/cover.png":"l3Ow"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id="X/re"},dxhT:function(e,t,n){},e2RR:function(e,t,n){"use strict";n("bWfx"),n("2Spj"),n("hHhE"),n("/SS/"),n("rE2o"),n("ioFf"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n("q1tI")),r=s(n("17x9")),a=s(n("IrXD")),o=n("1YZC");function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n("AqG9");var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}(this,c(t).call(this,e))).state={index:e.defaultIndex&&e.defaultIndex<e.children.length?e.defaultIndex:0},n.width=0,n.timeout=null,n.divsContainer=null,n.wrapper=null,n.setWidth=n.setWidth.bind(d(n)),n.resizeListener=n.resizeListener.bind(d(n)),n.navigate=n.navigate.bind(d(n)),n.preFade=n.preFade.bind(d(n)),n.pauseSlides=n.pauseSlides.bind(d(n)),n.startSlides=n.startSlides.bind(d(n)),n.tweenGroup=new a.default.Group,n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeListener),this.setWidth(),this.play()}},{key:"play",value:function(){var e=this,t=this.props,n=t.autoplay,i=t.children,r=this.state.index;n&&i.length>1&&(clearTimeout(this.timeout),this.timeout=setTimeout((function(){return e.fadeImages(r+1)}),this.props.duration))}},{key:"componentDidUpdate",value:function(e){this.props.autoplay!==e.autoplay&&(this.props.autoplay?this.play():clearTimeout(this.timeout)),this.props.children.length!=e.children.length&&(this.applyStyle(),this.play())}},{key:"componentWillUnmount",value:function(){this.willUnmount=!0,clearTimeout(this.timeout),window.removeEventListener("resize",this.resizeListener)}},{key:"setWidth",value:function(){this.width=this.wrapper.clientWidth,this.applyStyle()}},{key:"resizeListener",value:function(){this.setWidth()}},{key:"applyStyle",value:function(){var e=this.width*this.props.children.length;this.divsContainer.style.width="".concat(e,"px");for(var t=0;t<this.divsContainer.children.length;t++){var n=this.divsContainer.children[t];n&&(n.style.width="".concat(this.width,"px"),n.style.left="".concat(t*-this.width,"px"))}}},{key:"pauseSlides",value:function(){this.props.pauseOnHover&&clearTimeout(this.timeout)}},{key:"startSlides",value:function(){var e=this,t=this.props,n=t.pauseOnHover,i=t.autoplay;n&&i&&(this.timeout=setTimeout((function(){return e.goNext()}),this.props.duration))}},{key:"goNext",value:function(){var e=this.state.index,t=this.props,n=t.children;(t.infinite||e!==n.length-1)&&this.fadeImages((e+1)%n.length)}},{key:"goBack",value:function(){var e=this.state.index,t=this.props,n=t.children;(t.infinite||0!==e)&&this.fadeImages(0===e?n.length-1:e-1)}},{key:"navigate",value:function(e){var t=e.target.dataset;t.key!=this.state.index&&this.goTo(parseInt(t.key))}},{key:"goTo",value:function(e){this.fadeImages(e)}},{key:"preFade",value:function(e){"prev"===e.currentTarget.dataset.type?this.goBack():this.goNext()}},{key:"render",value:function(){var e=this,n=this.props,r=n.indicators,a=n.arrows,s=n.infinite,u=n.children,l=this.state.index,c=(0,o.getUnhandledProps)(t.propTypes,this.props);return i.default.createElement("div",c,i.default.createElement("div",{className:"react-slideshow-container",onMouseEnter:this.pauseSlides,onMouseLeave:this.startSlides},a&&i.default.createElement("div",{className:"nav ".concat(l<=0&&!s?"disabled":""),"data-type":"prev",onClick:this.preFade},i.default.createElement("span",null)),i.default.createElement("div",{className:"react-slideshow-fade-wrapper",ref:function(t){return e.wrapper=t}},i.default.createElement("div",{className:"react-slideshow-fade-images-wrap",ref:function(t){return e.divsContainer=t}},u.map((function(e,t){return i.default.createElement("div",{style:{opacity:t===l?"1":"0",zIndex:t===l?"1":"0"},"data-index":t,key:t},e)})))),a&&i.default.createElement("div",{className:"nav ".concat(l!==u.length-1||s?"":"disabled"),"data-type":"next",onClick:this.preFade},i.default.createElement("span",null))),r&&i.default.createElement("div",{className:"indicators"},u.map((function(t,n){return i.default.createElement("div",{key:n,"data-key":n,className:l===n?"active":"",onClick:e.navigate})}))))}},{key:"fadeImages",value:function(e){var t=this,n=this.state.index,i=this.props,r=i.autoplay,o=i.children,s=i.infinite,u=i.duration,l=i.transitionDuration,c=i.onChange;this.tweenGroup.getAll().length||(this.divsContainer.children[e]||(e=0),clearTimeout(this.timeout),function e(){t.willUnmount?t.tweenGroup.removeAll():(requestAnimationFrame(e),t.tweenGroup.update())}(),new a.default.Tween({opacity:0},this.tweenGroup).to({opacity:1},l).onUpdate((function(i){t.divsContainer.children[e].style.opacity=i.opacity,t.divsContainer.children[n].style.opacity=1-i.opacity})).start().onComplete((function(){t.willUnmount||(t.setState({index:e}),"function"==typeof c&&c(n,e),r&&(s||e<o.length-1)&&(clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.fadeImages((e+1)%o.length)}),u)))})))}}])&&l(n.prototype,r),s&&l(n,s),t}(i.Component);p.defaultProps={duration:5e3,transitionDuration:1e3,defaultIndex:0,indicators:!1,arrows:!0,autoplay:!0,infinite:!0,pauseOnHover:!1},p.propTypes={duration:r.default.number,transitionDuration:r.default.number,defaultIndex:r.default.number,indicators:r.default.bool,arrows:r.default.bool,autoplay:r.default.bool,infinite:r.default.bool,onChange:r.default.func,pauseOnHover:r.default.bool};var f=p;t.default=f},jeKP:function(e,t,n){},jv0P:function(e,t,n){},m6L1:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Slide",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Fade",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Zoom",{enumerable:!0,get:function(){return a.default}}),n("jv0P");var i=o(n("Amf5")),r=o(n("e2RR")),a=o(n("BMj+"));function o(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=component---src-templates-project-js-3f5b0748eac3ccaf4c1f.js.map