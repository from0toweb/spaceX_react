import React from 'react';
import './footer.css';
import logo from '../../logo.svg';

const Footer = ({ company }) => {
    if (company) {
        return (
            <footer className="footer">
                <img src={logo} alt="logo Space X" className="logo" />
                <nav className="footer-nav">
                    <ul className="list">
                        <li className="item">
                            <a
                                href={
                                    company ? company.links.elon_twitter : '/'
                                }
                                rel="noopener noreferrer"
                                target="_blank"
                                className="item-link"
                            >
                                Elon Musk Twitter
                            </a>
                        </li>
                        <li className="item">
                            <a
                                href={company ? company.links.twitter : '/'}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="item-link"
                            >
                                Twitter
                            </a>
                        </li>
                        <li className="item">
                            <a
                                href={company ? company.links.flickr : '/'}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="item-link"
                            >
                                Flickr
                            </a>
                        </li>
                        <li className="item">
                            <a
                                href={company ? company.links.website : '/'}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="item-link"
                            >
                                Website
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className="footer-text">
                    For additional questions, contact
                    <a
                        className="footer-link"
                        href="mailto:rideshare@spacex.com"
                    >
                        rideshare@spacex.com
                    </a>
                </p>
                <span className="footer-adress">
                    {`${company.headquarters.address} ${company.headquarters.city} ${company.headquarters.state}`}
                </span>
            </footer>
        );
    } else {
        return null;
    }
};
export default Footer;
