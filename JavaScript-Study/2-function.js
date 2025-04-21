/* 🧠 Function কী?
👉 Function হলো — একটি নাম দেওয়া কোড ব্লক
যেটা যখনই দরকার তখন ডাকলেই কাজ করবে।

📢 সহজ ভাষায়:

তুমি একবার কোড লিখবে, বারবার ব্যবহার করতে পারবে।
এতে তোমার সময় ও কোড দুটোই বাঁচে! */

//🔥 Function এর গঠন (Syntax)

function functionName() {
    // এখানে তোমার কোড লিখবে
}

//👉 যখন তোমার দরকার হবে, তখন শুধু নাম লিখে call করবে:

functionName();


//✅ উদাহরণ ১ঃ সাধারণ Function

function sayHello() {
    console.log('Hello Function');

}
sayHello();


/* ✅ উদাহরণ ২ঃ Parameter ও Argument সহ Function
👉 যখন তোমার function-এর মধ্যে ডেটা পাঠাতে চাও তখন parameter ব্যবহার করা হয়। */

function greet(name) {
    console.log('Hello', + name + '!')
}
greet('Rohim');
greet('Korim');


/* ✅ উদাহরণ ৩ঃ Return Statement সহ Function
👉 Function কোনো মান (value) রিটার্ন করতে পারে। */
function add(a, b) {
    return a + b;
}
let result = add(4, 6);
console.log(result);


/* 💡 Function ব্যবহার কেন জরুরি?
✅ কোড কম লিখতে হয়।
✅ একই কাজ বারবার ব্যবহার করা যায়।
✅ কোড সুন্দর ও সহজ হয়।
✅ বড় প্রোগ্রামকে ছোট ছোট ভাগে আলাদা করা যায়। */

/* 🧠 Function Declaration (ঘোষণা করা ফাংশন)
এটা হচ্ছে সবচেয়ে সহজ এবং ক্লাসিক পদ্ধতি —
ফাংশন আগে থেকে define করে রাখা হয়, পরে প্রয়োজন হলে যেকোনো জায়গা থেকে call করা যায়। */

function functionName(parameters) {
    // কাজের কোড
}

/* 👉 বিশেষ বৈশিষ্ট্য:

ফাংশন declaration hoisting হয়।

অর্থাৎ ফাংশন উপরের দিকেই চলে যায়, তাই call করার সময় ফাংশনের উপরে বা নিচে রাখা যায়। */

sayHi();

function sayHi() {
    console.log("Hi!");
}

/* 🧠 Function Expression (এক্সপ্রেশন ফাংশন)
এক্ষেত্রে ফাংশনকে কোনো ভ্যারিয়েবলের মধ্যে রেখে define করা হয়।
ফাংশন নাম থাকা বা না থাকতেও পারে। */
const functionName = function (parameters) {
    // কাজের কোড
}

const greet = function (name) {
    console.log("Hello, " + name + "!");
}

greet("Karim");  // Output: Hello, Karim!

/* 👉 বিশেষ বৈশিষ্ট্য:

ফাংশন expression hoisting হয় না।

অর্থাৎ, ডিক্লেয়ার করার আগে call করলে Error দেখাবে। */

greet("Rahim");  // ❌ Error!

const greet = function (name) {
    console.log("Hello, " + name + "!");
}


/* 🧠 Arrow Function কী?
👉 Arrow Function হচ্ছে JavaScript-এ Function Expression লেখার শর্টকাট এবং সুন্দরভাবে ফাংশন লেখার পদ্ধতি।

ES6 (ECMAScript 2015) এ এটি যুক্ত হয়।
আরও কম কোড লিখে, পরিষ্কার ও দ্রুত ফাংশন তৈরি করা যায়। */

//💡 Arrow Function এর Basic Syntax

const functionName = (parameters) => {
    console.log('Code Here');
}

/* ✅ উদাহরণ ১ঃ সাধারন ফাংশন কে Arrow ফাংশন এ রূপান্তর */
//👉 সাধারণভাবে ফাংশন:
function greet(name) {
    return "Hello, " + name + "!";
}

//👉 Arrow Function এ রূপান্তর:
const greet = (name) => {
    return 'Hello' + name + '!'
}

/* ✅ উদাহরণ ২ঃ Return এক লাইনে (Short Syntax)
যদি ফাংশন শুধু return করে, তাহলে {} ও return লেখার দরকার নেই। */


const greet = (name) => 'Hello' + name + '!';
console.log(greet("Rahim"));  // Output: Hello, Rahim!

//✅ উদাহরণ ৩ঃ দুইটি প্যারামিটার
const add = (a, b) => a + b;
console.log(add(5, 3));  // Output: 8

//✅ উদাহরণ ৪ঃ প্যারামিটার না থাকলে
const sayHello = () => "Hello, World!";
console.log(sayHello());  // Output: Hello, World!


/* 💡 Return Statement কী?
👉 return হচ্ছে এমন একটি keyword, যেটা function থেকে কোন মান (value) বের করে দেয়।
যখন কোনো ফাংশন return পায়, তখন ফাংশন সেই মান ফেরত দেয়, এবং ফাংশনের কাজ সেখানেই থেমে যায়। */

//🧠 Syntax (গঠন):
function functionName(parameters) {
    return মান;
}

//✅ উদাহরণ ১ঃ সাধারণ Return
function add(a, b) {
    return a + b;
}

let result1 = add(5, 3);
console.log(result1);  // Output: 8

//✅ উদাহরণ ২ঃ Return ছাড়া ফাংশন
function greet(name) {
    console.log("Hello, " + name);
}

let result2 = greet("Rahim");
console.log(result2);  // Output: undefined

//✅ উদাহরণ ৩ঃ Return মান পেলেই ফাংশন থেমে যায়

function test() {
    return "এইটা রিটার্ন হবে";
    console.log("এই লাইন আর চলবে না!");
}

console.log(test());  // Output: এইটা রিটার্ন হবে


/* 💡 Return কেন দরকার?
✅ ফাংশনের বাইরে কোনো মান পাঠাতে।
✅ গণনা করে ফলাফল সংরক্ষণ করতে।
✅ ফাংশনকে অন্য ফাংশনের সাথে সংযোগ করতে।
✅ reusable logic তৈরি করতে। */

function multiple(a, b) {
    return a * b
}

const multiResult = multiple(4, 3);
console.log(multiResult);

