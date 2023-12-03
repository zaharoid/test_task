import{R as h,i as H,k as D,n,j as t,r as c,f as $,u as P,l as A,m as W}from"./index-9AYO4Pxy.js";function T(e=h){const o=e===h?H:D(e);return function(){const{store:i}=o();return i}}const _=T();function Y(e=h){const o=e===h?_:T(e);return function(){return o().dispatch}}const q=Y(),mt=n.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -25px -14.5px;
`,bt=n.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #8a8a89;

  margin-bottom: 8px;
`,I=({onClick:e,children:o,...r})=>t.jsx(t.Fragment,{children:t.jsx("button",{type:"button",onClick:e,...r,children:o})});var M;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},y.apply(this,arguments)}var N=function(o){return c.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:18,height:16},o),M||(M=c.createElement("path",{d:"M15.63 2.458a4.125 4.125 0 0 0-5.835 0L9 3.253l-.795-.795A4.126 4.126 0 0 0 2.37 8.293l.795.795L9 14.923l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835"})))};const z=n(N)`
  transition: all var(--animation);
`,x={stroke:"none",fill:"red",unlikedStroke:"rgba(255, 255, 255, 0.8",unlikedFill:"transparent"},U=n.li`
  position: relative;
  display: block;
  width: 274px;
  height: 426px;

  margin: 25px 14.5px;

  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
  }
`,V=n.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`,G=n.img`
  border-radius: 14px;

  width: 100%;
  height: 100%;
  object-fit: cover;
`,L=n.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 8px;

  color: var(--primary-text-color);
`,O=n.span`
  color: var(--primary-blue);
`,J=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,K=n.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--primary-text-color);
`,Q=n.div`
  gap: 4px 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 28px;

  & :last-child {
    border: none;
  }

  & :first-of-type {
    padding-left: 0;
  }
`,X=n.button`
  text-decoration: none;
  display: flex;

  width: 100%;
  height: 44px;
  border: none;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 12px, 99px;
  color: #524f4e;
  background: #b1e4f6;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover,
  :focus {
    background: var(--primary-blue);
    border: none;
    box-shadow: 0 10px 15px rgba(120, 164, 231, 0.4);
    color: #fff;
    transform: translateY(-1px);
    cursor: pointer;
  }
`,Z=n(I)`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,s=n.span`
  padding: 0 10px;
  border-right: 1px rgba(18, 20, 23, 0.1) solid;
`,wt=e=>e.adverts.items,jt=e=>e.adverts.isLoading,tt=e=>e.favorites.items;var E;function k(){return k=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},k.apply(this,arguments)}var et=function(o){return c.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},o),E||(E=c.createElement("path",{stroke:"#121417",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M18 6 6 18M6 6l12 12"})))};const nt=n(et)`
  width: 24.5px;
  height: 24.5px;
  transition: all var(--animation);
`,ot=n(I)`
  position: absolute;
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  top: 17px;
  right: 17px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  transition: all 250ms linear;
  cursor: pointer;
  padding: 0;

  &:hover {
    border-color: transparent;
    background-color: #20aee3;
  }
`,rt=n.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(18, 20, 23, 0.5);
  width: 100%;
  height: 100%;
`,it=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  padding: 30px;
  border-radius: 24px;
  animation-name: grow-box;
  animation-duration: 250ms;
  animation-timing-function: linear;

  @keyframes grow-box {
    0% {
      opacity: 0.2;
      transform: scale(0.1), translate(-50%, -50%);
    }
    50% {
      opacity: 0.6;
      transform: scale(0.9), translate(-50%, -50%);
    }

    100% {
      opacity: 1;
      transform: scale(1.5), translate(-50%, -50%);
    }
  }
`;n.span`
  color: #3470ff;
`;const st=({children:e,onClose:o})=>{const r=c.useMemo(()=>document.querySelector("html"),[]),i=document.querySelector("#modal-root");c.useEffect(()=>(r.style.overflowY="hidden",window.addEventListener("keydown",d),()=>{r.style.overflowY="",window.removeEventListener("keydown",d)}));function d(a){a.code==="Escape"&&o()}const p=a=>{a.target===a.currentTarget&&o()};return $.createPortal(t.jsx(rt,{onClick:p,children:t.jsx(it,{children:e})}),i)};n.div``;const at=n.img`
  border-radius: 14px;

  width: 100%;
  height: 100%;
  object-fit: cover;
`,lt=n.div`
  height: 248px;

  margin-top: 10px;
  margin-bottom: 14px;
`,ct=n.div`
  width: 277px;
  gap: 4px 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 14px;

  & :last-child {
    border: none;
  }

  & :first-of-type {
    padding-left: 0;
  }
`,dt=n.div`
  gap: 4px 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 14px;

  & :last-child {
    border: none;
  }

  & :first-of-type {
    padding-left: 0;
  }
`,pt=n.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  margin-bottom: 24px;
`,xt=n.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  margin-bottom: 8px;
`,ht=n.a`
  text-decoration: none;
  display: flex;
  width: 168px;
  height: 44px;
  border: none;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 12px, 99px;
  margin-top: 24px;
  color: white;
  background: #003cff;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    background: var(--primary-blue);
    box-shadow: 0 10px 15px rgba(27, 27, 28, 0.4);
    color: #fff;
    cursor: pointer;
  }
`,C=n.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`,gt=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,F=n.span`
  color: #3470ff;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
`,ft=({img:e,make:o,model:r,year:i,accessories:d,functionalities:p,address:a,id:g,type:f,fuelConsumption:u,engineSize:m,description:b,rentalConditions:w,mileage:j,rentalPrice:v})=>t.jsxs(t.Fragment,{children:[t.jsx(lt,{children:t.jsx(at,{src:e,alt:"car"})}),t.jsxs(L,{children:[o,t.jsxs(O,{children:[" ",r,","]}),t.jsxs("span",{children:[" ",i]})]}),t.jsxs(ct,{children:[t.jsx(s,{children:a}),t.jsxs(s,{children:["id: ",g]}),t.jsxs(s,{children:["year: ",i]}),t.jsxs(s,{children:["type: ",f]}),t.jsxs(s,{children:["Fuel Consumption: ",u]}),t.jsxs(s,{children:["engineSize: ",m]})]}),t.jsx(pt,{children:b}),t.jsx(xt,{children:"Accessories and functionalities:"}),t.jsxs(dt,{children:[d.map(l=>t.jsx(s,{children:l},l)),p.map(l=>t.jsx(s,{children:l},l))]}),t.jsxs(gt,{children:[t.jsx(C,{children:w}),t.jsxs(C,{children:["Mileage:"," ",t.jsx(F,{children:new Intl.NumberFormat("en-US").format(j)})]}),t.jsxs(C,{children:["Price: ",t.jsx(F,{children:v})]})]}),t.jsx(ht,{href:"tel:+110001111111",children:"Rental Car"})]}),vt=({car:e,fav:o})=>{const[r,i]=c.useState(o),[d,p]=c.useState(!1),{img:a,make:g,model:f,year:u,rentalPrice:m,rentalCompany:b,engineSize:w,address:j}=e,v=P(tt),l=q(),S=()=>{p(!1)},R=()=>{i(!r),!r&&!v.find(({id:B})=>e.id===B)&&l(A(e)),r&&l(W(e))};return t.jsxs(t.Fragment,{children:[t.jsxs(U,{children:[t.jsxs(V,{children:[t.jsx(Z,{onClick:R,children:r?t.jsx(z,{stroke:x.stroke,fill:x.fill}):t.jsx(z,{stroke:x.unlikedStroke,fill:x.unlikedFill})}),t.jsx(G,{src:a,alt:"car"})]}),t.jsxs(J,{children:[t.jsxs(L,{children:[g,t.jsxs(O,{children:[" ",f,","]}),t.jsxs("span",{children:[" ",u]})]}),t.jsx(K,{children:m})]}),t.jsxs(Q,{children:[t.jsx(s,{children:b}),t.jsx(s,{children:w}),t.jsx(s,{children:j})]}),t.jsx(X,{type:"button",onClick:()=>p(!0),children:"Learn more"})]}),d&&t.jsxs(st,{onClose:S,children:[t.jsx(ot,{onClick:S,children:t.jsx(nt,{})}),t.jsx(ft,{...e})]})]})};export{mt as C,bt as F,wt as a,vt as b,tt as f,jt as i,q as u};
