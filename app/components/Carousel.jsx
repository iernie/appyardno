import React from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.children.length * 100,
      left: 0
    };
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.onDotClick = this.onDotClick.bind(this);
  }

  onLeftClick() {
    this.setState({
      left: this.state.left === 0 ? (this.props.children.length - 1) * -100 : Math.min(this.state.left + 100, 0)
    });
  }

  onRightClick() {
    this.setState({
      left: this.state.left === (this.props.children.length - 1) * -100 ? 0 : Math.max(this.state.left - 100, (this.props.children.length - 1) * -100)
    });
  }

  onDotClick(left) {
    return () => {
      this.setState({
        left
      });
    };
  }

  render() {
    const { children } = this.props;
    const items = [];
    const dots = [];
    const itemStyle = {
      width: `${100 / children.length}%`
    };

    React.Children.forEach(children, (child, key) => {
      const active = this.state.left === key * -100;
      items.push(<li className="Carousel-list-item" role="option" style={itemStyle} key={key} tabIndex={active ? 0 : -1}>{child}</li>);
      const dotsStyle = classNames({
        'Carousel-dots-item': true,
        'Carousel-dots-item--active': active
      });
      dots.push(<li className="Carousel-dots-item-container" key={key}>
        <button className={dotsStyle}
          role="tab"
          onClick={this.onDotClick(key * -100)}
          aria-selected={active} />
      </li>);
    });
    const style = {
      width: `${this.state.width}%`,
      left: `${this.state.left}%`
    };
    return (<div className="Carousel">
      <div className="Carousel-container-container">
        <div className="Carousel-container" aria-live="polite">
          <ul className="Carousel-list" role="listbox" tabIndex="0" style={style}>
            {items}
          </ul>
        </div>
        <button className="Carousel-buttons Carousel-buttons-left" onClick={this.onLeftClick} aria-label="Forrige">
          <FontAwesome className="Carousel-buttons-left-content" name="angle-left" size="2x" />
        </button>
        <button className="Carousel-buttons Carousel-buttons-right" onClick={this.onRightClick} aria-label="Neste">
          <FontAwesome className="Carousel-buttons-right-content" name="angle-right" size="2x" />
        </button>
      </div>
      <ul className="Carousel-dots" role="tablist">
        {dots}
      </ul>
    </div>);
  }
}

Carousel.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

export default Carousel;
