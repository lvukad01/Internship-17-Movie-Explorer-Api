import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  await prisma.favorite.deleteMany();
  await prisma.movie.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.user.deleteMany();

  const hashedAdminPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: hashedAdminPassword,
      role: 'ADMIN',
    },
  });
  const movieData = [
{
    title: "Avatar",
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    year: 2009,
    director: "James Cameron",
    posterUrl:"https://upload.wikimedia.org/wikipedia/hr/5/55/Avatar_2009.jpg",
    genres: ["Science Fiction", "Action", "Adventure", "Fantasy"],
    video: "https://youtu.be/5PSNL1qE6VY?si=-w1th77k7H-1FEyP",
    rating: 7.9
  },
  {
    title: "Black Swan",
    description: "Nina is a talented but unstable ballerina on the verge of stardom. Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.",
    year: 2010,
    director: "Darren Aronofsky",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/6/68/Black_Swan_poster.jpg",
    genres: ["Psychological Thriller", "Drama"],
    video: "https://youtu.be/5jaI1XOB-bs?si=vSuQu9A0HVvszPb4",
    rating: 8.0
  },
  {
    title: "Avatar: The Way of Water",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    year: 2022,
    director: "James Cameron",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
    genres: ["Science Fiction", "Action", "Adventure", "Fantasy"],
    video: "https://youtu.be/d9MyW72ELq0?si=lRTki-Jq1F0xX5Oj",
    rating: 7.6
  },
  {
    title: "Avatar: Fire and Ash",
    description: "Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, as the conflict on Pandora escalates.",
    year: 2025,
    director: "James Cameron",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/9/95/Avatar_Fire_and_Ash_poster.jpeg",
    genres: ["Science Fiction", "Action", "Adventure", "Fantasy"],
    video: "https://youtu.be/nb_fFj_0rq8?si=sJtD0nJLIuV-7FVy",
    rating: 7.4
  },
  {
    title: "Gone Girl",
    description: "The husband of a missing woman becomes the main suspect in her disappearance, leading to a media circus and a twisted investigation.",
    year: 2014,
    director: "David Fincher",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg",
    genres: ["Thriller", "Mystery", "Drama"],
    video: "https://www.youtube.com/watch?v=2-_-1nJf8Vg",
    rating: 8.1
  },
  {
    title: "Girl, Interrupted",
    description: "Directionless teenager Susanna is rushed to Claymoore, a mental institution, after a supposed suicide attempt. There she befriends a group of troubled women.",
    year: 1999,
    director: "James Mangold",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/b/b7/Girl%2C_Interrupted_%281999%29.png",
    genres: ["Coming-of-age", "Psychological Drama", "Biography"],
    video: "https://www.youtube.com/watch?v=5399v4_0t6M",
    rating: 7.3
  },
  {
    title: "The Truman Show",
    description: "An insurance salesman discovers that his entire life has been broadcast as a TV show to the world without his knowledge since birth.",
    year: 1998,
    director: "Peter Weir",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg",
    genres: ["Drama", "Science Fiction", "Comedy"],
    video: "https://youtu.be/dlnmQbPGuls?si=pPLJOhR0JKT9C9ZF",
    rating: 8.2
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    description: "On his 11th birthday, Harry Potter learns he is a wizard and begins his first year at Hogwarts School of Witchcraft and Wizardry.",
    year: 2001,
    director: "Chris Columbus",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg",
    genres: ["Fantasy", "Adventure", "Family"],
    video: "https://youtu.be/VyHV0BRtdxo?si=j3HpPaJrJTGAs3eI",
    rating: 7.6
  },
  {
    title: "Pride & Prejudice",
    description: "In 18th-century England, spirited Elizabeth Bennet navigates issues of manners, marriage, and morality when she meets the proud Mr. Darcy.",
    year: 2005,
    director: "Joe Wright",
    posterUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU4M7kDiHvACdAKl3hTNNCicV22o1PdSRdw&s",
    genres: ["Romance", "Drama"],
    video: "https://youtu.be/Ur_DIHs92NM?si=IZ_bYh8uooGIOHx8",
    rating: 7.8
  },
  {
    title: "Mamma Mia!",
    description: "A young bride-to-be invites three men from her mother’s past to her Greek island wedding, hoping to discover which one is her father.",
    year: 2008,
    director: "Phyllida Lloyd",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/9/95/Mamma_Mia_%282008%29_US_poster.jpg",
    genres: ["Musical", "Comedy", "Romance"],
    video: "https://youtu.be/iCVpJ8x1Tnc?si=NB58ksPEG4Dq_1FE",
    rating: 6.5
  },
 {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A young hobbit, Frodo, sets out on a perilous quest to destroy a powerful ring that could bring doom to Middle-earth.",
    year: 2001,
    director: "Peter Jackson",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
    genres: ["Fantasy", "Adventure", "Action"],
    video: "https://youtu.be/V75dMMIW2B4?si=qV0Hz0wS6bdL8lR3",
    rating: 8.9
  },
  {
    title: "Pretty Woman",
    description: "A wealthy businessman hires an escort for social events, and the unlikely pair form a bond that challenges class divides.",
    year: 1990,
    director: "Garry Marshall",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/b/b6/Pretty_woman_movie.jpg",
    genres: ["Romance", "Comedy"],
    video: "https://youtu.be/2EBAVoN8L_U?si=S-D6uZnp5lCXNDB7",
    rating: 7.1
  },
  {
    title: "10 Things I Hate About You",
    description: "In this modern high school adaptation of Shakespeare’s 'The Taming of the Shrew', a teen tries to date a girl with an attitude problem.",
    year: 1999,
    director: "Gil Junger",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/9/95/10_Things_I_Hate_About_You_film.jpg",
    genres: ["Comedy", "Romance", "Drama"],
    video: "https://youtu.be/yEmcEuS6xm4?si=SDc8Yc9DnYd4_9fY",
    rating: 7.3
  },
  {
    title: "Twilight",
    description: "A teenage girl falls in love with a mysterious boy at her new school, who turns out to be a vampire.",
    year: 2008,
    director: "Catherine Hardwicke",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/b/b6/Twilight_%282008_film%29_poster.jpg",
    genres: ["Fantasy", "Romance", "Drama"],
    video: "https://youtu.be/uxjNDE2fMjI?si=4XLBaMG9C39beK-q",
    rating: 5.3
  },
  {
    title: "Grown Ups",
    description: "Five childhood friends reunite after their basketball coach passes away, spending a weekend with their families full of laughs.",
    year: 2010,
    director: "Dennis Dugan",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/f/fe/Grownupsmovie.jpg",
    genres: ["Comedy"],
    video: "https://youtu.be/e01NVCveGkg?si=2CoHPPghuRw2eiWO",
    rating: 6.0
  },
  {
    title: "Howl's Moving Castle",
    description: "A young woman cursed with aging by a witch encounters a mysterious wizard named Howl and embarks on an enchanted journey.",
    year: 2004,
    director: "Hayao Miyazaki",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
    genres: ["Animation", "Fantasy", "Adventure"],
    video: "https://youtu.be/iwROgK94zcM?si=H1A3zACzbnkKBv0y",
    rating: 8.2
  },
  {
    title: "Midnight Runners",
    description: "Two police academy students witness a kidnapping and decide to investigate the case themselves when the authorities stall.",
    year: 2017,
    director: "Kim Joo-hwan",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/1/1b/Midnight_Runners.jpg",
    genres: ["Action", "Comedy", "Crime"],
    video: "https://youtu.be/cyVk51ksx4o?si=8V8sTCENW61f0xKH",
    rating: 7.3
  },
  {
    title: "Parasite",
    description: "A poor family cons their way into working for a wealthy household but soon discover shocking secrets about the social divide.",
    year: 2019,
    director: "Bong Joon-ho",
    posterUrl:"https://upload.wikimedia.org/wikipedia/bs/f/f9/Poster_filma_Parazit.png",
    genres: ["Thriller", "Drama", "Mystery"],
    video: "https://youtu.be/SEUXfv87Wpk?si=z6g0BUHFpPn9BvK4",
    rating: 8.5
  },
  {
    title: "Shutter Island",
    description: "U.S. Marshals investigate the disappearance of a patient from a secluded psychiatric facility, uncovering unsettling truths.",
    year: 2010,
    director: "Martin Scorsese",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg",
    genres: ["Mystery", "Thriller"],
    video: "https://youtu.be/v8yrZSkKxTA?si=pFAEVYDZqc3Xe4wz",
    rating: 8.2
  },
  {
    title: "The Hobbit: An Unexpected Journey",
    description: "Bilbo Baggins, a reluctant hobbit, joins a company of dwarves on a quest to reclaim their homeland from a fearsome dragon.",
    year: 2012,
    director: "Peter Jackson",
    posterUrl:"https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg",
    genres: ["Fantasy", "Adventure"],
    video: "https://youtu.be/SDnYMbYB-nU?si=qA95wUXHG7D8X9tu",
    rating: 7.8
  }
  ]
for (const item of movieData) {
    const genreLinks = item.genres.map((name) => ({
      where: { name },
      create: { name },
    }));

    await prisma.movie.create({
      data: {
        title: item.title,
        description: item.description,
        year: item.year,
        director: item.director,
        posterUrl: item.posterUrl,
        rating: item.rating, 
        video: item.video,   
        genres: {
          connectOrCreate: genreLinks,
        },
      },
    });
  }

  console.log('Seeding was successful! 🌱');
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });