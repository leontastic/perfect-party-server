module.exports = () => `
SELECT
  Event.EventId,
  Event.EventName,
  Event.EventDate,
  Event.HostId,
  Event.VenuePrice,
  Venue.Name as VenueName,
  Venue.Address as VenueAddress,
  CONCAT(Host.FirstName, ' ', Host.LastName) AS HostName
FROM Event
INNER JOIN Venue
ON Event.VenueId = Venue.VenueId
LEFT JOIN Host
ON Event.HostId = Host.HostId
ORDER BY EventDate
`
