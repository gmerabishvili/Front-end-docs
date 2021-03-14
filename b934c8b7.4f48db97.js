(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/figure-1-1-6a26ce70144d71696d81ba8e9afef854.png"},150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/figure-1-3-328b9d8cbc024467d810785912817e87.png"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(102)),i={id:"intro",title:"Introduction",sidebar_label:"Introduction"},c={unversionedId:"javascript/intro",id:"javascript/intro",isDocsHomePage:!1,title:"Introduction",description:"Definition",source:"@site/docs/javascript/intro.md",slug:"/javascript/intro",permalink:"/Front-end-docs/docs/javascript/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/javascript/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"Style Guide",permalink:"/Front-end-docs/docs/"},next:{title:"ES6 Introduction",permalink:"/Front-end-docs/docs/javascript/es6/intro"}},s=[{value:"Definition",id:"definition",children:[]},{value:"Data Types",id:"data-types",children:[{value:"Primitive types",id:"primitive-types",children:[]},{value:"Reference types",id:"reference-types",children:[]}]},{value:"Hoisting",id:"hoisting",children:[{value:"The let and const Keywords",id:"the-let-and-const-keywords",children:[]}]},{value:"Closures",id:"closures",children:[]}],l={toc:s};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"definition"},"Definition"),Object(o.b)("p",null,"JavaScript is high-level, often just-in-time compiled, and multi-paradigm programming language. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."),Object(o.b)("p",null,"As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."),Object(o.b)("p",null,"JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server."),Object(o.b)("h2",{id:"data-types"},"Data Types"),Object(o.b)("p",null,"There are two kinds of types in Javascript:  primitive and reference.\n",Object(o.b)("strong",{parentName:"p"},"Primitive types are stored as simple data types"),". ",Object(o.b)("strong",{parentName:"p"},"Reference types are stored as objects, which are really just references\nto locations in memory"),"."),Object(o.b)("h3",{id:"primitive-types"},"Primitive types"),Object(o.b)("p",null,"Primitive types represent simple pieces of data that are stored as is, such as (e.g. boolean true, number 42).\nThere are 6 primitive types in JavaScript: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Boolean"),Object(o.b)("li",{parentName:"ul"},"Number"),Object(o.b)("li",{parentName:"ul"},"String "),Object(o.b)("li",{parentName:"ul"},"Symbol "),Object(o.b)("li",{parentName:"ul"},"Null "),Object(o.b)("li",{parentName:"ul"},"Undefined")),Object(o.b)("p",null,"A variable holding a primitive directly ",Object(o.b)("strong",{parentName:"p"},"contains")," the primitive value (rather than a pointer to an object).\nWhen you assign a primitive value to a variable, the value is\n",Object(o.b)("strong",{parentName:"p"},"copied")," into that variable. This means that if you set one variable equal\nto another, each variable gets its ",Object(o.b)("strong",{parentName:"p"},"own copy")," of the data. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'var color1 = "red";\nvar color2 = color1;\n')),Object(o.b)("p",null,"Here, even though color1 and color2 contain the same value, they are completely ",Object(o.b)("strong",{parentName:"p"},"separate from each other"),",\nand you can change the value in color1 without affecting color2 and vice versa.\nThat\u2019s because there are ",Object(o.b)("strong",{parentName:"p"},"two different storage locations"),", one for each variable:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(149).default})),Object(o.b)("p",null,"Because each variable containing a primitive value uses its own\nstorage space, changes to one variable ",Object(o.b)("strong",{parentName:"p"},"are not reflected on the other"),".\nYou can think of the variables as ",Object(o.b)("strong",{parentName:"p"},"having no relationship to each other"),".\nFor example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'var color1 = "red";\nvar color2 = color1;\n\nconsole.log(color1); // "red"\nconsole.log(color2); // "red"\n\ncolor1 = "blue";\n\nconsole.log(color1); // "blue"\nconsole.log(color2); // "red"\n')),Object(o.b)("p",null,'In this code, color1 is changed to "blue" and color2 retains its original\nvalue of "red".'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Conclusion"),": If the value is a primitive type, when you access the variable, you manipulate the ",Object(o.b)("strong",{parentName:"p"},"actual value")," stored in that variable.\nIn other words, the variable that stores a primitive value is ",Object(o.b)("strong",{parentName:"p"},"accessed by value"),"."),Object(o.b)("h3",{id:"reference-types"},"Reference types"),Object(o.b)("p",null,"Reference types do not store the object directly into the variable to\nwhich it is assigned, instead, ",Object(o.b)("strong",{parentName:"p"},"it holds a pointer (or reference) to\nthe location in memory where the object exists."),"\nThis is the primary difference between objects and primitive values, as the primitive is stored directly in the variable.\nThere are 3 main reference types in JavaScript:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Array"),Object(o.b)("li",{parentName:"ul"},"Object"),Object(o.b)("li",{parentName:"ul"},"Function")),Object(o.b)("p",null,"When you assign an object to a variable, you\u2019re actually assigning a\n",Object(o.b)("strong",{parentName:"p"},"pointer (reference)"),". That means ",Object(o.b)("strong",{parentName:"p"},"if you assign one variable to another, each variable\ngets a copy of the pointer, and both still reference the same object in\nmemory"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"var object1 = new Object();\nvar object2 = object1;\n")),Object(o.b)("p",null,"This code first creates an object and stores a ",Object(o.b)("strong",{parentName:"p"},"reference")," in\nobject1. Next, object2 is assigned the value of object1. There is still only\nthe ",Object(o.b)("strong",{parentName:"p"},"one instance")," of the object that was created on the first line, but both\nvariables now point to ",Object(o.b)("strong",{parentName:"p"},"that object"),", as illustrated in Figure 1-3."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(150).default})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Conclusion")," If the value is a reference type, when you manipulate an object, you work on the ",Object(o.b)("strong",{parentName:"p"},"reference")," of that object, rather than the actual object.\nIt means a variable that stores an object is ",Object(o.b)("strong",{parentName:"p"},"accessed by reference"),"."),Object(o.b)("h2",{id:"hoisting"},"Hoisting"),Object(o.b)("p",null,"Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. In other words ",Object(o.b)("strong",{parentName:"p"},"a variable can be used before it has been declared"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"x = 5; // Assign 5 to x\n\nconsole.log(x); 5 // Used before declaration \n\nvar x; // Declare x\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"JavaScript only hoists declarations, not initializations (assignments).      "))),Object(o.b)("p",null,"For example:                                                                       "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"console.log(x); undefined // Used before declaration and before assigning a value\n\nvar x = 5;  // Declare and assign 5 to x\n")),Object(o.b)("p",null,"This is because only the declaration (var x), not the initialization (=5) is hoisted to the top.\nBecause of hoisting, x has been declared before it is used, but because ",Object(o.b)("strong",{parentName:"p"},"initializations are not hoisted"),", the value of x is undefined."),Object(o.b)("h3",{id:"the-let-and-const-keywords"},"The let and const Keywords"),Object(o.b)("p",null,"Variables ",Object(o.b)("strong",{parentName:"p"},"defined with let and const")," are hoisted to the top of the block, but not ",Object(o.b)("strong",{parentName:"p"},"initialized"),".\nMeaning: The block of code is aware of the variable, but it cannot be used until it has been declared.\nIn other words, with ",Object(o.b)("strong",{parentName:"p"},"let and const, you cannot use a variable before it is declared"),"."),Object(o.b)("p",null,"Using ",Object(o.b)("strong",{parentName:"p"},"let")," will result in a ReferenceError:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"x = 5; // Assign 5 to x\n\nlet x // Declare x;\n")),Object(o.b)("p",null,"Using a ",Object(o.b)("strong",{parentName:"p"},"const")," variable before it is declared, is a syntax error, so the code will simply not run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"x = 5; // Assign 5 to x\n\nconst x // Declare x;\n")),Object(o.b)("h2",{id:"closures"},"Closures"),Object(o.b)("p",null,"JavaScript variables can belong to the ",Object(o.b)("strong",{parentName:"p"},"local")," or ",Object(o.b)("strong",{parentName:"p"},"global")," scope.\nGlobal variables can be made ",Object(o.b)("strong",{parentName:"p"},"local")," (private) with ",Object(o.b)("strong",{parentName:"p"},"closures"),".\nFor example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"var add = (function () {\n    var counter = 0;\n    return function () {\n        counter += 1;\n        return counter\n    }\n})();\n")),Object(o.b)("h4",{id:"example-explained"},"Example Explained"),Object(o.b)("p",null,"The variable ",Object(o.b)("strong",{parentName:"p"},"add")," is assigned to the return value of a self-invoking function.\nThe self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.\nThe most important part is that ",Object(o.b)("strong",{parentName:"p"},"inner function")," can access to the ",Object(o.b)("strong",{parentName:"p"},"outer function's"),' (its parent scope) "counter" variable.\nThis is called a JavaScript ',Object(o.b)("strong",{parentName:"p"},"closure"),". It makes it possible for a function to have ",Object(o.b)("strong",{parentName:"p"},"local"),' (private) variables.\nThe "counter" variable is protected by the scope of the anonymous function, and can only be changed using the add function.'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Conclusion")," A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function\u2019s variables \u2014 a scope chain.\nThe closure has three scope chains:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It has access to its own scope \u2014 variables defined between its curly brackets."),Object(o.b)("li",{parentName:"ul"},"It has access to the outer function\u2019s variables."),Object(o.b)("li",{parentName:"ul"},"It has access to the global variables.")))}b.isMDXComponent=!0}}]);