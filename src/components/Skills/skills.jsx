import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-heading">
        <span className="skills-heading-text">My Skills</span>
        <span className="skills-subheading">My Knowledge Base</span>
      </div>
      <div className="skills-tables">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th className="table-head" colSpan="2">Frontend Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="big-text">HTML</span>
                  <br />
                  <span className="small-text">Intermediate</span>
                </td>
                <td>
                  <span className="big-text">CSS</span>
                  <br />
                  <span className="small-text">Intermediate</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="big-text">Git</span>
                  <br />
                  <span className="small-text">Basics</span>
                </td>
                <td>
                  <span className="big-text">Javascript</span>
                  <br />
                  <span className="small-text">Basics</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="big-text">React</span>
                  <br />
                  <span className="small-text">Intermediate</span>
                </td>
                <td>
                  <span className="big-text">Next.js</span>
                  <br />
                  <span className="small-text">Basics</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th className="table-head" colSpan="2">Backend Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="big-text">MySQL</span>
                  <br />
                  <span className="small-text">Basics</span>
                </td>
                <td></td>
              </tr>
              <tr>
              <td></td>
              <td></td>
              </tr>
              <tr>
              <td></td>
              <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
