class WebCompCollection {
  public static list: Map<any, any> = new Map();

  public static setComponent(key: string, constructorClass: CustomElementConstructor): void {
    this.list.set(key, constructorClass);
  }

  public static deleteComponent(key: string): void {
    this.list.delete(key);
  }

  public static getComponent(key: string): string {
    return this.list.get(key);
  }
}

export default WebCompCollection;