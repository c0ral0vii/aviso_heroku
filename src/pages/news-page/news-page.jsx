import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./news-page.css";
import { getNewsAction } from "../../redux/getItems-actions";

function NewsPage() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.items.news);
  React.useEffect(() => {
    document.title = `Новости`;
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    dispatch(getNewsAction());
  }, [dispatch]);

  return (
    <div className="news_page">
      <div
        className="news_page_title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Новости</h1>
      </div>
      {news.length < 1 ? (
        <div className="news_error">
          <p data-aos="fade-up" data-aos-duration="1000">
            Новостей пока нет.
          </p>
        </div>
      ) : (
        <div className="news_content">
          <div className="pages_content_wrapper">
            {news[0].map((newsItem) => (
              <div
                key={newsItem.id}
                className="news_post"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="news_post_top">
                  <p>{newsItem.title}</p>
                </div>
                <div className="news_post_img">
                  <img src={newsItem.img} alt={newsItem.img} />
                </div>
                <div className="news_post_content">
                  <p>{newsItem.content}</p>
                </div>
                <div className="default_text">
                  <p>С Уважением, Aviso</p>
                  <p>{newsItem.time_created.slice(0, 10)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsPage;
