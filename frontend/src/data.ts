import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/Tag";

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'pan master',
    price: 197,
    cookTime: '15-20',
    favorite: false,
    origins: ['europe','america'],
    stars: 8.0,
    imageUrl: 'assets/food1.jpg',
    tags:['Snack','Chicken']
  },
  {
    id: '2',
    name: 'pan pizza',
    price: 397,
    cookTime: '35-40',
    favorite: false,
    origins: ['europe','Australia'],
    stars: 7.0,
    imageUrl: 'assets/food2.jpg',
    tags:['Snack','Bread','FastFood']
  },
  {
    id: '3',
    name: 'Viral Queen',
    price: 197,
    cookTime: '15-25',
    favorite: true,
    origins: ['China','America'],
    stars: 7.5,
    imageUrl: 'assets/food3.jpg',
    tags:['Lunch','Platter']
  },
  {
    id: '4',
    name: 'Viral King',
    price: 247,
    cookTime: '35-50',
    favorite: true,
    origins: ['China','India'],
    stars: 9.0,
    imageUrl: 'assets/food4.jpg',
    tags:['Dinner','Lunch','Platter']
  },
  {
    id: '5',
    name: 'Margarita pasta',
    price: 157,
    cookTime: '15-20',
    favorite: false,
    origins: ['europe','america'],
    stars: 6.0,
    imageUrl: 'assets/food5.jpg',
    tags:['Snack','Lunch','Cheese']
  },
  {
    id: '6',
    name: 'Barger King',
    price: 177,
    cookTime: '15-20',
    favorite: false,
    origins: ['europe','Korea'],
    stars: 8.0,
    imageUrl: 'assets/food6.jpg',
    tags:['Snack','FastFood']
  },

]

export const sample_tags:Tag[] = [
  { name: 'ALL', count: 6 },
  { name: 'FastFood', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'Snack', count: 4 },
  { name: 'Chicken', count: 1 },
  { name: 'Cheese', count: 1 },
  { name: 'Bread', count: 1 },
  { name: 'Platter', count: 2 },
]
