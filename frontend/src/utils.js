
export const formatDateTime = (dateTime) => {
    const DATE_OPTIONS = {
        year: "numeric",
        month: "short",
        day: "numeric",
      };
    return new Date(dateTime).toLocaleDateString(
        "en-US",
        DATE_OPTIONS
      );
}

