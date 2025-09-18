import urlSchema from "../model/short_url.model.js";

export const saveShortUrl=async(shortUrl,longUrl,userId)=>{
  const newUrl=new urlSchema({
    full_url:longUrl,
    short_url:shortUrl,
  })
  if(userId){
    newUrl.user_id=userId;
  }
  await newUrl.save();
}

export const getShortUrl= async(short_url)=>{
  return await urlSchema.findOneAndUpdate({short_url:short_url},{$inc:{clicks:1}});
}