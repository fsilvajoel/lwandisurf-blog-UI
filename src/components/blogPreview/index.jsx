import React, { useEffect, useState } from "react";
import PostPreview from "../../components/postPreview";
import useTranslation from "../../i18n/translator"
import { getPosts } from "../../api/api.js";

function BlogPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(true).then((payload) => {
      setPosts(payload);
    });
  }, []);

  return (
    <div id="fh5co-blog-section" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>{ useTranslation("home.BlogSection.title") }</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-bottom-padded-md">
          {posts.map((post) => {
            return (
              <PostPreview
                slug={post.slug}
                key={post.id}
                id={post.id}
                title={post.title}
                image={post.cover}
                content={post.content}
              />
            );
          })}

          <div className="clearfix visible-md-block"></div>
        </div>

        <div className="row">
          <div className="col-md-4 col-md-offset-4 text-center animate-box">
            <a href="/blog" className="btn btn-primary btn-lg" title="Blog">
              {" "}
              { useTranslation("home.BlogSection.buttonTxt") }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPreview;
