import * as GlobalContstants from './constants';

/**
  Takes in venue Id as input parameter and returns venue name to be displayed
*/
var getVenue = function(venueId) {
    console.log(venueId);
    switch (venueId) {
        case GlobalContstants.BOARDROOM.FIVE_ONE:
            return GlobalContstants.BOARDROOM_NAME.FIVE_ONE;
        case GlobalContstants.BOARDROOM.FIVE_TWO:
            return GlobalContstants.BOARDROOM_NAME.FIVE_TWO;
        case GlobalContstants.BOARDROOM.THREE_ONE:
            return GlobalContstants.BOARDROOM_NAME.THREE_ONE;
        case GlobalContstants.BOARDROOM.THREE_TWO:
            return GlobalContstants.BOARDROOM_NAME.THREE_TWO;
        case GlobalContstants.BOARDROOM.THREE_THREE:
            return GlobalContstants.BOARDROOM_NAME.THREE_THREE;
        default:
    }
}

exports.getVenue = getVenue;
