import { Button } from "../Components/UI/Button/Button";

export default {
  title: "Lensa Design System/UI/Button",
  component: Button,
  argTypes: {
    buttonText: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: "Get Free Job Alerts",
};
