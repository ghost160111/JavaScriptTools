"use strict";

import DOMBase from "./DOMBase.js";

/**
 * Ajax library that is inherited from DOMBase library
 */
class Ajax extends DOMBase {
  /**
   * Retrieving data asynchronously from a server in a different domain in vanilla JavaScript is straight forward and very similar to same-origin Ajax GET requests. The following helper works in modern browsers and Internet Explorers 9+:
   * @param {string} url
   * @param {any} success
   * @return {XMLHttpRequest}
   */
  static getCORS(url, success) {
    let xhr = new XMLHttpRequest();
    if (!("withCredentials" in xhr)) xhr = new XDomainRequest(); // fix IE8/9
    
    xhr.open("GET", url);
    xhr.onload = success;
    xhr.send();
    
    return xhr;
  }

  /**
   * The following helper function allows sending an Ajax request via GET method - an equivalent to jQuery's $.get(). Its url argument must contain the full request path including all GET parameters:
   * @param {string} url URL to request data
   * @param {void} success function that handles request and sets the rule to data binding
   */
  static getAjax(url, success) {
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
      if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
    };
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send();
    
    return xhr;
  }

  /**
   * Sending POST requests is quite similar ($.post() in jQuery). However, there are lots of options available - more than can be covered in one post. Here's a useful helper function to get you started:
   * @param {string} url
   * @param {any} data
   * @param {void} success
   */
  static postAjax(url, data, success) {
    let params = typeof data == 'string' ? data : Object.keys(data).map(
      function(k) { 
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
      }
    ).join('&');

    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
      if (xhr.readyState > 3 && xhr.status == 200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    
    return xhr;
  }

  /**
   * The following helper function serializeArray() takes one argument, a form node, and returns the form data as an array of name/value pairs
   * @param {any}
   */
  static serializeDataToArray(form) {
    let field, l, s = [];
    if (typeof form == 'object' && form.nodeName == "FORM") {
      let len = form.elements.length;
      for (let i = 0; i < len; ++i) {
        field = form.elements[i];
        if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
          if (field.type == 'select-multiple') {
            l = form.elements[i].options.length; 
              for (j = 0; j < l; ++j) {
                if (field.options[j].selected) {
                  s[s.length] = {
                    name: field.name, 
                    value: field.options[j].value 
                  };
                }
              }
          } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
            s[s.length] = { name: field.name, value: field.value };
          }
        }
      }
    }
    return s;
  }

  /**
   * The following helper function serialize() takes one argument, a form node, and returns the form data as URL-encoded query string
   */
  static serializeInToQueryString(form) {
    let field, l, s = [];
    if (typeof form == 'object' && form.nodeName == "FORM") {
      let len = form.elements.length;
      for (var i = 0; i < len; ++i) {
        field = form.elements[i];
        if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
          if (field.type == 'select-multiple') {
            l = form.elements[i].options.length; 
            for (var j = 0; j < l; ++j) {
              if (field.options[j].selected)
                s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
            }
          } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
            s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
          }
        }
      }
    }
    return s.join('&').replace(/%20/g, '+');
  }
}

/**
 * Call this method to see examples result of using Ajax library
 */
const examples = () => {
  // Example request of getCORS method
  Ajax.getCORS("http://foo.bar/?p1=1&p2=Hello+World", (request) => {
    let response = request.currentTarget.response || request.target.responseText;
    console.log(response);
  });

  // Example request of getAjax method
  // The key thing is you add url as the first parameter and function that do something with the data.
  // That means you write logic how to get that data, under which conditions you get that data, and etc...
  Ajax.getAjax("http://foo.bar/?p1=1&p2=Hello+World", function(data){ console.log(data); });

  // example request
  Ajax.postAjax("http://foo.bar/", "p1=1&p2=Hello+World", function(data){ console.log(data); });

  // example request with data object
  Ajax.postAjax("http://foo.bar/", { p1: 1, p2: "Hello World" }, function(data){ console.log(data); });
}

export default Ajax;