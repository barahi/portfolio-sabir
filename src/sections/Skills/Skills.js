import Bar from '../../components/progressBar/Bar'
const Skills = () => {
    return (
        <div className="skills section">
          <h2 className="megrim section-title">Skills</h2>
          <div className="progress-bars">          
            <Bar name="HTML" status="90%"/>
            <Bar name="CSS" status="80%"/>
            <Bar name="PHP"  status="70%" />
            <Bar name="Javascript" status="80%" />
            <Bar name="Python" status="85%" />
            <Bar name="Java" status="85%" />
            <Bar name="Docker" status="70%" />
            <Bar name="Git" status="85%" />
          </div>
        </div>
    )
}
export default Skills;
