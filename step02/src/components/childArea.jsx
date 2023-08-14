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
  const data = [...Array(2000).keys()];

  data.forEach(() => {  // 重い処理
    console.log('レンダリングされた！');
  });

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