"use client";
import { HoverCard, Button, Text, Group } from "@mantine/core";
import classes from "./HoverCardMain.module.css";

export function HoverCardMain() {
  return (
    <Group justify="center">
      <HoverCard
        className={classes["mantine-HoverCard-dropdown"]}
        width={280}
        shadow="md"
      >
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will
            be hidden once mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
