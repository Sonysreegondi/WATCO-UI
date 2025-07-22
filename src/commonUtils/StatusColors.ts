export function StatusColor(d: any) {
  const value = (d || "").toString().toLowerCase();

  if (["accepted", "requested"].includes(value)) {
    return "bg-blue-300";
  } else if (
    ["pending", "inactive", "unpaid", "terminated"].includes(value)
  ) {
    return "bg-red-300";
  } else if (["in progress", "scheduled"].includes(value)) {
    return "bg-yellow-300";
  } else if (value === "in transit") {
    return "bg-purple-300";
  } else if (
    [
      "completed",
      "inuse",
      "active",
      "installed",
      "paid",
      "closed",
    ].includes(value)
  ) {
    return "bg-green-300";
  }

  return "";
}
