import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  await prisma.movie.deleteMany();
  await prisma.genre.deleteMany();

  const movieData = [
{
    title: "Avatar",
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    year: 2009,
    director: "James Cameron",
    posterUrl: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qeYv0Y9RhF7C65.jpg",
    genres: ["Science Fiction", "Action", "Adventure", "Fantasy"],
    video: "https://www.youtube.com/watch?v=5PSNL1qAk6Y",
    rating: 7.9
  },
  {
    title: "Black Swan",
    description: "Nina is a talented but unstable ballerina on the verge of stardom. Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.",
    year: 2010,
    director: "Darren Aronofsky",
    posterUrl: "https://image.tmdb.org/t/p/w500/79979ipS74PwEmYvY9u67pbr9EE.jpg",
    genres: ["Psychological Thriller", "Drama"],
    video: "https://www.youtube.com/watch?v=5jaI1XOB-Ml",
    rating: 8.0
  },
  {
    title: "Avatar: The Way of Water",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    year: 2022,
    director: "James Cameron",
    posterUrl: "https://image.tmdb.org/t/p/w500/t6SlsnzO0tYvYv9lsYelBRi98hS.jpg",
    genres: ["Science Fiction", "Action", "Adventure", "Fantasy"],
    video: "https://www.youtube.com/watch?v=d9MyW72ELq0",
    rating: 7.6
  },
  {
    title: "Avatar: Fire and Ash",
    description: "Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, as the conflict on Pandora escalates.",
    year: 2025,
    director: "James Cameron",
    posterUrl: "https://placehold.co/400x600?text=Avatar+Fire+and+Ash",
    genres: ["Science Fiction", "Action", "Adventure", "Fantasy"],
    video: "https://www.youtube.com/watch?v=R_fNfXp7v3A",
    rating: 0.0
  },
  {
    title: "Gone Girl",
    description: "The husband of a missing woman becomes the main suspect in her disappearance, leading to a media circus and a twisted investigation.",
    year: 2014,
    director: "David Fincher",
    posterUrl: "https://image.tmdb.org/t/p/w500/qymaMkin0B0AdvODSbtqbqS0qFc.jpg",
    genres: ["Thriller", "Mystery", "Drama"],
    video: "https://www.youtube.com/watch?v=2-_-1nJf8Vg",
    rating: 8.1
  },
  {
    title: "Girl, Interrupted",
    description: "Directionless teenager Susanna is rushed to Claymoore, a mental institution, after a supposed suicide attempt. There she befriends a group of troubled women.",
    year: 1999,
    director: "James Mangold",
    posterUrl: "https://image.tmdb.org/t/p/w500/94v6T1p5H4iA1D6D24A22X1H7P7.jpg",
    genres: ["Coming-of-age", "Psychological Drama", "Biography"],
    video: "https://www.youtube.com/watch?v=5399v4_0t6M",
    rating: 7.3
  },
  {
    title: "The Truman Show",
    description: "An insurance salesman discovers that his entire life has been broadcast as a TV show to the world without his knowledge since birth.",
    year: 1998,
    director: "Peter Weir",
    posterUrl: "https://image.tmdb.org/t/p/w500/8uO0gUM8aNqMqiS0kyZCY9vR6uz.jpg",
    genres: ["Drama", "Science Fiction", "Comedy"],
    video: "https://www.youtube.com/watch?v=dlnmQbPGuls",
    rating: 8.2
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    description: "On his 11th birthday, Harry Potter learns he is a wizard and begins his first year at Hogwarts School of Witchcraft and Wizardry.",
    year: 2001,
    director: "Chris Columbus",
    posterUrl: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9S0Ar0Fc9SokXB.jpg",
    genres: ["Fantasy", "Adventure", "Family"],
    video: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
    rating: 7.6
  },
  {
    title: "Pride & Prejudice",
    description: "In 18th-century England, spirited Elizabeth Bennet navigates issues of manners, marriage, and morality when she meets the proud Mr. Darcy.",
    year: 2005,
    director: "Joe Wright",
    posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
    genres: ["Romance", "Drama"],
    video: "https://www.youtube.com/watch?v=1dYv5u6v55Y",
    rating: 7.8
  },
  {
    title: "Mamma Mia!",
    description: "A young bride-to-be invites three men from her mother’s past to her Greek island wedding, hoping to discover which one is her father.",
    year: 2008,
    director: "Phyllida Lloyd",
    posterUrl: "https://image.tmdb.org/t/p/w500/pAInC6N1G4mO6G4S7pG7K5N6E0V.jpg",
    genres: ["Musical", "Comedy", "Romance"],
    video: "https://www.youtube.com/watch?v=lkN-A00WLYE",
    rating: 6.5
  },
 {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A young hobbit, Frodo, sets out on a perilous quest to destroy a powerful ring that could bring doom to Middle-earth.",
    year: 2001,
    director: "Peter Jackson",
    posterUrl: "https://image.tmdb.org/t/p/w500/6oom9p9pG1A6M9RzG5K7N6E0V.jpg",
    genres: ["Fantasy", "Adventure", "Action"],
    video: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    rating: 8.9
  },
  {
    title: "Pretty Woman",
    description: "A wealthy businessman hires an escort for social events, and the unlikely pair form a bond that challenges class divides.",
    year: 1990,
    director: "Garry Marshall",
    posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
    genres: ["Romance", "Comedy"],
    video: "https://www.youtube.com/watch?v=Wzii8IuL8lk",
    rating: 7.1
  },
  {
    title: "10 Things I Hate About You",
    description: "In this modern high school adaptation of Shakespeare’s 'The Taming of the Shrew', a teen tries to date a girl with an attitude problem.",
    year: 1999,
    director: "Gil Junger",
    posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
    genres: ["Comedy", "Romance", "Drama"],
    video: "https://www.youtube.com/watch?v=d7Z8_vE9yJc",
    rating: 7.3
  },
  {
    title: "Twilight",
    description: "A teenage girl falls in love with a mysterious boy at her new school, who turns out to be a vampire.",
    year: 2008,
    director: "Catherine Hardwicke",
    posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
    genres: ["Fantasy", "Romance", "Drama"],
    video: "https://www.youtube.com/watch?v=uxjNDE2fMjI",
    rating: 5.3
  },
  {
    title: "Grown Ups",
    description: "Five childhood friends reunite after their basketball coach passes away, spending a weekend with their families full of laughs.",
    year: 2010,
    director: "Dennis Dugan",
    posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
    genres: ["Comedy"],
    video: "https://www.youtube.com/watch?v=e01NVCveGkg",
    rating: 6.0
  },
  {
    title: "Howl's Moving Castle",
    description: "A young woman cursed with aging by a witch encounters a mysterious wizard named Howl and embarks on an enchanted journey.",
    year: 2004,
    director: "Hayao Miyazaki",
    posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
    genres: ["Animation", "Fantasy", "Adventure"],
    video: "https://www.youtube.com/watch?v=iwROgK94weM",
    rating: 8.2
  },
  {
    title: "Midnight Runners",
    description: "Two police academy students witness a kidnapping and decide to investigate the case themselves when the authorities stall.",
    year: 2017,
    director: "Kim Joo-hwan",
    posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
    genres: ["Action", "Comedy", "Crime"],
    video: "https://www.youtube.com/watch?v=yM8Xid97PJM",
    rating: 7.3
  },
  {
    title: "Parasite",
    description: "A poor family cons their way into working for a wealthy household but soon discover shocking secrets about the social divide.",
    year: 2019,
    director: "Bong Joon-ho",
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTjS3vS7YvUCNadIDbZ6tsxb.jpg",
    genres: ["Thriller", "Drama", "Mystery"],
    video: "https://www.youtube.com/watch?v=5xH0HfJh9qs",
    rating: 8.5
  },
  {
    title: "Shutter Island",
    description: "U.S. Marshals investigate the disappearance of a patient from a secluded psychiatric facility, uncovering unsettling truths.",
    year: 2010,
    director: "Martin Scorsese",
    posterUrl: "https://image.tmdb.org/t/p/w500/4Yh9uUn88uzS7qLnnCLk6q6fWvK.jpg",
    genres: ["Mystery", "Thriller"],
    video: "https://www.youtube.com/watch?v=5iaYLCiq5RM",
    rating: 8.2
  },
  {
    title: "The Hobbit: An Unexpected Journey",
    description: "Bilbo Baggins, a reluctant hobbit, joins a company of dwarves on a quest to reclaim their homeland from a fearsome dragon.",
    year: 2012,
    director: "Peter Jackson",
    posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
    genres: ["Fantasy", "Adventure"],
    video: "https://www.youtube.com/watch?v=SDnYMbYB-nU",
    rating: 7.8
  }
  ];

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