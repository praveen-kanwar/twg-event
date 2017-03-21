import React from 'react';
import moment from 'moment';

import Card from './utils/Card';
import CardTitle from './utils/CardTitle';

class NewEvent extends React.Component {

    render() {
        let content = null;

        content = (
            <div className="mdl-grid">

                <Card customClass="mdl-cell mdl-cell--12-col">

                    <CardTitle>
                        <div className="twg-text-with-icon">
                            <i className="material-icons">add</i>
                            Create New Event.
                        </div>
                    </CardTitle>

                </Card>

            </div>
        );

        return content;
    }
}

export default NewEvent;
