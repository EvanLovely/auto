_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=d.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,o.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),d=n(a("mXGw")),o=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),d=n(a("mXGw")),o=n(a("pWCa")),c=a("I08b"),l=a("GDok"),s=a("nZpd"),u=a("AFBu"),i=a("0oBi"),m=function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=d.default.useState(!1);d.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var m=(0,i.useDarkMode)();return d.default.createElement(s.MobileMenuContext.Provider,{value:a.menuState||n},d.default.createElement(o.default,null,d.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,u.formatPath)(m?"favicon-dark.png":"favicon.png")})),d.default.createElement(c.SkipNavLink,null),d.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},d.default.createElement(l.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),t))};t.default=m},"9a2Q":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/chrome",function(){return a("XQ2C")}])},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e;if(r.default.basename(e).includes("#"))return e.replace("#",".html#");return"".concat(e,".html")};var r=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),d=n(a("RiSW")),o=n(a("nxTg")),c=n(a("mXGw")),l=n(a("5dyF")),s=n(a("pWCa")),u=n(a("O2/E")),i=n(a("PDtE")),m=a("/FXl"),p=a("dAGg"),f=a("nZpd"),b=a("AFBu");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=c.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=h;var O=function(e){var t=e.href,a=e.children,n=c.default.useContext(h),r=(0,m.useMDXComponents)().SidebarLink,d=u.default.join(n.sidebarFileLocation,t),o=t;return n.sidebarFileLocation&&((o=d).endsWith("/index")&&(o=o.replace("/index","")),o.endsWith("/")&&(o=o.slice(0,-1))),c.default.createElement(l.default,{passHref:!0,href:(0,b.postFixHTML)(o)},c.default.createElement(r,{isActive:n.pathname.replace("/index","")===(0,b.formatPath)(o)},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,l=c.default.useContext(f.MobileMenuContext),x=(0,o.default)(l,1)[0],j="/".concat(r),N=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(j),v=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?u.default.relative("/auto",a.pathname):u.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,b.formatPath)(r.__resourcePath)}}(n),k=(0,m.useMDXComponents)(),E=k.SidebarItemWrapper,w=(k.SidebarLink,k.SidebarTitle),y=k.SidebarDivider,_=k.SidebarList,M=k.Sidebar,P=(0,d.default)(k,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return c.default.createElement(h.Provider,{value:g(g({},v),{},{sidebarFileLocation:N?j:""})},c.default.createElement(m.MDXProvider,{components:g(g({},P),{},{li:E,ul:_,a:O,p:w,hr:y})},c.default.createElement(s.default,null,c.default.createElement("title",null,v.title.replace(/\\`/g,"`"))),c.default.createElement(M,{className:(0,i.default)(!x&&"hidden","lg:block")},N?c.default.createElement(N,null):c.default.createElement(_,null,n.map((function(e){return c.default.createElement(E,{key:e.__resourcePath},c.default.createElement(O,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),d=n(a("8VmE")),o=n(a("RiSW")),c=n(a("mXGw")),l=n(a("5dyF")),s=a("V5Fo"),u=a("/FXl"),i=n(a("PDtE")),m=a("nZpd"),p=a("AFBu"),f=function(e){var t=e.className,a=(0,o.default)(e,["className"]);return c.default.createElement("svg",(0,d.default)({className:(0,i.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),c.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,u.useMDXComponents)().SearchInput;return c.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},c.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=c.default.useContext(m.MobileMenuContext),d=(0,r.default)(n,2),o=d[0],i=d[1],x=(0,u.useMDXComponents)(),g=x.Logo,h=x.NavBarWrapper,O=x.NavBar,j=x.NavBarItem,N=x.MobileMenuButton;return c.default.createElement(c.default.Fragment,null,c.default.createElement(h,null,c.default.createElement(O,null,a?c.default.createElement(l.default,{passHref:!0,href:(0,p.postFixHTML)("/index")},c.default.createElement(g,null)):c.default.createElement(g,null),c.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},c.default.createElement(b,null),c.default.createElement(N,{open:o,setOpen:i,className:"lg:hidden"}),c.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return c.default.createElement(l.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},c.default.createElement(j,null,(0,s.titleCase)(e)))})),c.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},c.default.createElement(f,null)))))),o&&c.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return c.default.createElement(l.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},c.default.createElement(j,null,(0,s.titleCase)(e)))})),c.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank"},c.default.createElement(f,{className:"mr-2"}),"Open on GitHub")))}},XQ2C:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),r=a("dV/x"),d=a("mXGw"),o=a.n(d),c=a("/FXl"),l=a("pu0P"),s=a.n(l),u=(o.a.createElement,{title:"Chrome Web Store",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/chrome.mdx",__scans:{}}),i={frontMatter:u},m=s.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.mdx)(m,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"This plugin allows you to automate the publishing of chrome extensions"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"Example Repo: ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hipstersmoothie/auto-chrome"}),"here"))),Object(c.mdx)("h2",{id:"prerequisites"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#prerequisites"}),"Prerequisites")),Object(c.mdx)("p",null,"To publish to the chrome web store you will need the following secrets set in your environment. See ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/DrewML/chrome-webstore-upload/blob/master/How%20to%20generate%20Google%20API%20keys.md"}),"here")," for a guide one how to get these values."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"CLIENT_ID")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"CLIENT_SECRET")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"REFRESH_TOKEN"))),Object(c.mdx)("h2",{id:"installation"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(c.mdx)("p",null,"This plugin is not included with the ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(c.mdx)("pre",{className:"language-bash"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," i --save-dev @auto-it/chrome\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# or"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"yarn")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"add")," -D @auto-it/chrome\n")),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},'WARNING: You can only use one "package manager" at a time!\nMixing them will lead to undesired results.')),Object(c.mdx)("h2",{id:"usage"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(c.mdx)("p",null,"You must first pack/zip your plugin before running ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto"),"."),Object(c.mdx)("p",null,"These environment variables tell ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto")," what to publish."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"EXTENSION_ID - your chrome extensions unique ID (REQUIRED)"),Object(c.mdx)("li",{parentName:"ul"},"EXTENSION_BUILD - Path to either a zip file, or a directory to be zip. defaults to ",Object(c.mdx)("inlineCode",{parentName:"li"},"extension.zip"))),Object(c.mdx)("p",null,"Or you can set these values in the autorc:"),Object(c.mdx)("pre",{className:"language-json"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"chrome"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"id"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"1234"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"build"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"path/to/zip/or/folder"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"manifest"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"path/tp/manifest.json"'),"\n      ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"\u26a0\ufe0f You must have a manifest.json for this plugin to work.")))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),d=n(a("mXGw")),o=n(a("O2/E")),c=a("/FXl"),l=n(a("PDtE")),s=a("I08b"),u=a("C3pV"),i=n(a("6f/q")),m=n(a("x3GE")),p=/([^`]*)`([^`]*)`(.*)/m;var f=function(e){var t=e.children,a=e.frontMatter,n=d.default.useState(!1),f=(0,r.default)(n,2),b=f[0],x=f[1],g=(0,c.useMDXComponents)(),h=a.__resourcePath.split("/")[0],O=(0,m.default)(),j=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((function(e){return o.default.relative("./",e)})).filter((function(e){return e.startsWith(h)})).map((function(e){return O.find((function(t){return t.__resourcePath===e}))}));return d.default.createElement(i.default,{menuState:[b,x]},d.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},d.default.createElement(u.Sidebar,{links:j,folder:h}),d.default.createElement(s.SkipNavContent,null),d.default.createElement("main",{className:(0,l.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",b&&"hidden")},a.title&&d.default.createElement(g.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");p.test(n);){var o=n.match(p),c=(0,r.default)(o,4),l=c[1],s=c[2],u=c[3];a.push(l),a.push(d.default.createElement(e.inlineCode,null,s)),n=u}return a.push(n),d.default.createElement("div",null,a)}}(g,a.title)),t)))};t.default=f},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[];try{var r=a("jmz1");n=r.keys().map(r)}catch(o){}var d=function(){try{return n}catch(o){return[]}};t.default=d}},[["9a2Q",0,1,2,3,4]]]);