(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+rFB":function(e,t,a){},"/d1K":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=a("IP2g"),o=a("KSab"),s=a("Y7J9"),m=(a("sfvA"),o.config.friends),i=void 0===m?[]:m,u=function(){return n.a.createElement("div",{className:"friend"},n.a.createElement("p",null,"Рекомендуемые ссылки"),i.map((function(e){return n.a.createElement(s.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},f=(a("qfuT"),function(e){var t=e.posts;return n.a.createElement("div",{className:"latest-post"},n.a.createElement("p",null,"Последние статьи"),t.map((function(e){var t=e.node;return n.a.createElement(l.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),d=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return n.a.createElement("div",{className:"d-none d-lg-block information my-2"},n.a.createElement("hr",null),n.a.createElement("p",null,"Всего ",t," записей"),n.a.createElement("hr",null),n.a.createElement(f,{posts:a}),n.a.createElement("hr",null),n.a.createElement(u,null))});d.defaultProps={posts:[]};var g=d,h=(a("YX5f"),o.config.wordings),E=void 0===h?[]:h,p=o.config.githubUsername,v=(o.config.zhihuUsername,o.config.email),b=o.config.iconUrl,x=o.config.about,N=o.config.facebook,k=o.config.name,y=function(e){var t=e.href,a=e.icon;return n.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},n.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},n.a.createElement(c.a,{icon:a})))},w=function(e){var t=e.totalCount,a=e.latestPosts,r=e.pathPrefix;return n.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},n.a.createElement("div",{className:"about-me"},n.a.createElement(l.Link,{to:x,href:x,className:"name"},n.a.createElement("img",{className:"avatar",src:r+"/"+b,alt:"Calpa"}),n.a.createElement("h4",null,k)),n.a.createElement("p",{className:"mb-1"},E[0]),n.a.createElement("p",{className:"mb-3"},E[1]),n.a.createElement(y,{href:"https://github.com/"+p,icon:["fab","github"]}),n.a.createElement(y,{href:"mailto:"+v,icon:["far","envelope"]}),N&&n.a.createElement(y,{href:"https://www.facebook.com/"+N+"/",icon:["fab","facebook"]}),n.a.createElement(g,{totalCount:t,posts:a})))};w.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return n.a.createElement(l.StaticQuery,{query:"3920033386",render:function(e){return n.a.createElement(w,Object.assign({},e.all,e.limited,{pathPrefix:e.site.pathPrefix}))}})}},"9UDz":function(e,t,a){},Jz1z:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=function(e){var t=e.name,a=e.count;return n.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)};l.defaultProps={count:""},t.a=l},TRom:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("+ZDr"),c=a.n(l),o=a("ZO1O"),s=a("/d1K"),m=(a("U2Z3"),a("VYsE"),function(e){var t=e.color,a=e.text;return n.a.createElement("div",{className:"navlink",style:{color:t}},a)}),i=function(e){var t=e.test,a=e.url,r=e.text;return t?n.a.createElement(c.a,{to:""+a},n.a.createElement(m,{color:"#66ccff",text:r})):n.a.createElement(m,{color:"#7d7d7d",text:r})};t.default=function(e){var t=e.pageContext,a=(e.location,t.group),r=t.index,l=t.first,c=t.last,m=t.pathPrefix;console.log("pageContext",t);var u=r-1==1?"":"/"+m+"/"+(r-1),f="/"+m+"/"+(r+1);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row homepage",style:{marginTop:20}},n.a.createElement(s.a,null),n.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2"},n.a.createElement("div",{className:"row"},a.map((function(e){var t=e.node;return n.a.createElement(o.a,Object.assign({},t.frontmatter,{url:t.frontmatter.slug?t.frontmatter.slug:t.fields.slug,key:t.fields.slug}))}))),n.a.createElement("div",{className:"row",style:{justifyContent:"space-around",marginBottom:"20px"}},n.a.createElement("div",{className:"previousLink"},n.a.createElement(i,{test:!l,url:u,text:"Previous"})),n.a.createElement("div",{className:"nextLink"},n.a.createElement(i,{test:!c,url:f,text:"Next"})))),n.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})))}},U2Z3:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("0b+E"),c=a("IP2g"),o=(a("+rFB"),function(){return n.a.createElement("a",{className:"share-button",style:{lineHeight:"1.7rem",color:"#337ab7",paddingLeft:"0.15rem"},href:"#gitalk-container",onClick:function(){return l.a.event({category:"User",action:"Goto Comment Box"})}},n.a.createElement(c.a,{icon:["far","comment"]}))}),s=function(e){var t=e.url,a=e.hasCommentBox;return n.a.createElement("div",{className:"m-share-box"},n.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+t,title:"",className:"share-button",onClick:function(){return l.a.event({category:"Share",action:"Facebook Share"})}},n.a.createElement(c.a,{icon:["fab","facebook-f"]})),a&&n.a.createElement(o,null),n.a.createElement("a",{className:"share-button",href:"#header",onClick:function(){l.a.event({category:"User",action:"Scroll to Top"})},style:{lineHeight:"1.7rem",paddingLeft:"0.1rem"}},n.a.createElement(c.a,{icon:["fas","chevron-up"]})))};s.defaultProps={hasCommentBox:!0}},VYsE:function(e,t,a){},YX5f:function(e,t,a){},ZO1O:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=a("Jz1z"),o=a("f/UQ"),s=(a("9UDz"),function(e){var t,a=e.url,r=e.image,c=e.backgroundColor,s=e.date;return n.a.createElement(l.Link,{to:a,href:a},console.log("bcg",!!c),n.a.createElement("span",{className:"date"},s),n.a.createElement("div",{className:"wrapper",style:(t=r,{backgroundImage:" url("+Object(o.parseImgur)(t,"large")+")"})}))}),m=function(e){var t=e.title,a=e.date,r=e.url,o=e.headerImage,m=e.headerBackgroundColor,i=e.description,u=e.tags,f=void 0===u?[]:u;return n.a.createElement("div",{className:"col-sm-12 col-md-6 pb-4"},n.a.createElement("div",{className:"custom-card"},o&&n.a.createElement(s,{url:r,image:o,backgroundColor:m,date:a.split("T")[0]}),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"stats"},f.map((function(e){return n.a.createElement(c.a,{name:e,key:e})}))),n.a.createElement(l.Link,{to:r,href:r},n.a.createElement("h4",{className:"title glitch","data-text":t},t)),n.a.createElement("p",null,i),n.a.createElement(l.Link,{to:r,href:r},"Подробнее")))))};m.defaultProps={headerImage:"",tags:[],date:"",headerBackgroundColor:""},t.a=m},"f/UQ":function(e,t){var a=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},r=function(e){var t=e.href,r=e.title,n=e.text;return'<img class="lozad d-block mx-auto" data-src='+a(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(r,n)+" />"};e.exports={parseImgur:a,parseImageTag:r,getGalleryImage:function(e){var t=e.href,n=e.title,l=e.text;return'<a data-fancybox="gallery" href="'+a(t,"huge")+'">'+r({href:t,title:n,text:l})+"</a>"}}},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-index-js-e9aadca1a7c92b887101.js.map