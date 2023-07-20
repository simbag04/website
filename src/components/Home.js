import '../styles/Home.css'

const Home = (props) => {
    return (
        <div className="home"
            style={{height: `calc(100vh - ${props.headerHeight}px + 5px)`}}>
            <div>Hi, I'm Simran Bagaria</div>
        </div>
    )
}

export default Home