import React from "react"
import loadable from "@loadable/component"
import "./Skills.scss"

const SkillBar = loadable(() => import("react-skills-bars"))

export default function Skills(props) {
  const { skills, colors } = props

  return (
    <div className="list-skills">
      <SkillBar
        skills={skills}
        colors = {{
          "bar": {
            "hue": 32,
            "saturation": 50,
            "level": {
              "minimum": 30,
              "maximum": 70
            }
          },
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
          height={'15vh'}
        animationDelay={0}
        animationDuration={3500}
      />
    </div>
  )
}
