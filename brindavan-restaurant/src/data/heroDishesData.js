import kadhiImg from '../assets/images/hero_kadhi_chawal.jpg'
import thaliImg from '../assets/images/hero_royal_thali.jpg'
import biryaniImg from '../assets/images/hero_dum_biryani.jpg'
import choleImg from '../assets/images/hero_chole_bhature.jpg'

export const heroDishes = [
  {
    id: 'kadhi-chawal',
    number: '01',
    categoryTag: '01 / GHAR JAISA COMFORT',
    titleMain: 'KADHI',
    titleSecondary: 'CHAWAL',
    fullName: 'Heritage Kadhi Chawal',
    badgeText: 'MADE WITH CHARACTER',
    rating: '4.9',
    headline: 'A little taste of home.',
    storyExcerpt:
      'Tangy buttermilk kadhi, melt-in-mouth fenugreek pakoras and fragrant dehraduni basmati rice, finished with a crackling mustard & cumin tadka.',
    overview:
      'Rooted in centuries of North Indian home cooking, our kadhi is churned with aged spiced curd and slow-simmered over low flame for three hours until velvety, creamy, and gently spiced.',
    ingredients: [
      'Aged Churned Buttermilk',
      'Dehradun Basmati Rice',
      'Crisp Methi Pakoras',
      'Whole Kashmiri Mirch',
      'Pure Bilona Desi Ghee',
      'Roasted Cumin & Hing Tadka'
    ],
    preparationTime: 'Slow-simmered 3 hrs',
    dietary: 'Pure Vegetarian',
    price: '₹390',
    image: kadhiImg,
    accentColor: '#DCA34D'
  },
  {
    id: 'royal-thali',
    number: '02',
    categoryTag: '02 / RAJASTHANI RAJWADA',
    titleMain: 'ROYAL',
    titleSecondary: 'MARWAR THALI',
    fullName: 'Royal Marwar Kansa Thali',
    badgeText: 'IMPERIAL FEAST',
    rating: '5.0',
    headline: 'A banquet worthy of kings.',
    storyExcerpt:
      'An opulent twelve-course ceremonial feast served on handcrafted kansa bell-metal platters, balancing all six Vedic tastes for sublime harmony.',
    overview:
      'Served in antique kansa bronze ware revered in Ayurveda, this grand thali showcases slow-cooked Dal Baati Churma, Ker Sangri berries, Shahi Paneer, saffron pulao, and artisan bread.',
    ingredients: [
      'Dal Baati Churma',
      'Shahi Paneer Makhana',
      'Foraged Ker Sangri',
      'Gatte Ki Kadhi',
      'Wood-Pressed Cow Ghee',
      'Kesar Phulkas & Churma'
    ],
    preparationTime: '12-Course Assembly',
    dietary: 'Pure Vegetarian • Jain Available',
    price: '₹890',
    image: thaliImg,
    accentColor: '#C8623A'
  },
  {
    id: 'dum-biryani',
    number: '03',
    categoryTag: '03 / NIZAMI DUM CRAFT',
    titleMain: 'AWADHI',
    titleSecondary: 'DUM BIRYANI',
    fullName: 'Awadhi Kesar Subz Biryani',
    badgeText: 'SLOW CLAY-POT SEALED',
    rating: '4.9',
    headline: 'Aromatic poetry in every grain.',
    storyExcerpt:
      'Sealed in clay handis with whole wheat dough, aged Basmati rice layered with royal saffron milk, farm-fresh vegetables, and crisp caramelized shallots.',
    overview:
      'Our master Khansamas preserve the classical Lucknowi dum pukht tradition: trapping pure aromatics inside terracotta vessels over charcoal embers until each grain stands delicate and scented.',
    ingredients: [
      'Two-Year Aged Basmati',
      'Kashmiri Mongra Saffron',
      'Caramelized Rose Onions',
      'Clarified Butter & Kewra',
      'Tender Marinated Florets',
      'Burani Garlic Raita'
    ],
    preparationTime: 'Clay Pot Dum 60 mins',
    dietary: 'Pure Vegetarian',
    price: '₹540',
    image: biryaniImg,
    accentColor: '#D4A359'
  },
  {
    id: 'chole-bhature',
    number: '04',
    categoryTag: '04 / PUNJABI HERITAGE',
    titleMain: 'AMRITSARI',
    titleSecondary: 'CHOLE BHATURE',
    fullName: 'Amritsari Chole Bhature',
    badgeText: 'SIGNATURE COMFORT',
    rating: '4.9',
    headline: 'Golden, crisp, and unforgettable.',
    storyExcerpt:
      'Dark iron-braised chickpeas infused with dried wild pomegranate and whole black cardamom, paired with cloud-like golden puffed bhature and spicy laccha onions.',
    overview:
      'Cooked in heavy iron vessels with dried anardana seeds and whole spices to develop an iconic dark glaze and deep, complex tartness that pairs impeccably with pillowy bhature.',
    ingredients: [
      'Iron-Braised Kabuli Chana',
      'Wild Pomegranate (Anardana)',
      'Black Cardamom & Cassia',
      'Puffed Golden Bhature',
      'Pickled Green Chillies',
      'Mint & Amchoor Chutney'
    ],
    preparationTime: '18-Hour Braised',
    dietary: 'Pure Vegetarian',
    price: '₹420',
    image: choleImg,
    accentColor: '#B3542E'
  }
]
