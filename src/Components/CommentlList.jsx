const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment._id} className="bg-dark text-white rounded-3 p-3 mb-3 shadow-sm border border-secondary">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className="mb-0 fw-semibold text-info">{comment.author}</p>
            <small className="text-white">{new Date(comment.createdAt).toLocaleDateString("it-IT", {})}</small>
          </div>

          <p className="mb-2">{comment.comment}</p>

          <div>
            <span className="fw-semibold text-warning">Voto:</span> {"⭐".repeat(comment.rate)} <small className="text-muted">({comment.rate}/5)</small>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentList;
