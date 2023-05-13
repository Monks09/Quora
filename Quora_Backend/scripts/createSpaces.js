const connectToDatabase = require("../config/db");
const Space = require("../models/space.model");

let spaces = [
    {
        "id": 1,
        "name": "YouTube ♧ promote",
        "followers": "8.6K followers",
        "titles": "You can promote your YouTube videos and channel."
    },
    {
        "id": 2,
        "name": "Humans psychology",
        "followers": "92.1K followers",
        "titles": "Psychology can be considered a humanity as well as a science"
    },
    {
        "id": 3,
        "name": "Iphone tips tricks",
        "followers": "1.1K followers",
        "titles": "This space is all about apple leaks, iphone tips n tricks"
    },
    {
        "id": 4,
        "name": "Study_motivation",
        "followers": "4.6K followers",
        "titles": "Your thoughts are the architect of your destiny"
    },
    {
        "id": 5,
        "name": "Business and future",
        "followers": "3K followers",
        "titles": "We all working for others business . let's make our own business."
    },
    {
        "id": 6,
        "name": "Study Tips and Tricks",
        "followers": "148.3K followers",
        "titles": "Tips and Tricks to Study Better, Faster and with Less Stress"
    },
    {
        "id": 7,
        "name": "Logo | Graphic Designs",
        "followers": "2.5K followers",
        "titles": "Logo"
    },
    {
        "id": 8,
        "name": "Business & Marketing",
        "followers": "317.6K followers",
        "titles": "1)Business Ideas 2)Small Business Start-ups 3) Invest and Earn 4) Buy and sell"
    },
    {
        "id": 9,
        "name": "Technological Trendz",
        "followers": "178.8K followers",
        "titles": "This space is all about the latest technology trends."
    },
    {
        "id": 10,
        "name": "Startup Era",
        "followers": "282.5K followers",
        "titles": "Best way to boost economy."
    },
    {
        "id": 11,
        "name": "World History",
        "followers": "2.8M followers",
        "titles": "My answers on World History here"
    },
    {
        "id": 12,
        "name": "STARTUPS - Strategies/Tips/Ideas",
        "followers": "22.9K followers",
        "titles": "Learn/gain some knowledge from already succeeded \"Startup-Stories\""
    },
    {
        "id": 13,
        "name": "Demon slayer",
        "followers": "5K followers",
        "titles": "For all demon slayer fans👺"
    },
    {
        "id": 14,
        "name": "AutoCAD & SolidWorks Tips",
        "followers": "1.9K followers",
        "titles": "Learn Designing in AutoCAD and SolidWorks."
    },
    {
        "id": 15,
        "name": "Small Businesses Club",
        "followers": "8.9K followers",
        "titles": "Join this space to get daily updates & info on Small Businesses"
    },
    {
        "id": 16,
        "name": "Fashion_Trends",
        "followers": "3.5K followers",
        "titles": "Get latest fashion trends, news, style, looks, tips and more."
    },
    {
        "id": 17,
        "name": "Graphic Design",
        "followers": "8.1K followers",
        "titles": "Modern, Minimalistic, User Friendly ~ Graphic Design Inspiration"
    },
    {
        "id": 18,
        "name": "Start-Up Guide",
        "followers": "9.6K followers",
        "titles": "Everything about start-up ecosystem, market and the future aspects"
    },
    {
        "id": 19,
        "name": "Entrepreneurship",
        "followers": "372K followers",
        "titles": "Entrepreneur Stories and Tips for Business Growth"
    },
    {
        "id": 20,
        "name": "Power of positivity.",
        "followers": "12.5K followers",
        "titles": "Circumstance can be bad things might get tough all can be dealt with positivity."
    },
    {
        "id": 21,
        "name": "Next_Billionaire",
        "followers": "121K followers",
        "titles": "Start-up, Entrepreneurship, Business, Cryptocurrency, Hard Motivation"
    },
    {
        "id": 22,
        "name": "Netflix Nerds",
        "followers": "5.3K followers",
        "titles": "Let's together binge watch and review some amazing shows and movies here!"
    },
    {
        "id": 23,
        "name": "Education & Educators",
        "followers": "5.2K followers",
        "titles": "Education & Educators/Teachers/Teacher Trainers/Professors/Lecturers/Mentors"
    },
    {
        "id": 24,
        "name": "The Entrepreneur",
        "followers": "117K followers",
        "titles": "Space for entrepreneurs"
    },
    {
        "id": 25,
        "name": "The Songs of Life",
        "followers": "1.5K followers",
        "titles": "Life is a musical journey, sing along my friend - there is no dead end!!!"
    },
    {
        "id": 26,
        "name": "BTS ARMY WORLD 💜",
        "followers": "10K followers",
        "titles": "Hey army welcome to the world of BTS."
    },
    {
        "id": 27,
        "name": "\"Novel Tips Desk\"",
        "followers": "10 followers",
        "titles": "Here, you'll find helpful advice and tips on how to write and finish your novel."
    },
    {
        "id": 28,
        "name": "Indian Start-up Guide",
        "followers": "95K followers",
        "titles": "Everything about Indian start-up ecosystem, market and the future aspects."
    },
    {
        "id": 29,
        "name": "CBSE Class 12 Board Exam",
        "followers": "133.9K followers",
        "titles": "This space is for all Class 12 students of CBSE board"
    },
    {
        "id": 30,
        "name": "Mobile Technology Reviews",
        "followers": "36.2K followers",
        "titles": "Latest/Upcoming Technology & Modern Mobile World (Follow Space & Keep up to date"
    },
    {
        "id": 31,
        "name": "Business Talk",
        "followers": "2K followers",
        "titles": "Join to get update for startups,entreprenurship,businesses,investment & markets!"
    },
    {
        "id": 32,
        "name": "Indian Web Series",
        "followers": "81.5K followers",
        "titles": "Reviews, Tweets, Latest News, and Updates about Indian Web Series."
    },
    {
        "id": 33,
        "name": "Entrepreneur advice",
        "followers": "2.1K followers",
        "titles": "A space which will enables or enhance our Entrepreneur advice"
    },
    {
        "id": 34,
        "name": "Music Home",
        "followers": "399K followers",
        "titles": "1)Music Lovers HOME 2)Latest Music updates 3) World's Best Music Albums Display"
    },
    {
        "id": 35,
        "name": "Sachida N Sharma's / Server",
        "followers": "14 followers",
        "titles": "VPS/Cloud Server/ControlPannel"
    },
    {
        "id": 36,
        "name": "Art & Interior Design",
        "followers": "83.8K followers",
        "titles": "Join this space to get latest Home Art, Interior Design, Architecture & Decor"
    },
    {
        "id": 37,
        "name": "UI/UX Labs",
        "followers": "114 followers",
        "titles": "Share & Discuss new design trends, opportunities. Get design tips & reviews."
    },
    {
        "id": 38,
        "name": "CBSE",
        "followers": "152.7K followers",
        "titles": "The Top Quora space for CBSE students. Central Board of secondary education"
    },
    {
        "id": 39,
        "name": "Women's Fashion & Style",
        "followers": "179.5K followers",
        "titles": "Everything about Women's Latest Fashion, Clothing, Style & Trends(No Ad*lt cont)"
    },
    {
        "id": 40,
        "name": "Mohammed Gouse's Space",
        "followers": "12 followers",
        "titles": "I am a passionate student of sports, politics,i will share most relevant Q/N"
    },
    {
        "id": 41,
        "name": "Fashion & Style - Trends",
        "followers": "2.3K followers",
        "titles": "Fashion & Style Updates on Men & Women - Latest Trends/News/Clothing & Apparel"
    },
    {
        "id": 42,
        "name": "Free knowledge Space",
        "followers": "4 followers",
        "titles": "If you join my space I teach you how to earn money without investing jai mahakal"
    },
    {
        "id": 43,
        "name": "Saint Dr. MSG Fans World",
        "followers": "1.3K followers",
        "titles": "Fans of Saint Dr. Gurmeet Ram Rahim Singh Ji Insan all over the world"
    },
    {
        "id": 44,
        "name": "Bollywood Music",
        "followers": "13.4K followers",
        "titles": "All Bollywood - Music/Songs/Golden old Hits/Latest Songs/Heart touching songs"
    },
    {
        "id": 45,
        "name": "YourStory's Startups",
        "followers": "33.1K followers",
        "titles": "Check out some of the startups that got featured on YourStory"
    },
    {
        "id": 46,
        "name": "The Club of Learners",
        "followers": "380 followers",
        "titles": "Related to studying, productivity, reading, writing, books, self esteem and more"
    },
    {
        "id": 47,
        "name": "Gds india post",
        "followers": "4 followers",
        "titles": "Department of post Government"
    },
    {
        "id": 48,
        "name": "Emirates Draw Results",
        "followers": "1 follower",
        "titles": "Business"
    }
]

async function createSpaces() {
    await Space.create(spaces);
    console.log(spaces.length, "spaces created");
}

connectToDatabase()
    .then(createSpaces)