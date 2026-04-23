import catRice from "@/assets/cat-rice.jpg";
import catSpices from "@/assets/cat-spices.jpg";
import catGrains from "@/assets/cat-grains.jpg";
import catPulses from "@/assets/cat-pulses.jpg";
import catFlour from "@/assets/cat-flour.jpg";
import catOils from "@/assets/cat-oils.jpg";
import catDryFruits from "@/assets/cat-dryfruits.jpg";
import catSweeteners from "@/assets/cat-sweeteners.jpg";
import catPackaged from "@/assets/cat-packaged.jpg";
import catBeverages from "@/assets/cat-beverages.jpg";
import catConfectionery from "@/assets/cat-confectionery.jpg";

export type Subcategory = { name: string; items: string[] };
export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  flagship?: boolean;
  subcategories: Subcategory[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "rice",
    name: "Rice",
    tagline: "Basmati, Non-Basmati & Parboiled — our flagship.",
    image: catRice,
    flagship: true,
    subcategories: [
      { name: "Basmati", items: ["Basmati Steam Rice", "Basmati Raw Rice", "Basmati White Sella", "Basmati Golden Sella"] },
      { name: "Sona Masoori", items: ["Sona Masoori Steam Rice", "Sona Masoori Raw Rice", "Sona Masoori White Sella", "Sona Masoori Golden Sella"] },
      { name: "PR 11", items: ["PR 11 Steam Rice", "PR 11 Raw Rice", "PR 11 Golden Sella", "PR 11 White Sella"] },
    ],
  },
  {
    slug: "grains-cereals",
    name: "Grains & Cereals",
    tagline: "Wheat, oats, barley, quinoa and corn products.",
    image: catGrains,
    subcategories: [
      { name: "Wheat & Flour", items: ["Atta", "Maida", "Semolina"] },
      { name: "Other Grains", items: ["Oats", "Barley", "Quinoa"] },
      { name: "Corn & Maize", items: ["Whole Corn", "Maize Flour", "Corn Grits"] },
    ],
  },
  {
    slug: "pulses-lentils",
    name: "Pulses & Lentils",
    tagline: "Whole, split and specialty pulses.",
    image: catPulses,
    subcategories: [
      { name: "Whole Lentils", items: ["Masoor (whole)", "Moong (whole)", "Urad (whole)"] },
      { name: "Split Lentils (Dal)", items: ["Toor Dal", "Moong Dal", "Urad Dal", "Chana Dal"] },
      { name: "Chickpeas", items: ["Kabuli Chana", "Desi Chana"] },
      { name: "Beans", items: ["Red Kidney Beans", "Black Beans", "Black-Eyed Peas"] },
    ],
  },
  {
    slug: "spices-seasonings",
    name: "Spices & Seasonings",
    tagline: "Whole, ground, blends and herbs.",
    image: catSpices,
    subcategories: [
      { name: "Whole Spices", items: ["Cumin", "Cardamom", "Cloves", "Black Pepper", "Star Anise"] },
      { name: "Ground Spices", items: ["Turmeric", "Chili Powder", "Coriander Powder", "Garam Masala"] },
      { name: "Blended Masalas", items: ["Biryani Masala", "Tandoori Masala", "Chaat Masala"] },
      { name: "Herbs & Salt", items: ["Oregano", "Basil", "Sea Salt", "Seasoning Mixes"] },
    ],
  },
  {
    slug: "edible-oils",
    name: "Edible Oils",
    tagline: "Cooking and specialty oils.",
    image: catOils,
    subcategories: [
      { name: "Cooking Oils", items: ["Sunflower Oil", "Palm Oil", "Soybean Oil", "Canola Oil"] },
      { name: "Specialty", items: ["Olive Oil (Extra Virgin)", "Olive Oil (Pomace)"] },
    ],
  },
  {
    slug: "flour",
    name: "Flour",
    tagline: "Wheat flour, atta, maida and specialty flours.",
    image: catFlour,
    subcategories: [
      { name: "Wheat Flour", items: ["Whole Wheat Atta", "Maida (Refined)", "Semolina (Sooji)"] },
      { name: "Specialty Flour", items: ["Chickpea Flour (Besan)", "Rice Flour", "Corn Flour"] },
    ],
  },
  {
    slug: "sweeteners-sugar",
    name: "Sweeteners & Sugar",
    tagline: "Sugar, jaggery, honey and syrups.",
    image: catSweeteners,
    subcategories: [
      { name: "Sugar", items: ["White Sugar", "Brown Sugar", "Castor Sugar"] },
      { name: "Natural Sweeteners", items: ["Jaggery", "Honey", "Date Syrup"] },
      { name: "Sugar Substitutes", items: ["Stevia", "Artificial Sweeteners"] },
    ],
  },
  {
    slug: "dry-fruits-nuts",
    name: "Dry Fruits & Nuts",
    tagline: "Premium nuts, dried fruits and seeds.",
    image: catDryFruits,
    subcategories: [
      { name: "Nuts", items: ["Almonds", "Cashews", "Pistachios", "Walnuts"] },
      { name: "Dried Fruits", items: ["Raisins", "Dates", "Figs", "Apricots"] },
      { name: "Mixes & Seeds", items: ["Trail Mix", "Chia Seeds", "Flax Seeds", "Sunflower Seeds"] },
    ],
  },
  {
    slug: "confectionery-snacks",
    name: "Confectionery & Snacks",
    tagline: "Chocolates, biscuits, candies and savoury snacks.",
    image: catConfectionery,
    subcategories: [
      { name: "Chocolates & Candy", items: ["Chocolate bars", "Toffees", "Hard candies"] },
      { name: "Biscuits & Cookies", items: ["Cream biscuits", "Crackers", "Cookies"] },
      { name: "Savoury Snacks", items: ["Wafers & chips", "Namkeen", "Trail mixes"] },
    ],
  },
  {
    slug: "packaged-foods",
    name: "Canned, Pasta & Packaged",
    tagline: "Canned goods, pasta, noodles and instant meals.",
    image: catPackaged,
    subcategories: [
      { name: "Canned & Jars", items: ["Canned beans", "Canned vegetables", "Soups & broths"] },
      { name: "Pasta & Noodles", items: ["Pasta", "Instant noodles", "Vermicelli", "Couscous"] },
      { name: "Ready-to-Eat", items: ["Instant biryani", "Ready curries", "Cup noodles"] },
      { name: "Breakfast", items: ["Cornflakes", "Granola & muesli", "Pancake mix"] },
    ],
  },
  {
    slug: "beverages-condiments",
    name: "Beverages & Condiments",
    tagline: "Tea, coffee, sauces and food ingredients.",
    image: catBeverages,
    subcategories: [
      { name: "Beverages (Dry)", items: ["Tea", "Coffee", "Powdered drinks", "Milk powder", "Tetra-pack juices"] },
      { name: "Sauces & Condiments", items: ["Ketchup", "Mayonnaise", "Soy sauce", "Vinegar", "Pickles & chutneys"] },
      { name: "Baking Ingredients", items: ["Baking powder", "Yeast", "Cocoa powder", "Food colour & essence"] },
      { name: "Food Additives (B2B)", items: ["Preservatives", "Stabilizers", "Flavouring agents"] },
    ],
  },
];