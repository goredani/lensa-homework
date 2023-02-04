import { PromotionCard } from "../Components/PromotionCard/PromotionCard";

export default {
  title: "Lensa Design System/Compositions/Promotion Card",
  component: PromotionCard,
  argTypes: {
    image: { control: "select", options: ["Bell", "Puzzle", "Rocket"] },
    h2Visible: { control: "boolean" },
    h2Text: { control: "text", if: { arg: "h2Visible" } },
    position_location: {
      control: "boolean",
    },
    company_general: {
      control: "text",
      if: { arg: "position_location", eq: false },
    },
    position: {
      control: "text",
      if: { arg: "position_location", eq: true },
    },
    location: {
      control: "text",
      if: { arg: "position_location", eq: true },
    },
    bodyCopyVisible: { control: "boolean" },
    bodyCopySize: {
      control: "radio",
      options: ["Small", "Regular"],
      if: { arg: "bodyCopyVisible" },
    },
    bodyCopyText: { control: "text", if: { arg: "bodyCopyVisible" } },
    buttonVisible: { control: "boolean" },
    buttonText: { control: "text", if: { arg: "buttonVisible" } },
    linkVisible: { control: "boolean" },
    linkText: { control: "text", if: { arg: "linkVisible" } },
  },
};

const Template = (args) => <PromotionCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "Bell",
  h2Visible: true,
  h2Text: "Job alerts from",
  position_location: false,
  company_general: "General Electric Company",
  position: "Financial Analyst",
  location: "New York",
  bodyCopyVisible: true,
  bodyCopySize: "Regular",
  bodyCopyText: "Never miss new job openings",
  buttonVisible: true,
  buttonText: "Get Free Job Alerts",
  linkVisible: true,
  linkText: "No, I'm not interested",
};
