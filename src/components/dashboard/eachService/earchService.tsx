import "./eachService.scss";

type TProps = {
  title: string;
  descr: string;
  price: string;
  duration: string;
  createdAt: string;
};

const EachService = (props: TProps) => {
  return (
    <div className="each-service">
      <div className="each-service-content">
        <div className="texts">
          <div className="about-service">
            <p>{props.title}</p>
            <p>{props.descr}</p>
          </div>
          <div className="more-each">
            <p className="price">Cтоимость: {props.price} ₸</p>
            <p className="duration">Длительность: {props.duration}</p>
            <button className="more-btn">More</button>
          </div>
        </div>
        <p className="created-at">Создан в: {props.createdAt}</p>
      </div>
    </div>
  );
};

export default EachService;
