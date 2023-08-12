const style = {
  width: "100",
  height: "200px",
  backgroundColor: "#ccffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}


const ChildArea = (props) => {
  const { visible } = props;
  return (
    <>
      {visible ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  )
}

export default ChildArea