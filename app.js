const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true,
});

// Create
const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: [1, "rating is required"],
    },
    review: {
        type: String,
    },
});

const Fruit = new mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit({
    name: "apple",
    rating: 5,
    review: "very very nice",
});

const orange = new Fruit({
    name: "orange",
    rating: 7,
    review: "very very sour",
});

const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "best fruit",
});

const mango = new Fruit({
    name: "Mango",
    rating: 10,
    review: "Love it!",
});

// mango.save();

// Insert Many

// Fruit.insertMany([orange ,banana] , (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully insert the document to the fruitsDB");
//     }
// })

// insert one
// fruit.save();

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 10,
    review: "Love it!",
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 3,
    review: "Not that best!"
})

// kiwi.save();

// pineapple.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitsSchema
});



const Person = new mongoose.model("Person", personSchema);

const mohammed = new Person({
    name: "Mohammed",
    age: 50,
    favoriteFruit: pineapple
});


const macron = new Person({
    name: "Macron",
    age: 2,
    favoriteFruit: pineapple
});

// macron.save();

// Person.insertMany([mohammed ,macron] , (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully insert the document to the fruitsDB");
//     }
// })

// person.save();

// Read
Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
    }
});

// Update
// Fruit.updateOne({_id: "62fce9ec8b4419e67d7f7567"} , { rating: 9} ,(err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully Updated the the document");
//     }
// })

Person.updateOne({_id: "62fce683105ed66e71d7f411"} , {favoriteFruit: kiwi} ,(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Successfully Updated the the document");
    }
})

// Fruit.updateMany({rating: {$lte: 5}},{name : "Orange"} ,(err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Updated the the document");
//     }
// });

// Fruit.deleteOne({_id: "62fcd53a9f01e580a82336e1"} , (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully Delete the the document");
//     }
// })

// Fruit.deleteMany({rating: {$gte: 7} } , (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully Delete the the document");
//     }
// })

// Person.deleteMany({name: "Mohammed" } , (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully Delete the the document");
//     }
// })