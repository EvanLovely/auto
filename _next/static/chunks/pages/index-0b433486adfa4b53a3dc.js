_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[83],{"0oBi":function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=l.default.useState(!1),t=(0,n.default)(e,2),a=t[0],r=t[1];return(0,o.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){r(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var n=r(a("nxTg")),l=r(a("mXGw")),o=r(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("RiSW")),l=r(a("mXGw")),o=r(a("pWCa")),s=a("I08b"),i=a("GDok"),u=a("nZpd"),c=a("AFBu"),m=a("0oBi"),f=function(e){var t=e.children,a=(0,n.default)(e,["children"]),r=l.default.useState(!1);l.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var f=(0,m.useDarkMode)();return l.default.createElement(u.MobileMenuContext.Provider,{value:a.menuState||r},l.default.createElement(o.default,null,l.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,c.formatPath)(f?"favicon-dark.png":"favicon.png")})),l.default.createElement(s.SkipNavLink,null),l.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},l.default.createElement(i.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),t))};t.default=f},"8fa9":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("mXGw"),n=a.n(r).a.createElement,l=function(){return n("a",{href:"https://intuit.github.io/auto/docs/welcome/getting-started",className:"uppercase text-xl lg:text-2xl border-2 border-white rounded px-6 py-3 hover:bg-primary-500 hover:text-white"},n("span",{className:"pr-2"},"Get Started")," \ud83c\udf89")}},AFBu:function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return n.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e;if(n.default.basename(e).includes("#"))return e.replace("#",".html#");return"".concat(e,".html")};var n=r(a("O2/E"))},GDok:function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var n=r(a("nxTg")),l=r(a("8VmE")),o=r(a("RiSW")),s=r(a("mXGw")),i=r(a("5dyF")),u=a("V5Fo"),c=a("/FXl"),m=r(a("PDtE")),f=a("nZpd"),d=a("AFBu"),p=function(e){var t=e.className,a=(0,o.default)(e,["className"]);return s.default.createElement("svg",(0,l.default)({className:(0,m.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),s.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,c.useMDXComponents)().SearchInput;return s.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},s.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,r=s.default.useContext(f.MobileMenuContext),l=(0,n.default)(r,2),o=l[0],m=l[1],y=(0,c.useMDXComponents)(),g=y.Logo,x=y.NavBarWrapper,h=y.NavBar,w=y.NavBarItem,v=y.MobileMenuButton;return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,null,s.default.createElement(h,null,a?s.default.createElement(i.default,{passHref:!0,href:(0,d.postFixHTML)("/index")},s.default.createElement(g,null)):s.default.createElement(g,null),s.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},s.default.createElement(b,null),s.default.createElement(v,{open:o,setOpen:m,className:"lg:hidden"}),s.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return s.default.createElement(i.default,{passHref:!0,key:e,href:(0,d.postFixHTML)("/".concat(e))},s.default.createElement(w,null,(0,u.titleCase)(e)))})),s.default.createElement(w,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},s.default.createElement(p,null)))))),o&&s.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return s.default.createElement(i.default,{passHref:!0,key:e,href:(0,d.postFixHTML)("/".concat(e))},s.default.createElement(w,null,(0,u.titleCase)(e)))})),s.default.createElement(w,{href:"https://github.com/intuit/auto",target:"_blank"},s.default.createElement(p,{className:"mr-2"}),"Open on GitHub")))}},nZpd:function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var n=r(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=n},u4QB:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("xEgi")}])},xEgi:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return Y})),a.d(t,"default",(function(){return Z}));var r=a("Fcif"),n=a("dV/x"),l=a("mXGw"),o=a.n(l),s=a("/FXl"),i=a("6f/q"),u=a.n(i),c=a("X7+o"),m=a("W0B4"),f=a.n(m);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function x(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function w(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),n=h(t.slice(0,r)),l=t.slice(r+1).trim();return n.startsWith("webkit")?e[(a=n,a.charAt(0).toUpperCase()+a.slice(1))]=l:e[n]=l,e}),{})}var v=!1;try{v=!0}catch(Q){}function N(e){return c.c.icon?c.c.icon(e):null===e?null:"object"===d(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?p({},e,t):{}}function k(e){var t=e.forwardedRef,a=g(e,["forwardedRef"]),r=a.icon,n=a.mask,l=a.symbol,o=a.className,s=a.title,i=a.titleId,u=N(r),m=O("classes",[].concat(x(function(e){var t,a=e.spin,r=e.pulse,n=e.fixedWidth,l=e.inverse,o=e.border,s=e.listItem,i=e.flip,u=e.size,c=e.rotation,m=e.pull,f=(p(t={"fa-spin":a,"fa-pulse":r,"fa-fw":n,"fa-inverse":l,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===i||"both"===i,"fa-flip-vertical":"vertical"===i||"both"===i},"fa-".concat(u),"undefined"!==typeof u&&null!==u),p(t,"fa-rotate-".concat(c),"undefined"!==typeof c&&null!==c&&0!==c),p(t,"fa-pull-".concat(m),"undefined"!==typeof m&&null!==m),p(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(a)),x(o.split(" ")))),f=O("transform","string"===typeof a.transform?c.c.transform(a.transform):a.transform),d=O("mask",N(n)),b=Object(c.b)(u,y({},m,{},f,{},d,{symbol:l,title:s,titleId:i}));if(!b)return function(){var e;!v&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var h=b.abstract,w={ref:t};return Object.keys(a).forEach((function(e){k.defaultProps.hasOwnProperty(e)||(w[e]=a[e])})),E(h[0],w)}k.displayName="FontAwesomeIcon",k.propTypes={border:f.a.bool,className:f.a.string,mask:f.a.oneOfType([f.a.object,f.a.array,f.a.string]),fixedWidth:f.a.bool,inverse:f.a.bool,flip:f.a.oneOf(["horizontal","vertical","both"]),icon:f.a.oneOfType([f.a.object,f.a.array,f.a.string]),listItem:f.a.bool,pull:f.a.oneOf(["right","left"]),pulse:f.a.bool,rotation:f.a.oneOf([0,90,180,270]),size:f.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:f.a.bool,symbol:f.a.oneOfType([f.a.bool,f.a.string]),title:f.a.string,transform:f.a.oneOfType([f.a.string,f.a.object]),swapOpacity:f.a.bool},k.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var E=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof a)return a;var n=(a.children||[]).map((function(a){return e(t,a)})),l=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=w(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[h(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,i=g(r,["style"]);return l.attrs.style=y({},l.attrs.style,{},s),t.apply(void 0,[a.tag,y({},l.attrs,{},i)].concat(x(n)))}.bind(null,o.a.createElement),j=a("pWCa"),M=a.n(j),P=a("WOcO"),_=a("8fa9"),A=o.a.createElement,F=function(e){var t=e.title,a=e.description,r=e.icon;return A("div",{className:"mb-8 flex items-start last:mb-0"},A("div",{className:"rounded bg-yellow-500 dark:bg-yellow-600 p-3 text-yellow-100 mr-5"},A(k,{height:24,icon:r})),A("div",null,A("h3",{className:"text-xl font-semibold mb-2"},t),A("p",{className:"text-lg text-gray-700 dark:text-gray-400"},a)))},S=function(e){return A("a",Object(r.a)({className:"text-blue-600 font-semibold underline"},e))},T=function(e){var t=e.children;return A("span",{className:"text-primary-500 dark:text-primary-400 font-semibold"},t)},C=function(e){var t=e.style;return A("hr",{className:"mb-8 text-gray-300",style:t})},B=function(e){var t=e.number,a=e.label,n=e.image;return A("div",{className:"flex items-center flex-col lg:flex-row mb-8 w-fit lg:w-full"},A("div",{className:"flex items-center flex-1 pr-4 mb-6 lg:mb-0 self-start lg:self-auto"},A("div",{className:"bg-gray-700 rounded-full h-12 w-12 text-gray-100 flex items-center justify-center"},t),A("h3",{className:"pl-4 flex-1"},a)),A("img",Object(r.a)({className:"lg:flex-1 w-full lg:max-w-lg border border-gray-300 rounded-lg h-auto"},function(e){return"object"===typeof e?{src:e.src.src,srcset:e.src.srcSet}:{src:e}}(n))))},W=function(e){var t=e.children,a=e.color;return A("span",{className:"bg-".concat(a,"-600 text-white px-2 py-1 rounded font-semibold text-xs")},t)},D=function(e){var t=e.question,a=e.answer;return A("div",{className:"mb-10 last:mb-0"},A("h4",{className:"font-normal text-xl mb-3 text-gray-700 dark:text-gray-200"},t),A("p",{className:"text-grey-800 leading-relaxed"},a))},H=function(e){return A("div",Object(r.a)({className:"mx-10 md:max-w-screen-xl lg:mx-auto"},e))},X=function(){return A(H,null,A("div",{className:"bg-grey-500"},A("div",{className:"max-w-4xl mx-10 lg:mx-auto pt-12 pb-24"},A("h2",{className:"font-extrabold text-4xl text-center mb-6 text-gray-800 dark:text-gray-300"},"Frequently asked questions"),A(C,{style:{borderTopWidth:2,height:2}}),A(D,{question:A(o.a.Fragment,null,"Do you really release"," ",A("span",{className:"font-extrabold italic"}," every ")," pull request?!"),answer:A(o.a.Fragment,null,A(S,{href:"https://github.com/intuit/auto/releases"},"Yup!")," ","But if you don't want to do that it's up to you. The tools"," ",A(T,null,"auto")," ships with can be used to"," ",A("span",{className:"font-semibold text-red-500 dark:text-red-600"},"fit any workflow"),"! You can also use ",A(W,{color:"primary"},"skip-release")," ","labels or configure ",A(T,null,"auto")," to only release with a ",A(W,{color:"blue"},"release")," label.")}),A(C,{style:{height:1}}),A(D,{question:A(o.a.Fragment,null,"Is there a way to hook into ",A(T,null,"auto")," and customize my release process?"),answer:A(o.a.Fragment,null,"Many of ",A(T,null,"auto"),"'s features are"," ",A(S,{href:"https://intuit.github.io/auto/docs/configuration/plugins"},"built into plugins"),". You can also use this plugin system to do"," ",A("span",{className:"font-semibold text-red-500 dark:text-red-600"},"almost anything")," ","during your release!")}),A(C,{style:{height:1}}),A(D,{question:A(o.a.Fragment,null,"Does ",A(T,null,"auto")," support any other types of releases?"),answer:A(o.a.Fragment,null,A("p",{className:"mb-3"},"Yes! ",A(T,null,"auto")," has commands for any situation!"),A("p",{className:"mb-2"},"Want a test version? Try a"," ",A(S,{href:"https://intuit.github.io/auto/docs/generated/canary"},"canary")),A("p",{className:"mb-2"},"Want a prerelease? Try creating a pre-release branch and using"," ",A(S,{href:"https://intuit.github.io/auto/docs/generated/next"},"next")),A("p",{className:"mb-2"},"Need to patch an old major release? ",A(T,null,"auto")," ","can automatically make branches for"," ",A(S,{href:"https://intuit.github.io/auto/docs/generated/shipit#managing-old-major-versions"},"old major versions"),"!"),A("p",null,"Or if you don't want to worry about what command to you need, just use"," ",A(S,{href:"https://intuit.github.io/auto/docs/generated/shipit"},"shipit"),"! This command determines what type of release to make based on the context it's run in."))}))))},I=function(){return A(H,null,A("div",{className:"max-w-4xl mx-10 lg:mx-auto pt-20 pb-16 lg:pb-24"},A("h2",{className:"text-center text-2xl font-semibold mb-16 lg:mb-20"},"What does the workflow look like? How easy is it really?"),A(B,{number:1,label:"Open a Pull Request",image:"open-pr.png"}),A(B,{number:2,image:"add-label.png",label:A(o.a.Fragment,null,"Add a ",A(W,{color:"blue"},"label"))}),A(B,{number:3,label:"Hit that merge button",image:"merge.png"}),A(B,{number:4,image:"release-example.png",label:"Wait for your continuous integration to make the release for you!"})))},L=function(){return A(H,null,A("div",{className:"flex justify-around items-center flex-col-reverse lg:flex-row mb-16 lg:mb-24"},A("div",{className:"flex-1 lg:px-12"},A(F,{title:"Keep Your Workflow",icon:P.d,description:A(o.a.Fragment,null,"Other tools require you to change how any contributor commits to your project. With ",A(T,null,"auto "),"leave that baggage behind!")}),A(F,{title:"Beautiful Changelogs",icon:P.b,description:"Link to PRs and Jira stories, include authors, monorepo aware, customizable labels section, additional release notes, and even more!"}),A(F,{title:"Atomic Functions",icon:P.a,description:"Each command does one thing and they do it well. Easily use them to fit any build process."}),A(F,{title:"Blazingly Fast Releases",icon:P.c,description:"Since all you need to worry about are labels, you can work at an incredibly fast pace! This speed to commit also helps with new contributors."})),A("div",{className:"flex-1 px-12 mb-20 lg:mb-0"},A("img",{src:"changelog-example.png",alt:"Changelog example",className:"border border-grey-600 rounded-lg p-4 shadow-md mx-auto",style:{maxHeight:500}}))))},q=function(e){var t=e.type,a=e.description,r=e.color;return A("div",{className:"".concat(void 0===r?"primary":r," rounded-xl flex-1 py-6 px-8")},A("h3",{className:"text-white text-2xl mb-4 font-semibold"},t),A("p",{className:"text-gray-100"},a))},G=function(){return A("div",{className:"w-full bg-gray-100 dark:bg-gray-900 py-20"},A(H,null,A("div",{className:"flex flex-col lg:px-12"},A("h2",{className:"text-4xl font-bold mb-6 dark:text-white"},"A release for any situation!"),A("p",{className:"text-xl max-w-4xl text-gray-800 dark:text-gray-200 mb-10"},A(T,null,"auto")," can create multiple types of releases. Each release type guarantees that no matter the situation you'll be able to publish and consume a release with your changes."),A("div",{className:"flex flex-col space-y-4 lg:space-y-0 lg:space-x-6 lg:flex-row w-full"},A(q,{color:"bg-primary-500",type:"canary",description:"PR build previews that enable your project's consumers to easily test changes."}),A(q,{color:"bg-yellow-600",type:"next",description:"Easily create and manage pre-releases for your project as you develop large changes."}),A(q,{color:"bg-red-700",type:"latest",description:"Publish a new full release for the project. Creates changelogs, github releases, and more!"})))))},z=function(){return A("div",{className:"w-full"},A("div",{className:"bg-primary-500 dark:bg-primary-600 w-full flex justify-center flex-col items-center py-40 text-center"},A("img",{src:"monochrome-logo-large.png",alt:"auto",className:"w-1/4 mb-10 max-w-md"}),A("p",{className:"text-2xl text-primary-200 font-light mx-4"},"Streamline your release workflow and"," ",A("span",{className:"text-yellow-500 font-semibold"},"publish constantly!"))),A("div",{className:"mx-10 md:max-w-screen-xl lg:mx-auto"},A("div",{className:"mt-10 mb-16 lg:mb-24 text-center flex items-center flex-col"},A("h2",{className:"text-primary-900 text-2xl mb-8 font-semibold dark:text-primary-200"},"Adding automated releases shouldn't be hard or require changing your workflow"),A("p",{className:"max-w-2xl text-lg text-gray-700 dark:text-gray-400"},A(T,null,"auto")," makes automating releases for your project as simple adding a ",A(W,{color:"yellow"},"label")," to a pull request. If you're releasing all the time you can be"," ",A("span",{className:"text-red-500 dark:text-red-600 font-semibold"},"more confident")," ","in your releases. And your users might thank you too \ud83d\ude09"))))},R=function(){return A("div",{className:"w-full"},A(M.a,null,A("title",null,"Auto")),A("main",{className:"w-full"},A(z,null),A(L,null),A(G,null),A(I,null),A(X,null),A("div",{className:"bg-primary-500 dark:bg-primary-600 text-white text-center"},A("div",{className:"max-w-4xl mx-10 lg:mx-auto pt-12 pb-20 flex flex-col items-center"},A("h2",{className:"text-xl mb-8"},"Stop worrying about your release and hit that merge button!"),A(_.a,null)))))},Y=(o.a.createElement,{layout:"nav-bar",description:void 0,date:null,author:"",email:"",__resourcePath:"index.mdx",__scans:{}}),J={frontMatter:Y},V=u.a;function Z(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.mdx)(V,Object(r.a)({},J,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)(R,{mdxType:"Home"}))}Z.isMDXComponent=!0}},[["u4QB",0,1,8,2,3,7]]]);