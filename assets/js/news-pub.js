window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme27"]=window.wsb["Theme27"]||window.radpack("@widget/LAYOUT/bs-layout27-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=/<script[^>]*>([\s\S]*)<\/script>/;let l,n,i;function s(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function c(e){if(i=document.getElementById(o),!i)return;l=document.createElement("div"),l.style.cssText="width:100%;",i.prepend(l),n=document.createElement("div"),n.setAttribute("data-freemium-ad",!0),n.style.cssText="overflow:hidden;width:100%;z-index:10000;position:fixed;left:0;",n.innerHTML=(e||"").replace(r,""),i.prepend(n);const t=`${n.offsetHeight}px`;if(l.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=r.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else n.addEventListener("click",s,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?c(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),c(e))})).catch((()=>{}))}(),function(){!a&&n&&n.removeEventListener("click",s,{useCapture:!0}),i&&(i.removeChild(l),i.removeChild(n))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-92365\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"default\",\"\"],\"colors\":[\"#ffffff\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"5551bae8-7a0b-40c7-b58b-4c96f636bf99\":{\"pageId\":\"c7504d9d-4d89-4657-bd5a-54407cf11734\",\"routePath\":\"/\"},\"fccd6a61-6d00-4f7e-b841-b661a2cf874f\":{\"pageId\":\"c7504d9d-4d89-4657-bd5a-54407cf11734\",\"widgetId\":\"2c5d7827-240e-4acc-be6f-f0d3866b5e4f\",\"routePath\":\"/\"}},\"isInternalPage\":true,\"navigationMap\":{\"5221e197-1642-4e9f-970d-954d54461ca3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5221e197-1642-4e9f-970d-954d54461ca3\",\"name\":\"EVENTS\",\"href\":\"/events.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"de7a04c3-0a32-447b-875c-f73a90013255\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"de7a04c3-0a32-447b-875c-f73a90013255\",\"name\":\"Insurance Plans\",\"href\":\"/insurance-plans.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"c7504d9d-4d89-4657-bd5a-54407cf11734\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c7504d9d-4d89-4657-bd5a-54407cf11734\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"APPOINTMENTS\",\"SHOP_PRODUCT_GROUP\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ece7666b-3b79-499c-9fab-a0c7fe90a4d9\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ece7666b-3b79-499c-9fab-a0c7fe90a4d9\",\"name\":\"Shop\",\"href\":\"/shop\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"SHOP\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"34721647-912a-4cf0-9134-0216e4999324\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"34721647-912a-4cf0-9134-0216e4999324\",\"name\":\"Designer In The  News\",\"href\":\"/designer-in-the-news.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"acb2ecd4-bad7-4384-8c07-feb92d746081\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"acb2ecd4-bad7-4384-8c07-feb92d746081\",\"name\":\"Our Young Models\",\"href\":\"/our-young-models.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"2a461fc0-c2b7-4ab4-a501-72ea5b012c02\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2a461fc0-c2b7-4ab4-a501-72ea5b012c02\",\"name\":\"TuhiTuhi\",\"href\":\"/tuhituhi\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"SHOP_PRODUCT_GROUP\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"95522f9c-b66d-4534-949b-3fb4b7cde8d5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"95522f9c-b66d-4534-949b-3fb4b7cde8d5\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"PRIVACY\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"3b71a402-8a2b-48ac-b235-566b79e2a18e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3b71a402-8a2b-48ac-b235-566b79e2a18e\",\"name\":\"Forms\",\"href\":\"/forms.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"356de37b-78ce-49c0-9dfb-89e06512b02f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"356de37b-78ce-49c0-9dfb-89e06512b02f\",\"name\":\"Terms and Conditions\",\"href\":\"/terms-and-conditions.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"TERMS_CONDITIONS\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#ffffff\",\"meta\":{\"primary\":\"rgb(255, 255, 255)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]}}},\"theme\":\"Theme27\",\"paintJob\":\"LIGHT\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Search-Component',props:JSON.parse("{\"isShopPage\":false,\"shopPageId\":\"ece7666b-3b79-499c-9fab-a0c7fe90a4d9\",\"shopRoute\":\"/shop\",\"staticContent\":{\"search_placeholder\":\"Search Products\"},\"domainName\":\"docvisioneyecarecenters.com\",\"pageRoute\":\"/designer-in-the-news.html\",\"searchFormLocation\":\"DESKTOP_NAV\",\"formContainerId\":\"n-9236492368-utility-menu\",\"membershipOn\":false,\"onHomepage\":false,\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"UtilitiesMenu\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xxlarge\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Search-Component"},false);
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-CartIcon-Component',props:JSON.parse("{\"isShopPage\":false,\"appointmentsPageId\":\"c7504d9d-4d89-4657-bd5a-54407cf11734\",\"shopPageId\":\"ece7666b-3b79-499c-9fab-a0c7fe90a4d9\",\"shopRoute\":\"/shop\",\"accountId\":\"6727aca1-7abb-11eb-8202-3417ebe725e0\",\"websiteId\":\"fe4a3d59-c968-4a72-a535-abb53277607e\",\"olsStatus\":\"PROVISION_SUCCESS\",\"olsAccountStatus\":\"ACTIVE\",\"rootDomain\":\"\",\"domainName\":\"docvisioneyecarecenters.com\",\"pageRoute\":\"/designer-in-the-news.html\",\"isReseller\":false,\"staticContent\":{\"cartProducts\":\"Products\",\"cartServices\":\"Services\",\"cartIcon\":\"Shopping Cart Icon\"},\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"UtilitiesMenu\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xxlarge\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-CartIcon-Component"},false);
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-92372\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBar-92366\",\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xxlarge\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:i,inlineUtilitiesMenu:l,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(I),l&&(g=s.pop(),f(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,f),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,f),f(p)}else s.forEach(f),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.K||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function I(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function f(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(i)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-92371\",\"containerId\":\"navBar-92366\"}"));
Core.utils.deferBootstrap({elId:'bs-4',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-92364-navId-mobile\",\"uniqueId\":\"n-92364\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xxlarge\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
Core.utils.deferBootstrap({elId:'bs-5',componentName:'@widget/LAYOUT/bs-CartIcon-Component',props:JSON.parse("{\"isShopPage\":false,\"appointmentsPageId\":\"c7504d9d-4d89-4657-bd5a-54407cf11734\",\"shopPageId\":\"ece7666b-3b79-499c-9fab-a0c7fe90a4d9\",\"shopRoute\":\"/shop\",\"accountId\":\"6727aca1-7abb-11eb-8202-3417ebe725e0\",\"websiteId\":\"fe4a3d59-c968-4a72-a535-abb53277607e\",\"olsStatus\":\"PROVISION_SUCCESS\",\"olsAccountStatus\":\"ACTIVE\",\"rootDomain\":\"\",\"domainName\":\"docvisioneyecarecenters.com\",\"pageRoute\":\"/designer-in-the-news.html\",\"isReseller\":false,\"staticContent\":{\"cartProducts\":\"Products\",\"cartServices\":\"Services\",\"cartIcon\":\"Shopping Cart Icon\"},\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"UtilitiesMenu\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xxlarge\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-CartIcon-Component"},false);
Core.utils.deferBootstrap({elId:'bs-6',componentName:'@widget/LAYOUT/bs-Search-Component',props:JSON.parse("{\"searchBgStyle\":{\"backgroundColor\":\"searchMobilePrimary\"},\"isShopPage\":false,\"shopPageId\":\"ece7666b-3b79-499c-9fab-a0c7fe90a4d9\",\"shopRoute\":\"/shop\",\"inNavigationDrawer\":true,\"staticContent\":{\"search_placeholder\":\"Search Products\"},\"domainName\":\"docvisioneyecarecenters.com\",\"pageRoute\":\"/designer-in-the-news.html\",\"keepOpen\":true,\"searchFormLocation\":\"NAV_DRAWER\",\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"1cb41cc5-c528-483e-a07c-5c05076a0810\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"NavigationDrawer\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xxlarge\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Search-Component"},false);
window.wsb["CookieBannerScript"]=function({id:e,acceptCookie:t,dismissCookie:o}){let a,n,i;function r(e,t=60){const o=new Date;o.setTime(o.getTime()+864e5*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function l(e){document.cookie=`${e}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`}function s(e){return document.cookie.includes(e)}function c(){n&&n.removeEventListener("click",d),i&&i.removeEventListener("click",u),a.style.display="none"}function p(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}function g(){s(o)||(a=document.getElementById(`${e}-banner`),n=document.getElementById(`${e}-accept`),i=document.getElementById(`${e}-decline`),n&&n.addEventListener("click",d),i&&i.addEventListener("click",u),a.style.transform="translateY(-500px)")}function d(e){e.preventDefault(),p(),r(o),r(t),c()}function u(e){e.preventDefault(),r(o),s(t)&&l(t),c()}!s(t)||navigator.globalPrivacyControl?setTimeout((()=>{navigator.globalPrivacyControl?(window._allowCT=!1,s(o)&&l(o),s(t)&&l(t),c()):g()}),200):p()};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"70a5e5be-4163-49e3-914c-f546877ec928\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
window.wsb['context-bs-7']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"default\",\"\"],\"colors\":[\"#ffffff\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"5551bae8-7a0b-40c7-b58b-4c96f636bf99\":{\"pageId\":\"c7504d9d-4d89-4657-bd5a-54407cf11734\",\"routePath\":\"/\"},\"fccd6a61-6d00-4f7e-b841-b661a2cf874f\":{\"pageId\":\"c7504d9d-4d89-4657-bd5a-54407cf11734\",\"widgetId\":\"2c5d7827-240e-4acc-be6f-f0d3866b5e4f\",\"routePath\":\"/\"}},\"isInternalPage\":true,\"navigationMap\":{\"5221e197-1642-4e9f-970d-954d54461ca3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5221e197-1642-4e9f-970d-954d54461ca3\",\"name\":\"EVENTS\",\"href\":\"/events.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"de7a04c3-0a32-447b-875c-f73a90013255\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"de7a04c3-0a32-447b-875c-f73a90013255\",\"name\":\"Insurance Plans\",\"href\":\"/insurance-plans.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"c7504d9d-4d89-4657-bd5a-54407cf11734\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c7504d9d-4d89-4657-bd5a-54407cf11734\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"APPOINTMENTS\",\"SHOP_PRODUCT_GROUP\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ece7666b-3b79-499c-9fab-a0c7fe90a4d9\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ece7666b-3b79-499c-9fab-a0c7fe90a4d9\",\"name\":\"Shop\",\"href\":\"/shop\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"SHOP\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"34721647-912a-4cf0-9134-0216e4999324\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"34721647-912a-4cf0-9134-0216e4999324\",\"name\":\"Designer In The  News\",\"href\":\"/designer-in-the-news.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"acb2ecd4-bad7-4384-8c07-feb92d746081\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"acb2ecd4-bad7-4384-8c07-feb92d746081\",\"name\":\"Our Young Models\",\"href\":\"/our-young-models.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"2a461fc0-c2b7-4ab4-a501-72ea5b012c02\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2a461fc0-c2b7-4ab4-a501-72ea5b012c02\",\"name\":\"TuhiTuhi\",\"href\":\"/tuhituhi\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"SHOP_PRODUCT_GROUP\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"95522f9c-b66d-4534-949b-3fb4b7cde8d5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"95522f9c-b66d-4534-949b-3fb4b7cde8d5\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"PRIVACY\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"3b71a402-8a2b-48ac-b235-566b79e2a18e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3b71a402-8a2b-48ac-b235-566b79e2a18e\",\"name\":\"Forms\",\"href\":\"/forms.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"356de37b-78ce-49c0-9dfb-89e06512b02f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"356de37b-78ce-49c0-9dfb-89e06512b02f\",\"name\":\"Terms and Conditions\",\"href\":\"/terms-and-conditions.html\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"TERMS_CONDITIONS\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#ffffff\",\"meta\":{\"primary\":\"rgb(255, 255, 255)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]}}},\"theme\":\"Theme27\"}");
Core.utils.renderBootstrap({elId:'bs-7',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.\",\"conversationsWebHost\":\"https://conversations.\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.\",\"reamazeApiHost\":\"https://{{brandId}}reamaze.\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze--loader.js\"},\"businessName\":\"DOC Vision Eye Care Centers, LLC\",\"reamazeBrandId\":\"fe4a3d59-c968-4a72-a535-abb53277607e\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"emailOptInEnabled\":true,\"domainName\":\"docvisioneyecarecenters.com\",\"cookieBannerEnabled\":true,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"accountId\":\"6727aca1-7abb-11eb-8202-3417ebe725e0\",\"websiteId\":\"fe4a3d59-c968-4a72-a535-abb53277607e\",\"id\":\"7df6d28d-1bbf-45a5-a133-488ea6df094f\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"REAMAZE\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeStarter1\":\"I have a question\",\"reamazeThemeColor\":\"#ffffff\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"7df6d28d-1bbf-45a5-a133-488ea6df094f\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"7df6d28d-1bbf-45a5-a133-488ea6df094f\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xxlarge\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-7',radpack:"@widget/MESSAGING/bs-Component"});
document.getElementById('page-92363').addEventListener('click', function() {}, false);
"use strict";window.dataLayer = window.dataLayer || [], window.gtag = window.gtag || function () {window.dataLayer.push(arguments);}, gtag("consent", "default", {ad_storage: "denied",ad_user_data: "denied",ad_personalization: "denied",analytics_storage: "denied"});