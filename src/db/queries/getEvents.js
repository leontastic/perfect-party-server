module.exports = () => `
SELECT
  EventId,
  EventName,
  EventDate,
  Event.HostId,
  Venue.Name as VenueName,
  VenuePrice,
  CONCAT(Host.FirstName, ' ', Host.LastName) AS HostName
FROM Event
INNER JOIN Venue
ON Event.VenueId = Venue.VenueId
LEFT JOIN Host
ON Event.HostId = Host.HostId
ORDER BY EventDate
;`
