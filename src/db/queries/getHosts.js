module.exports = () => `
SELECT
  Host.HostId,
  Host.FirstName,
  Host.LastName,
  Host.PhoneNumber,
  Host.Email,
  COUNT(Event.EventId) AS EventCount
FROM Host
LEFT JOIN Event
ON Host.HostId = Event.HostId
GROUP BY Host.HostId
ORDER BY Host.HostId
;`
