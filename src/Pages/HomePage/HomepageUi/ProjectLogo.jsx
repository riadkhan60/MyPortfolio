// The logo panel for a project: on the cards (small) and in the project modal (large).
function ProjectLogo({ project, large = false }) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-borderColor ${
        large ? "h-[300px]" : "h-[120px] md:h-[160px]"
      }`}
      style={{
        background: `radial-gradient(circle at 30% 20%, ${project.accent}2e, transparent 60%), #100f0e`,
      }}
    >
      <img
        src={project.logo}
        alt={`${project.name} logo`}
        loading="lazy"
        className={`max-w-[70%] object-contain ${
          large ? "max-h-[84px]" : "max-h-[40px] md:max-h-[52px]"
        }`}
      />
      <div
        className={`absolute font-bold uppercase tracking-wider opacity-80 ${
          large ? "bottom-6 left-6 text-sm" : "bottom-4 left-4 text-xs"
        }`}
        style={{ color: project.accent }}
      >
        {project.status}
      </div>
    </div>
  );
}

export default ProjectLogo;
