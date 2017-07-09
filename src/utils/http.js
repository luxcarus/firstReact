export default class Http {

  constructor(/*Object*/options){
    this.async = options.async || true,
    this.method = options.method || 'POST',
    this.url = options.url || null,
    this.whenSuccess = options.whenSuccess || function(){},
    this. whenError = options.whenError || function(){}    
  }

  getHttp(){

    let http = null, that = this;
    if (window.XMLHttpRequest) {
        http = new window.XMLHttpRequest();
    } else if (window.ActiveXObject) {
        http = new window.ActiveXObject("Microsoft.XMLHTTP");
    }

    // req.open('POST', 'http://localhost:12000/star/list', true);
    http.open(that.method, that.url, true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function (e) {
      if (http.readyState === 4) {
        if(http.status === 200){
          console.log('okay');
          that.whenSuccess({e,data:JSON.parse(http.responseText)})
        }else{
          console.log('not okay');
        }
    http.responseText }
    };
    console.log(http)
    return http;
  }
};