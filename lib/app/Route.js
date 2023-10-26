"use strict";

class Route {
  /** @type {string} */ _url;
  /** @type {string} */ _pageName;
  /** @type {string} */ _title;
  /** @type {string} */ _className;
  /** @type {object[]} */ _components = [];

  /**
   * @param {string} url
   * @param {string} pageName
   * @param {string} title
   * @param {string} className
   * @param {object[]} components
   */
  constructor(url, pageName, title, className, ...components) {
    this._url = url;
    this._pageName = pageName;
    this._title = title;
    this._className = className;
    this._components.push(...components);
  }

  get url() { return this._url; }
  get pageName() { return this._pageName; }
  get title() { return this._title; }
  get className() { return this._className; }
  get components() { return this._components; }
}

export default Route;