import { useEffect, useMemo, useState, useCallback, useRef } from "react";

function EffectTest() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState({
    name: "asdf",
    ext: "png",
    type: "image/png",
  });

  useEffect(() => {
    console.log("Effect Hook Test");
  }, []);

  useEffect(() => {
    console.log("num " + num + " Change !");
    setName(num);
    setFile({ ...file, name: num });
  }, [num]);

  useEffect(() => {
    console.log("name " + name + " Change !");
  }, [name]);

  //   const increase = () => {
  //     setNum(num + 1);
  //   };

  const increaseCallback = useCallback(() => {
    setNum(num + 1);
  }, [num]);
  // 가입 > ID, PW, 이름, 나이, 성별, 지역
  // - input 함수를 만들어서 연결
  // - ID, PW, 이름, 나이, 성별, 지역 < state
  // - ID가 바뀌면 나머지의 함수는 Hook을 사용하지 않고 선언 했기에 다시 전부 선언된다
  // - 다시 선언하는 작업을 하지 않기 위해서 useCallback을 사용한다
  // - 최적화에 사용 > 최적화를 생각하지 않으면 쓸 필요는 없다.
  //   const tempNum = num + 10;

  const memoNum = useMemo(() => {
    return num + 10;
  }, [num]);

  const ref = useRef();
  return (
    <div>
      <button onClick={increaseCallback}>{memoNum}</button>
      <div
        ref={ref}
        onClick={() => {
          console.log(ref.current);
        }}
      >
        {name}
      </div>
      <div>{file.name + ". " + file.ext}</div>
    </div>
  );
}
export default EffectTest;
