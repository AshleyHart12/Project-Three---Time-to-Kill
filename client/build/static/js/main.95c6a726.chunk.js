(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(73)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),r=a.n(l),o=a(13),s=a(11);a.e(4).then(a.t.bind(null,74,7));var i=function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"main_nav"},c.a.createElement("ul",{className:"d-flex flex-row align-items-center justify-content-center"},c.a.createElement("li",null),c.a.createElement("li",null),c.a.createElement("li",null),c.a.createElement("a",{href:"/Quotes"}),c.a.createElement("li",null))),c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home_slider_container"},c.a.createElement("div",{className:"owl-carousel owl-theme home_slider"},c.a.createElement("div",{className:"slide"},c.a.createElement("div",{className:"home_slider_overlay"}),c.a.createElement("div",{className:"slide_wrap d-flex flex-column align-items-start justify-content-center"},c.a.createElement("div",{className:"home_container"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"home_content active"},c.a.createElement("div",{className:"home_subtitle"}),c.a.createElement("div",{className:"home_title"},c.a.createElement("h1",null,c.a.createElement("span",null),"Time to "),c.a.createElement("h1",null,"Kill")))))))))))))},m=a(1),u=a(3),h=a(6),d=a(4),v=a(12),p=a(5),f=(a(39),function(e){var t=e.color,a="cell-"+e.size+" "+t;return c.a.createElement("div",{className:a})}),E=(a(40),function(e){var t=e.grid,a=e.colors,n=Object.keys(t.nodes).map(function(e){return c.a.createElement(f,{key:e,color:a[t.nodes[e].color],size:t.size})});return c.a.createElement("div",{className:"grid"},n)}),g=(a(41),function(e){var t=e.color,a=e.colorIndex,n=e.clickHandler,l=e.incrementCount,r=t+" picker";return c.a.createElement("div",{className:r,onClick:function(e){l(),n(a)}})}),b=(a(42),function(e){var t=e.colors,a=e.clickHandler,n=e.incrementCount,l=t.map(function(e,t){return c.a.createElement(g,{color:e,key:"picker_"+e,colorIndex:t,clickHandler:a,incrementCount:n})});return c.a.createElement("div",{className:"pickers"},l)}),_=[0,1,2,3,4],y=function(e){for(var t=0,a=1,n=e.length;a<n;a++)Math.random()<1/(a+1)&&(t=a);return t},N=function e(t,a){Object(m.a)(this,e),this.id=t,this.color=a},k=function e(t,a,n){Object(m.a)(this,e),this.sourceId=t,this.destId=a,this.weight=n},C=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;Object(m.a)(this,e),this.size=t,this.nodes={},this.edgesByNode={};for(var a=0;a<t*t;a++)this.nodes[a]=new N(a,y(_));this.setEdgeWeights()}return Object(u.a)(e,[{key:"setEdgeWeight",value:function(e){var t=this.nodes[e].id,a=[],n=t-this.size,c=t+1,l=t+this.size,r=t-1;if(n>=0){var o=this.sameColor(t,n)?0:1;a.push(new k(t,n,o))}if(c%this.size>0){var s=this.sameColor(t,c)?0:1;a.push(new k(t,c,s))}if(l<this.size*this.size){var i=this.sameColor(t,l)?0:1;a.push(new k(t,l,i))}if(t%this.size!==0){var m=this.sameColor(t,r)?0:1;a.push(new k(t,r,m))}this.edgesByNode[t]=a}},{key:"setEdgeWeights",value:function(){var e=this;Object.keys(this.nodes).forEach(function(t){e.setEdgeWeight(t)})}},{key:"updateColor",value:function(e,t){this.nodes[e].color=t}},{key:"colorFill",value:function(e){for(var t=this,a=[],n=[0],c=[],l=function(){var l=n.pop();t.updateColor(l,e),a.push(l),t.edgesByNode[l].forEach(function(r){a.indexOf(r.destId)>-1||(0===r.weight&&n.push(r.destId),1===r.weight&&t.nodes[l].color===e&&c.push(l))})};n.length>0;)l();c.forEach(function(e){return t.setEdgeWeight(e)})}},{key:"sameColor",value:function(e,t){return this.nodes[e].color===this.nodes[t].color}}]),e}(),x=12,O=["blue","red","green","yellow","orange"],j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).incrementCount=a.incrementCount.bind(Object(v.a)(a)),a.sliderInput=a.sliderInput.bind(Object(v.a)(a)),a.restart=a.restart.bind(Object(v.a)(a)),a.colorFill=a.colorFill.bind(Object(v.a)(a)),a.state={size:x,graph:new C(x),colors:O,count:0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"incrementCount",value:function(){this.setState({count:this.state.count+1})}},{key:"restart",value:function(){this.setState({graph:new C(this.state.size),count:0})}},{key:"sliderInput",value:function(e){this.setState({size:e,graph:this.newGrid(e,this.state.colors),count:0})}},{key:"colorFill",value:function(e){this.state.graph.colorFill(e)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header",class:"row"},c.a.createElement("div",{class:"col-md-4"}),c.a.createElement("h1",{id:"colorTitle"},"Color Flood")),c.a.createElement("div",{class:"row",id:"newchanges"},c.a.createElement("div",{class:"col-md-5"}),c.a.createElement("div",{className:"newgame",onClick:function(t){return e.restart()}},"New Game"),c.a.createElement("div",{className:"count"},"Changes ",c.a.createElement("span",null,this.state.count))),c.a.createElement("div",null,c.a.createElement(b,{colors:this.state.colors,clickHandler:this.colorFill,incrementCount:this.incrementCount})),c.a.createElement("div",{className:"instructions"},c.a.createElement("h3",null,"Starting in the top left corner click on the circles to fill the grid! Try to get as few changes as possible!")),c.a.createElement("div",{id:"grid"},c.a.createElement(E,{grid:this.state.graph,colors:this.state.colors,size:this.state.size})))}}]),t}(n.Component),w=a(31),S=a.n(w);a(62);var T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={quote:""},a.callApi=function(){S.a.get("https://quotes.rest/qod.json?category=life").then(function(e){var t=e.data.contents.quotes[0].quote,n=e.data.contents.quotes[0].author;a.setState({quote:t,author:n})})},a.handleOnClick=function(e){a.callApi()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{id:"welcomeDiv"},c.a.createElement("div",null,c.a.createElement("h2",null,'"'+this.state.quote+'"'),c.a.createElement("h3",null,this.state.author))),c.a.createElement("button",{onClick:this.handleOnClick,className:"buttonQuote"},"Inspire Me"))}}]),t}(c.a.Component),I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).get=function(){return c.a.createElement("button",{name:a.props.name,className:"Button Button--".concat(a.state.type," ").concat(a.props.className),onClick:a.props.onClick,style:a.props.style},a.props.children)},a.state={type:e.type||"regular",link:e.link||!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.get();return this.state.link?c.a.createElement(o.b,{to:this.props.path||"#"},e):e}}]),t}(n.Component);a(71);var M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={recipe:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Landing"},c.a.createElement("div",{className:"Landing__banner"},c.a.createElement("h1",{className:"Landing__banner__heading"},"Meal Planning Made Easy")),c.a.createElement("div",{className:"Landing__data"},c.a.createElement("div",{className:"Landing__data__content"},c.a.createElement("h1",null,"Make your free time productive with the Meal Planning application."),c.a.createElement("h1",null,"Does this sound like you? "),c.a.createElement("ul",null,c.a.createElement("li",null,"Wasted a lot of time thinking about what I should make for dinner today."),c.a.createElement("li",null,"Want to watch what I eat but don't know how?"),c.a.createElement("li",null,"Not good at pre-planning meals"),c.a.createElement("li",null,"Want to track my weight and calorie intake")),c.a.createElement(I,{type:"accent",link:!0,path:"/survey",className:"Landing__data__button"},"Let's find that meal plan"))))}}]),t}(c.a.Component),P=a(15),L=a(16),B=function(e){return c.a.createElement("select",{value:e.value,onChange:e.handler,name:e.name,className:"Select ".concat(e.className)},e.options.map(function(e){return c.a.createElement("option",{value:e.val,key:e.val},e.text)}))},z=function(){return"_"+Math.random().toString(36).substr(2,9)},D=function(e){return c.a.createElement("div",{className:"".concat(e.className)},e.data.map(function(t){return a=t,n=e.toggleHandler,l=e.isCheckedState,c.a.createElement(A,{name:a.name,handler:n,key:a.name,isChecked:!!l[a.name],text:a.text});var a,n,l}))},A=function(e){var t=e.name,a=e.text,n=e.isChecked,l=e.handler,r=z();return c.a.createElement("div",{className:"Checkbox"},c.a.createElement("label",{htmlFor:r,className:"Checkbox__label ".concat(e.className)},c.a.createElement("input",{id:r,name:t,type:"checkbox",checked:n,onChange:function(){l(t)}}),a))},F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).passPropsToChildren=function(){var e=a.props,t=e.children,n=e.handleChange,l=e.activeIndex;return c.a.Children.map(t,function(e,t){return c.a.cloneElement(e,{index:t,onChange:n,checked:t===l})})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"RadioGroup ".concat(this.props.className)},this.passPropsToChildren())}}]),t}(n.Component),q=function(e){var t=z();return c.a.createElement("div",null,c.a.createElement("input",{className:"Radio",type:"radio",checked:e.checked,name:e.name,id:t,onChange:function(){e.onChange(e.index)}}),c.a.createElement("label",{htmlFor:t,className:e.className},e.children))},W=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){return a.setState({activeIndex:e})},a.passPropsToTabs=function(){var e=a.props.children;return c.a.Children.map(e,function(e,t){return c.a.cloneElement(e,{index:t,onClick:a.handleClick,active:t===a.state.activeIndex})})},a.renderTabContent=function(){var e=a.props.children,t=a.state.activeIndex;if(e[t])return e[t].props.children},a.state={activeIndex:e.defaultIndex||0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Tabs ".concat(this.props.className)},c.a.createElement("ul",{className:"Tabs__head"},this.passPropsToTabs()),c.a.createElement("div",{className:"Tabs__content"},this.renderTabContent()))}}]),t}(n.Component),H=function(e){return c.a.createElement("li",{className:"Tab ".concat(e.className)})},R={selectOpt:{mealCount:[{val:3,text:"Three"},{val:5,text:"Five"},{val:2,text:"Two"}],planType:[{val:7,text:"Weekly"},{val:1,text:"Daily"}]},dietSpec:[{name:"balanced",text:"Balanced Diet (Recommended)"},{name:"low-carb",text:"Low-Carb (Less than 20% of total calories from carbs)"},{name:"low-fat",text:"Low-Fat (Less than 15% of total calories from fat)"}],healthSpec:[{name:"vegan",text:"Vegan (No meat, poultry, fish, dairy, eggs or honey)"},{name:"vegetarian",text:"Vegetarian (No wheat, can have gluten though)"},{name:"alcohol-free",text:"Alcohol-free (No alcohol used or contained)"},{name:"peanut-free",text:"Peanut Free (No peanuts or products containing peanuts)"}],mealTypes:{3:["Breakfast","Lunch","Dinner"],5:["Breakfast Snack","Breakfast","Lunch","Afternoon Snack","Dinner"],2:["Brunch","Dinner"]},calories:{min:1800,max:2500}},G={ID:"f7842ed1",KEY:"9a7e5d00b1e8814fa4cd90d1d9abb91c",URL:"https://api.edamam.com/search?"},Q=function(e,t,a){if(!e.plan||!e.meals||!e.calories||!e.diet)return!1;var n=parseInt(e.plan,10),c=e.meals.length,l={min:Math.round(parseInt(e.calories.min,10)/c),max:Math.round(parseInt(e.calories.max,10)/c)},r="";e.health&&(r=U(e.health,"health"));for(var o=e.meals,s={},i=0;i<c;i++){var m=o[i],u="q=".concat(m,"&app_id=").concat(t,"&app_key=").concat(a,"&to=").concat(n,"&diet=").concat(e.diet).concat(r,"&calories=gte ").concat(l.min,", lte ").concat(l.max);s[m]=u}return s},U=function(e,t){var a="&";for(var n in e)"true"===e[n].toString()&&(a+="".concat(t,"=").concat(n,"&"));return a.slice(0,-1)},K=function(e){var t=G.URL,a=Q(e,G.ID,G.KEY),n=[],c={},l=function(e){var l=encodeURI(t+a[e]);n.push(fetch(l).then(function(e){return e.json()}).then(function(t){c[e]=t.hits}).catch(function(e){return console.error(e)}))};for(var r in a)l(r);return Promise.all(n).then(function(){return c})},J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).handleHealth=function(e){a.setState(function(t){var a=!t.healthPreferences[e]||!t.healthPreferences[e];return{healthPreferences:Object(L.a)({},t.healthPreferences,Object(P.a)({},e,a))}})},a.handleSelect=function(e){var t=e.target;a.setState(Object(P.a)({},t.name,parseInt(t.value,10)))},a.handleCalories=function(e){var t=1===parseInt(e,10)?"custom":"rec";a.setState({calories:Object(L.a)({},a.state.calories,{activeIndex:e,selected:t})})},a.setCalories=function(e){var t=e.target;if(t.value){var n=parseInt(t.value,10);isNaN(n)&&(n=0),a.setState({calories:Object(L.a)({},a.state.calories,Object(P.a)({},t.name,n))})}},a.handleDiet=function(e){var t=a.data.dietSpec[e].name;a.setState({diet:{activeIndex:e,name:t}})},a.goTo=function(e){e.preventDefault();var t=a.tabs;switch(e.target.name){case"next":t.handleClick(t.state.activeIndex+1);break;case"back":t.handleClick(t.state.activeIndex-1)}},a.getMealPlan=function(e){e.preventDefault();var t=a.state,n=t.mealCount,c=t.planType,l=t.healthPreferences,r=t.calories,o=t.diet,s=a.data.mealTypes[n],i={plan:c,health:l,calories:{min:r.min,max:r.max},diet:o.name,meals:s};a.setState({loading:!0},function(){K(i).then(function(e){var t={num:a.state.planType,data:e};a.setState({loading:!1,redirect:!0,data:t})})})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.data=R;var e=this.data.selectOpt.mealCount[0].val,t=this.data.selectOpt.planType[0].val,a={activeIndex:0,name:this.data.dietSpec[0].name},n={activeIndex:0,selected:"rec",min:this.data.calories.min,max:this.data.calories.max};this.setState({mealCount:e,planType:t,healthPreferences:{},calories:n,diet:a,loading:!1,redirect:!1})}},{key:"render",value:function(){var e=this,t=this.data,a=t.selectOpt,n=t.dietSpec,l=t.healthSpec;return c.a.createElement("div",{className:"Survey"},this.state.loading?c.a.createElement("div",{className:"Survey__loading"},c.a.createElement("h1",{className:"Survey__loading__heading"},"Chopping those onions"),c.a.createElement("i",{className:"fa fa-spinner Survey__loading__icon","aria-hidden":"true"})):c.a.createElement("div",{className:"Survey__content"},c.a.createElement("div",{className:"Survey__heading"},c.a.createElement("h1",null,"Some quick questions to generate that awesome meal plan ..")),c.a.createElement("form",null,c.a.createElement(W,{defaultIndex:0,ref:function(t){e.tabs=t},className:"Survey__tabs"},c.a.createElement(H,{heading:"1"},c.a.createElement("h2",null,"How many meals do you have ( or want to have ) in a day?"),c.a.createElement(B,{name:"mealCount",value:this.state.mealCount,handler:this.handleSelect,options:a.mealCount}),c.a.createElement("div",{className:"Survey__goto"},c.a.createElement(I,{name:"next",onClick:this.goTo,className:"Survey__goto__button--next"},"Next"))),c.a.createElement(H,{heading:"2"},c.a.createElement("h2",null,"Choose a plan type"),c.a.createElement(B,{name:"planType",value:this.state.planType,handler:this.handleSelect,options:a.planType}),c.a.createElement("div",{className:"Survey__goto"},c.a.createElement(I,{name:"back",onClick:this.goTo,className:"Survey__goto__button--back"},"Back"),c.a.createElement(I,{name:"next",onClick:this.goTo,className:"Survey__goto__button--next"},"Next"))),c.a.createElement(H,{heading:"3"},c.a.createElement("h2",null,"Any dietary preferences?"),c.a.createElement(F,{handleChange:this.handleDiet,activeIndex:this.state.diet.activeIndex},n.map(function(e){return c.a.createElement(q,{key:e.name},e.text)})),c.a.createElement("div",{className:"Survey__goto"},c.a.createElement(I,{name:"back",onClick:this.goTo,className:"Survey__goto__button--back"},"Back"),c.a.createElement(I,{name:"next",onClick:this.goTo,className:"Survey__goto__button--next"},"Next"))),c.a.createElement(H,{heading:"4"},c.a.createElement("h2",null,"Any health preferences?"),c.a.createElement(D,{data:l,toggleHandler:this.handleHealth,isCheckedState:this.state.healthPreferences}),c.a.createElement("div",{className:"Survey__goto"},c.a.createElement(I,{name:"back",onClick:this.goTo,className:"Survey__goto__button--back"},"Back"),c.a.createElement(I,{name:"next",onClick:this.goTo,className:"Survey__goto__button--next"},"Next"))),c.a.createElement(H,{heading:"5"},c.a.createElement("h2",null,"Calorie intake"),c.a.createElement(F,{handleChange:this.handleCalories,activeIndex:this.state.calories.activeIndex},c.a.createElement(q,null,"Go with recommended"),c.a.createElement(q,null,"Choose custom values")),"custom"===this.state.calories.selected?c.a.createElement("div",{className:"Survey__input--custom"},c.a.createElement("input",{placeholder:"min",type:"number",name:"min",onChange:this.setCalories,value:this.state.calories.min}),c.a.createElement("input",{placeholder:"max",type:"number",name:"max",onChange:this.setCalories,value:this.state.calories.max})):null,c.a.createElement("div",{className:"Survey__goto"},c.a.createElement(I,{name:"back",onClick:this.goTo,className:"Survey__goto__button--back"},"Back"),c.a.createElement(I,{onClick:this.getMealPlan,className:"Survey__goto__button--next"},"Get Plan!")))))),this.state.redirect?c.a.createElement(s.a,{to:{pathname:"/meal-plan",state:{data:this.state.data}}}):null)}}]),t}(n.Component),V=a(20),Y=function(e){return c.a.createElement("div",{className:"Tag ".concat(e.className)},c.a.createElement("i",{className:"Tag__icon ".concat(e.icon)}),c.a.createElement("span",{className:"Tag__Name"},e.name))},X=function(e){return c.a.createElement("a",{className:"Meal",href:e.url,target:"_blank"},c.a.createElement("div",{className:"Meal__head"},e.type),c.a.createElement("div",{className:"Meal__content"},c.a.createElement("div",{className:"Meal__content__img"},c.a.createElement("img",{src:e.imgSrc,alt:"Unavailable"})),c.a.createElement("div",{className:"Meal__content__desc"},c.a.createElement("h2",{className:"Meal__content__desc--heading"},e.heading),c.a.createElement("h4",{className:"Meal__content__desc--source"},e.source)),c.a.createElement("div",{className:"Meal__content__labels"},e.tags.map(function(t,a){return c.a.createElement(Y,{icon:e.tags.icon,name:t,key:"Tag__".concat(a)})}))))},Z=function(e,t,a){var n=[];for(var l in t){var r=t[l][a];r&&n.push({label:l,content:r})}return c.a.createElement(H,{heading:e,key:"Tab__".concat(a)},n.map(function(e,t){var n=e.content.recipe,l=n.dietLabels?n.dietLabels:{},r=n.healthLabels?n.healthLabels:{};return c.a.createElement(X,{type:e.label,imgSrc:n.image?n.image:null,heading:n.label?n.label:null,source:n.source?n.source:null,tags:[].concat(Object(V.a)(l),Object(V.a)(r)),url:n.url?n.url:"#",key:"Meal__".concat(t,"_").concat(a)})}))},$=function(e){if(!e.location||!e.location.state||!e.location.state.data)return c.a.createElement("div",null);var t=e.location.state.data;return c.a.createElement("div",{className:"Plan"},function(e,t){for(var a=[],n=0;n<e;n++){var l=Z("Day ".concat(n+1),t,n);a.push(l)}return c.a.createElement(W,{defaultIndex:0,className:"Plan__tabs"},a.map(function(e){return e}))}(t.num,t.data))};a.e(3).then(a.t.bind(null,75,7));var ee=function(){return c.a.createElement("nav",{className:"navbar navbar-default",id:"navBar"},c.a.createElement("a",{className:"navbar-brand",href:"/"},c.a.createElement("font",{color:"white"},"Home")),c.a.createElement("a",{className:"navbar-brand",href:"/Quotes"},c.a.createElement("font",{color:"White"},"Quotes")),c.a.createElement("a",{className:"navbar-brand",href:"/GameApp"},c.a.createElement("font",{color:"white"},"Games")),c.a.createElement("a",{className:"navbar-brand",href:"/Recipe"},c.a.createElement("font",{color:"white"},"Recipes")))};var te=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(ee,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:i}),c.a.createElement(s.b,{path:"/GameApp",component:j}),c.a.createElement(s.b,{path:"/Quotes",component:T}),c.a.createElement(s.b,{path:"/Recipe",component:M}),c.a.createElement(s.b,{path:"/survey",component:J}),c.a.createElement(s.b,{path:"/meal-plan",component:$}))))};a(72);r.a.render(c.a.createElement(te,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.95c6a726.chunk.js.map