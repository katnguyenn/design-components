import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";

addParameters({
  backgrounds: [
    { name: "Default theme", value: "#ffffff", default: true},
    {name: "Dark theme", value: "#050449"}
  ]
});



addDecorator(withContexts(contexts));
addDecorator(withKnobs)