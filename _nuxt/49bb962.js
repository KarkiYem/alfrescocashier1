(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{790:function(e,t,r){"use strict";r.r(t);r(10);var o=r(9),n=r(11);r(43);class l{constructor(e=null,t={}){if(this.apiKey=e,this.options=t,"undefined"==typeof window)throw new Error("google-maps is supported only in browser environment")}load(){return void 0!==this.api?Promise.resolve(this.api):void 0!==this.loader?this.loader:(window[l.CALLBACK_NAME]=()=>{if(this.api=window.google,void 0===this.resolve)throw new Error("Should not happen");this.resolve(this.api)},window.gm_authFailure=()=>{if(void 0===this.reject)throw new Error("Should not happen");this.reject(new Error("google-maps: authentication error"))},this.loader=new Promise(((e,t)=>{this.resolve=e,this.reject=t;const script=document.createElement("script");script.src=this.createUrl(),script.async=!0,script.onerror=e=>t(e),document.head.appendChild(script)})))}createUrl(){const e=[`callback=${l.CALLBACK_NAME}`];this.apiKey&&e.push(`key=${this.apiKey}`);for(let t in this.options)if(this.options.hasOwnProperty(t)){let r=this.options[t];"version"===t&&(t="v"),"libraries"===t&&(r=r.join(",")),e.push(`${t}=${r}`)}return`https://maps.googleapis.com/maps/api/js?${e.join("&")}`}}l.CALLBACK_NAME="_dk_google_maps_loader_cb";var c={layout:"DashboardLayout",mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,c,map,marker,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new l("my-api-key",{}),e.next=4,r.load();case 4:n=e.sent,40.748817,-73.985428,"#5e72e4",c=new n.maps.LatLng(40.748817,-73.985428),map=new n.maps.Map(document.getElementById("map-custom"),(t={center:{lat:40.748817,lng:-73.985428},zoom:8,scrollwheel:!1},Object(o.a)(t,"center",c),Object(o.a)(t,"mapTypeId",n.maps.MapTypeId.ROADMAP),Object(o.a)(t,"styles",[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#5e72e4"},{visibility:"on"}]}]),t)),marker=new n.maps.Marker({position:c,map:map,animation:n.maps.Animation.DROP,title:"Hello World!"}),'<div class="info-window-content"><h2>Argon Dashboard PRO</h2><p>A beautiful premium dashboard for Bootstrap 4.</p></div>',d=new n.maps.InfoWindow({content:'<div class="info-window-content"><h2>Argon Dashboard PRO</h2><p>A beautiful premium dashboard for Bootstrap 4.</p></div>'}),n.maps.event.addListener(marker,"click",(function(){d.open(map,marker)}));case 12:case"end":return e.stop()}}),e)})))()}},d=r(7),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-6"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[e._v(e._s(e.$route.name))]),e._v(" "),t("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[t("route-breadcrumb")],1)]),e._v(" "),t("div",{staticClass:"col-lg-6 col-5 text-right"},[t("base-button",{attrs:{size:"sm",type:"neutral"}},[e._v("New")]),e._v(" "),t("base-button",{attrs:{size:"sm",type:"neutral"}},[e._v("Filters")])],1)])]),e._v(" "),e._m(0)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card border-0"},[e("div",{staticClass:"map-canvas",staticStyle:{height:"600px"},attrs:{id:"map-custom"}})])])])])}],!1,null,null,null);t.default=component.exports}}]);