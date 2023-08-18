(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{435:function(n,t,a){"use strict";a.r(t);var e=a(58),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"loading-animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-animation"}},[n._v("#")]),n._v(" Loading animation")]),n._v(" "),a("p",[n._v("Create a loading animation that is displayed before application is loaded.")]),n._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" webview\n\n\nhtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[n._v('"""\n    <style>\n        body {\n            background-color: #333;\n            color: white;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        .main-container {\n            width: 100%;\n            height: 90vh;\n            display: flex;\n            display: -webkit-flex;\n            align-items: center;\n            -webkit-align-items: center;\n            justify-content: center;\n            -webkit-justify-content: center;\n            overflow: hidden;\n        }\n\n        .loading-container {\n        }\n\n        .loader {\n          font-size: 10px;\n          margin: 50px auto;\n          text-indent: -9999em;\n          width: 3rem;\n          height: 3rem;\n          border-radius: 50%;\n          background: #ffffff;\n          background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\n          background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\n          background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\n          background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\n          background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\n          position: relative;\n          -webkit-animation: load3 1.4s infinite linear;\n          animation: load3 1.4s infinite linear;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n        }\n        .loader:before {\n          width: 50%;\n          height: 50%;\n          background: #ffffff;\n          border-radius: 100% 0 0 0;\n          position: absolute;\n          top: 0;\n          left: 0;\n          content: \'\';\n        }\n        .loader:after {\n          background: #333;\n          width: 75%;\n          height: 75%;\n          border-radius: 50%;\n          content: \'\';\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n        }\n        @-webkit-keyframes load3 {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes load3 {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n        .loaded-container {\n            display: none;\n        }\n\n\n    </style>\n    <body>\n      <div class="main-container">\n          <div id="loader" class="loading-container">\n              <div class="loader">Loading...</div>\n          </div>\n\n          <div id="main" class="loaded-container">\n              <h1>Content is loaded!</h1>\n          </div>\n      </div>\n\n      <script>\n          setTimeout(function() {\n              document.getElementById(\'loader\').style.display = \'none\'\n              document.getElementById(\'main\').style.display = \'block\'\n          }, 5000)\n      <\/script>\n    </body>\n"""')]),n._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("==")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("\n    window "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" webview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("create_window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'Loading Animation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" background_color"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'#333333'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n    webview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
