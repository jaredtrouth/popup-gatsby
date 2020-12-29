import React from 'react';
import { convertPrice } from '@helpers';

const MenuItem = ({ title, description, price }) => (
	<div className="menu-item-wrapper">
		<div className="menu-item-left">
			<div className="title">{title}</div>
			<div className="description">{description}</div>
		</div>
		<div className="menu-item-right">{convertPrice(price)}</div>
	</div>
);

const MenuSectionPreview = ({ entry, widgetsFor }) => {
  // console.log(entry.getIn(['data'],['items']));
  const items = widgetsFor('items').map(i => {
    return {
      title: i.getIn(['data', 'title']),
      description: i.getIn(['data', 'description']),
      price: i.getIn(['data', 'price']),
    };
  });

  return (
		<div className="menu-preview">
			<h1>{entry.getIn(["data", "title"])}</h1>
			<div className="section">
				{items.map((i) => (
					<MenuItem {...i} key={i.title} />
				))}
			</div>
		</div>
	);
};

export default MenuSectionPreview;
