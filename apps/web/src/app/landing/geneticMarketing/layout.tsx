// import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const step = {
  //   s1: {},
  //   s2: {},
  //   s3: {},
  //   s4: {},
  //   s5: {},
  // };

  // const [currentState, setCurrentState] = useState(step.s1);

  // const [values, setValues] = useState({ phone: '', status: '', age: 0 });

  return (
    <div className="w-full max-w-[500px] relative">
      {/* {currentState === step.s1 && <S1 onValue={v => { setValues({...values, phone: v})}} />  }
      {currentState === step.s1 && <S1 onValue={v => { setValues({...values, phone: v})}} />} */}
      <>{children}</>
    </div>
  );
};

export default Layout;
