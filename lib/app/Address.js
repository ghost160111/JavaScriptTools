"use strict";

class Address {
  /** @type {string} */ _protocol;
  /** @type {string} */ _address;
  /** @type {number} */ _port;

  /**
   * @param {string} protocol 
   * @param {string} address 
   * @param {number} port 
   */
  constructor(protocol, address, port) {
    this._protocol = protocol;
    this._address = address;
    this._port = port;
  }

  get protocol() { return this._protocol; }
  get address() { return this._address; }
  get port() { return this._port; }
}

export default Address;