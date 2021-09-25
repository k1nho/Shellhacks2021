import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'creatt',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



export default async (req, res) => {
    const {resources} = await cloudinary.v2.search.expression('folder:creatt').sort_by("public_id", "desc").max_results(10).execute();
    const publicIds = resources.map((file)=> file.public_id.split("/")[1]);

  return res.send(publicIds);
};