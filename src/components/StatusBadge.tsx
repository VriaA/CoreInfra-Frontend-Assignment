interface StatusBadgeProps {
  status: "Ready" | "In Progress" | "Acknowledged" | "Pending";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles = {
    Ready: {
      bg: "bg-[#ecfdf3]",
      border: "border-[#abefc6]",
      text: "text-[#067647]",
    },
    "In Progress": {
      bg: "bg-[#fffaeb]",
      border: "border-[#fedf89]",
      text: "text-[#b54708]",
    },
    Acknowledged: {
      bg: "bg-[#eff8ff]",
      border: "border-[#b2ddff]",
      text: "text-[#175cd3]",
    },
    Pending: {
      bg: "bg-[#f9fafb]",
      border: "border-[#eaecf0]",
      text: "text-[#344054]",
    },
  };
  const style = statusStyles[status];

  return (
    <div
      className={`inline-flex items-center rounded-2xl border px-2 py-[2px] ${style.bg} ${style.border}`}>
      <span
        className={`font-satoshi text-[10px] leading-[18px] font-medium ${style.text}`}>
        {status}
      </span>
    </div>
  );
}
