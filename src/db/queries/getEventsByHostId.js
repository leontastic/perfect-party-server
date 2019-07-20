module.exports = (hostId) => `
SELECT
  Event.EventId,
  Event.EventName,
  Event.HostId,
  Host.FirstName as HostName,
  Host.Email as HostEmail,
  Host.PhoneNumber as HostPhoneNumber
FROM Event
LEFT JOIN Host
ON Event.HostId = Host.HostId
WHERE Event.HostId = '${hostId}';
`
