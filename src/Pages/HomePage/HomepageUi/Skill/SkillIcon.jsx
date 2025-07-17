// Reusable component for skillicons.dev icons
function SkillIcon({ skill, size = "64" }) {
  return (
    <img
      src={`https://skillicons.dev/icons?i=${skill}`}
      alt={skill}
      width={size}
      height={size}
      className="skill-icon"
    />
  );
}

export default SkillIcon;
