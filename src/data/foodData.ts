export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  preparationTime: string;
  restaurant: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: "pizza", name: "Pizza", icon: "🍕", color: "bg-red-500" },
  { id: "burgers", name: "Burgers", icon: "🍔", color: "bg-orange-500" },
  { id: "salads", name: "Salads", icon: "🥗", color: "bg-green-500" },
  { id: "desserts", name: "Desserts", icon: "🍰", color: "bg-pink-500" },
  { id: "drinks", name: "Drinks", icon: "🥤", color: "bg-blue-500" },
  { id: "asian", name: "Asian", icon: "🍜", color: "bg-yellow-500" },
];

export const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
    price: 18.99,
    image: "/src/assets/pizza.jpg",
    category: "pizza",
    rating: 4.8,
    preparationTime: "25-35 min",
    restaurant: "Mario's Pizzeria"
  },
  {
    id: "2",
    name: "Gourmet Cheeseburger",
    description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
    price: 15.99,
    image: "/src/assets/burger.jpg",
    category: "burgers",
    rating: 4.7,
    preparationTime: "15-20 min",
    restaurant: "Burger Palace"
  },
  {
    id: "3",
    name: "Fresh Caesar Salad",
    description: "Crisp romaine lettuce with parmesan, croutons, and Caesar dressing",
    price: 12.99,
    image: "/src/assets/salad.jpg",
    category: "salads",
    rating: 4.6,
    preparationTime: "10-15 min",
    restaurant: "Green Garden"
  },
  {
    id: "4",
    name: "Chocolate Delight Cake",
    description: "Rich chocolate cake with berry garnish and cream",
    price: 8.99,
    image: "/src/assets/dessert.jpg",
    category: "desserts",
    rating: 4.9,
    preparationTime: "5-10 min",
    restaurant: "Sweet Dreams"
  },
  {
    id: "5",
    name: "Pepperoni Supreme",
    description: "Pizza loaded with pepperoni, mushrooms, and extra cheese",
    price: 21.99,
    image: "/src/assets/pizza.jpg",
    category: "pizza",
    rating: 4.7,
    preparationTime: "30-40 min",
    restaurant: "Mario's Pizzeria"
  },
  {
    id: "6",
    name: "BBQ Bacon Burger",
    description: "Smoky BBQ burger with crispy bacon and onion rings",
    price: 17.99,
    image: "/src/assets/burger.jpg",
    category: "burgers",
    rating: 4.8,
    preparationTime: "20-25 min",
    restaurant: "Grill Masters"
  }
];