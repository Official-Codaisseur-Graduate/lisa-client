import React from 'react';
import './Menu.css';

import Calendar from 'react-calendar';
import DishPicker from '../DishPicker';
import DishForm from '../DishForm';
import TypeForm from '../TypeForm';
import MenuDisplay from '../MenuDisplay';

function Menu(props) {
	const { changeDate } = props;
	return (
		<div className="Menu">
			<div className="menuEditor">
				<div className="sideBar">
					<div className="Calendar">
						<Calendar
							locale="nl-NL"
							onClickDay={(date) =>
								props.changeDate(date)}
						/>
					</div>
					<DishPicker />
					<DishForm />
					<TypeForm />
				</div>
				<MenuDisplay />
			</div>
		</div>
	);
}

export default Menu;
