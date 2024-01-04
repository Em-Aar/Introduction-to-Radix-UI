
import {
  Avatar,
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Text
} from "@radix-ui/themes";

export default function Employee() {
  return (
    <>
      <Card className=" max-w-xs ">
        <Card>
          <Flex justify={"center"} align={"center"} gap={"4"} className=" ">
            <Avatar
              src={
                "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              }
              fallback="MR"
              size={"6"}
              alt={"profile picture"}
              className="rounded-full "
            />
            <Box>
              <Flex
                direction={"column"}
                justify={"center"}
                align={"start"}
                gap={"0"}
              >
                <Heading size={"5"}> BONG CHA</Heading>
                <Heading size={"2"}>Marketing Manager</Heading>
              </Flex>
              <Flex justify={"between"} align={"end"} mt={"4"}>
                <Badge>Active</Badge>
                <Avatar src="/united states.svg" fallback="US" size={"1"} />
              </Flex>
            </Box>
          </Flex>
        </Card>
        <Flex direction={"column"} gap={"2"} py={"4"} px={"6"}>
          <Box>
            <Flex justify={"between"} align={"center"}>
              <Heading color="plum" size={"3"}>
                Phone:
              </Heading>
              <Text size={"2"} align={"center"}>
                +x (xxx) xxx-xxxx
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex justify={"between"} align={"center"}>
              <Heading color="plum" size={"2"}>
                Email:
              </Heading>
              <Text size={"2"} align={"center"}>
                abc@example.com
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex justify={"between"} align={"center"}>
              <Heading color="plum" size={"2"}>
                Department:
              </Heading>
              <Text size={"2"} align={"center"}>
                Marketing
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex justify={"between"} align={"center"}>
              <Heading color="plum" size={"2"}>
                Gender:
              </Heading>
              <Text size={"2"} align={"center"}>
                Female
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </>
  );
}
