import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {
    const [value, setValue] = React.useState('recents');
    const [isAdded, setIsAdded] = React.useState(false)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleIsAdded = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className="container_todosApp">
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="recents"
                    icon={<HomeIcon />}
                    disabled={isAdded}
                />
                <div className="close_add">
                    <BottomNavigationAction
                        value="add"
                        onClick={handleIsAdded}
                        icon={isAdded ? <CloseIcon /> : <AddCircleIcon />}
                    />
                </div>
                <BottomNavigationAction
                    label="Calendar"
                    value="calendar"
                    icon={<CalendarMonthIcon />}
                    disabled={isAdded}
                />
            </BottomNavigation>
        </div>
    );
}