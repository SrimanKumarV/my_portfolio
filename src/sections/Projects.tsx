
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';

const PROJECTS = [
  {
    title: 'Smart Certificate Generation System',
    description: 'Developed a web-based certificate management system enabling students to submit requests online while administrators manage approvals digitally. Features an automated workflow, authentication system, and separate dashboards.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    githubUrl: '#',
  },
  {
    title: 'Alumnex-Connect',
    description: 'A full-stack web portal built to facilitate seamless student-alumni networking, professional mentorship, and career tracking.',
    tags: ['Node.js', 'React', 'Express', 'Full-Stack'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Missing Things Finder',
    description: 'Built a Java application using efficient data structures like HashMaps for tracking lost and found items efficiently. Includes fast search operations and database connectivity.',
    tags: ['Java', 'MySQL', 'Desktop App'],
    githubUrl: '#',
  },
  {
    title: 'Sentiment Analysis System',
    description: 'Developed a machine learning model capable of classifying sentiments from user reviews using advanced text preprocessing and feature extraction techniques.',
    tags: ['Python', 'Machine Learning', 'NLP'],
    githubUrl: '#',
  },
  {
    title: 'Air Pollution Detection using Deep Learning',
    description: 'Built a deep learning model using environmental datasets for predicting and analyzing environmental pollution levels. Implemented neural networks for extracting environmental insights.',
    tags: ['Python', 'Deep Learning', 'Neural Networks'],
    githubUrl: '#',
  },
  {
    title: 'Railway Track Allocation Simulator',
    description: 'An interactive, low-level operating systems simulation implementing the Banker\'s Algorithm to visualize deadlock avoidance in infrastructure logistics.',
    tags: ['JavaScript', 'OS Simulation', 'Algorithms'],
    githubUrl: '#',
  }
];

export const Projects = () => {
  return (
    <section className="py-24 relative bg-black/20" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Selected Work" 
          subtitle="A collection of professional case studies showcasing my ability to engineer scalable solutions and solve complex problems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
