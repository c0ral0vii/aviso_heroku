import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Articles() {
  const params = useParams();
  const articles = useSelector((state) => state.items.articles)[0];
  const article = articles.find((i) => i.title === params.title);
  React.useEffect(() => {
    document.title = `${article.title}`;
  }, [article]);
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="post_page_wrapper">
      <div
        className="articles_page_title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Статьи</h1>
      </div>
      {!article ? (
        <div
          className="articles_error"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>Ошибка! Невозможно найти статью</p>
        </div>
      ) : (
        <div className="pages_content_wrapper">
          <div
            key={article.id}
            className="news_post"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="news_post_top ">
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
        </div>
      )}
    </div>
  );
}

export default Articles;
