import { Component } from "react";
import "./App.css";
import HeaderBar from "./components/header-bar/header-bar";
import AppInfo from "./components/app-info/app-info";
import SkillsList from "./components/skills-list/skills-list";
import UsersList from "./components/users-list/users-list";
import AppFilter from "./components/app-filter/app-filter";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "HTML", src: "./assets/images/html.png", id: 1, skills: 90 },
        { name: "CSS", src: "./assets/images/css.png", id: 2, skills: 70},
        { name: "JS", src: "./assets/images/js.png", id: 3, skills: 80 },
        { name: "GIT", src: "./assets/images/git.png", id: 4, skills: 60 },
        { name: "TypeScript", src: "./assets/images/typescript.png", id: 6, skills: 5 },
        { name: "PostgreSQL", src: "./assets/images/postgres.png", id: 7, skills: 10 },
        { name: "React", src: "./assets/images/react.png", id: 8, skills: 55 },
        {
          name: "Алгоритмы и структуры данных",
          src: "./assets/images/algorithms.png",
          id: 9, skills: 20
        },
        { name: "Webpack", src: "./assets/images/webpack.png", id: 10, skills: 20 },
        { name: "NodeJS", src: "./assets/images/nodejs.png", id: 11, skills: 20 },
        { name: "NPM", src: "./assets/images/npm.png", id: 12, skills: 60 },
        { name: "KNEX", src: "./assets/images/knex.png", id: 13, skills: 2 },
        { name: "MobX", src: "./assets/images/mobx-logo.png", id: 14 , skills: 2},
        { name: "MaterialUI", src: "./assets/images/materialUI.png", id: 15, skills: 10 },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <HeaderBar />
        <AppInfo />
        <AppFilter data={data} />
        <UsersList />
      </div>
    );
  }
}

export default App;
