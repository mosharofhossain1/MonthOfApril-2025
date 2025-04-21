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
