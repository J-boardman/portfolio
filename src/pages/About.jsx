export default () => {
    return (
    <section>
      {/* <p>
        <span className="const">thisPortfolio</span>.
        <span className="function">purpose</span> =
        <span className="function"> ()</span>
        <span className="const"> =&gt;</span>
      </p> */}
      <article id="about">
        <h1>
          <span className="const">const </span>
          <span className="parameter">myName</span> = 
          <br className="breaker" />
          <span className="string"> "Jayde Boardman"</span>; 
        </h1>
        <div>

          <p>
            <span className="const">const </span>  
            <span className="parameter">profession</span> =
            <br className="mobile-breaker"/>
            <span className="string"> "Full Stack Developer"</span>;
          </p>
        </div>
        <div>
        <p className="comment">// Click the project tab above</p>
        <p className="comment">// to see my current work!</p>
        </div>
      </article>
    </section>
  )
};

const seeProjects = () => {
  return console.log("Click here to see projects")
  // Alternatively, click the projects tab above
}