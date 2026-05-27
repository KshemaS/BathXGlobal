import { StaticImageData } from "next/image";

// Import premium curated local assets
import img1 from "@/app/assets/images/pexels-artbovich-6908370.jpg";
import img2 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import img4 from "@/app/assets/images/pexels-artbovich-6316056.jpg";
import img5 from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";

export interface BlogParagraph {
  type: "paragraph";
  text: string;
}

export interface BlogHeading {
  type: "heading";
  text: string;
  level: 2 | 3;
}

export interface BlogQuote {
  type: "quote";
  text: string;
  author?: string;
}

export interface BlogImage {
  type: "image";
  imageSrc: StaticImageData;
  alt: string;
  caption?: string;
}

export type BlogContentElement = BlogParagraph | BlogHeading | BlogQuote | BlogImage;

export interface Author {
  name: string;
  role: string;
  initials: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: StaticImageData;
  excerpt: string;
  author: Author;
  content: BlogContentElement[];
}

export const ALL_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Minimalist Bath Space Design",
    category: "DESIGN",
    date: "OCTOBER 12, 2025",
    readTime: "5 MIN READ",
    image: img1,
    excerpt: "Exploring the silent power of negative space, concealed layouts, and monolithic blocks in standard master bathroom architecture.",
    author: {
      name: "Alessandro Rossi",
      role: "Principal Spatial Architect",
      initials: "AR"
    },
    content: [
      {
        type: "paragraph",
        text: "In the realm of contemporary architectural design, the bathroom is no longer viewed merely as a utilitarian chamber. Instead, it has ascended to become a sanctuary of solitude—a visual and physical reset from the sensory overload of modern existence. The pursuit of minimalism within this intimate space is not about emptying a room; rather, it is about the deliberate orchestration of negative space, concealed utility, and monolithic geometry."
      },
      {
        type: "heading",
        level: 2,
        text: "The Power of Monolithic Geometries"
      },
      {
        type: "paragraph",
        text: "To achieve a truly minimalist environment, one must replace fragmented fixtures with clean, unified blocks. Instead of a standard basin resting on an exposed cabinet, modern design favors floating vanities crafted from a single, uninterrupted slab of travertine, Carrara marble, or matte solid-surfacing. By integrating the washbasin directly into the countertop material, we eliminate seams, joints, and visual clutter, drawing the eye to the pure form and raw texture of the stone."
      },
      {
        type: "quote",
        text: "Minimalism is not the subtraction of detail, but the absolute integration of every element into a single, cohesive architectural narrative.",
        author: "Alessandro Rossi"
      },
      {
        type: "heading",
        level: 3,
        text: "Concealing Utility for Visual Peace"
      },
      {
        type: "paragraph",
        text: "True elegance lies in what remains unseen. In walls engineered with hidden cisterns and in-wall mixers, the mechanics of water flow are seamlessly integrated into the structural envelope. Faucets should emerge directly from the vertical surfaces as sculptural extensions rather than separate appliances. By routing supply pipes within the masonry, we transform functional water outlets into pure design statements."
      },
      {
        type: "image",
        imageSrc: img5,
        alt: "Monolithic bathroom block layout",
        caption: "Seamless architectural integration of marble vanity basins and concealed plumbing."
      },
      {
        type: "paragraph",
        text: "Finally, materials must be kept to a strict, harmonious palette. Limit the space to two or three primary finishes—such as brushed gold brassware, raw concrete-plaster walls, and textured basalt tiles. This visual constraint encourages the mind to settle, transforming your morning routine into a serene, meditative ritual."
      }
    ]
  },
  {
    id: 2,
    title: "Selecting the Perfect Matt Black Finish",
    category: "MATERIALS",
    date: "NOVEMBER 08, 2025",
    readTime: "4 MIN READ",
    image: img2,
    excerpt: "A deep dive into high-durability electroplated finishes, matching copper alloy substrates, and structural fingerprint prevention.",
    author: {
      name: "Isabella Vance",
      role: "Atelier Finish Director",
      initials: "IV"
    },
    content: [
      {
        type: "paragraph",
        text: "Brushed metals and polished chromes have long held a dominant position in high-end bathroom design. However, the modern luxury sector has embraced a darker, more dramatic alternative: matte black. Far from being a passing trend, matte black finishes have established themselves as a permanent classic, offering a stark, graphic contrast that anchors light-toned stone and plaster walls."
      },
      {
        type: "heading",
        level: 2,
        text: "Electroplating vs. Powder Coating"
      },
      {
        type: "paragraph",
        text: "Not all matte black surfaces are created equal. When selecting luxury brassware, understanding the underlying technology is critical. Standard consumer fixtures often rely on powder coating—a process where dry paint powder is electrostatically applied and cured under heat. While cost-effective, powder coatings are prone to chipping, wearing thin on edges, and degrading under high humidity."
      },
      {
        type: "quote",
        text: "A truly premium finish is grown, not painted. Electroplated layers fuse with the molecular structure of the raw metal below, ensuring a lifetime of durability.",
        author: "Isabella Vance"
      },
      {
        type: "paragraph",
        text: "Luxury fittings utilize advanced electroplating or Physical Vapor Deposition (PVD). In these processes, a microscopic, ultra-hard metallic alloy is bonded to the brass substrate at a molecular level. This creates a finish that is incredibly thin yet exceptionally scratch-resistant, maintaining its rich velvety matte appearance even after years of daily friction and cleaning cycles."
      },
      {
        type: "heading",
        level: 3,
        text: "Eradicating the Fingerprint Dilemma"
      },
      {
        type: "paragraph",
        text: "One of the historical complaints of dark matte finishes has been their tendency to display oil, soap scum, and fingerprint smudges. To counter this, BathX utilizes a specialized hydrophobic and oleophobic nano-coating on top of our electroplated finishes. This invisible layer lowers the surface energy, causing water droplets to bead up and roll away while preventing biological oils from bonding to the texture."
      },
      {
        type: "paragraph",
        text: "When pairing matte black brassware with other elements, look for textured counterparts like dark charcoal aggregate terrazzo, wire-brushed oak vanities, and raw plaster walls. The interplay of light absorption and subtle texture creates an atmosphere of rich, understated comfort."
      }
    ]
  },
  {
    id: 3,
    title: "Integrating Smart Faucets in Modern Homes",
    category: "TECHNOLOGY",
    date: "DECEMBER 15, 2025",
    readTime: "6 MIN READ",
    image: img3,
    excerpt: "Understanding sensor-activated water regulation, temperature presets, and zero-touch hygiene inside high-end custom residences.",
    author: {
      name: "Dr. Emily Chen",
      role: "Wellness Systems Expert",
      initials: "EC"
    },
    content: [
      {
        type: "paragraph",
        text: "Smart home automation has evolved rapidly from simple voice-controlled light bulbs to sophisticated, integrated environmental systems. The latest frontier of this digital revolution is the luxury bath suite, where advanced fluid dynamics and sensory technologies converge to deliver unprecedented hygiene, conservation, and physical comfort."
      },
      {
        type: "heading",
        level: 2,
        text: "Precision Temperature Management"
      },
      {
        type: "paragraph",
        text: "Traditional manual mixing valves require constant adjustment, resulting in wasted water and fluctuating temperatures. Modern smart faucets eliminate this friction with electronic thermostatic mixing. Integrated microprocessors measure incoming water temperature thousands of times per second, adjusting internal valves to maintain your exact preset temperature (e.g., exactly 38°C) within a fraction of a degree."
      },
      {
        type: "quote",
        text: "Technology should operate like a silent butler—invisible, anticipating your comfort, and executing commands without friction or delay.",
        author: "Dr. Emily Chen"
      },
      {
        type: "paragraph",
        text: "Using personalized profiles, members of a household can save their preferred heat settings, water flow volume, and even lighting colors. When approaching the vanity, integrated proximity sensors identify the user and immediately configure the water system to their specific taste, creating a bespoke wellness interaction."
      },
      {
        type: "heading",
        level: 3,
        text: "Zero-Touch Hygiene and Sustainability"
      },
      {
        type: "paragraph",
        text: "By utilizing medical-grade motion sensors, high-end residential faucets now offer completely touchless operation. This not only preserves the pristine finish of the faucet from soap-covered hands but also dramatically reduces cross-contamination. Water is delivered instantly upon presence detection and cut off immediately when hands are withdrawn, cutting water waste by up to 50% without compromising on the sensory volume of the flow."
      }
    ]
  },
  {
    id: 4,
    title: "The Calm of Spa-Inspired Bathroom Suites",
    category: "WELLNESS",
    date: "JANUARY 22, 2026",
    readTime: "7 MIN READ",
    image: img4,
    excerpt: "Crafting sensory wellness pathways using thermostatic rainfall showers, visual lighting syncs, and custom aromatic diffusers.",
    author: {
      name: "Marcus Aurelius Thorne",
      role: "Wellness Space Consultant",
      initials: "MT"
    },
    content: [
      {
        type: "paragraph",
        text: "The modern home is increasingly asked to double as a health retreat. As high-stress environments dominate our public lives, the master suite must serve as a restorative destination. By incorporating elements of professional hydrotherapy and sensory atmospheric control, we can choreograph an immersive wellness experience within the residential footprint."
      },
      {
        type: "heading",
        level: 2,
        text: "The Art of Hydrotherapy"
      },
      {
        type: "paragraph",
        text: "Water is a powerful therapeutic tool. Introducing advanced shower columns equipped with multi-zone outputs allows users to transition effortlessly between soothing heavy rain simulations, vigorous muscle-massaging body jets, and gentle satin-mist sprays. Thermostatic systems enable rapid contrast-therapy cycles—alternating between hot water to expand blood vessels and cool water to stimulate circulation—ideal for muscle recovery and mental clarity."
      },
      {
        type: "quote",
        text: "To bathe is to reconnect with our elemental origins. The home spa is a space where water, light, and aroma join together to heal the modern soul.",
        author: "Marcus A. Thorne"
      },
      {
        type: "paragraph",
        text: "To complement water therapies, integrated chromotherapy (light therapy) lights are built directly into the showerheads. Programmed lighting sequences correspond to desired psychological states: soft sky-blues to encourage muscle relaxation, amber hues to elevate energy, or forest-greens to balance emotional stress."
      },
      {
        type: "heading",
        level: 3,
        text: "Olfactory and Auditory Resonance"
      },
      {
        type: "paragraph",
        text: "No spa experience is complete without stimulating the remaining senses. In-wall aromatic diffusion units release precise micro-mists of organic essential oils like eucalyptus, cedarwood, and lavender based on the time of day. Underneath the tiles, waterproof acoustic transceivers turn the entire structure into a rich soundboard, enveloping the space in deep ambient frequencies that block out external disruptions."
      }
    ]
  },
  {
    id: 5,
    title: "Terrazzo & Marble: A Timeless Material Match",
    category: "MINIMALISM",
    date: "FEBRUARY 18, 2026",
    readTime: "5 MIN READ",
    image: img5,
    excerpt: "Combining classical Carrara stone slabs with rich Italian aggregate terrazzo floors to forge texturally satisfying design layouts.",
    author: {
      name: "Sophia Rossi",
      role: "Lead Materials Curator",
      initials: "SR"
    },
    content: [
      {
        type: "paragraph",
        text: "Material selection dictates the emotional resonance of a room. While high-gloss porcelain tiles are common, luxury spaces demand materials with depth, character, and tactile honesty. The pairing of classical marble with textured, aggregate terrazzo creates a beautiful conversation between organic flowing veins and geometric structural chips."
      },
      {
        type: "heading",
        level: 2,
        text: "The Organic Grandeur of Marble"
      },
      {
        type: "paragraph",
        text: "Marble is nature’s poetry. Sourced from the ancient quarries of Italy, each block of Calacatta or Carrara features dynamic, unpredictable gray veining against a pure white background. When used as expansive slabs on vanity backsplashes or walk-in shower walls, marble provides a sense of monumental luxury. It acts as an artistic canvas created by millions of years of geomorphic heat and pressure."
      },
      {
        type: "quote",
        text: "By marrying the organic flowing veins of Italian marble with the structured mosaic grid of terrazzo, we create an interior that feels both historical and thoroughly modern.",
        author: "Sophia Rossi"
      },
      {
        type: "paragraph",
        text: "To prevent marble from looking too cold or clinical, designers pair it with terrazzo flooring. Terrazzo—composed of chips of marble, quartz, granite, and glass set in a cementitious binder—adds texturally satisfying grit and pattern variance. The aggregate nature of terrazzo breaks up light reflections, softening the hard surfaces of the room and grounding the entire design layout."
      },
      {
        type: "heading",
        level: 3,
        text: "Practical Sealing and Maintenance"
      },
      {
        type: "paragraph",
        text: "Because both marble and terrazzo are porous natural stones, preserving their beauty requires proper engineering. The surfaces must be sealed with advanced deeply penetrating impregnating sealers that prevent staining from cosmetic oils or acidic soaps while allowing the stone to breathe. Matte finishes are highly recommended, as they minimize the visibility of etching and offer superior slip resistance underfoot."
      }
    ]
  },
  {
    id: 6,
    title: "Choreographing Water: Flow and Sound Dynamics",
    category: "DESIGN",
    date: "MARCH 05, 2026",
    readTime: "6 MIN READ",
    image: img1,
    excerpt: "How laminar flow designs and aeration processes modify acoustic frequencies to transform standard running water into melodic peace.",
    author: {
      name: "Giovanni Bianchi",
      role: "Acoustics & Fluidics Engineer",
      initials: "GB"
    },
    content: [
      {
        type: "paragraph",
        text: "We often judge luxury bathroom fittings solely by their appearance, yet the tactile and acoustic experience of water is what determines true quality. The sound of water running in a sink can range from an irritating, metallic rattle to a gentle, organic hum. Through advanced fluid dynamics, we can tune water’s path to create musical harmony."
      },
      {
        type: "heading",
        level: 2,
        text: "The Perfection of Laminar Flow"
      },
      {
        type: "paragraph",
        text: "Standard aerated faucets mix water with high-pressure air, resulting in a turbulent, splashing stream that produces loud white noise upon impact. In contrast, luxury faucets often utilize laminar flow technology. Laminar flow creates a perfectly straight, crystal-clear cylinder of water that does not splash. It flows with absolute silence and feels incredibly soft, resembling a glass rod connecting the faucet to the basin drain."
      },
      {
        type: "quote",
        text: "Water is a musical instrument. As designers, our duty is to tune its keys so that every flow, splash, and drop resonates with natural comfort.",
        author: "Giovanni Bianchi"
      },
      {
        type: "paragraph",
        text: "When laminar water impacts the basin, it does so with minimal agitation, reducing splash-back and keeping the vanity surrounding areas dry. The acoustic profile of this impact is deep, resonant, and remarkably quiet, mimicking the sound of a mountain stream rather than pressurized household plumbing."
      },
      {
        type: "heading",
        level: 3,
        text: "Basin Contouring and Acoustics"
      },
      {
        type: "paragraph",
        text: "The shape of the washbasin plays a massive role in acoustic dampening. Flat-bottomed rectangular basins reflect water energy directly back, creating sharp, splashing noises. Luxury basins feature precisely engineered, sloping parabolic curves that gently catch the water stream, encouraging it to spiral smoothly toward the drain. Combined with sound-dampening acoustic pads applied to the underside of the vanity slabs, these designs ensure the sound of water remains a soothing ambient backdrop."
      }
    ]
  },
  {
    id: 7,
    title: "Brassware Craftsmanship: Inside Our Milan Atelier",
    category: "CRAFTSMANSHIP",
    date: "APRIL 02, 2026",
    readTime: "8 MIN READ",
    image: img2,
    excerpt: "Following the tactile journey of raw solid brass ingots turned into highly polished masterpieces by our generational Italian artisans.",
    author: {
      name: "Matteo Bellini",
      role: "Master Artisan Metalsmith",
      initials: "MB"
    },
    content: [
      {
        type: "paragraph",
        text: "In an age of automated robotic mass production, true luxury lies in the touch of human hands. In our dedicated atelier in the outskirts of Milan, generational metalworkers preserve the ancient techniques of brass casting, grinding, and hand-polishing, turning raw alloy bars into exquisite sculptures of water regulation."
      },
      {
        type: "heading",
        level: 2,
        text: "The Integrity of Lead-Free Solid Brass"
      },
      {
        type: "paragraph",
        text: "Every premium faucet begins with high-grade solid lead-free brass ingots. Unlike cheap zinc-alloy or plastic fixtures that leach toxins and corrode from the inside out, our brass offers exceptional structural strength, natural antimicrobial properties, and a lifetime of leak-free reliability. The raw ingots are melted at temperatures exceeding 1,000°C and poured into custom sand molds, cooling slowly to form thick, durable walls."
      },
      {
        type: "quote",
        text: "Machine polishing cannot replicate the understanding of how light reflects off a curved surface. That is a secret kept in the hands of our master artisans.",
        author: "Matteo Bellini"
      },
      {
        type: "paragraph",
        text: "Once freed from their molds, the raw fittings are rough, dark, and uneven. This is where the human touch becomes irreplaceable. Master artisans spend hours hand-grinding and buffing each component using organic cotton wheels. Guided purely by tactile sensation, they smooth away microscopic imperfections, ensuring that every curve and sharp edge transitions with flawless geometric precision."
      },
      {
        type: "heading",
        level: 3,
        text: "The Magic of Hand-Finishing"
      },
      {
        type: "paragraph",
        text: "Whether it is bringing out the deep golden glow of brushed brass or polishing chrome to a mirror-like finish, the final stage is a masterclass in metalwork. The artisan applies varying pressures to different facets of the fixture to create matching reflection lines across the entire collection. This dedication to craft results in an object that isn’t just a faucet, but a tactile piece of art that makes every touch feel special."
      }
    ]
  },
  {
    id: 8,
    title: "Designing Compact Luxury: Small Space Architecture",
    category: "ARCHITECTURE",
    date: "MAY 10, 2026",
    readTime: "5 MIN READ",
    image: img3,
    excerpt: "Smart structural hacks, floating vanities, and built-in mirror cabinets that optimize layout depth without losing an ounce of status.",
    author: {
      name: "Elara Sterling",
      role: "Luxury Interior Designer",
      initials: "ES"
    },
    content: [
      {
        type: "paragraph",
        text: "A small bathroom footprint should never equal a compromised spatial experience. While grand master suites have the luxury of vast open floors, smaller powder rooms or custom urban apartments present a much more exciting challenge: how to design a high-density sensory retreat where every millimeter is optimized for luxury."
      },
      {
        type: "heading",
        level: 2,
        text: "The Power of Visual Suspension"
      },
      {
        type: "paragraph",
        text: "In restricted layouts, floor space is the ultimate currency. Standard floor-mounted cabinets block visual depth, making a room feel boxy and claustrophobic. By lifting the vanity, toilet, and storage cabinets off the floor and suspending them securely to wall anchors, we expose the continuous floor tiling. This visual expansion immediately tricks the eye, making the room feel significantly larger than it is."
      },
      {
        type: "quote",
        text: "Luxury is not about square footage; it is about spatial intelligence. In a small bathroom, every line, light, and reflection must have a strategic purpose.",
        author: "Elara Sterling"
      },
      {
        type: "paragraph",
        text: "To complement this floating layout, utilize built-in wall niches for storage rather than projecting shelves. Cutting directly into wall studs allows you to create recessed shelving lined with rich marble slabs, keeping toiletries accessible while maintaining a perfectly flush, sleek wall surface."
      },
      {
        type: "heading",
        level: 3,
        text: "Reflections and Light Choreography"
      },
      {
        type: "paragraph",
        text: "Mirrors are an architect's best friend. Installing full-bleed floor-to-ceiling mirror sheets or integrated mirrored cabinets instantly doubles the visual space. Pair these mirrors with concealed, dimmable LED strip lighting tucked behind the floating elements. This indirect, glowing illumination eliminates dark corners and casts soft, flattering light across the room, wrapping the user in a luxurious, warm embrace."
      }
    ]
  },
  {
    id: 9,
    title: "Ecological Aesthetics: Sustainable Sanitary Systems",
    category: "ECOLOGY",
    date: "MAY 25, 2026",
    readTime: "4 MIN READ",
    image: img4,
    excerpt: "Integrating high-efficiency low-flow aerators and greywater recycle setups without compromising custom water pressure feels.",
    author: {
      name: "Julian Rivera",
      role: "Sustainable Building Advisor",
      initials: "JR"
    },
    content: [
      {
        type: "paragraph",
        text: "Historically, environmental sustainability and luxury design were seen as opposing concepts. Eco-friendly fixtures were often criticized for delivering weak, unsatisfying water flows, while luxury fixtures were notorious for high water consumption. Today, advanced fluid engineering has bridged this gap, proving that ecological responsibility can coexist with absolute physical luxury."
      },
      {
        type: "heading",
        level: 2,
        text: "High-Performance Aeration Technologies"
      },
      {
        type: "paragraph",
        text: "How do we reduce water volume without losing the satisfying feel of water pressure? The answer lies in advanced aeration and droplet control. By injecting millions of micro-bubbles of air into the water stream, we expand the volume of individual droplets while using less water. The resulting flow feels incredibly dense, soft, and full-bodied, yet consumes less than 5 liters of water per minute—far below standard regulations."
      },
      {
        type: "quote",
        text: "True sustainable luxury does not ask you to sacrifice your physical comfort. Instead, it uses engineering to make less water feel like an absolute abundance.",
        author: "Julian Rivera"
      },
      {
        type: "paragraph",
        text: "Additionally, advanced showerheads are designed with pulsating mist modes and high-velocity droplets. These systems accelerate water through tiny nozzle arrays, creating a high-energy mist that covers the body completely and rinses shampoo effortlessly, while using up to 40% less water than typical rainfall shower systems."
      },
      {
        type: "heading",
        level: 3,
        text: "Integrated Greywater and Dual-Flush Optimization"
      },
      {
        type: "paragraph",
        text: "Beyond the faucet, toilet flushing accounts for the largest share of household water usage. Modern smart toilets offer highly efficient dual-flush systems, utilizing complex siphon jets that clear the bowl completely using only 3 liters of water per flush. When paired with integrated greywater filtration units that clean sink water for toilet flushes, the modern luxury home is able to create a highly efficient, self-sustaining circular water cycle."
      }
    ]
  }
];
