
import { GoogleGenAI, Type } from "@google/genai";
import type { Script } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const ANURADHAPURA_EXAMPLE_SCRIPT = `
{
  "videoTitle": "අනුරාධපුරය: ශිෂ්ටාචාරයක හද සලකුණ (Anuradhapura: The Heartprint of a Civilization)",
  "openingMusic": "ගැඹුරු, ශාස්ත්‍රීය සහ තරමක් ගුප්ත හැඟීමක් දනවන, සන්සුන් නාද රටාවක් (Deep, classical, and slightly mystical, serene melody).",
  "scenes": [
    {
      "sceneNumber": 1,
      "title": "හැඳින්වීම - අහසින් දකින අරුමය (Introduction - A Wonder from the Sky)",
      "duration": "තත්පර 30 (30 seconds)",
      "visuals": [
        { "timestamp": "0:01", "description": "කළු තිරයක සිට සෙමින් මතුවන (Fade in) දර්ශනයක්: අලුයම හිරු උදාවත් සමග, මීදුම අතරින් පෙනෙන රුවන්මැලි සෑයේ හෝ ජේතවනාරාමයේ අහස දර්ශනයක් (Drone shot of Ruwanwelisaya or Jethawanaramaya stupa appearing through the mist at dawn)." },
        { "timestamp": "0:10", "description": "කැමරාව සෙමින් ස්තූපය වටා ගමන් කරයි (Camera slowly orbits the stupa)." },
        { "timestamp": "0:15", "description": "ඉතා වේගවත්, කෙටි දර්ශන පෙළක් (Quick cuts): සඳකඩ පහණක කැටයමක් (carving on a moonstone), කුට්ටම් පොකුණේ නිසල ජලය (still water of Kuttam Pokuna), සුදු වතින් සැරසුණු බැතිමතුන් සමූහයක් (a group of devotees dressed in white)." },
        { "timestamp": "0:25", "description": "තිරය මත අකුරු දිස්වේ: 'අනුරාධපුරය' (Text on screen: 'Anuradhapura')." }
      ],
      "voiceover": "මෙය නටබුන් නගරයක් පමණක් නොවේ. මෙය ශිෂ්ටාචාරයක තොටිල්ලයි. වසර දහස් ගණනක් පැරණි, ශ්‍රී ලාංකේය ඉතිහාසයේ සහ බෞද්ධ ශ්‍රද්ධාවේ හදවතයි. මේ, රජරට අගනුවර, අනුරාධපුරයයි. (This is not just a city of ruins. This is the cradle of a civilization. The heart of Sri Lankan history and Buddhist faith, thousands of years old. This is Anuradhapura, the capital of the King's Country.)"
    },
    {
      "sceneNumber": 2,
      "title": "ජීවමාන උරුමය - ශ්‍රී මහා බෝධිය (The Living Heritage - Sri Maha Bodhi)",
      "duration": "තත්පර 45 (45 seconds)",
      "visuals": [
        { "timestamp": "0:31", "description": "ජය ශ්‍රී මහා බෝධීන් වහන්සේගේ රන් වැට සහ බෝ පත්‍ර සෙලවෙන දර්ශනයක් (Shot of the golden fence and swaying leaves of the Jaya Sri Maha Bodhi)." },
        { "timestamp": "0:40", "description": "සුදු වතින් සැරසුණු බැතිමතුන් මල්, සුවඳ දුම් පූජා කරන සමීප දර්ශන (Close-ups of devotees in white offering flowers and incense)." },
        { "timestamp": "0:50", "description": "බෝධීන් වහන්සේ අසල භාවනානුයෝගීව සිටින හිමි නමක් (A monk meditating near the Bodhi tree)." },
        { "timestamp": "1:00", "description": "ලෝවාමහාපායේ නටබුන් වූ ගල් කණු (The stone pillars of the ruined Lovamahapaya)." }
      ],
      "voiceover": "සෑම දෙයක්ම ඇරඹෙන්නේ මෙතැනින්. දඹදිව සිට වැඩම කරවූ, ලොව පැරණිතම ඓතිහාසික වෘක්ෂය වන ජය ශ්‍රී මහා බෝධීන් වහන්සේ. අදටත් ලක්ෂ සංඛ්‍යාත බැතිමතුන්ගේ වන්දනාවට පාත්‍ර වන ජීවමාන උරුමයක්. ඒ අසලම, රජ මාලිගා, ලෝවාමහාපාය වැනි ගොඩනැගිලිවල නටබුන්, අතීත ශ්‍රී විභූතියට සාක්ෂි දරයි. (Everything begins here. The Jaya Sri Maha Bodhi, the oldest historical tree in the world, brought from India. A living heritage that is still venerated by hundreds of thousands of devotees today. Nearby, the ruins of royal palaces and buildings like the Lovamahapaya bear witness to its past glory.)"
    },
    {
      "sceneNumber": 3,
      "title": "දැවැන්තයන්ගේ නගරය - ස්තූප (City of Giants - The Stupas)",
      "duration": "තත්පර 45 (45 seconds)",
      "music_cue": "වඩාත් ප්‍රබල, ගාම්භීර (Majestic) ස්වරයකට මාරු වේ (Music shifts to a more powerful, majestic tone).",
      "visuals": [
        { "timestamp": "1:16", "description": "රුවන්මැලි මහා සෑයේ දැවැන්ත සුද පිරුණු ගෝලාකාරය (Wide shot of the giant, white dome of Ruwanwelisaya)." },
        { "timestamp": "1:25", "description": "ලොව උසම ගඩොල් ගොඩනැගිලිවලින් එකක් වූ ජේතවනාරාමයේ සහ අභයගිරියේ දැවැන්ත බව පෙන්වන දර්ශන (Shots showing the scale of Jethawanaramaya and Abhayagiri, once among the tallest brick structures in the world, panning from bottom to top)." },
        { "timestamp": "1:40", "description": "මෙම ස්තූප අසල සිටින මිනිසුන් පෙන්වන දර්ශනයක් (A shot of people near the stupas to emphasize their immense size)." }
      ],
      "voiceover": "නමුත් අනුරාධපුරය ලොව මවිත කරන්නේ එහි දැවැන්ත නිර්මාණ මගිනි. මහා දුටුගැමුණු රජු තැනවූ, ශ්‍රද්ධාවේ සංකේතය බඳු රුවන්මැලි මහා සෑය. එකල ලොව උසම ස්තූපය වූ ජේතවනාරාමය සහ අභයගිරිය, පැරණි ලෝකයේ ඉංජිනේරු විස්මයන් ලෙස නැගී සිටියි. (But Anuradhapura astounds the world with its colossal creations. The Ruwanwelisaya, built by the great King Dutugemunu, a symbol of faith. Jethawanaramaya and Abhayagiri, once the tallest stupas in the world, stand as engineering marvels of the ancient world.)"
    },
    {
        "sceneNumber": 4,
        "title": "ඉංජිනේරු අරුමය සහ කලා ශිල්ප (Engineering Marvels and Artistry)",
        "duration": "තත්පර 30 (30 seconds)",
        "visuals": [
            { "timestamp": "2:01", "description": "කුට්ටම් පොකුණේ පරිපූර්ණ සමමිතිය (The perfect symmetry of the Kuttam Pokuna / Twin Ponds)." },
            { "timestamp": "2:08", "description": "ඉසුරුමුණි විහාරයේ 'පෙම් යුවළ' කැටයමේ සමීප රූපයක් (Close-up of the 'Isurumuni Lovers' carving)." },
            { "timestamp": "2:15", "description": "සඳකඩ පහණක ඇති සත්ත්ව රූපවල සියුම් කැටයම් (Detailed carvings of animals on a Sandakada Pahana / moonstone)." },
            { "timestamp": "2:20", "description": "තිසා වැව හෝ අභය වැව වැනි පැරණි ජලාශයක සවස් කාලයේ දර්ශනයක් (An evening view of an ancient reservoir like Tissa Wewa or Abhaya Wewa)." }
        ],
        "voiceover": "මෙය ශ්‍රද්ධාවේ නගරයක් පමණක් නොවේ. මෙය දියුණු වාරි ශිෂ්ටාචාරයක සහ කලාත්මක දක්ෂතාවයේ කේන්ද්‍රස්ථානයයි. කුට්ටම් පොකුණ, ඉසුරුමුණිය, සහ සඳකඩ පහන්වල ඇති සියුම් කැටයම්, අපේ මුතුන් මිත්තන්ගේ කලාත්මක හැකියාව ලොවට කියාපායි. (This is not only a city of faith. It is the epicenter of an advanced hydraulic civilization and artistic prowess. The Twin Ponds, Isurumuniya, and the intricate carvings on the moonstones declare the artistic genius of our ancestors to the world.)"
    }
  ],
  "finalScene": {
    "title": "නිගමනය - ජීවමාන උරුමය (Conclusion - The Living Legacy)",
    "duration": "තත්පර 20 (20 seconds)",
    "music": "ආරම්භක සන්සුන් නාද රටාවට නැවත පැමිණේ (Returns to the initial serene melody).",
    "visuals": [
      { "timestamp": "2:31", "description": "සවස් වරුවේ ස්තූපයකට වන්දනාමාන කරන පවුලක් (A family worshiping at a stupa in the evening)." },
      { "timestamp": "2:35", "description": "නූතන අනුරාධපුර නගරයේ කාර්යබහුල දර්ශනයක් (A busy scene from the modern city of Anuradhapura)." },
      { "timestamp": "2:40", "description": "රුවන්මැලි සෑයට ඉහළින් හිරු බැස යන දර්ශනයක් (Drone shot of the sunset over Ruwanwelisaya)." },
      { "timestamp": "2:45", "description": "තිරය කළු පැහැයට හැරේ (Screen fades to black)." }
    ],
    "voiceover": "අදටත් අනුරාධපුරය, යුනෙස්කෝ ලෝක උරුමයක් ලෙස, අතීතය සහ වර්තමානය එකට හමුවන, ජීවමාන වන්දනා පුරවරයකි. එය ශ්‍රී ලංකාවේ ආත්මයයි. (Today, Anuradhapura, as a UNESCO World Heritage site, is a living place of pilgrimage where the past and present meet. It is the soul of Sri Lanka.)"
  }
}
`;

const SCRIPT_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    videoTitle: { type: Type.STRING, description: "Title of the video in Sinhala, with an English translation in parentheses." },
    openingMusic: { type: Type.STRING, description: "Description of the opening music in Sinhala, with an English translation in parentheses." },
    scenes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          sceneNumber: { type: Type.INTEGER },
          title: { type: Type.STRING, description: "Title of the scene in Sinhala, with an English translation in parentheses." },
          duration: { type: Type.STRING, description: "Duration of the scene in Sinhala, with an English translation in parentheses." },
          music_cue: { type: Type.STRING, description: "Optional. Description of a music change during the scene in Sinhala, with an English translation in parentheses.", nullable: true },
          visuals: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                timestamp: { type: Type.STRING },
                description: { type: Type.STRING, description: "Description of the visual shot in Sinhala, with an English translation in parentheses." },
              },
              required: ["timestamp", "description"],
            },
          },
          voiceover: { type: Type.STRING, description: "Voiceover script for the scene in Sinhala, with an English translation in parentheses." },
        },
        required: ["sceneNumber", "title", "duration", "visuals", "voiceover"],
      },
    },
    finalScene: {
        type: Type.OBJECT,
        properties: {
            title: { type: Type.STRING, description: "Title of the final scene in Sinhala, with an English translation in parentheses." },
            duration: { type: Type.STRING, description: "Duration of the final scene in Sinhala, with an English translation in parentheses." },
            music: { type: Type.STRING, description: "Description of the music for the final scene in Sinhala, with an English translation in parentheses." },
            visuals: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        timestamp: { type: Type.STRING },
                        description: { type: Type.STRING, description: "Description of the visual shot in Sinhala, with an English translation in parentheses." },
                    },
                    required: ["timestamp", "description"],
                },
            },
            voiceover: { type: Type.STRING, description: "Voiceover script for the final scene in Sinhala, with an English translation in parentheses." },
        },
        required: ["title", "duration", "music", "visuals", "voiceover"],
    },
  },
  required: ["videoTitle", "openingMusic", "scenes", "finalScene"],
};


export const generateScript = async (topic: string): Promise<Script> => {
  const prompt = `
    You are an expert documentary video scriptwriter specializing in Sri Lankan history and culture.
    Your task is to generate a professional, engaging, and cinematic video script in Sinhala about the given topic.
    
    IMPORTANT INSTRUCTIONS:
    1.  The script MUST be entirely in Sinhala.
    2.  Provide an English translation in parentheses for all Sinhala text, including titles, descriptions, and voiceovers.
    3.  The structure, tone, and detail level MUST strictly follow the provided example script about Anuradhapura.
    4.  Create a script with approximately 4-5 scenes, plus a final concluding scene. The total video length should be around 2-3 minutes.
    5.  Your entire response MUST be a single, valid JSON object that adheres to the provided schema. Do not add any text or markdown formatting before or after the JSON object.

    TOPIC TO CREATE SCRIPT FOR: "${topic}"

    PERFECT EXAMPLE SCRIPT (Follow this structure and style):
    ${ANURADHAPURA_EXAMPLE_SCRIPT}

    Now, generate the script for the topic: "${topic}"
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: SCRIPT_SCHEMA,
        temperature: 0.7,
      }
    });
    
    const jsonString = response.text.trim();
    const scriptData: Script = JSON.parse(jsonString);
    return scriptData;

  } catch (error) {
    console.error("Error generating script:", error);
    if (error instanceof Error && error.message.includes("SAFETY")) {
      throw new Error("The request was blocked due to safety settings. Please try a different topic.");
    }
    throw new Error("Failed to generate script. The model might be unable to process this topic or there was a network issue.");
  }
};
