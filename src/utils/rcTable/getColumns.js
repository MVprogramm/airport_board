const getColumns = (onTablet = false) => {
  if (!onTablet) {
    return [
      {
        title: "Terminal",
        dataIndex: "terminal",
        key: "terminal",
        width: 108,
      },
      {
        title: "Local time",
        dataIndex: "localTime",
        key: "localTime",
        width: 120,
      },
      {
        title: "Destination",
        dataIndex: "destination",
        key: "destination",
        width: 191,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 200,
      },
      {
        title: "Airline",
        dataIndex: "airline",
        key: "airline",
        width: 204,
      },
      {
        title: "Flight",
        dataIndex: "flight",
        key: "flight",
        width: 300,
      },
    ]
  } else {
    return [
      {
        title: "col_1",
        dataIndex: "col_1",
        key: "col_1",
      },
      {
        title: "col_2",
        dataIndex: "col_2",
        key: "col_2",
      }
    ]
  };
};

export default getColumns;