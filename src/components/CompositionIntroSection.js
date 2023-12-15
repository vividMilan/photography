import React from 'react'

const CompositionIntroSection = () => {

    const topics = ["Rule of thirds", "Center composition", "Leading lines"]

  return (
    <section id='intro'>
        <h1>Composition Techniques in <span>Photography</span></h1>
        <p><b>Composition</b> Techniques are guidelines used to place the subject inside the frame. There are many Composition Techniques like Rulu of Thirds, Leading Lines, Negative Space etc.</p>
        <div className="topic-list">
            <p>The main Elements are,</p>
            <br />
            <ul>
            {topics.map((topic) => (
                <li key={topic} className="topic">
                <b>{topic}</b>
                </li>
            ))}
            </ul>
      </div>
      <p>
        Let's see the mentiones Compositions Techniques with examples below.
      </p>
    </section>
  )
}

export default CompositionIntroSection