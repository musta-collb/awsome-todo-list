import userEvent from '@testing-library/user-event';
import React, { PureComponent } from 'react';
import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const useTasks = () => {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
        let unsubscribe = firestore().collection('tasks').where('userId', ==, 'L3wCtOSA1K4B6zM6bd1F')
    }, []);
};
