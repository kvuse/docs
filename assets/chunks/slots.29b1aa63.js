import{_ as i,h as d,r as o,o as v,i as b,w as e,b as n,e as s,t as k,d as g}from"../app.f54bbb1a.js";const f=s("\u81EA\u5B9A\u4E49\u8868\u5934"),h={class:"text-right"},x=s(" \u786E\u8BA4 "),N={__name:"slots",setup(S){const r=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address",custom:"address",header:"header-address"}],_=d([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),t=d([]),c=()=>{console.log("multipleSelection.value: ",t.value)};return(V,l)=>{const p=o("el-tag"),u=o("k-button"),m=o("k-picker");return v(),b(m,{"table-column":r,"table-data":_.value,modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=a=>t.value=a)},{"header-address":e(()=>[n(p,null,{default:e(()=>[f]),_:1})]),address:e(({row:a})=>[s(k(`custom: ${a.address}`),1)]),footer:e(()=>[g("div",h,[n(u,{type:"primary",onClick:c},{default:e(()=>[x]),_:1})])]),_:1},8,["table-data","modelValue"])}}};var A=i(N,[["__scopeId","data-v-6e1badb5"]]);export{A as default};
