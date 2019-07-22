module.exports = () => `
SELECT
  Event.EventId,
  Event.EventName,
  TO_CHAR(Event.EventDate, 'YYYY-MM-DD') as EventDate,
  Event.HostId,
  CONCAT(Host.FirstName, ' ', Host.LastName) AS HostName,
  Event.VenueId,
  Venue.Name as VenueName,
  Venue.Address as VenueAddress,
  Event.VenuePrice,
  OrderTotals.Total AS OrderTotal,
  OrderTotals.Total + Event.VenuePrice AS Total
FROM Event
INNER JOIN Venue
ON Event.VenueId = Venue.VenueId
INNER JOIN Host
ON Event.HostId = Host.HostId
LEFT JOIN (
  SELECT EventId, SUM(Quantity * Price) AS Total
  FROM Orders
  GROUP BY EventId
) AS OrderTotals
ON OrderTotals.EventId = Event.EventId
ORDER BY EventDate
;`
