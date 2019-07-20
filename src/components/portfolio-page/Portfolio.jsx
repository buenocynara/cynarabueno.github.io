import React, { Component } from "react";
import simLogo from "../single_logo.png";
import s from "./Portfolio.module.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { portfolio: true };
  }

  render() {
    if (this.state.portfolio) {
      return (
        <div className={s.portfolioContainer}>
          <div
            onClick={() => this.setState({ portfolio: false })}
            className={s.switchButton}
          >
            <p className={s.toggleText}>{this.props.portfolio.serviceToggle}</p>
          </div>
          <h1>{this.props.portfolio.portTitle}</h1>
          <div className={s.portItems}>
            {this.props.portfolio.portfolioSet.map((item, index) => {
              if (index % 2) {
                return (
                  <div id={index} className={s.portCard}>
                    <div className={s.portTitle}>
                      <img
                        src={simLogo}
                        alt="single-logo"
                        className="singleLogo"
                      />
                      <h4>{item.title}</h4>
                    </div>
                    <div className={s.portContent}>{item.content}</div>
                    <img
                      src={item.image}
                      alt="portfolio"
                      className={s.portImage}
                    />
                  </div>
                );
              }
              return (
                <div id={index} className={s.portCard}>
                  <img
                    src={item.image}
                    alt="portfolio"
                    className={s.portImage}
                  />
                  <div className={s.portTitle}>
                    <img
                      src={simLogo}
                      alt="single-logo"
                      className="singleLogo"
                    />
                    <h4>{item.title}</h4>
                  </div>
                  <div className={s.portContent}>{item.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <div className={s.portfolioContainer}>
        <div
          onClick={() => this.setState({ portfolio: true })}
          className={s.switchButton}
        >
          <p className={s.toggleText}>{this.props.portfolio.portToggle}</p>
        </div>
        <h1>{this.props.portfolio.serviceTitle}</h1>
        <div className={s.portItems}>
          {this.props.portfolio.servicesSet.map((item, index) => {
            if (index % 2) {
              return (
                <div id={index} className={s.portCard}>
                  <div className={s.portTitle}>
                    <h4>{item.title}</h4>
                  </div>
                  <div className={s.portContent}>{item.content}</div>
                  <img
                    src={item.image}
                    alt="portfolio"
                    className={s.portImage}
                  />
                </div>
              );
            }
            return (
              <div id={index} className={s.portCard}>
                <img src={item.image} alt="portfolio" className={s.portImage} />
                <div className={s.portTitle}>
                  <h4>{item.title}</h4>
                </div>
                <div className={s.portContent}>{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;