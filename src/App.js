

import './App.css';


import ResponsiveSection from './components/ResponsiveSection';
// import Button from './components/Button'

function App() {
//   const users = [
//   {
//     id: 1,
//     name: "Amit",
//     hobbies: ["Cricket", "Chess", "Traveling"],
//     skills: ["React", "Node.js"]
//   },
//   {
//     id: 2,
//     name: "Sara",
//     hobbies: ["Painting", "Dancing"],
//     skills: ["Python", "Django", "Machine Learning"]
//   }
// ];
//   const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Phone", price: 800 },
//   { id: 3, name: "Tablet", price: 600 }
// ];
  // const Students = [
  //   {id:1, name:'Archie', Grade:'A'},
  //   {id:2, name:'Nayan', Grade:'B'},
  //   {id:3, name:'Eva', Grade:'A'},
  //   {id:4, name:'Erica', Grade:'A'},
  //   {id:5, name:'Evanshi', Grade:'B'},
  //   {id:6, name:'Sruti', Grade:'B'},
  //   {id:7, name:'Naira', Grade:'B'},
  //   {id:8, name:'Naysa', Grade:'B'},
  // ];
// const data = {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/73/3d/22/caption.jpg?w=1200&h=-1&s=1",
//                   title:'Calangute Beach', info:['Calangute beach lies on the shores of the Arabian Sea of North Goa in India.',
//                                             'Calangute is the most popular holiday destination in Goa.',
//                                             'Excellent accommodation facilites are available, particularly at the tourist resorts and cottages.',
//                                             'It has also become a good investment plan to buy properties in Goa.'
//              ]};
const data = [
  {
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/73/3d/22/caption.jpg?w=1200&h=-1&s=1',
    title: 'Calangute Beach',
    info: [
      'Calangute beach lies on the shores of the Arabian Sea of North Goa in India.',
      'Calangute is the most popular holiday destination in Goa.',
      'Excellent accommodation facilities are available, for tourist resorts and cottages.',
      'It has also become a good investment plan to buy properties in Goa.'
    ]
  },
  {
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/goa_New_ttd_imgs/mmt/activities/m_Butterfly%20Beach_1_SS_l_540_959.jpg',
    title: 'Butterfly Beach',
    info: [
      'Butterfly Beach is a secluded, crescent-shaped cove in South Goa.',
      "near Palolem Beach, known for its pristine waters and the numerous butterflies and dolphins that frequent the area, making it a popular spot for couples and a tranquil getaway.",
      "Visitors can reach the beach by taking a ferry from Palolem Beach",
    ]
  },
  {
    image: 'https://im.whatshot.in/img/2020/Jul/anuj-chauhan-dneb-iffyvk-unsplash-1596185853.jpg?wp=1',
    title: 'Anjuna Beach',
    info: [
      'Anjuna Beach is a popular beach in Goa known for its flea market and nightlife.',
      'The beach is a favorite among hippies and backpackers.',
      'It features a rocky coastline and a vibrant cultural scene.',
      'Enjoy water sports, beach shacks, and sunset views.'
    ]
  },
  {
    image: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/28/98f59dcd802acd6225efea62b5cf6a98_1000x1000.jpg',
    title: 'Baga Beach',
    info: [
      'Baga Beach is a lively and famous destination in North Goa.',
      "It's known for its golden sands, numerous beach shacks offering seafood",
      "vibrant nightlife with popular clubs and bars like Tito's and Cafe Mambos",
      'wide range of water sports such as parasailing and jet skiing.'
    ]
  },
  
];


  return (
    <div className="App">
    
     <ResponsiveSection border='2px solid blue' />
     {/* <ResponsiveSection border='1px solid red' content={'This is Responsive Section 2'}/>
     <ResponsiveSection border='2px solid purple' content={'This is Responsive Section 3'}/>
     <ResponsiveSection data={data} />
     */}
    
      
    </div>
  );
}

export default App;
