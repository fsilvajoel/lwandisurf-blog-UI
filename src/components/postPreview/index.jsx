import React from "react";
import { Link } from "react-router-dom";
function PostPreview({ slug, title, image, content }) {
  content = content.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="fh5co-blog animate-box">
        <Link
          to={{
            pathname: `/blog/${slug}`,
          }}
        >
          <img
            className="img-responsive"
            src={image}
            alt={title}
            title={title}
          />
        </Link>
        <div className="blog-text">
          <div className="prod-title">
            <h3>
              <Link
                to={{
                  pathname: `/blog/${slug}`,
                }}
              >
                {title}
              </Link>
            </h3>
            <p>{content.substring(0, 150)}...</p>
            <p>
              <Link
                to={{
                  pathname: `/blog/${slug}`,
                }}
              >
                Leia mais...
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
