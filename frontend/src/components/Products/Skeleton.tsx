import { Card, Flex, Skeleton, Stack } from "@chakra-ui/react";
import { ReactElement } from "react";

export function CardSkeleton(): ReactElement {
    console.log("skeleton");
    
  return (
    <Card width="30%">
      <Stack margin="10px">
        <Skeleton height="100px" margin="10px" />
        <Skeleton height="18px" />
        <Skeleton height="10px" />
        <Skeleton height="10px" />
        <Skeleton height="10px" />
        <Flex gap={6} marginLeft={8}>
          <Skeleton height="10px" width="30%" />
          <Skeleton height="10px" width="30%" />
        </Flex>
      </Stack>
    </Card>
  );
}
