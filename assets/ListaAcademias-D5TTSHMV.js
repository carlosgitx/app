import{r as t,j as e,L as i,d as v,g as N}from"./index-DLYnREFz.js";function C(){const[s,n]=t.useState(!1),c=()=>n(!s);return e.jsx(e.Fragment,{children:e.jsxs("nav",{className:"bg-white border-gray-200 dark:bg-gray-800 rounded-lg mt-2",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsx("div",{className:"felx items-center",children:e.jsx("div",{className:"flex-shrink-0",children:e.jsx("p",{href:"/",className:"text-lg text-gray-500 sm:text-center dark:text-gray-400 sm:px-6 lg:px-8",children:"Ligas/Administrar/Academias"})})}),e.jsx("div",{className:"hidden md:block",children:e.jsx("div",{className:"ml.4 flex items-center space-x-4",children:e.jsx(i,{to:"/addCopa",className:"py-3 px-5 sm:ms-4 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-70",children:"+ Crear"})})}),e.jsx("div",{className:"md:hidden felx items-center",children:e.jsx("button",{className:`inline:flex items-center justify-center p-2 rounded-md\r
               text-white md:text-white hover:text-white focus:outline-none focus:ring-2 \r
               focus:ring-inset focus:ring-white`,onClick:c,children:s?e.jsx("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})})]})}),s&&e.jsx("div",{className:"md:hidden",children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:e.jsx(i,{to:"/addCopa",className:"block py-3 px-5 sm:ms-4 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-70",children:"+ Crear"})})})]})})}function F(){t.useState(null);const[s,n]=t.useState("");t.useState(!1);const{id:c}=t.useContext(v),l="http://localhost/xampp/houseFoot/myapi/clases/",g="22071966",[u,d]=t.useState(!1),[m,x]=t.useState(""),[h,p]=t.useState([]),[o,b]=t.useState({word:g,tabla:"academias",accion:"getAll",id:c,academia:"",tecnico:"",email:"",whatsapp:"",comentario:"",activo:0,detalle:""}),f=()=>{b({...o,tabla:"academias",accion:"getByBuscar",academia:m})},k=a=>{if(a.key==="Enter"){var r=document.getElementById("buscar");r.click()}},w=a=>{x(a.target.value)};t.useEffect(()=>{y(o)},[o]);const y=a=>{const r=new FormData;r.append("word",a.word),r.append("tabla",a.tabla),r.append("accion",a.accion),r.append("id",a.id),r.append("academia",a.academia),r.append("tecnico",a.tecnico),r.append("email",a.email),r.append("whatsapp",a.whatsapp),r.append("comentario",a.comentario),r.append("activo",a.activo),r.append("detalle",a.detalle),j(r)},j=async a=>{try{d(!0);const r=await N(a);if(r.status===200)switch(o.tabla){case"academias":p(r.data);break;default:}}catch(r){console.log(r.message),n(r.message)}finally{setTimeout(()=>{d(!1)},1e3)}};return e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsxs("div",{className:"max-w-md mx-auto mt-3",children:[e.jsx("label",{htmlFor:"default-search",className:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",children:"Buscar"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:e.jsx("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),e.jsx("input",{type:"search",name:"default-search",id:"default-search",autoComplete:"off",autoFocus:!0,value:m,onChange:w,onKeyDown:k,className:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Buscar academia...",required:!0}),e.jsx("button",{id:"buscar",name:"buscar",onClick:()=>f(),className:"text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Buscar"})]})]}),u?e.jsxs("center",{className:"mt-4",children:[e.jsx("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:e.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})," ",e.jsx("h1",{className:"text-lg text-yellow-300 sm:text-center dark:text-yellow-400 sm:px-6 lg:px-12 mt-4",children:"Cargando por favor espere..."})]}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-white grid gap-4 grid-cols-4 py-2 mt-1",children:h.map(a=>e.jsxs(i,{className:" dark:bg-gray-900 px-4 pt-1 pb-4 mb-1 focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-800 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-70",to:`/editAcademia/${a.regId}`,children:[a.dirFoto&&e.jsx("center",{className:"mt-2",children:e.jsx("img",{src:l+a.dirFoto,className:"mx-auto mb-1 w-24 h-24 rounded-full",alt:" Logo"})}),!a.dirFoto&&e.jsx("center",{className:"mt-1",children:e.jsx("img",{src:l+"imagenes/noDisponible.jpg",className:"mx-auto mb-2 w-24 h-24 rounded-full",alt:" Logo"})}),e.jsx("center",{children:e.jsx("h1",{className:"tmb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white",children:a.nombre})})]},a.regId))})})]})}export{F as default};
