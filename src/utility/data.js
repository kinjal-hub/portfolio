import Section1 from "../components/Tab Components/Section1";
import Section2 from "../components/Tab Components/Section2";
import Section3 from "../components/Tab Components/Section3";

export const profileArray = [
  {
    title: "Goals",
    info: [
      "  To bring my strong dedication, responsibility, and motivation.",
      "  To utilize my computer engineering Qualifications. ",
      "  To solve problems in effective/creative manner. ",
      "  To keep up with the cutting edge of technologies in align with organization goal. ",
    ],
  },

  {
    title: "   Technical skills",
    info: [" React  ", " Javascript ", " Node.js "],
  },

  {
    title: "Projects",
    info: [
      " MERN Project(node js)  ",
      " Restuarant project(React)  ",
      " NetflixGpt(React)  ",
    ],
  },

  { title: "Hobbies ", info: [" Reading ", " Travelling "] },
];



export const cardData = [
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/73/3d/22/caption.jpg?w=1200&h=-1&s=1",
    title: "Calangute Beach",
    info: [
      "Calangute beach lies on the shores of the Arabian Sea of North Goa in India.",
      "Calangute is the most popular holiday destination in Goa.",
      "Excellent accommodation facilities are available, for tourist resorts and cottages.",
      "It has also become a good investment plan to buy properties in Goa.",
    ],
  },
  {
    image:
      "https://hblimg.mmtcdn.com/content/hubble/img/goa_New_ttd_imgs/mmt/activities/m_Butterfly%20Beach_1_SS_l_540_959.jpg",
    title: "Butterfly Beach",
    info: [
      "Butterfly Beach is a secluded, crescent-shaped cove in South Goa.",
      "near Palolem Beach, known for its pristine waters and the numerous butterflies and dolphins that frequent the area, making it a popular spot for couples and a tranquil getaway.",
      "Visitors can reach the beach by taking a ferry from Palolem Beach",
    ],
  },
  {
    image:
      "https://im.whatshot.in/img/2020/Jul/anuj-chauhan-dneb-iffyvk-unsplash-1596185853.jpg?wp=1",
    title: "Anjuna Beach",
    info: [
      "Anjuna Beach is a popular beach in Goa known for its flea market and nightlife.",
      "The beach is a favorite among hippies and backpackers.",
      "It features a rocky coastline and a vibrant cultural scene.",
      "Enjoy water sports, beach shacks, and sunset views.",
    ],
  },
  {
    image:
      "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/28/98f59dcd802acd6225efea62b5cf6a98_1000x1000.jpg",
    title: "Baga Beach",
    info: [
      "Baga Beach is a lively and famous destination in North Goa.",
      "It's known for its golden sands, numerous beach shacks offering seafood",
      "vibrant nightlife with popular clubs and bars like Tito's and Cafe Mambos",
      "wide range of water sports such as parasailing and jet skiing.",
    ],
  },
];

export const tabData = [
    {  label: 'Tab#1', component:<Section1 /> , apiUrl:"https://api.chucknorris.io/jokes/random"},
    {  label: 'Tab#2', component:<Section2 /> , apiUrl:"https://catfact.ninja/fact"},
    {  label: 'Tab#3', component:<Section3 />, apiUrl:"https://dog.ceo/api/breeds/image/random" },
  ];


  // export const StudentClass1 = [
  //     { id: 1, Name: "Sairam dave", class:11, Sub:"Biology", Teacher:"Arpita Macwan" , stream:"Science"},
  //     { id: 2, Name: "Nikita gandhi ", class:12, Sub:"Maths", Teacher:"Kristina doe", stream:"Science"},
  //     { id: 3, Name: "Krystal desoza", class:12, Sub:"Biology", Teacher:"Sruti kristi", stream:"Science"},
  //     { id: 4, Name: "Jane doe", class:12, Sub:"Economics", Teacher:"Sruti sirpali", stream:"Commerce"},
  //     { id: 3, Name: "Jhon doe", class:12, Sub:"History", Teacher:"Sruti parmar", stream:"Arts"},
  // ];


  export const data1 = [
  {
    "firstName": "Aarav",
    "lastName": "Sharma",
    "age": 14,
    "subject": "Math"
  },
  {
    "firstName": "Ananya",
    "lastName": "Iyer",
    "age": 15,
    "subject": "Science"
  },
  {
    "firstName": "Rohan",
    "lastName": "Patel",
    "age": 13,
    "subject": "English"
  },
  {
    "firstName": "Meera",
    "lastName": "Reddy",
    "age": 16,
    "subject": "Math"
  },
  {
    "firstName": "Kabir",
    "lastName": "Singh",
    "age": 14,
    "subject": "Science"
  }
];

export const data2 = [
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "famousFood": "Dhokla",
    "populationMillions": 8.7
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "famousFood": "Dal Baati Churma",
    "populationMillions": 3.9
  },
  {
    "city": "Kochi",
    "state": "Kerala",
    "famousFood": "Appam",
    "populationMillions": 2.1
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "famousFood": "Tunday Kebab",
    "populationMillions": 3.4
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "famousFood": "Misal Pav",
    "populationMillions": 7.4
  }
];

export const data3 = [
  {id:1, firstName:'shaun', lastName:'chuahan'},
  {id:2, firstName:'Montu', lastName:'parmar'},
  {id:3, firstName:'Azeal', lastName:'kristi'},
];


export const productData = [
{ id: 1, name: 'Phone', price: '$999' },
{ id: 2, name: 'Laptop', price: '$1499' }
];



