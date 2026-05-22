export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readingTime: string;
  imageUrl: string;
  category: string;
}

export const categories: Category[] = [
  {
    id: "faucets",
    name: "Luxury Faucets",
    slug: "faucets",
    description: "Impeccably crafted faucets combining fluid design with precision engineering. Available in brushed gold, matte black, and polished chrome.",
    features: [
      "Aerated water-saving flow",
      "Solid brass core construction",
      "Sedal ceramic disc cartridge",
      "Scratch-resistant PVD finishes"
    ],
    imageUrl: "/categories/faucets.jpg"
  },
  {
    id: "showers",
    name: "Thermostatic Showers",
    slug: "showers",
    description: "Reimagine your shower ritual with overhead rain systems, body jets, and smart temperature controls for an immersive spa experience.",
    features: [
      "Anti-scald thermostatic technology",
      "Multi-function spray patterns",
      "Easy-clean silicone nozzles",
      "Integrated LED chromotherapy"
    ],
    imageUrl: "/categories/showers.jpg"
  },
  {
    id: "bathtubs",
    name: "Freestanding Bathtubs",
    slug: "bathtubs",
    description: "Sculptural freestanding tubs crafted from high-grade acrylic and stone resin, designed to serve as the statement piece of your bathroom.",
    features: [
      "Ergonomic double-ended designs",
      "Superior heat retention",
      "Stain and scratch resistant",
      "Integrated slot overflow"
    ],
    imageUrl: "/categories/bathtubs.jpg"
  },
  {
    id: "smart-toilets",
    name: "Smart Sanitaryware",
    slug: "smart-toilets",
    description: "Intelligent toilets and bidets featuring automatic open/close, heated seats, customizable cleansing, and warm air drying.",
    features: [
      "Dual-cyclone flushing system",
      "Heated seat with temperature control",
      "UV-light self-cleaning nozzle",
      "Carbon deodorizer filtration"
    ],
    imageUrl: "/categories/smart-toilets.jpg"
  },
  {
    id: "accessories",
    name: "Designer Accessories",
    slug: "accessories",
    description: "The finishing touches that complete your sanctuary. Towel rails, robe hooks, soap dispensers, and mirrors designed to match our fixture collections.",
    features: [
      "Coordinating design families",
      "Concealed mounting hardware",
      "Premium rust-proof materials",
      "Anti-fog smart LED mirrors"
    ],
    imageUrl: "/categories/accessories.jpg"
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "The Rise of Biophilic Bathroom Design",
    slug: "biophilic-bathroom-design",
    excerpt: "Discover how incorporating natural elements, organic textures, and sunlight transforms your bathroom into a rejuvenating wellness sanctuary.",
    category: "Design Trends",
    date: "May 15, 2026",
    readingTime: "5 min read",
    imageUrl: "/blog/biophilic.jpg",
    author: {
      name: "Evelyn Sterling",
      role: "Lead Interior Architect",
      avatar: "ES"
    },
    content: `
      <p>In the fast-paced modern world, the home has increasingly become a refuge from noise, screens, and stress. Among all spaces, the bathroom is undergoing the most significant evolution—moving away from a purely utilitarian room to a personalized wellness sanctuary. At the heart of this transformation is <strong>Biophilic Design</strong>.</p>
      
      <p>Biophilic design is the practice of connecting people with nature within the built environment. It is not just about placing a few potted plants on a counter; it is a holistic philosophy that integrates natural light, organic materials, textures, views, and sound to create an atmosphere of restoration.</p>
      
      <h3>1. Embracing Organic Materials</h3>
      <p>The sterile, all-white tile bathrooms of the past are giving way to warm, tactile materials. Think natural stone basins, cedar accent walls, and marble tiling. These materials bring an inherent imperfection and warmth that relaxes the senses. A stone resin freestanding tub, for instance, anchors the space with its earthy, sculptural presence.</p>
      
      <h3>2. Maximizing Natural Light and Ventilation</h3>
      <p>Sunlight is critical to our circadian rhythms and overall mood. Modern biophilic bathrooms feature skylights, frosted floor-to-ceiling windows, or layouts that maximize natural light. If privacy is an issue, smart glass that transitions from transparent to opaque at the touch of a button is an excellent premium solution.</p>
      
      <h3>3. The Power of Water and Sound</h3>
      <p>The gentle sound of water has been proven to reduce cortisol levels. Incorporating rain shower heads that mimic natural rainfall or silent waterfall faucets brings the auditory therapy of nature indoors. Designing a layout that dampens echo—using wooden panels or textured tiles—helps create a quiet acoustic environment.</p>

      <blockquote>
        "A biophilic bathroom is not merely a design trend; it is an investment in your daily mental health and wellness ritual."
      </blockquote>

      <h3>4. Integrating Live Flora</h3>
      <p>High-humidity environments are perfect for tropical plants like ferns, orchids, and snake plants. You can build a living wall behind a freestanding tub, or hang eucalyptus in the shower to release aromatic oils when steam rises. The visual connection to living greenery immediately brings a sense of life and vitality into the space.</p>
      
      <p>By blending organic textures, ambient lighting, and natural elements with high-performance, water-saving fixtures, you can design a space that looks stunning and feels like a luxury retreat every single day.</p>
    `
  },
  {
    title: "Smart Bathrooms: The Next Frontier in Luxury Wellness",
    slug: "smart-bathrooms-luxury-wellness",
    excerpt: "Explore the cutting-edge smart technologies redefining the modern bathroom, from thermostatic control systems to personalized cleansing units.",
    category: "Technology",
    date: "April 28, 2026",
    readingTime: "6 min read",
    imageUrl: "/blog/smart-bathroom.jpg",
    author: {
      name: "Marcus Vance",
      role: "Smart Home Integration Expert",
      avatar: "MV"
    },
    content: `
      <p>Technology has integrated seamlessly into our living rooms, kitchens, and security systems, and now it is elevating our bathrooms. The smart bathroom is no longer a futuristic novelty; it is a vital pillar of the modern luxury home, focusing on personalized comfort, hygiene, and efficiency.</p>
      
      <p>From thermostatic showers that remember your exact temperature preference to toilets that self-clean, here is how smart technology is reshaping our daily routines.</p>
      
      <h3>1. Personalization via Thermostatic Control</h3>
      <p>Traditional showers require constant manual adjustment. Smart shower controllers allow you to pre-heat your shower to the exact degree via a smartphone app or voice command. You can program profiles for each family member, specifying spray intensity, water temperature, and even custom lighting modes.</p>
      
      <h3>2. Intelligent Sanitaryware</h3>
      <p>Smart toilets have set a new standard for luxury hygiene. With features like heated seats, automatic motion-activated lids, integrated bidets with adjustable water pressure/temperature, and built-in deodorizers, they offer a touchless experience. Advanced models also feature UV-light sanitation that keeps the bowl clean without harsh chemicals.</p>
      
      <h3>3. Smart Mirrors and Chromotherapy</h3>
      <p>The modern bathroom mirror does more than reflect; it acts as a digital hub. Smart mirrors feature built-in, dimmable LED lighting, anti-fog heating elements, Bluetooth speakers, and displays showing the time, weather, and news. Coupled with chromotherapy (color-light therapy) in showers and tubs, you can set the mood to energizing blue in the morning or calming violet in the evening.</p>
      
      <blockquote>
        "Smart technology isn't just about connectivity; it's about eliminating friction and tailoring the environment to your personal well-being."
      </blockquote>

      <h3>4. Water Conservation and Leak Detection</h3>
      <p>Luxury and sustainability can coexist. Smart flow sensors monitor water usage and detect anomalies or leaks in real-time, sending automatic shutoff commands and phone alerts to prevent damage. High-efficiency aerators ensure that even with low water consumption, the feeling of water pressure remains luxurious and full.</p>
      
      <p>As we look forward, the bathroom will continue to become more intuitive, integrating health-monitoring sensors and personalized wellness coaching, making it the ultimate destination for self-care.</p>
    `
  },
  {
    title: "Curating the Perfect Bathroom Palette",
    slug: "curating-perfect-bathroom-palette",
    excerpt: "From serene neutrals to bold architectural contrasts, learn how to select colors and finishes that stand the test of time.",
    category: "Design Advice",
    date: "March 12, 2026",
    readingTime: "4 min read",
    imageUrl: "/blog/color-palette.jpg",
    author: {
      name: "Elena Rostova",
      role: "Colorist & Stylist",
      avatar: "ER"
    },
    content: `
      <p>Color has a profound impact on how we perceive space and how we feel within it. In bathroom design, choosing a palette is about finding a balance between personal expression and timeless elegance. Because remodeling a bathroom is a long-term investment, the colors and finishes you select must feel fresh and beautiful for years to come.</p>
      
      <p>Whether you prefer a calm, spa-like environment or a bold, dramatic space, here is how to curate your bathroom's color scheme.</p>
      
      <h3>1. The Serene Neutral Palette</h3>
      <p>Shades of warm gray, soft beige, taupe, and cream are the foundation of classic spa aesthetics. These tones reflect light beautifully and feel clean without being clinical. To prevent neutral schemes from looking flat, layer different textures—such as matte-finished walls, ribbed wood vanities, and polished stone countertops.</p>
      
      <h3>2. The Modern Monochrome (Black & White)</h3>
      <p>A black-and-white palette offers high contrast and architectural drama. A popular modern approach is using matte black faucets and shower fixtures against pure white marble tile. This creates a clean, graphic look that feels structured and contemporary.</p>
      
      <h3>3. Jewel Tones and Deep Hues</h3>
      <p>For powder rooms or master bathrooms looking to make a statement, deep forest green, navy, or rich terracotta are becoming highly popular. These colors create a cozy, cocoon-like feeling. When using dark colors, ensure you have excellent lighting, especially around mirrors, to keep the space functional.</p>

      <blockquote>
        "The secret to a successful color scheme is the 60-30-10 rule: 60% dominant color (walls/tiles), 30% secondary color (vanity/flooring), and 10% accent color (hardware and towels)."
      </blockquote>

      <h3>4. Selecting the Right Hardware Finishes</h3>
      <p>Your faucets and shower fittings are the jewelry of the bathroom. Brushed gold and brass finishes bring warmth and elegance to cool-toned tiles. Matte black looks striking in modern, industrial, or minimalist schemes. Chrome and brushed nickel offer a classic, versatile look that complements almost any palette.</p>
      
      <p>By carefully pairing your wall colors, tile choices, and faucet finishes, you can create a cohesive and harmonious sanctuary that reflects your unique style.</p>
    `
  }
];
