var routes = {};

function route(path, templateId, controller) {    
  routes[path] = {
    templateId: templateId,
    controller: controller
  };
}
var el = null;

function router() {  
  el = el || document.getElementById("viewer");  
  var url = location.hash.slice(1) || "/";  
  var route = routes[url];
  
  if (el && route.controller) {  
    el.innerHTML = tmpl(route.templateId, new route.controller());
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
