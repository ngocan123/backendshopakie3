(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{259:function(e,t,a){"use strict";var n=a(272),s=a.n(n).a.create({baseURL:"http://localhost:3008/api/",timeout:1e4,withCredentials:!0});t.a=s},536:function(e,t,a){"use strict";a.r(t);var n,s=a(333),r=a(85),l=a(86),c=a(88),o=a(87),i=a(89),u=a(90),m=a(0),p=a.n(m),h=a(290),d=a(291),E=a(248),f=a(249),g=a(251),b=a(253),v=a(252),w=a(277),k=a(289),y=a(259),N=a(327),j=a(265),O=a.n(j),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={posts:[],author:"",page:1,current:1,pages:1},n=Object(u.a)(Object(u.a)(a)),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getDats(),document.addEventListener("scroll",this.trackScrolling)}},{key:"getDats",value:function(){var e=this,t={keyword:n.state.keyword,page:n.state.page};y.a.get("product/list?"+O.a.stringify(t)).then(function(t){n.setState({posts:t.data.posts,current:t.data.current,pages:t.data.pages}),e.showPaginate(),console.log(n.state.pages)})}},{key:"deletePost",value:function(e){y.a.post("/product/remove",{_id:e}).then(function(e){n.getDats()})}},{key:"tabRows",value:function(){return n.state.posts.map(function(e,t){return p.a.createElement(P,{post:e})})}},{key:"changeKeyword",value:function(e){n.setState({keyword:e.target.value}),setTimeout(function(){n.getDats()},500)}},{key:"activePagination",value:function(e){n.setState({page:e}),console.log(n.state.page),this.getDats()}},{key:"showPaginate",value:function(){for(var e=[],t=1;t<=n.state.pages;t++)e.push({p:t});return console.log(e),e.map(function(e,t){return p.a.createElement(h.a,null,p.a.createElement(d.a,{onClick:function(){return n.activePagination(e.p)},tag:"button","data-id":parseInt(t)+parseInt(1)},parseInt(t)+parseInt(1)))})}},{key:"render",value:function(){return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(E.a,null,p.a.createElement(f.a,null,p.a.createElement(g.a,null,p.a.createElement(b.a,null,p.a.createElement("i",{className:"fa fa-align-justify"})," Danh s\xe1ch s\u1ea3n ph\u1ea9m",p.a.createElement(N.a,{to:"/product/create"},p.a.createElement("button",{className:"btn btn-sm btn-success flor"},p.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," Th\xeam"))),p.a.createElement("div",{className:"h15"}),p.a.createElement("div",null,p.a.createElement("div",Object(s.a)({className:"col-sm-4"},"className","col-sm-3 flol"),p.a.createElement("input",{type:"text",onBlur:this.changeKeyword,className:"form-control",placeholder:"T\xean s\u1ea3n ph\u1ea9m"}))),p.a.createElement(v.a,null,p.a.createElement(w.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"\u1ea2nh"),p.a.createElement("th",null,"T\xean"),p.a.createElement("th",null,"Danh m\u1ee5c"),p.a.createElement("th",null,"Hi\u1ec3n th\u1ecb"),p.a.createElement("th",null,"H\xe0nh \u0111\u1ed9ng"))),p.a.createElement("tbody",null,this.tabRows())),p.a.createElement("nav",null,p.a.createElement(k.a,null,this.showPaginate())))))))}}]),t}(m.Component);t.default=D;var P=function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).call(this,e))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement("tr",null,p.a.createElement("td",{className:"text-center wtd100"},p.a.createElement("img",{className:"w8",src:"https://ai-shop2.herokuapp.com"+this.props.post.imagePath})),p.a.createElement("td",null,this.props.post.name),p.a.createElement("td",null,this.props.post.description),p.a.createElement("td",null,this.props.post.author?this.props.post.author.email:""),p.a.createElement("td",{className:"text-center"},p.a.createElement(N.a,{to:"/product/edit/"+this.props.post._id},p.a.createElement("button",{className:"btn btn-sm btn-warning mar-3"},p.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})," S\u1eeda")),p.a.createElement("button",{className:"btn btn-sm btn-danger mar-3",onClick:function(){return n.deletePost(e.props.post._id)}},p.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})," X\xf3a")))}}]),t}(m.Component)}}]);
//# sourceMappingURL=60.c4c5222d.chunk.js.map