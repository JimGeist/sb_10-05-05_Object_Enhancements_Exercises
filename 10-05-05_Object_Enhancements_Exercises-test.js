describe("tests of functions createInstructor and createInstructorNew", function () {

    it("createInstructorNew returns the same object as createInstructorNew", function () {
        expect(JSON.stringify(createInstructorNew("Herbert", "Garrison"))).toEqual(JSON.stringify(createInstructor("Herbert", "Garrison")));
    });

});


describe("tests of ES5 and refactored ES2015 objects that compute property names", function () {

    it("passes test when the 2015 refactored object has the same value for firstName as the ES5 object", function () {
        expect(instructorNew.firstName).toEqual(instructor.firstName);
    });

    it("passes test when the ES2015 refactored and ES5 object both have 'That is my favorite' for computed property 22", function () {
        expect(instructorNew["22"]).toEqual(instructor["22"]);
    });

    it("passes test when ES2015 instructor1 object is the same as ES5 instructor object", function () {
        expect(JSON.stringify(instructorNew)).toEqual(JSON.stringify(instructor));
    });

});


describe("tests of ES5 and refactored ES2015 objects with methods", function () {

    it("passes test when the ES2015 refactored object return the same value when the sayHi() method is called", function () {
        expect(instructor1New.sayHi()).toEqual(instructor1.sayHi());
    });

    it("passes test when the ES2015 refactored object returns 'Hi!' when the sayHi() method is called", function () {
        expect(instructor1New.sayHi()).toEqual("Hi!");
    });

    it("passes test when the ES2015 refactored object return the same value when the sayBye() method is called", function () {
        expect(instructor1New.sayBye()).toEqual(instructor1.sayBye());
    });

    it("passes test when the ES2015 refactored object returns 'Jim says bye!' when the sayBye() method is called", function () {
        expect(instructor1New.sayBye()).toEqual("Jim says bye!");
    });

});


describe("tests of objects created with createAnimal function", function () {

    it("returns 'dog' for .species", function () {
        expect(createAnimal("dog", "bark", "Woooof!").species).toEqual("dog");
    });
    it("returns 'Woooof!' for .bark() method", function () {
        expect(createAnimal("dog", "bark", "Woooof!").bark()).toEqual("Woooof!");
    });

    it("returns 'sheep' for .species", function () {
        expect(createAnimal("sheep", "bleet", "BAAAAaaaa").species).toEqual("sheep");
    });
    it("returns 'BAAAAaaaa' for .bleet() method", function () {
        expect(createAnimal("sheep", "bleet", "BAAAAaaaa").bleet()).toEqual("BAAAAaaaa");
    });

    it("returns 'cat' for .species", function () {
        expect(createAnimal("cat", "happy", "puuurrrrrr").species).toEqual("cat");
    });
    it("returns 'puuurrrrrr' for .happy() method", function () {
        expect(createAnimal("cat", "happy", "puuurrrrrr").happy()).toEqual("puuurrrrrr");
    });

});

