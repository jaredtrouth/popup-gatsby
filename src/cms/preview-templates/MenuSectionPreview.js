import React from 'react';
import styled from 'styled-components';
import { MenuItem } from "@components/Menu";

const StyledMenuHeader = styled.div`
	display: flex;
	flex: 100%;

	.outside-border {
		display: flex;
    justify-content: center;
		width: 100%;
		border-top: 15px solid var(--yellow);
	}

	.header {
		display: flex;
    justify-content: center;
		width: 100%;
		border-top: 7px double var(--red);
		border-bottom: 7px double var(--red);

		h3 {
			margin: 0;
			padding: 0 5px;
			text-align: center;
			align: center;
		}
	}
`;

const StyledMenuSection = styled.div`
	
`;

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
