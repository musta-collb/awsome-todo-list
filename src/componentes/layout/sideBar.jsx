import React, { PureComponent } from 'react';
import {
	FaChevronDown,
	FaInbox,
	FaRegCalendarAlt,
	FaRegCalendar,
} from 'react-icons/fa';

export const SideBar = () => {
	return (
		<div className='sideBar' data-testid='sidebar'>
			<ul className='sidebar-generic'>
				<li>
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li>
					<span>
						<FaRegCalendar />
					</span>
					<span>Today</span>
				</li>
				<li>
					<span>
						<FaRegCalendarAlt />
					</span>
					<span>Next 7 days</span>
				</li>
			</ul>
			<div className='sideBar-middel'>
				<span>
					<FaChevronDown />
				</span>
				<h1>Projects</h1>
			</div>
			<ul>
				<p>Projects will be here</p>
			</ul>
            Add project componentes!
		</div>
	);
};
