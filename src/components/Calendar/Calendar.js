import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchData from '../../service/FetchData';
import Main from '../Main/Main';
import './calendar.css';

const Calendar = () => {
    const fetchData = new FetchData();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData.getLaunches().then((launches) => setData(launches));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Main />
            <section className="calendar">
                <div className="container">
                    <ul className="calendar-list">
                        {/* создаем элементы */}
                        {data.map((item) => {
                            return (
                                <li key={item.id} className="calendar-item">
                                    <article className="launches">
                                        <div className="launches-image">
                                            <img
                                                src={item.links.patch.small}
                                                alt=""
                                            />
                                        </div>
                                        <div className="launches-content">
                                            <h2 className="launches-title">
                                                {item.name}
                                            </h2>
                                            <Link
                                                to="./details"
                                                className="button launches-details"
                                            >
                                                Подробнее
                                            </Link>
                                        </div>
                                    </article>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Calendar;
