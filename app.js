const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
let animalData;



const { engine } = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}));

async function doGetRequest() {

    let res = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand/8');
  
    let data = res.data;
    console.log(data);
    animalData = data
  }
  

const fakeApi = () => {
    return [
        {
          name: 'Smew',
          latin_name: 'Mergellus albellus',
          animal_type: 'Bird',
          active_time: 'Diurnal',
          length_min: '1.17',
          length_max: '1.33',
          weight_min: '1.2',
          weight_max: '1.5',
          lifespan: '10',
          habitat: 'Flooded woodlands, lakes, ponds, rivers, and bays',
          diet: 'Fish, frogs, crustaceans, insects, and insect larvae',
          geo_range: 'Europe, Asia, and northern Africa',
          image_link: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Zwergsaeger_maenchen_weibchen.jpg',
          id: 163
        },
        {
          name: 'Alligator Gar',
          latin_name: 'Lepisosteus spatula',
          animal_type: 'Fish',
          active_time: 'Nocturnal',
          length_min: '8',
          length_max: '10',
          weight_min: '250',
          weight_max: '300',
          lifespan: '50',
          habitat: 'Rivers, lakes and other bodies of fresh and brackish water',
          diet: 'Fish and other small animals',
          geo_range: 'North America',
          image_link: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Alligator_Gar_10.JPG',
          id: 7
        },
        {
          name: 'Eastern Screech Owl',
          latin_name: 'Megascops asio',
          animal_type: 'Bird',
          active_time: 'Nocturnal',
          length_min: '0.7',
          length_max: '0.8',
          weight_min: '0.4',
          weight_max: '0.53',
          lifespan: '10',
          habitat: 'Woodlands',
          diet: 'Small mammals, insects, frogs, worms and lizards',
          geo_range: 'Eastern United States',
          image_link: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EasternScreechOwl-Rufous.jpg',
          id: 66
        },
        {
          name: 'Matamata',
          latin_name: 'Chelus fimbriatus',
          animal_type: 'Reptile',
          active_time: 'Nocturnal',
          length_min: '1.1',
          length_max: '1.3',
          weight_min: '35',
          weight_max: '38',
          lifespan: '30',
          habitat: 'Shallow pools and streams',
          diet: 'Fish',
          geo_range: 'Northern South America',
          image_link: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/2009_Chelus_fimbriatus.JPG',
          id: 116
        },
        {
          name: 'Angolan Colobus Monkey',
          latin_name: 'Colobus angolensis',
          animal_type: 'Mammal',
          active_time: 'Diurnal',
          length_min: '1.2',
          length_max: '2.2',
          weight_min: '13',
          weight_max: '25',
          lifespan: '18',
          habitat: 'Forest and savannah',
          diet: 'Leaves, fruit, and seeds',
          geo_range: 'Tanzania',
          image_link: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Colobus_angolensis.jpg',
          id: 15
        },
        {
          name: "Lady Ross' Turaco",
          latin_name: 'Musophaga rossae',
          animal_type: 'Bird',
          active_time: 'Diurnal',
          length_min: '1.25',
          length_max: '1.5',
          weight_min: '0.8',
          weight_max: '1',
          lifespan: '10',
          habitat: 'Forest',
          diet: 'Fruit and berries; some insects',
          geo_range: 'Central Africa',
          image_link: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Musophaga_rossae_-Lady_Ross%27_Turaco_-Houston_Zoo.jpg',
          id: 101
        },
        {
          name: 'Aardwolf',
          latin_name: 'Proteles cristatus',
          animal_type: 'Mammal',
          active_time: 'Nocturnal',
          length_min: '2.8',
          length_max: '3.4',
          weight_min: '17.6',
          weight_max: '22',
          lifespan: '14',
          habitat: 'Savannah',
          diet: 'Termites',
          geo_range: 'Africa',
          image_link: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Proteles_cristatus1.jpg',
          id: 2
        },
        {
          name: 'Yellow-rumped Cacique',
          latin_name: 'Cacicus cela',
          animal_type: 'Bird',
          active_time: 'Diurnal',
          length_min: '0.75',
          length_max: '0.96',
          weight_min: '0.13',
          weight_max: '0.23',
          lifespan: '16',
          habitat: 'Forest edges, woodlands, agricultural areas and towns',
          diet: 'Invertebrates, berries, fruits and leaves',
          geo_range: 'Northern South America',
          image_link: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Yellow-rumped_Cacique_-_Pantanal_-_Brazil_H8O2199_%2823593614830%29.jpg',
          id: 197
        }
      ]
}


window.addEventListener('DOMContentLoaded', (event) => {
    doGetRequest();
});

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('main', {layout: 'index', animals: animalData});
});

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
})