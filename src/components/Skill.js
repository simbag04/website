export const Skill = ({ name, img }) => {
  return (
    <div className="skill">
      <img src={img}></img>
      <div className="skill-name">{name}</div>
    </div>
  )
}