import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUserServices } from "../services/short_url.service.js";

export const createShortUrl= async(req,res)=>{
  const {url}=req.body;
  const shortUrl= await createShortUrlWithoutUserServices(url);
  const baseUrl = process.env.APP_URL || 'http://localhost:3000/';
  res.send(baseUrl+shortUrl);
}

export const redirectFromShortUrl=async (req,res)=>{
  const {id}=req.params;
  const url=await getShortUrl(id);
  res.redirect(url.full_url);
}