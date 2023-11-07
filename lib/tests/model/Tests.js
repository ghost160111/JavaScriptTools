class Test {
  testname;
  callback;

  constructor(testname, callback) {
    this.testname = testname;
    this.callback = callback;
  }

  runTest() {
    return this.callback();
  }
}

class Tests {
  collection = []; // collection of tests
  
  addTest(testname, callback) {
    this.collection.push(new Test(testname, callback));
  }

  deleteTest(testname) {
    for (let i = 0; i < this.collection.length; ++i) {
      if (testname === this.collection[i].testname) {
        this.collection[i].splice(i, 1);
      }
    }
  }

  runTest(testname) {
    for (let i = 0; i < this.collection.length; ++i) {
      if (testname === this.collection[i].testname) {
        return this.collection[i].callback();
      }
    }
  }
}

export { Test }
export default Tests;
