import React from 'react';
import styles from '../styles/story.module.css';
import Link from 'next/link';

const props = {
  title: 'The Cursed Crystal Ball',
  username: 'ElysiaNightshade',
  text: `In the quiet town of Willowbrook, a mysterious circus appeared overnight, drawing in curious visitors with promises of awe-inspiring acts. The main attraction was a performer named Madame Zara, a seemingly ageless fortune teller with piercing blue eyes. People eagerly lined up to have their futures revealed, unaware of the dark secret she held.
   As each person sat before her crystal ball, their souls were unknowingly trapped within, providing Zara with immortality. The townsfolk soon realized the truth when their loved ones began disappearing, leaving behind nothing but empty shells. Willowbrook became a ghost town, forever haunted by the chilling echoes of Madame Zara's deceit.  `
};
const Story = () => {
  const { title, username, text } = props;

  const abbr = text.substring(0, 300) + ' ...';

  return (
    <ul className={styles.story_item}>
      <div className={styles.byline}>
      <div className={styles.title}>{title}</div>
      <div className={styles.username}>By {username}</div>
      </div>
      <div className={styles.abbr}>{abbr}</div>
    </ul>
  );
};

export default Story;
