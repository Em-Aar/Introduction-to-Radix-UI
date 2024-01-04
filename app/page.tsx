import ADialog from "@/components/ADialog";
import AccordionDemo from "@/components/AccordionDemo";
import Employee from "@/components/Employee";
import { TextAnimation } from "@/components/TextAnimation";

export default function Home() {
  return (
    <main className="p-20">
      {/*By default, AccordionDemo is being displayed. comment it before using other components */}
      <AccordionDemo />

      {/* comment all other components. To use this, uncomment Theme, ThemePanel, and their imports in layout.tsx */}
      {/* <ADialog/> */}

      {/* Check out how to use Radix Styling options (Flex, Text, Heading, Avatar, Box and Card) */}
      {/* <Employee /> */}

      {/* Just a quick demo of TextAnimation using framer motion. make sure to install framer motion */}
      {/* <TextAnimation text="Hello Guys this is our animation" /> */}
    </main>
  );
}
