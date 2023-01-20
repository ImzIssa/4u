const Poem = ({ title, author, body, image }) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="photo" />
      </div>
      <div className="poem">
        <p className="title">{title}</p>
        <p className="text">
          {body.split("\n").map((val, i) => (
            <span key={i}>
              {val}
              <br />
            </span>
          ))}
        </p>
        <h4 className="author">{author}</h4>
      </div>
    </article>
  );
};

export default Poem;
