import React from "react"
import loadable from "@loadable/component"
import "./Skills.scss"

const SkillBar = loadable(() => import("react-skills-bars"))

export default function Skills(props) {
  const { skills } = props

  return (
    <div className="list-skills">
      <SkillBar
        skills={skills}
        colors = {{
          "bar": "#3498db",
          "title": {
            "text": {
              "hue": 45,
              "saturation": {
                "minimum": 30,
                "maximum": 70
              },
              "level": 50
            },
            "background": {
              "hue": 30,
              "saturation": {
                "minimum": 30,
                "maximum": 70
              },
              "level": {
                "minimum": 0,
                "maximum": 50
              }
            }}}}
          height={'4vh'}
        animationDelay={0}
        animationDuration={1000}
      />
    </div>
  )
}
