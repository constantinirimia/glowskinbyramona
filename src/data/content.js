export const site = {
  name: 'Glow Skin by Ra-Mona',
  shortName: 'Glow Skin',
  tagline: "Let's get your glow on.",
  esthetician: 'Ra-Mona',
  email: 'glowskinbyramona@gmail.com',
  phone: '(773) 629-3546',
  phoneHref: 'tel:+17736293546',
  hours: [{ day: 'Studio hours', time: 'By appointment' }],
  address: 'Northbrook, Illinois · By appointment',
  instagram: 'https://www.instagram.com/glowskin_by_ramona/',
  instagramHandle: '@glowskin_by_ramona',
  logo: '/logo.jpg',
  formEndpoint: 'https://formsubmit.co/ajax/ifconstantine777@gmail.com',
}

export const images = {
  hero: '/images/bg_1.jpg',
  flatlay: '/images/bg_2.jpg',
  calm: '/images/bg_3.jpg',
  portrait: '/images/studio/ramona-coat.jpg',
  portraitHome: '/images/studio/ramona-portrait.jpg',
  room: '/gallery/30.jpg',
  towels: '/gallery/58.jpg',
  massage: '/gallery/36.jpg',
  facialWork: '/gallery/100.jpg',
  atWork: '/gallery/101.jpg',
  jawline: '/gallery/104.jpg',
  lamp: '/gallery/110.jpg',
  mixing: '/gallery/123.jpg',
  mask: '/gallery/124.jpg',
  resurfacing: '/gallery/136.jpg',
  ultrasonic: '/gallery/148.jpg',
  serumBottle: '/gallery/152.jpg',
  serumDrop: '/gallery/154.jpg',
}

export const studioGallery = [
  { src: '/gallery/30.jpg', alt: 'Ra-Mona performing a facial in the Northbrook treatment room' },
  { src: '/gallery/58.jpg', alt: 'Warm towels prepared for a facial' },
  { src: '/gallery/2.jpg', alt: 'Professional serums and facial tools' },
  { src: '/gallery/5.jpg', alt: 'Mask brushes and clinical skincare on the treatment table' },
  { src: '/gallery/36.jpg', alt: 'Hands-on facial massage' },
  { src: '/gallery/100.jpg', alt: 'Ra-Mona working through a custom facial' },
  { src: '/gallery/101.jpg', alt: 'Precision facial work at the treatment bed' },
  { src: '/gallery/104.jpg', alt: 'Facial massage along the jawline' },
  { src: '/gallery/110.jpg', alt: 'Detailed treatment under clinical lighting' },
  { src: '/gallery/123.jpg', alt: 'Mixing a custom treatment mask' },
  { src: '/gallery/124.jpg', alt: 'Applying a treatment mask' },
  { src: '/gallery/136.jpg', alt: 'Resurfacing treatment with a handheld device' },
  { src: '/gallery/148.jpg', alt: 'Ultrasonic spatula during a facial' },
  { src: '/gallery/152.jpg', alt: 'Professional serum selected for the treatment' },
  { src: '/gallery/154.jpg', alt: 'Serum applied during a facial' },
  { src: '/gallery/195.jpg', alt: 'Ra-Mona in the studio' },
]

export const services = [
  {
    slug: 'custom-facial',
    name: 'Custom Signature Facial',
    eyebrow: 'Bespoke care',
    duration: '',
    price: 'from $120',
    summary:
      'A detailed skin analysis, then a facial curated to your complexion that day — gold, oxygen, ageless, acne relief, or skin rescue.',
    image: images.mask,
  },
  {
    slug: 'microdermabrasion',
    name: 'Microdermabrasion',
    eyebrow: 'Resurfacing',
    duration: '',
    price: 'from $70',
    summary:
      'Crystal-free exfoliation that gently removes dead skin and impurities for an instantly velvety, luminous complexion — without downtime.',
    image: images.resurfacing,
  },
  {
    slug: 'microneedling',
    name: 'Microneedling',
    eyebrow: 'Collagen renewal',
    duration: '',
    price: '$250 & up',
    summary:
      'A minimally invasive treatment that stimulates your body’s natural repair response for smoother texture, fewer visible scars, and firmer skin.',
    image: images.serumDrop,
  },
  {
    slug: 'dermaplaning',
    name: 'Dermaplaning',
    eyebrow: 'Signature skin',
    duration: '',
    price: 'from $60',
    summary:
      'A sterile blade gently lifts away dead skin and peach fuzz for an instant, lit-from-within glow — with zero downtime.',
    image: images.jawline,
  },
]

export const extraTreatments = [
  {
    slug: 'lash-lift-tint',
    name: 'Lash Lift & Tint',
    duration: '',
    price: '$70',
  },
  { slug: 'chemical-peel', name: 'PCA Sensi Peel', price: '$140' },
  { slug: 'pca-no-peel', name: 'PCA No Peel', price: '$140' },
  { slug: 'pca-ultra-peel', name: 'PCA Ultra Peel', price: '$175' },
  { slug: '24k-gold', name: '24k Gold Facial', price: '$130' },
  { slug: 'oxygen', name: 'Oxygen Therapy Facial', price: '$150' },
  { slug: 'ageless', name: 'Ageless Facial', price: '$140' },
  { slug: 'acne', name: 'Acne Facial', price: '$120' },
  { slug: 'skin-rescue', name: 'Skin Rescue Facial', price: '$120' },
]

export const facialTherapies = [
  {
    name: '24 Carat Gold Treatment',
    price: '$130',
    scope: 'Powerful anti-aging, lifting, firming, and deep hydration for dry or aging skin.',
    experience:
      'Infuse your skin with a luxurious 24k liquid gold serum and a rich hydrating mask designed to deliver an instant, radiant lifting effect.',
  },
  {
    name: 'Oxygen Therapy Facial',
    price: '$150',
    scope: 'Instant skin brightening, environmental protection, and reviving dull, tired, or sallow skin.',
    experience:
      'Melt away stress with a refreshing oxygen mask packed with powerful Vitamin C to lighten, brighten, and protect your complexion.',
  },
  {
    name: 'Ageless Corrective Facial',
    price: '$140',
    scope: 'Cellular defense, fine line reduction, and youth restoration for aging, dull, or combination skin.',
    experience:
      'Reveal a youthful glow with an antioxidant-rich blend of blueberry, acai, and goji berries fused with high-performance peptides.',
  },
  {
    name: 'Acne Relief Facial',
    price: '$120',
    scope: 'Deep pore cleansing, cellular exfoliation, breakout reduction, and balancing compromised skin.',
    experience:
      'Gently clear your complexion with a targeted deep-pore enzyme peel, clarifying mask, and soothing hydrators that calm the skin barrier.',
  },
  {
    name: 'Skin Rescue Facial',
    price: '$120',
    scope: 'Redness reduction, barrier repair, inflammation relief, and deep soothing for sensitive or rosacea skin.',
    experience:
      'Calm irritation and melt away redness with healing azulene and a nourishing anti-inflammatory mask designed to wrap your skin in comfort.',
  },
]

export const priceLists = [
  {
    category: 'Resurfacing',
    items: [
      { name: 'Dermaplaning', price: '$60' },
      { name: 'Microdermabrasion', price: '$70' },
      { name: 'Lash lift & tint', price: '$70' },
      { name: 'Dermaplaning facial', price: '$170' },
      { name: 'Microdermabrasion facial', price: '$180' },
      { name: 'Microneedling', price: '$250 & up' },
    ],
  },
  {
    category: 'Facials',
    items: [
      { name: 'Acne', price: '$120' },
      { name: 'Skin Rescue', price: '$120' },
      { name: '24k Gold', price: '$130' },
      { name: 'Ageless', price: '$140' },
      { name: 'Oxygen Therapy', price: '$150' },
    ],
  },
  {
    category: 'Chemical peels',
    items: [
      { name: 'PCA Sensi Peel', price: '$140' },
      { name: 'PCA No Peel', price: '$140' },
      { name: 'PCA Ultra Peel', price: '$175' },
    ],
  },
]

export const packages = [
  {
    name: 'PCA Sensi Peel',
    price: '$360',
    period: '3 sessions',
    items: ['Three Sensi peels', 'Gentle resurfacing series'],
  },
  {
    name: 'PCA No Peel',
    price: '$360',
    period: '3 sessions',
    items: ['Three No Peel treatments', 'Low-downtime glow'],
  },
  {
    name: 'Microdermabrasion Facial',
    price: '$450',
    period: '3 sessions',
    items: ['Three microdermabrasion facials', 'Save vs. single visits', 'Consistent glow'],
  },
  {
    name: 'PCA Ultra Peel',
    price: '$450',
    period: '3 sessions',
    items: ['Three Ultra peels', 'Deeper resurfacing series'],
  },
  {
    name: 'Microneedling',
    price: '$700',
    period: '3 sessions',
    items: ['Three microneedling visits', 'Collagen-building series', 'Save vs. à la carte'],
  },
]

export const microdermBenefits = [
  {
    title: 'Refines texture',
    body: 'Smooths out rough patches, unevenness, and bumps for skin that feels velvety to the touch.',
  },
  {
    title: 'Reduces dullness',
    body: 'Eliminates dead skin buildup to restore a bright, vibrant radiance.',
  },
  {
    title: 'Targets imperfections',
    body: 'Highly beneficial for improving the appearance of acne scarring, fine lines, and hyperpigmentation — especially when paired with targeted brightening or lightening products.',
  },
]

export const microneedlingTreats = [
  'Fine lines and wrinkles',
  'Acne scars',
  'Uneven texture and imperfections',
]

export const dermaplaningBenefits = [
  {
    title: 'Deep, Instant Exfoliation',
    body: 'Over time, dead skin cells build up on the surface of your face, leading to a dull complexion and clogged pores. Dermaplaning provides a deep mechanical exfoliation that instantly sweeps away this dead debris. It reveals the fresh, vibrant, and younger-looking skin hiding underneath.',
  },
  {
    title: 'Goodbye, Peach Fuzz',
    body: 'While completely natural, fine vellus hair (commonly known as “peach fuzz”) can trap oils and dirt against your skin. Dermaplaning effortlessly removes these fine hairs. And don’t worry — contrary to the popular myth, your facial hair will not grow back thicker, darker, or coarser after the procedure. It grows back exactly the same as it was before.',
  },
  {
    title: 'Flawless Makeup Application',
    body: 'Have you ever noticed your foundation looking cakey or settling into the fine hairs on your face? Because dermaplaning creates an incredibly smooth canvas, your makeup will glide on like silk. You will find that you need less product to achieve a flawless, airbrushed finish.',
  },
  {
    title: 'Maximum Skincare Absorption',
    body: 'When your skin is blocked by a wall of dead cells and peach fuzz, your expensive serums and moisturizers cannot do their jobs properly. By clearing away this barrier, dermaplaning allows your active skincare ingredients to penetrate deeper and work significantly more effectively.',
  },
]

export const lashBenefits = [
  {
    title: 'Low maintenance',
    body: 'Wake up every day with ready-to-go, defined lashes.',
  },
  {
    title: 'No extensions needed',
    body: 'Enhances your own natural beauty without heavy falsies.',
  },
  {
    title: 'Active-lifestyle friendly',
    body: 'Waterproof, smudge-proof, and sweat-proof once set.',
  },
]

export const faqs = [
  {
    q: 'Do I need a consultation first?',
    a: 'Every custom facial begins with a detailed skin analysis. For dermaplaning, microneedling, and other treatments, Ra-Mona assesses your skin before she begins so the visit is a match that day.',
  },
  {
    q: 'What is included in a custom facial?',
    a: 'Your facial is tailored on the day you arrive and may include 24 carat gold, oxygen therapy, ageless corrective, acne relief, or skin rescue — plus a treatment mask, hydrating serums, and a facial massage.',
  },
  {
    q: 'Will peach fuzz grow back thicker after dermaplaning?',
    a: 'No. Facial hair grows back exactly as it was before. Dermaplaning does not change the color, thickness, or coarseness of vellus hair.',
  },
  {
    q: 'Who should wait on dermaplaning?',
    a: 'If you have active, inflamed acne breakouts, rosacea, or open wounds, wait until your skin has fully healed to avoid further irritation.',
  },
  {
    q: 'How many microneedling sessions will I need?',
    a: 'A series of treatments is typically recommended, depending on your unique skin goals. Ra-Mona will outline a plan during your visit.',
  },
  {
    q: 'How long does a lash lift & tint last?',
    a: 'Results typically last 6 to 8 weeks. The relaxing appointment takes about 45 to 60 minutes.',
  },
  {
    q: 'How do I book?',
    a: 'Use the contact form — your request goes straight to Ra-Mona and she will follow up personally. You can also call (773) 629-3546, email glowskinbyramona@gmail.com, or message @glowskin_by_ramona on Instagram.',
  },
]
