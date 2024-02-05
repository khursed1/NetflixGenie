import { OPEN_AI_KEY } from "../constant/constant";
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey:OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
  });
export default openai