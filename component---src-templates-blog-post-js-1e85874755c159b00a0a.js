/*! For license information please see component---src-templates-blog-post-js-1e85874755c159b00a0a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+rFB":function(e,t,a){},"/d1K":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("IP2g"),c=a("KSab"),l=a("Y7J9"),s=(a("sfvA"),c.config.friends),u=void 0===s?[]:s,m=function(){return r.a.createElement("div",{className:"friend"},r.a.createElement("p",null,"Рекомендуемые ссылки"),u.map((function(e){return r.a.createElement(l.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},d=(a("qfuT"),function(e){var t=e.posts;return r.a.createElement("div",{className:"latest-post"},r.a.createElement("p",null,"Последние статьи"),t.map((function(e){var t=e.node;return r.a.createElement(o.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),g=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return r.a.createElement("div",{className:"d-none d-lg-block information my-2"},r.a.createElement("hr",null),r.a.createElement("p",null,"Всего ",t," записей"),r.a.createElement("hr",null),r.a.createElement(d,{posts:a}),r.a.createElement("hr",null),r.a.createElement(m,null))});g.defaultProps={posts:[]};var f=g,p=(a("YX5f"),c.config.wordings),h=void 0===p?[]:p,b=c.config.githubUsername,E=(c.config.zhihuUsername,c.config.email),v=c.config.iconUrl,k=c.config.about,y=c.config.facebook,w=c.config.name,A=function(e){var t=e.href,a=e.icon;return r.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},r.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},r.a.createElement(i.a,{icon:a})))},N=function(e){var t=e.totalCount,a=e.latestPosts,n=e.pathPrefix;return r.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},r.a.createElement("div",{className:"about-me"},r.a.createElement(o.Link,{to:k,href:k,className:"name"},r.a.createElement("img",{className:"avatar",src:n+"/"+v,alt:"Calpa"}),r.a.createElement("h4",null,w)),r.a.createElement("p",{className:"mb-1"},h[0]),r.a.createElement("p",{className:"mb-3"},h[1]),r.a.createElement(A,{href:"https://github.com/"+b,icon:["fab","github"]}),r.a.createElement(A,{href:"mailto:"+E,icon:["far","envelope"]}),y&&r.a.createElement(A,{href:"https://www.facebook.com/"+y+"/",icon:["fab","facebook"]}),r.a.createElement(f,{totalCount:t,posts:a})))};N.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return r.a.createElement(o.StaticQuery,{query:"3920033386",render:function(e){return r.a.createElement(N,Object.assign({},e.all,e.limited,{pathPrefix:e.site.pathPrefix}))}})}},"2yjy":function(e,t,a){},U2Z3:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("0b+E"),i=a("IP2g"),c=(a("+rFB"),function(){return r.a.createElement("a",{className:"share-button",style:{lineHeight:"1.7rem",color:"#337ab7",paddingLeft:"0.15rem"},href:"#gitalk-container",onClick:function(){return o.a.event({category:"User",action:"Goto Comment Box"})}},r.a.createElement(i.a,{icon:["far","comment"]}))}),l=function(e){var t=e.url,a=e.hasCommentBox;return r.a.createElement("div",{className:"m-share-box"},r.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+t,title:"",className:"share-button",onClick:function(){return o.a.event({category:"Share",action:"Facebook Share"})}},r.a.createElement(i.a,{icon:["fab","facebook-f"]})),a&&r.a.createElement(c,null),r.a.createElement("a",{className:"share-button",href:"#header",onClick:function(){o.a.event({category:"User",action:"Scroll to Top"})},style:{lineHeight:"1.7rem",paddingLeft:"0.1rem"}},r.a.createElement(i.a,{icon:["fas","chevron-up"]})))};l.defaultProps={hasCommentBox:!0}},X4Np:function(e,t,a){e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var a=t.querySelector("img"),n=!1;null===a&&(a=document.createElement("img"),n=!0),e&&t.getAttribute("data-iesrc")&&(a.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(a.alt=t.getAttribute("data-alt")),n&&t.append(a)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,o=void 0,i=0;i<=r.length-1;i++)(o=r[i].getAttribute("data-src"))&&(r[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var c=",";if(t.getAttribute("data-background-delimiter")&&(c=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(c).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var l=t.getAttribute("data-background-image-set").split(c),s=l[0].substr(0,l[0].indexOf(" "))||l[0];s=-1===s.indexOf("url(")?"url("+s+")":s,1===l.length?t.style.backgroundImage=s:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+s+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function a(e){e.setAttribute("data-loaded",!0)}var n=function(e){return"true"===e.getAttribute("data-loaded")},r=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,o,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,c),s=l.root,u=l.rootMargin,m=l.threshold,d=l.load,g=l.loaded,f=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(f=new IntersectionObserver((e=d,o=g,function(t,r){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(r.unobserve(t.target),n(t.target)||(e(t.target),a(t.target),o(t.target)))}))}),{root:s,rootMargin:u,threshold:m}));for(var p,h=r(i,s),b=0;b<h.length;b++)(p=h[b]).getAttribute("data-placeholder-background")&&(p.style.background=p.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=r(i,s),t=0;t<e.length;t++)n(e[t])||(f?f.observe(e[t]):(d(e[t]),a(e[t]),g(e[t])))},triggerLoad:function(e){n(e)||(d(e),a(e),g(e))},observer:f}}}()},YX5f:function(e,t,a){},e5BI:function(e,t,a){},qGWU:function(e,t,a){},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){},wtQ5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("TJpk"),i=a.n(o),c=a("KSab"),l=a.n(c),s=function(e){var t=e.url,a=e.title,n=e.description,o=e.image,c=(e.siteTitleAlt,e.isPost);return r.a.createElement(i.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:o}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,o=e.image,i=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:o}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:o},description:i}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),c?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{property:"fb:app_id",content:l.a.siteFBAppID?l.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:l.a.twitter_username?l.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:o}))};s.defaultProps={title:l.a.title},t.a=s},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return I}));var n=a("dI71"),r=a("q1tI"),o=a.n(r),i=(a("2yjy"),a("Wgwc")),c=a.n(i),l=a("KSab"),s=(l.config.maxPostsInPage,function(){return"undefined"!=typeof window}),u=function(e){return c()(e).format("DD/MM/YYYY")},m=(a("Y7J9"),a("/d1K")),d=a("X4Np"),g=a.n(d),f=function(e){function t(t){var a,n=(a=e.call(this,t)||this).props.post;return a.post=n,a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){s()&&g()(".lozad",{load:function(e){e.src=e.dataset.src,e.onload=function(){e.classList.add("animated"),e.classList.add("fadeIn")}}}).observe()},a.render=function(){var e=this.props.post;return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e},style:{padding:30,background:"white"}})},t}(r.Component),p=a("wtQ5"),h=(a("e5BI"),a("Wbzz")),b=function(e){var t=e.jueJinPostLink,a=e.jueJinLikeIconLink;return o.a.createElement("a",{href:t,rel:"external nofollow noopener noreferrer"},o.a.createElement("img",{src:a,alt:"JueJin Link",style:{cursor:"pointer",height:"1.2rem",marginBottom:"0.25rem"}}))};b.defaultProps={jueJinPostLink:"",jueJinLikeIconLink:""};var E=b,v=function(e){var t=e.img,a=e.title,n=e.subTitle,r=e.authorImage,i=e.authorName,c=e.jueJinPostLink,l=e.jueJinLikeIconLink,s=e.pathPrefix;return o.a.createElement("div",{className:"col-12 header",style:{padding:0},id:"header"},o.a.createElement("div",{className:"img-container",style:{backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("+t+")",marginTop:-58}},a&&o.a.createElement("h1",{className:"u-title"},a),n&&o.a.createElement("div",{className:"u-subtitle"},o.a.createElement("div",{className:"m-left"},r&&o.a.createElement("img",{src:s+"/"+r,className:"author-image",alt:i}),o.a.createElement("span",{className:"author-name"},i)),o.a.createElement("span",{className:"text"},n),c&&l&&o.a.createElement(E,{jueJinPostLink:c,jueJinLikeIconLink:l}))))};v.defaultProps={title:"",subTitle:"",authorName:"",authorImage:"",jueJinPostLink:"",jueJinLikeIconLink:""};var k=function(e){return o.a.createElement(h.StaticQuery,{query:"1003931674",render:function(t){return o.a.createElement(v,Object.assign({},e,{pathPrefix:t.site.pathPrefix}))}})},y=(a("U2Z3"),a("qGWU"),l.config.name),w=l.config.iconUrl,A=l.config.gitalk,N="undefined"!=typeof window?a("dnEz"):void 0,L=function(e){function t(t){var a;return(a=e.call(this,t)||this).data=a.props.data,a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.data.content.edges[0].node,t=e.frontmatter,a=e.id,n=t.title,r=t.id;new N(Object.assign({},A,{title:n,id:r||a})).render("gitalk-container")},a.render=function(){var e=this.data.content.edges[0].node,t=e.html,a=e.frontmatter,n=e.fields,r=e.excerpt,i=n.slug,c=a.date,l=a.headerImage,s=a.title;return o.a.createElement("div",{className:"row post order-2"},o.a.createElement(k,{img:l||"https://i.imgur.com/M795H8A.jpg",title:s,authorName:y,authorImage:w,subTitle:u(c)}),o.a.createElement(m.a,null),o.a.createElement("div",{className:"col-xl-7 col-lg-6 col-md-12 col-sm-12 order-10 content"},o.a.createElement(f,{post:t}),o.a.createElement("div",{id:"gitalk-container"})),o.a.createElement(p.a,{title:s,url:i,siteTitleAlt:"Calpa's Blog",isPost:!1,description:r,image:l||"https://i.imgur.com/M795H8A.jpg"}))},t}(r.Component),I="3781989212";t.default=L}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1e85874755c159b00a0a.js.map