"use strict";

import Address from "./Address.js";
import Route from "./Route.js";

class Router {
  /** @type {string} */ _generalTitle = "GGC -";
  /** @type {object[]} */ _pages = [];
  /** @type {Element} */ _app = document.querySelector("#app");
  /** @type {Element} */ _mainContent = document.createElement("main");
  /** @type {Element} */ _navigationList = document.querySelector(".nav__list");
  /** @type {object} */ _address = undefined;
  /** @type {string} */ _sharedAddress = undefined;

  /**
   * @param {string} protocol
   * @param {string} address
   * @param {number} port
   * @param {object[]} pages
   */
  constructor(protocol, address, port, ...pages) {
    this._mainContent.setAttribute("class", "main");
    this._address = new Address(protocol, address, port);
    this._sharedAddress = `${this._address.protocol}://${this._address.address}:${this._address.port}`;

    for (let i = 0; i < pages.length; ++i) {
      this._pages.push(
        this.validate(
          pages[i].url, 
          pages[i].pageName, 
          pages[i].title, 
          pages[i].className, 
          ...pages[i].components
        )
      );

      let navLists = document.createElement("li");
      navLists.innerHTML = `<a class="nav__link" href="${pages[i].url}">${pages[i].pageName}</a>`;

      if (this._navigationList !== null) {
        this._navigationList.appendChild(navLists);
      } else {
        console.log(`${this._navigationList} element is null`);
      }
    }
  }

  /**
   * This method lets you route over navigation to other pages dynamically without refreshing the page
   */
  route() {
    const navLinks = document.querySelectorAll(".nav__link");
    
    for (let i = 0; i < this._pages.length; ++i) {
      let title = this._generalTitle + " " + this._pages[i].title;

      if (document.URL === `${this._sharedAddress}/${this._pages[i].url}` || document.URL === `${this._sharedAddress}${this._pages[i].url}`) {
        document.title = title;
        navLinks[i].classList.add("active");
        
        for (let j = 0; j < this._pages[i].components.length; ++j) {
          this._mainContent.appendChild(this._pages[i].components[j].htmlElement);
        }
      }
      
      navLinks[i].addEventListener("click", () => {
        document.title = title;
        this.setActive(`${this._sharedAddress}/${this._pages[i].url}` || `${this._sharedAddress}${this._pages[i].url}`);
      });
    }
  }

  /**
   * This method sets active page, using specific url like /home, /about, etc...
   * @param {string} url
   */
  setActive(url) {
    const navLinks = document.querySelectorAll(".nav__link");
    for (let i = 0; i < this._pages.length; ++i) {
      for (let j = 0; j < this._pages[i].components.length; ++j) {
        try {
          if (url === `${this._sharedAddress}/${this._pages[i].url}` || url === `${this._sharedAddress}${this._pages[i].url}`) {
            navLinks[i].classList.add("active");
            this._mainContent.appendChild(this._pages[i].components[j].htmlElement);
            this._mainContent.classList.add("active");
            setTimeout(() => this._mainContent.classList.remove("active"), 1200);
          } else {
            navLinks[i].classList.remove("active");
            this._mainContent.removeChild(this._pages[i].components[j].htmlElement);
          }
        } catch (e) {
          // code works but throughs unexpected errors
          //console.error(`${e.stack}`);
        }
      }
    }
  }

  /**
   * This method renders main content of the page, you should specify where to render the content
   * @param {string} parentSelector
   * @param {string} insertBeforeSelector
   */
  renderMainContent(parentSelector, insertBeforeSelector) {
    let parentElement = document.querySelector(parentSelector);

    if (!insertBeforeSelector) {
      parentElement.appendChild(this._mainContent);
    } else {
      let insertBeforeElement = document.querySelector(insertBeforeSelector);
      parentElement.insertBefore(this._mainContent, insertBeforeElement);
    }
  }

  /**
   * This method sets general title, e.g: JavaScript -, JavaScript DOM -, etc... 
   * @param {string} title
   */
  setGeneralTitle(title) {
    this._generalTitle = title;
  }

  /**
   * This method validates and creates object through Route class instance
   * @param {string} url 
   * @param {string} pageName 
   * @param {string} title 
   * @param {string} className 
   * @param {object[]} components
   * @return {Route}
   */
  validate(url, pageName, title, className, ...components) {
    return new Route(
      url, 
      pageName, 
      title, 
      className, 
      ...components
    );
  }

  /**
   * This method destroys router, test prototype. 
   * @return {undefined}
   */
  destroy() {
    Router.prototype = undefined;
    return undefined;
  }

  /**
   * Getter, gets list (collection) of pages 
   * @return {object[]}
   */
  get pages() {
    return this._pages;
  }
}

export default Router;