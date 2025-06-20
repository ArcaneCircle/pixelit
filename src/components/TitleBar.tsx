interface Props {
  children: React.ReactNode;
}

export default function TitleBar({ children }: Props) {
  const barStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.4em 0.8em",
    borderBottom: "1px solid hsl(240, 16%, 23%)",
    position: "sticky" as "sticky",
    top: 0,
    backgroundColor: "hsl(240, 16%, 11%)",
  };
  const imgStyle = {
    width: "1.4em",
    height: "auto",
  };

  return (
    <div style={barStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
        <img src="./icon.png" style={imgStyle} />
        <span className="noselect" style={{ fontSize: "1.4em" }}>
          Pixel It!
        </span>
      </div>
      {children}
    </div>
  );
}
