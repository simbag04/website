import Project from "./Project"
import Steps from '../images/3-steps.png'
import Blog from '../images/blog.png'
import '../styles/Project.css'
import { useRef, useEffect } from 'react'

const Projects = (props) => {
    const ref = useRef();

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.target === element) {
                    props.setProjectsStart(ref.current.offsetTop);
                }
            }
        });

        resizeObserver.observe(element);

        return () => {
            resizeObserver.unobserve(element);
            resizeObserver.disconnect();
        };
    }, [props, props.setProjectsStart, ref]);

    return (
        <div className="projects section" ref={ref}>
            <div className="title">Projects</div>
            <ul>
                <li><Project title="3 Steps (in progress)"
                    img={Steps}
                    description="A comprehensive calculus learning platform featuring content for students to learn, unlimited practice problems, and timely reviews of material."
                    technologies="MongoDB, Express.js, React.js, Node.js, REST API, d3.js"
                    site="https://simbag04.github.io/3-steps-client"
                    repo="https://github.com/simbag04/3-steps-client">
                </Project></li>
                <li><Project title="Blog"
                    img={Blog}
                    description="A full-stack Blog application which allows users to view and comment on blog posts, as well as create, edit, and delete their own posts"
                    technologies="MongoDB, Express.js, React.js, Node.js, REST API"
                    site="https://simbag04.github.io/blog-client/"
                    repo="https://github.com/simbag04/blog-client">
                </Project></li>
            </ul>
        </div>
    )
}

export default Projects