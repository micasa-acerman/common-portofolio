import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Tag from '../Tag';

import { parseImgur } from '../../api/images';

import './index.scss';

const imageStyle = (headerImage, color) => ({
  // backgroundColor: `${!color.length?'black':'false',typeof(color)}`,
  backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
  backgroundSize: 'cover'
});

const CardHeader = ({ url, image, backgroundColor,date }) => (
  <Link to={url} href={url}>
    <span className="date">{date}</span>
    <div className="wrapper" style={imageStyle(image, backgroundColor)} />
  </Link>
);

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  tags = [],
}) => (
  <div className="col-sm-12 col-md-6 pb-4">
    <div className="custom-card">
      {headerImage && (
        <CardHeader
          url={url}
          image={headerImage}
          backgroundColor={headerBackgroundColor}
          date={date.split('T')[0]}
        />
      )}
      <div className="data">
        <div className="content">
          <div className="stats">
            {tags.map(name => (
              <Tag name={name} key={name} />
            ))}
          </div>
          <Link to={url} href={url}>
            <h4 className="title glitch" data-text={title}>{title}</h4>
          </Link>
          <p>{description}</p>
          <Link to={url} href={url}>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.propTypes = Card.propTypes;

Card.defaultProps = {
  headerImage: '',
  tags: [],
  date: '',
  headerBackgroundColor: '',
};

export default Card;
