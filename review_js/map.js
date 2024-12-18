const fruits = [
    {
        id: 1,
        name: "Semangka",
        price: 20000
    },
    {
        id: 2,
        name: "Apel",
        price: 2000
    },
    {
        id: 3,
        name: "Jeruk",
        price: 5000
    },
    {
        id:4,
        name: "Kesemek",
        price: 3500
    }
]

// ambil salah satu key dari object yg disimpan dalam array
// const fruitName = fruits.map(item => item.name)
const fruitName = fruits.map(function(item) {
    return item.price
})
console.log(fruitName)

// filter object data (return nya berupa array)
// akan menampilkan data dari object sesuai dengan kondisi yg dikasih
const filter = fruits.filter(item => item.name == "Apel")
console.log(filter)

// find object data (returnnya object)
const find = fruits.find(item => item.name == "Kesemek")
console.log(find)

// reduce 
// digunakan untuk menghitung total data di dalam object
// param pertama merupakan callback function (logikanya)
// param 2 merupakan nilai awal dari total (cvariabel untuk menampung data jumlahnya)
const totalPrice = fruits.reduce((total, currentItem) => total + currentItem.price, 0)
console.log(totalPrice)