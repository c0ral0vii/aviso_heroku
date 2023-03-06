import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesAction } from "../../redux/getItems-actions";
import "./articles-page.css";
import "../news-page/news-page.css";

function ArticlesPage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.items.articles);
  React.useEffect(() => {
    document.title = `Статьи`;
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    dispatch(getArticlesAction());
  }, [dispatch]);

  console.log(articles);
  return (
    <div className="articles_page">
      <div
        className="articles_page_title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Статьи</h1>
      </div>
      {articles.length < 1 ? (
        <div
          className="articles_error"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>Статей пока нет.</p>
        </div>
      ) : (
        <div className="pages_content_wrapper">
          {articles[0].map((article) => (
            <div
              key={article.id}
              className="news_post"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="news_post_top article_title">
              <p>{article.title}</p>
              </div>
              <div className="news_post_img">
                <img src={article.img} alt={article.img} />
              </div>
              <div className="news_post_content">
                <p>{article.content}</p>
              </div>
              <div className="default_text">
                <p>Дата публикации {article.time_created.slice(0, 10)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ArticlesPage;
