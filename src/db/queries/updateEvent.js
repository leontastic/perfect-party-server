module.exports = (eventid, { eventname, eventdate, hostid, venueid }) => `
UPDATE Event
SET
  EventName = '${eventname}',
  EventDate = '${eventdate}',
  HostId = ${hostid},
  VenueId = ${venueid},
  VenuePrice = NewVenuePrice.Price
FROM (
  SELECT CASE WHEN COUNT(1) > 0
  THEN (SELECT Venue.Price FROM Venue WHERE Venue.VenueId = ${venueid})
  ELSE (SELECT Event.VenuePrice as Price FROM Event WHERE Event.EventId = ${eventid})
  END FROM (
    SELECT Event.VenueId FROM Event
    WHERE Event.EventId = ${eventid}
    AND Event.VenueId != ${venueid}
  ) AS OldVenue
) AS NewVenuePrice
WHERE
  EventId = ${eventid}
;`
