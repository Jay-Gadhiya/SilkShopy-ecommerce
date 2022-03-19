import { v4 as uuid } from "uuid";
import {asusFlip, dellInspiron, lenovoIdeapad, realmeBookSlim, googlePixel, pocoC31, realmeNarzo, realmeSe, hpGaming, acerNitro, redmi10t, asusRog, boatRock, miBass, noise, sony, asusTuff, msi, samsungF22, samsungFe} from "../../assets/export";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Realme Book",
    description : "8 GB/256 GB. SSD",
    author: "realme",
    price: "39940",
    cutPrice : "54999",
    discount : "27%",
    categoryName: "laptop",
    rating : "4.4",
    img : realmeBookSlim,
    badge : false 
  },
  {
    _id: uuid(),
    title: "ASUS VivoBook Flip",
    description : "8 GB/512 GB SSD",
    author: "asus",
    price: "48999",
    cutPrice : "58990",
    discount : "18%",
    categoryName: "laptop",
    rating : "4.2",
    img : asusFlip,
    badge : false
  },
  {
    _id: uuid(),
    title: "HP Pavilion",
    description : "16 GB/512 GB SSD",
    author: "hp",
    price: "49999",
    cutPrice : "59999",
    discount : "18%",
    categoryName: "gaming",
    rating : "4.5",
    img : hpGaming,
    badge : true
  },
   {
    _id: uuid(),
    title: "DELL Inspiron",
    description : "8 GB/256 GB SSD",
    author: "dell",
    price: "39480",
    cutPrice : "56590",
    discount : "27%",
    categoryName: "laptop",
    rating : "3.4",
    img : dellInspiron,
    badge : false
  },
  {
    _id: uuid(),
    title: "acer Nitro 5 Ryzen",
    description : "8 GB/1 TB HDD",
    author: "acer",
    price: "49940",
    cutPrice : "59940",
    discount : "40%",
    categoryName: "gaming",
    rating : "4.5",
    img : acerNitro,
    badge : false
  },
  {
    _id: uuid(),
    title: "Lenovo IdeaPad 3",
    description : "8 GB/256 GB SSD",
    author: "lenovo",
    price: "37940",
    cutPrice : "56590",
    discount : "33%",
    categoryName: "laptop",
    rating : "3.5",
    img : lenovoIdeapad,
    badge : false
  },
  {
    _id: uuid(),
    title: "MSI GF63",
    description : "8 GB/1 TB HDD",
    author: "msi",
    price: "45290",
    cutPrice : "53990",
    discount : "22%",
    categoryName: "laptop",
    rating : "3.5",
    img : msi,
    badge : false
  },
  {
    _id: uuid(),
    title: "ASUS TUF",
    description : "16 GB/512 GB SSD",
    author: "asus",
    price: "49990",
    cutPrice : "59990",
    discount : "31%",
    categoryName: "laptop",
    rating : "4.6",
    img : asusTuff,
    badge : false
  },
  {
    _id: uuid(),
    title: "POCO C31",
    description : "Royal Blue, 64 GB",
    author: "poco",
    price: "8999",
    cutPrice : "11999",
    discount : "25%",
    categoryName: "phone",
    rating : "4.4",
    img : pocoC31,
    badge : false
  },
  {
    _id: uuid(),
    title: "Google Pixel 4a",
    description : "Just Black, 128 GB",
    author: "google",
    price: "27999",
    cutPrice : "31999",
    discount : "13%",
    categoryName: "phone",
    rating : "4.5",
    img : googlePixel,
    badge : false
  },
  {
    _id: uuid(),
    title: "realme 9 5G SE",
    description : "Starry Glow, 128 GB",
    author: "realme",
    price: "19999",
    cutPrice : "24999",
    discount : "20%",
    categoryName: "phone",
    rating : "3.7",
    img : realmeSe,
    badge : false
  },
  {
    _id: uuid(),
    title: "realme Narzo 30",
    description : "Racing Blue, 128 GB",
    author: "realme",
    price: "15499",
    cutPrice : "16999",
    discount : "9%",
    categoryName: "phone",
    rating : "4.3",
    img : realmeNarzo,
    badge : false
  },
  {
    _id: uuid(),
    title: "REDMI Note 10T 5G",
    description : "Metallic Blue, 64 GB",
    author: "redmi",
    price: "10000",
    cutPrice : "13999",
    discount : "18%",
    categoryName: "gaming",
    rating : "4.5",
    img : redmi10t,
    badge : false
  },
  {
    _id: uuid(),
    title: "ASUS ROG Phone 3",
    description : "Black, 128 GB",
    author: "asus",
    price: "49999",
    cutPrice :"57999",
    discount : "14%",
    categoryName: "gaming",
    rating : "4.5",
    img : asusRog,
    badge : false
  },
  {
    _id: uuid(),
    title: "SAMSUNG S20",
    description : "Cloud Navy 128 GB",
    author: "samsung",
    price: "37764",
    cutPrice :"38429",
    discount : "50%",
    categoryName: "phone",
    rating : "2.3",
    img : samsungFe,
    badge : false
  },
  {
    _id: uuid(),
    title: "SAMSUNG F22",
    description : "Denim Blue, 128 GB",
    author: "samsung",
    price: "14999",
    cutPrice :"16999",
    discount : "12%",
    categoryName: "phone",
    rating : "3.7",
    img : samsungF22,
    badge : false
  },
  {
    _id: uuid(),
    title: "boAt Rockerz 450",
    description : "15 Hours Playback",
    author: "boat",
    price: "1249",
    cutPrice :"3990",
    discount : "69%",
    categoryName: "headphone",
    rating : "3.9",
    img : boatRock,
    badge : true
  },
  {
    _id: uuid(),
    title: "Noise One",
    description : "Soft Black",
    author: "noise",
    price: "1049",
    cutPrice :"3999",
    discount : "74%",
    categoryName: "headphone",
    rating : "2.1",
    img : noise,
    badge : false
  },
  {
    _id: uuid(),
    title: "Mi Super Bass",
    description : "Black, Red",
    author: "mi",
    price: "1549",
    cutPrice :"2199",
    discount : "30%",
    categoryName: "headphone",
    rating : "2.1",
    img : miBass,
    badge : false
  },
  {
    _id: uuid(),
    title: "SONY WH-CH510",
    description : "Google Assistant enabled",
    author: "sony",
    price: "3341",
    cutPrice :"4990",
    discount : "33%",
    categoryName: "headphone",
    rating : "3.7",
    img : sony,
    badge : false
  },
];
