import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Započeto punjenje baze (Seeding)...');

  // 1. Čišćenje baze prije punjenja
  await prisma.movie.deleteMany();
  await prisma.genre.deleteMany();

  // 2. Svi tvoji filmovi iz Task 15
  const movieData = [
    {
        title: "Avatar",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        year: 2009,
        director: "James Cameron",
        posterUrl: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qeYv0Y9RhF7C65.jpg",
        genres: ["Science Fiction", "Action", "Adventure", "Fantasy"]
    },
    {
        title: "Black Swan",
        description: "Nina is a talented but unstable ballerina on the verge of stardom. Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.",
        year: 2010,
        director: "Darren Aronofsky",
        posterUrl: "https://image.tmdb.org/t/p/w500/79979ipS74PwEmYvY9u67pbr9EE.jpg",
        genres: ["Psychological Thriller", "Drama"]
    },
    {
        title: "Avatar: The Way of Water",
        description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
        year: 2022,
        director: "James Cameron",
        posterUrl: "https://image.tmdb.org/t/p/w500/t6SlsnzO0tYvYv9lsYelBRi98hS.jpg",
        genres: ["Science Fiction", "Action", "Adventure", "Fantasy"]
    },
    {
        title: "Avatar: Fire and Ash",
        description: "Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, as the conflict on Pandora escalates.",
        year: 2025,
        director: "James Cameron",
        posterUrl: "https://placehold.co/400x600?text=Avatar+Fire+and+Ash",
        genres: ["Science Fiction", "Action", "Adventure", "Fantasy"]
    },
    {
        title: "Gone Girl",
        description: "The husband of a missing woman becomes the main suspect in her disappearance.",
        year: 2014,
        director: "David Fincher",
        posterUrl: "https://image.tmdb.org/t/p/w500/qymaMkin0B0AdvODSbtqbqS0qFc.jpg",
        genres: ["Thriller", "Mystery"]
    },
    {
        title: "Girl, Interrupted",
        description: "Directionless teenager Susanna is rushed to Claymoore, a mental institution, after a supposed suicide attempt. There she befriends a group of troubled women.",
        year: 1999,
        director: "James Mangold",
        posterUrl: "https://image.tmdb.org/t/p/w500/94v6T1p5H4iA1D6D24A22X1H7P7.jpg",
        genres: ["Coming-of-age", "Psychological Drama"]
    },
    {
        title: "The Truman Show",
        description: "An insurance salesman discovers that his entire life has been broadcast as a TV show to the world.",
        year: 1998,
        director: "Peter Weir",
        posterUrl: "https://image.tmdb.org/t/p/w500/8uO0gUM8aNqMqiS0kyZCY9vR6uz.jpg",
        genres: ["Drama", "Sci-Fi"]
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        description: "On his 11th birthday, Harry Potter learns he is a wizard and begins his first year at Hogwarts School of Witchcraft and Wizardry.",
        year: 2001,
        director: "Chris Columbus",
        posterUrl: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9S0Ar0Fc9SokXB.jpg",
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "Pride & Prejudice",
        description: "In 18th-century England, spirited Elizabeth Bennet navigates issues of manners, marriage, and morality when she meets the proud Mr. Darcy.",
        year: 2005,
        director: "Joe Wright",
        posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
        genres: ["Romance", "Drama"]
    },
    {
        title: "Mamma Mia!",
        description: "A young bride-to-be invites three men from her mother’s past to her Greek island wedding, hoping to discover which one is her father.",
        year: 2008,
        director: "Phyllida Lloyd",
        posterUrl: "https://image.tmdb.org/t/p/w500/pAInC6N1G4mO6G4S7pG7K5N6E0V.jpg",
        genres: ["Musical", "Comedy", "Romance"]
    },
    {
        title: "The Lord of the Rings",
        description: "A young hobbit, Frodo, sets out on a perilous quest to destroy a powerful ring that could bring doom to Middle-earth.",
        year: 2001,
        director: "Peter Jackson",
        posterUrl: "https://image.tmdb.org/t/p/w500/6oom9p9pG1A6M9RzG5K7N6E0V.jpg",
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "Pretty Woman",
        description: "A wealthy businessman hires an escort for social events, and the unlikely pair form a bond that challenges class divides.",
        year: 1990,
        director: "Garry Marshall",
        posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
        genres: ["Romance", "Comedy"]
    },
    {
        title: "10 Things I Hate About You",
        description: "In this modern high school adaptation of Shakespeare’s 'The Taming of the Shrew', an awkward teen tries to find a way to date a girl with an attitude problem.",
        year: 1999,
        director: "Gil Junger",
        posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
        genres: ["Comedy", "Romance"]
    },
    {
        title: "Twilight",
        description: "A teenage girl falls in love with a mysterious boy at her new school, who turns out to be a vampire.",
        year: 2008,
        director: "Catherine Hardwicke",
        posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
        genres: ["Fantasy", "Romance"]
    },
    {
        title: "Grown Ups",
        description: "Five childhood friends reunite after their basketball coach passes away, spending a weekend with their families full of laughs.",
        year: 2010,
        director: "Dennis Dugan",
        posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
        genres: ["Comedy"]
    },
    {
        title: "Howl's Moving Castle",
        description: "A young woman cursed with aging by a witch encounters a mysterious wizard named Howl and embarks on an enchanted journey.",
        year: 2004,
        director: "Hayao Miyazaki",
        posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
        genres: ["Animation", "Fantasy", "Adventure"]
    },
    {
        title: "Midnight Runners",
        description: "Two detectives on a long night shift stumble upon a dangerous conspiracy that pushes them to their limits.",
        year: 2018,
        director: "Kim Joo-hwan",
        posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
        genres: ["Action", "Thriller"]
    },
    {
        title: "Parasite",
        description: "A poor family cons their way into working for a wealthy household but soon discover that the divide between rich and poor hides shocking secrets.",
        year: 2019,
        director: "Bong Joon-ho",
        posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTjS3vS7YvUCNadIDbZ6tsxb.jpg",
        genres: ["Thriller", "Drama"]
    },
    {
        title: "Shutter Island",
        description: "U.S. Marshals investigate the disappearance of a patient from a secluded psychiatric facility, uncovering unsettling truths.",
        year: 2010,
        director: "Martin Scorsese",
        posterUrl: "https://image.tmdb.org/t/p/w500/4Yh9uUn88uzS7qLnnCLk6q6fWvK.jpg",
        genres: ["Mystery", "Thriller"]
    },
    {
        title: "The Hobbit",
        description: "Bilbo Baggins, a reluctant hobbit, joins a company of dwarves on a quest to reclaim their homeland from a fearsome dragon.",
        year: 2012,
        director: "Peter Jackson",
        posterUrl: "https://image.tmdb.org/t/p/w500/7S9p7mH9J3J0m6M9RzG5K7N6E0V.jpg",
        genres: ["Fantasy", "Adventure"]
    }
  ];

  for (const item of movieData) {
    const genreConnections = await Promise.all(
      item.genres.map(async (name) => {
        const genre = await prisma.genre.upsert({
          where: { name },
          update: {},
          create: { name },
        });
        return { id: genre.id };
      })
    );

    await prisma.movie.create({
      data: {
        title: item.title,
        description: item.description,
        year: item.year,
        director: item.director,
        posterUrl: item.posterUrl,
        genres: {
          connect: genreConnections
        }
      },
    });
  }

  console.log('Seeding uspješno završen sa svih 20 filmova! 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });