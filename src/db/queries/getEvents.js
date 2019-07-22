module.exports = () => `
SELECT
  Event.EventId,
  Event.EventName,
  TO_CHAR(Event.EventDate, 'YYYY-MM-DD') as EventDate,
  Event.HostId,
  Event.VenueId,
  Event.VenuePrice,
  Venue.Name as VenueName,
  Venue.Address as VenueAddress,
  CONCAT(Host.FirstName, ' ', Host.LastName) AS HostName
FROM Event
INNER JOIN Venue
ON Event.VenueId = Venue.VenueId
INNER JOIN Host
ON Event.HostId = Host.HostId
ORDER BY EventDate
`
