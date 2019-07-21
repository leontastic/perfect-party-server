module.exports = () => `
SELECT
  Venue.VenueId,
  Venue.Name,
  Venue.Address,
  Venue.Price,
  COUNT(Event.EventId) AS EventCount
FROM Venue
LEFT JOIN Event
ON Venue.VenueId = Event.VenueId
GROUP BY Venue.VenueId
ORDER BY Venue.Name
`
