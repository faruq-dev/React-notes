//Event propagation হচ্ছে একটা প্রক্রিয়া যার মাধ্যমে একটি ইভেন্ট একাধিক HTML এ ট্রান্সফার করতে পারি বা ছড়িয়ে দিতে পারি।

//এখানে html ফাইল থেকে parent, form, button নামে ৩টা ID কে ধরলাম getElementById দিয়ে এবং তাদের উপর EventListener এপ্লাই করলাম।
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener('click', (e)=>{
    console.log('parent clicked');
});

form.addEventListener('click', (e)=>{
    console.log('form clicked');
});

button.addEventListener('click', (e)=>{
    console.log('button clicked');
})

//এখানে আমরা parent, form, ও button এ addEventlistener অ্যাড করলাম। এবার কন্সোলে গেলে দেখা যাবে আমরা যদি বাটনে ক্লিক করি তাহলে বাটন নিজে ক্লিক হচ্ছে, সাথে সাথে তার প্যারেন্ট form এলিমেন্টও (HTML ফাইলের) ক্লিক হচ্ছে, আবার form এর প্যারেন্ট div ও ক্লিক হচ্ছে। অর্থাৎ ১টা ক্লিক ইভেন্ট ৩টা এলিমেন্টের মধ্যে ছড়িয়ে গেলো। অর্থাৎ একটা Event (ক্লিক ইভেন্ট) ঘটার কারনে ৩ টা eventListener এক্সিকিউট হয়ে গেসে। এটাই Event Propagation.

// eventListener গুলোর এক্সিকিউশনকে অর্থাৎ Event Propagation কে আমরা ৩ ভাবে হ্যান্ডেল করতে পারি।
// ১- Bubbling (বাবলিং)
// ২- Capturing (ক্যাপচারিং)
// ৩- Event Delegation (ইভেন্ট ডেলিগেশন)



//Bubbling অনেকটা পানির বুদবুদের মত নিচ থেকে উপরের দিকে যায়। অর্থাৎ উপরের কোডে ক্লিক ইভেন্ট ফায়ার হলে প্রথমে button ক্লিক হলো, এরপর form ক্লিক হলো, এরপর parent ক্লিক হলো, মানে নিচ থেকে উপরের দিকে গেলো পানির বুদবুদের মত। এজন্য একে বলা হয়য় bubbling. এটা হলো Event propagation এর ডিফল্ট বিহেভিয়ার।



//Capturing হলো bubbling এর বিপরীত, অর্থাৎ যদি উপর থেকে নিচে ইভেন্ট ফায়ার করা। এটা করতে হলে addEventListener() ফাংশনের ব্রাকেটে অ্যারো ফাংশনের পর আরো একটা আর্গুমেন্ট দিতে হবে এভাবে {capture: true}, এটা বাই ডিফল্ট {capture:false} থাকে , এখানে  {capture: true} এর বদলে শুধু true লিখলেও হবে। । যদি সবগুলা addEventListener ফাংশনে আমরা এই আর্গুমেন্টটা অ্যাড করি তাহলে কনসোলে দেখা যাবে প্রথমে parent ক্লিক হবে, এরপর form, এরপর button ক্লিক হবে। যেসব addEventListener ফাংশনে এই আর্গুমেন্টটা অ্যাড করা হবে তারা আগে ক্যাপচার হবে। উদাহরন নিচে,
{
    parent.addEventListener('click', (e)=>{
        console.log('parent clicked');
    }, {capture: true});

    form.addEventListener('click', (e)=>{
        console.log('form clicked');
    }, {capture: true});

    button.addEventListener('click', (e)=>{
        console.log('button clicked');
    }, {capture: true})
}


//এবার এখানে eventListener এর আর্গুমেন্টে অ্যারো ফাংশনের বদলে কলব্যাক ফাংশন পাস করলাম, listener নামে একটা কলব্যাক ফাংশন নিলাম যার ভেতর console.log(this) করলাম, এই listener ফাংশনটা যেই অবজেক্টের addEventListener ফাংশনের আর্গুমেন্টে পাস করা হবে সেই অবজেক্টকে ইন্ডিকেট করবে, অর্থাৎ button.addEventListener এর আর্গুমেন্টে পাস করলে button কে ইন্ডিকেট করবে, form.addEventListener এর আর্গুমেন্ট হিসেবে পাস করলে form এর ক্লিক ইভেন্টকে ইন্ডিকেট করবে। 

//অর্থাত যখন button এর ক্লিক ইভেন্ট ফায়ার হবে তখন this হবে বাটন, যখন parent এর ক্লিক ইভেন্ট ফায়ার হবে তখন this হবে parent
// {
//     parent.addEventListener("click", listener, true);

//     form.addEventListener("click", listener, true );

//     button.addEventListener("click", listener, true);

//     function listener(e) {
//         console.log(this.nodeName);
//     }
// }



//Event Delegation (ইভেন্ট ডেলিগেশন) ***************
//ডেলিগেশন হচ্ছে অনেকগুলো ইভেন্টের জন্য একটাই Listener রাখা

const list = document.getElementById('list');
const body = document.getElementById("body")

list.addEventListener('click', (e)=>{
    if (e.target.matches('li')){

        const allItems = list.querySelectorAll('li');

        allItems.forEach(function(items){
            items.style.background = 'white';
            items.style.color = 'black';
            items.style.padding = '10px';
        });

        e.target.style.color = 'white'

        switch(e.target.innerText){
            case "JavaScript":
            e.target.style.background = 'red';
            break;

            case "PHP":
            e.target.style.background = "orange";
            break;

            case "Java":
            e.target.style.background = "purple";
            break;

            case "Python":
            e.target.style.background = "navy";
            break;

            case "C++":
            e.target.style.background = "brown";
            break;

            case "New Programing Language":
                e.target.style.background = "red";
                break;
        }
    }
});

function addElement (){
    const li = document.createElement('li');
    li.innerText = 'New Programing Language';
    li.setAttribute('id', "new_item");
    list.appendChild(li);
};