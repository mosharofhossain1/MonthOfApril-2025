/* 🧠 Array কী?
👉 Array হচ্ছে এমন একটি ভ্যারিয়েবল, যেখানে একসাথে অনেকগুলো মান (ডেটা) list আকারে সংরক্ষণ করা যায়।

একটা Array একই সাথে একাধিক ডেটা রাখে।
ডেটাগুলো index দিয়ে সাজানো থাকে (index শুরু হয় 0 থেকে)। */

/* 💡 Array ডিফাইন করার নিয়ম:
✅ Syntax: */
let arrayName = [value1, value2, value3];


//✅ উদাহরণ ১ঃ সংখ্যা দিয়ে Array
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

//✅ উদাহরণ ২ঃ টেক্সট (String) দিয়ে Array
let fruits = ['apple', 'banana', 'mango'];
console.log(fruits);

//✅ উদাহরণ ৩ঃ মিক্সড ডেটা Array
let mixed = ['rohim', 25, null, true];
console.log(mixed);


/* 💡 Array এর ভিতর থেকে ডেটা বের করা (Access):
👉 index দিয়ে Array এর ভেতরের মান বের করা হয়।
index সবসময় 0 থেকে শুরু হয়। */


let fruits1 = ["Apple", "Banana", "Mango"];

console.log(fruits1[0]);  // Output: Apple
console.log(fruits1[1]);  // Output: Banana
console.log(fruits1[2]);  // Output: Mango


//💡 Array এর দৈর্ঘ্য (length):
console.log(fruits1.length);


// ====================Array Methods==================
//push(), pop(), shift(), unshift()

/* ✅ ১️⃣ push() — Array-র শেষে নতুন এলিমেন্ট যোগ করা
👉 push() method ব্যবহার করে Array-র শেষে নতুন মান যোগ করা হয়। */

array.push(value);

//Example 
let fruits2 = ['Apple', 'Banana'];
fruits2.push('Mango');
console.log(fruits2)

/* ✅ ২️⃣ pop() — Array-র শেষ এলিমেন্ট মুছে ফেলা
👉 pop() method Array-র শেষ এলিমেন্ট সরিয়ে ফেলে এবং সেই মান রিটার্ন করে। */

let fruits3 = ["Apple", "Banana", "Mango"];
let lastFruit = fruits.pop();

console.log(fruits3);      // Output: ["Apple", "Banana"]
console.log(lastFruit);   // Output: Mango

/* ✅ 3️⃣ unshift() — Array-র শুরুতে নতুন এলিমেন্ট যোগ করা
👉 unshift() method Array-র শুরুতে নতুন মান যোগ করে। */

let fruits4 = ["Banana", "Mango"];
fruits.unshift("Apple");

console.log(fruits4);  // Output: ["Apple", "Banana", "Mango"]


/* ✅ 4️⃣ shift() — Array-র শুরু থেকে এলিমেন্ট সরানো
👉 shift() method Array-র প্রথম এলিমেন্ট সরিয়ে ফেলে এবং সেই মান রিটার্ন করে। */

let fruits5 = ["Apple", "Banana", "Mango"];
let firstFruit = fruits.shift();

console.log(fruits5);      // Output: ["Banana", "Mango"]
console.log(firstFruit);  // Output: Apple


/* ✅ slice() — অংশ কপি করে নতুন Array তৈরি করে
👉 পুরনো Array থেকে কিছু অংশ কেটে নিয়ে নতুন Array বানায়।
👉 মূল Array পরিবর্তিত হয় না।

 */

array.slice(startIndex, endIndex);

//startIndex: যেখান থেকে শুরু (index নম্বর)।
//endIndex: যেখানে থামবে (এই index বাদ যাবে)।

let fruits6 = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
let slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits);  // Output: ["Banana", "Mango", "Orange"]
console.log(fruits6);        // Output: ["Apple", "Banana", "Mango", "Orange", "Pineapple"]

/* 👉 এখানে 1 থেকে শুরু, 4-এর আগ পর্যন্ত কপি হয়েছে।
মূল fruits6 Array অপরিবর্তিত থেকেছে। */


/* ✅ splice() — অংশ কেটে ফেলা বা নতুন কিছু যোগ করা
👉 মূল Array-তে পরিবর্তন আনে।
👉 অংশ ডিলিট বা রিমুভ করতে পারে, আবার যোগও করতে পারে। */

array.splice(startIndex, deleteCount, item1, item2);

/* startIndex: কোথা থেকে শুরু করবে।
deleteCount: কতগুলো এলিমেন্ট মুছে ফেলবে।
item1, item2,...: নতুন মান (add করতে চাইলে)। */

//🧠 উদাহরণ ১: অংশ কেটে ফেলা
let fruits7 = ["Apple", "Banana", "Mango", "Orange"];
let removed = fruits.splice(1, 2);

console.log(removed);  // Output: ["Banana", "Mango"]
console.log(fruits7);   // Output: ["Apple", "Orange"]
//👉 1 থেকে শুরু করে 2টা এলিমেন্ট কেটে ফেলেছে।
// মূল Array এখন পরিবর্তিত।

//🧠 উদাহরণ ২: নতুন মান যোগ করা
let fruit8 = ["Apple", "Orange"];
fruits.splice(1, 0, "Banana", "Mango");

console.log(fruits8);  // Output: ["Apple", "Banana", "Mango", "Orange"]

//👉 1 নম্বর index-এ কিছু ডিলিট করেনি (0), বরং Banana আর Mango যোগ করেছে।

// ====================Map()======================
/* 💡 ১️⃣ map() — প্রতি এলিমেন্টে অপারেশন করে নতুন Array তৈরি করে।
👉 map() হলো এমন একটি মেথড, যেটা Array-র প্রতিটি উপাদানের ওপর একই রকম কাজ করে এবং তার ফলাফল দিয়ে নতুন একটি Array তৈরি করে।
👉 মূল Array পরিবর্তন হয় না। */

let newArray = array.map(function (element, index, array) {
    return নতুন_মান;
});

let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(function (num) {
    return num * 2
})

console.log(doubled);

//✅ map() এখানে প্রতিটি সংখ্যা * 2 করে নতুন Array বানিয়েছে।
// মূল numbers অপরিবর্তিত থাকে।


// =====================Filter()=====================
/* 💡 ২️⃣ filter() — শর্ত অনুযায়ী ফিল্টার করে নতুন Array তৈরি করে।
👉 filter() ব্যবহার করে এমন উপাদানগুলো বাছাই করা যায়, যেগুলো নির্দিষ্ট শর্ত পূরণ করে।
👉 মূল Array পরিবর্তন হয় না। */

let filterArray = array.filter(function (element, index, array) {
    return শর্ত;
});


let numbers2 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers2.filter(function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers);  // Output: [2, 4, 6]

//✅ এখানে filter() এমন উপাদান বেছে নিয়েছে যেগুলো জোড় সংখ্যা।


/* 💡 ৩️⃣ reduce() — সকল মানকে একসাথে কম্প্রেস করে একটি মানে রূপান্তর করে।
👉 reduce() হচ্ছে এমন একটি মেথড, যেটা Array-র সব উপাদান একত্র করে একটি মান তৈরি করে।
👉 সবচেয়ে বেশি ব্যবহার হয় যোগফল, গুনফল, গড় বের করার সময়। */

let result = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, প্রাথমিক_মান);

let numbers3 = [1, 2, 3, 4, 5];

let total = numbers3.reduce(function (sum, num) {
    return sum + num;
}, 0);

console.log(total);  // Output: 15
