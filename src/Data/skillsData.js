const SkillsData = {
  frontend: {
    title: "Frontend Development",
    description:
      "Modern frontend technologies and frameworks for building responsive, interactive user interfaces.",
    hasAnimation: true, // This will use the existing Skills.jsx animation
  },

  backend: {
    title: "Backend Development",
    description:
      "Server-side technologies, APIs, and database management for robust application architecture.",
    hasAnimation: true,
  },

  programming: {
    title: "Programming Languages",
    description:
      "Core programming languages and their ecosystems for versatile software development.",
    hasAnimation: true,
  },

  aiml: {
    title: "AI & Machine Learning",
    description:
      "Artificial intelligence, machine learning frameworks, and data science tools for intelligent solutions.",
    skills: [
      {
        name: "TensorFlow",
        description:
          "Building and training deep learning models for AI applications",
      },
      {
        name: "PyTorch",
        description:
          "Developing neural networks and machine learning research projects",
      },
      {
        name: "Scikit-learn",
        description:
          "Implementing traditional ML algorithms and data preprocessing",
      },
      {
        name: "Pandas",
        description:
          "Data manipulation, analysis, and preparation for ML workflows",
      },
      {
        name: "NumPy",
        description:
          "Numerical computing and array operations for data science",
      },
      {
        name: "OpenAI API",
        description: "Integrating GPT models and AI services into applications",
      },
      {
        name: "Hugging Face",
        description: "Using pre-trained transformers and NLP models",
      },
      {
        name: "Computer Vision",
        description: "Image processing and visual recognition systems",
      },
    ],
  },

  devops: {
    title: "DevOps & Cloud",
    description:
      "Cloud platforms, deployment strategies, and infrastructure management for scalable applications.",
    skills: [
      {
        name: "AWS",
        description:
          "Cloud infrastructure management and serverless deployments",
      },
      {
        name: "Google Cloud",
        description: "GCP services for hosting and machine learning workloads",
      },
      {
        name: "Docker",
        description: "Containerization for consistent development environments",
      },
      {
        name: "Kubernetes",
        description: "Container orchestration and scaling applications",
      },
      {
        name: "Vercel",
        description: "Frontend deployment and edge network optimization",
      },
      {
        name: "Netlify",
        description: "Static site hosting and continuous deployment pipelines",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD automation and workflow management",
      },
      {
        name: "Linux/Ubuntu",
        description: "Server administration and command-line operations",
      },
    ],
  },

  leadership: {
    title: "Leadership & Business",
    description:
      "Entrepreneurial skills, team leadership, and business development capabilities for driving organizational growth.",
    skills: [
      {
        name: "Team Leadership",
        description:
          "Managing development teams and fostering collaborative culture",
      },
      {
        name: "Product Strategy",
        description: "Defining product roadmaps and technical vision",
      },
      {
        name: "Startup Development",
        description: "Building companies from idea to market validation",
      },
      {
        name: "Technical Architecture",
        description: "Designing scalable systems and technology decisions",
      },
      {
        name: "Client Relations",
        description:
          "Building partnerships and managing stakeholder expectations",
      },
      {
        name: "Project Management",
        description: "Agile methodologies and delivery coordination",
      },
      {
        name: "Mentoring",
        description: "Coaching junior developers and knowledge sharing",
      },
      {
        name: "Business Development",
        description: "Growth strategies and market expansion initiatives",
      },
    ],
  },
};

export default SkillsData;
