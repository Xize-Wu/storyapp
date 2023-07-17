import styles from './StoryIntro.module.css'

export default function StoryIntro (props) {
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
