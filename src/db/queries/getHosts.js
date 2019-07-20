module.exports = () => `
SELECT
  Host.HostId,
  Host.FirstName,
  Host.PhoneNumber,
  Host.Email,
  HostEventCount.EventCount
FROM Host
LEFT JOIN (
  SELECT HostId, COUNT(EventId) AS EventCount
  FROM Event
  GROUP BY HostId
) HostEventCount
ON Host.HostId = HostEventCount.HostId;
`
