import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('folder:bhargavi_carnatic')
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    const images = result.resources.map((r) => ({
      id: r.public_id,
      src: r.secure_url,
      alt: `Carnatic music class photo by Bhargavi Bhadri`,
      isLocal: false,
    }));

    return Response.json({ images });
  } catch (err) {
    console.error('Cloudinary gallery fetch error:', err);
    return Response.json({ images: [] });
  }
}
