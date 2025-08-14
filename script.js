const foods = [
    {
        name: "Pani Puri",
        description: "Crispy puris filled with spicy & tangy water.",
        image: "https://www.awesomecuisine.com/wp-content/uploads/2007/11/Pani-Puri.jpg"
    },
    {
        name: "Momos",
        description: "Steamed dumplings with spicy chutney.",
        image: "https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg?impolicy=Medium_Widthonly&w=350&h=263"
    },
    {
        name: "Pav Bhaji",
        description: "Butter-toasted pav with spicy mashed veggies.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg"
    },
    {
        name: "Kebabs",
        description: "Juicy and smoky grilled kebabs.",
        image: "https://www.rumispice.com/cdn/shop/articles/kefta-kebabs-with-cumin-seasoned-salt-356050.jpg?v=1660114741"
    },
    {
        name: "Ice Gola",
        description: "Crushed ice sticks dipped in flavored syrups.",
        image: "https://i.ndtvimg.com/i/2018-05/malai-gola_620x350_71525344673.jpg"
    },
    {
        name: "Samosa",
        description: "Crispy fried snack filled with spiced potatoes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisceVtfykJkZbprZ0thf7foq5fsUKE1DoVg&s"
    },


   {
        name: "Bhel Puri",
        description: "Puffed rice with chutneys and sev.",
        image: "https://www.tarladalal.com/media/recipe/mainphoto/2025/02/05/bhel_puri.webp"
    },
    {
        name: "Vada Pav",
        description: "Spicy potato fritter in a bun.",
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/schezwan_vada_pav.webp"
    },
    {
        name: "Chole Bhature",
        description: "Fluffy fried bread with spicy chickpeas.",
        image: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=612x612&w=0&k=20&c=OLAw-ZleN1UVaa468OlPSAc6dkz2sjehxWevbvZQNew="
    },
    {
        name: "Aloo Tikki",
        description: "Crispy potato patties served with chutneys.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuf8Z_4RBTZ2wc--4pacG2qjmpCOR8gdQMQ&s"
    },
    {
        name: "Masala Dosa",
        description: "Crispy dosa stuffed with spiced potatoes.",
        image: "https://revi.b-cdn.net/wp-content/uploads/2017/03/masala-dosa-2.jpg"
    },
    {
        name: "Idli Sambar",
        description: "Soft idlis served with tangy sambar.",
        image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg"
    },
    {
        name: "Pesarattu",
        description: "Green gram dosa with spicy chutney.",
        image: "https://mildlyindian.com/wp-content/uploads/2019/05/pesarattu-dosa.jpg"
    },
    {
        name: "Chicken Tikka",
        description: "Smoky grilled chicken pieces with spices.",
        image: "https://c.ndtvimg.com/2021-03/t1s4kbv8_tikka_625x300_04_March_21.jpg"
    },
    {
        name: "Paneer Tikka",
        description: "Marinated paneer cubes grilled to perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9tC5sOxSUzsCHVLWLjMY7HnphyZe_HiDhw&s"
    },
    {
        name: "Rajma Chawal",
        description: "Red kidney beans curry with rice.",
        image: "https://i.pinimg.com/736x/aa/ea/3e/aaea3e36f98ed699be9f57fc8e9279a3.jpg"
    },
    {
        name: "Gulab Jamun",
        description: "Soft fried milk balls soaked in sugar syrup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazbsuKNn86tzUcM0EJWFCBcCIKgamVK70Ng&s"
    },
    {
        name: "Jalebi",
        description: "Crispy fried spirals dipped in syrup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD12OCxU4Th3aX7Mj3vPBcnVJEf5WhIAzWEQ&s"
    },
    {
        name: "Rasgulla",
        description: "Soft spongy balls in light sugar syrup.",
        image: "https://www.awesomecuisine.com/wp-content/uploads/2014/10/rasgulla.jpg"
    },
    {
        name: "Falooda",
        description: "Sweet dessert drink with vermicelli and ice cream.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lXVGVK8Ocz3LAjIHK1cGoRx01fRkkfiBlg&s"
    },
    {
        name: "Kulfi",
        description: "Traditional Indian ice cream with nuts.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIYt5Ace8YPLF43XvQQ4u1JpgI3oVXbTlMA&s"
    },
    {
        name: "Mango Lassi",
        description: "Sweet mango-flavored yogurt drink.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ8THlTmUMV4Y_vJD__BMYhaA2nGeTQyb5A&s"
    },
    {
        name: "Butter Chicken",
        description: "Creamy tomato-based chicken curry.",
        image: "https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg"
    },
    {
        name: "Fish Fry",
        description: "Crispy fried fish with spices.",
        image: "https://nishkitchen.com/wp-content/uploads/2015/04/Chettinad-fish-fry-1B.jpg"
    },
    {
        name: "Dhokla",
        description: "Soft, spongy steamed gram flour cake.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqGh72sYu5aYHlcmdjVr5_n9WVFce46LHrA&s"
    },
    {
        name: "Vada pav",
        description: "Mix of fried snacks, chutneys, and spices.",
        image: "https://media.istockphoto.com/id/1444923451/photo/special-vada-pav-isolated-on-wooden-board-side-view-of-indian-food.jpg?s=612x612&w=0&k=20&c=hcIvBau5FeYzkJ9QlEY60bNEB5RIz7fMW69v3VN5jGA="
    },

   {
        name: "Chaat",
        description: "Mix of fried snacks, chutneys, and spices.",
        image: "https://www.cookrepublic.com/wp-content/uploads/2024/02/corn-chaat-masala.jpg"
    },

    {
        name: "Chaap tikka",
        description: "Mix of fried snacks, chutneys, and spices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeycYICAWskklM89oS0yT9nWvAMINr0wAreg&s"
    }

];

// Display food items
const foodList = document.getElementById('foodList');
function displayFoods(items) {
    foodList.innerHTML = "";
    items.forEach(food => {
        const card = document.createElement('div');
        card.classList.add('food-card');
        card.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            <button onclick="orderFood('${food.name}')">Order Now</button>
        `;
        foodList.appendChild(card);
    });
}

// Search function
document.getElementById('searchBar').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = foods.filter(food => food.name.toLowerCase().includes(query));
    displayFoods(filtered);
});

// Order function
function orderFood(foodName) {
    alert(`You have ordered: ${foodName} 🍽️`);
}

// Initial display
displayFoods(foods);





