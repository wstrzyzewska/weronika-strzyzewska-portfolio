import React, {useState} from "react";
import Icon from "../icons/icons";

function Experience() {
    const [state, setState] = useState(0);

    const action = (index) => {
        setState(index);
    }

  return (
    <section id="experience" className="experience">
        <div className="card">
            <div className="card__tabs">
                <div onClick={() => action(0)} className={`${state===0 ? "tab active-tab" : "tab"}`}>
                    Bitcoin Technologies
                </div>
                <div onClick={() => action(1)} className={`${state===1 ? "tab active-tab" : "tab"}`}>
                    Sii - German Electronic Company
                </div>
                <div onClick={() => action(2)} className={`${state===2 ? "tab active-tab" : "tab"}`}>
                    Sii - German Clothing Company
                </div>
                <div onClick={() => action(3)} className={`${state===3 ? "tab active-tab" : "tab"}`}>
                    Sii - Spanish Clothing Company
                </div>
            </div>
            <div className="card__contents">
                <div className={`${state===0 ? "content active-content" : "content"}`}>
                    <span className="date">2022 - present</span>
                    <span className="details">Developing cryptocurrency exchanges website using Angular 15, Angular 16, Typescript,
                        Sass, NgRx, RxJS</span>
                    <div className="grid">

                    </div>
                    <ul>
                        <li><Icon type="Star"/>Successfully updating the technology stack of the website,
                            migrating it to modern versions of frameworks,
                            e.g. from Angular 15 to Angular 16, resulting in improved performance,
                            maintainability and scalability.</li>
                        <li><Icon type="Star"/>Processed and implemented new UI/UX solutions to enhance the user experience and
                            increase visibility on the website, e.g. making trade view chart bigger by 20% for easier
                            usage without decreasing visibility of other elements.</li>
                        <li><Icon type="Star"/>Conducted in-depth research and analysis of competitor websites to identify areas for
                            improvement. Leveraged the finding to propose and implement innovative features,
                             such as integrating a trade view chart with the ability to draw on the chart and save
                            these drawing, providing traders with enhanced tools for technical analysis.</li>
                    </ul>
                </div>
                <div className={`${state===1 ? "content active-content" : "content"}`}>
                    <span className="date">2021 - 2022</span>
                    <span className="details">Worked on Cockpit Panel for German's electronic devices using Angular 13, AngularJS,
                        Javascript, Typescript, Sass, Jasmine, Karma</span>
                </div>
                <div className={`${state===2 ? "content active-content" : "content"}`}>
                    <span className="date">2021 - 2022</span>
                    <span className="details">Developed Labels & Packaging website for German using Angular 13, Typescript, Storybook, Sass,
                        Jest, NGXS</span>
                </div>
                <div className={`${state===3 ? "content active-content" : "content"}`}>
                    <span className="date">2021 - 2022</span>
                    <span className="details">Created sales dashboards for Spanish using React, Typescript, Sass, Jest,
                        react-testing-library, Redux</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;
