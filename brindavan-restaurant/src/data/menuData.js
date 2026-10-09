import kadhiImg from '../assets/images/hero_kadhi_chawal.jpg'
import thaliImg from '../assets/images/hero_royal_thali.jpg'
import biryaniImg from '../assets/images/hero_dum_biryani.jpg'
import choleImg from '../assets/images/hero_chole_bhature.jpg'
import dosaImg from '../assets/images/dish_masala_dosa.jpg'
import pakorasImg from '../assets/images/dish_mirchi_pakoras.jpg'
import paneerImg from '../assets/images/dish_paneer_tikka.jpg'
import rasmalaiImg from '../assets/images/dish_rasmalai.jpg'

export const menuCategories = [
  { id: 'all', label: 'All Offerings' },
  { id: 'thalis', label: 'Royal Thalis' },
  { id: 'starters', label: 'Small Plates & Tandoor' },
  { id: 'mains', label: 'Heritage Curries & Biryani' },
  { id: 'south', label: 'Dosa & Tiffins' },
  { id: 'desserts', label: 'Sweets & Elixirs' }
]

export const menuDishes = [
  {
    id: 'dosa-01',
    name: 'Mysore Masala Dosa',
    category: 'south',
    price: 260,
    priceFormatted: '₹260.00',
    rating: 9.8,
    ratingCount: 184,
    badge: 'Chef Signature',
    tag: 'Crisp & Savory',
    description: 'Golden fermented red-rice crepe smeared with fiery red garlic-chilli chutney and stuffed with spiced potato mash.',
    longDescription: 'Cooked on seasoned cast-iron skillets with pure cow ghee until deeply golden and shatteringly crisp, accompanied by freshly ground coconut chutney, tangy shallot-tomato relish, and drumstick sambar.',
    image: dosaImg,
    dietary: ['Pure Veg', 'Gluten-Free Option'],
    spiciness: 'Medium',
    ingredients: ['Red Parboiled Rice', 'Urad Lentils', 'Potato Mash', 'Byadagi Chilli Chutney', 'Fresh Coconut Chutney']
  },
  {
    id: 'thali-01',
    name: 'Royal Marwar Thali',
    category: 'thalis',
    price: 890,
    priceFormatted: '₹890.00',
    rating: 9.9,
    ratingCount: 312,
    badge: 'Banquet Classic',
    tag: 'Grand Feast',
    description: 'Twelve regal courses presented on hand-hammered kansa bronze platters, balancing the six Ayurvedic rasas.',
    longDescription: 'Features slow-cooked Dal Baati Churma, Ker Sangri berries, Shahi Paneer, Gatte ki Kadhi, saffron phulkas, cooling buttermilk, and artisanal jaggery churma.',
    image: thaliImg,
    dietary: ['Pure Veg', 'Jain Option'],
    spiciness: 'Mild to Medium',
    ingredients: ['Bilona Ghee', 'Foraged Ker Sangri', 'Black Chickpeas', 'Cottage Cheese', 'Puffed Phulkas', 'Kesar Churma']
  },
  {
    id: 'paneer-01',
    name: 'Angara Paneer Tikka',
    category: 'starters',
    price: 480,
    priceFormatted: '₹480.00',
    rating: 9.6,
    ratingCount: 142,
    badge: 'Clay Oven Roasted',
    tag: 'Smoked & Spiced',
    description: 'Fresh farmhouse paneer cubes steeped in hung curd, Kashmiri degi mirch, and yellow mustard, flame-charred in clay tandoor.',
    longDescription: 'Skewered with sweet bell peppers and red pearl onions, smoked with live clove-infused charcoal, and served with wild mint chutney and charred lemon.',
    image: paneerImg,
    dietary: ['Pure Veg', 'Gluten-Free'],
    spiciness: 'Medium Hot',
    ingredients: ['Farm Paneer', 'Hung Curd', 'Mustard Oil', 'Degi Mirch', 'Clove Smoke', 'Mint Dip']
  },
  {
    id: 'biryani-01',
    name: 'Awadhi Kesar Biryani',
    category: 'mains',
    price: 540,
    priceFormatted: '₹540.00',
    rating: 9.7,
    ratingCount: 220,
    badge: 'Clay-Pot Dum',
    tag: 'Aromatic & Regal',
    description: 'Aged basmati rice sealed with dough in earthen pots, infused with royal Kashmiri saffron, kewra water, and caramelized shallots.',
    longDescription: 'Cooked in the classical Dum Pukht technique to seal every whisper of spice and aroma, served with cooling garlic-cumin burani raita and spicy salan.',
    image: biryaniImg,
    dietary: ['Pure Veg'],
    spiciness: 'Mild',
    ingredients: ['Aged Dehradun Rice', 'Kashmiri Saffron', 'Seasonal Veg', 'Fried Shallots', 'Burani Raita']
  },
  {
    id: 'pakoras-01',
    name: 'Jodhpur Mirchi Pakoras',
    category: 'starters',
    price: 320,
    priceFormatted: '₹320.00',
    rating: 9.5,
    ratingCount: 98,
    badge: 'Heritage Snack',
    tag: 'Crisp & Tangy',
    description: 'Plump Bhavnagri chillies stuffed with seasoned spiced potato filling, dipped in spiced chickpea batter and golden-fried.',
    longDescription: 'A tribute to the iconic blue streets of Jodhpur. Crisp outside, tender inside, served alongside sweet tamarind-saunth chutney and cooling cilantro dip.',
    image: pakorasImg,
    dietary: ['Pure Veg', 'Vegan'],
    spiciness: 'Medium',
    ingredients: ['Bhavnagri Mild Peppers', 'Gram Flour Batter', 'Spiced Potato Mash', 'Tamarind Chutney', 'Coriander Mint Relish']
  },
  {
    id: 'kadhi-01',
    name: 'Ghar Ki Kadhi Chawal',
    category: 'mains',
    price: 390,
    priceFormatted: '₹390.00',
    rating: 9.7,
    ratingCount: 165,
    badge: 'Soul Comfort',
    tag: 'Homestyle Classic',
    description: 'Slow-simmered spiced buttermilk kadhi with tender onion-fenugreek pakoras, served over steaming basmati rice with double tadka.',
    longDescription: 'Whisked with aged dahi and turmeric, simmered for hours until velvety, and crowned with whole dry red chillies, mustard seeds, and sizzling desi ghee.',
    image: kadhiImg,
    dietary: ['Pure Veg'],
    spiciness: 'Mild',
    ingredients: ['Aged Yogurt', 'Besan', 'Fenugreek Pakoras', 'Steamed Basmati', 'Pure Ghee Tadka']
  },
  {
    id: 'chole-01',
    name: 'Amritsari Chole Bhature',
    category: 'mains',
    price: 420,
    priceFormatted: '₹420.00',
    rating: 9.8,
    ratingCount: 248,
    badge: 'Puffed & Crispy',
    tag: 'Punjabi Legacy',
    description: 'Dark, iron-braised chickpeas infused with wild pomegranate and black cardamom, served with two golden balloon bhature.',
    longDescription: 'Cooked slow in iron vessels for rich dark color and velvety sauce, accompanied by pickled carrots, whole green chillies, and ginger laccha.',
    image: choleImg,
    dietary: ['Pure Veg'],
    spiciness: 'Spicy',
    ingredients: ['Kabuli Chana', 'Wild Anardana', 'Golden Bhature', 'Pickled Carrot & Chilli', 'Ginger Slivers']
  },
  {
    id: 'sweet-01',
    name: 'Shahi Kesar Rasmalai',
    category: 'desserts',
    price: 280,
    priceFormatted: '₹280.00',
    rating: 9.9,
    ratingCount: 195,
    badge: 'Sweet Confection',
    tag: 'Fragrant & Silky',
    description: 'Delicate hand-shaped chenna medallions steeped in chilled thickened saffron milk, finished with pistachio slivers and edible gold foil.',
    longDescription: 'Made fresh every morning from whole cow milk chenna, gently poached in light syrup, and bathed in rich rabri flavored with green cardamom and saffron.',
    image: rasmalaiImg,
    dietary: ['Pure Veg', 'Gluten-Free'],
    spiciness: 'Sweet',
    ingredients: ['Cow Milk Chenna', 'Kashmiri Saffron Rabri', 'Pistachio Slivers', 'Cardamom', '24K Edible Gold Foil']
  }
]
