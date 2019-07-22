module.exports = ({ eventname, eventdate, hostid, venueid }) => `
INSERT INTO Event (EventName, EventDate, HostId, VenueId, VenuePrice)
SELECT
  '${eventname}',
  '${eventdate}',
  ${hostid},
  ${venueid},
  Venue.Price
FROM Venue
WHERE Venue.VenueId = ${venueid}
`
