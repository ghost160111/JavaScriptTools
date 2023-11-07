class Base {
  private static objCount: number = 0;
  public static getObjCount(): number {
    return this.objCount++;
  }

  /**
   * @param {any} typeName                    Enter type that will be checked based on 'value' parameter
   * @param {any} value                       Enter value that will be checked based on 'typeName' parameter that you entered
   * @param {string} exceptionMessage         Optionally, enter custom exception message
   * @param {boolean} enableExceptionHandler  Optionally, enable handling exception using try...catch block
   */
  public static checkType(typeName: any, value: any, exceptionMessage: string, enableExceptionHandler: boolean): any {
    const checkingType = (): any => {  
      if (typeof value !== typeName) {
        if (exceptionMessage) {
          throw TypeError(exceptionMessage);
        }
        throw TypeError("Value parameter should be type of " + typeName + ", not type of " + typeof value);
      }

      return value;
    }

    const usingTryCatch = (): any => {
      try {
        return checkingType();
      } catch (error: any) {
        console.error(`${error.stack}`);
      }
    }

    return (enableExceptionHandler)
      ? usingTryCatch()
      : checkingType();
  }
}

interface App extends Base {
  appName: string;
  appDescription: string;
  appTechnologiesUsed: string[];
}

export default Base;