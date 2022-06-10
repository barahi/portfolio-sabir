import { useInView } from 'react-intersection-observer';
import Bar from '../../components/progressBar/Bar'

const Skills = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
      <div className="skills section" id="skills-section" ref={ref}>
        <h2 className="megrim section-title">Skills</h2>
        <div className="progress-bars">          
          <Bar name="HTML" status="90%" inView={inView} />
          <Bar name="CSS" status="80%" inView={inView} />
          <Bar name="PHP"  status="70%" inView={inView} />
          <Bar name="Javascript" status="80%" inView={inView} />
          <Bar name="Python" status="85%" inView={inView} />
          <Bar name="Java" status="85%" inView={inView} />
          <Bar name="Docker" status="70%" inView={inView} />
          <Bar name="Git" status="85%" inView={inView} />
        </div>
      </div>
  )
}
export default Skills;
