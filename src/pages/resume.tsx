import * as React from 'react';
import Layout from '../components/Layout';

// styles

// markup
class ResumePage extends React.Component {
  state = {
    education: [
      {
        title: 'Title education 1',
        period: '2020',
        institution: 'Institution 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias minima tenetur quod consequatur dicta.',
      },
      {
        title: 'Title education 2',
        period: '2020',
        institution: 'Institution 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias minima tenetur quod consequatur dicta.',
      },
      {
        title: 'Title education 3',
        period: '2020',
        institution: 'Institution 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias minima tenetur quod consequatur dicta.',
      },
    ],
    experience: [
      {
        title: 'Frontend-developer 1',
        period: 'Dec 2018 - Current',
        company: 'Company 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias minima tenetur quod consequatur dicta.',
      },
      {
        title: 'Frontend-developer 2',
        period: 'Dec 2011 - Nov 2012',
        company: 'Company 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias minima tenetur quod consequatur dicta.',
      },
      {
        title: 'Frontend-developer 3',
        period: 'Jan 2010 - Dec 2011 ',
        company: 'Company 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias minima tenetur quod consequatur dicta.',
      },
    ],
  };
  render() {
    return (
      <>
        <Layout>
          <section className="page">
            <div className="page-header resume-header">
              <h1>Resume</h1>
            </div>
            <div className="page-content resume-content">
              <section className="education">
                <div className="title">
                  <h3>Education</h3>
                </div>
                <section className="timeline">
                  {this.state.education.map((item, index) => {
                    return (
                      <div key={index} className="timeline-item">
                        <h4 className="item-title">{item.title}</h4>
                        <span className="item-period">{item.period}</span>
                        <span className="item-small">{item.institution}</span>
                        <p className="item-description">{item.description}</p>
                      </div>
                    );
                  })}
                </section>
              </section>
              <section className="experience">
                <div className="title">
                  <h3>Experience</h3>
                </div>
                <section className="timeline">
                  {this.state.experience.map((item, index) => {
                    return (
                      <div key={index} className="timeline-item">
                        <h4 className="item-title">{item.title}</h4>
                        <span className="item-period">{item.period}</span>
                        <span className="item-small">{item.company}</span>
                        <p className="item-description">{item.description}</p>
                      </div>
                    );
                  })}
                </section>
              </section>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default ResumePage;
