import House from "./House";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";
import Spread from "./spread";
import { TemplateLiterals } from "./template-literals";
import VariableTypes from "./variable-types";
import VariablesAndConstants from "./variables-and-constants";
import { WorkingWithArrays } from "./working-with-arrays";
import { WorkingWithFuncitons } from "./working-with-funcitons";

function JavaScript() {
   console.log('Hello World!');
   return (
      <div>
         <h2>JavaScript</h2>
         <VariablesAndConstants />
         <VariableTypes />
         <WorkingWithFuncitons />
         <WorkingWithArrays />
         <TemplateLiterals />
         <House />
         <Spread />
         <Destructing />
         <FunctionDestructing />.
      </div>
   );
}
export default JavaScript