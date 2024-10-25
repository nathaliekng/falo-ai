/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a Travel Plan for Location: Las vegas, for 3 Days for 2 people with a cheap budget. Give me suggestions for an itinerary with placeName, place details, place image URL, geo coordinates , ticket pricing, rating, time to travel to each of the locations in hours and minutes from The Golden Nugget hotel, for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip\": {\n    \"location\": \"Las Vegas\",\n    \"duration\": \"3 Days\",\n    \"travelers\": 2,\n    \"budget\": \"cheap\",\n    \"itinerary\": [\n      {\n        \"day\": 1,\n        \"title\": \"Exploring the Strip\",\n        \"plan\": [\n          {\n            \"time\": \"9:00 AM\",\n            \"placeName\": \"The Bellagio Conservatory & Botanical Garden\",\n            \"placeDetails\": \"A free, stunning indoor garden with seasonal displays.\",\n            \"placeImageURL\": \"https://www.bellagio.com/content/dam/bellagio/images/experiences/conservatory-and-botanical-garden/conservatory-and-botanical-garden-hero.jpg\",\n            \"geoCoordinates\": \"36.1108, -115.1734\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.5,\n            \"travelTime\": \"15 minutes\",\n            \"notes\": \"Free entrance, allow at least 30 minutes to explore.\"\n          },\n          {\n            \"time\": \"10:30 AM\",\n            \"placeName\": \"The Fountains of Bellagio\",\n            \"placeDetails\": \"A spectacular water and music show, happening every 30 minutes.\",\n            \"placeImageURL\": \"https://www.bellagio.com/content/dam/bellagio/images/experiences/fountains-of-bellagio/fountains-of-bellagio-hero.jpg\",\n            \"geoCoordinates\": \"36.1108, -115.1734\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.8,\n            \"travelTime\": \"0 minutes\",\n            \"notes\": \"Best viewed from the front of the Bellagio.\"\n          },\n          {\n            \"time\": \"12:00 PM\",\n            \"placeName\": \"In-N-Out Burger\",\n            \"placeDetails\": \"Popular fast food chain for a quick and affordable lunch.\",\n            \"placeImageURL\": \"https://www.in-n-out.com/images/home/about/in-n-out-burger-history.jpg\",\n            \"geoCoordinates\": \"36.1037, -115.1746\",\n            \"ticketPricing\": \"Around $10 per person\",\n            \"rating\": 4.3,\n            \"travelTime\": \"10 minutes\",\n            \"notes\": \"Several locations on the Strip, choose one closest to your current location.\"\n          },\n          {\n            \"time\": \"2:00 PM\",\n            \"placeName\": \"The Venetian & The Palazzo\",\n            \"placeDetails\": \"Explore the Grand Canal Shoppes, enjoy free gondola rides and admire the architecture.\"\n            \"placeImageURL\": \"https://www.venetian.com/content/dam/venetian/images/home/hero-image/venetian-hero-image.jpg\",\n            \"geoCoordinates\": \"36.1273, -115.1741\",\n            \"ticketPricing\": \"Free (gondola ride around $30 per person)\",\n            \"rating\": 4.7,\n            \"travelTime\": \"15 minutes\",\n            \"notes\": \"Free gondola rides are shorter, paid rides are longer.\"\n          },\n          {\n            \"time\": \"4:00 PM\",\n            \"placeName\": \"Caesars Palace\",\n            \"placeDetails\": \"Walk through the Forum Shops and admire the Roman-themed architecture.\",\n            \"placeImageURL\": \"https://www.caesars.com/content/dam/caesars/images/home/caesars-palace-hero-mobile.jpg\",\n            \"geoCoordinates\": \"36.1275, -115.1720\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.4,\n            \"travelTime\": \"10 minutes\",\n            \"notes\": \"Many free shows and events are offered throughout the day.\"\n          },\n          {\n            \"time\": \"6:00 PM\",\n            \"placeName\": \"Free show at Fremont Street Experience\",\n            \"placeDetails\": \"Enjoy the Viva Vision light show and street performers.\",\n            \"placeImageURL\": \"https://www.fremontstreetexperience.com/images/Fremont-Street-Experience-Header.jpg\",\n            \"geoCoordinates\": \"36.1693, -115.1426\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.2,\n            \"travelTime\": \"20 minutes\",\n            \"notes\": \"Shows run every hour, check the schedule online.\"\n          },\n          {\n            \"time\": \"8:00 PM\",\n            \"placeName\": \"Dinner at a local diner\",\n            \"placeDetails\": \"Enjoy a casual and affordable dinner at a local diner.\"\n            \"placeImageURL\": \"https://www.fremontstreetexperience.com/images/Fremont-Street-Experience-Header.jpg\",\n            \"geoCoordinates\": \"36.1693, -115.1426\",\n            \"ticketPricing\": \"Around $15 per person\",\n            \"rating\": 4,\n            \"travelTime\": \"15 minutes\",\n            \"notes\": \"Many options are available near Fremont Street.\"\n          }\n        ]\n      },\n      {\n        \"day\": 2,\n        \"title\": \"Exploring the Arts and Culture\",\n        \"plan\": [\n          {\n            \"time\": \"9:00 AM\",\n            \"placeName\": \"Neon Museum\",\n            \"placeDetails\": \"Explore a collection of vintage neon signs from Las Vegas history.\",\n            \"placeImageURL\": \"https://www.neonmuseum.org/wp-content/uploads/2019/02/Neon-Museum-Las-Vegas.jpg\",\n            \"geoCoordinates\": \"36.1716, -115.1363\",\n            \"ticketPricing\": \"Around $20 per person\",\n            \"rating\": 4.7,\n            \"travelTime\": \"25 minutes\",\n            \"notes\": \"Book tickets in advance online for best availability.\"\n          },\n          {\n            \"time\": \"11:00 AM\",\n            \"placeName\": \"The Mob Museum\",\n            \"placeDetails\": \"Learn about the history of organized crime in Las Vegas.\",\n            \"placeImageURL\": \"https://www.themobmuseum.org/media/2563/mob-museum-exterior-daytime.jpg\",\n            \"geoCoordinates\": \"36.1673, -115.1447\",\n            \"ticketPricing\": \"Around $25 per person\",\n            \"rating\": 4.4,\n            \"travelTime\": \"10 minutes\",\n            \"notes\": \"Offers self-guided tours and exhibits.\"\n          },\n          {\n            \"time\": \"1:00 PM\",\n            \"placeName\": \"The Arts District\",\n            \"placeDetails\": \"Browse art galleries, studios, and murals, enjoy street food and unique shops.\",\n            \"placeImageURL\": \"https://www.artsdistrictlv.com/assets/img/gallery/arts-district-banner.jpg\",\n            \"geoCoordinates\": \"36.1680, -115.1342\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.6,\n            \"travelTime\": \"20 minutes\",\n            \"notes\": \"Free to explore, some galleries may have entry fees.\"\n          },\n          {\n            \"time\": \"3:00 PM\",\n            \"placeName\": \"The Smith Center for the Performing Arts\",\n            \"placeDetails\": \"Admire the architecture and take a free tour of the building.\",\n            \"placeImageURL\": \"https://www.thesmithcenter.com/sites/default/files/styles/large_banner_image/public/assets/images/venues/smith-center-exterior-night.jpg\",\n            \"geoCoordinates\": \"36.1649, -115.1420\",\n            \"ticketPricing\": \"Free for tours\",\n            \"rating\": 4.5,\n            \"travelTime\": \"15 minutes\",\n            \"notes\": \"Check the website for tour schedules.\"\n          },\n          {\n            \"time\": \"5:00 PM\",\n            \"placeName\": \"Dinner at a food truck park\",\n            \"placeDetails\": \"Enjoy a casual and affordable dinner at a food truck park.\",\n            \"placeImageURL\": \"https://www.vegas.com/media/venue/541147251/food-truck-park-las-vegas.jpg\",\n            \"geoCoordinates\": \"36.1693, -115.1426\",\n            \"ticketPricing\": \"Around $15 per person\",\n            \"rating\": 4,\n            \"travelTime\": \"15 minutes\",\n            \"notes\": \"Many options are available in the Arts District and Downtown Las Vegas.\"\n          },\n          {\n            \"time\": \"7:00 PM\",\n            \"placeName\": \"Free show at the LINQ Promenade\",\n            \"placeDetails\": \"Enjoy a free show at the LINQ Promenade, featuring music and entertainment.\"\n            \"placeImageURL\": \"https://www.linq.com/content/dam/linq/images/hero/linq-hero-image-daytime-mobile.jpg\",\n            \"geoCoordinates\": \"36.1248, -115.1714\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.1,\n            \"travelTime\": \"20 minutes\",\n            \"notes\": \"Check the schedule online for specific performances.\"\n          }\n        ]\n      },\n      {\n        \"day\": 3,\n        \"title\": \"Day Trip to the Valley\",\n        \"plan\": [\n          {\n            \"time\": \"9:00 AM\",\n            \"placeName\": \"Red Rock Canyon National Conservation Area\",\n            \"placeDetails\": \"Hike, bike, or drive through scenic red rock formations.\",\n            \"placeImageURL\": \"https://www.nps.gov/redr/planyourvisit/images/red-rock-canyon-sunset-2023.jpg\",\n            \"geoCoordinates\": \"36.1733, -115.2520\",\n            \"ticketPricing\": \"Entrance fee: $15 per vehicle\",\n            \"rating\": 4.8,\n            \"travelTime\": \"45 minutes\",\n            \"notes\": \"Many trails are available, choose one based on your fitness level.\"\n          },\n          {\n            \"time\": \"12:00 PM\",\n            \"placeName\": \"Lunch at a local cafe in Summerlin\",\n            \"placeDetails\": \"Enjoy a casual and affordable lunch at a cafe in the Summerlin area.\"\n            \"placeImageURL\": \"https://www.visitlasvegas.com/media/venue/113402/summerlin-las-vegas.jpg\",\n            \"geoCoordinates\": \"36.1693, -115.1426\",\n            \"ticketPricing\": \"Around $15 per person\",\n            \"rating\": 4,\n            \"travelTime\": \"15 minutes\",\n            \"notes\": \"Many options are available in the Summerlin area.\"\n          },\n          {\n            \"time\": \"2:00 PM\",\n            \"placeName\": \"The Ethel M Chocolate Factory and Botanical Cactus Garden\",\n            \"placeDetails\": \"Take a free tour of the chocolate factory and explore the beautiful cactus garden.\",\n            \"placeImageURL\": \"https://www.ethelm.com/content/dam/ethelm/images/factory-tour/ethel-m-chocolate-factory-tour.jpg\",\n            \"geoCoordinates\": \"36.0677, -115.1993\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.6,\n            \"travelTime\": \"30 minutes\",\n            \"notes\": \"Book a tour in advance for best availability.\"\n          },\n          {\n            \"time\": \"4:00 PM\",\n            \"placeName\": \"The Strip\",\n            \"placeDetails\": \"Enjoy a last walk along the Strip, take in the lights and atmosphere.\",\n            \"placeImageURL\": \"https://www.visitlasvegas.com/media/venue/550097212/las-vegas-strip.jpg\",\n            \"geoCoordinates\": \"36.1108, -115.1734\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 5,\n            \"travelTime\": \"30 minutes\",\n            \"notes\": \"Free to explore, take photos, and enjoy the atmosphere.\"\n          },\n          {\n            \"time\": \"6:00 PM\",\n            \"placeName\": \"Dinner at a buffet\",\n            \"placeDetails\": \"Enjoy a last meal at a buffet, many hotels offer affordable options.\",\n            \"placeImageURL\": \"https://www.caesars.com/content/dam/caesars/images/restaurants/bacchanal-buffet-hero.jpg\",\n            \"geoCoordinates\": \"36.1108, -115.1734\",\n            \"ticketPricing\": \"Around $30 per person\",\n            \"rating\": 4,\n            \"travelTime\": \"0 minutes\",\n            \"notes\": \"Buffets are a great option for a diverse meal.\"\n          }\n        ]\n      }\n    ]\n  }\n}\n```\n\n**Notes:**\n\n* This itinerary focuses on free and affordable options. \n* Travel times are estimates and may vary depending on traffic and time of day.\n* You can customize the itinerary by adding or removing activities based on your interests and preferences. \n* Consider using public transportation or ride-sharing services to save money on transportation.\n* Always check for operating hours and ticket prices before your trip.\n* Have fun and enjoy your trip to Las Vegas!"},
          ],
        },
      ],
    });