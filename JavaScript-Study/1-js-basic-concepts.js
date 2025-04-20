
//💡 var — পুরনো স্টাইল

var name = 'Karim'
var name = 'Rahim';  //✅ পুনরায় মান দেয়া যায়:
console.log(name);

//❗ সমস্যা: var function scope — block এর বাইরে চলে যায়।
// (আধুনিক JavaScript-এ var কম ব্যবহার করা হয়।)


//💡 let — আধুনিক ও নিরাপদ

let age = 24;
console.log(age);
age = 30;   //✅ মান পরিবর্তন করা যায়:
console.log(age);

//❗ block scope এর ভিতর কাজ করে, তাই var থেকে নিরাপদ।



//💡 const — অপরিবর্তনীয় মান

const country = 'Bangladesh';
country = "India"; // Error!  ❌ মান পরিবর্তন করা যায় না:

//✅ যদি ডেটা কখনও পরিবর্তন করার দরকার না হয়, const ব্যবহার করা উচিত।


/*
⚡ Variable Naming Rules (নাম দেয়ার নিয়ম)
✅ নাম শুরু হবে letter, _ বা $ দিয়ে।
✅ নামের মধ্যে স্পেস থাকা যাবে না।
✅ নাম Case Sensitive — myName এবং myname আলাদা।
*/



// ================Data Types =======================

/*
🧾 Data Types কী?
Data Types মানে হলো, কোন ধরণের ডেটা ভ্যারিয়েবলে সংরক্ষিত হচ্ছে তা নির্ধারণ করা।

যেমনঃ

সংখ্যা হলে ➡️ Number

টেক্সট হলে ➡️ String

সত্য-মিথ্যা হলে ➡️ Boolean

খালি মান হলে ➡️ Null / Undefined

অনেক মান একসাথে রাখতে হলে ➡️ Object / Array
*/

//💡 JavaScript এর মূল Data Types


/* 1️⃣ String
টেক্সট ডেটা সংরক্ষণের জন্য। */

let name2 = 'Kakak';
let city = 'Mymensingh';

//👉 চিহ্ন: '' (single quotes) অথবা "" (double quotes)।


/* 2️⃣ Number
সংখ্যা সংরক্ষণের জন্য। */

let number1 = 23;
let price = 34.78;

console.log(price);

//👉 পূর্ণসংখ্যা ও দশমিক — দুটোই Number।

/* 3️⃣ Boolean
True অথবা False মান রাখে। */

let isAdult = true;
let isLoggedIn = false;
//👉 Decision-making (শর্ত) এর জন্য ব্যবহৃত হয়।

/* 4️⃣ Null
ইচ্ছাকৃতভাবে খালি মান। */

let job = null;

//👉 মান নেই, কিন্তু ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে।


/* 5️⃣ Undefined
ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে, কিন্তু মান দেওয়া হয়নি। */

let car;

/* 6️⃣ Object
Key-Value পেয়ার আকারে ডেটা সংরক্ষণ। */

let person = {
    name: 'sumon',
    age: 23,
    city: 'Dhaka'
}

// 👉 অনেক গুলো মান একসাথে রাখার জন্য খুবই উপকারী।


/* 7️⃣ Array
একসাথে অনেক মান সংরক্ষণের জন্য। */

let fruits = ['Apple', 'Banana', 'cherifol'];

/* 👉 Index Number দিয়ে অ্যাক্সেস করা হয়।
(প্রথম মানের index = 0) */


// ==================Operators==================

/* 🧾 Operators কী?
Operator মানে হলো — বিশেষ চিহ্ন বা প্রতীক, যা দিয়ে জাভাস্ক্রিপ্টে কোনো ডেটা বা মানের উপর কাজ করা হয়।
👉 যেমন: যোগ, বিয়োগ, তুলনা, মান বসানো ইত্যাদি। */


//1️⃣ Arithmetic Operators (গাণিতিক অপারেটর)
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a % b);  // 1

//2️⃣ Assignment Operators (মান বসানোর অপারেটর)
let x = 10;
x += 5;  // x = 15


//3️⃣ Comparison Operators (তুলনা করার অপারেটর)
console.log(5 == '5');  // true
console.log(5 === '5'); // false

//4️⃣ Logical Operators (যুক্তি অপারেটর)
let age1 = 25;
let hasId = true;

if (age1 >= 18 && hasId) {
    console.log("You are allowed.");
}


// ================Condiational Statement============

/* 🧠 Conditional Statements কি?
যখন আমরা চাই প্রোগ্রাম কোনো শর্ত যাচাই করে নির্দিষ্ট কাজ করবে — তখনই Conditional Statements ব্যবহার করা হয়।

📢 সহজ ভাষায়:
যদি (if) কিছু সত্য হয় — তাহলে এই কাজ করো, অন্যথায় (else) অন্য কাজ করো।

 */


//💡 1️⃣ if Statement
//👉 যদি শর্ত সত্য (true) হয়, তখন কোড ব্লকের কাজ হবে।
let isMuslim = true;
if (isMuslim == true) {
    console.log('Congratulation');

}

//💡 2️⃣ else Statement
//👉 যদি if এর শর্ত মিথ্যা (false) হয়, তাহলে else এর কোড চলবে।
if (isMuslim == true) {
    console.log('You are a Muslim Boy!');

}
else {
    console.log('You are a bad Boy');
}


// 3️⃣ else if Statement
//👉 একের বেশি শর্ত যাচাই করার জন্য।

let mark = 60;
if (mark >= 80) {
    console.log('A+')
}
else if (mark >= 70) {
    console.log('A');
}
else if (mark >= 60) {
    console.log('B')
}
else if (mark >= 50) {
    console.log('C')
}
else {
    console.log('Fail')
}


//💡 4️⃣ switch Statement
// 👉 যদি অনেক গুলো if-else থাকে, তখন switch ব্যবহার করা হয়।

let day = 3;
switch (day) {
    case 1:
        console.log('Sunday')
        break;

    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('TuesDay');
        break;
    case 4:
        console.log('WednesDay');
        break;
    case 5:
        console.log('Tuseday');
        break;
    default:
        console.log('NodaY')
}


// ======================Loops==============

/* 🔁 Loops কী?
Loop মানে হলো — একটি নির্দিষ্ট কাজ বারবার করা, যতক্ষণ না কোনো শর্ত পূরণ হয়।

👉 ধরো তুমি চাইছো ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করতে —
তখন তুমি ১০ বার console.log() না লিখে লুপ দিয়ে সেটা এক লাইনে করতে পারো! */

//🔸 ১️⃣ for loop
// 👉 নির্দিষ্ট সংখ্যক বার লুপ চালাতে ব্যবহার হয়।
for (let i = 0; i <= 10; i++) {
    console.log('Loooooooops');

}

/* 🔸 ২️⃣ while loop
👉 শর্ত সত্য (true) থাকা পর্যন্ত লুপ চালাতে হয়। */
let i = 1;
while (i <= 5) {
    console.log('Whils Loops')
    i++;
}


/*  ৩️⃣ do...while loop */
//👉 প্রথমে কাজ করে, তারপর শর্ত চেক করে।
// যেকোনোভাবেই একবার লুপ চালায়।

let p = 1;
do {
    console.log('Print the media');
    p++;
} while (i <= 5);

/* 🔸 ৪️⃣ for...of loop
👉 অ্যারে (Array) এর প্রতিটি উপাদান (element) একে একে নেওয়ার জন্য। */

let books = ['Bangla', 'English', 'Math', 'Biology'];
for (let book of books) {
    console.log(book)
}

/* 🔸 ৫️⃣ for...in loop
👉 অবজেক্ট (Object) এর প্রতিটি প্রপার্টির key এর জন্য। */

let laptopInfos = {
    brand: 'Hp',
    price: 34500,
    processor: 'cori3',
    Ram: '8Gb'
}

for (let laptopInfo in laptopInfos) {
    console.log(laptopInfo);

}