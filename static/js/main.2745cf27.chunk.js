(this["webpackJsonpcontacts-crud-challenge"]=this["webpackJsonpcontacts-crud-challenge"]||[]).push([[0],{14:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(15),s=n.n(i),o=(n(21),n(4)),l=n(5),r=(n(14),n(9)),u=n(11),j=n(10),d=n(16),b=n(1),m=function(t){var e=t.email,n=t.toggleEmail,c=t.isEnabled;return Object(b.jsxs)("li",{className:c?"":"deselected",onClick:function(){n(e,c)},children:[Object(b.jsx)("p",{className:"contact-email",children:e}),c?Object(b.jsx)("span",{className:"contact-delete-email",children:Object(b.jsx)(j.a,{})}):Object(b.jsx)("span",{className:"contact-restore-email",children:Object(b.jsx)(d.a,{})})]})},h=function(t){var e=t.contact,n=t.isLoading,a=t.editContact,i=t.saveNewContact,s=t.deleteContact,d=t.cancelChanges,h=Object(c.useState)(null===e||void 0===e?void 0:e.firstName),f=Object(l.a)(h,2),O=f[0],p=f[1],x=Object(c.useState)(null===e||void 0===e?void 0:e.lastName),v=Object(l.a)(x,2),N=v[0],g=v[1],C=Object(c.useState)(Object(o.a)(e.emails)),w=Object(l.a)(C,2),y=w[0],E=w[1],S=Object(c.useState)([]),k=Object(l.a)(S,2),_=k[0],F=k[1],L=function(t,e){var n=Object(o.a)(y);if(e){var c=n.findIndex((function(e){return e===t}));n.splice(c,1),E(n)}else n.push(t),E(n)},T=function(){var t=Object(o.a)(y);return t.push.apply(t,Object(o.a)(_.filter((function(t){return t.length>4})))),{firstName:O.trim(),lastName:N.trim(),emails:t}},D=function(){return Object(b.jsxs)("section",{className:"crud-buttons",children:[Object(b.jsx)("button",{className:"delete",onClick:function(){return s(e.id)},type:"button",children:"Delete"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"cancel",onClick:function(){p(e.firstName),g(e.lastName),E(Object(o.a)(e.emails)),F([]),d(e.id)},type:"button",children:"Cancel"}),Object(b.jsx)("button",{className:"save",type:"submit",children:"Save"})]})]})};return Object(c.useEffect)((function(){e?(p(e.firstName),g(e.lastName),E(Object(o.a)(e.emails))):(p(""),g(""),E([])),F([])}),[e]),Object(b.jsx)("form",{className:"contact",onSubmit:function(t){!function(t){t.preventDefault(),e.new&&e.new?(i(T()),F([])):(a(e.id,T()),F([]))}(t)},children:n?Object(b.jsx)("h3",{className:"loading",children:"Loading..."}):Object(b.jsxs)("fieldset",{children:[Object(b.jsxs)("section",{className:"edit-name",children:[Object(b.jsxs)("div",{className:"edit-name__first",children:[Object(b.jsx)("label",{htmlFor:"contact-first-name",children:"First Name"}),Object(b.jsx)("input",{type:"text",id:"contact-first-name",name:"first-name",onChange:function(t){p(t.target.value)},value:O,placeholder:"Enter first name...",required:!0,autoFocus:!0})]}),Object(b.jsxs)("div",{className:"edit-name__last",children:[Object(b.jsx)("label",{htmlFor:"contact-last-name",children:"Last Name"}),Object(b.jsx)("input",{type:"text",id:"contact-last-name",name:"last-name",onChange:function(t){g(t.target.value)},value:N,placeholder:"Enter last name...",required:!0})]})]}),Object(b.jsxs)("section",{name:"contact-emails",className:"contact-emails",children:[Object(b.jsx)("label",{htmlFor:"contact-emails",children:"Email"}),Object(b.jsxs)("ul",{children:[!!e&&!!e.emails&&e.emails.sort().map((function(t,n){return Object(b.jsx)(m,{email:t,isEnabled:y.includes(t),contact:e,toggleEmail:L},"contact-".concat(e.id,"-email-").concat(n))})),_.map((function(t,n){return Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{placeholder:"Enter new email...",value:t,onChange:function(t){return function(t,e){var n=Object(o.a)(_);n[e]=t.target.value,F(n)}(t,n)},type:"email",required:!0},"new-email-".concat(n)),Object(b.jsx)("span",{className:"contact-delete-email",onClick:function(){var t=Object(o.a)(_);t.splice(n,1),F(t)},children:Object(b.jsx)(j.a,{})})]},"new-contact-".concat(e.id,"-email-").concat(n))})),Object(b.jsxs)("li",{className:"add-email",onClick:function(){F((function(t){return[].concat(Object(o.a)(t),[""])}))},children:[Object(b.jsx)("div",{children:Object(b.jsx)(r.a,{icon:u.a})}),Object(b.jsx)("p",{children:"add email"})]})]})]}),Object(b.jsx)(D,{})]})})},f=function(t){var e=t.isLoading,n=t.contacts,c=t.contact,a=t.selectContact,i=t.addContact,s=function(){return Object(b.jsxs)("ul",{children:[!e&&!!n&&n.length>0&&n.sort((function(t,e){return t.firstName.toUpperCase()>e.firstName.toUpperCase()})).sort((function(t,e){return t.lastName.toUpperCase()>e.lastName.toUpperCase()})).map((function(t){return Object(b.jsxs)("li",{className:"contact-list__item ".concat(!!c&&c.id===t.id&&"selected"),onClick:function(){return a(t.id)},children:[t.firstName," ",t.lastName]},"new-contact-".concat(t.id))})),!!c&&!!c.new&&c.new&&Object(b.jsx)("li",{className:"contact-list__item new selected",children:"(new contact)"})]})};return Object(b.jsxs)("div",{className:"contact-list",children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Contacts"}),Object(b.jsx)("div",{className:"contact-list__icon",onClick:function(){return i()},children:Object(b.jsx)(r.a,{icon:u.a})})]}),Object(b.jsx)(s,{})]})};var O=function(){var t=Object(c.useState)(!0),e=Object(l.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(!0),s=Object(l.a)(i,2),r=s[0],u=s[1],j=Object(c.useState)([]),d=Object(l.a)(j,2),m=d[0],O=d[1],p=function(){return{firstName:"",lastName:"",emails:[],new:!0,id:Date.now()}},x=Object(c.useState)(p()),v=Object(l.a)(x,2),N=v[0],g=v[1],C=function(t){g(m.find((function(e){return e.id===t})))};return Object(c.useEffect)((function(){n&&fetch("https://avb-contacts-api.herokuapp.com/contacts/paginated").then((function(t){return t.json()})).then((function(t){O(t.contacts),t.contacts.length>0&&N&&g(t.contacts[0])})).then(a(!1)).then(u(!1)).catch((function(t){console.error("There was an error!",t)}))}),[m,N,n]),Object(c.useEffect)((function(){void 0===N&&m?g(m[0]):void 0===N&&0===m.length&&g(p())}),[N,m]),Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(f,{isLoading:r,contacts:m,selectContact:C,addContact:function(){g(p())},contact:N}),Object(b.jsx)(h,{contact:N,isLoading:r,editContact:function(t,e){u(!0);var n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://avb-contacts-api.herokuapp.com/contacts/".concat(t),n).then((function(t){return t.json()})).then((function(t){var e=Object(o.a)(m);e[e.findIndex((function(e){return e.id===t.id}))]=t,O(e),g(t)})).then(u(!1)).catch((function(t){return console.log(t)}))},saveNewContact:function(t){u(!0);var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://avb-contacts-api.herokuapp.com/contacts/",e).then((function(t){return t.json()})).then((function(t){var e=Object(o.a)(m);e.push(t),O(e),g(t)})).then(u(!1)).catch((function(t){return console.log(t)}))},deleteContact:function(t){if(u(!0),N.new)g(m[0]);else{fetch("https://avb-contacts-api.herokuapp.com/contacts/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){var n=Object(o.a)(m),c=n.findIndex((function(e){return e.id===t}));n.splice(c,1),c<n.length&&n.length>0?g(n[c]):n.length>0?g(n[0]):g(p()),O(n)})).then(u(!1)).catch((function(t){return console.log(t)}))}},cancelChanges:function(t){N.new?g(m[0]):C(t)}})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),p()}},[[28,1,2]]]);
//# sourceMappingURL=main.2745cf27.chunk.js.map