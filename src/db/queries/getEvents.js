module.exports = () => `
SELECT
  EventId,
  EventName,
  EventDate,
  HostId,
  Venue.Name as VenueName,
  VenuePrice
FROM Event
INNER JOIN Venue
ON Event.VenueId = Venue.VenueId
ORDER BY EventDate
;`
