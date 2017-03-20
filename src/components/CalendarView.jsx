import React from 'react';

import Card from './utils/Card';
import CardTitle from './utils/CardTitle';

class CalendarView extends React.Component {

    render() {
        let content = null;

        content = (
            <div className="mdl-grid">

                <Card customClass="mdl-cell mdl-cell--12-col">

                    <CardTitle>
                        <div className="twg-text-with-icon">
                            <i className="material-icons">event</i>
                            Calendar View.
                        </div>
                    </CardTitle>

                </Card>

            </div>
        );

        return content;
    }
}

export default CalendarView;
