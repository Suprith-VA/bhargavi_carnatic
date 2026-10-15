// Local class photos in /public/gallery, with descriptive alt text for image search.
const ALTS = [
  'Carnatic music students in traditional attire on stage at a cultural programme',
  'Young students seated on colourful mats during a Carnatic music group class',
  'Smiling students with notebooks during a Carnatic music class session',
  'Teacher leading a small group of students through a Carnatic vocal lesson',
  'Young children learning Carnatic music in a beginner group class in Bengaluru',
  'Children and parents in a Carnatic vocal lesson in a classroom',
  'Children seated on mats facing the teacher during a Carnatic music class',
  'Carnatic vocal practice with tala hand gestures during a lesson',
  'Young children sitting in a circle for a beginner Carnatic music class',
  'Young students seated for a Carnatic music class at home',
  'Teacher conducting a Carnatic music class for young children',
  'Large group of children and parents at a music class',
  'Teacher and young students smiling together after a music class',
  'Children practising Carnatic music on mats in a community hall',
  'Small group of children learning in a home music class',
  'Children seated on mats in a beginner Carnatic music class',
  'Students in traditional clothes celebrating after a music programme',
  'Children seated on a carpet listening during a Carnatic music class',
  'Kids and teenagers in an interactive Carnatic music class',
  'Large group of students in a Carnatic music class in a classroom',
  'Children and parents gathered for a group music class',
  'Students seated on the floor during a Carnatic music class',
  'Students holding their Pracheen Kala Kendra music exam marks cards with their teacher',
];

export const GALLERY_IMAGES = ALTS.map((alt, i) => ({
  id: `local-${i + 1}`,
  src: `/gallery/gallery-${i + 1}.jpg`,
  alt,
  isLocal: true,
}));

export function galleryImage(n) {
  return GALLERY_IMAGES[n - 1];
}
