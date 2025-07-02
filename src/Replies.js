import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
const Replies = (props) => {
  return (
    <div className="my-1">
      <div className="reply-content">
        <div className="comment-wraper">
          <div className="like-wraper">
            <div
              onClick={() =>
                props.onLike(props.replies.id, "inc", "res", props.parent)
              }
            >
              {" "}
              <img src={plus} alt="" />
            </div>
            <div style={{ color: "hsl(238, 40%, 52%)", fontWeight: 500 }}>
              {props.replies.score}
            </div>
            <div
              onClick={() =>
                props.onLike(props.replies.id, "s", "res", props.parent)
              }
            >
              <img src={minus} alt="" />
            </div>
          </div>
          <div className="content-wraper">
            <div className="top">
              <span className="dp">
                <span className="pic">
                  <img src={props.replies.user.image.png} alt="" />
                </span>
                <b>{props.replies.user.username}</b>
                {props.replies.user.username === props.auth.username && (
                  <span
                    style={{ backgroundColor: "hsl(238, 40%, 52%)" }}
                    className="badge"
                  >
                    you
                  </span>
                )}

                <span className="created">{props.replies.createdAt}</span>
              </span>
              <span
                style={{
                      display: "flex",
                      gap: "0.4rem",
                      alignItems: "center",
                    }}
               className="destop-you">
                {props.replies.user.username === props.auth.username && (
                  <small
                    style={{
                      display: "flex",
                      gap: "0.2rem",
                      alignItems: "center",
                    }}
                    onClick={() => props.onDelete(props.replies.id, "res")}
                    className="del"
                  >
                    <svg
                      width="12"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                        fill="currentColor"
                      />
                    </svg>
                    Delete
                  </small>
                )}

                {props.replies.user.username === props.auth.username ? (
                  <a href="#form">
                    <span
                      style={{
                        display: "flex",
                        gap: "0.2rem",
                        alignItems: "center",
                      }}
                      onClick={() => props.onEdit(props.replies.id)}
                      className="rpy"
                    >
                      <svg
                        width="14"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                          fill="currentColor"
                        />
                      </svg>
                      <small className="s">Edit</small>
                    </span>
                  </a>
                ) : (
                  <a href="#form">
                    <span
                      onClick={() =>
                        props.onReply(props.replies.id, "res", props.parent)
                      }
                      style={{
                        display: "flex",
                        gap: "0.3rem",
                        alignItems: "center",
                      }}
                      className="rpy"
                    >
                      <svg
                        className="s"
                        width="14"
                        height="13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                          fill="currentColor"
                        />
                      </svg>
                      <small className="s">Reply</small>
                    </span>
                  </a>
                )}
              </span>
            </div>
            <div className="comment-body">
              <p>
                {" "}
                <b style={{ color: "hsl(238, 40%, 52%)" }}>
                  @{props.replies.replyingTo}
                </b>{" "}
                {props.replies.content}
              </p>
            </div>
          </div>
          {/* here */}
          <div className="mobile-l-r">
            <div className="mobi-like">
              <div
                onClick={() =>
                  props.onLike(props.replies.id, "inc", "res", props.parent)
                }
              >
                {" "}
                <img src={plus} alt="" />
              </div>
              <div style={{ color: "hsl(238, 40%, 52%)", fontWeight: 500 }}>
                {props.replies.score}
              </div>
              <div
                onClick={() =>
                  props.onLike(props.replies.id, "s", "res", props.parent)
                }
              >
                <img src={minus} alt="" />
              </div>
            </div>

            <span className="mobile-rpy">
              {props.auth.username === props.replies.user.username && (
                <span
                  style={{
                    display: "flex",
                    gap: "0.3rem",
                    alignItems: "center",
                  }}
                  onClick={() => props.onDelete(props.replies.id, "res")}
                  className="del"
                >
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                      fill="currentColor"
                    />
                  </svg>
                  Delete
                </span>
              )}
              {props.auth.username === props.replies.user.username ? (
                <a href="#form">
                  {" "}
                  <span
                    onClick={() => props.onEdit(props.replies.id)}
                    className="rpy"
                  >
                    <svg
                      width="14"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                        fill="currentColor"
                      />
                    </svg>
                    <small className="s">Edit</small>
                  </span>
                </a>
              ) : (
                <a href="#form">
                  <span
                    onClick={() =>
                      props.onReply(props.replies.id, "res", props.parent)
                    }
                    className="rpy"
                  >
                    <svg
                      className="s"
                      width="14"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                        fill="currentColor"
                      />
                    </svg>
                    <small className="s">Reply</small>
                  </span>
                </a>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Replies;
