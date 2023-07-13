const { PrismaClient } = require('@prisma/client');

const randomString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum leo id nibh condimentum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vestibulum felis arcu, et gravida diam tincidunt ac. Sed cursus facilisis quam, et interdum erat ultricies sit amet. Nunc euismod eros vel faucibus posuere. Duis tempus est vitae turpis varius fringilla. Aenean efficitur arcu vel enim cursus, ac viverra nulla eleifend.";

async function seed() {
  const prisma = new PrismaClient();

  try {
    await prisma.$connect();

    await prisma.users.createMany({
      data: [
        {
          username: 'admin',
          email: 'admin@e.com',
          password: 'helloworld',
          created_at: new Date(),
          application_message: randomString,
          admin: true,
          approved: 'approved'
        },
        {
          username: 'rosemary',
          email: 'rosemary@e.com',
          password: 'helloworld',
          created_at: new Date(),
          application_message: randomString,
          approved: 'approved'
        },
        {
          username: 'parsley',
          email: 'parsley@e.com',
          password: 'helloworld',
          created_at: new Date(),
          application_message: randomString,
          approved: 'approved'
        },
        {
          username: 'mandrake',
          email: 'mandrake@e.com',
          password: 'helloworld',
          created_at: new Date(),
          application_message: randomString,
          approved: 'approved'
        },
        {
          username: 'clove',
          email: 'clove@e.com',
          password: 'helloworld',
          created_at: new Date(),
          application_message: randomString,
          approved: 'pending'
        },
      ],
    });

    await prisma.stories.createMany({
      data: [
        {
          user_id: 1,
          created_at: new Date("2022-05-15 09:23:45.000"),
          title: "The Lost Locket",
          content: `<p>Once upon a time in a small village, there lived a young girl named Lily. She had always been fascinated by the legends of hidden treasures and mysterious keys. One day, while exploring the attic of her old house, Lily stumbled upon a dusty old chest.</p>
        <p>Curiosity piqued, Lily examined the chest and noticed a small keyhole. She couldn't help but wonder what might be inside. Determined to unravel the mystery, she embarked on a quest to find the key that would unlock the chest.</p>
        <p>Days turned into weeks, and weeks turned into months, but Lily's search yielded no results. Just when she was about to give up, an elderly man approached her, offering an intriguing key. He claimed it was the key to the chest in her attic.</p>
        <p>Excited yet skeptical, Lily took the key and rushed home. As she inserted the key into the lock, a brilliant light engulfed the room, revealing a magical realm inside the chest. It was filled with wonders beyond her imagination.</p>
        <p>In that moment, Lily realized that sometimes the most precious treasures are not material possessions but the adventures and discoveries that come along the way.</p>`,
          is_published: true
        },
        {
          user_id: 2,
          created_at: new Date("2022-06-19 14:30:12.000"),
          title: "The Mysterious Pendant",
          content: "<p>In a forgotten corner of the world, there existed a hidden cave guarded by ancient spirits. Deep within the cave, a young archaeologist named Ethan stumbled upon a glowing pendant.</p><p>Enchanted by its radiance, Ethan decided to investigate its origins. He embarked on an expedition across treacherous terrains and through ancient ruins, following the pendant's trail.</p><p>As he unraveled the pendant's history, Ethan discovered its connection to a long-lost civilization. It held the power to restore balance and harmony to the world.</p><p>Guided by his knowledge and newfound allies, Ethan unleashed the pendant's true potential, unleashing a wave of healing energy that revitalized the land and reawakened hope in the hearts of its inhabitants.</p><p>Through his journey, Ethan learned that true power lies not in material possessions but in the ability to make a positive impact on the world.</p>",
          is_published: true
        },
        {
          user_id: 2,
          created_at: new Date("2022-07-25 18:12:57.000"),
          title: "The Cursed Mirror",
          content: "<p>Once upon a time, in a grand mansion shrouded in darkness, a young heiress named Victoria inherited an ornate mirror. Unbeknownst to her, the mirror held a dark secret.</p><p>As Victoria gazed into the mirror's reflection, she was transported to a parallel world where everything was inverted and twisted. The once opulent mansion turned into a decrepit ruin, and the inhabitants became tormented souls.</p><p>Determined to break the curse, Victoria embarked on a perilous journey through the twisted realm. She had to confront her deepest fears and unravel the mirror's dark magic.</p><p>With each step forward, Victoria grew stronger, and the mirror's hold weakened. In a climactic battle against the mirror's malevolent spirit, Victoria shattered its curse, restoring balance to both worlds.</p><p>Through her harrowing experience, Victoria learned the power of resilience and the importance of self-belief in the face of adversity.</p>",
          is_published: true
        },
        {
          user_id: 2,
          created_at: new Date("2022-08-10 11:45:23.000"),
          title: "The Secret Scroll",
          content: "<p>Hidden deep within an ancient temple, a sacred scroll lay dormant, holding the key to unlimited wisdom. Its existence was known only to a few, and its secrets were coveted by many.</p><p>A young scholar named Benjamin stumbled upon the temple and uncovered the scroll's location. Recognizing its significance, he dedicated himself to unlocking its teachings.</p><p>For years, Benjamin immersed himself in the study of ancient languages and esoteric knowledge. With each passing day, his understanding of the scroll grew, revealing profound insights about the universe and the interconnectedness of all things.</p><p>Armed with newfound wisdom, Benjamin became a beacon of light, sharing his knowledge with the world and guiding others towards enlightenment. The scroll's power lay not in its secrecy but in its ability to inspire and transform lives.</p><p>Through his journey, Benjamin learned that true knowledge is meant to be shared and that enlightenment comes from within.</p>",
          is_published: false
        },
        {
          user_id: 3,
          created_at: new Date("2022-09-17 16:58:31.000"),
          title: "The Forgotten Kingdom",
          content: "<p>In the depths of time, there existed a magnificent kingdom, now forgotten and lost to history. Its grandeur lay buried beneath layers of sand and secrecy.</p><p>An adventurous archaeologist named Sophia dedicated her life to uncovering the kingdom's mysteries. Armed with ancient maps and inscriptions, she embarked on an expedition to unearth the forgotten realm.</p><p>As Sophia delved deeper into the desert, she uncovered hidden tombs, intricate hieroglyphs, and remnants of a once-thriving civilization. The kingdom's history came alive before her eyes.</p><p>In her quest, Sophia not only brought the kingdom's legacy back to light but also ignited a spark of curiosity and appreciation for history in the hearts of people worldwide. The forgotten kingdom became a symbol of resilience and a testament to the endurance of human achievements.</p><p>Through her discoveries, Sophia realized that the past holds valuable lessons and that our roots shape our future.</p>",
          is_published: true
        }
      ]

    });

    await prisma.parent_comments.createMany({
      data: [{
        story_id:1,
        user_id:3,
        created_at: new Date(),
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at lectus nec neque feugiat faucibus eu nec ex."
      },
      {
        story_id:1,
        user_id:4,
        created_at: new Date(),
        content:"Vestibulum volutpat orci sit amet enim cursus, nec dictum lorem cursus. Morbi fermentum placerat nibh, sed vestibulum nisi rutrum vel."
      }
      ]
    });

    await prisma.child_comments.createMany({
        data: [{
          parent_id:1,
          sender_id:1,
          receiver_id:3,
          created_at: new Date(),
          content:"Nullam ac ullamcorper mauris, sed pretium mauris. In tincidunt nibh id efficitur dignissim. Pellentesque facilisis sapien eu erat tincidunt, sed malesuada sem fermentum."
        },
        {
          parent_id:1,
          sender_id:3,
          receiver_id:1,
          created_at: new Date(),
          content:"Fusce eleifend urna quis pharetra dignissim. Duis nec tortor interdum, auctor nunc sit amet, tempor sapien. Nunc a ligula suscipit, tempus urna id, eleifend lacus."

        }
        ]
    })
    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
}

seed();
