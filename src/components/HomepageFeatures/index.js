import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({id: 'homepage.feature.features.message', message: 'More Features'}),
    Svg: require('@site/static/img/toolbox.svg').default,
    description: (
      <>
          <Translate id="homepage.feature.features.description">
              REMS Carpet Addition has ported many features
              of the previous version to a higher version,
              aiming to achieve a better gaming condition.
          </Translate>
      </>
    ),
  },
  {
    title: translate({id: 'homepage.feature.vanilla.message', message: 'Keep vanilla'}),
    Svg: require('@site/static/img/vanilla.svg').default,
    description: (
      <>
          <Translate id="homepage.feature.vanilla.description">
              The REMS Carpet Addition does not actively change the vanilla behavior of the game.
          </Translate>
      </>
    ),
  },
  {
    title: translate({id: 'homepage.feature.friend.message', message: 'Friend with other'}),
    Svg: require('@site/static/img/puzzle.svg').default,
    description: (
      <>
          <Translate id="homepage.feature.friend.description">
              The REMS Carpet Addition does not actively change the vanilla behavior of the game.
          </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
