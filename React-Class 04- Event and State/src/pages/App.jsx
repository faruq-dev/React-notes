import Button from "../components/Button";
import Toolbar from "../components/Toolbar";
import Counter from "../components/Counter";
import CounterV2 from "../components/CounterV2";

const App = () => {
  function clickHandler(action) {
    console.log(`${action} Clicked`);
    alert(`${action} Clicked`);
  }

  return (
    <>
      <h1 className="text-4xl font-bold bg-[#aec3b0] text-center py-8">
        This is our homepage
      </h1>
      <div className="container-div justify-center py-28 gap-6">
        <Button click={()=>clickHandler('Add Me')}>Add Me</Button>
        <Button click={()=>clickHandler('Play Now')}>Play Now</Button>
        <Button click={()=>clickHandler('Sign Up')}>Sign Up</Button>
      </div>

      <div className="container-div justify-center py-12 gap-6 bg-slate-400 ">
        <Toolbar />
      </div>

      <div className="container-div py-24 gap-6">
        <Counter/>
        <CounterV2/>
      </div>
    </>
  );
};

export default App;
