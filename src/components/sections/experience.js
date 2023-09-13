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
                    <div className="grid1">
                            <div className="icon1"><Icon type="Star"/></div>
                            <div className="icon2"><Icon type="Star"/></div>
                            <div className="icon3"><Icon type="Star"/></div>
                        <div className="icon4"><Icon type="Star"/></div>

                        <div className="content1">Successfully updating the technology stack of the website,
                                migrating it to modern versions of frameworks,
                                e.g. from Angular 15 to Angular 16, resulting in improved performance,
                                maintainability and scalability.</div>
                            <div className="content2">Processing and implementing new UI/UX solutions to enhance the user experience and
                                increase visibility on the website, e.g. making trade view chart bigger by 20% for easier
                                usage without decreasing visibility of other elements.</div>
                        <div className="content3">
                            Integrating front-end components with back-end systems, APIs, and databases to enable
                            seamless data flow and functionality.
                        </div>
                            <div className="content4">Conducting in-depth research and analysis of competitor websites to identify areas for
                                improvement. Leveraging the finding to propose and implement innovative features,
                                such as integrating a trade view chart with the ability to draw on the chart and save
                                these drawing, providing traders with enhanced tools for technical analysis.</div>

                    </div>
                </div>
                <div className={`${state===1 ? "content active-content" : "content"}`}>
                    <span className="date">2021 - 2022</span>
                    <span className="details">Worked on Cockpit Panel for German's electronic devices using Angular 13, AngularJS,
                        Javascript, Typescript, Sass, Jasmine, Karma</span>
                    <div className="grid2">
                        <div className="icon1"><Icon type="Star"/></div>
                        <div className="icon2"><Icon type="Star"/></div>
                        <div className="icon3"><Icon type="Star"/></div>
                        <div className="icon4"><Icon type="Star"/></div>

                        <div className="content1">Migrated legacy AngularJS application to Angular13, resulting in a
                            30% reduction in page load time, leading to improved user experience and faster
                            interaction with the application. </div>
                        <div className="content2">Implemented responsive web design principles and maintained
                            accessibility standards to provide inclusive user experiences.</div>
                        <div className="content3">
                            Developed and integrated microphone functionalities into the application, enabling users
                            to capture high-quality audio recording directly within the application.
                        </div>
                        <div className="content4">Used Jira and Azure Portal to evaluate work and take care of
                            proper workflow.</div>

                    </div>
                </div>
                <div className={`${state===2 ? "content active-content" : "content"}`}>
                    <span className="date">2021 - 2022</span>
                    <span className="details">Developed Labels & Packaging website for German using Angular 13, Typescript, Storybook, Sass,
                        Jest, NGXS</span>
                    <div className="grid2">
                        <div className="icon1"><Icon type="Star"/></div>
                        <div className="icon2"><Icon type="Star"/></div>
                        <div className="icon3"><Icon type="Star"/></div>
                        <div className="icon4"><Icon type="Star"/></div>

                        <div className="content1">Attained 80% code coverage through extensive unit testing, resulting
                            in improved code quality and reducing the likelihood of regressions during development cycles.  </div>
                        <div className="content2">Developed high-quality software solutions, ensuring adherence to best practices and delivering optimal user experiences.</div>
                        <div className="content3">
                            Created responsive page for mobiles and desktops.
                        </div>
                        <div className="content4">Collaborated with teammates and updating application versions using Git.</div>

                    </div>
                </div>
                <div className={`${state===3 ? "content active-content" : "content"}`}>
                    <span className="date">2021 - 2022</span>
                    <span className="details">Created sales dashboards for Spanish using React, Typescript, Sass, Jest,
                        react-testing-library, Redux</span>
                    <div className="grid2">
                        <div className="icon1"><Icon type="Star"/></div>
                        <div className="icon2"><Icon type="Star"/></div>
                        <div className="icon3"><Icon type="Star"/></div>
                        <div className="icon4"><Icon type="Star"/></div>

                        <div className="content1">Developed a feature-rich dashboard initially designed for Black Friday
                            sales, which garnered such positive feedback that the client decided to retain it as a
                            permanent offering. </div>
                        <div className="content2">Debugged code in ChromeDevTools with ReduxDevTools.</div>
                        <div className="content3">
                            Achieved a 20% reduction in latency and improved the speed of sending metrics data by
                            implementing efficient solutions.
                        </div>
                        <div className="content4">Worked in Agile environments in multilingual teams.</div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;
