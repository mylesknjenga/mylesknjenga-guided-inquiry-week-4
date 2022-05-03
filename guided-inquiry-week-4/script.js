// EASY:  Write a function that would allow you to do this:
//        var run = exercise('running');
//        console.log(run()); // prints "Today's exercise: running"
//        var swim = exercise('swimming');
//        console.log(swim()); // prints "Today's exercise: swimming"

var exercise = action => `Todays's exercise: ${action}`;

//Tests
var run = exercise("running");
console.log(run);
var swim = exercise("swimming");
console.log(swim);


/*************************************************************************************************************/

// MEDIUM: Write a function that would allow you to do this:
//         var sharePizza = cutPizzaSlices(8);
//         console.log(sharePizza(2));
//         prints "Each person gets 4.00 slices of pizza"
//         console.log(sharePizza(3));
//         prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices (slices) {
    function dividePizza(people){
        var total = Math.round((slices/people) * 100)/100;
        return `Each person gets ${total} slices of pizza.`;
    };
    return dividePizza;
};

//Tests
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));


/*************************************************************************************************************/

// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable
//     Information)that cannot be accessed directly. The object should have at least two properties: name and
//     ssn. Only the name property should be accessible, and it should be called through a public function.
//     The ssn property should not be accessible at all.
//     Creating private objects and private properties helps you control who has access to what data and
//     helps you prevent people who shouldn't see important info like social security numbers from getting
//     access to the data.
//     You can use 'getName' or other get methods to access data that people might need. For example,
//     people addressing a package or email may need a customer's name, but they definitely shouldn't have
//     access to their ssn


const person = () => {
    const allInfo = () => {
        let pii = {
            name : "James",
            ssn : 444223333,
            getName : function () {
                return this.name
            }
        }
        return pii.getName();
    }
    const publicFunction = () => allInfo();
    return publicFunction();

};

//TEST
console.log(person());

/*************************************************************************************************************/


//Very hard

//Create a Person constructor that has three properties: name, job, and age.
class Person {

    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    };

    exercise() {
        console.log("I love to exercise");
    };

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
};

//Create a Programmer constructor that inherits all the members from Person with an additional
//'languages' property that is passed in and a busy property that is NOT passed in and is set to
//true by default.

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    };

    completeTask() {
        this.busy = false;
    };

    acceptNewTask() {
        this.busy = true;
    };

    offerNewTask () {
        if (this.busy === true) {
            console.log(`${this.name} can't accept any new tasks right now `);
        } else {
            console.log(`${this.name} would like to take on a new responsibility`);
        };
    };

    learnLanguage(lang) {
        this.languages.push(lang);
    };
    
    listLanguages() {
        console.log(this.languages);
    };
};

//Must include an array as an argument for languages parameter
const Trinity = new Programmer("Trinity", "Frontend Developer", 21, []);

//TESTS
console.log(Trinity);
Trinity.exercise();
Trinity.fetchJob();
Trinity.offerNewTask();
Trinity.completeTask();
Trinity.offerNewTask();
Trinity.learnLanguage("Javascript");
Trinity.listLanguages();
Trinity.learnLanguage("PHP");
Trinity.listLanguages();